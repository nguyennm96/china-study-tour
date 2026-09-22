import { useEffect, useRef, useState } from 'react'
import { Map, Marker, LngLatBounds, AttributionControl, setWorkerUrl } from 'maplibre-gl'
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import 'maplibre-gl/dist/maplibre-gl.css'
import { atlasStops, type StopId } from '../data/atlas'
import { atlasMapStyle } from '../data/atlasMap'

setWorkerUrl(mapWorkerUrl)

export function AtlasMap({ selected, onSelect, resetKey }: {
  selected: StopId | null; onSelect: (id: StopId) => void; resetKey: number
}) {
  const host = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)
  const selectRef = useRef(onSelect)
  selectRef.current = onSelect
  const markers = useRef<Marker[]>([])
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const container = host.current!
    let map: Map
    try {
      map = new Map({ container, style: atlasMapStyle, center: [113.95, 22.535], zoom: 12.4, minZoom: 10, maxZoom: 16,
        attributionControl: false, pitchWithRotate: false, dragRotate: false, touchPitch: false, keyboard: false,
        scrollZoom: false, doubleClickZoom: false, boxZoom: false, touchZoomRotate: false,
        canvasContextAttributes: { antialias: true } })
    } catch { setFailed(true); return }
    mapRef.current = map
    map.touchZoomRotate.disableRotation()
    map.addControl(new AttributionControl({ compact: true }), 'bottom-right')
    const timeout = window.setTimeout(() => setFailed(true), 15000)
    map.on('load', () => {
      window.clearTimeout(timeout)
      setFailed(false)
      // Keep district / city labels; mute dense POIs so the three subjects lead.
      map.getStyle().layers.forEach(layer => {
        if (layer.type === 'symbol' && 'source-layer' in layer && !['place', 'water_name'].includes(layer['source-layer'] ?? '')) map.setLayoutProperty(layer.id, 'visibility', 'none')
      })
      setReady(true)
      markers.current = atlasStops.map((stop, index) => {
        const root = document.createElement('div')
        root.className = 'atlas-map-pin'
        root.style.setProperty('--stop-color', stop.color)
        root.style.setProperty('--bob-delay', `${index * -.85}s`)
        const button = document.createElement('button')
        button.type = 'button'
        button.className = 'atlas-pin-button'
        button.setAttribute('aria-label', `Khám phá ${stop.title}`)
        button.setAttribute('aria-haspopup', 'dialog')
        button.addEventListener('click', () => selectRef.current(stop.id))
        const image = document.createElement('img')
        image.src = `/media/illustrations/subjects-2d/${stop.image}.png`
        image.alt = ''
        image.draggable = false
        const caption = document.createElement('span')
        caption.className = 'atlas-pin-caption'
        const number = document.createElement('b')
        number.textContent = stop.number
        const title = document.createElement('span')
        title.textContent = stop.short
        caption.append(number, title)
        button.append(image, caption)
        root.append(button)
        return new Marker({ element: root, anchor: 'bottom' }).setLngLat([...stop.coordinates]).addTo(map)
      })
    })
    map.on('error', () => setFailed(true))
    const resize = new ResizeObserver(() => map.resize())
    resize.observe(container)
    return () => {
      resize.disconnect()
      window.clearTimeout(timeout)
      markers.current.forEach(marker => marker.remove())
      markers.current = []
      map.remove(); mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !ready) return
    const fit = () => {
      const { width, height } = host.current!.getBoundingClientRect()
      const mobile = width < 760
      const bounds = new LngLatBounds()
      atlasStops.forEach(stop => bounds.extend([...stop.coordinates]))
      map.fitBounds(bounds, { padding: mobile
        ? { left: 66, right: 66, top: height < 700 ? 285 : 330, bottom: 165 }
        : { left: 155, right: 155, top: 280, bottom: 210 },
        maxZoom: 13.5, duration: 0 })
    }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(host.current!)
    return () => observer.disconnect()
  }, [ready, resetKey])

  useEffect(() => {
    markers.current.forEach((marker, i) => {
      const active = atlasStops[i].id === selected
      marker.getElement().dataset.selected = String(active)
      marker.getElement().querySelector('button')?.setAttribute('aria-pressed', String(active))
    })
  }, [selected, ready])

  return <div className="atlas-map-layer">
    <div className="atlas-map" ref={host} aria-label="Bản đồ ba chủ đề tại Thâm Quyến" />
    {(!ready || failed) && <div className="atlas-map-message" role="status">{failed ? 'Bản đồ chưa khả dụng. Bạn vẫn có thể mở ba chủ đề bên dưới.' : 'Đang mở thành phố…'}</div>}
  </div>
}
