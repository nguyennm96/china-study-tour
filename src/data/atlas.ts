export const atlasStops = [
  { id: 'drone', number: '01', title: 'Drone giao hàng', short: 'Drone', place: 'TALENT PARK', color: '#d85c23', image: 'drone', coordinates: [113.9441738, 22.5136618] },
  { id: 'robots', number: '02', title: 'Robot khách sạn', short: 'Robot', place: 'NANSHAN', color: '#167d91', image: 'hotel-robot', coordinates: [113.972, 22.545] },
  { id: 'meituan', number: '03', title: 'Meituan', short: 'Meituan', place: 'NANSHAN', color: '#7b6d23', image: 'order', coordinates: [113.9226, 22.5389] },
] as const

export type StopId = typeof atlasStops[number]['id']
export type ChapterId = StopId | 'team' | 'takeaways'
export type AtlasRoute = { chapter: ChapterId | null; page: number | null }
const chapterIds: readonly string[] = ['team', 'drone', 'robots', 'meituan', 'takeaways']

export function parseAtlasRoute(hash: string, counts: Record<ChapterId, number>): AtlasRoute {
  if (!hash || hash === '#') return { chapter: 'team', page: 0 }
  const match = /^#(team|drone|robots|meituan|takeaways)(?:\/(\d+))?$/.exec(hash)
  if (!match) return { chapter: null, page: null }
  const chapter = match[1] as ChapterId
  if (!match[2] && chapter !== 'team' && chapter !== 'takeaways') return { chapter, page: null }
  return { chapter, page: Math.max(0, Math.min(counts[chapter] - 1, Number(match[2] ?? 1) - 1)) }
}

export function atlasHash(chapter: ChapterId | null, page: number | null = null) {
  return chapter && chapterIds.includes(chapter) ? `#${chapter}${page === null ? '' : `/${page + 1}`}` : '#map'
}
