import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import type { DeliveryPose } from './deliveryAnimation'
import type { DeliveryStage } from '../data/deliveryAnatomy'

// White enclosure and yellow fascia are inspired by the trip photographs.
// The lifting tray and sliding hatch remain an illustrative mechanism.
export function makeDeliveryCabinet(scene: THREE.Object3D) {
  const material = (color: string, roughness = .45, metalness = .12) => new THREE.MeshStandardMaterial({ color, roughness, metalness })
  const ceramic = material('#f1f0e8', .34), yellow = material('#f5bb28', .4)
  const graphite = material('#24333b', .52), interior = material('#46545b', .66)
  const steel = material('#abbcc2', .31, .65), rubber = material('#202c31', .84, 0)
  const glass = material('#112f3c', .2, .32), screen = material('#163c4c', .3)
  const status = material('#94d3bd', .3); status.emissive.set('#70c9a8'); status.emissiveIntensity = .45
  const textures: THREE.Texture[] = []
  const box = (parent: THREE.Object3D, size: [number, number, number], mat: THREE.Material, at: [number, number, number], radius = .025) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(...size, 3, radius), mat)
    mesh.position.set(...at); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh
  }
  const cylinder = (parent: THREE.Object3D, radius: number, height: number, mat: THREE.Material, at: [number, number, number]) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 24), mat)
    mesh.position.set(...at); mesh.castShadow = true; parent.add(mesh); return mesh
  }
  const label = (parent: THREE.Object3D, text: string, width: number, height: number, at: [number, number, number], color = '#24333b') => {
    const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 128
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = color; ctx.font = '600 54px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(text, 256, 64)
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; textures.push(texture)
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }))
    mesh.position.set(...at); parent.add(mesh)
  }

  // A shallow stone footing replaces the oversized black display turntable.
  box(scene, [3.15, .07, 2.35], material('#d5ddda', .85, 0), [.8, -.025, .18], .035)
  const cabinet = new THREE.Group(); cabinet.position.x = .8; cabinet.name = 'Illustrative delivery locker'; scene.add(cabinet)
  box(cabinet, [1.68, .16, 1.3], graphite, [0, .1, 0], .045)
  box(cabinet, [1.59, .06, 1.21], steel, [0, .21, 0], .025)
  for (const x of [-.61, .61]) for (const z of [-.43, .43]) cylinder(cabinet, .065, .08, rubber, [x, .055, z])
  box(cabinet, [1.53, 2.16, .1], interior, [0, 1.33, -.55])

  const walls = [-1, 1].map(side => {
    const group = new THREE.Group(); group.position.set(side * .79, 1.34, 0); cabinet.add(group)
    box(group, [.12, 2.2, 1.24], ceramic, [0, 0, 0], .048)
    box(group, [.014, 1.63, .08], yellow, [side * .065, .12, .37], .006)
    for (let i = 0; i < 5; i++) box(group, [.013, .022, .27], graphite, [side * .066, -.74 + i * .047, -.14], .006)
    return group
  })
  for (const x of [-.69, .69]) for (const z of [-.46, .5]) box(cabinet, [.047, 2.12, .047], steel, [x, 1.33, z], .009)
  for (const y of [.27, .975, 1.675, 2.405]) box(cabinet, [1.53, .052, .105], ceramic, [0, y, .583], .012)
  box(cabinet, [.11, 2.14, .09], ceramic, [-.727, 1.335, .58])
  box(cabinet, [.28, 2.14, .10], ceramic, [.63, 1.335, .593], .04)

  // Two yellow front sections give the locker its recognizable silhouette.
  box(cabinet, [1.125, .68, .082], yellow, [-.115, 2.04, .608], .045)
  box(cabinet, [.94, .37, .026], rubber, [-.115, 1.997, .657], .045)
  box(cabinet, [.875, .31, .014], glass, [-.115, 1.997, .675], .035)
  label(cabinet, 'DRONE DELIVERY', .85, .092, [-.115, 2.282, .656])
  box(cabinet, [1.125, .67, .082], yellow, [-.115, .61, .608], .045)
  label(cabinet, 'PICK UP', .53, .105, [-.11, .755, .656])
  for (let i = 0; i < 5; i++) box(cabinet, [.53, .018, .012], graphite, [-.115, .45 + i * .043, .655], .007)
  for (const x of [-.57, .34]) cylinder(cabinet, .018, .028, steel, [x, .26, .51])

  box(cabinet, [.225, .45, .035], rubber, [.63, 1.99, .661], .027)
  box(cabinet, [.183, .366, .015], screen, [.63, 1.995, .685], .019)
  box(cabinet, [.095, .009, .006], ceramic, [.63, 2.13, .696], .002)
  for (const x of [.585, .638, .691]) for (const y of [1.982, 2.035]) box(cabinet, [.034, .03, .006], ceramic, [x, y, .696], .004)
  box(cabinet, [.134, .043, .006], yellow, [.63, 1.893, .696], .008)
  const nfc = cylinder(cabinet, .066, .018, graphite, [.63, 1.62, .665]); nfc.rotation.x = Math.PI / 2
  for (const radius of [.025, .044]) {
    const arc = new THREE.Mesh(new THREE.TorusGeometry(radius, .003, 4, 24, Math.PI * 1.25), steel)
    arc.position.set(.63, 1.62, .679); arc.rotation.z = -.6; cabinet.add(arc)
  }
  label(cabinet, '01', .16, .08, [.63, 1.39, .659])
  box(cabinet, [.07, .02, .025], status, [.63, 2.3, .665], .009)

  const rails = new THREE.Group(); cabinet.add(rails)
  for (const x of [-.43, .43]) {
    box(rails, [.07, 1.87, .09], graphite, [x, 1.34, -.38], .012)
    cylinder(rails, .019, 1.79, steel, [x, 1.34, -.32])
    box(rails, [.07, .2, .11], steel, [x, 1.09, -.31], .009)
  }
  const tray = new THREE.Group(); cabinet.add(tray)
  box(tray, [1.045, .055, .94], steel, [0, 0, 0], .012)
  box(tray, [.95, .013, .84], rubber, [0, .033, 0], .006)
  for (const x of [-.515, .515]) box(tray, [.025, .09, .9], steel, [x, .052, 0], .008)
  box(tray, [1.06, .095, .04], steel, [0, -.015, .46], .012)
  const door = new THREE.Group(); door.position.set(-.677, 1.325, .652); cabinet.add(door)
  box(door, [1.125, .65, .083], yellow, [.5625, 0, 0], .045)
  box(door, [.952, .48, .021], rubber, [.55, .015, .05], .045)
  box(door, [.895, .423, .014], glass, [.55, .015, .066], .035)
  box(door, [.055, .22, .035], graphite, [1.06, -.015, .06], .015)
  for (const y of [-.21, .21]) cylinder(door, .027, .13, steel, [.015, y, -.025])

  const roof = new THREE.Group(); roof.position.y = 2.45; cabinet.add(roof)
  for (const z of [-.615, .615]) {
    box(roof, [1.91, .11, .16], ceramic, [0, 0, z], .04)
    box(roof, [1.70, .012, .032], graphite, [0, .062, z], .005)
  }
  for (const x of [-.85, .85]) box(roof, [.18, .11, 1.2], ceramic, [x, 0, 0], .03)
  const hatches = [-1, 1].map(side => {
    const group = new THREE.Group(); group.position.x = side * .407; roof.add(group)
    box(group, [.79, .069, 1.1], ceramic, [0, .027, 0], .025)
    box(group, [.05, .009, .75], yellow, [side * .31, .066, 0], .004)
    return group
  })
  box(roof, [1.25, .018, .015], status, [0, -.027, .702], .006)

  return {
    apply(pose: DeliveryPose, stage: DeliveryStage) {
      walls.forEach((wall, index) => { wall.position.x = (index ? 1 : -1) * (.79 + pose.shell * .5) })
      roof.position.y = 2.45 + pose.shell * .47
      hatches.forEach((hatch, index) => { hatch.position.x = (index ? 1 : -1) * (.407 + pose.roof * .58) })
      rails.position.z = pose.shell * .36
      tray.position.set(0, stage === 'system' || stage === 'delivery' || stage === 'receiver' ? Math.min(2.2, Math.max(1.08, pose.cargoY - .27)) : 1.08, pose.tray)
      door.rotation.y = -pose.door * Math.PI * .64 - pose.shell * Math.PI * .35
      door.position.x = -.677 - pose.shell * 1.1
      screen.emissive.set(pose.screen > .5 ? '#4b9d94' : '#163c4c'); screen.emissiveIntensity = .2 + pose.screen * .5
    },
    dispose() { textures.forEach(texture => texture.dispose()) },
  }
}
