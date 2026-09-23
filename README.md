# Shenzhen Live · Ahamove Study Tour

Quy chuẩn giao diện và cách giữ style nhất quán: [AGENT.md](AGENT.md).

Website trình chiếu bằng tiếng Việt, light mode, gồm **Team → Subjects → Key takeaways**. Chạy hoàn toàn phía trình duyệt.

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

Mở http://127.0.0.1:4173/. Build bản tĩnh bằng `npm run build`; output nằm trong `dist/`.

## Deploy Netlify

Website công khai: https://sprightly-frangipane-406bde.netlify.app/ — đã claim vào tài khoản Netlify, gói Free, ngày 22/09/2026. Trang quản lý: https://app.netlify.com/projects/sprightly-frangipane-406bde/overview. Cập nhật production ngày 23/09/2026 từ bản sạch của commit `878a523` trên `origin/main`; biên bản ở [docs/netlify-deployment.json](docs/netlify-deployment.json).

`netlify.toml` cấu hình build bằng `npm run build` và xuất bản thư mục `dist`. Với Netlify Drop, build tại máy rồi tải gói `outputs/china-study-tour-netlify.zip` lên; `index.html` nằm ngay ở gốc ZIP. Gói deploy chứa bản build cùng tài sản tĩnh, không cần tải cả repository hay `node_modules`.

Để cập nhật site hiện tại, tải bản build mới vào vùng deploy của project trên Netlify; không tạo một Netlify Drop mới. Đây là deploy thủ công, chưa tự động đồng bộ khi sửa source.

Điều hướng dùng hash, nên link trực tiếp như `/#3` vẫn dùng được trên hosting tĩnh.

