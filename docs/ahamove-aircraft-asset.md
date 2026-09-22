# Historical image concept — not the active 3D aircraft

The active intro uses the Blender A320 V3, documented in `flight-intro.md`. This file records the earlier generated image concept only.

# Ahamove aircraft render

Generated with the built-in imagegen tool on 2026-09-16.

Selected asset: [ahamove-aircraft-v1.png](../public/media/ahamove-aircraft-v1.png)

1536 × 1024 RGBA PNG. Conceptual Ahamove aircraft livery; this is a rendered image, not a rotatable 3D mesh. Retained as a visual reference. The final intro uses a volumetric A320 GLB and a separate generated UV livery; it does not render this PNG as an aircraft billboard. See [flight-intro.md](./flight-intro.md). Alpha inspection confirmed transparent background pixels. Some image viewers may display the hidden RGB background even though it has zero alpha.

## Generation prompt

Use case: product-mockup.
Asset type: transparent aircraft image for an Ahamove Shenzhen study-tour opening animation.
Create one beautiful, believable 3D-rendered modern twin-engine commercial passenger jet with custom Ahamove branding. White fuselage, vivid Ahamove orange #FF7F32 tail and engine nacelles, restrained deep blue #0D4073 details. Large crisp lowercase wordmark "ahamove" along the visible side of the fuselage, in a rounded geometric sans-serif, and a white "ahamove" wordmark on the orange vertical tail. Orange sweeping livery stripe integrated elegantly into the rear fuselage. This is a conceptual branded aircraft, not a photograph of a real airline.
View: elevated three-quarter top-and-side perspective, clearly see the wing arrangement AND fuselage branding. Aircraft flying diagonally toward the upper right; tail toward lower left. Fully visible nose, both wing tips, engines and tail, generous transparent padding on all sides. Gear retracted, correct physically plausible symmetric swept wings, two turbofan engines, dark cockpit glazing, tasteful small cabin windows.
Rendering: premium aviation product CGI, refined smooth surfaces, realistic proportions, soft satin white paint, subtle polished metal edges, soft studio key light and delicate orange bounce lighting, excellent readable silhouette. Detailed and elegant, not toy-like, no exaggerated bulbous cartoon proportions. Large aircraft centered within a landscape image.
Background: genuinely transparent alpha, no white or colored backdrop, no checkerboard pixels, no ground plane or cast floor shadow. Preserve crisp anti-aliased transparent edges.
Only the aircraft. No globe, map, clouds, people, airport, UI, caption, extra objects or aircraft. No text other than the exact wordmark "ahamove".

## Final refinement prompt

Edit this aircraft render. Preserve the aircraft's polished white/orange/navy Ahamove livery, exact readable "ahamove" wordmarks, believable jet shape, camera angle and studio quality. Make two precise changes: (1) remove ALL diffuse blurred orange/gray/black halo, glow, haze, background and shadow outside the aircraft silhouette; the entire outside must be alpha=0 transparent, not a black or checkerboard image background; the aircraft itself must have solid fully opaque surfaces. Clean anti-aliased cutout edges only. (2) Zoom out so the ENTIRE aircraft including the nose and BOTH wing tips has at least 8% empty transparent canvas margin around it; no part touches any edge. Keep one aircraft flying toward upper right. Preserve all brand text. Output a genuine transparent PNG, no floor, no scene, no added text.
