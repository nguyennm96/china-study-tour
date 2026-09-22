import { lazy, Suspense, useEffect, useState } from 'react'
import { Presentation, deckLength } from './components/Presentation'
import { parseSlideRoute, slideHash } from './data/tourNavigation'
import './components/StudyTour.css'
import './components/DronePresentationContent.css'
import './components/DataCharts.css'
import './components/SlideDeck.css'

const LiveAtlas = lazy(() => import('./components/LiveAtlas'))

export default function App() {
  if (/^\/v2(?:\/|$)/.test(window.location.pathname)) return <Suspense fallback={<div style={{ padding: 40 }}>Đang mở hành trình…</div>}><LiveAtlas /></Suspense>
  return <ClassicPresentation />
}

function ClassicPresentation() {
  const [index, setIndex] = useState(() => parseSlideRoute(window.location.hash, deckLength))

  useEffect(() => {
    const sync = () => setIndex(parseSlideRoute(window.location.hash, deckLength))
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const goTo = (next: number) => {
    const hash = slideHash(next)
    if (window.location.hash === hash) setIndex(next)
    else window.location.hash = hash
  }

  return <Presentation index={index} onIndex={goTo} />
}
