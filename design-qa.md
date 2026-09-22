# Drone modal — design and interaction QA

Reviewed 2026-09-21. Final result: **passed for the requested desktop scope**.

## Latest refinement — minimal footer

The drone stage-advance button now reads “Next”, including its accessible name. The source/date link and stage selector were removed from both drone stages, with the remaining controls aligned right. Browser verification confirmed the absent metadata and successful Next navigation to stage 2. Build passed. Earlier descriptions of the footer selector and source link below are historical.

## Latest refinement — turn before walking away

The worker releases the parcel, turns 180 degrees in place, then walks forward away from the drone. The authored gait follows accumulated distance and no longer runs in reverse. Departure now finishes before the adjusted rotor/takeoff timing; the full presentation keeps its existing playback rate and total duration.

All **17 tests passed**, including release-before-turn, stationary turning, facing the direction of travel, grounded feet and orientation reset after replay. Build passed. Live browser capture `19-worker-turn-and-leave.png` shows the worker facing away at journey time 3.217 with the parcel still attached to the stationary drone; playback resumed successfully. This supersedes the earlier backward-walking behavior described below.

## Latest refinement — worker movement and locker model

The existing CC0 worker now samples the authored walk by signed travel distance instead of elapsed time. Retreat reverses the gait; a grounded supporting foot and a fixed elbow bend keep the walk and carrying pose stable. Three added tests use the actual GLB to check foot contact, palm stability and pose restoration after replay.

The locker was rebuilt with a white enclosure, yellow front, dark compartments, compact display/NFC details, inset panels, lift rails and a shallow stone footing. Its palette and broad silhouette reference the trip photograph, while its mechanics remain illustrative. The cabinet camera is reframed for its open door and the separated-panel view. Autoplay at 1.5× and title-only callouts remain.

Validation: all **16 animation, worker and navigation tests passed**. The production build passed with the existing large-chunk notice. Browser capture `17-worker-gait.png` records the grounded walking pose at journey time 1.375, then playback resumed successfully. After a full reload, the automatic run reached its final state; `18-cabinet-final.png` shows the complete open door, tray and footing inside the frame. The browser reported no warnings or errors. Earlier captures of the white cabinet and timing-only gait are superseded by this revision.

## Latest refinement — faster playback and title-only callouts

Playback now advances at **1.5×**, so the 47.5-second animation timeline takes about **31.7 seconds** to play. Pause, resume and restart use the same scaled clock. Each callout now contains only its heading; the eyebrow, paragraph and source link were removed from the callout. The smaller 280px panel uses balanced heading wrapping and a centered leader line.

Live desktop verification showed the new heading-only callout during playback: one heading, no subtitle, paragraph or link. The scene continued advancing automatically. Build and all 13 existing animation/navigation tests passed after these edits. The checks and screenshots below describe the preceding 1× version unless otherwise noted; they are not measurements of the new wall-clock duration.

## Scope and reference

Selected reference: option 2, `/Users/daniel_nguyen/.codex/generated_images/01a0becf-c438-7461-b29a-13f7ca6096f4/exec-595e8ab8-d421-4f22-a489-d82959c7957a.png` (1476 × 1065).

The final requirements supersede the three-frame reference: four moments on one experience stage, including ordering through Meituan; one subsequent 3D stage; no separate detail slides. The 3D simulation must advance automatically. Mobile work is explicitly deferred.

Compared the reference and `docs/review-2026-09-21/09-four-steps-desktop.png` together at 1476 × 1065. Also checked the desktop layout at 1019 × 690 (`11-four-steps-laptop.png`).

## Visual review

