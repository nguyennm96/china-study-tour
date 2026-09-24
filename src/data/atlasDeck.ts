import { buildPresentation } from './deck'
import type { ChapterId } from './atlas'

const deck = buildPresentation()
export const atlasChapters = {
  team: deck.filter(slide => slide.kind === 'team' || slide.kind === 'recap' || slide.kind === 'roster' || slide.kind === 'itinerary'),
  drone: deck.filter(slide => slide.subjectId === 'drone'),
  robots: deck.filter(slide => slide.subjectId === 'robots'),
  meituan: deck.filter(slide => slide.subjectId === 'meituan'),
  takeaways: deck.filter(slide => slide.kind === 'takeaway'),
}
export const atlasChapterCounts = Object.fromEntries(Object.entries(atlasChapters).map(([key, slides]) => [key, slides.length])) as Record<ChapterId, number>
