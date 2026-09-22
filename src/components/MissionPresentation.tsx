import { useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { ArrowLeft, ArrowRight, MapPin, Quotes, X } from '@phosphor-icons/react'
import type { Mission } from '../data/missions'
import './MissionPresentation.css'
import { TechnicalDiagram } from './TechnicalDiagram'
import { EvidenceSlide } from './EvidenceSlide'
import { missionMedia, type EvidenceMedia } from '../data/missionMedia'
import { DeliveryAnatomy } from './DeliveryAnatomy'
import { deliverySteps } from '../data/deliveryAnatomy'

type Props = { mission: Mission; trigger: HTMLButtonElement; onClose: () => void }
type SlideKind = 'place' | 'lens' | 'media' | 'anatomy' | 'engineering' | 'takeaway'
const slideNames: Record<SlideKind, string> = {
  place: 'Case kỹ thuật', lens: 'Nguyên lý hoạt động', media: 'Tư liệu thực tế', anatomy: 'Tách các bộ phận', engineering: 'Bài toán kỹ thuật', takeaway: 'Câu hỏi kỹ thuật',
}
function Sources({ mission, indices }: { mission: Mission; indices?: number[] }) {
  return <div className="deck-sources">{(indices ?? mission.sources.map((_, index) => index)).map(index => {
    const source = mission.sources[index]
    return <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{index + 1}. {source.label} ↗</a>
  })}</div>
}
const stagger = (index: number): CSSProperties => ({ '--reveal-order': index } as CSSProperties)

export function MissionPresentation({ mission, trigger, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const previousRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const focusAfterChangeRef = useRef<HTMLElement | null>(null)
  const animationRef = useRef<Animation | null>(null)
  const closingRef = useRef(false)
  const [closing, setClosing] = useState(false)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const [anatomyStep, setAnatomyStep] = useState(0)
  const slides: { kind: SlideKind; media?: EvidenceMedia }[] = [
    { kind: 'place' },
    ...(mission.id === 'arrival' ? [{ kind: 'anatomy' as const }] : []),
    ...(missionMedia[mission.id] ?? []).map(media => ({ kind: 'media' as const, media })),
    { kind: 'lens' }, { kind: 'engineering' }, { kind: 'takeaway' },
  ]
  const { kind, media: activeMedia } = slides[page]
  const slideName = kind === 'anatomy' ? deliverySteps[anatomyStep].title : slideNames[kind]
  const lastPage = slides.length - 1

  const collapsedFrame = (dialog: HTMLDialogElement) => {
    const bounds = dialog.getBoundingClientRect()
    const pin = trigger.getBoundingClientRect()
    const x = pin.left + pin.width / 2 - bounds.left - bounds.width / 2
    const y = pin.top + pin.height / 2 - bounds.top - bounds.height / 2
    return { transform: `translate(${x}px, ${y}px) scale(0.045)`, opacity: 0, borderRadius: '48px' }
  }

  useLayoutEffect(() => {
    const dialog = dialogRef.current!
    dialog.showModal()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    animationRef.current = dialog.animate([
      collapsedFrame(dialog),
      { transform: 'translate(0, 0) scale(1)', opacity: 1, borderRadius: '20px' },
    ], { duration: reducedMotion ? 1 : 620, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' })
    return () => { animationRef.current?.cancel(); dialog.close() }
  }, [trigger])

  useLayoutEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    focusAfterChangeRef.current?.focus({ preventScroll: true })
    focusAfterChangeRef.current = null
  }, [page])

  const close = () => {
    const dialog = dialogRef.current
    if (!dialog || closingRef.current) return
    closingRef.current = true
    setClosing(true)
    dialog.querySelector('video')?.pause()
    const currentStyle = getComputedStyle(dialog)
    const start = { transform: currentStyle.transform, opacity: currentStyle.opacity, borderRadius: currentStyle.borderRadius }
    animationRef.current?.cancel()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const animation = dialog.animate([start, collapsedFrame(dialog)], {
      duration: reducedMotion ? 1 : 380, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards',
    })
    animationRef.current = animation
    animation.onfinish = () => { dialog.close(); trigger.focus({ preventScroll: true }); onClose() }
  }

  const goTo = (next: number, jump = false) => {
    if (closingRef.current || next === page || next < 0 || next > lastPage) return
    if (!jump && kind === 'anatomy' && Math.abs(next - page) === 1) {
      const step = anatomyStep + Math.sign(next - page)
      if (step >= 0 && step < deliverySteps.length) { setAnatomyStep(step); return }
    }
    if (slides[next].kind === 'anatomy') setAnatomyStep(next < page ? deliverySteps.length - 1 : 0)
    dialogRef.current?.querySelector('video')?.pause()
    // Keep keyboard focus inside the dialog when a control becomes disabled or a slide unmounts.
    if (next === lastPage && document.activeElement === nextRef.current) focusAfterChangeRef.current = previousRef.current
    else if (next === 0 && document.activeElement === previousRef.current) focusAfterChangeRef.current = nextRef.current
    else if (viewportRef.current?.contains(document.activeElement)) focusAfterChangeRef.current = dialogRef.current
    setDirection(next > page ? 1 : -1)
    setPage(next)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    // Leave native media shortcuts alone.
    if (event.target instanceof HTMLVideoElement || event.altKey || event.ctrlKey || event.metaKey) return
    if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); goTo(page + 1) }
    else if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); goTo(page - 1) }
    else if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); goTo(event.key === 'Home' ? 0 : lastPage, true) }
  }

  return (
    <dialog ref={dialogRef} tabIndex={-1} className={`mission-presentation enriched-presentation ${closing ? 'is-closing' : ''}`}
      aria-labelledby="presentation-location" onCancel={(event) => { event.preventDefault(); close() }} onKeyDown={onKeyDown}>
      <div className="presentation-frame">
        <header className="presentation-header">
          <div className="presentation-place">
            <span className="presentation-pin"><MapPin size={22} weight="fill" aria-hidden="true" /></span>
            <div><span>ĐIỂM {mission.code} · SHENZHEN</span><strong id="presentation-location">{mission.location}</strong></div>
          </div>
          <button className="presentation-close" type="button" onClick={close} aria-label="Về bản đồ" autoFocus>
            <span>Về bản đồ</span><X size={20} aria-hidden="true" />
          </button>
        </header>
        <div className="presentation-viewport" ref={viewportRef}>
          <section key={kind === 'anatomy' ? 'anatomy' : page} className={`deck-slide deck-${kind} ${direction < 0 ? 'from-left' : ''}`}
            role="group" aria-roledescription="slide" aria-label={`Slide ${page + 1} / ${slides.length}: ${slideName}`}>
            <span className="deck-chapter" aria-hidden="true">{mission.code}</span>
            {kind === 'place' && <>
              <figure className="deck-photo">
                <img src={mission.image} alt={mission.imageAlt} />
                <figcaption>{mission.imageCaption}</figcaption>
              </figure>
              <div className="deck-introduction">
                <span className="presentation-eyebrow">{mission.topic}</span>
                <h2>{mission.title}</h2>
                <p className="deck-lead">{mission.overview}</p>
                <p className="deck-scope">{mission.scope}</p>
                <dl className="deck-facts">{mission.facts.map((fact, index) => <div key={fact.label} className="deck-reveal" style={stagger(index)}>
                  <dt>{fact.label}</dt><dd>{fact.value}<a href={mission.sources[fact.source].url} target="_blank" rel="noreferrer" aria-label={`Nguồn: ${fact.label}`}><sup>{fact.source + 1}</sup></a></dd>
                </div>)}</dl>
                <Sources mission={mission} />
              </div>
            </>}
            {kind === 'lens' && <div className="deck-editorial">
              <div className="deck-section-heading"><span className="presentation-eyebrow">Nguyên lý hoạt động</span><h2>{mission.lens.title}</h2><p className="deck-lead">{mission.lens.intro}</p></div>
              <div className="deck-flow-scene">
              <TechnicalDiagram kind={mission.diagram} />
              <span className="deck-diagram-caption">Sơ đồ nguyên lý</span>
              <ol className="deck-flow">{mission.lens.steps.map((step, index) => <li key={step.title} className="deck-reveal" style={stagger(index)}>
                <span className="deck-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.detail}</p>
                {index < mission.lens.steps.length - 1 && <ArrowRight className="deck-flow-arrow" size={24} aria-hidden="true" />}
              </li>)}</ol>
              </div>
              <div className="deck-insight-group"><p className="deck-insight"><span aria-hidden="true" />{mission.lens.insight}</p><Sources mission={mission} indices={mission.lens.sources} /></div>
            </div>}
            {kind === 'media' && activeMedia && <EvidenceSlide media={activeMedia} />}
            {kind === 'anatomy' && <DeliveryAnatomy step={anatomyStep} />}
            {kind === 'engineering' && <div className="deck-experiment-layout">
              <div className="deck-experiment-intro"><span className="presentation-eyebrow">Bài toán kỹ thuật</span><h2>{mission.engineering.title}</h2><p className="deck-lead">{mission.engineering.intro}</p>
                <div className="deck-measure"><span>{mission.engineering.metricLabel}</span><p>{mission.engineering.metric}</p></div>
              </div>
              <div className="deck-experiment-plan"><ol>{mission.engineering.steps.map((step, index) => <li key={step.title} className="deck-reveal" style={stagger(index)}><span className="deck-step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}</ol><p className="deck-guardrail">{mission.engineering.note}</p><Sources mission={mission} indices={mission.engineering.sources} /></div>
            </div>}
            {kind === 'takeaway' && <>
              <figure className="deck-photo deck-closing-photo"><img src={mission.image} alt={mission.imageAlt} /><figcaption>{mission.imageCaption}</figcaption></figure>
              <div className="deck-takeaway-copy"><span className="presentation-eyebrow">{mission.topic}</span><Quotes size={40} weight="fill" aria-hidden="true" /><h2>{mission.lesson}</h2><div className="deck-question deck-reveal" style={stagger(1)}><span>Cùng thảo luận</span><p>{mission.question}</p></div></div>
            </>}
          </section>
        </div>
        <footer className="presentation-footer">
          <span className="deck-sr-only" role="status" aria-atomic="true">Slide {page + 1} / {slides.length}: {slideName}</span>
          <div className="presentation-controls">
            <button ref={previousRef} type="button" disabled={page === 0 || closing} onClick={() => goTo(page - 1)} aria-label={kind === 'anatomy' ? 'Bước trước' : 'Slide trước'}><ArrowLeft size={22} aria-hidden="true" /></button>
            <button ref={nextRef} className="next-slide" type="button" disabled={page === lastPage || closing} onClick={() => goTo(page + 1)} aria-label={kind === 'anatomy' ? 'Bước tiếp theo' : 'Slide tiếp theo'}><ArrowRight size={22} aria-hidden="true" /></button>
          </div>
        </footer>
      </div>
    </dialog>
  )
}
