import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const sourceUrl = source => `data:text/javascript;base64,${Buffer.from(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText).toString('base64')}`
const animationUrl = sourceUrl(readFileSync(new URL('../src/components/deliveryAnimation.ts', import.meta.url), 'utf8'))
let workerSource = readFileSync(new URL('../src/components/DeliveryWorker.ts', import.meta.url), 'utf8')
for (const dependency of ['three', 'three/addons/loaders/GLTFLoader.js', 'three/addons/utils/BufferGeometryUtils.js']) workerSource = workerSource.replace(`'${dependency}'`, JSON.stringify(import.meta.resolve(dependency)))
workerSource = workerSource.replace("'./deliveryAnimation'", JSON.stringify(animationUrl))
const { makeDeliveryWorker } = await import(sourceUrl(workerSource))
const { rooftopJourney } = await import(animationUrl)
const glb = readFileSync(new URL('../public/models/delivery-worker.glb', import.meta.url))

async function loadWorker() {
  const worker = makeDeliveryWorker()
  await worker.load(await new GLTFLoader().parseAsync(glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength), ''))
  return worker
}
function update(worker, time) {
  const pose = rooftopJourney(time)
  worker.update(pose.workerX, pose.workerWalk, pose.workerReach, time)
  return pose
}
function position(worker, name) {
  return worker.root.worldToLocal(worker.root.getObjectByName(name).getWorldPosition(new THREE.Vector3()))
}

test('carrying, turning and walking away keep a supporting foot on the rooftop', async () => {
  const worker = await loadWorker()
  try {
    for (let time = 0; time <= 3.8; time += .025) {
      update(worker, time)
      const left = position(worker, 'FootL'), right = position(worker, 'FootR')
      assert.ok(Math.min(left.y, right.y) >= .015, `foot penetrated roof at ${time}`)
      assert.ok(Math.min(left.y, right.y) <= .021, `both feet floated at ${time}`)
      assert.ok(Math.max(left.y, right.y) < .13, `foot lifted implausibly at ${time}`)
    }
  } finally { worker.dispose() }
})

test('the palms keep a steady carrying grip while the legs walk', async () => {
  const worker = await loadWorker()
  try {
    for (let time = 0; time <= 2.4; time += .025) {
      update(worker, time)
      for (const [name, z] of [['WristL', -.1], ['WristR', .1]]) {
        const palm = position(worker, name)
        assert.ok(palm.distanceTo(new THREE.Vector3(.15, .49, z)) < .012, `grip slipped at ${time}`)
      }
    }
  } finally { worker.dispose() }
})

test('restarting after walking away restores the same carrying pose and direction', async () => {
  const worker = await loadWorker()
  try {
    const bones = ['FootL', 'FootR', 'WristL', 'WristR']
    update(worker, .8)
    const initial = bones.map(name => position(worker, name))
    update(worker, 3.8); update(worker, 0); update(worker, .8)
    assert.ok(Math.abs(worker.root.rotation.y) < 1e-9)
    bones.forEach((name, index) => assert.ok(position(worker, name).distanceTo(initial[index]) < 1e-7, `${name} retained the previous run's pose`))
  } finally { worker.dispose() }
})

test('the worker releases the parcel, turns in place, then walks forward away from the drone', async () => {
  const worker = await loadWorker()
  try {
    let lastYaw = 0
    for (let time = 2.65; time <= 2.9; time += .025) {
      const pose = update(worker, time)
      assert.equal(pose.workerReach, 0, 'hands must be free before turning')
      assert.equal(pose.workerX, -1.75, 'turn in place before moving away')
      assert.equal(pose.rotors, 0)
      assert.ok(worker.root.rotation.y <= lastYaw, 'turn must keep a consistent direction')
      lastYaw = worker.root.rotation.y
    }
    update(worker, 2.9)
    assert.ok(Math.abs(worker.root.rotation.y + Math.PI) < 1e-9)
    for (let time = 2.95; time <= 3.65; time += .05) {
      const pose = update(worker, time)
      const velocity = rooftopJourney(time + .001).workerX - rooftopJourney(time - .001).workerX
      const forward = new THREE.Vector3(1, 0, 0).applyQuaternion(worker.root.quaternion)
      assert.ok(velocity * forward.x > 0, 'worker must face the direction of travel')
      assert.equal(pose.rotors, 0, 'takeoff waits until the worker has cleared the pad')
    }
  } finally { worker.dispose() }
})
