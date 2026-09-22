import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import ts from 'typescript'

// Nạp các file dữ liệu TypeScript bằng cách nội tuyến import tương đối thành data URL.
const cache = new Map()
const load = name => {
  if (cache.has(name)) return cache.get(name)
  const code = readFileSync(new URL(`../src/data/${name}.ts`, import.meta.url), 'utf8')
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
  const resolved = js.replace(/from '\.\/([\w-]+)'/g, (_, dep) => `from '${load(dep)}'`)
  const url = `data:text/javascript;base64,${Buffer.from(resolved).toString('base64')}`
  cache.set(name, url)
  return url
}
const { sources, source } = await import(load('sources'))
const { droneData, meituanData, robotData } = await import(load('topicData'))
const { meituanFlow, robotFlow } = await import(load('mechanisms'))
const { subjects, takeaways } = await import(load('presentation'))
const { subjectLocations } = await import(load('subjectLocations'))
const { buildPresentation, classicDeck, deckRail } = await import(load('deck'))

const topics = { drone: droneData, robots: robotData, meituan: meituanData }
const allMetrics = data => [data.hero, ...data.metrics, ...(data.context?.metrics ?? [])]
const allCharts = Object.values(topics).flatMap(data => data.charts)
const parseDisplay = display => Number(String(display).replace(/[≥×\s]/g, '').replace(/\./g, '').replace(',', '.'))

test('mọi sourceId được tham chiếu đều có trong sổ nguồn', () => {
  const referenced = [
    ...Object.values(topics).flatMap(data => [
      ...allMetrics(data).map(metric => metric.sourceId),
      ...data.charts.flatMap(chart => chart.sourceIds),
      ...(data.specs?.rows ?? []).map(row => row.sourceId),
    ]),
    ...[robotFlow, meituanFlow].flatMap(flow => [
      ...flow.nodes.flatMap(node => (node.metric ? [node.metric.sourceId] : [])),
      ...flow.bands.flatMap(band => (band.sourceId ? [band.sourceId] : [])),
    ]),
  ]
  assert.ok(referenced.length > 0, 'phải có số liệu tham chiếu nguồn')
  for (const id of new Set(referenced)) assert.doesNotThrow(() => source(id), `thiếu nguồn "${id}"`)
})

