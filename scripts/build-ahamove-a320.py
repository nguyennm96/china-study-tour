"""Repaint the FlightAirMap / FlightGear A320 with the official Ahamove SVG.
Blender 5.2: --background --factory-startup --python scripts/build-ahamove-a320.py
Mesh source, upstream license and unchanged logo are kept alongside this script.
"""
import bpy, bmesh, math
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/models'; ASSETS=ROOT/'assets/models'
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=str(ASSETS/'source/A320.glb'))
meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
matrices={o.name:o.matrix_world.copy() for o in meshes}
bpy.ops.object.select_all(action='DESELECT')
for o in meshes:
 matrix=matrices[o.name];o.parent=None;o.matrix_world=matrix
 bpy.context.view_layer.objects.active=o;o.select_set(True)
 bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
 o.select_set(False)
for o in list(bpy.context.scene.objects):
 if o.type!='MESH':bpy.data.objects.remove(o,do_unlink=True)
def rgb(hex):
 def lin(v):return v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4
 return tuple(lin(int(hex[i:i+2],16)/255) for i in (0,2,4))+(1,)
def mat(name,col,metal=0,rough=.32):
 m=bpy.data.materials.new(name);m.diffuse_color=rgb(col);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=m.diffuse_color;p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 p.inputs['Coat Weight'].default_value=.08;p.inputs['Coat Roughness'].default_value=.24
 return m
white=mat('Pearl white enamel','F5F7FA',.08,.3)
orange=mat('Ahamove official orange #FF7F32','FF7F32',.02,.32)
navy=mat('Ahamove official navy #0D4073','0D4073',.01,.36)
silver=mat('Machined aluminum intake','BBC5D0',.8,.24)
dark=mat('Engine graphite','26313E',.5,.35)
glass=mat('Cockpit and passenger glazing','122C43',.45,.18)
wing=mat('Wing coating','CBD2DB',.25,.38)
seam=mat('Door seals','708290',.15,.4)
for o in meshes:
 n=o.name.lower(); chosen=white
 if any(k in n for k in ['windows','cockpitwindows']):chosen=glass
 elif any(k in n for k in ['vstab','rudder','nacelle','core','wingtips']):chosen=orange
 elif n.startswith('intake') and 'interior' not in n:chosen=orange
 elif 'nozzle' in n or 'exhaust' in n:chosen=silver
 elif any(k in n for k in ['blades','cone','casing','shroud','fanwheel','plane','interior']):chosen=dark
 elif any(k in n for k in ['wing','slat','flap','spoiler','aileron','hstab']):chosen=wing
 bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.0001);bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(o.data);bm.free()
 if n.startswith(('door','cargo','gear')) and max(v.co.x for v in o.data.vertices)<-12:chosen=orange
 o.data.materials.clear();o.data.materials.append(chosen)
 for p in o.data.polygons:p.material_index=0;p.use_smooth=True
 if n.startswith('intake') and 'interior' not in n:
  o.data.materials.append(silver);front=max(v.co.x for v in o.data.vertices)
  for p in o.data.polygons:
   if p.center.x>front-.2:p.material_index=1
 if any(k in n for k in ['vstab','rudder','wing','slat','flap','spoiler','aileron','hstab']):
  bpy.context.view_layer.objects.active=o
  mod=o.modifiers.new('Stable panel normals','WEIGHTED_NORMAL');mod.keep_sharp=True;mod.weight=50
  bpy.ops.object.modifier_apply(modifier=mod.name)
hull=bpy.data.objects['Fuselage.001']
bvh=BVHTree.FromPolygons([v.co for v in hull.data.vertices],[list(p.vertices) for p in hull.data.polygons])
# An accurately clipped diagonal aft livery, hugging the original fuselage surface.
verts=[];faces=[]
for poly in hull.data.polygons:
 points=[hull.data.vertices[i].co.copy() for i in poly.vertices];clipped=[]
 def inside(p):return p.x+11-1.1*(p.z-2.5)
 for a,b in zip(points,points[1:]+points[:1]):
  fa,fb=inside(a),inside(b)
  if fa<=0:clipped.append(a)
  if (fa<0)!=(fb<0):clipped.append(a.lerp(b,fa/(fa-fb)))
 if len(clipped)>=3:
  start=len(verts);verts += [tuple(v) for v in clipped];faces.append(tuple(range(start,len(verts))))
data=bpy.data.meshes.new('Aft orange paint');data.from_pydata(verts,[],faces);data.update();paint=bpy.data.objects.new('Aft orange paint',data);bpy.context.collection.objects.link(paint);data.materials.append(orange)
bm=bmesh.new();bm.from_mesh(data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.0001);bm.normal_update()
for v in bm.verts:v.co+=v.normal*.012
bm.to_mesh(data);bm.free()
for p in data.polygons:p.use_smooth=True

