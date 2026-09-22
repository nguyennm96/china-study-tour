import { useEffect, useRef, useState } from 'react'
import { Map, Marker, LngLatBounds, NavigationControl, AttributionControl, setWorkerUrl } from 'maplibre-gl'
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Mission } from '../data/missions'

setWorkerUrl(mapWorkerUrl)

type MapPanelProps = {
  missions: Mission[]
  activeMissionId: string
  onMissionSelect: (missionId: string, trigger: HTMLButtonElement) => void
}

export function MapPanel({ missions, activeMissionId, onMissionSelect }: MapPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef(new globalThis.Map<string, HTMLButtonElement>())
  const selectRef = useRef(onMissionSelect)
  selectRef.current = onMissionSelect
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [retry, setRetry] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return
    setStatus('loading')
    let map: Map
    try {
      map = new Map({
        container: containerRef.current,
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [113.991, 22.529], zoom: 11.8, minZoom: 9, maxZoom: 18,
        maxBounds: [[113.5, 22.25], [114.6, 22.95]],
        attributionControl: false,
      })
    } catch {
      setStatus('error')
      return
    }
    map.on('error', (event) => console.error('Map data:', event.error.message))
    map.addControl(new NavigationControl({ showCompass: false }), 'bottom-right')
    map.addControl(new AttributionControl({ compact: true }), 'bottom-left')
    const bounds = new LngLatBounds()
    missions.forEach((mission) => bounds.extend(mission.coordinates))
    const fit = (duration = 0) => {
      const { clientWidth: width, clientHeight: height } = containerRef.current!
      const small = width < 760
      map.fitBounds(bounds, {
        padding: small
          ? { top: Math.min(280, height * 0.36), bottom: 72, left: 50, right: 60 }
          : { top: height * 0.23, bottom: height * 0.23, left: width * 0.4, right: Math.max(130, width * 0.1) },
        maxZoom: 13, duration,
      })
    }
    const markers = missions.map((mission) => {
      const wrapper = document.createElement('div')
      wrapper.className = 'geographic-pin'
      wrapper.dataset.mission = mission.id
      const button = document.createElement('button')
      button.className = 'map-marker'
      button.type = 'button'
      button.setAttribute('aria-label', `Mở ${mission.title} tại ${mission.location}`)
      button.setAttribute('aria-haspopup', 'dialog')
      const code = document.createElement('span')
      code.className = 'marker-code'
      code.textContent = mission.code
      const label = document.createElement('span')
      label.className = 'map-marker-label'
      label.textContent = mission.location
      button.append(code, label)
      button.addEventListener('click', (event) => {
        event.stopPropagation()
        map.stop()
        selectRef.current(mission.id, button)
      })
      wrapper.append(button)
      buttonsRef.current.set(mission.id, button)
      return new Marker({ element: wrapper, anchor: 'center' }).setLngLat(mission.coordinates).addTo(map)
    })
    const loadingTimeout = window.setTimeout(() => setStatus('error'), 15000)
    map.on('load', () => {
      window.clearTimeout(loadingTimeout)
      setStatus('ready')
      fit()
    })
    fit()
    const observer = new ResizeObserver(() => { map.resize(); fit() })
    observer.observe(containerRef.current)
    return () => {
      window.clearTimeout(loadingTimeout)
      observer.disconnect()
      markers.forEach((marker) => marker.remove())
      buttonsRef.current.clear()
      map.remove()
    }
  }, [missions, retry])

  useEffect(() => {
    buttonsRef.current.forEach((button, id) => {
      button.classList.toggle('is-active', id === activeMissionId)
      if (id === activeMissionId) button.setAttribute('aria-current', 'step')
      else button.removeAttribute('aria-current')
    })
  }, [activeMissionId, status])

  return (
    <div className="map-stage real-map-stage">
      <div className="geographic-map" ref={containerRef} aria-label="Bản đồ OpenStreetMap Thâm Quyến với sáu địa điểm thật" />
      <div className="map-scrim" aria-hidden="true" />
      {status === 'loading' && <div className="map-loading" role="status">Đang tải bản đồ Thâm Quyến…</div>}
      {status === 'error' && <div className="map-loading map-error" role="alert">Chưa tải được bản đồ. <button type="button" onClick={() => setRetry((value) => value + 1)}>Thử lại</button><span>Bạn vẫn có thể chọn các ghim địa điểm.</span></div>}
    </div>
  )
}