test('mỗi nguồn có link https, phân loại hợp lệ và ghi rõ phạm vi', () => {
  const ids = new Set()
  for (const item of sources) {
    assert.ok(!ids.has(item.id), `id nguồn bị trùng: ${item.id}`)
    ids.add(item.id)
    assert.match(item.url, /^https:\/\//, `${item.id} không phải link https`)
    assert.ok(['primary', 'secondary', 'trip'].includes(item.tier), `${item.id} có tier lạ`)
    assert.ok(item.scope && item.scope.length > 30, `${item.id} thiếu ghi chú phạm vi`)
    assert.ok(item.publisher && item.title && item.date, `${item.id} thiếu thông tin cơ bản`)
  }
})

test('mọi số liệu đều có mốc thời gian và nhãn', () => {
  for (const [id, data] of Object.entries(topics)) {
    for (const metric of allMetrics(data)) {
      assert.ok(metric.asOf?.trim(), `${id}: "${metric.label}" thiếu asOf`)
      assert.ok(metric.label?.trim().length > 10, `${id}: nhãn quá ngắn cho giá trị ${metric.value}`)
      assert.ok(metric.value?.trim(), `${id}: "${metric.label}" thiếu giá trị`)
    }
  }
})

test('chuỗi hiển thị của mỗi điểm dữ liệu khớp với giá trị dùng để vẽ', () => {
  for (const chart of allCharts) {
    for (const point of chart.points) {
      const parsed = parseDisplay(point.display)
      assert.ok(Number.isFinite(parsed), `${chart.id}: không đọc được display "${point.display}"`)
      assert.ok(Math.abs(parsed - point.value) < 0.05, `${chart.id}: display "${point.display}" lệch giá trị ${point.value}`)
    }
    if (chart.total) {
      const parsed = parseDisplay(chart.total.display)
      // Tổng do nguồn công bố có thể lệch tổng các phần đã làm tròn; dung sai theo độ lớn chứ không cố định.
      const slack = Math.max(0.15, chart.total.value * 0.0005)
      assert.ok(Math.abs(parsed - chart.total.value) <= slack, `${chart.id}: total hiển thị "${chart.total.display}" lệch ${chart.total.value}`)
    }
  }
})

test('thanh xếp lớp và bảng có tổng đều cộng khớp', () => {
  const stack = allCharts.find(chart => chart.id === 'meituan-revenue')
  const stackSum = stack.points.reduce((sum, point) => sum + point.value, 0)
  assert.ok(Math.abs(stackSum - stack.total.value) < 0.01, `tổng hai mảng ${stackSum} không khớp ${stack.total.value}`)
  assert.match(stack.caveat, /làm tròn/, 'chênh lệch làm tròn phải được nói rõ trong caveat')

})

test('số thị trường robot khách sạn giữ đúng phạm vi và mốc dự báo', () => {
  const chart = allCharts.find(chart => chart.id === 'hotel-robot-market')
  assert.ok(chart)
  assert.deepEqual(chart.points.map(point => point.value), [.7, 2.13])
  assert.match(chart.points[0].label, /2025.*ước lượng/)
  assert.match(chart.points[1].label, /2030.*dự báo/)
  assert.match(chart.title, /toàn cầu/)
  assert.deepEqual(chart.sourceIds, ['hotel-robot-team-doc'])
  assert.match(chart.caveat, /không phải số riêng Trung Quốc/)
  assert.match(chart.caveat, /Chưa kiểm chứng/)
  assert.ok(!allCharts.some(chart => ['robot-fleet', 'robot-growth'].includes(chart.id)), 'không đưa số xe đường phố vào chương robot khách sạn')
})

test('chuỗi luỹ kế theo thời gian không được giảm', () => {
  const cumulative = allCharts.find(chart => chart.id === 'drone-cumulative')
  for (let index = 1; index < cumulative.points.length; index++) {
    assert.ok(cumulative.points[index].value >= cumulative.points[index - 1].value, 'đơn luỹ kế không thể giảm')
  }
})

test('mỗi biểu đồ có câu hỏi, cách đọc và nguồn; so sánh khác phạm vi phải có caveat', () => {
  for (const chart of allCharts) {
    assert.ok(chart.question?.endsWith('?'), `${chart.id}: thiếu câu hỏi chủ đề`)
    assert.ok(chart.reading?.length > 40, `${chart.id}: thiếu câu đọc biểu đồ`)
    assert.ok(chart.sourceIds.length > 0, `${chart.id}: thiếu nguồn`)
    assert.ok(chart.axisLabel?.trim(), `${chart.id}: thiếu nhãn trục`)
    if (chart.sourceIds.length > 1) assert.ok(chart.caveat, `${chart.id}: gộp nhiều nguồn thì phải ghi giới hạn`)
    if (chart.kind === 'stack') assert.ok(chart.points.length >= 2 && chart.points.length <= 3, `${chart.id}: thanh xếp lớp chỉ nên 2–3 lớp`)
  }
})

test('mỗi chủ đề khai báo đủ phần trình bày và ghi rõ bằng chứng bị loại', () => {
  assert.equal(subjects.length, 3)
  for (const subject of subjects) {
    assert.ok(subjectLocations[subject.id], `${subject.id} thiếu toạ độ ghim`)
    assert.ok(existsSync(new URL(`../public/icons/subjects/${subject.id}.svg`, import.meta.url)), `${subject.id} thiếu icon ghim`)
    if (subject.id !== 'robots') assert.ok(subject.experience.moments.length >= 2, `${subject.id} cần ít nhất hai khung tư liệu`)
    else assert.equal(subject.experience.moments.length, 0, 'robot khách sạn không được dùng media rider làm bằng chứng')
    assert.equal(subject.insights.length, 3)
    assert.ok(subject.data.charts.length >= (subject.id === 'robots' ? 1 : 2), `${subject.id} thiếu biểu đồ theo nội dung nguồn`)
    assert.ok(subject.data.fieldNotes?.excluded?.length > 40, `${subject.id} phải ghi rõ phần bằng chứng bị loại`)
    if (subject.experience.moments.length < 4) assert.ok(subject.experience.note, `${subject.id}: cuộn phim thiếu khung thì phải có ghi chú giải thích`)
  }
})

test('hai mốc thời gian chưa rõ phạm vi của đoàn không được dùng làm số liệu', () => {
  const numeric = allCharts.flatMap(chart => chart.points.map(point => point.value))
  const metrics = Object.values(topics).flatMap(data => allMetrics(data).map(metric => metric.value))
  assert.ok(!numeric.includes(4) && !numeric.includes(60), 'mốc ~4 phút / ~60 phút chưa xác nhận, không được vẽ')
  assert.ok(!metrics.some(value => /^~?(4|60) phút/.test(value)), 'mốc chưa xác nhận không được làm thẻ số liệu')
  assert.match(droneData.fieldNotes.excluded, /4 phút[\s\S]*60 phút/, 'lý do loại hai mốc phải được ghi lại')
})

test('mỗi takeaway trỏ về một chủ đề đang tồn tại và có câu hỏi thảo luận', () => {
  assert.equal(takeaways.length, 4)
  for (const takeaway of takeaways) {
    assert.ok(subjects.some(subject => subject.id === takeaway.subject), `takeaway "${takeaway.word}" trỏ sai chủ đề`)
    assert.ok(takeaway.question.endsWith('?'), `takeaway "${takeaway.word}" thiếu câu hỏi`)
    assert.ok(takeaway.example.length > 40, `takeaway "${takeaway.word}" thiếu ví dụ cụ thể`)
  }
})

test('sơ đồ cơ chế nói rõ chỗ còn thiếu số', () => {
  for (const flow of [robotFlow, meituanFlow]) {
    assert.equal(flow.nodes.length, flow === robotFlow ? 6 : 5)
    assert.equal(flow.bands.length, 2)
    assert.ok(flow.gap.length > 80, 'phải ghi cụ thể những số liệu chưa tìm được')
    assert.ok(flow.nodes.some(node => node.actor === 'human'), 'sơ đồ phải cho thấy chặng nào còn là người')
  }
})

test('bài chia sẻ là một dãy slide phẳng: mở đầu, ba chủ đề, phần mang về', () => {
  const deck = buildPresentation()
  assert.equal(deck[0].kind, 'team', 'slide đầu là poster mở đầu')
  assert.equal(deck[1].kind, 'roster', 'slide hai là danh sách thành viên')
  assert.equal(deck[2].kind, 'itinerary', 'slide ba là bản đồ hành trình')
  // Suy từ cấu phần thay vì số cố định, để thêm/bớt slide không phải sửa hai chỗ.
  const perSubject = subjects.reduce((sum, subject) => sum + (subject.id === 'robots' ? 8 : 7), 0)
  assert.equal(deck.length, 3 + perSubject + takeaways.length)
  assert.ok(!deck.some(slide => slide.kind === 'insights' || slide.kind === 'sources'), 'hai slide đã bỏ không được quay lại')

  for (const subject of subjects) {
    const own = deck.filter(slide => slide.subjectId === subject.id)
    assert.equal(own.length, subject.id === 'robots' ? 8 : 7, `${subject.id} có sai số slide sau khi thêm liên hệ riêng`)
    assert.equal(own[0].kind, 'title')
    const references = own.filter(slide => slide.kind === 'ahamove' || (slide.kind === 'hotel-robot' && slide.page === 'ahamove'))
    assert.equal(references.length, 1, `${subject.id} cần đúng một slide liên hệ Ahamove`)
    assert.equal(own.at(-1), references[0], `${subject.id} phải kết bằng liên hệ Ahamove`)
    assert.match(references[0].title, /Ahamove/)
    if (subject.id === 'robots') {
      assert.deepEqual(own.slice(1).map(slide => slide.page), ['journey', 'navigation', 'elevator', 'dispatch', 'infrastructure', 'market', 'ahamove'])
      assert.ok(own.slice(1).every(slide => slide.kind === 'hotel-robot'))
    } else {
      assert.equal(own[1].kind, 'experience')
      assert.equal(own.at(-2).kind, 'mechanism', `${subject.id} đặt liên hệ ngay sau slide cơ chế`)
      const dataSlides = own.filter(slide => ['data-summary', 'data-context'].includes(slide.kind))
      assert.deepEqual(dataSlides.map(slide => slide.kind), ['data-summary', 'data-context'])
      assert.deepEqual(dataSlides.map(slide => slide.chartIndex).sort(), subject.data.charts.map((_, index) => index), 'các biểu đồ phải được giữ đủ, mỗi biểu đồ đúng một lần')
    }
  }

  assert.ok(!deck.some(slide => slide.kind === 'ahamove' && !slide.subjectId), 'không còn slide liên hệ chung ở cuối bài')
  const tail = deck.slice(-takeaways.length)
  assert.ok(tail.every(slide => slide.kind === 'takeaway'), 'phần mang về nằm ở cuối')
  tail.forEach((slide, index) => assert.equal(slide.title, takeaways[index].title))

  for (const slide of deck) {
    assert.ok(slide.kicker?.trim() && slide.title?.trim(), `slide ${slide.kind} thiếu kicker hoặc tiêu đề`)
    assert.ok(slide.chapter?.trim(), `slide ${slide.kind} thiếu nhãn chương`)
  }

  const rail = deckRail(deck)
  assert.equal(rail.length, 7, 'rail có 7 nhóm: mở đầu, hành trình, thành viên, ba chủ đề, mang về')
  assert.equal(rail.reduce((sum, group) => sum + group.count, 0), deck.length, 'rail phải phủ hết số slide')
  assert.deepEqual(rail.map(group => group.label), ['Mở đầu', 'Thành viên', 'Hành trình', 'Drone', 'Robot', 'Meituan', 'Key takeaways'])
  assert.equal(new Set(rail.map(group => group.label)).size, rail.length, 'không nhãn nào lặp lại trên rail')
})

test('bài tuyến tính bỏ ba chủ đề vì chúng đã nằm trong ghim bản đồ', () => {
  const deck = classicDeck()
  assert.deepEqual(deck.map(slide => slide.kind), ['team', 'roster', 'itinerary', 'takeaways'])
  assert.ok(!deck.some(slide => slide.subjectId), 'không slide chủ đề nào còn lặp lại trong bài tuyến tính')
  assert.deepEqual(deckRail(deck).map(group => group.label), ['Mở đầu', 'Thành viên', 'Hành trình', 'Key takeaways'])
  // Bản đầy đủ vẫn phải còn nguyên: bản đồ lấy slide chủ đề từ đây.
  const full = buildPresentation()
  for (const id of ['drone', 'robots', 'meituan']) {
    assert.ok(full.some(slide => slide.subjectId === id), `${id} phải còn trong buildPresentation() để ghim bản đồ dùng`)
  }
})

test('nhãn trên mặt slide đủ ngắn; phần diễn giải dài giữ trong tầng dữ liệu', () => {
  for (const [id, data] of Object.entries(topics)) {
    for (const metric of allMetrics(data)) {
      assert.ok(metric.label.length <= 42, `${id}: nhãn "${metric.label}" quá dài cho một slide (${metric.label.length})`)
    }
    for (const chart of data.charts) {
      assert.ok(chart.reading.length <= 130, `${id}/${chart.id}: câu đọc quá dài cho mặt slide`)
      assert.ok(chart.caveat === undefined || chart.caveat.length > 60, `${id}/${chart.id}: caveat phải đủ chi tiết vì nó là bản ghi giới hạn của số liệu`)
    }
  }
})


test('chương robot và kết luận theo tài liệu giao phòng, không dùng số liệu đường phố', () => {
  const robot = subjects.find(subject => subject.id === 'robots')
  assert.match(robot.title, /phòng/)
  assert.match(robot.label, /Khách sạn/)
  assert.match(robot.source.url, /17bI67RGsjEB8GECcz_JJnRICAKicv2CofpdORjiz77Y/)
  assert.match(robot.cover, /hotel-robot/)
  const text = JSON.stringify({ title: robot.title, description: robot.description, insights: robot.insights, hero: robot.data.hero, metrics: robot.data.metrics, charts: robot.data.charts, robotFlow, takeaways })
  assert.doesNotMatch(text, /120 km|1\.168|5\.000\.000|9,3 lần|robot-fleet|robot-growth/)
  assert.equal(robotFlow.nodes.length, 6)
  assert.match(robotFlow.nodes[2].detail, /Nhân viên/)
  assert.match(robotFlow.nodes[3].detail, /thang/)
  assert.match(robotData.fieldNotes.excluded, /Không dùng/)
})