- **Layout:** retained the light Talent Park modal, compact header and X, centered headline, portrait filmstrip, larger landing-video frame, horizontal numbered timeline and compact footer. All four moments and navigation fit in the tested desktop sizes.
- **Fonts:** Lexend with Vietnamese glyphs; headline, short step names and small source labels establish a clear hierarchy. No long descriptive paragraphs on the experience stage.
- **Colors:** warm off-white, navy typography, restrained orange highlights; yellow in the source media and ordering illustration connects the four frames.
- **Assets:** actual station and pickup photos plus the original landing video. Video plays inline with its original aspect ratio. The new ordering illustration is explicitly labelled “Minh hoạ”, not represented as a real app screenshot.
- **Copy:** four steps are “Đặt qua Meituan”, “Tới trạm”, “Drone hạ cánh”, “Lấy hàng”. Footer exposes only the two retained stages. Source links and the 3D model's illustrative status remain available.

Corrections made during comparison: reduced excessive frame height, moved the Play control away from the drone, adjusted the video poster crop at shorter desktop heights, and joined the timeline into one continuous rule. The decorative handwritten flourish in the mockup is omitted. Original documentary media are retained rather than imitating the mockup's altered imagery.

## Autoplay verification

The continuous timeline runs for 47.5 seconds, with eased camera/model transitions and no click between actions. Browser evidence:

- Opening stage 2 automatically reached action 8 at 24.783 seconds without a next-step click.
- Pause held the clock at **46.922 seconds** across separate observations; resume completed at **47.500**, action 13, with the receiving door open.
- “Chạy lại” reset the clock to **0.242 seconds**, action 1, running. Later observations showed it advancing normally.
- Returning to stage 1 displayed the four-frame filmstrip. Opening stage 2 again started a fresh run; it reached 16.591 seconds automatically.
- “Điểm tiếp theo” opened the existing Nanshan subject flow while the simulation was running.
- Final captures: `13-autoplay-paused.png`, `14-autoplay-complete.png`, `15-autoplay-final-laptop.png` under `docs/review-2026-09-21/`.
- DOM bounds at 1476 × 1065 showed no horizontal overflow; the notes panel stayed inside the modal. The screenshot API cropped `12-autoplay-running.png` to 1200 pixels, so that file is not a full-viewport visual acceptance image.

The renderer's deprecated soft-shadow constant was replaced with its existing runtime fallback, PCFShadowMap. This preserves the rendered shadow behavior while removing the warning on subsequent mounts.

## Automated checks and limits

- `node --test tests/delivery-animation.test.mjs tests/tour-navigation.test.mjs`: **13/13 passed**, covering continuity at action/view boundaries, complete autoplay progression, final state, and two-stage route normalization.
- `npm run build`: **passed** after the final renderer edit. Existing Vite large-chunk warnings remain.
- No frame-rate benchmark or mobile acceptance is claimed. The 3D scene explains a principle; it is not a verified reconstruction of the Talent Park installation.
- Earlier screenshots showing removed detail pages or mobile layouts are historical evidence only, not the final acceptance state.

## Live-map mascot and camera limits — 2026-09-21

- Integrated the user-supplied `outputs/ahamove-walk/ahamove-walk.glb`, copied unchanged to `public/models/ahamove-walk.glb`. Its original one-second Walk clip, backpack and brand colors are retained.
- The final route only connects the eight assigned subject coordinates. The mascot randomly chooses a nearby assigned pin, reaches it, pauses and turns before departing. Random offsets around pins were removed following the user's correction.
- A transparent 3D marker stays readable at overview zoom. Its heading and gait account for the marker camera's ground projection. Pointer events pass through to the map; pins stay above the mascot. Playback pauses for open presentations, hidden documents or the user's pause control; reduced-motion preference starts it paused.
- The map stays north-up and flat, with rotation and pitch gestures disabled. The viewport's fit-to-eight-pins zoom is also its hard minimum zoom; users can zoom closer, and the overview button returns to that limit.
- Browser evidence on the final route: the mascot moved from `[113.9505431, 22.5156780]` to `[113.9610963, 22.5190187]` over two seconds along the drone-to-robots segment. Pause held coordinates steady; zoom retained the same geographic position and 112px canvas. Opening the drone presentation paused playback and closing it resumed playback. No warning/error logs were captured.
- Zoom-limit browser check: Zoom out is disabled at the overview; pressing `-` on the focused map left all eight pin screen positions unchanged. Zoom in remained functional. `20-map-mascot-pins.png` captures the final pin-only mascot route (before the subsequent zoom-limit-only change).
- Verification: five mascot movement/projection tests and four navigation tests passed; supplied GLB verification passed; production build passed after the zoom-limit change. Existing large-chunk warnings remain. No mobile or frame-rate benchmark is claimed.

