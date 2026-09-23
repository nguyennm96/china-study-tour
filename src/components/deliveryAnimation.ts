import type { DeliveryStage } from '../data/deliveryAnatomy'

export const DELIVERY_ANIMATION_SECONDS = 4.8
export const ROOFTOP_JOURNEY_SECONDS = 11
export const OVERVIEW_SCALE = .38
export const OVERVIEW_ORIGIN = [2.8, .22, 1.1] as const
export function easeWindow(time: number, start: number, end: number) {
  const t = Math.max(0, Math.min(1, (time - start) / (end - start)))
  return t * t * (3 - 2 * t)
}
const mix = (a: number, b: number, t: number) => a + (b - a) * t

export function rooftopJourney(time: number) {
  const walk = easeWindow(time, .2, 1.8), load = easeWindow(time, 1.8, 2.6)
  // Release the parcel, turn in place, then walk clear before takeoff.
  const retreat = easeWindow(time, 2.9, 3.65), lift = easeWindow(time, 3.75, 4.5)
  const flight = easeWindow(time, 4.5, 7.1), descent = easeWindow(time, 7.1, 8.2)
  const transfer = easeWindow(time, 8.25, 9.05), leave = easeWindow(time, 9.15, 10.1)
  const pickup = easeWindow(time, 10, 10.7)
  const workerX = mix(-3.55, -2.25, walk) + load * .5 - retreat * 1.45
  const drone = {
    x: mix(-1.45, OVERVIEW_ORIGIN[0] + .8 * OVERVIEW_SCALE, flight) + leave * .5,
    y: mix(2.38 + lift * .8, OVERVIEW_ORIGIN[1] + 3.1 * OVERVIEW_SCALE, descent) + leave * .75,
    z: mix(.7, OVERVIEW_ORIGIN[2], flight),
  }
  const handoff = easeWindow(time, 2.4, 2.6)
  const cargo = {
    x: mix(workerX + .3, drone.x - leave * .5, handoff),
    y: mix(2.13, drone.y - .65 * OVERVIEW_SCALE - leave * .75, load),
    z: mix(.7, drone.z, load),
  }
  cargo.y = mix(cargo.y, OVERVIEW_ORIGIN[1] + 1.35 * OVERVIEW_SCALE, transfer)
  cargo.z += pickup * 1.05 * OVERVIEW_SCALE
  return {
    drone, cargo, workerX,
    workerWalk: Math.sin(time * 12) * (
      easeWindow(time, .2, .35) * (1 - easeWindow(time, 2.45, 2.6)) +
      easeWindow(time, 2.9, 3.05) * (1 - easeWindow(time, 3.5, 3.65))
    ),
    workerReach: 1 - easeWindow(time, 2.4, 2.6),
    rotors: easeWindow(time, 3.65, 3.9),
    roof: easeWindow(time, 6.8, 7.4) * (1 - easeWindow(time, 9.15, 9.8)),
    door: easeWindow(time, 9.85, 10.35), tray: pickup * .65,
    screen: easeWindow(time, 9.1, 9.5),
    phase: time < 1.8 ? 0 : time < 3.75 ? 1 : time < 7.1 ? 2 : time < 9.15 ? 3 : 4,
  }
}

