import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync(new URL('../src/data/tourNavigation.ts', import.meta.url), 'utf8')
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const { parseSlideRoute, slideHash } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)
const TOTAL = 30

test('đường dẫn chia sẻ đánh số từ 1 và quay lại đúng slide', () => {
  for (const index of [0, 1, 14, TOTAL - 1]) {
    assert.equal(parseSlideRoute(slideHash(index), TOTAL), index)
  }
  assert.equal(slideHash(0), '#1')
  assert.equal(slideHash(TOTAL - 1), `#${TOTAL}`)
})

test('đường dẫn hỏng hoặc rỗng đều về slide đầu', () => {
  for (const hash of ['', '#', '#team', '#subjects/drone/2', '#abc', '#NaN', '#1.5']) {
    assert.equal(parseSlideRoute(hash, TOTAL), 0)
  }
})

test('số slide ngoài dải bị kẹp về hai đầu', () => {
  assert.equal(parseSlideRoute('#0', TOTAL), 0)
  assert.equal(parseSlideRoute('#-4', TOTAL), 0)
  assert.equal(parseSlideRoute('#999', TOTAL), TOTAL - 1)
  assert.equal(parseSlideRoute(`#${TOTAL + 1}`, TOTAL), TOTAL - 1)
})
