import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { subjects } from '../data/presentation'
import { subjectLocations } from '../data/subjectLocations'
import { classicDeck, deckRail, type Slide } from '../data/deck'
import { SlideBody, slideOwnsHeading } from './DeckSlides'

/** Bề rộng thiết kế cố định: cỡ chữ và bố cục ngang không đổi theo cửa sổ.
 *  Chiều cao suy từ tỷ lệ màn hình thật để slide lấp kín, không để dải trống trên/dưới.
 *  Hai mốc chặn giữ slide không bị bóp quá thấp trên màn siêu rộng, cũng không kéo quá cao trên màn hẹp. */
const SLIDE_WIDTH = 1280
const MIN_SLIDE_HEIGHT = 600
const MAX_SLIDE_HEIGHT = 1024

const deck = classicDeck()
export function Presentation({ index, onIndex, slides = deck, onComplete, completeLabel = 'Tiếp tục' }: {
  index: number; onIndex: (next: number) => void; slides?: Slide[]; onComplete?: () => void; completeLabel?: string
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const [stage, setStage] = useState({ height: 720, scale: 0 })
  const slide = slides[index]
  const rail = deckRail(slides)
  const subject = slide.subjectId ? subjects.find(item => item.id === slide.subjectId) : undefined
  const place = subject ? subjectLocations[subject.id].place.replace(' · Điểm minh họa', '') : ''

  useLayoutEffect(() => {
    const host = stageRef.current!
    const fit = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return
      const designHeight = Math.min(MAX_SLIDE_HEIGHT, Math.max(MIN_SLIDE_HEIGHT, Math.round((SLIDE_WIDTH * height) / width)))
      setStage({ height: designHeight, scale: Math.min(width / SLIDE_WIDTH, height / designHeight) })
    }
    const observer = new ResizeObserver(fit)
    observer.observe(host)
    fit()
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const go = (next: number) => {
      if (next >= 0 && next < slides.length) onIndex(next)
      else if (next === slides.length) onComplete?.()
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      const target = event.target
      if (target instanceof Element && target.closest('input, textarea, select, video, .maplibregl-canvas, [contenteditable="true"]')) return
      // Space must still activate a focused control (chart table, playback, navigation).
      if (event.key === ' ' && target instanceof Element && target.closest('button, a, [role="button"]')) return
      if (!['ArrowRight', 'PageDown', ' ', 'ArrowLeft', 'PageUp', 'Home', 'End'].includes(event.key)) return
      event.preventDefault()
      if (event.key === 'Home') go(0)
      else if (event.key === 'End') go(slides.length - 1)
      else go(index + (['ArrowRight', 'PageDown', ' '].includes(event.key) ? 1 : -1))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, onIndex, slides.length, onComplete])

  const go = (next: number) => {
    if (next >= 0 && next < slides.length) onIndex(next)
    else if (next === slides.length) onComplete?.()
  }

  return <div className="deck-room">
    <article className="deck-surface" aria-labelledby="deck-slide-heading">
      <div className="deck-stage" ref={stageRef}>
        <div className={`deck-slide ${stage.height < 760 ? 'is-compact' : ''}`} style={{ width: SLIDE_WIDTH, height: stage.height, transform: `translate(-50%, -50%) scale(${stage.scale})`, visibility: stage.scale ? 'visible' : 'hidden' }}>
          <div className={`deck-canvas ${slideOwnsHeading(slide) ? 'is-bare' : ''}`} key={index}>
            {slideOwnsHeading(slide)
              ? <h2 className="tour-sr-only" id="deck-slide-heading">{slide.title}</h2>
              : <header className="deck-slide-head">
                  <p className="deck-kicker">{slide.kicker}</p>
                  <h2 className="deck-slide-heading" id="deck-slide-heading">{slide.title}</h2>
                </header>}
            <div className={`deck-slide-content deck-kind-${slide.kind}`}><SlideBody slide={slide} /></div>
          </div>
          <footer className="deck-foot">
            <p className="deck-topic"><span>{subject ? subject.title : slide.chapter}</span><small>{subject ? `${place} · ${subject.duration}` : 'Ahamove Study Tour · Shenzhen'}</small></p>
            <nav className={`deck-rail ${slides.length <= 6 ? 'is-chapters' : ''}`} aria-label="Các slide của bài chia sẻ">
              {slides.length <= 6 ? slides.map((item, target) => <button key={target} type="button" className="deck-chapter"
                aria-current={target === index ? 'step' : undefined} aria-label={`Slide ${target + 1}: ${item.title}`}
                onClick={() => go(target)}><span>{String(target + 1).padStart(2, '0')}</span>{item.chapter === 'Key takeaways' ? 'Mang về' : item.chapter}</button>) : rail.map(group => <span className="deck-rail-group" key={group.label}>
                <span className="deck-rail-label" aria-hidden="true">{group.label}</span>
                <span className="deck-rail-ticks">{Array.from({ length: group.count }, (_, offset) => {
                  const target = group.from + offset
                  return <button key={target} type="button" data-visited={target < index || undefined} aria-current={target === index ? 'step' : undefined}
                    aria-label={`Slide ${target + 1}: ${slides[target].title}`} title={slides[target].title}
                    onClick={() => go(target)} />
                })}</span>
              </span>)}
            </nav>
            {(onComplete || slides.length > 6) && <div className="deck-controls">
              <span className="deck-number" aria-live="polite">{String(index + 1).padStart(2, '0')}<small> / {slides.length}</small></span>
              <button type="button" className="deck-step" disabled={index === 0} onClick={() => go(index - 1)} aria-label="Slide trước"><ArrowLeft size={17} aria-hidden="true" /></button>
              <button type="button" className={onComplete && index === slides.length - 1 ? 'deck-next' : 'deck-step'} disabled={index === slides.length - 1 && !onComplete} onClick={() => go(index + 1)} aria-label={onComplete && index === slides.length - 1 ? completeLabel : 'Slide sau'}>
                {onComplete && index === slides.length - 1 && completeLabel}<ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>}
          </footer>
        </div>
      </div>
    </article>
  </div>
}

export const deckLength = deck.length
