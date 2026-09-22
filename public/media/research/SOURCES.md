# Research media provenance

Retrieved 2026-09-16 for the internal Shenzhen study-tour presentation. These are publisher photographs, not group trip photos or AI generations. Original pixels are retained. Attribution and source links are displayed in the presentation. No open-license claim is made. Video is streamed from the publisher; no local video copy is redistributed.

| Local file | Publisher / context | Original asset | Source page |
| --- | --- | --- | --- |
| bay-park-drone.jpg | Shenzhen Daily / Nanshan Government; Bay Park, article 2024-06-03 | https://www.szns.gov.cn/img/4/4148/4148689/11367103.jpg | https://www.szns.gov.cn/english/news/content/post_11367103.html |
| futian-light-show.jpg | Futian Government; Civic Center area light show, article 2023-01-31 | https://www.szft.gov.cn/img/3/3897/3897235/10401675.jpg | https://www.szft.gov.cn/ftxx/xwdt/bmgzdt/content/post_10401675.html |
| talent-park-drone.jpg | Meituan; departure point on Coastal City–Talent Park route, 2023-09-04 | https://img.meituan.net/smartvenus/dc1dfb62bcbd6e0186e431a8b8ff00867476111.jpg@1380w_80Q%7Cpr=1 | https://www.meituan.com/news/NN230904058001287 |
| drone-video-poster.jpg | Meituan; M-Drone 4L Winch product footage poster | https://p0.meituan.net/smartvenus/0ddbc461c451f2f223b7c842edcd6d27134772.jpg | https://www.meituan.com/technology |
| huaqiangbei-seeed.jpeg | Seeed Studio; Huaqiangbei store opening, 2019 | https://blog.seeedstudio.com/wp-content/uploads/2019/07/WechatIMG106-1030x773.jpeg | https://www.seeedstudio.com/blog/2019/07/17/seeeds-first-ever-offline-store-opens-in-huangqiangbei%EF%BB%BF/ |
| oct-mangrove-show.jpg | © ECA2 / Julien PANIÉ; Mangrove Groove, OCT Bay | https://www.eca2.com/wp-content/uploads/2020/08/Mangrove-Groove-Octbay-Shenzhen-12.jpg | https://www.eca2.com/cases/mangrove-groove/ |
| talent-isac-demo.png | ZTE; Talent Park 5G-A demo event, 2024-05-14 | https://www.zte.com.cn/content/zte-site/www-zte-com-cn/china/about/news/_7/jcr%3Acontent/parsys/image_1130312138.img.png/1715674268407.png | https://www.zte.com.cn/china/about/news/_7.html |
| swcac-interior.jpg | From Maki and Associates project portfolio; atrium/interior | https://www.maki-and-associates.co.jp/upload/MultiImages/images/img_120_b0694158-ef48-4503-8d9f-1caeaa44898e.jpg | https://www.maki-and-associates.co.jp/projects/SZC?lang=en |
| swcac-facade.jpg | From Maki and Associates project portfolio; site panorama, research reference, not currently shown | https://www.maki-and-associates.co.jp/upload/MultiImages/images/img_118_a44f5e28-beb1-49e5-92a7-86e7ea58fdef.jpg | https://www.maki-and-associates.co.jp/projects/SZC?lang=en |

Video URL is recorded in `src/data/missionMedia.ts`. The 13.1-second, 1280×720 clip is the publisher's `relevantVideo2` on the technology page, paired with `relevantPoster2`. It depicts a later winch-equipped product; it is not evidence that the same configuration was deployed on the Bay Park route. No soundtrack is required for presentation.

## Animated system anatomy — 2026-09-17

A single A1 scene contains 13 manually advanced states, joining rooftop delivery and cabinet explanation. Drone and cabinet use original procedural Three.js geometry in `src/components/DeliveryAnatomy.tsx`; content is in `src/data/deliveryAnatomy.ts`. No manufacturer CAD is used. The human now uses the licensed model below.

- [Fudan University, 2025-03-17](https://news.fudan.edu.cn/2025/0317/c31a144526/page.htm): first-hand campus delivery report describes a top receiving compartment opening, a drone handing off the package and returning empty, and a customer entering the last digits of a phone number to collect the box. This is a Fudan example, not a claim about Bay Park cabinet internals.
- [Meituan, Gen 4 announcement, 2023](https://www.meituan.com/news/NN230706019014042): basis for discussing propulsion, battery, sensing and flight-control redundancy. Exploded component placement is illustrative.

Cabinet rails, moving tray, sliding roof, front door and compartment layout are simplified functional illustrations, not verified mechanical drawings. Food, package construction, display, transaction and animation timing are illustrative. This top-entry cabinet sequence is distinct from the later 4L Winch video. Scope and links accompany each step.

## Shenzhen backdrop and rooftop delivery — 2026-09-17

The opening anatomy step follows a parcel from a rooftop worker to a drone and a ground cabinet. Original procedural landmark silhouettes from `src/components/ShenzhenCity.ts` provide background scenery only; no architectural descriptions or numbered landmark labels appear in the delivery sequence. No downloaded CAD, third-party textures or photographs are used in these meshes. Silhouette references:

- [KPF: Ping An Finance Centre](https://www.kpf.com/project/ping-an-finance-centre): chevron-shaped vertical facade elements, retail podium, connections to public transport.
- [KPF: China Resources Headquarters, 2019-01-03](https://www.kpf.com/wp-content/uploads/imported-files/20190103_CRHQ-Opening-Announcement.pdf): bamboo-shoot form, tube and diagrid structure, connection to public space and waterfront.
- [Shenzhen Government: Cyber Shenzhen, 2024-12-16](https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/CitywalkRoutes/CyberSZ/content/post_11893874.html): Industrial Exhibition Center in Civic Center Area B, Futian.

The skyline is a compressed architectural diorama. Landmark placement, height ratios, roads, trees, waterfront, generic background blocks and delivery point are composed for presentation, not surveyed GIS data or exact architecture. No delivery service is claimed at the named buildings. The existing real map remains separate. The Civic Center winged roof and colored volumes are simplified visual identifiers. Sources support the written facts, not the invented scene arrangement.

The foreground dispatch building, rooftop access room and loading cradle, takeoff/flight/descent path and camera sequence are original illustrative geometry and choreography. The worker is an adapted third-party rigged model; carrying gestures use an original IK overlay. They are not a surveyed route, a manufacturer procedure or the actual Bay Park/Coastal City building. The worker carries the same parcel to the drone, loads it, steps clear, then the drone flies and transfers the parcel to the cabinet. No actual human flight authorization or operational telemetry is simulated.

Workflow context: [Meituan repost, 2023-03-20](https://www.meituan.com/news/NN230322000052122) describes weighing, packing, sealing and staff attaching the parcel before takeoff; the Fudan first-hand report above describes cabinet handoff and customer collection. The rooftop setting is the user's requested illustration.

## Worker character — 2026-09-17

- **Worker** by **Quaternius**, [Poly Pizza model page](https://poly.pizza/m/Yg2bQZO6Hj), **CC0 1.0** as listed on that page.
- Local GLB: `/models/delivery-worker.glb`. Original downloaded file is preserved; recoloring, normal smoothing and carrying pose are applied at runtime.
- Uses the authored Idle_Neutral and Walk clips; other included clips are not used. Human model is not an Ahamove employee likeness.
- License, source and modification notes: `/models/DELIVERY-WORKER-CREDITS.md`.