Các đường dẫn `/`, `/v2/` và `/didi/` đã được triển khai trong gói `outputs/china-study-tour-netlify-878a523.zip`. Mở [V2 trên Netlify](https://sprightly-frangipane-406bde.netlify.app/v2/).

## Version 2 · Live-map

Ưu tiên desktop / màn chiếu. Mở `/v2/`: **Team → Những người kể chuyện → bản đồ Thâm Quyến → ba chủ đề → điều mang về**. Hai slide mở đầu là hai màn trình chiếu độc lập; live-map chỉ được dựng sau slide thứ hai. Menu bản đồ không có nút Đội hình. Toàn bộ 28 slide dùng chung dữ liệu với V1. V1 vẫn ở `/`.

Bản đồ thật dùng OpenFreeMap / OpenStreetMap, marker 2D nhún nhẹ và bản đồ khóa zoom; bấm icon mở ngay modal nội dung. Talent Park là địa điểm của chương drone; điểm robot và Meituan được mô phỏng để trình bày. Cần mạng để tải bản đồ; nếu bản đồ không tải được, ba nút chủ đề vẫn mở bài bình thường.

- `/v2/#map`: toàn cảnh; `/v2/#drone`, `#robots`, `#meituan`: chọn chủ đề.
- `/v2/#drone/3`: mở trực tiếp một slide; `←` / `→` chuyển slide, `Esc` về bản đồ.
- Cuối phần giới thiệu, **Mở live-map** đưa về toàn cảnh. Cuối Drone / Robot, chương tiếp theo xuất hiện trên bản đồ trước khi mở nội dung.
- `public/_redirects` giữ deep link `/v2/` hoạt động khi refresh trên Netlify.

## Bài Didi · deck riêng 9 slide

Mở `/didi/` để chiếu bài "Một cuốc xe Didi ở Thẩm Quyến" (Sâm & Bình, 20 phút gồm Q&A). Đây cũng là nội dung của ghim Sân bay Bảo An trên bản đồ; hai nơi dùng chung `src/data/didi.ts`.

- Mặt slide bám khối "TRÊN SLIDE" của [docs/didi-script-v5-present.md](docs/didi-script-v5-present.md). Lời nói, ghi chú sân khấu và phần Q&A chỉ nằm trong tài liệu đó.
- Slide 3, 5, 6 có đáp án ẩn: lần bấm `→` / nút "Slide sau" đầu tiên chỉ lật đáp án, lần sau mới sang slide. Bấm vào ô "Hỏi cả phòng" cũng lật được. Cơ chế nằm ở `src/components/slideSteps.ts`, dùng chung cho deck và modal bản đồ.
- **Ngoại lệ so với quy tắc chung:** bài Didi ghi nguồn chữ nhỏ ở chân mỗi slide có số liệu, theo yêu cầu của script, vì khán giả là toàn công ty. Nguồn đầy đủ nằm trong `src/data/sources.ts` (các id `didi-*`, `sz-*`, `vn-*`, `hn-*`…).
- Tiền giữ nguyên CNY như trên ảnh chụp màn hình, không quy đổi VND.
- Góc trên phải mỗi slide ghi người trình bày; thanh tiến trình chia theo ba phần Sâm → Bình → Sâm.
- `public/_redirects` giữ `/didi/` hoạt động khi refresh trên Netlify.

## Version 1 · Một bộ slide tuyến tính, 28 slide

Ở Version 1, bài chia sẻ là **một dãy slide**. Mở trang là vào slide 1; bấm `→` đi hết bài. Không slide nào phải cuộn.

Bố cục dựng ở **bề rộng thiết kế cố định 1280px** rồi scale vừa màn hình, nên cỡ chữ và bố cục ngang không đổi theo cửa sổ. **Chiều cao khung suy từ tỷ lệ màn hình thật** (chặn trong khoảng 600–1024px) để slide lấp kín khi chiếu toàn màn hình, không để dải trống trên/dưới. Các tỷ lệ 5:4, 4:3, 3:2, 16:10 và 16:9 đều phủ kín 0px; chỉ màn siêu rộng từ 21:9 mới còn dải hai bên, đổi lại slide không bị bóp thấp đến mức vỡ bố cục.

| Slide | Nội dung | Nhóm trên thanh tiến trình |
| --- | --- | --- |
| 01 | Key visual chuyến đi, tràn hết mặt slide | Mở đầu |
| 02 | Sáu thành viên theo ba cặp chủ đề | Mở đầu |
| 03–09 | Drone giao hàng, kết bằng liên hệ Ahamove ở slide 9 | Drone |
| 10–17 | Robot giao tận phòng, kết bằng liên hệ Ahamove / Truck OD ở slide 17 | Robot |
| 18–24 | Meituan, kết bằng liên hệ Ahamove ở slide 24 | Meituan |
| 25–28 | Bốn điều mang về | Mang về |

Drone và Meituan mỗi chương có 7 slide, gồm một slide liên hệ riêng với Ahamove ngay sau phần cơ chế. Bốn slide số liệu cũ được gom thành hai: quy mô + biểu đồ, bối cảnh + biểu đồ. Giữ đủ số liệu, biểu đồ và mốc thời gian; các giới hạn quan trọng được ghi ngay trên mặt slide. Chương robot giữ 8 slide theo tài liệu người dùng cung cấp: mở đầu → quy trình 6 bước → định vị đúng phòng → tích hợp thang máy → điều phối → hạ tầng → thị trường → liên hệ Ahamove / Truck OD.

Bộ slide có 28 trang. Mỗi chủ đề kết bằng đúng một slide liên hệ Ahamove; bỏ slide liên hệ chung cuối bài. Hash đánh số lại theo thứ tự mới. Nội dung liên hệ là đề xuất thảo luận, không khẳng định tính năng hay kế hoạch triển khai hiện tại của công ty.

### Số to, chữ ít

Mặt slide chỉ mang con số, nhãn ngắn và mốc thời gian. Cỡ số tự co theo độ dài chuỗi (26–67px) để số ngắn được to hết mức ô cho phép. Không in tên nguồn lên màn chiếu.

Phần diễn giải dài — ghi chú của từng số liệu, giới hạn phạm vi của biểu đồ, phần bằng chứng bị loại, chỗ chưa tìm được số, trích dẫn đầy đủ — **không hiển thị trong ứng dụng nữa**. Chúng vẫn nằm nguyên trong tầng dữ liệu (`src/data/topicData.ts`, `mechanisms.ts`, `sources.ts`) và được trình bày đầy đủ trong [docs/presentation-data-sources.md](docs/presentation-data-sources.md) — đọc tài liệu đó trước khi trình bày.

## Kỷ luật dữ liệu

Nguyên tắc: **mỗi con số trên slide đi kèm mốc thời gian và một nguồn.** Chỗ nào nguồn mâu thuẫn, phạm vi đo chưa rõ, hoặc con số do chúng tôi suy ra từ tổng, slide ghi lại đúng như vậy.

- Mặt slide chỉ giữ mốc thời gian của số liệu. Trích dẫn đầy đủ (đơn vị công bố — tiêu đề — ngày) nằm trong sổ nguồn và tài liệu bên dưới.
- Tiền tệ: slide tài chính Meituan hiển thị VNĐ, quy đổi từ CNY/USD theo tỷ giá 3.947 VND/CNY và 26.022 VND/USD ngày 19/09/2026. Số gốc và tỷ giá ghi trong tài liệu nguồn; caption của slide tài chính nêu rõ tỷ giá.
- Sổ nguồn: `src/data/sources.ts` — mỗi nguồn có `tier` (sơ cấp / thứ cấp / tư liệu đoàn) và một câu ghi rõ phạm vi, giới hạn.
- Số liệu và biểu đồ: `src/data/topicData.ts`; chương robot khách sạn: `src/data/hotelRobot.ts` (giữ tỷ USD từ tài liệu nguồn). Sơ đồ cơ chế: `src/data/mechanisms.ts`.
- Đối chiếu mâu thuẫn, danh mục số liệu bị loại bỏ có chủ đích và toàn bộ bảng số: [docs/presentation-data-sources.md](docs/presentation-data-sources.md).
- Hai mốc ~4 phút / ~60 phút trong sheet của đoàn bị loại khỏi mọi thông điệp định lượng vì chưa rõ đo chặng nào. Có test tự động chặn chúng quay lại biểu đồ.

Biểu đồ dùng bảng màu đã qua kiểm tra: một trục, một chuỗi cho mỗi biểu đồ, nhãn trực tiếp, legend khi có từ hai lớp, và luôn có nút "Xem dạng bảng".

## Điều hướng

- `←` / `→`, `PageUp` / `PageDown` hoặc `Space` chuyển slide; `Home` / `End` tới slide đầu/cuối.
- Thanh tiến trình dưới đáy vừa cho biết đang ở đâu, vừa bấm được để nhảy thẳng tới một slide.
- Đường dẫn chia sẻ là số slide: `#1` … `#28`. Tải lại trang giữ đúng slide. Toàn màn hình dùng F11 của trình duyệt.

## Nội dung mẫu còn lại

Ảnh trang Team là **thả vào là chạy**: đặt một file ảnh trong `assets/team/` là trang tự dùng nó, thư mục trống thì quay về ảnh minh hoạ mặc định. Chú thích và alt text của ảnh tuỳ chỉnh nằm trong `src/components/TourSections.tsx`; xem [assets/team/README.md](assets/team/README.md).

Tên sáu thành viên và cặp trình bày của từng chủ đề đã chốt trong `teamGroups` (`src/data/presentation.ts`). Chương robot nói về khách sạn Trung Quốc nói chung, chưa khẳng định khách sạn hoặc hãng thiết bị mà đoàn đã trải nghiệm.

## Media

Ảnh và video chuyến đi giữ nguyên bytes tải từ Drive; SHA-256 và ranh giới bằng chứng trong [public/media/trip/drone/SOURCES.md](public/media/trip/drone/SOURCES.md). Theo yêu cầu ngày 22/09, nhãn "Minh hoạ" được bỏ khỏi phần hiển thị. Mô tả alt và sổ nguồn vẫn phân biệt hình AI với tư liệu thật. Bộ hình 2D và prompt ở [subjects-2d](public/media/illustrations/subjects-2d/README.md). Ảnh publisher có nguồn riêng trong [public/media/research/SOURCES.md](public/media/research/SOURCES.md). Bản đồ cần mạng để tải OpenFreeMap.

## Kiểm tra

```sh
npm run build
node --test tests/*.test.mjs
```

`tests/topic-data.test.mjs` kiểm tra tầng dữ liệu và hình dạng bộ slide: mọi `sourceId` phân giải được, mọi số liệu có mốc thời gian, chuỗi hiển thị khớp giá trị dùng để vẽ, các tổng cộng khớp, số liệu chưa xác nhận không lọt vào biểu đồ, bộ slide dựng đúng 28 slide theo thứ tự mở đầu → ba chủ đề → mang về. Mỗi chủ đề có đúng một slide liên hệ Ahamove ở cuối chương; mỗi biểu đồ xuất hiện đúng một lần trong chủ đề của nó.

Ảnh kiểm tra và biên bản triển khai của các đợt trước nằm trong `docs/review-2026-09-20/` và `docs/review-2026-09-21/`. [design-qa.md](design-qa.md) ghi lại quá trình QA của modal drone và mô phỏng 3D.
