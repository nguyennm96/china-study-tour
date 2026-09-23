import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { makeDeliveryWorker } from './DeliveryWorker'

// A park delivery diorama inspired by Talent Park, not a geographic model.
export function makeShenzhenCity() {
  const root = new THREE.Group()
  root.name = 'Talent Park delivery overview'
  const material = (color: string, metalness = .3, roughness = .42) => new THREE.MeshStandardMaterial({ color, metalness, roughness })
  const stone = material('#d3dfe2', .08, .6), glass = material('#40758a', .55, .23)
  const silver = material('#bcd2d9', .5, .28), land = material('#91b47c', .03, .86)
  const road = material('#746858', .04, .8), lawn = material('#568f76', .02, .95)
  const water = material('#246879', .3, .27), orange = material('#ff7f32', .08, .45)
  const lines = new THREE.LineBasicMaterial({ color: '#9ac4d5', transparent: true, opacity: .62 })
  const warmLines = new THREE.LineBasicMaterial({ color: '#ffb77b', transparent: true, opacity: .8 })
  const mesh = (parent: THREE.Object3D, geometry: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0) => {
    const item = new THREE.Mesh(geometry, mat); item.position.set(x, y, z)
    item.castShadow = true; item.receiveShadow = true; parent.add(item); return item
  }
  const box = (parent: THREE.Object3D, x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material) => mesh(parent, new THREE.BoxGeometry(w, h, d), mat, x, y, z)
  const lineSegments = (parent: THREE.Object3D, points: number[], mat = lines) => {
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
    parent.add(new THREE.LineSegments(geometry, mat))
  }
  mesh(root, new RoundedBoxGeometry(9.5, .18, 6.3, 5, .085), material('#233e4e', .25), 0, -.17, .2)
  mesh(root, new RoundedBoxGeometry(9.3, .16, 6.2, 5, .075), water, 0, -.035, .2)
  mesh(root, new RoundedBoxGeometry(8.95, .16, 4.82, 4, .075), land, 0, .075, -.43)
  mesh(root, new RoundedBoxGeometry(8.8, .045, .5, 3, .022), stone, 0, .166, 1.76)
  // A lake and continuous walking loop replace the street grid.
  const lakeOutline = new THREE.Shape()
  lakeOutline.moveTo(-.15, -.85)
  lakeOutline.bezierCurveTo(.65, -1.2, 2.3, -1.15, 3.25, -.65)
  lakeOutline.bezierCurveTo(3.85, -.15, 3.4, .5, 2.25, .6)
  lakeOutline.bezierCurveTo(1.45, .48, 1.15, 1.02, .35, .85)
  lakeOutline.bezierCurveTo(-.55, .75, -.65, -.35, -.15, -.85)
  const lake = mesh(root, new THREE.ShapeGeometry(lakeOutline, 48), material('#69b8c4', .18, .3), 0, .174, 0)
  lake.rotation.x = -Math.PI / 2; lake.name = 'Talent Park lake'
  const shore = lakeOutline.getPoints(80).map(point => new THREE.Vector3(point.x, .185, -point.y))
  const walkingLoop = mesh(root, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(shore, true), 120, .072, 6, true), stone)
  walkingLoop.name = 'Lakeside walking loop'
  box(root, 0, .192, 1.99, 8.7, .012, .016, material('#ddede6', .2, .35))

  const bamboo = new THREE.Group(); bamboo.name = 'China Resources Headquarters'; bamboo.position.set(2, .17, -.95); root.add(bamboo)
  box(bamboo, 0, .1, 0, 1.6, .2, 1.45, stone)
  const profile = [[.20, .48], [.45, .54], [1.2, .57], [2.2, .49], [3, .32], [3.65, .025]]
  mesh(bamboo, new THREE.LatheGeometry(profile.map(([y, radius]) => new THREE.Vector2(radius, y)), 40), glass)
  const radiusAt = (y: number) => {
    const next = Math.max(1, profile.findIndex(level => level[0] >= y))
    const [ay, ar] = profile[next - 1], [by, br] = profile[next]
    return THREE.MathUtils.lerp(ar, br, (y - ay) / (by - ay)) + .007
  }
  const bambooLines: number[] = [], diagonals: number[] = []
  for (let column = 0; column < 28; column++) {
    const angle = column / 28 * Math.PI * 2
    for (let part = 1; part < profile.length; part++) {
      const [ay, ar] = profile[part - 1], [by, br] = profile[part]
      bambooLines.push(Math.cos(angle) * ar, ay, Math.sin(angle) * ar, Math.cos(angle) * br, by, Math.sin(angle) * br)
    }
    for (const [bottom, top] of [[.2, .6], [2.5, 2.95], [2.95, 3.35], [3.35, 3.64]]) {
      const next = angle + Math.PI * 2 / 28
      diagonals.push(Math.cos(angle) * radiusAt(bottom), bottom, Math.sin(angle) * radiusAt(bottom), Math.cos(next) * radiusAt(top), top, Math.sin(next) * radiusAt(top))
    }
  }
  lineSegments(bamboo, bambooLines); lineSegments(bamboo, diagonals, warmLines)

  // A small skyline stays behind the park, clear of the delivery route.
  const blocks = [[-1.25,-2.45,.95],[-.45,-2.45,1.2],[.35,-2.45,.8]]
  const context = new THREE.InstancedMesh(new RoundedBoxGeometry(.45, 1, .43, 2, .025), material('#638b9b', .5, .3), blocks.length)
  const matrix = new THREE.Object3D()
  blocks.forEach(([x, z, h], index) => {
    matrix.position.set(x, .17 + h / 2, z); matrix.scale.set(1, h, 1); matrix.updateMatrix(); context.setMatrixAt(index, matrix.matrix)
    context.setColorAt(index, new THREE.Color(index % 3 ? '#a8c2ca' : '#d7e6e6'))
    box(root, x, .17 + h, z, .48, .045, .46, stone)
    box(root, x + .06, .23 + h, z - .04, .19, .08, .22, glass)
    const facade: number[] = []
    for (let y = .29; y < h + .14; y += .14) facade.push(x - .21, y, z + .218, x + .21, y, z + .218, x + .228, y, z - .2, x + .228, y, z + .2)
    lineSegments(root, facade)
    for (const offset of [-.13, .13]) box(root, x + offset, .17 + h / 2, z + .22, .016, h, .016, silver)
  })
  context.castShadow = true; context.receiveShadow = true; root.add(context)
  const planting = [
    [-4,1.78],[-3.35,1.78],[-2.65,1.78],[-1.95,1.78],[-1.25,1.78],[-.55,1.78],[.15,1.78],[.85,1.78],[1.55,1.78],
    [-4.12,-1.8],[-3.55,-1.85],[-2.9,-1.8],[-2.25,-1.75],[-1.6,-1.7],[-.95,-1.65],[-.3,-1.7],[.4,-1.75],[1.1,-1.75],
    [-4.1,-2.5],[-3.4,-2.45],[-2.7,-2.5],[-2,-2.4],[3.1,-2.3],[3.75,-2.35],[4.05,-1.75],
    [4.05,-1.05],[4.05,-.35],[4.05,.35],[4.05,1.05],[3.95,1.75],[2.2,1.78],
    [-.2,-1.05],[.5,-1.2],[1.25,-1.1],
  ]
  const crowns = new THREE.InstancedMesh(new THREE.SphereGeometry(.23, 14, 10), lawn, planting.length * 3)
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(.025,.035,.39,8), material('#746858', 0, .9), planting.length)
  const greens = ['#79ab83','#53977a','#91b99a']
  planting.forEach(([x,z], i) => {
    const size = .85 + (i % 4) * .1
    matrix.position.set(x,.37,z); matrix.scale.set(1,size,1); matrix.updateMatrix(); trunks.setMatrixAt(i,matrix.matrix)
    for (let part = 0; part < 3; part++) {
      matrix.position.set(x + (part - 1) * .105, .63 + (part === 1 ? .13 : 0), z + (part % 2 ? -.045 : .025))
      matrix.scale.set(size * .8, size * (part === 1 ? 1.15 : .85), size * .8); matrix.updateMatrix()
      crowns.setMatrixAt(i * 3 + part,matrix.matrix); crowns.setColorAt(i * 3 + part,new THREE.Color(greens[(i+part)%3]))
    }
    if (i < 6) { box(root,x+.32,.255,z,.21,.025,.12,material('#a88967',0,.8)); for(const dx of [-.08,.08]) box(root,x+.32+dx,.21,z,.014,.08,.08,road) }
  })
  crowns.name = 'Park tree canopies'; trunks.name = 'Park tree trunks'
  crowns.castShadow = true; crowns.receiveShadow = true; trunks.castShadow = true; root.add(crowns,trunks)
  mesh(root,new RoundedBoxGeometry(1.45,.065,1.12,3,.03),stone,2.95,.19,1.05)

  // Keep the nearby China Resources silhouette and the fictional dispatch roof.
  bamboo.scale.setScalar(.6); bamboo.position.set(2, .17, -2.05)
  const station = new THREE.Group(); station.name = 'Illustrative rooftop dispatch station'; root.add(station)
  mesh(station,new RoundedBoxGeometry(3.45,1.45,1.8,3,.05),glass,-2.2,.905,.65)
  for (const y of [.2,.56,.92,1.28,1.63]) mesh(station,new RoundedBoxGeometry(3.58,.065,1.91,3,.028),stone,-2.2,y,.65)
  for (let x = -3.85; x <= -.55; x += .3) box(station,x,.9,1.565,.035,1.39,.045,silver)
  for (let z = -.1; z < 1.5; z += .3) box(station,-.465,.9,z,.04,1.39,.035,silver)
  mesh(station,new RoundedBoxGeometry(3.6,.09,1.94,3,.035),stone,-2.2,1.675,.65)
  mesh(station,new RoundedBoxGeometry(3.32,.008,1.67,3,.004),material('#73898f',.03,.8),-2.2,1.725,.65)
  box(station,-3.5,.385,1.594,.48,.35,.03,orange)
  box(station,-3.5,.325,1.62,.31,.22,.018,glass)
  box(station, -2.2, 1.8, -.3, 3.6, .16, .055, silver)
  box(station, -3.96, 1.8, .65, .055, .16, 1.9, silver)
  box(station, -.44, 1.8, .65, .055, .16, 1.9, silver)
  mesh(station,new RoundedBoxGeometry(.68,.72,.74,3,.035),glass,-3.65,2.08,.15)
  box(station,-3.65,2,.537,.36,.52,.025,darkMaterial())
  box(station,-3.65,2.33,.15,.78,.035,.82,stone)
  box(station,-3.65,2.29,.565,.45,.012,.012,orange)
  for (const x of [-3.94,-3.36]) box(station,x,2.08,.51,.022,.66,.025,silver)
  mesh(station, new THREE.CylinderGeometry(.56, .56, .035, 48), orange, -1.45, 1.739, .7)
  for (const z of [.7 - .26 * .38, .7 + .26 * .38]) for (const x of [-1.45 - .43 * .38, -1.45 + .43 * .38]) {
    box(station, x, 1.98, z, .035, .48, .035, silver)
  }
  box(station, -1.45, 1.764, .7, .035, .01, .25, stone)
  for (const x of [-1.55, -1.35]) box(station, x, 1.764, .7, .035, .01, .25, stone)

  function darkMaterial() { return material('#152632', .1) }
  const worker = makeDeliveryWorker(); root.add(worker.root)

  const landmarkGroups = [bamboo]
  const materials = new Map<THREE.Material, number>()
  root.traverse(object => { if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
    for (const mat of Array.isArray(object.material) ? object.material : [object.material]) materials.set(mat, mat.opacity)
  } })
  function update(visibility: number, workerX: number, walk: number, reach: number, time = 0) {
    root.visible = visibility > .002
    root.position.y = -.4 * (1 - visibility)
    for (const [mat, opacity] of materials) {
      mat.opacity = opacity * visibility
      const transparent = mat.opacity < .999
      if (mat.transparent !== transparent) { mat.transparent = transparent; mat.needsUpdate = true }
      mat.depthWrite = visibility > .98
    }
    worker.update(workerX, walk, reach, time)
  }
  return { root, update, landmarkGroups, disposeWorker: worker.dispose, loadWorker: async () => {
    await worker.load()
    worker.root.traverse(object => { if (object instanceof THREE.Mesh) {
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) materials.set(mat,mat.opacity)
    } })
  } }
}