export function deliveryPose(stage: DeliveryStage, time: number) {
  const pose = {
    overview: stage === 'system' ? 1 : 0,
    focusX: .1, focusY: 2.05, focusZ: 0, viewWidth: 6.1, viewHeight: 5.6,
    workerX: -3.55, workerWalk: 0, workerReach: 0, rotors: 1,
    droneX: -1.2, droneY: 3.7, droneZ: -.15,
    cargoX: -1.2, cargoY: 3.05, cargoZ: -.15,
    lid: 0, battery: 0, arms: 0, roof: 0, shell: 0, door: 0, tray: 0, screen: 0,
  }
  if (stage === 'system') {
    const journey = rooftopJourney(time)
    const wide = easeWindow(time, 3.75, 4.65), arrival = easeWindow(time, 7.1, 8.3)
    Object.assign(pose, {
      focusX: mix(mix(-2.1, 0, wide), OVERVIEW_ORIGIN[0] + .8 * OVERVIEW_SCALE, arrival),
      focusY: mix(mix(1.75, 1.55, wide), 1.05, arrival),
      focusZ: mix(mix(.6, .2, wide), OVERVIEW_ORIGIN[2] + .18 * OVERVIEW_SCALE, arrival),
      viewWidth: mix(mix(5.8, 10.8, wide), 4.6, arrival),
      viewHeight: mix(mix(4.6, 7.6, wide), 3.8, arrival),
      droneX: (journey.drone.x - OVERVIEW_ORIGIN[0]) / OVERVIEW_SCALE,
      droneY: (journey.drone.y - OVERVIEW_ORIGIN[1]) / OVERVIEW_SCALE,
      droneZ: (journey.drone.z - OVERVIEW_ORIGIN[2]) / OVERVIEW_SCALE,
      cargoX: (journey.cargo.x - OVERVIEW_ORIGIN[0]) / OVERVIEW_SCALE,
      cargoY: (journey.cargo.y - OVERVIEW_ORIGIN[1]) / OVERVIEW_SCALE,
      cargoZ: (journey.cargo.z - OVERVIEW_ORIGIN[2]) / OVERVIEW_SCALE,
      workerX: journey.workerX, workerWalk: journey.workerWalk, workerReach: journey.workerReach,
      rotors: journey.rotors, roof: journey.roof, door: journey.door, tray: journey.tray, screen: journey.screen,
    })
  }
  if (stage === 'cargo') Object.assign(pose, { cargoX: -1.0, cargoY: 1.85, cargoZ: 1.15, lid: .6 })
  if (stage === 'aircraft') Object.assign(pose, { droneX: -.75, droneY: 3.15, battery: .5, arms: .23, cargoX: -1.6, cargoY: 1.5, cargoZ: .9 })
  if (stage === 'receiver') Object.assign(pose, { droneX: .8, droneY: 3.4, cargoX: .8, cargoY: 2.75, roof: 1 })
  if (stage === 'storage') Object.assign(pose, { droneX: -1.65, cargoX: .8, cargoY: 1.35, cargoZ: 0, shell: 1, roof: 1 })
  if (stage === 'collection') Object.assign(pose, { droneX: -1.65, cargoX: .8, cargoY: 1.35, cargoZ: 1.05, door: 1, tray: .65, screen: 1 })
  if (stage === 'delivery') {
    const approach = easeWindow(time, 0, 1.15)
    const transfer = easeWindow(time, 1.2, 2.3)
    const depart = easeWindow(time, 2.35, 3.25)
    const collect = easeWindow(time, 3.45, 4.3)
    Object.assign(pose, {
      droneX: mix(-1.6, .8, approach) - depart * 2.45,
      droneY: mix(3.9, 3.1, approach) + depart * .7,
      droneZ: 0,
      cargoX: mix(-1.6, .8, approach),
      cargoY: mix(mix(3.25, 2.45, approach), 1.35, transfer), cargoZ: collect * 1.05,
      roof: easeWindow(time, .15, .85) * (1 - easeWindow(time, 2.4, 3.15)),
      door: easeWindow(time, 3.15, 3.75), tray: collect * .65,
      screen: easeWindow(time, 2.4, 2.65),
    })
  }
  return pose
}
export type DeliveryPose = ReturnType<typeof deliveryPose>
export const journeyCheckpoints = [0, 1.8, 2.6, 3.75, 4.5, 7.1, 8.25, 9.15, 9.85] as const
export function deliveryStepStage(step: number): DeliveryStage {
  return step < journeyCheckpoints.length ? 'system' : step === 9 ? 'receiver' : step === 10 ? 'storage' : 'collection'
}
export function deliveryStepPose(step: number, time: number = journeyCheckpoints[Math.min(step, 8)]) {
  if (step < journeyCheckpoints.length) {
    const pose = deliveryPose('system', time)
    if (step === 0) Object.assign(pose, { focusX: 0, focusY: 1.55, focusZ: .2, viewWidth: 12.5, viewHeight: 8.3 })
    return pose
  }
  const pose = deliveryPose(deliveryStepStage(step), 0)
  pose.droneX = -1.65; pose.droneY = 3.8; pose.droneZ = 0
  pose.workerX = -3.2
  Object.assign(pose, { focusX: .8, focusY: 1.4, focusZ: .18, viewWidth: step === 10 ? 6.3 : 5.8, viewHeight: step === 10 ? 4.8 : 4.6 })
  if (step === 9) Object.assign(pose, { cargoX: .8, cargoY: 1.35, cargoZ: 0 })
  if (step === 11) Object.assign(pose, { door: 0, tray: 0, cargoZ: 0 })
  return pose
}
export function deliveryPhase(time: number) {
  return time < 1.2 ? 'Drone tiếp cận' : time < 2.35 ? 'Tủ tiếp nhận hộp' : time < 3.15 ? 'Drone rời đi' : time < 4.3 ? 'Mở cửa lấy hàng' : 'Hoàn tất lượt minh họa'
}

// One continuous clock: the handoff choreography is slowed down for presenting,
// then the camera moves through the cabinet views without checkpoint clicks.
export const DELIVERY_AUTOPLAY_SECONDS = 47.5
export function deliveryAutoplayFrame(seconds: number) {
  const time = Math.max(0, Math.min(DELIVERY_AUTOPLAY_SECONDS, seconds))
  const journeyEnd = 29.55
  const journeyTime = Math.min(9.85, time / 3)
  if (time < journeyEnd) {
    const pose = deliveryPose('system', journeyTime)
    const opening = deliveryStepPose(0)
    const cameraBlend = easeWindow(time, 0, 3)
    for (const key of ['focusX', 'focusY', 'focusZ', 'viewWidth', 'viewHeight'] as const) {
      pose[key] = mix(opening[key], pose[key], cameraBlend)
    }
    // These boundaries label the action in progress, not the next checkpoint.
    const starts = [0, .2, 1.8, 2.65, 3.75, 4.5, 7.1, 8.25, 9.15]
    const step = starts.reduce((found, start, index) => journeyTime >= start ? index : found, 0)
    return { pose, step, stage: 'system' as DeliveryStage, journeyTime, complete: false }
  }
  const views = [
    { start: journeyEnd, end: 33.5, step: 9 },
    { start: 33.5, end: 38.5, step: 10 },
    { start: 38.5, end: 42.5, step: 11 },
    { start: 42.5, end: DELIVERY_AUTOPLAY_SECONDS, step: 12 },
  ]
  const view = views.find(item => time < item.end) ?? views[views.length - 1]
  const from = deliveryStepPose(view.step - 1)
  const to = deliveryStepPose(view.step)
  const blend = easeWindow(time, view.start, view.start + 2.4)
  const pose = { ...from }
  for (const key of Object.keys(pose) as (keyof DeliveryPose)[]) pose[key] = mix(from[key], to[key], blend)
  return { pose, step: view.step, stage: deliveryStepStage(view.step), journeyTime, complete: time >= DELIVERY_AUTOPLAY_SECONDS }
}
