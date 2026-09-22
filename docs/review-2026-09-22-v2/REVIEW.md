# Live Atlas V2 · 22/09/2026

## Final direction
- Final user constraint: optimize desktop / projector only; mobile polish is out of scope.
- Separate `/v2/` presentation; V1 remains at `/`.
- Entry: standalone full-screen team poster → standalone six-storyteller slide → live map → three subjects → four takeaways. The intro has no dialog and no map mounted beneath it. Team has been removed from the map menu.
- Real Shenzhen basemap from OpenFreeMap / OpenStreetMap. The locally authored city was replaced after user feedback.
- Final map canvas has no left editorial panel or headline / CTA. Removed the horizontal white fade and centered all three markers with symmetric camera padding. Existing slide content preserved.
- Flat 2D topic illustrations; source-backed slide metrics and the existing drone simulation retained.
- Talent Park uses the existing trip location; robot / Meituan positions are explicitly staged.

## Verification
- Production build passed. Existing large MapLibre / Three.js chunk notices remain; V2 and the simulation load separately.
- 21 targeted tests passed: full 28-slide preservation, two opening slides, route deep links / invalid inputs, original source and data validation.
- Browser: opened both team slides, used “Mở live-map”, opened topics from map markers, inspected all 26 subsequent slides, and followed Drone → map / Robot → map / Meituan → takeaways.
- Each subject retains its Ahamove reference. Only one preview panel remains after transitions.
- Corrected V2 chart color scope and prevented value labels from shrinking chart columns. Confirmed 670 / 780 / 1000 column heights remain proportional.
- Arrow keys advance story slides; Escape returns to the map. Table toggle works.
- Final user refinement: removed all connecting paths and courier dots, along with the now-unneeded pause control. Clicking any of the three map icons directly opens its chapter modal; all three were checked on desktop. Camera / entrance transitions retain reduced-motion support.
- Real tiles, labels and attribution rendered at 1280×720 and 1440×810 desktop. All three subject markers are present with no map error and no horizontal overflow. An earlier 390×844 smoke check was performed before the user made desktop the sole priority. Presentation slides remain designed for a landscape projector.
- Production-preview console errors: none observed. Earlier dev duplicate-key errors were fixed and the corrected build was rechecked.

## Delivery
- Local production preview: http://127.0.0.1:4174/v2/
- Development preview: http://127.0.0.1:4173/v2/
- Package: outputs/china-study-tour-v2-netlify.zip
- V1 smoke check: next advances the opening slide, End reaches slide 28, and Next is disabled at the end.
- V2 has not been uploaded to Netlify. The existing public deployment is still V1.

## Full-width map refinement
- Production build passed. Browser verified at the user desktop size 1096×1044: zero editorial panels, three markers, clear left side of the map.
- Clicking the Drone icon still opens its chapter modal immediately. See `final-map-full-width.png`.

## Final map interaction refinement
- Removed the two floating overview / fullscreen controls and their message state. The Ahamove logo returns to the map overview.
- Three illustration images bob vertically with staggered phases, without moving map coordinates or captions. Hover / focus and open story dialogs pause the bobbing; prefers-reduced-motion disables it.
- Wheel, double-click, box and touch-pinch zoom are disabled. Initial framing and resizing fit instantly without a zoom animation.
