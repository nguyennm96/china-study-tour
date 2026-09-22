# Ahamove presentation A320 — V3

Airframe: FlightAirMap 3D models, A320-family model derived from FlightGear.
Upstream repository: https://github.com/Ysurac/FlightAirMap-3dmodels
Pinned revision: 0906d9ba1bdd906ce45807e45ed706c09912db19
Imported model: a320/glTF2/A320.glb
Upstream editable source: a320/a320.blend
License: GNU General Public License, version 2; see A320-V3-LICENSE.txt.
Upstream README credits kalmykov/fr24-3d-models and FGMEMBERS.
Original airframe work remains credited to its upstream authors, not to this project.

Project modifications: replaced airline textures with white/orange/navy materials;
projected the unchanged official Ahamove SVG outlines onto both sides of the
fuselage; added a white monochrome version of those outlines to the tail;
added closed-door seams, smoothed imported surfaces and consolidated the mesh.
This is a fictional presentation livery, not an Ahamove airline announcement.

Logo source: https://www.ahamove.com/static/icons/Logo.svg
Original SVG retained unchanged at /brand/ahamove-logo.svg.
Official source fills: orange #FF7F32 and navy #0D4073.
Ahamove trademarks remain the property of their owner.

Corresponding source is included in this project:
- assets/models/source/A320.glb — unchanged imported mesh
- assets/models/source/a320-upstream.blend — upstream editable Blender source
- assets/models/source/COPYING — upstream license
- public/brand/ahamove-logo.svg — official vector artwork
- scripts/build-ahamove-a320.py — complete modification/export script
- assets/models/ahamove-a320-v3.blend — modified editable scene

Run with Blender 5.2:
Blender --background --factory-startup --python scripts/build-ahamove-a320.py