def project_logo(name,target,center,width,side,only_icon=False):
 before=set(bpy.data.objects)
 bpy.ops.import_curve.svg(filepath=str(ROOT/'public/brand/ahamove-logo.svg'))
 curves=[o for o in bpy.data.objects if o not in before and o.type=='CURVE']
 assert curves,'Official SVG must import as curves; font substitutions are not allowed.'
 # Blender SVG importer uses 96 dpi and keeps original viewBox coordinates.
 pts=[o.matrix_world@Vector(corner) for o in curves for corner in o.bound_box]
 xmin,xmax=min(p.x for p in pts),max(p.x for p in pts);ymin,ymax=min(p.y for p in pts),max(p.y for p in pts)
 logo_width=xmax-xmin
 tree=target if isinstance(target,BVHTree) else BVHTree.FromPolygons([v.co for v in target.data.vertices],[list(p.vertices) for p in target.data.polygons])
 for obj in curves:
  if only_icon and min((obj.matrix_world@Vector(p)).x for p in obj.bound_box)>xmin+logo_width*.26:
   bpy.data.objects.remove(obj,do_unlink=True);continue
  # Use exact imported outlines, replacing only their material with matching official values.
  color=obj.data.materials[0].diffuse_color
  chosen=white if name.startswith('Tail') else orange if color[0]>color[2] else navy
  obj.data.resolution_u=12
  bpy.ops.object.select_all(action='DESELECT');obj.select_set(True);bpy.context.view_layer.objects.active=obj
  bpy.ops.object.convert(target='MESH');obj=bpy.context.object
  transform=obj.matrix_world.copy();obj.data.transform(transform);obj.matrix_world.identity()
  bm=bmesh.new();bm.from_mesh(obj.data);bmesh.ops.triangulate(bm,faces=list(bm.faces));bmesh.ops.subdivide_edges(bm,edges=list(bm.edges),cuts=3,use_grid_fill=True);bm.to_mesh(obj.data);bm.free()
  for v in obj.data.vertices:
   u=(v.co.x-xmin)/logo_width
   # Left-side viewing direction reverses X; starboard is mirrored spatially, never typographically.
   x=center[0]-side*(u-.5)*width
   z=center[1]+(v.co.y-(ymin+ymax)/2)/logo_width*width
   hit=tree.ray_cast(Vector((x,side*30,z)),Vector((0,-side,0)))[0]
   if hit is None:raise RuntimeError(f'{name}: logo does not fit surface at {(x,z)}')
   v.co=hit+Vector((0,side*.015,0))
  obj.name=name;obj.data.materials.clear();obj.data.materials.append(chosen)
  for p in obj.data.polygons:p.use_smooth=True
# Two independently projected logos: exact mark, readable from both sides.
for side in (-1,1):project_logo('Official Ahamove fuselage '+str(side),hull,(5.2,3.87),6.2,side)
# Exact official outlines, white on orange for the tail contrast.
finverts=[];finfaces=[]
for obj in [bpy.data.objects['Vstab.001'],bpy.data.objects['Rudder']]:
 offset=len(finverts);finverts.extend(v.co.copy() for v in obj.data.vertices);finfaces.extend([i+offset for i in p.vertices] for p in obj.data.polygons)
fin=BVHTree.FromPolygons(finverts,finfaces)
for side in (-1,1):project_logo('Tail official Ahamove '+str(side),fin,(-19.4,7.0),3.3,side)
# Doors remain closed. Fine seam geometry restores important scale cues without old airline paint.
def curve_line(name,points,material,radius=.012):
 c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.bevel_depth=radius;c.bevel_resolution=2
 s=c.splines.new('POLY');s.points.add(len(points)-1)
 for p,co in zip(s.points,points):p.co=(*co,1)
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);c.materials.append(material);return o
for side in (-1,1):
 for x,w,z,h in [(11.1,.78,2.48,1.64),(-12.8,.78,2.48,1.64),(1.0,.63,2.64,1.16),(-.2,.63,2.64,1.16)]:
  pts=[]
  for i in range(65):
   a=i*math.tau/64;dx=math.copysign(abs(math.cos(a))**.25,math.cos(a))*w/2;dz=math.copysign(abs(math.sin(a))**.25,math.sin(a))*h/2
   hit=bvh.ray_cast(Vector((x+dx,side*30,z+dz)),Vector((0,-side,0)))[0]
   if hit:pts.append(tuple(hit+Vector((0,side*.013,0))))
  if len(pts)>5:curve_line('Closed passenger door',pts,seam,.013)
# Consolidate into one web asset while preserving material boundaries.
bpy.ops.object.select_all(action='DESELECT')
for o in list(bpy.context.scene.objects):
 if o.type=='CURVE':
  o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.convert(target='MESH');o.select_set(False)
for o in bpy.context.scene.objects:
 if o.type=='MESH':o.select_set(True);bpy.context.view_layer.objects.active=o
bpy.ops.object.join();jet=bpy.context.object;jet.name='Ahamove_A320_V3'
bpy.ops.export_scene.gltf(filepath=str(OUT/'ahamove-a320-v3.glb'),export_format='GLB',use_selection=True,export_yup=True,export_cameras=False,export_lights=False)
# Neutral studio setup, available in the editable .blend. Web has its own lighting.
s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.samples=48;s.cycles.use_denoising=True
s.world.use_nodes=True;s.world.node_tree.nodes['Background'].inputs[0].default_value=(.45,.5,.6,1);s.world.node_tree.nodes['Background'].inputs[1].default_value=.45
s.view_settings.view_transform='Standard';s.view_settings.look='None';s.view_settings.exposure=-.5
for name,loc,energy,size in [('Key',(12,-18,28),5000,18),('Fill',(5,20,15),3000,22),('Rim',(-22,-6,24),4000,16)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=energy;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((-2,0,2))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(31,-62,29));cam=bpy.context.object;cam.rotation_euler=(Vector((-3,0,3))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=47;s.camera=cam
s.render.resolution_x=1800;s.render.resolution_y=1150;s.render.resolution_percentage=100;s.render.film_transparent=True
s.render.filepath=str(ASSETS/'ahamove-a320-v3-preview.png')
bpy.ops.object.select_all(action='DESELECT');jet.select_set(True);bpy.context.view_layer.objects.active=jet
bpy.ops.wm.save_as_mainfile(filepath=str(ASSETS/'ahamove-a320-v3.blend'))
bpy.ops.render.render(write_still=True)
print('FINAL',len(jet.data.vertices),len(jet.data.polygons))
