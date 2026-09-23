import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import ts from 'typescript'

// Nạp file dữ liệu TypeScript giống topic-data.test.mjs.
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
const { didiSlides } = await import(load('deck'))
const didi = await import(load('didi'))

test('bài Didi đúng 9 slide theo thứ tự và người trình bày của script v5', () => {
  assert.deepEqual(didi.didiPages.map(page => page.key), ['open', 'scale', 'tiers', 'screens', 'traffic', 'driver', 'carbon', 'ev', 'robotaxi'])
  assert.deepEqual(didi.didiPages.map(page => page.presenter).join(''), 'BìnhBìnhBìnhBìnhSâmSâmSâmSâmBình')
  const slides = didiSlides()
  assert.equal(slides.length, 9)
  assert.ok(slides.every(slide => slide.kind === 'didi' && slide.subjectId === 'didi'), 'mọi slide Didi phải gắn vào ghim didi')
})

test('bốn slide có phần ẩn sau nút bấm', () => {
  assert.deepEqual(didi.didiPages.filter(page => page.reveal).map(page => page.key), ['tiers', 'traffic', 'driver', 'carbon'])
  assert.ok(!/mười/i.test(didi.didiTiers.titleBefore), 'tiêu đề trước khi lật không được lộ đáp án')
})

test('mọi slide có số liệu ghi nguồn ở chân và nguồn phân giải được', () => {
  for (const page of didi.didiPages) {
    for (const id of page.sourceIds) assert.doesNotThrow(() => source(id), `${page.key}: thiếu nguồn "${id}"`)
    if (page.key !== 'open') assert.ok((page.source && page.source.length > 20) || (page.cite && page.sourceIds.length > 0), `${page.key} thiếu dòng nguồn ở chân slide`)
  }
})

test('trích dẫn [n] trên slide của Sâm trỏ đúng nguồn của trang, và nguồn nào cũng được trích', () => {
  const data = { traffic: didi.didiTraffic, driver: didi.didiDriver, carbon: didi.didiCarbon, ev: didi.didiEv }
  const collect = value => Array.isArray(value) ? value.flatMap(collect)
    : value && typeof value === 'object' ? Object.entries(value).flatMap(([key, inner]) => key === 'cite' ? inner : collect(inner)) : []
  for (const [key, block] of Object.entries(data)) {
    const page = didi.didiPages.find(item => item.key === key)
    assert.ok(page.cite, `${key} phải dùng trích dẫn đánh số`)
    const cited = new Set(collect(block))
    for (const id of cited) assert.ok(page.sourceIds.includes(id), `${key}: trích "${id}" nhưng không có trong sourceIds`)
    for (const id of page.sourceIds) assert.ok(cited.has(id), `${key}: nguồn "${id}" ở chân slide nhưng không ý nào trích`)
  }
})

test('ảnh dùng trong bài Didi đều có trong public/', () => {
  const paths = [...Object.values(didi.didiPhotos).map(photo => photo.src), '/media/didi/logo.png']
  for (const path of paths) assert.ok(existsSync(new URL(`../public${path}`, import.meta.url)), `thiếu ảnh ${path}`)
})

test('vòng khoanh và vùng cắt nằm trong ảnh', () => {
  const rects = [
    ...didi.didiTiers.pick.rings, didi.didiTiers.route.crop,
    ...didi.didiScreens.waiting.highlights.map(item => item.ring), didi.didiScreens.receipt.carbon.ring,
    didi.didiTraffic.evidence.crop, didi.didiCarbon.crop, didi.didiCarbon.ring,
  ]
  for (const rect of rects) {
    assert.ok(rect.x >= 0 && rect.y >= 0 && rect.w > 0 && rect.h > 0, JSON.stringify(rect))
    assert.ok(rect.x + rect.w <= 1.0001 && rect.y + rect.h <= 1.0001, `vượt khỏi ảnh: ${JSON.stringify(rect)}`)
  }
})

test('các lỗi đã đính chính trong script v5 không quay lại', () => {
  const text = readFileSync(new URL('../src/data/didi.ts', import.meta.url), 'utf8')
  assert.ok(!/550 triệu|400 thành phố/.test(text), 'số 550 triệu người dùng / 400 thành phố đã bị bỏ')
  assert.ok(!/cả hai qua Uber/.test(text), 'Madrid qua Uber, Zagreb với Verne — không phải cả hai qua Uber')
  assert.ok(!/(sáu|6) tầng giá/i.test(text), 'ảnh thật cho thấy 10 hạng xe')
  assert.match(text, /31\/8\/2026/, 'mốc Didi R2 là 31/8/2026')
})
