import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { disposeAircraft, frameAircraftCamera, loadAhamoveAircraft } from './ahamoveAircraft'
import { Map, Marker, AttributionControl, setWorkerUrl, type GeoJSONSource } from 'maplibre-gl'
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { ArrowRight, Pause, Play } from '@phosphor-icons/react'

setWorkerUrl(mapWorkerUrl)
const ORIGIN: [number, number] = [106.652, 10.8188]
const DESTINATION: [number, number] = [113.803262, 22.639474]
const DURATION = 5.25
const clamp = THREE.MathUtils.clamp
const ease = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)

function positionAt(t: number): [number, number] {
  // Great-circle interpolation between the two real airport coordinates.
  const point = ([lng, lat]: [number, number]) => {
    const a = THREE.MathUtils.degToRad(lat), b = THREE.MathUtils.degToRad(lng)
    return new THREE.Vector3(Math.cos(a) * Math.cos(b), Math.cos(a) * Math.sin(b), Math.sin(a))
  }
  const from = point(ORIGIN), to = point(DESTINATION), angle = from.angleTo(to)
  const p = from.multiplyScalar(Math.sin((1 - t) * angle)).addScaledVector(to, Math.sin(t * angle)).divideScalar(Math.sin(angle))
  return [THREE.MathUtils.radToDeg(Math.atan2(p.y, p.x)), THREE.MathUtils.radToDeg(Math.asin(p.z))]
}

