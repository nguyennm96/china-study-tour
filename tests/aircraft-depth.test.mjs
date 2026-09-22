import test from 'node:test'
import assert from 'node:assert/strict'
import { PerspectiveCamera, Vector3 } from 'three'
import { frameAircraftCamera } from '../src/components/ahamoveAircraft.ts'

test('thin livery stays distinguishable from the fuselage at small presentation sizes', () => {
  for (const [width, height] of [[468, 560], [776, 778], [1536, 1080], [3072, 2160]]) {
    const camera = new PerspectiveCamera(32)
    frameAircraftCamera(camera, width, height)
    camera.updateMatrixWorld()
    const flightSize = Math.min(245, width * .24, height * .29) * .8
    // Original 12mm paint offset on a 38m aircraft; conservative 10% depth-facing component.
    const offset = .012 / 38 * flightSize * .1
    const base = new Vector3(0, 0, 0).project(camera).z
    const paint = new Vector3(0, 0, offset).project(camera).z
    const depthSteps = Math.abs(base - paint) / 2 * (2 ** 24 - 1)
    assert.ok(depthSteps > 16, `${width}x${height}: enough separation in a 24-bit depth buffer`)
    for (const z of [-flightSize, flightSize]) assert.ok(Math.abs(new Vector3(0, 0, z).project(camera).z) < 1, 'entire aircraft stays inside clipping planes')
  }
})
