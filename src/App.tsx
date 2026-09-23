import { lazy, Suspense, useEffect, useState } from 'react'
import { Presentation } from './components/Presentation'
import { classicDeck, didiSlides, type Slide } from './data/deck'
import { parseSlideRoute, slideHash } from './data/tourNavigation'
import './components/StudyTour.css'
import './components/DronePresentationContent.css'
import './components/DataCharts.css'
import './components/SlideDeck.css'

const LiveAtlas = lazy(() => import('./components/LiveAtlas'))

export default function App() {
  if (/^\/v2(?:\/|$)/.test(window.location.pathname)) return <Suspense fallback={<div style={{ padding: 40 }}>Đang mở hành trình…</div>}><LiveAtlas /></Suspense>
  if (/^\/didi(?:\/|$)/.test(window.location.pathname)) return <HashDeck slides={didiDeck} title="Một cuốc xe Didi ở Thẩm Quyến · Ahamove Study Tour" />
  return <HashDeck slides={classicSlides} />
}

const classicSlides = classicDeck()
/** Bài Didi 20 phút chạy thành deck riêng để trình chiếu; cùng dữ liệu với ghim Sân bay Bảo An. */
const didiDeck = didiSlides()

function HashDeck({ slides, title }: { slides: Slide[]; title?: string }) {
  const [index, setIndex] = useState(() => parseSlideRoute(window.location.hash, slides.length))

  useEffect(() => {
    if (title) document.title = title
    const sync = () => setIndex(parseSlideRoute(window.location.hash, slides.length))
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [slides.length, title])

  const goTo = (next: number) => {
    const hash = slideHash(next)
    if (window.location.hash === hash) setIndex(next)
    else window.location.hash = hash
  }

  return <Presentation index={index} onIndex={goTo} slides={slides} />
}
