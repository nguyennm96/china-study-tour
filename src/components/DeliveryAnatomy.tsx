import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { ArrowCounterClockwise, Pause, Play } from '@phosphor-icons/react'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { deliverySteps, type DeliveryStage } from '../data/deliveryAnatomy'
import { OVERVIEW_SCALE, OVERVIEW_ORIGIN, journeyCheckpoints, deliveryStepPose, deliveryStepStage, deliveryAutoplayFrame, DELIVERY_AUTOPLAY_SECONDS, type DeliveryPose } from './deliveryAnimation'
import { makeShenzhenCity } from './ShenzhenCity'
import { makeDeliveryCabinet } from './DeliveryCabinet'
import './DeliveryAnatomy.css'

const AUTOPLAY_RATE = 2.25

// An original, simplified 3D mechanism diagram. It is not a manufacturer's CAD model.
function makeDeliveryModel(scene: THREE.Object3D) {
  const white = new THREE.MeshStandardMaterial({ color: '#edf1f0', roughness: .36, metalness: .2 })
  const edge = new THREE.MeshStandardMaterial({ color: '#b4c2cd', roughness: .3, metalness: .6 })
  const dark = new THREE.MeshStandardMaterial({ color: '#142532', roughness: .42, metalness: .35 })
  const orange = new THREE.MeshStandardMaterial({ color: '#ff7f32', roughness: .36, metalness: .12 })
  const yellow = new THREE.MeshStandardMaterial({ color: '#ffc53d', roughness: .33, metalness: .18 })
  const glass = new THREE.MeshStandardMaterial({ color: '#14394d', roughness: .18, metalness: .5 })
  const box = (parent: THREE.Object3D, size: [number, number, number], material: THREE.Material, at: [number, number, number], radius = .035) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(...size, 2, radius), material)
    mesh.position.set(...at); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh)
    return mesh
  }
  const cylinder = (parent: THREE.Object3D, radius: number, height: number, material: THREE.Material, at: [number, number, number]) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 24), material)
    mesh.position.set(...at); mesh.castShadow = true; parent.add(mesh); return mesh
  }
  const beam = (parent: THREE.Object3D, from: THREE.Vector3, to: THREE.Vector3, width: number, material: THREE.Material) => {
    const mesh = box(parent, [width, from.distanceTo(to), width], material, [0, 0, 0], width / 3)
    mesh.position.copy(from).add(to).multiplyScalar(.5)
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize())
    return mesh
  }

  const cabinet = makeDeliveryCabinet(scene)

  const drone = new THREE.Group(); scene.add(drone)
  const body = box(drone, [.79, .23, .56], dark, [0, 0, 0], .105)
  const canopy = box(drone, [.62, .15, .46], yellow, [0, .14, 0], .07)
  const battery = box(drone, [.36, .13, .31], edge, [0, .17, -.02], .025)
  box(drone, [.34, .10, .16], glass, [0, -.045, .32])
  for (const x of [-.1, .1]) {
    const lens = cylinder(drone, .038, .03, edge, [x, -.043, .42]); lens.rotation.x = Math.PI / 2
  }
  const arms: THREE.Group[] = [], rotors: THREE.Group[] = []
  for (let index = 0; index < 6; index++) {
    const angle = Math.PI / 6 + index * Math.PI / 3
    const arm = new THREE.Group(); drone.add(arm); arms.push(arm)
    const tip = new THREE.Vector3(Math.cos(angle) * .99, .02, Math.sin(angle) * .85)
    beam(arm, new THREE.Vector3(Math.cos(angle) * .25, -.03, Math.sin(angle) * .22), tip, .055, dark)
    cylinder(arm, .092, .13, dark, [tip.x, tip.y, tip.z])
    cylinder(arm, .045, .05, edge, [tip.x, .11, tip.z])
    const rotor = new THREE.Group(); rotor.position.set(tip.x, .16, tip.z); arm.add(rotor); rotors.push(rotor)
    for (let blade = 0; blade < 3; blade++) {
      const bladeGroup = new THREE.Group(); bladeGroup.rotation.y = blade * Math.PI * 2 / 3; rotor.add(bladeGroup)
      const paddle = box(bladeGroup, [.38, .014, .052], dark, [.15, 0, .012], .006); paddle.rotation.z = .07
      box(bladeGroup, [.065, .017, .055], orange, [.305, 0, .012], .006)
    }
  }
  for (const x of [-.43, .43]) {
    for (const z of [-.26, .26]) beam(drone, new THREE.Vector3(x * .5, -.05, z * .6), new THREE.Vector3(x, -.42, z), .025, edge)
    box(drone, [.045, .04, .8], dark, [x, -.42, 0], .018)
  }
  box(drone, [.16, .17, .17], edge, [0, -.21, 0], .022)

  const cargo = new THREE.Group(); scene.add(cargo)
  box(cargo, [.62, .07, .54], orange, [0, -.215, 0], .02)
  for (const side of [-1, 1]) {
    box(cargo, [.035, .43, .54], orange, [side * .295, 0, 0], .015)
    box(cargo, [.58, .43, .035], orange, [0, 0, side * .252], .015)
  }
  box(cargo, [.07, .37, .008], white, [0, 0, .275], .002)
  box(cargo, [.18, .08, .014], white, [-.15, .105, .275], .004)
  const lid = box(cargo, [.65, .065, .57], orange, [0, .245, 0], .025)
  box(cargo, [.25, .17, .32], white, [-.12, -.08, .025], .035)
  cylinder(cargo, .09, .27, white, [.16, -.045, -.08])
  cylinder(cargo, .096, .026, dark, [.16, .10, -.08])

  const anchor = new THREE.Vector3()
  function apply(pose: DeliveryPose, stage: DeliveryStage, rotorAngle: number) {
    drone.position.set(pose.droneX, pose.droneY, pose.droneZ)
    cargo.position.set(pose.cargoX, pose.cargoY, pose.cargoZ)
    lid.position.y = .245 + pose.lid
    battery.position.y = .17 + pose.battery
    canopy.position.y = .14 + pose.battery * 1.65
    arms.forEach((arm, index) => { arm.position.y = pose.arms; rotors[index].rotation.y = rotorAngle * (index % 2 ? -1 : 1) })
    cabinet.apply(pose, stage)
    body.material = stage === 'aircraft' ? edge : dark
    drone.rotation.y = pose.overview * Math.PI / 2
    drone.visible = stage === 'system' || stage === 'cargo' || stage === 'aircraft' || stage === 'delivery'
    if (stage === 'system' || stage === 'cargo') anchor.copy(cargo.position).add(new THREE.Vector3(.35, .3, 0))
    else if (stage === 'aircraft') anchor.copy(drone.position).add(new THREE.Vector3(.2, .4, 0))
    else anchor.set(1.6 + pose.shell * .4, stage === 'receiver' ? 2.5 : 1.4, .3)
  }
  return { apply, anchor, dispose: cabinet.dispose }
}

