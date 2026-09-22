import * as THREE from 'three'
import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import { easeWindow, rooftopJourney } from './deliveryAnimation'

// Worker by Quaternius, CC0. See public/models/DELIVERY-WORKER-CREDITS.md.
export function makeDeliveryWorker() {
  const root = new THREE.Group(); root.name = 'Rooftop loading operator'
  let disposed = false, mixer: THREE.AnimationMixer | undefined
  let idle: THREE.AnimationAction, walking: THREE.AnimationAction
  let asset: THREE.Group | undefined
  let assetBaseY = 0, walkDuration = 1, idleDuration = 1
  let leftFoot: THREE.Object3D, rightFoot: THREE.Object3D
  let state = { x: -3.55, reach: 1, time: 0 }
  const hands: { upper: THREE.Bone; lower: THREE.Bone; wrist: THREE.Bone; side: number }[] = []
  const target = new THREE.Vector3(), pivot = new THREE.Vector3(), wristPosition = new THREE.Vector3()
  const world = new THREE.Quaternion(), parentWorld = new THREE.Quaternion(), delta = new THREE.Quaternion()
  const from = new THREE.Vector3(), to = new THREE.Vector3(), elbow = new THREE.Vector3(), elbowTarget = new THREE.Vector3(), pole = new THREE.Vector3()
  const upperPose = new THREE.Quaternion(), lowerPose = new THREE.Quaternion()
  const footL = new THREE.Vector3(), footR = new THREE.Vector3()

  function release(model: THREE.Object3D) {
    const materials = new Set<THREE.Material>(), geometries = new Set<THREE.BufferGeometry>()
    model.traverse(object => { if (object instanceof THREE.Mesh) {
      geometries.add(object.geometry)
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material)
      if (object instanceof THREE.SkinnedMesh) object.skeleton.dispose()
    } })
    geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose())
  }

  function install(gltf: GLTF) {
    if (disposed) { release(gltf.scene); return }
    asset = gltf.scene
    const oldGeometries = new Set<THREE.BufferGeometry>()
    asset.traverse(object => { if (object instanceof THREE.Mesh) {
      object.castShadow = true; object.receiveShadow = true; object.frustumCulled = false
      oldGeometries.add(object.geometry)
      const geometry = object.geometry.clone(); geometry.deleteAttribute('normal')
      object.geometry = mergeVertices(geometry, .0001); object.geometry.computeVertexNormals(); geometry.dispose()
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        if (!(material instanceof THREE.MeshStandardMaterial)) continue
        material.metalness = 0; material.roughness = .76
        const palette: Record<string, string> = {
          Worker_Vest: '#ff7f32', Worker_Yellow: '#ffc345', Brown: '#273f54', Brown2: '#23384b',
          Grey: '#536576', LightBrown: '#e3e2d7', Black: '#182631', Skin: '#ccaa86',
        }
        if (palette[material.name]) material.color.set(palette[material.name])
      }
    } })
    oldGeometries.forEach(geometry => geometry.dispose())
    const bounds = new THREE.Box3().setFromObject(asset)
    const scale = .78 / (bounds.max.y - bounds.min.y)
    asset.scale.multiplyScalar(scale); asset.position.y -= bounds.min.y * scale
    assetBaseY = asset.position.y
    asset.rotation.y = Math.PI / 2; root.add(asset)
    mixer = new THREE.AnimationMixer(asset)
    const idleClip = gltf.animations.find(clip => clip.name.endsWith('|Idle_Neutral'))!
    const walkClip = gltf.animations.find(clip => clip.name.endsWith('|Walk'))!
    idleDuration = idleClip.duration; walkDuration = walkClip.duration
    idle = mixer.clipAction(idleClip).play(); walking = mixer.clipAction(walkClip).play()
    leftFoot = asset.getObjectByName('FootL')!; rightFoot = asset.getObjectByName('FootR')!
    for (const [suffix, side] of [['L', -1], ['R', 1]] as const) hands.push({
      upper: asset.getObjectByName(`UpperArm${suffix}`) as THREE.Bone,
      lower: asset.getObjectByName(`LowerArm${suffix}`) as THREE.Bone,
      wrist: asset.getObjectByName(`Wrist${suffix}`) as THREE.Bone, side,
    })
    update(state.x, 0, state.reach, state.time)
  }

  function update(x: number, _walk: number, reach: number, time = 0) {
    state = { x, reach, time }; root.position.set(x, 1.725, .7)
    root.rotation.y = -Math.PI * easeWindow(time, 2.65, 2.9)
    if (!mixer || !asset) return
    // Travel accumulates in both directions: after turning, use the forward
    // walk again rather than playing the gait backwards.
    const distanceTravelled = time <= 2.65 ? x + 3.55 : 1.8 + (-1.75 - x)
    const velocity = (rooftopJourney(time + .001).workerX - rooftopJourney(time - .001).workerX) / .002
    const moving = THREE.MathUtils.smoothstep(Math.abs(velocity), .02, .35)
    walking.setEffectiveWeight(moving); idle.setEffectiveWeight(1 - moving)
    walking.time = THREE.MathUtils.euclideanModulo(distanceTravelled / .72 * walkDuration, walkDuration)
    idle.time = THREE.MathUtils.euclideanModulo(time * .45, idleDuration)
    mixer.update(0)
    asset.position.y = assetBaseY
    root.updateMatrixWorld(true)
    leftFoot.getWorldPosition(footL); rightFoot.getWorldPosition(footR)
    root.worldToLocal(footL); root.worldToLocal(footR)
    asset.position.y += .018 - Math.min(footL.y, footR.y)
    root.updateMatrixWorld(true)
    // A fixed elbow pole avoids twisting at the handoff. The authored gait still
    // controls the torso and legs; only the two carrying arms are adjusted.
    for (const hand of hands) {
      if (reach <= .001) continue
      upperPose.copy(hand.upper.quaternion); lowerPose.copy(hand.lower.quaternion)
      target.set(.15, .49, hand.side * .10); root.localToWorld(target)
      hand.upper.getWorldPosition(pivot); hand.lower.getWorldPosition(elbow); hand.wrist.getWorldPosition(wristPosition)
      const upperLength = pivot.distanceTo(elbow), lowerLength = elbow.distanceTo(wristPosition)
      const distance = Math.min(pivot.distanceTo(target), (upperLength + lowerLength) * .985)
      to.copy(target).sub(pivot).normalize(); target.copy(pivot).addScaledVector(to, distance)
      pole.set(0, -1, hand.side * .65).transformDirection(root.matrixWorld)
      pole.addScaledVector(to, -pole.dot(to)).normalize()
      const along = (upperLength * upperLength - lowerLength * lowerLength + distance * distance) / (2 * distance)
      elbowTarget.copy(pivot).addScaledVector(to, along).addScaledVector(pole, Math.sqrt(Math.max(0, upperLength * upperLength - along * along)))
      for (const bone of [hand.upper, hand.lower]) {
        bone.getWorldPosition(pivot); hand.wrist.getWorldPosition(wristPosition)
        if (bone === hand.upper) hand.lower.getWorldPosition(wristPosition)
        from.copy(wristPosition).sub(pivot).normalize(); to.copy(bone === hand.upper ? elbowTarget : target).sub(pivot).normalize()
        delta.setFromUnitVectors(from, to); bone.getWorldQuaternion(world)
        bone.parent!.getWorldQuaternion(parentWorld).invert()
        bone.quaternion.copy(parentWorld.multiply(delta).multiply(world)); root.updateMatrixWorld(true)
      }
      hand.upper.quaternion.slerp(upperPose, 1 - reach); hand.lower.quaternion.slerp(lowerPose, 1 - reach)
    }
    root.updateMatrixWorld(true)
  }

  return {
    root, update,
    load: async (gltf?: GLTF) => install(gltf ?? await new GLTFLoader().loadAsync('/models/delivery-worker.glb')),
    dispose: () => { disposed = true; mixer?.stopAllAction(); if (asset) { mixer?.uncacheRoot(asset); release(asset); root.remove(asset) } },
  }
}
