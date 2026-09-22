import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export function frameAircraftCamera(camera: THREE.PerspectiveCamera, width: number, height: number) {
  camera.aspect = width / height
  // At z=0, one scene unit is one CSS pixel. Keep depth precision for thin paint/logo geometry.
  camera.position.z = height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
  camera.near = camera.position.z * .5
  camera.far = camera.position.z * 1.5
  camera.updateProjectionMatrix()
}

// FlightGear A320, repainted in Blender with the official SVG. See A320-V3-CREDITS.md.
export function disposeAircraft(root: THREE.Object3D) {
  const materials = new Set<THREE.Material>(), textures = new Set<THREE.Texture>()
  root.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return
    child.geometry.dispose()
    for (const material of Array.isArray(child.material) ? child.material : [child.material]) {
      materials.add(material)
      for (const value of Object.values(material)) if (value instanceof THREE.Texture) textures.add(value)
    }
  })
  textures.forEach((texture) => texture.dispose())
  materials.forEach((material) => material.dispose())
}

export async function loadAhamoveAircraft() {
  const gltf = await new GLTFLoader().loadAsync('/models/ahamove-a320-v3.glb')
  gltf.scene.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return
    for (const material of Array.isArray(child.material) ? child.material : [child.material]) {
      if (material instanceof THREE.MeshStandardMaterial) material.envMapIntensity = .25
    }
  })
  const box = new THREE.Box3().setFromObject(gltf.scene)
  gltf.scene.position.sub(box.getCenter(new THREE.Vector3()))
  const root = new THREE.Group()
  root.name = 'Ahamove A320 — official vector livery'
  root.add(gltf.scene)
  // Native model coordinates: nose +X, up +Y, wings along Z. Normalize once.
  root.scale.setScalar(1 / box.getSize(new THREE.Vector3()).x)
  return root
}
