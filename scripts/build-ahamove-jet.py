"""Build the original Ahamove presentation jet; Blender 5.x, no add-ons.
Run: Blender --background --factory-startup --python scripts/build-ahamove-jet.py
"""
import bpy
import bmesh
import math
from pathlib import Path
from mathutils import Vector, Matrix

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/models'
SOURCE = ROOT / 'assets/models'
SOURCE.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def linear(v):
    v = v / 255
    return v / 12.92 if v <= .04045 else ((v + .055) / 1.055) ** 2.4

def material(name, color, metal=0, rough=.35):
    m = bpy.data.materials.new(name)
    m.diffuse_color = tuple(linear(int(color[i:i+2], 16)) for i in (0, 2, 4)) + (1,)
    m.use_nodes = True
    p = m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = m.diffuse_color
    p.inputs['Metallic'].default_value = metal
    p.inputs['Roughness'].default_value = rough
    return m

white = material('Pearl white paint', 'F3F5F7', .04, .29)
orange = material('Ahamove orange FF7F32', 'FF7F32', .02, .32)
navy = material('Ahamove navy 0D4073', '0D4073', 0, .43)
wingpaint = material('Wing satin silver', 'D8DEE5', .22, .36)
metal = material('Brushed intake aluminum', 'AAB6C5', .8, .24)
glass = material('Cockpit and cabin glass', '112735', .25, .18)
dark = material('Engine interior graphite', '172029', .25, .48)
panel = material('Panel seams', '8392A0', .12, .52)

def mesh(name, vertices, faces, mats, indices=None):
    data = bpy.data.meshes.new(name)
    data.from_pydata(vertices, [], faces)
    data.update()
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    for mat in mats: data.materials.append(mat)
    for i, poly in enumerate(data.polygons):
        poly.use_smooth = True
        if indices: poly.material_index = indices[i]
    return obj

# Smooth radius profile. +X is the nose, +Z is up; Blender exports Y-up GLB.
profile = [(-14,.06,.12),(-13.1,.46,.08),(-11.5,.95,.03),(-9,1.4,0),(-6,1.65,0),
           (7.7,1.65,0),(9.6,1.56,-.02),(11.2,1.26,-.12),(12.5,.83,-.25),(13.4,.4,-.34),(13.8,.035,-.38)]

def section(x):
    for i in range(len(profile)-1):
        if x <= profile[i+1][0]:
            a,b=profile[i],profile[i+1]
            t=max(0,min(1,(x-a[0])/(b[0]-a[0])))
            prev=profile[max(0,i-1)];nxt=profile[min(len(profile)-1,i+2)]
            values=[]
            for k in (1,2):
                m0=(b[k]-prev[k])/(b[0]-prev[0])*(b[0]-a[0])
                m1=(nxt[k]-a[k])/(nxt[0]-a[0])*(b[0]-a[0])
                values.append((2*t**3-3*t*t+1)*a[k]+(t**3-2*t*t+t)*m0+(-2*t**3+3*t*t)*b[k]+(t**3-t*t)*m1)
            return max(.035,values[0]),values[1]
    return profile[-1][1:]

rings=[]
for a,b in zip(profile,profile[1:]):
    rings.extend(a[0]+(b[0]-a[0])*i/10 for i in range(10))
rings.append(profile[-1][0])
verts=[]
for x in rings:
    r,z=section(x)
    for j in range(64):
        a=j*2*math.pi/64
        verts.append((x,r*math.cos(a),z+r*math.sin(a)))
faces=[]; indices=[]
for i in range(len(rings)-1):
    for j in range(64):
        faces.append((i*64+j,i*64+(j+1)%64,(i+1)*64+(j+1)%64,(i+1)*64+j))
        theta=(j+.5)*2*math.pi/64
        indices.append(0)
mesh('Sculpted fuselage',verts,faces,[white,orange],indices)

# Smooth curved paint boundary, independent of the fuselage's longitudinal rings.
v=[];f=[]
for i in range(31):
    for j in range(64):
        a=j*math.tau/64;x=-13.97+(-8.2+1.7*math.sin(a)+13.97)*i/30;r,z=section(x)
        v.append((x,(r+.012)*math.cos(a),z+(r+.012)*math.sin(a)))
for i in range(30):
    for j in range(64):f.append((i*64+j,i*64+(j+1)%64,(i+1)*64+(j+1)%64,(i+1)*64+j))
mesh('Sweeping orange rear livery',v,f,[orange])