export function DeliveryAnatomy({ step, autoPlay = false }: { step: number; autoPlay?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const explanationRef = useRef<HTMLElement>(null)
  const controllerRef = useRef<{ show: (step: number) => void; setPlaying: (playing: boolean) => void; restart: () => void } | null>(null)
  const [failed, setFailed] = useState(false)
  const [activeStep, setActiveStep] = useState(step)
  const [playback, setPlayback] = useState<'playing' | 'paused' | 'ended'>('playing')
  const copy = deliverySteps[autoPlay ? activeStep : step]

  useEffect(() => {
    const host = hostRef.current!
    let renderer: THREE.WebGLRenderer
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }) }
    catch { setFailed(true); return }
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = .95
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    host.append(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-4, 4, 3, -3, .1, 50)
    const environment = new RoomEnvironment()
    const pmrem = new THREE.PMREMGenerator(renderer)
    const lighting = pmrem.fromScene(environment, .04)
    scene.environment = lighting.texture; scene.environmentIntensity = .55; environment.dispose(); pmrem.dispose()
    scene.add(new THREE.HemisphereLight('#c9e4ff', '#172130', 1))
    const key = new THREE.DirectionalLight('#fff1df', 2); key.position.set(-3, 8, 5); key.castShadow = true
    key.shadow.mapSize.set(2048, 2048); key.shadow.camera.left = -5; key.shadow.camera.right = 5
    key.shadow.camera.top = 6; key.shadow.camera.bottom = -5; key.shadow.bias = -.0005; scene.add(key)
    const rim = new THREE.DirectionalLight('#78b8ff', 1.1); rim.position.set(4, 5, -4); scene.add(rim)
    const deliveryRoot = new THREE.Group(); scene.add(deliveryRoot)
    const model = makeDeliveryModel(deliveryRoot)
    const city = makeShenzhenCity(); scene.add(city.root)
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reduced = motion.matches, currentStep = step, elapsed = 0, duration = 0, previous = 0, frame = 0, disposed = false
    let width = 1, height = 1, rotorAngle = 0
    let autoElapsed = 0, playing = true, workerReady = false, lastReportedStep = -1, reportedEnd = false
    let journeyTime: number = journeyCheckpoints[Math.min(step, 8)], fromTime = journeyTime, targetTime = journeyTime
    const current: DeliveryPose = deliveryStepPose(step)
    const projected = new THREE.Vector3()
    const render = (time: number) => {
      if (disposed) return
      frame = 0
      const dt = previous ? Math.min((time - previous) / 1000, .05) : 0; previous = time
      if (document.hidden) return
      elapsed = reduced ? duration : Math.min(duration, elapsed + dt)
      if (autoPlay && playing && workerReady) autoElapsed = Math.min(DELIVERY_AUTOPLAY_SECONDS, autoElapsed + dt * AUTOPLAY_RATE)
      const autoplayFrame = autoPlay ? deliveryAutoplayFrame(autoElapsed) : null
      const complete = autoplayFrame ? autoplayFrame.complete : elapsed >= duration
      if (autoplayFrame) {
        currentStep = autoplayFrame.step
        journeyTime = autoplayFrame.journeyTime
        if (currentStep !== lastReportedStep) { lastReportedStep = currentStep; setActiveStep(currentStep) }
        if (complete && !reportedEnd) { reportedEnd = true; setPlayback('ended') }
      } else journeyTime = THREE.MathUtils.lerp(fromTime, targetTime, duration ? elapsed / duration : 1)
      const target = autoplayFrame ? (reduced ? deliveryStepPose(currentStep) : autoplayFrame.pose) : deliveryStepPose(currentStep, journeyTime)
      const blend = autoPlay || complete ? 1 : 1 - Math.exp(-dt * 12)
      for (const name of Object.keys(current) as (keyof DeliveryPose)[]) current[name] += (target[name] - current[name]) * blend
      const overview = current.overview
      deliveryRoot.scale.setScalar(THREE.MathUtils.lerp(1, OVERVIEW_SCALE, overview))
      deliveryRoot.position.set(...OVERVIEW_ORIGIN.map(value => value * overview) as [number, number, number])
      city.update(overview, current.workerX, current.workerWalk, current.workerReach, journeyTime)
      const aspect = width / Math.max(1, height)
      const viewHeight = Math.max(current.viewHeight, current.viewWidth / Math.max(.4, aspect))
      camera.left = -viewHeight * aspect / 2; camera.right = -camera.left
      camera.top = viewHeight / 2; camera.bottom = -camera.top
      const roomForNotes = width > 760 ? .7 : 0
      camera.position.set(current.focusX + roomForNotes + 5.9 + overview * 2, current.focusY + 3.35 + overview * 2, current.focusZ - roomForNotes * .65 + 8.5 + overview * 2.5)
      camera.lookAt(current.focusX + roomForNotes, current.focusY, current.focusZ - roomForNotes * .65)
      camera.updateProjectionMatrix()
      if (!reduced && !complete && (!autoPlay || playing)) rotorAngle += dt * 15 * current.rotors
      model.apply(current, deliveryStepStage(currentStep), rotorAngle)
      renderer.render(scene, camera)

      const anchor = deliverySteps[currentStep].anchor
      if (anchor === 'worker') {
        projected.set(current.workerX + .12, 2.23, .7); city.root.localToWorld(projected)
      } else {
        if (anchor === 'cargo') projected.set(current.cargoX, current.cargoY + .2, current.cargoZ)
        else if (anchor === 'drone') projected.set(current.droneX, current.droneY + .15, current.droneZ)
        else if (anchor === 'roof') projected.set(1, 2.55 + current.shell * .47, .3)
        else if (anchor === 'screen') projected.set(.2, 1.95, .66)
        else projected.set(.8, 1.4, .65)
        deliveryRoot.localToWorld(projected)
      }
      projected.project(camera)
      const explanation = explanationRef.current
      if (explanation) {
        const anchorX = (projected.x * .5 + .5) * width, anchorY = (-projected.y * .5 + .5) * height
        const x = Math.max(24, width - explanation.offsetWidth - 36)
        const y = Math.max(106, Math.min(height - explanation.offsetHeight - 98, anchorY - explanation.offsetHeight / 2))
        explanation.style.transform = `translate(${x}px,${y}px)`
        explanation.style.setProperty('--leader-width',`${Math.max(14,Math.min(100,x-anchorX-12))}px`)
      }
      host.dataset.step = String(currentStep)
      host.dataset.motion = autoPlay ? (complete ? 'ended' : playing ? 'running' : 'paused') : complete ? 'settled' : 'running'
      if (autoPlay) host.dataset.playbackTime = autoElapsed.toFixed(3)
      host.dataset.journeyTime = journeyTime.toFixed(3)
      host.dataset.workerX = current.workerX.toFixed(3)
      host.dataset.cargoPosition = [current.cargoX, current.cargoY, current.cargoZ].map(n => n.toFixed(3)).join(',')
      host.dataset.roofOpen = current.roof.toFixed(3); host.dataset.doorOpen = current.door.toFixed(3)
      host.dataset.shellOpen = current.shell.toFixed(3)
      if (!complete && (!autoPlay || playing && workerReady)) frame = requestAnimationFrame(render)
    }
    const wake = () => { if (!disposed && !frame) { previous = 0; frame = requestAnimationFrame(render) } }
    city.loadWorker().then(() => { if (!disposed) { workerReady = true; host.dataset.workerModel = 'quaternius'; wake() } }).catch(() => { if (!disposed) setFailed(true) })
    const resize = () => {
      width = host.clientWidth; height = host.clientHeight
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(2_800_000 / Math.max(1, width * height))))
      renderer.setSize(width, height); wake()
    }
    const onMotion = () => { reduced = motion.matches; wake() }
    const onVisibility = () => { if (!document.hidden) wake() }
    const onContextLost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); frame = 0; setFailed(true) }
    renderer.domElement.addEventListener('webglcontextlost', onContextLost)
    motion.addEventListener('change', onMotion); document.addEventListener('visibilitychange', onVisibility)
    const observer = new ResizeObserver(resize); observer.observe(host); resize()
    controllerRef.current = {
      setPlaying: (value) => { playing = value; setPlayback(value ? 'playing' : 'paused'); wake() },
      restart: () => { autoElapsed = 0; playing = true; reportedEnd = false; setPlayback('playing'); wake() },
      show: (next) => {
      const wasJourney = currentStep <= 8
      fromTime = journeyTime; targetTime = journeyCheckpoints[Math.min(next, 8)]
      duration = next === currentStep ? 0 : next === 2 && wasJourney ? 1.1 : wasJourney && next <= 8 ? Math.max(.55, Math.abs(targetTime - fromTime)) : 1.15
      currentStep = next; elapsed = 0; wake()
    } }
    return () => {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect(); controllerRef.current = null; city.disposeWorker()
      motion.removeEventListener('change', onMotion); document.removeEventListener('visibilitychange', onVisibility)
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost)
      const materials = new Set<THREE.Material>()
      scene.traverse(object => { if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
        object.geometry.dispose()
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material)
        if (object instanceof THREE.InstancedMesh) object.dispose()
      } })
      materials.forEach(material => material.dispose()); model.dispose(); lighting.dispose(); renderer.dispose(); renderer.domElement.remove()
    }
  }, [])
  useEffect(() => { if (!autoPlay) controllerRef.current?.show(step) }, [step, autoPlay])

  return <figure className={`anatomy-scene ${failed ? 'is-fallback' : ''}`} aria-label={autoPlay ? "Mô phỏng tự động quy trình giao hàng bằng drone" : "Mô phỏng giao hàng và khám phá tủ nhận, điều khiển từng hành động"}>
    <div className="anatomy-canvas" ref={hostRef} aria-hidden="true" />
    {failed && <img className="delivery-fallback-image" src="/media/research/bay-park-drone.jpg" alt="Drone và tủ nhận tại Bay Park · Shenzhen Daily / Nanshan Government" />}
    <article ref={explanationRef} className="delivery-explanation" aria-live={autoPlay ? "off" : "polite"} aria-atomic="true">
      <div key={autoPlay ? activeStep : step} className="delivery-explanation-content">
        <h2>{copy.title}</h2>
      </div>
    </article>
    {autoPlay && !failed && <div className="anatomy-playback" role="group" aria-label="Điều khiển mô phỏng tự động">
      <span>{String(activeStep + 1).padStart(2, '0')} / {deliverySteps.length}</span>
      <button className="tour-button tour-secondary" onClick={() => playback === 'ended' ? controllerRef.current?.restart() : controllerRef.current?.setPlaying(playback !== 'playing')}>
        {playback === 'playing' ? <Pause size={16} /> : <Play size={16} />}{playback === 'ended' ? 'Chạy lại' : playback === 'playing' ? 'Tạm dừng' : 'Tiếp tục'}
      </button>
      <button className="tour-button tour-secondary anatomy-restart" aria-label="Chạy lại từ đầu" title="Chạy lại từ đầu" onClick={() => controllerRef.current?.restart()}><ArrowCounterClockwise size={17} /></button>
    </div>}
    {failed && <figcaption>Ảnh tham khảo · 3D chưa khả dụng trên thiết bị này</figcaption>}
  </figure>
}