export function FlightIntro({ onFinish }: { onFinish: () => void }) {
  const mapHost = useRef<HTMLDivElement>(null)
  const planeHost = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLSpanElement>(null)
  const pausedRef = useRef(false)
  const closingRef = useRef(false)
  const finishTimer = useRef<number | undefined>(undefined)
  const finishRef = useRef(onFinish)
  finishRef.current = onFinish
  const [ready, setReady] = useState(false)
  const [paused, setPaused] = useState(false)
  const [closing, setClosing] = useState(false)
  const [phase, setPhase] = useState('Chuẩn bị cất cánh')
  const [failed, setFailed] = useState(false)

  const finish = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true; setClosing(true)
    finishTimer.current = window.setTimeout(() => finishRef.current(), window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 320)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') finish() }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); window.clearTimeout(finishTimer.current) }
  }, [finish])

  useEffect(() => {
    const host = planeHost.current!
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 1, 10000)
    let renderer: THREE.WebGLRenderer | undefined
    let map: Map | undefined
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.toneMapping = THREE.NeutralToneMapping
      renderer.toneMappingExposure = .85
      renderer.setClearColor(0x000000, 0)
      host.append(renderer.domElement)
      map = new Map({ container: mapHost.current!, style: 'https://tiles.openfreemap.org/styles/liberty', center: positionAt(.4), zoom: 4.7, pitch: 28, bearing: -16, interactive: false, attributionControl: false, fadeDuration: 0 })
      map.addControl(new AttributionControl({ compact: true }), 'bottom-right')
    } catch { renderer?.dispose(); renderer?.domElement.remove(); setFailed(true); return }
    const flightMap = map, flightRenderer = renderer
    let disposed = false, animationId = 0, previousTime = 0, elapsed = 0, lastPhase = '', lastTrailTime = -1, trailComplete = false, renderedOnce = false
    let asset: THREE.Group | undefined
    let width = 1, height = 1
    const markers: Marker[] = []
    const timeout = window.setTimeout(() => { if (!disposed) setFailed(true) }, 15000)
    const resize = () => {
      width = host.clientWidth; height = host.clientHeight
      // A 1–10000 frustum makes thin paint and vector logos fight the scaled-down fuselage.
      frameAircraftCamera(camera, width, height)
      // Match Retina pixels; avoid CSS upscaling while bounding very large displays.
      flightRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3, Math.sqrt(12_000_000 / Math.max(1, width * height))))
      flightRenderer.setSize(width, height); flightMap.resize()
      renderedOnce = false
    }
    const observer = new ResizeObserver(resize); observer.observe(host); resize()
    const environment = new RoomEnvironment()
    const pmrem = new THREE.PMREMGenerator(flightRenderer)
    const lighting = pmrem.fromScene(environment, .04)
    scene.environment = lighting.texture
    environment.dispose(); pmrem.dispose()
    scene.add(new THREE.HemisphereLight('#e5f1ff', '#303744', .35))
    const key = new THREE.DirectionalLight('#ffffff', 1.15)
    key.position.set(-300, 600, 1000); scene.add(key)
    const rim = new THREE.DirectionalLight('#dce9ff', .45)
    rim.position.set(500, -200, 200); scene.add(rim)
    const mapReady = new Promise<void>((resolve) => { flightMap.once('load', () => resolve()) })
    const modelReady = loadAhamoveAircraft().then((model) => {
      if (disposed) { disposeAircraft(model); throw new Error('Disposed') }
      asset = model
      return model
    })
    Promise.all([mapReady, modelReady]).then(async ([, model]) => {
      if (disposed) return
      window.clearTimeout(timeout); setFailed(false)
      // Keep the real coastline while removing background detail that competes with the airplane.
      for (const layer of flightMap.getStyle().layers) {
        if (layer.type === 'symbol' || layer.type === 'line') flightMap.setLayoutProperty(layer.id, 'visibility', 'none')
        if (layer.type === 'background') flightMap.setPaintProperty(layer.id, 'background-color', '#f4f1e9')
        if (layer.type === 'fill') {
          flightMap.setPaintProperty(layer.id, 'fill-color', layer.id === 'water' ? '#d4e8ef' : '#f4f1e9')
          if (layer.id === 'landcover_wood') flightMap.setPaintProperty(layer.id, 'fill-pattern', undefined)
        }
      }
      for (const [coordinates, code, name] of [[ORIGIN, 'SGN', 'TP. Hồ Chí Minh'], [DESTINATION, 'SZX', 'Shenzhen']] as const) {
        const label = document.createElement('div'); label.className = `flight-map-label ${code === 'SGN' ? 'is-origin' : 'is-destination'}`
        const dot = document.createElement('i'), text = document.createElement('div'), tag = document.createElement('span'), title = document.createElement('strong')
        tag.textContent = code; title.textContent = name; text.append(tag, title); label.append(dot, text)
        markers.push(new Marker({ element: label, anchor: 'center' }).setLngLat(coordinates).addTo(flightMap))
      }
      flightMap.addSource('opening-flight', { type: 'geojson', data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [ORIGIN, ORIGIN] } } })
      flightMap.addLayer({ id: 'opening-flight-glow', type: 'line', source: 'opening-flight', paint: { 'line-color': '#ff7f32', 'line-width': 10, 'line-blur': 8, 'line-opacity': .35 } })
      flightMap.addLayer({ id: 'opening-flight-line', type: 'line', source: 'opening-flight', paint: { 'line-color': '#be4b0c', 'line-width': 2, 'line-opacity': .75 } })
      const airplane = new THREE.Group(), airframe = new THREE.Group()
      airframe.add(model)
      airplane.add(airframe)
      scene.add(airplane)
      // Warm up the PBR shader before the clock starts.
      await flightRenderer.compileAsync(scene, camera)
      if (disposed) return
      setReady(true)
      const animate = (time: number) => {
        if (disposed) return
        const dt = previousTime ? Math.min((time - previousTime) / 1000, .06) : 0; previousTime = time
        if ((pausedRef.current || document.hidden) && renderedOnce) { animationId = requestAnimationFrame(animate); return }
        if (!pausedRef.current && !document.hidden) elapsed += dt
        // Start at the real SGN coordinate; one continuous, eased flight to SZX.
        const t = reduced ? 1 : THREE.MathUtils.smoothstep(elapsed, .25, DURATION)
        const location = positionAt(t)
        // Keep the camera still throughout the flight; arrival immediately starts the transition.
        if (!renderedOnce) {
          const zoom = clamp(4.7 + Math.log2(Math.min(width / 1067, height / 1044)), 3.7, 5.2)
          flightMap.jumpTo({ center: positionAt(.5), zoom, pitch: reduced ? 0 : 28, bearing: -16 })
        }
        const projected = flightMap.project(location)
        const next = flightMap.project(positionAt(Math.min(t + .002, 1)))
        const prev = flightMap.project(positionAt(Math.max(0, t - .002)))
        airplane.position.set(projected.x - width / 2, height / 2 - projected.y, 0)
        airplane.rotation.z = Math.atan2(-(next.y - prev.y), next.x - prev.x)
        const cruise = Math.sin(Math.PI * t) ** 2
        // Apparent altitude: small at both airports, larger at cruise, with smooth takeoff/landing.
        const planeSize = Math.min(245, width * .24, height * .29) * (.4 + cruise * .25)
        airplane.scale.setScalar(planeSize)
        // Gently rock the airframe to reveal wing/engine depth.
        const sway = reduced ? 0 : .35 * ease(clamp(elapsed / .8, 0, 1)) * Math.sin(Math.PI * t)
        airframe.rotation.set(
          .55 + cruise * .13 + Math.sin(elapsed * 1.5) * .16 * sway,
          -.04 - cruise * .06 + Math.sin(elapsed * 1.1) * .055 * sway,
          Math.sin(elapsed * 1.5 + .4) * .022 * sway,
        )
        if (!trailComplete && (elapsed - lastTrailTime >= 1 / 30 || t === 1)) {
          const source = flightMap.getSource('opening-flight')
          const segments = Math.max(1, Math.ceil(t * 128))
          if (source?.type === 'geojson') (source as GeoJSONSource).setData({ type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: Array.from({ length: segments + 1 }, (_, i) => positionAt(t * i / segments)) } })
          lastTrailTime = elapsed
          trailComplete = t === 1
        }
        if (progressBar.current) progressBar.current.style.transform = `scaleX(${clamp(elapsed / (reduced ? 3 : DURATION), 0, 1)})`
        const nextPhase = t < .04 ? 'Cất cánh từ TP. Hồ Chí Minh' : t > .98 ? 'Xin chào, Shenzhen.' : 'Hướng đến Shenzhen'
        if (nextPhase !== lastPhase) { setPhase(nextPhase); lastPhase = nextPhase }
        // DOM-visible progress supports presentation controls and browser QA without renderer internals.
        host.dataset.flightProgress = t.toFixed(4)
        host.dataset.flightCoordinates = location.map(value => value.toFixed(6)).join(',')
        host.dataset.flightPosition = [projected.x, projected.y].map(value => value.toFixed(2)).join(',')
        flightRenderer.render(scene, camera)
        renderedOnce = true
        if (reduced ? elapsed >= 3 : t === 1) finish()
        else animationId = requestAnimationFrame(animate)
      }
      animationId = requestAnimationFrame(animate)
    }).catch(() => { if (!disposed) { window.clearTimeout(timeout); setFailed(true) } })
    return () => {
      disposed = true; window.clearTimeout(timeout); cancelAnimationFrame(animationId); observer.disconnect()
      if (asset) disposeAircraft(asset)
      lighting.dispose()
      flightRenderer.dispose(); flightRenderer.domElement.remove(); markers.forEach((marker) => marker.remove()); flightMap.remove()
    }
  }, [finish])

  return (
    <section className={`flight-intro ${ready ? 'is-ready' : ''} ${closing ? 'is-leaving' : ''}`} aria-label="Mở đầu: chuyến bay từ TP. Hồ Chí Minh đến Shenzhen">
      <div className="flight-canvas" aria-hidden="true"><div className="flight-map" ref={mapHost} /><div className="flight-plane" ref={planeHost} /></div>
      <header className="flight-header"><span>AHAMOVE <b>/</b> STUDY TOUR</span><button type="button" onClick={finish} autoFocus>Bỏ qua mở đầu <ArrowRight size={18} aria-hidden="true" /></button></header>
      <div className="flight-copy">
        <span className="flight-kicker">CHUYẾN ĐI CỦA NĂM GÓC NHÌN</span>
        <h1>Hồ Chí Minh.<br /><em>Shenzhen.</em></h1>
        <p>Một hành trình đi để thấy.<br />Và trở về với những điều muốn làm.</p>
        <div className="flight-itinerary"><div><span>KHỞI HÀNH</span><strong>SGN</strong><small>Tân Sơn Nhất</small></div><ArrowRight size={28} aria-hidden="true" /><div><span>ĐIỂM ĐẾN</span><strong>SZX</strong><small>Shenzhen Bảo An</small></div></div>
      </div>
      <footer className="flight-footer">
        <div className="flight-status" role="status">{failed ? 'Chưa tải được cảnh 3D. Bạn có thể vào bản đồ.' : ready ? phase : 'Đang chuẩn bị chuyến bay…'}</div>
        <div className="flight-playback"><span>HÀNH TRÌNH BẮT ĐẦU</span><button type="button" onClick={() => { pausedRef.current = !pausedRef.current; setPaused(pausedRef.current) }} disabled={!ready || closing} aria-label={paused ? 'Tiếp tục mở đầu' : 'Tạm dừng mở đầu'}>{paused ? <Play size={16} weight="fill" /> : <Pause size={16} weight="fill" />}</button></div>
        <div className="flight-progress"><span ref={progressBar} /></div>
        <small>Mô phỏng hành trình · Máy bay Ahamove minh họa · <a href="/models/A320-V3-CREDITS.md" target="_blank" rel="noreferrer">Nguồn model</a></small>
      </footer>
    </section>
  )
}