def wing(name, stations, side=1, tail=False):
    # Closed NACA-style sections retain real airfoil thickness and swept edges.
    v=[]; f=[]; mi=[]
    n=20
    contour=[(i/n,1) for i in range(n+1)]+[(i/n,-1) for i in range(n-1,0,-1)]
    for y,z,leading,trailing in stations:
        chord=leading-trailing
        for u,upper in contour:
            thickness=5*.105*chord*(.2969*math.sqrt(u)-.126*u-.3516*u*u+.2843*u**3-.1036*u**4)
            v.append((leading-u*chord,side*y,z+upper*max(.008,thickness)))
    count=len(contour)
    for k in range(len(stations)-1):
        for j in range(count):
            f.append((k*count+j,k*count+(j+1)%count,(k+1)*count+(j+1)%count,(k+1)*count+j))
            mi.append(1 if not tail and k>=len(stations)-2 else 0)
    f.extend([tuple(reversed(range(count))),tuple((len(stations)-1)*count+j for j in range(count))]);mi.extend([0,1 if not tail else 0])
    obj=mesh(name,v,f,[wingpaint,orange],mi)
    return obj

for side in (-1,1):
    wing('Swept wing',[(1.15,-.48,3.1,-5.5),(2.4,-.38,2.4,-5.6),(6,-.08,.0,-6.0),(10.5,.42,-3.7,-6.6),(13.3,.85,-5.8,-7.3),(13.75,2.5,-6.5,-7.3)],side)
    wing('Horizontal stabilizer',[(.65,.35,-8.1,-12.4),(2.8,.58,-10.3,-13.0),(5.05,.95,-12.5,-13.9)],side,True)

# Vertical tail: tapered thickness, swept leading edge, rounded perimeter.
outline=[(-8.0,1.05),(-10.4,2.5),(-12.0,6.0),(-13.0,6.12),(-13.6,1.0)]
v=[(x,s*(.10+.025*(6-z)),z) for s in (-1,1) for x,z in outline]
f=[tuple(reversed(range(5))),tuple(range(5,10))]+[(i,(i+1)%5,(i+1)%5+5,i+5) for i in range(5)]
fin=mesh('Orange vertical tail',v,f,[orange])
bev=fin.modifiers.new('Soft manufactured edges','BEVEL');bev.width=.07;bev.segments=3

def ring_shell(name, rings, center_y, center_z, mats):
    v=[];f=[];ids=[]
    for x,r in rings:
        for j in range(64):
            a=j*math.tau/64;v.append((x,center_y+r*math.cos(a),center_z+r*math.sin(a)))
    for k in range(len(rings)-1):
        for j in range(64):
            f.append((k*64+j,k*64+(j+1)%64,(k+1)*64+(j+1)%64,(k+1)*64+j));ids.append(1 if k>=4 else 0)
    return mesh(name,v,f,mats,ids)

def sphere(name,loc,scale,mat,segments=24,rings=12):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments,ring_count=rings,location=loc)
    o=bpy.context.object;o.name=name;o.scale=scale;o.data.materials.append(mat)
    for p in o.data.polygons:p.use_smooth=True
    return o

for side in (-1,1):
    y=side*4;z=-1.18
    ring_shell('Orange turbofan nacelle',[(.0,.62),(.4,.83),(1.1,.99),(3.1,1.05),(4.05,1.0),(4.25,.96),(4.3,.88),(4.13,.81),(3.65,.79)],y,z,[orange,metal])
    ring_shell('Dark engine interior',[(3.65,.79),(2.95,.66)],y,z,[dark,dark])
    sphere('Engine fan hub',(3.38,y,z),(.6,.26,.26),metal)
    blade_v=[];blade_f=[]
    for i in range(28):
        a=i*math.tau/28
        start=len(blade_v)
        for rad,offset in [(.25,0),(.77,.15),(.77,.24),(.25,.1)]:
            blade_v.append((3.28,y+rad*math.cos(a+offset),z+rad*math.sin(a+offset)))
        blade_f.append(tuple(start+j for j in range(4)))
    mesh('Turbofan blades',blade_v,blade_f,[metal])
    sphere('Exhaust plug',(-.03,y,z),(.6,.3,.3),dark)
    pylon=mesh('Engine pylon',[(x,y+dy,zz) for dy in (-.12,.12) for x,zz in [(0,-.7),(3.1,-.3),(2.5,.2),(-.5,.0)]],[(0,1,2,3),(7,6,5,4),(0,4,5,1),(1,5,6,2),(2,6,7,3),(3,7,4,0)],[wingpaint])
    for i in range(29):
        x=8.55-i*.59;r,cz=section(x);zz=.10
        yy=side*math.sqrt(max(.1,r*r-(zz-cz)**2))
        sphere('Cabin window',(x,yy+side*.012,zz),(.115,.032,.155),glass,16,8)

