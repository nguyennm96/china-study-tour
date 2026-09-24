import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const cache = new Map()
const load = name => {
  if (cache.has(name)) return cache.get(name)
  const source = readFileSync(new URL(`../src/data/${name}.ts`, import.meta.url), 'utf8')
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
  const resolved = js.replace(/from '\.\/([\w-]+)'/g, (_, dep) => `from '${load(dep)}'`)
  const url = `data:text/javascript;base64,${Buffer.from(resolved).toString('base64')}`
  cache.set(name, url)
  return url
}
const { parseAtlasRoute, atlasHash } = await import(load('atlas'))
const { atlasChapters, atlasChapterCounts } = await import(load('atlasDeck'))
const { buildPresentation } = await import(load('deck'))

test('V2 preserves every original slide once, in presentation order, including the two opening slides', () => {
  assert.deepEqual(Object.values(atlasChapters).flat(), buildPresentation())
  assert.deepEqual(atlasChapterCounts, { team: 4, drone: 5, robots: 8, meituan: 7, takeaways: 4 })
  assert.deepEqual(atlasChapters.team.map(slide => slide.kind), ['team', 'recap', 'roster', 'itinerary'])
  for (const id of ['drone', 'robots', 'meituan']) assert.match(atlasChapters[id].at(-1).kicker, /Ahamove/)
})

test('entry starts with team; map and previews remain distinct from story deep links', () => {
  assert.deepEqual(parseAtlasRoute('', atlasChapterCounts), { chapter: 'team', page: 0 })
  assert.deepEqual(parseAtlasRoute('#map', atlasChapterCounts), { chapter: null, page: null })
  assert.deepEqual(parseAtlasRoute('#robots', atlasChapterCounts), { chapter: 'robots', page: null })
  for (const [chapter, count] of Object.entries(atlasChapterCounts)) {
    for (let page = 0; page < count; page++) assert.deepEqual(parseAtlasRoute(atlasHash(chapter, page), atlasChapterCounts), { chapter, page })
  }
})

test('out-of-range and malformed deep links cannot access missing slide data', () => {
  assert.deepEqual(parseAtlasRoute('#drone/999999999999999999999999999', atlasChapterCounts), { chapter: 'drone', page: 4 })
  assert.deepEqual(parseAtlasRoute('#robots/0', atlasChapterCounts), { chapter: 'robots', page: 0 })
  for (const hash of ['#wrong/1', '#drone/NaN', '#robots/-1', '#drone/1.5', '#meituan/2/3']) assert.deepEqual(parseAtlasRoute(hash, atlasChapterCounts), { chapter: null, page: null })
})
