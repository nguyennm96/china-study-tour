import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import test from 'node:test'
import { Box3, Matrix4, Quaternion, Vector3 } from 'three'

const bytes = readFileSync(new URL('../public/models/ahamove-a320-v3.glb', import.meta.url))
const length = bytes.readUInt32LE(12)
const data = JSON.parse(bytes.toString('utf8', 20, 20 + length))
const binary = bytes.subarray(28 + length)

test('loaded aircraft is a self-contained volumetric A320 facing +X', () => {
  assert.equal(bytes.toString('ascii', 0, 4), 'glTF')
  assert.equal(bytes.readUInt32LE(4), 2)
  assert.ok(bytes.length < 4 * 1024 * 1024, 'keep the opening asset under 4 MiB')
  assert.ok(data.buffers.every((buffer) => !buffer.uri), 'no external dependencies')
  const points = []
  for (const node of data.nodes.filter((node) => node.mesh !== undefined)) {
    const matrix = node.matrix ? new Matrix4().fromArray(node.matrix) : new Matrix4().compose(new Vector3(...(node.translation ?? [0, 0, 0])), new Quaternion(...(node.rotation ?? [0, 0, 0, 1])), new Vector3(...(node.scale ?? [1, 1, 1])))
    for (const primitive of data.meshes[node.mesh].primitives) {
      assert.ok(primitive.attributes.NORMAL !== undefined, 'all surfaces support PBR lighting')
      const accessor = data.accessors[primitive.attributes.POSITION], view = data.bufferViews[accessor.bufferView]
      for (let i = 0; i < accessor.count; i++) {
        const offset = (view.byteOffset ?? 0) + (accessor.byteOffset ?? 0) + i * (view.byteStride ?? 12)
        points.push(new Vector3(binary.readFloatLE(offset), binary.readFloatLE(offset + 4), binary.readFloatLE(offset + 8)).applyMatrix4(matrix))
      }
    }
  }
  const bounds = new Box3().setFromPoints(points), size = bounds.getSize(new Vector3())
  assert.ok(points.length > 20000, 'reject an image quad or placeholder primitive')
  assert.ok(size.x > 36 && size.x < 40 && size.z > 33 && size.z < 36 && size.y > 10, 'real A320 airframe dimensions')
  assert.ok(points.filter((point) => point.y > bounds.max.y - 1).every((point) => point.x < 0), 'tail behind +X nose')
})

test('official orange and navy stay exact in linear PBR base colors', () => {
  for (const [label, hex] of [['orange', 'FF7F32'], ['navy', '0D4073']]) {
    const material = data.materials.find((m) => m.name.includes(`official ${label}`))
    assert.ok(material)
    const expected = [0, 2, 4].map((i) => {
      const c = parseInt(hex.slice(i, i + 2), 16) / 255
      return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4
    })
    expected.forEach((value, i) => assert.ok(Math.abs(material.pbrMetallicRoughness.baseColorFactor[i] - value) < .00001))
  }
  assert.equal(data.images, undefined, 'vector marks and paint use geometry, no generated logo bitmap')
})
