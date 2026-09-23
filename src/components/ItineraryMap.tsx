import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { ArrowLeft, ArrowRight, MapPin, MapTrifold, Sparkle, Star, X } from '@phosphor-icons/react'
import { Map as LiveMap, Marker, LngLatBounds, AttributionControl, setWorkerUrl } from 'maplibre-gl'
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import 'maplibre-gl/dist/maplibre-gl.css'
import { stops, type Stop } from '../data/itinerary'
import { buildPresentation, didiSlides, placeSlides, type Slide } from '../data/deck'
import { subjects } from '../data/presentation'
import { didiIntro } from '../data/didi'
import { places } from '../data/places'
import { SlideBody, slideOwnsHeading } from './DeckSlides'
import { consumeNextStep } from './slideSteps'

setWorkerUrl(mapWorkerUrl)
const subjectTitles: Record<string, string> = { ...Object.fromEntries(subjects.map(item => [item.id, item.title])), didi: didiIntro.title, ...Object.fromEntries(places.map(place => [place.id, place.title])) }
const FIT_PADDING = { top: 104, bottom: 150, left: 110, right: 250 }
/** Slide trong modal dựng ở đúng khung thiết kế của deck rồi scale vừa khung modal. */
const PAGE_WIDTH = 1280
const PAGE_HEIGHT = 720
/** Rổ slide có thể nhúng vào ghim: bài chính cộng các bài chia sẻ rời. */
const allSlides = [...buildPresentation(), ...didiSlides(), ...placeSlides()]

type Page = { kind: 'slide'; slide: Slide }

/** Chỉ hiện slide đã biên tập; ghi chép thô trong sheet không lên màn hình. */
const pagesFor = (stop: Stop): Page[] =>
  (stop.embeddedSubjectIds ?? []).flatMap(id => allSlides.filter(slide => slide.subjectId === id).map(slide => ({ kind: 'slide' as const, slide })))

