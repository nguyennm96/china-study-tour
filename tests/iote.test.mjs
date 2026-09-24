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
const { ioteSlides, placeSlides } = await import(load('deck'))
const iote = await import(load('iote'))
const { places } = await import(load('places'))

const pageId = slide => `${slide.kind}:${slide.page}`

test('ghim IOTE là bản chính: thứ tự trang của VinhTien, chèn "AI là máy móc" trước trang ảnh', () => {
  const pin = placeSlides().filter(slide => slide.subjectId === 'place-iote')
  assert.deepEqual(pin.map(pageId), [
    'place:overview', 'place:features', 'hall9:basics', 'hall9:ahamove', 'iote:machines', 'place:gallery', 'place:visit',
  ])
})

test('deck /iote/ chạy đúng dãy trang của ghim, chỉ khác nhãn chương', () => {
  const pin = placeSlides().filter(slide => slide.subjectId === 'place-iote')
  const deck = ioteSlides()
  assert.deepEqual(deck.map(pageId), pin.map(pageId))
  assert.deepEqual(deck.map(slide => slide.title), pin.map(slide => slide.title))
  assert.ok(deck.every(slide => slide.chapter && slide.chapter !== 'Điểm dừng'), 'thanh tiến trình cần nhãn chương riêng cho từng trang')
})

test('trang AI là máy móc có nguồn phân giải được và ghi nguồn ở chân', () => {
  for (const page of iote.iotePages) {
    for (const id of page.sourceIds) assert.doesNotThrow(() => source(id), `${page.key}: thiếu nguồn "${id}"`)
    assert.ok(page.source.length > 20, `${page.key} thiếu dòng nguồn ở chân slide`)
  }
})

test('quy mô ở trang Tổng quan: 1.000+ là doanh nghiệp, không phải gian hàng', () => {
  const overview = places.find(place => place.id === 'place-iote').metrics
  assert.ok(overview.some(metric => metric.value === '1.000+' && metric.unit === 'doanh nghiệp'))
  assert.ok(!overview.some(metric => metric.unit === 'gian hàng'), 'slide Tổng quan của ghim IOTE không được ghi 1.000 gian hàng')
})

test('ước lượng của đoàn được ghi rõ là ước lượng', () => {
  assert.match(iote.ioteMachines.estimate, /ước lượng/i)
  assert.match(iote.iotePages.find(page => page.key === 'machines').source, /không phải số thống kê/)
})

test('ảnh dùng trong trang AI là máy móc đều có trong public/', () => {
  for (const photo of Object.values(iote.iotePhotos)) assert.ok(existsSync(new URL(`../public${photo.src}`, import.meta.url)), `thiếu ${photo.src}`)
})

test('route /iote/ không vỡ khi refresh trên Netlify', () => {
  const redirects = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8')
  assert.match(redirects, /^\/iote\/\* \/index\.html 200$/m)
})
