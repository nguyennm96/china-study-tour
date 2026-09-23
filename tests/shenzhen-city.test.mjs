import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import ts from 'typescript'

const compile = filename => ts.transpileModule(readFileSync(new URL(`../src/components/${filename}.ts`, import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText.replace(/from '(three[^']*)'/g, (_, name) => `from '${import.meta.resolve(name)}'`)
const animationUrl = `data:text/javascript;base64,${Buffer.from(compile('deliveryAnimation')).toString('base64')}`
const workerJs = compile('DeliveryWorker').replace("from './deliveryAnimation'", `from '${animationUrl}'`)
const workerUrl = `data:text/javascript;base64,${Buffer.from(workerJs).toString('base64')}`
const js = compile('ShenzhenCity').replace("from './DeliveryWorker'", `from '${workerUrl}'`)
const { makeShenzhenCity } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)

test('the park overview keeps its skyline, greenery and delivery route through detail transitions', () => {
  const city = makeShenzhenCity()
  city.update(1, -3.55, 0, 1)
  const heights = city.landmarkGroups.map(group => {
    const bounds = new THREE.Box3().setFromObject(group)
    const size = bounds.getSize(new THREE.Vector3())
    assert.ok(size.x > .5 && size.y > .5 && size.z > .5, `${group.name} must be a 3D volume`)
    return size.y
  })
  assert.equal(heights.length, 1)
  assert.equal(city.landmarkGroups[0].name, 'China Resources Headquarters')
  assert.ok(city.root.getObjectByName('Talent Park lake'))
  assert.ok(city.root.getObjectByName('Lakeside walking loop'))
  assert.ok(city.root.getObjectByName('Park tree trunks').count >= 30)
  city.root.traverse(object => {
    if (!object.geometry) return
    for (const value of object.geometry.attributes.position.array) assert.ok(Number.isFinite(value), `${object.name} has invalid geometry`)
  })
  city.update(0, -3.2, 0, 0)
  assert.equal(city.root.visible, false)
  city.update(1, -3.55, 0, 1)
  assert.equal(city.root.visible, true)
  assert.ok(city.root.getObjectByName('Rooftop loading operator'))
  assert.ok(city.root.getObjectByName('Illustrative rooftop dispatch station'))
})


test('the licensed Worker GLB loads with a skeletal walk and keeps a valid held-parcel pose', async () => {
  const { makeDeliveryWorker } = await import(workerUrl)
  const bytes = readFileSync(new URL('../public/models/delivery-worker.glb', import.meta.url))
  const gltf = await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '')
  const worker = makeDeliveryWorker()
  await worker.load(gltf)
  worker.update(-3.55, 0, 1, 0)
  const box = new THREE.Box3().setFromObject(worker.root)
  assert.ok(box.max.y - box.min.y > .6 && box.max.y - box.min.y < .9)
  const leg = worker.root.getObjectByName('UpperLegL')
  const start = leg.quaternion.clone()
  worker.update(-2.5, 1, 1, .8)
  assert.ok(start.angleTo(leg.quaternion) > .05, 'authored walk must articulate the rig')
  for (const name of ['WristL', 'WristR']) {
    const hand = worker.root.getObjectByName(name).getWorldPosition(new THREE.Vector3())
    assert.ok(hand.toArray().every(Number.isFinite))
    assert.ok(hand.distanceTo(new THREE.Vector3(-2.35, 2.21, name === 'WristL' ? .6 : .8)) < .13)
  }
  let previousFoot
  let maxFootTravel = 0
  const { rooftopJourney } = await import(animationUrl)
  for (let time = 1.8; time <= 2.6; time += .01) {
    const pose = rooftopJourney(time)
    worker.update(pose.workerX, pose.workerWalk, pose.workerReach, time)
    const foot = worker.root.getObjectByName('FootL').getWorldPosition(new THREE.Vector3())
    if (previousFoot) maxFootTravel = Math.max(maxFootTravel, foot.distanceTo(previousFoot))
    previousFoot = foot
  }
  assert.ok(maxFootTravel < .026, `loading foot jumps ${maxFootTravel.toFixed(3)} world units between frames`)
  worker.dispose()
  assert.equal(worker.root.children.length, 0)
})
