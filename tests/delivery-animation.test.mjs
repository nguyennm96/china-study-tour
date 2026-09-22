import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync(new URL('../src/components/deliveryAnimation.ts', import.meta.url), 'utf8')
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const { deliveryAutoplayFrame, DELIVERY_AUTOPLAY_SECONDS, deliveryPose, deliveryPhase, deliveryStepPose, journeyCheckpoints, DELIVERY_ANIMATION_SECONDS, rooftopJourney, ROOFTOP_JOURNEY_SECONDS, OVERVIEW_ORIGIN, OVERVIEW_SCALE } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)

test('parcel stays with drone until the receiving hatch is fully open', () => {
  for (let time = 0; time <= 1.15; time += .05) {
    const pose = deliveryPose('delivery', time)
    assert.ok(Math.abs(pose.cargoX - pose.droneX) < 1e-9)
    assert.ok(Math.abs(pose.droneY - pose.cargoY - .65) < 1e-9)
  }
  assert.equal(deliveryPose('delivery', 1.2).roof, 1)
})

test('the hatch stays open during transfer; aircraft leaves before customer collection', () => {
  for (let time = 1.2; time <= 2.3; time += .05) {
    const pose = deliveryPose('delivery', time)
    assert.equal(pose.roof, 1)
    assert.equal(pose.door, 0)
    assert.ok(pose.cargoY >= 1.35 && pose.cargoY <= 2.45)
  }
  const ready = deliveryPose('delivery', 3.15)
  assert.equal(ready.roof, 0)
  assert.equal(ready.door, 0)
  assert.ok(ready.droneX < 0)
})

test('one run settles with the parcel available through the open front door', () => {
  const final = deliveryPose('delivery', DELIVERY_ANIMATION_SECONDS)
  assert.equal(final.roof, 0)
  assert.equal(final.door, 1)
  assert.equal(final.screen, 1)
  assert.equal(final.cargoZ, 1.05)
  assert.deepEqual(deliveryPose('delivery', 20), final)
  assert.equal(deliveryPhase(DELIVERY_ANIMATION_SECONDS), 'Hoàn tất lượt minh họa')
})

test('rooftop worker walks with the parcel, loads it and steps away before takeoff', () => {
  assert.ok(rooftopJourney(1.6).workerX > rooftopJourney(.3).workerX)
  for (const time of [.3, .8, 1.5]) {
    const pose = rooftopJourney(time)
    assert.ok(Math.abs(pose.cargo.x - pose.workerX - .3) < 1e-9)
    assert.equal(pose.rotors, 0)
  }
  const ready = rooftopJourney(3.65)
  assert.ok(ready.drone.x - ready.workerX > 1.5)
  assert.equal(ready.drone.y, 2.38)
  assert.equal(ready.workerReach, 0)
  assert.ok(rooftopJourney(4.5).drone.y > ready.drone.y)
})

test('the parcel stays in the worker’s hands until the last part of attachment', () => {
  for (const time of [1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4]) {
    const pose = rooftopJourney(time)
    assert.ok(Math.abs(pose.cargo.x - pose.workerX - .3) < 1e-9, `hands separate at ${time}`)
    assert.equal(pose.workerReach, 1)
  }
  const attached = rooftopJourney(2.6)
  assert.ok(Math.abs(attached.cargo.x - attached.drone.x) < 1e-9)
  assert.equal(attached.workerReach, 0)
  assert.equal(rooftopJourney(2.6).workerX, rooftopJourney(2.65).workerX)
})

