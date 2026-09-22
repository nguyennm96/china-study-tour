import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, MapTrifold, X } from '@phosphor-icons/react'
import type { Slide } from '../data/deck'
import { SlideBody, slideOwnsHeading } from './DeckSlides'

export function AtlasChapter({ slides, index, label, color, onPage, onClose, onFinish, finishLabel }: {
  slides: Slide[]; index: number; label: string; color: string; onPage: (page: number) => void; onClose: () => void; onFinish: () => void; finishLabel: string
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [stage, setStage] = useState({ height: 720, scale: 0 })
  const slide = slides[index]
  useEffect(() => {
    const element = dialog.current!
    element.showModal()
    return () => element.close()
  }, [])
  useLayoutEffect(() => {
    const host = stageRef.current!
    const fit = () => {
      const { width, height } = host.getBoundingClientRect()
      const designHeight = Math.max(600, Math.min(1024, Math.round(1280 * height / width)))
      setStage({ height: designHeight, scale: Math.min(width / 1280, height / designHeight) })
    }
    const observer = new ResizeObserver(fit)
    observer.observe(host); fit()
    return () => observer.disconnect()
  }, [])
  const next = () => index === slides.length - 1 ? onFinish() : onPage(index + 1)
  return <dialog ref={dialog} className="atlas-chapter" aria-labelledby="atlas-chapter-label" style={{ '--stop-color': color } as React.CSSProperties}
    onCancel={event => { event.preventDefault(); onClose() }}
    onKeyDown={event => {
      if (event.altKey || event.metaKey || event.ctrlKey || event.shiftKey) return
      if ((event.target as Element).closest('input, textarea, select, video, [contenteditable="true"], [role="slider"]')) return
      if (event.key === ' ' && (event.target as Element).closest('button, a')) return
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); next() }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); if (index > 0) onPage(index - 1) }
      if (event.key === 'Home') { event.preventDefault(); onPage(0) }
      if (event.key === 'End') { event.preventDefault(); onPage(slides.length - 1) }
    }}>
    <header className="atlas-chapter-header">
      <button onClick={onClose} className="atlas-text-button"><MapTrifold size={19} /> Bản đồ</button>
      <span id="atlas-chapter-label">{label}</span>
      <button onClick={onClose} className="atlas-icon-button" aria-label="Đóng câu chuyện"><X size={20} /></button>
    </header>
    <div className="atlas-chapter-stage" ref={stageRef}>
      <div className={`deck-slide ${stage.height < 700 ? 'is-compact' : ''}`} style={{ width: 1280, height: stage.height, transform: `translate(-50%, -50%) scale(${stage.scale})`, visibility: stage.scale ? 'visible' : 'hidden' }}>
        <div className={`deck-canvas ${slideOwnsHeading(slide) ? 'is-bare' : ''}`} key={`${label}-${index}`}>
          {slideOwnsHeading(slide) ? <h2 className="tour-sr-only" id="deck-slide-heading">{slide.title}</h2>
            : <header className="deck-slide-head"><p className="deck-kicker">{slide.kicker}</p><h2 className="deck-slide-heading" id="deck-slide-heading">{slide.title}</h2></header>}
          <div className={`deck-slide-content deck-kind-${slide.kind}`}><SlideBody slide={slide} /></div>
        </div>
      </div>
    </div>
    <footer className="atlas-chapter-footer">
      <span className="atlas-page-count" aria-live="polite">{String(index + 1).padStart(2, '0')}<small> / {String(slides.length).padStart(2, '0')}</small></span>
      <nav className="atlas-page-dots" aria-label="Các slide trong chủ đề">{slides.map((item, page) => <button key={page} aria-label={`Slide ${page + 1}: ${item.title}`} aria-current={index === page ? 'step' : undefined} onClick={() => onPage(page)} />)}</nav>
      <div className="atlas-chapter-actions"><button className="atlas-icon-button" onClick={() => onPage(index - 1)} disabled={index === 0} aria-label="Slide trước"><ArrowLeft size={19} /></button>
        <button className="atlas-next-button" onClick={next}>{index === slides.length - 1 ? finishLabel : 'Tiếp theo'}<ArrowRight size={18} /></button></div>
    </footer>
  </dialog>
}
