import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import ts from 'typescript'

// Nạp file dữ liệu TypeScript giống didi.test.mjs.
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
const { source } = await import(load('sources'))
const { ioteSlides } = await import(load('deck'))
const iote = await import(load('iote'))
const { places } = await import(load('places'))

test('bài IOTE đúng 5 slide theo thứ tự của script, Tiến trình bày', () => {
  assert.deepEqual(iote.iotePages.map(page => page.key), ['open', 'scale', 'machines', 'shelf', 'takeaway'])
  assert.equal(iote.ioteIntro.presenter, 'Tiến')
  const slides = ioteSlides()
  assert.equal(slides.length, 5)
  assert.ok(slides.every(slide => slide.kind === 'iote' && slide.subjectId === 'iote'))
})

test('mọi slide có nguồn phân giải được, slide có số liệu ghi nguồn ở chân', () => {
  for (const page of iote.iotePages) {
    for (const id of page.sourceIds) assert.doesNotThrow(() => source(id), `${page.key}: thiếu nguồn "${id}"`)
    if (page.key !== 'open') assert.ok(page.source && page.source.length > 20, `${page.key} thiếu dòng nguồn ở chân slide`)
  }
})

test('quy mô khớp trang ban tổ chức: 1.000+ là doanh nghiệp, không phải gian hàng', () => {
  const labels = iote.ioteScale.stats.map(stat => `${stat.value} ${stat.label}`)
  assert.ok(labels.some(text => /1\.000\+ doanh nghiệp/.test(text)))
  const overview = places.find(place => place.id === 'place-iote').metrics
  assert.ok(!overview.some(metric => metric.unit === 'gian hàng'), 'slide Tổng quan của ghim IOTE không được ghi 1.000 gian hàng')
})

test('ước lượng của đoàn được ghi rõ là ước lượng', () => {
  assert.match(iote.ioteMachines.estimate, /ước lượng/i)
  assert.match(iote.iotePages.find(page => page.key === 'machines').source, /không phải số thống kê/)
  assert.match(iote.iotePages.find(page => page.key === 'shelf').source, /ước tính/)
})

test('ảnh minh hoạ không chụp tại IOTE phải nói rõ trong alt và chú thích, kèm credit', () => {
  for (const key of ['pda', 'rfid']) {
    const photo = iote.iotePhotos[key]
    assert.match(photo.alt, /không chụp tại IOTE/, `${key}: alt phải nói không chụp tại IOTE`)
    assert.ok(photo.credit && /CC/.test(photo.credit), `${key}: thiếu credit và giấy phép`)
  }
  assert.match(iote.ioteShelf.sampleNote, /không chụp tại IOTE/)
})

test('slide mang về là đề xuất thảo luận, không phải tính năng đã có', () => {
  assert.match(iote.ioteTakeaway.tag, /đề xuất/i)
  const text = JSON.stringify(iote.ioteTakeaway)
  assert.ok(!/Ahamove (sẽ|đã|đang)/.test(text), 'không trình bày như việc Ahamove đang làm hoặc sẽ làm')
})

test('ảnh và clip dùng trong bài IOTE đều có trong public/', () => {
  const paths = [...Object.values(iote.iotePhotos).map(photo => photo.src), iote.ioteVideo.src, iote.ioteVideo.poster]
  for (const path of paths) assert.ok(existsSync(new URL(`../public${path}`, import.meta.url)), `thiếu ${path}`)
})

test('route /iote/ không vỡ khi refresh trên Netlify', () => {
  const redirects = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8')
  assert.match(redirects, /^\/iote\/\* \/index\.html 200$/m)
})