test('the same parcel stays attached in flight and transfers through the open cabinet roof', () => {
  for (let time = 2.6; time < 8.2; time += .1) {
    const pose = rooftopJourney(time)
    assert.ok(Math.abs(pose.cargo.x - pose.drone.x) < 1e-9)
    assert.ok(Math.abs(pose.drone.y - pose.cargo.y - .65 * OVERVIEW_SCALE) < 1e-9)
  }
  assert.equal(rooftopJourney(8.25).roof, 1)
  const final = rooftopJourney(ROOFTOP_JOURNEY_SECONDS)
  assert.equal(final.cargo.x, OVERVIEW_ORIGIN[0] + .8 * OVERVIEW_SCALE)
  assert.equal(final.cargo.y, OVERVIEW_ORIGIN[1] + 1.35 * OVERVIEW_SCALE)
  assert.equal(final.roof, 0)
  assert.equal(final.door, 1)
  assert.deepEqual(rooftopJourney(20), final)
})

test('manual checkpoints stop before the next action and keep the package in the cabinet during its explanation', () => {
  assert.equal(deliveryStepPose(0).workerX, -3.55)
  assert.equal(deliveryStepPose(0).rotors, 0)
  assert.equal(deliveryStepPose(1).workerX, -2.25)
  assert.ok(deliveryStepPose(1).cargoX < deliveryStepPose(1).droneX - .45)
  assert.equal(deliveryStepPose(2).workerX, -1.75)
  assert.equal(deliveryStepPose(2).rotors, 0)
  assert.ok(deliveryStepPose(3).workerX < -3)
  assert.equal(deliveryStepPose(6).roof, 1)
  assert.equal(deliveryStepPose(7).cargoY, 1.35)
  assert.equal(deliveryStepPose(8).door, 0)
  assert.equal(deliveryStepPose(8).roof, 0)
  for (const step of [9, 10, 11]) {
    const pose = deliveryStepPose(step)
    assert.equal(pose.cargoX, .8)
    assert.equal(pose.cargoY, 1.35)
    assert.equal(pose.cargoZ, 0)
    assert.equal(pose.door, 0)
  }
  assert.equal(deliveryStepPose(10).shell, 1)
  assert.equal(deliveryStepPose(11).screen, 1)
  assert.equal(deliveryStepPose(12).door, 1)
  assert.equal(deliveryStepPose(12).cargoZ, 1.05)
  assert.ok(journeyCheckpoints.every((time, index) => !index || time > journeyCheckpoints[index - 1]))
})


test('autoplay advances through the complete delivery without checkpoint input', () => {
  const visited = new Set()
  let lastStep = -1
  for (let time = 0; time <= DELIVERY_AUTOPLAY_SECONDS; time += .1) {
    const frame = deliveryAutoplayFrame(time)
    visited.add(frame.step)
    assert.ok(frame.step >= lastStep, `step went backwards at ${time}`)
    lastStep = frame.step
    for (const value of Object.values(frame.pose)) assert.ok(Number.isFinite(value))
  }
  assert.equal(visited.size, 13)
  assert.equal(deliveryAutoplayFrame(0).step, 0)
  assert.equal(deliveryAutoplayFrame(DELIVERY_AUTOPLAY_SECONDS).complete, true)
  assert.equal(deliveryAutoplayFrame(DELIVERY_AUTOPLAY_SECONDS).pose.door, 1)
  assert.equal(deliveryAutoplayFrame(DELIVERY_AUTOPLAY_SECONDS).pose.cargoZ, 1.05)
  assert.deepEqual(deliveryAutoplayFrame(100), deliveryAutoplayFrame(DELIVERY_AUTOPLAY_SECONDS))
})

test('autoplay camera and parcel remain continuous across action and detail boundaries', () => {
  for (const time of [.6, 5.4, 7.95, 8.7, 10.95, 11.25, 13.5, 21.3, 24.75, 27.45, 29.55, 33.5, 38.5, 42.5]) {
    const before = deliveryAutoplayFrame(time - .0001).pose
    const after = deliveryAutoplayFrame(time + .0001).pose
    for (const key of Object.keys(before)) {
      assert.ok(Math.abs(before[key] - after[key]) < .01, `${key} jumps at ${time}: ${before[key]} -> ${after[key]}`)
    }
  }
})