/** MapLibre tự quy đổi toạ độ chuột và touch theo CSS scale của khung trình chiếu. */
export function ItineraryMap() {
  const hostRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const markersRef = useRef(new globalThis.Map<string, HTMLButtonElement>())
  const [openId, setOpenId] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [scale, setScale] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const openRef = useRef<(id: string) => void>(() => {})
  openRef.current = id => {
    setOpenId(id)
    setPage(0)
  }

  useEffect(() => {
    if (!hostRef.current) return
    let map: LiveMap
    try {
      map = new LiveMap({
        container: hostRef.current,
        style: 'https://tiles.openfreemap.org/styles/positron',
        center: [113.95, 22.58], zoom: 10,
        minZoom: 3, maxZoom: 18, attributionControl: false,
        dragRotate: false, pitchWithRotate: false, touchPitch: false,
      })
    } catch { setStatus('error'); return }
    map.touchZoomRotate.disableRotation()
    map.getCanvas().setAttribute('aria-label', 'Bản đồ tương tác: kéo để di chuyển, cuộn hoặc dùng phím cộng trừ để thu phóng')
    map.addControl(new AttributionControl({ compact: true }), 'bottom-right')

    const bounds = new LngLatBounds()
    stops.forEach(stop => bounds.extend(stop.coordinates))
    const iconRoots: Root[] = []
    const markers = stops.map(stop => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'stop-pin'
      const topics = [
        ...subjects.filter(subject => stop.embeddedSubjectIds?.includes(subject.id)),
        ...(stop.embeddedSubjectIds?.includes('didi') ? [{ title: didiIntro.title }] : []),
      ]
      const isFeatured = topics.length > 0 || stop.id === 'iote'
      if (isFeatured) button.classList.add('is-featured')
      button.setAttribute('aria-label', `${stop.order}. ${stop.name} — ${topics.length ? topics.map(topic => topic.title).join(', ') : 'mở chia sẻ và ghi chép của đoàn'}`)
      button.title = topics.length ? topics.map(topic => topic.title).join(' · ') : 'Mở chia sẻ và ghi chép của đoàn'
      button.innerHTML = `<span class="stop-pin-dot">${stop.order}</span><span class="stop-pin-name">${stop.name}</span>`
      if (isFeatured) {
        const icon = button.querySelector('.stop-pin-dot')!
        icon.setAttribute('aria-hidden', 'true')
        icon.textContent = ''
        const root = createRoot(icon)
        root.render(<><Star className="stop-topic-star" size={21} weight="fill" /><Sparkle className="stop-sparkle is-one" size={10} weight="fill" /><Sparkle className="stop-sparkle is-two" size={7} weight="fill" /></>)
        iconRoots.push(root)
      }
      button.addEventListener('click', () => { openerRef.current = button; openRef.current(stop.id) })
      markersRef.current.set(stop.id, button)
      return new Marker({ element: button, anchor: stop.anchor ?? 'bottom' }).setLngLat(stop.coordinates).addTo(map)
    })

    const timeout = window.setTimeout(() => setStatus('error'), 12000)
    map.on('load', () => {
      window.clearTimeout(timeout)
      for (const [id, property, color] of [
        ['background', 'background-color', '#f7f6f0'],
        ['water', 'fill-color', '#cfe0e7'],
        ['park', 'fill-color', '#e4ece2'],
      ] as const) {
        if (map.getLayer(id)) map.setPaintProperty(id, property, color)
      }
      // Nhãn nền của positron ghép tên Latin với tên chữ Hán; chỉ giữ phần Latin.
      for (const layer of map.getStyle().layers ?? []) {
        if (layer.type !== 'symbol' || !layer.layout || !('text-field' in layer.layout)) continue
        if (!/(city|town|state|country)/.test(layer.id)) {
          map.setLayoutProperty(layer.id, 'visibility', 'none')
          continue
        }
        map.setLayoutProperty(layer.id, 'text-field', ['coalesce', ['get', 'name:latin'], ['get', 'name:en'], ['get', 'name']])
        map.setPaintProperty(layer.id, 'text-color', '#778b94')
      }
      map.fitBounds(bounds, { padding: FIT_PADDING, animate: false })
      setStatus('ready')
    })
    const observer = new ResizeObserver(() => {
      map.resize()
      map.fitBounds(bounds, { padding: FIT_PADDING, animate: false })
    })
    observer.observe(hostRef.current)
    return () => { window.clearTimeout(timeout); observer.disconnect(); markers.forEach(marker => marker.remove()); markersRef.current.clear(); map.remove(); queueMicrotask(() => iconRoots.forEach(root => root.unmount())) }
  }, [])

  const stop = openId ? stops.find(item => item.id === openId) ?? null : null
  const pages = stop ? pagesFor(stop) : []
  const current = pages[Math.min(page, pages.length - 1)]
  useEffect(() => {
    setPage(value => Math.min(value, Math.max(0, pages.length - 1)))
  }, [pages.length])
  // Một điểm có thể ôm nhiều chủ đề, nên tiêu đề bám theo trang đang mở thay vì ghép hết.
  const embeddedTitle = current?.slide.subjectId ? subjectTitles[current.slide.subjectId] ?? null : null

  // Khung slide trong modal co theo kích thước thật của khung chứa.
  useLayoutEffect(() => {
    const body = bodyRef.current
    if (!body) { setScale(0); return }
    // Modal nằm trong khung deck đã bị scale(), nên getBoundingClientRect trả về pixel
    // sau biến đổi và sẽ thu nhỏ slide thêm một lần nữa. clientWidth/Height là pixel bố cục.
    const fit = () => {
      const { clientWidth: width, clientHeight: height } = body
      if (width && height) setScale(Math.min(width / PAGE_WIDTH, height / PAGE_HEIGHT))
    }
    const observer = new ResizeObserver(fit)
    observer.observe(body)
    fit()
    return () => observer.disconnect()
  }, [openId])

  // Khi modal mở, chặn phím điều hướng deck; mũi tên dùng để lật trang trong modal.
  useEffect(() => {
    if (!openId) return
    const deckKeys = ['ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End', ' ']
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpenId(null); event.stopPropagation(); return }
      if (event.key === 'Tab') {
        const controls = [...dialogRef.current!.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input, select, textarea, video[controls], [tabindex="0"]')].filter(item => item.getClientRects().length > 0)
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
        return
      }
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      const target = event.target
      if (target instanceof Element && target.closest('video, input, textarea, select, [contenteditable="true"]')) return
      if (!deckKeys.includes(event.key)) return
      event.stopPropagation()
      if (event.key === ' ' && target instanceof Element && target.closest('button, a, [role="button"]')) return
      event.preventDefault()
      if (event.key === 'Home') setPage(0)
      if (event.key === 'End') setPage(pages.length - 1)
      if ((event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') && !consumeNextStep()) setPage(value => Math.min(pages.length - 1, value + 1))
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') setPage(value => Math.max(0, value - 1))
    }
    window.addEventListener('keydown', onKeyDown, true)
    return () => window.removeEventListener('keydown', onKeyDown, true)
  }, [openId, pages.length])

  useEffect(() => {
    markersRef.current.forEach((button, id) => button.classList.toggle('is-open', id === openId))
  }, [openId, status])

  // Thanh điều hướng của deck nằm ngoài cây component này, nên báo qua class trên <body>
  // để nó thu xuống, nhường hết chiều cao cho modal.
  useEffect(() => {
    document.body.classList.toggle('has-stop-modal', Boolean(openId))
    if (!openId) return
    const footer = hostRef.current?.closest('.deck-slide')?.querySelector<HTMLElement>('.deck-foot')
    const wasInert = footer?.inert ?? false
    if (footer) footer.inert = true
    backRef.current?.focus()
    return () => {
      document.body.classList.remove('has-stop-modal')
      if (footer) footer.inert = wasInert
      openerRef.current?.focus()
    }
  }, [openId])

  return <div className="itinerary-stage">
    <div className="itinerary-overview" inert={Boolean(stop)}>
      <div className="itinerary-map-canvas" ref={hostRef} aria-label="Bản đồ tám điểm dừng của chuyến đi" />
      <header className="itinerary-intro">
        <p className="deck-kicker">SHENZHEN · 24–28.08.2026</p>
        <h3>Một thành phố.<br /><span>Tám điểm chạm.</span></h3>
        <p>Kéo để khám phá. Cuộn để zoom.<br />Chọn một ghim để mở câu chuyện của đoàn.</p>
        <span className="itinerary-count"><MapPin size={14} weight="fill" aria-hidden="true" />8 điểm dừng<span />6 người kể chuyện</span>
      </header>
      {status !== 'ready' && <p className="itinerary-map-status" role={status === 'error' ? 'alert' : 'status'}>
        {status === 'loading' ? 'Đang tải bản đồ…' : 'Nền bản đồ chưa tải được. Bạn vẫn có thể mở nội dung từ các ghim.'}
      </p>}
    </div>

    {stop && current && <div className="itinerary-scrim" onClick={() => setOpenId(null)}>
      <article className="itinerary-modal" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="itinerary-modal-title" onClick={event => event.stopPropagation()}>
        <header className="itinerary-modal-head">
          <div>
            <p className="itinerary-modal-place">Điểm {String(stop.order).padStart(2, '0')} / 08 · {stop.district}</p>
            {stop.approximate && <p className="itinerary-modal-place"><em>Vị trí gần đúng theo địa chỉ công bố</em></p>}
            <h4 id="itinerary-modal-title">{stop.name}{embeddedTitle && <span className="itinerary-modal-subject"> — {embeddedTitle}</span>}</h4>
          </div>
          <button type="button" className="itinerary-close" onClick={() => setOpenId(null)} aria-label="Đóng và quay lại bản đồ" title="Quay lại bản đồ (Esc)"><X size={20} aria-hidden="true" /></button>
        </header>

        <div className="itinerary-modal-body" ref={bodyRef}>
          <div className="itinerary-page" style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT, transform: `translate(-50%, -50%) scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}>
            <div className={`deck-canvas ${slideOwnsHeading(current.slide) ? 'is-bare' : ''}`} key={`${stop.id}-${page}`}>
              {!slideOwnsHeading(current.slide) && <header className="deck-slide-head">
                <p className="deck-kicker">{current.slide.kicker}</p>
                <h2 className="deck-slide-heading">{current.slide.title}</h2>
              </header>}
              <div className={`deck-slide-content deck-kind-${current.slide.kind}`}><SlideBody slide={current.slide} /></div>
            </div>
          </div>
        </div>

        <footer className="itinerary-modal-foot">
          <button type="button" className="itinerary-back" ref={backRef} onClick={() => setOpenId(null)}>
            <MapTrifold size={16} aria-hidden="true" />Quay lại bản đồ
          </button>
          <p className="itinerary-modal-label">{current.slide.kicker}</p>
          {pages.length > 1 && <div className="itinerary-pager">
            <span aria-live="polite">{String(page + 1).padStart(2, '0')} <small>/ {pages.length}</small></span>
            <button type="button" disabled={page === 0} onClick={() => setPage(value => value - 1)} aria-label="Trang trước"><ArrowLeft size={16} aria-hidden="true" /></button>
            <button type="button" disabled={page === pages.length - 1} onClick={() => { if (!consumeNextStep()) setPage(value => value + 1) }} aria-label="Trang sau"><ArrowRight size={16} aria-hidden="true" /></button>
          </div>}
        </footer>
      </article>
    </div>}
  </div>
}