def surface_patch(name,x0,x1,a0,a1,mat):
    v=[];f=[]
    for i in range(9):
        x=x0+(x1-x0)*i/8;r,z=section(x)
        for j in range(5):
            a=a0+(a1-a0)*j/4;v.append((x,(r+.018)*math.cos(a),z+(r+.018)*math.sin(a)))
    for i in range(8):
        for j in range(4):f.append((i*5+j,(i+1)*5+j,(i+1)*5+j+1,i*5+j+1))
    mesh(name,v,f,[mat])

for side in (-1,1):
    for x0,x1,a0,a1 in [(9.75,10.65,.40,1.02),(10.74,11.65,.43,1.05),(11.74,12.65,.48,1.07)]:
        if side<0:a0,a1=math.pi-a1,math.pi-a0
        surface_patch('Cockpit glazing',x0,x1,a0,a1,glass)

font=bpy.data.fonts.load('/tmp/ahamove-lexend.ttf')
def wordmark(name,center_x,z,width,side,tail=False):
    c=bpy.data.curves.new(name,'FONT');c.body='ahamove';c.font=font;c.align_x='CENTER';c.size=1;c.extrude=0;c.resolution_u=8
    o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);c.materials.append(white if tail else navy)
    bpy.context.view_layer.update();o.scale=(width/o.dimensions.x,)*3
    # Reading direction is correct on both sides; normal points away from the body.
    basis=Matrix(((1 if side<0 else -1,0,0),(0,0,side),(0,1,0))).to_4x4()
    o.rotation_euler=basis.to_euler();o.location=(center_x,side*.23 if tail else side*1.55,z)
    bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
    bpy.ops.object.convert(target='MESH');bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
    if not tail:
        bm=bmesh.new();bm.from_mesh(o.data)
        bmesh.ops.triangulate(bm,faces=list(bm.faces))
        bmesh.ops.subdivide_edges(bm,edges=list(bm.edges),cuts=3,use_grid_fill=True)
        bm.to_mesh(o.data);bm.free()
        for v in o.data.vertices:
            r,zc=section(v.co.x);v.co.y=side*(math.sqrt(max(.01,r*r-(v.co.z-zc)**2))+.025)
    return o

for side in (-1,1):
    wordmark('Curved navy Ahamove wordmark',3.7,.60,6.1,side)
    wordmark('Tail Ahamove wordmark',-11.55,2.95,2.15,side,True)

# Join by material through one mesh: only a handful of draw calls in Three.js.
bpy.ops.object.select_all(action='SELECT')
for o in list(bpy.context.selected_objects):
    if o.type=='MESH':
        bpy.context.view_layer.objects.active=o
        for mod in list(o.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
bpy.context.view_layer.objects.active=next(o for o in bpy.context.selected_objects if o.type=='MESH')
bpy.ops.object.join();jet=bpy.context.object;jet.name='AhamoveJet'
bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
# Recalculate consistent outward normals after mirrored wing construction.
bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.normals_make_consistent(inside=False);bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.export_scene.gltf(filepath=str(OUT/'ahamove-jet-v2.glb'),export_format='GLB',use_selection=True,export_apply=True,export_animations=False)

# A saved, editable studio scene and a proof render for material/shape inspection.
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=32
scene.cycles.use_denoising=True
scene.world.color=(.16,.16,.16)
scene.render.film_transparent=True
def area(name,loc,power,size,color):
    bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.data.color=color;o.rotation_euler=(-o.location).to_track_quat('-Z','Y').to_euler()
area('Large softbox', (7,-12,22),3500,18,(1,.97,.92))
area('Cool fill', (0,14,12),2600,15,(.78,.88,1))
area('Edge light', (-15,-1,15),3000,12,(1,.84,.68))
bpy.ops.object.camera_add(location=(24,-34,22));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=39;scene.camera=cam
scene.view_settings.view_transform='AgX'
scene.render.resolution_x=1600;scene.render.resolution_y=1100;scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGBA';scene.render.filepath=str(SOURCE/'ahamove-jet-v2-preview.png')
bpy.ops.wm.save_as_mainfile(filepath=str(SOURCE/'ahamove-jet-v2.blend'))
bpy.ops.render.render(write_still=True)
print('AHAMOVE_MODEL_COMPLETE', len(jet.data.vertices), 'vertices',len(jet.data.polygons),'faces')
