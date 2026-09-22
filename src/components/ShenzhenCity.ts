import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { makeDeliveryWorker } from './DeliveryWorker'

// Architectural silhouettes, arranged as a presentation diorama, not a geographic model.
export function makeShenzhenCity() {
  const root = new THREE.Group()
  root.name = 'Shenzhen architectural overview'
  const material = (color: string, metalness = .3, roughness = .42) => new THREE.MeshStandardMaterial({ color, metalness, roughness })
  const stone = material('#d3dfe2', .08, .6), glass = material('#40758a', .55, .23)
  const silver = material('#bcd2d9', .5, .28), land = material('#93aeb0', .03, .86)
  const road = material('#405766', .04, .8), lawn = material('#568f76', .02, .95)
  const water = material('#246879', .3, .27), orange = material('#ff7f32', .08, .45)
  const blue = material('#296799', .4), red = material('#b95235', .2), gold = material('#e6ad3e', .2)
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
  for (const z of [-2, -.2]) box(root, 0, .17, z, 8.8, .018, .25, road)
  for (const x of [-3.35, .5, 3.4]) box(root, x, .174, -.35, .25, .02, 4.35, road)
  const roadMarks: number[] = []
  for (const z of [-2, -.2]) for (let x = -4.15; x < 4.2; x += .4) roadMarks.push(x, .185, z, x + .15, .185, z)
  lineSegments(root, roadMarks)
  const promenadeLight = material('#ddede6', .2, .35)
  box(root, 0, .192, 1.99, 8.7, .012, .016, promenadeLight)

  const pingAn = new THREE.Group(); pingAn.name = 'Ping An Finance Centre'; pingAn.position.set(-2.25, .17, -.85); root.add(pingAn)
  box(pingAn, 0, .12, 0, 1.7, .24, 1.4, stone)
  const octagon = [[-.7, -1], [.7, -1], [1, -.7], [1, .7], [.7, 1], [-.7, 1], [-1, .7], [-1, -.7]]
  const levels = [[.24, .55], [.75, .53], [3.75, .46], [4.55, .36], [5.15, .18], [5.42, .035]]
  const vertices: number[] = [], indices: number[] = [], facade: number[] = []
  levels.forEach(([y, radius], level) => octagon.forEach(([x, z], corner) => {
    vertices.push(x * radius, y, z * radius)
    if (level < levels.length - 1) {
      const a = level * 8 + corner, b = level * 8 + (corner + 1) % 8
      indices.push(a, a + 8, b, b, a + 8, b + 8)
      const [nextY, nextRadius] = levels[level + 1]
      facade.push(x * radius, y, z * radius, x * nextRadius, nextY, z * nextRadius)
    }
  }))
  const tower = new THREE.BufferGeometry(); tower.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); tower.setIndex(indices); tower.computeVertexNormals()
  const pingAnGlass = glass.clone(); pingAnGlass.flatShading = true
  mesh(pingAn, tower, pingAnGlass)
  for (let y = .4; y < 4.6; y += .105) {
    const next = levels.findIndex(level => level[0] >= y), [ay, ar] = levels[next - 1], [by, br] = levels[next]
    const r = THREE.MathUtils.lerp(ar, br, (y - ay) / (by - ay)) + .002
    octagon.forEach(([x, z], index) => { const [nx, nz] = octagon[(index + 1) % 8]; facade.push(x * r, y, z * r, nx * r, y, nz * r) })
  }
  lineSegments(pingAn, facade)
  for (const [x, z] of octagon) {
    const rib = new THREE.CatmullRomCurve3(levels.map(([y, r]) => new THREE.Vector3(x * r, y, z * r)), false, 'centripetal')
    mesh(pingAn, new THREE.TubeGeometry(rib, 20, .018, 5, false), silver)
  }

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

  const civic = new THREE.Group(); civic.name = 'Shenzhen Civic Center'; civic.position.set(-.75, .17, .8); root.add(civic)
  box(civic, 0, .06, .15, 2.65, .12, 1.12, stone)
  for (const x of [-.85, .85]) box(civic, x, .3, 0, .86, .43, .68, glass)
  box(civic, -.6, .52, -.05, .35, .88, .38, red)
  box(civic, .62, .52, -.05, .35, .88, .38, gold)
  const roofVertices: number[] = [], roofIndices: number[] = []
  for (let step = 0; step <= 32; step++) {
    const x = -1.42 + step / 32 * 2.84
    const y = .63 + Math.pow(Math.abs(x / 1.42), 1.7) * .3 + .07 * Math.cos(x * 3)
    roofVertices.push(x, y, -.5, x, y, .55)
    if (step < 32) { const a = step * 2; roofIndices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2) }
  }
  const roofGeometry = new THREE.BufferGeometry(); roofGeometry.setAttribute('position', new THREE.Float32BufferAttribute(roofVertices, 3)); roofGeometry.setIndex(roofIndices); roofGeometry.computeVertexNormals()
  const roofMaterial = blue.clone(); roofMaterial.side = THREE.DoubleSide; mesh(civic, roofGeometry, roofMaterial)
  const civicLines: number[] = []
  for (let step = 0; step < 32; step++) civicLines.push(...roofVertices.slice(step * 6 + 3, step * 6 + 6), ...roofVertices.slice((step + 1) * 6 + 3, (step + 1) * 6 + 6))
  lineSegments(civic, civicLines)

  // A modest, instanced context layer keeps attention on the three named landmarks.
  const blocks = [
    [-3.85,-1.2,.8],[-3.85,-.65,1.1],[-3.85,.4,.65],[-3.7,1.1,.5],
    [-2.6,-2.5,.85],[-1.7,-2.5,1.25],[-.8,-2.5,.75],[.05,-2.5,1.15],
    [.05,-1.25,1.5],[.05,-.7,.95],[1,-2.5,1.1],[1.85,-2.5,.6],[2.65,-2.5,1.35],
    [3.95,-1.3,.95],[3.95,-.6,.6],[3.95,.45,.75],[-2.75,.75,.48],
  ]
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
  const planting = [[-3.7,1.68],[-2.65,1.68],[-1.6,1.68],[-.55,1.68],[.55,1.68],[1.5,1.68],[3.9,1.65],
    [-4.12,-1.6],[-4.12,-.55],[3.55,-2.4],[3.65,-1.7],[3.65,-.7],[3.7,.28],[1.15,.6],[1.8,.55]]
  const crowns = new THREE.InstancedMesh(new THREE.SphereGeometry(.15, 14, 10), lawn, planting.length * 3)
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(.018,.025,.27,8), material('#746858', 0, .9), planting.length)
  const greens = ['#79ab83','#53977a','#91b99a']
  planting.forEach(([x,z], i) => {
    const size = .85 + (i % 4) * .1
    mesh(root, new RoundedBoxGeometry(.5,.05,.3,3,.022), stone, x,.197,z)
    mesh(root, new RoundedBoxGeometry(.46,.018,.26,3,.008), lawn, x,.23,z)
    matrix.position.set(x,.35,z); matrix.scale.set(1,size,1); matrix.updateMatrix(); trunks.setMatrixAt(i,matrix.matrix)
    for (let part = 0; part < 3; part++) {
      matrix.position.set(x + (part - 1) * .075, .48 + (part === 1 ? .09 : 0), z + (part % 2 ? -.045 : .025))
      matrix.scale.set(size * .8, size * (part === 1 ? 1.15 : .85), size * .8); matrix.updateMatrix()
      crowns.setMatrixAt(i * 3 + part,matrix.matrix); crowns.setColorAt(i * 3 + part,new THREE.Color(greens[(i+part)%3]))
    }
    if (i < 6) { box(root,x+.32,.255,z,.21,.025,.12,material('#a88967',0,.8)); for(const dx of [-.08,.08]) box(root,x+.32+dx,.21,z,.014,.08,.08,road) }
  })
  crowns.castShadow = true; crowns.receiveShadow = true; trunks.castShadow = true; root.add(crowns,trunks)
  mesh(root,new RoundedBoxGeometry(1.45,.065,1.12,3,.03),stone,2.95,.19,1.05)

  // The city is scenery for a delivery, with a purpose-built, fictional rooftop station.
  pingAn.scale.setScalar(.7); pingAn.position.set(-2.25, .17, -1.8)
  bamboo.scale.setScalar(.7); bamboo.position.set(2, .17, -1.65)
  civic.scale.setScalar(.7); civic.position.set(.7, .17, -.75)
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

  const landmarkGroups = [pingAn, bamboo, civic]
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