### Follow-up: lower camera and faster, smaller mascot

- Supersedes the flat, top-down camera described above: fixed pitch is now 60°, including the overview/reset action. Pan and zoom remain available; rotation is locked and the overview remains the minimum zoom.
- Mascot speed increased from 26 to 40 screen pixels/second; canvas size decreased from 112px to 96px (about 14% smaller). The mascot camera now matches the map's viewing angle. Pin-only destinations and turn-before-walking behavior remain unchanged.
- Checked the live angled view at 1280 × 720: all eight pins were inside the map, the mascot rendered in a 96px canvas and advanced between assigned pins, and Zoom out remained disabled at the overview. No browser warning/error logs were captured. Screenshot: `21-angled-map-smaller-mascot.png`.
- Five targeted mascot tests and the production build passed after these changes.

### Final POI treatment and smaller mascot

- The mascot canvas is now **76px**, reduced another 21% from 96px. Speed remains 40px/second and the camera remains at 60° pitch.
- Overview fitting now checks the projected positions at that pitch before locking minimum zoom, keeping foreground pins clear of the edges on tall desktop windows. A final camera update synchronizes the disabled Zoom out control with the new limit.
- The current map uses eight original **2D SVG** icons inside white 48px POI markers with a location pointer, 36px artwork and orange selection outlines. They replace the large floating 3D icon treatment. Labels appear on hover, focus or selection; the entire marker remains a native button.
- The earlier Imagegen PNG explorations and exact generation prompts are archived under `outputs/subject-icons-3d/`; the runtime uses only `public/icons/subjects/*.svg` (4,066 bytes total).
- Browser acceptance at 1131 × 1044: all eight SVG files loaded, all marker bounds were inside the map, Zoom out was disabled at overview, clicking the drone POI opened Talent Park, and Escape returned focus to that POI. No warning/error logs were captured. Final screenshot: `22-flat-icon-pois.png`.
- All eight subject routes had also been opened successfully during the preceding icon integration check. Final SVG syntax validation and production build passed; no additional unit tests were added for the visual-only marker change.

### Smaller POIs with mascot above — 2026-09-21

- POI badges reduced from 48px to 36px (25% smaller), with 26px icons and a 44px click target. Pointer and ground shadow scale with the smaller badge.
- Mascot remains 76px and now renders at z-index 4, above regular pins (1) and selected/hover/focused pins (3). Its pointer events remain disabled so POIs stay clickable.
- Browser checks confirmed all eight badge/icon/target dimensions and stacking values. The drone POI opened Talent Park; Escape closed the modal and returned focus to the POI. No browser warnings/errors were captured. Screenshot: `23-small-pois-mascot-above.png`.
- Production build passed; existing large-chunk warnings remain. No new unit tests were needed for this visual-only change.

### Distant city and province labels — 2026-09-21

- Base-map symbols now retain only city and state labels. Road names/numbers, villages, neighborhoods, water labels and airport labels are hidden; the eight custom subject POIs remain.
- A geographic exclusion polygon around all eight subject coordinates (0.025° padding) suppresses base city labels in the tour area. Distant labels use muted 13px single-line Latin names, with native-name fallback. Province labels are permitted through zoom 24 where the source supplies them.
- Browser overview shows sparse labels beyond the tour area while all eight POIs and the mascot remain visible. Zoom out is still disabled at the overview, and no browser warnings/errors were captured. Screenshot: `24-distant-city-labels.png`.
- Production build passed with the existing large-chunk warnings.
