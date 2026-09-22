# Sổ nguồn — bài chia sẻ ba chủ đề

Cập nhật 22/09/2026. Bài trình chiếu gồm ba chủ đề: **Drone giao hàng**, **Robot giao tận phòng khách sạn**, **Đặt đồ ăn trên Meituan**. Tài liệu này liệt kê từng con số xuất hiện trên slide, mốc thời gian của nó, nguồn và giới hạn phạm vi. Dữ liệu sống trong `src/data/sources.ts` (sổ nguồn), `src/data/topicData.ts` (số liệu và biểu đồ) và `src/data/mechanisms.ts` (sơ đồ cơ chế).

Trên màn chiếu, số liệu có giá trị, nhãn ngắn và mốc thời gian. Nguồn và giới hạn chi tiết nằm trong tài liệu này; không còn panel ghi chú trong ứng dụng. Chương robot được biên tập theo tài liệu do người dùng cung cấp ngày 22/09/2026.

**Biên tập Drone mới nhất (22/09/2026):** chương hiện có 5 slide: mở đầu → trải nghiệm ba bước → quy mô và hạ tầng Thâm Quyến → mô phỏng → liên hệ Việt Nam/Ahamove. Modal Talent Park cũng có 5 trang; đã bỏ trang ghi chép cuối. Slide số liệu chỉ giữ bốn chỉ số của Thâm Quyến năm 2025, kèm mốc thời gian: 310 tuyến, 82 tuyến mới, hơn một triệu chuyến bay chở hàng (tăng 29%) và hơn 1.200 điểm cất/hạ cánh. Hai chỉ số năm 2026 (736.000 chuyến và tỷ trọng sản xuất drone tiêu dùng 70%) đã bỏ khỏi slide; vẫn được lưu trong sổ số liệu bên dưới. Đã bỏ số liệu Meituan toàn cầu, hai mốc 15/34 phút, biểu đồ luỹ kế và trang thông số thế hệ 4 khỏi slide này. Dữ liệu nguồn, ghi chép và thông số vẫn được lưu để đối chiếu. Số slide trong các bảng biên tập cũ bên dưới là lịch sử.

Kiểm tra tự động: `node --test tests/topic-data.test.mjs` (15 test) xác nhận mọi `sourceId` phân giải được, mọi số liệu có mốc thời gian, chuỗi hiển thị khớp giá trị vẽ, các tổng cộng khớp, và hai mốc chưa xác nhận của đoàn không bị dùng làm số liệu.

## Quy ước

- **Nguồn sơ cấp** — đơn vị tự công bố (newsroom Meituan, trang công nghệ Meituan, Keeta Drone).
- **Nguồn thứ cấp** — báo chí dẫn lại, phân tích ngành hoặc tài liệu nghiên cứu tổng hợp nội bộ.
- **Tư liệu của đoàn** — ảnh, video và ghi chép trong chuyến 24–28/08/2026. Là quan sát một lần, không phải phép đo lặp lại.
- `亿` trong bản gốc được đổi thành "tỷ" theo hệ 10⁹ (3.649 亿 元 = 364,9 tỷ CNY).
- **Quy đổi tiền tệ.** Các slide tài chính Meituan hiển thị bằng VNĐ, quy đổi từ số gốc theo tỷ giá **3.947 VND/CNY** và **26.022 VND/USD**, lấy ngày **19/09/2026**. Tỷ giá thay đổi theo ngày nên mọi con số VNĐ là **ước tính của chúng tôi**, không phải số do nguồn công bố. Bảng dưới đây giữ nguyên số gốc để đối chiếu. Riêng thị trường robot khách sạn giữ đơn vị tỷ USD của tài liệu nguồn để so hai mốc 2025/2030.

## Mâu thuẫn giữa các nguồn — cách xử lý

| Điểm | Các con số gặp phải | Đã chọn | Lý do |
| --- | --- | --- | --- |
| Số tuyến bay của Meituan | 70 (báo cáo thường niên, cuối 2025) · 65 "tuyến thành phố" (trang công nghệ, 07/2026) · "70+" (Keeta Drone) | **70, mốc 31/12/2025** | Báo cáo kết quả kinh doanh là nguồn sơ cấp có mốc thời gian rõ nhất. Hai cách đếm còn lại được ghi ngay trên thẻ số liệu thay vì bỏ đi. |
| Đơn drone luỹ kế | >670.000 (cuối 09/2025) · >780.000 (cuối 2025) · >880.000 (03/2026, thứ cấp) · >1.000.000 (06/2026) | **Chuỗi 670k → 780k → 1.000k** | Ba mốc đều từ công bố của Meituan hoặc bài dẫn trực tiếp số của Meituan. Mốc 880.000 chỉ có nguồn thứ cấp nên không đưa vào biểu đồ. |
| Người dùng Meituan | 708 triệu (báo cáo CSR) · >770 triệu (báo cáo 2024) · >800 triệu (Q3/2025) | **>800 triệu, luỹ kế 12 tháng tới Q3/2025** | Ba con số dùng ba định nghĩa khác nhau. Chỉ lấy con số có định nghĩa được nêu rõ trong thông cáo quý. |

## Số liệu đã loại bỏ có chủ đích

| Số liệu | Vì sao không dùng |
| --- | --- |
| ~4 phút và ~60 phút cho chặng drone (sheet của đoàn, ô B9/B23) | Chưa rõ hai mốc đo cùng chặng hay khác chặng. Nếu là cùng chặng thì mâu thuẫn; nếu khác chặng thì thiếu định nghĩa. Có test tự động chặn hai giá trị này khỏi biểu đồ. |
| Thông số hệ điều phối "超脑" (số phép tính mỗi giờ, thời gian tính tuyến) | Chỉ tìm được nguồn thứ cấp đã cũ, không có bản công bố gốc kèm mốc thời gian. Sơ đồ cơ chế Meituan vì vậy mô tả cấu trúc, không định lượng chặng điều phối. |
| Dải phí giao 3–9 CNY tại Thâm Quyến | Chỉ xuất hiện trong các trang hướng dẫn du lịch, không có nguồn của nền tảng. |
| 16 triệu rider được bảo hiểm tai nạn nghề nghiệp | Con số thuộc chương trình quốc gia, dễ bị đọc thành số rider của riêng Meituan. |
| Số liệu xe tự hành đường phố (đội xe, km/ngày, L4, sản lượng) | Đã bỏ khỏi chương robot vì sai phạm vi với robot giao phòng khách sạn. |

## Chủ đề 1 — Drone giao hàng

### Việt Nam và Ahamove: đánh giá khả thi

Đối chiếu nguồn công khai ngày 22/09/2026. **Định hướng biên tập theo góp ý của người dùng: drone là câu chuyện Ahamove có thể cân nhắc trong tương lai; pháp lý và hạ tầng là hai thách thức cần giải quyết trước khi triển khai rộng.** Slide không còn đề xuất thử điểm nhận trong ngắn hạn. Đây là nhận định thảo luận, không phải kế hoạch đã được Ahamove phê duyệt. Diễn đạt có điều kiện, không khẳng định Việt Nam cấm mọi hoạt động giao hàng bằng UAV: nguồn bên dưới ghi nhận một tuyến đã được cấp phép.

| Bằng chứng công khai | Ý nghĩa và giới hạn |
| --- | --- |
| [Ahamove — dịch vụ Warehouse](https://ahamove.com/service/cooperate/warehouse) công bố theo dõi hành trình real-time và quy trình qua kho. | Có nền tảng vận hành liên quan. Không trình bày tracking như tính năng Ahamove chưa có; nguồn không xác nhận đã có QR/OTP tự nhận hoặc locker. |
| [Ahamove — quy trình giao hàng](https://ahamove.com/quytrinhthuchiendonhang) có liên hệ khách, COD, xác thực và hoàn trả. | “Nhận một bước” là mục tiêu UX; thử nghiệm vẫn cần xử lý tiền, bàn giao, hàng không được nhận và tranh chấp. |
| [Sở KH&CN TP.HCM, 12/02/2026](https://dost.hochiminhcity.gov.vn/hoat-dong-so-khcn/tphcm-van-chuyen-hang-bang-uav-xuyen-bien/) công bố tuyến Cần Giờ–Vũng Tàu do Vietnam Post và CT UAV triển khai, có giấy phép bay. | Việt Nam đã có một triển khai cụ thể. Chưa chứng minh hiệu quả kinh tế, độ tin cậy dài hạn hoặc năng lực UAV của Ahamove. |
| [Nghị định 288/2025/NĐ-CP](https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-288-2025-nd-cp-46557.htm), ban hành và có hiệu lực 05/11/2025, là văn bản quản lý UAV được dẫn trong công bố tuyến trên. | Phải xác định điều kiện và chấp thuận áp dụng cho tuyến dự kiến. Giấy phép của đơn vị khác không phải quyền khai thác của Ahamove. |

**Thách thức pháp lý:** điều kiện quản lý vùng bay, cấp phép cho tuyến dự kiến và trách nhiệm vận hành cần được làm rõ trước khi triển khai. Một tuyến đã được cấp phép không đồng nghĩa mô hình có thể mở rộng tự do hoặc Ahamove đã đủ điều kiện khai thác.

**Thách thức hạ tầng:** cần chuẩn bị điểm cất/hạ cánh, trạm nhận hàng, hệ thống giám sát, bảo quản hàng và quy trình xử lý ngoại lệ. Chưa có dữ liệu xác nhận Ahamove đã có hạ tầng này. Đây là các điều kiện cần chuẩn bị cho hướng phát triển tương lai, không phải đề xuất triển khai ngay.

**Điều kiện xem xét UAV:** chọn tuyến có lợi thế rõ so với đường bộ, chẳng hạn chặng phải đi vòng qua sông; làm cùng đơn vị đủ năng lực vận hành. Cần đánh giá vùng bay và giấy phép phù hợp, hai điểm cất/hạ cánh, thời tiết, tải hàng, năng lực giám sát và phương án giao đường bộ khi không bay được. Không suy từ một chuyến khai trương hoặc quan sát tại Talent Park thành khả năng triển khai đại trà.

**Cách kiểm chứng:** so cùng khu vực, loại đơn và khung giờ với giao tận tay. Đo chi phí đầy đủ trên một đơn giao thành công (giao tới điểm, điểm nhận/thiết bị, nhân sự, bảo trì, hoàn và giao lại); thời gian đặt → khách thực nhận và sai lệch ETA; tỷ lệ khách tự nhận; tỷ lệ giao lại/sự cố. Ghi cả ngày không thể vận hành. Chưa có dữ liệu mật độ đơn, chi phí, tỷ lệ chấp nhận hay báo giá UAV nên chưa tính ROI hoặc đặt mục tiêu số.

Ghi chép “ETA khá sát” là cảm nhận của đoàn. Chưa có phép đo so sánh để kết luận giảm can thiệp của con người tự động làm ETA chính xác hơn; người đóng gói, khách đến lấy, thời tiết và ngoại lệ vẫn ảnh hưởng hành trình.

### Sổ số liệu Drone

| Số liệu | Mốc | Nguồn |
| --- | --- | --- |
| >1.000.000 đơn giao thương mại luỹ kế | 30/06/2026 | 21 Thế kỷ Kinh tế Đạo báo, 21/09/2026 · đối chiếu với trang công nghệ Meituan, 07/2026 |
| 70 tuyến bay trong và ngoài nước | 31/12/2025 | Meituan, báo cáo Q4 và cả năm 2025, 26/03/2026 |
| >1.500 thương hiệu trên tuyến drone | 07/2026 | Meituan, trang công nghệ |
| >240.000 mặt hàng giao được | 30/06/2026 | 21 Thế kỷ Kinh tế Đạo báo |
| >810.000 lượt giao vật tư y tế | 30/06/2026 | 21 Thế kỷ Kinh tế Đạo báo |
| >670.000 đơn thương mại luỹ kế | 30/09/2025 | Meituan, báo cáo Q3 2025, 28/11/2025 |
| >780.000 đơn thương mại luỹ kế | 31/12/2025 | Meituan, báo cáo cả năm 2025 |
| Thâm Quyến: 310 tuyến logistics tầm thấp luỹ kế, +82 tuyến trong 2025 | 2025 | Tân Hoa Xã, 31/05/2026 |
| Thâm Quyến: >1.000.000 chuyến bay chở hàng, +29% | 2025 | Tân Hoa Xã |
| Thâm Quyến: >1.200 điểm cất/hạ cánh | 2025 | Tân Hoa Xã |
| Thâm Quyến: 736.000 chuyến bay, +30,4% | 8 tháng đầu 2026 | 21 Thế kỷ Kinh tế Đạo báo |
| 70% drone tiêu dùng (50% drone công nghiệp) của Trung Quốc sản xuất tại Thâm Quyến | 2026 | Tân Hoa Xã |
| Gen 4: 2,5 kg tải · 10 km bán kính · 3 km ≈ 15 phút · gió cấp 6 · −20…50 °C · 30 TOPS | 2025 | Low Altitude Economy, dẫn công bố nhà sản xuất |
| Giấy phép CAAC phủ toàn quốc, đầu tiên loại này | 04/2025 | Low Altitude Economy |

**Giới hạn.** Con số 15 phút là năng lực thiết kế trên tuyến 3 km, không phải thời gian khách chờ. Hai mốc 15/34 phút được giữ trong dữ liệu nguồn nhưng đã bỏ khỏi slide theo yêu cầu chỉ trình bày số liệu Thâm Quyến; hai phép đo khác phạm vi và không được chia cho nhau. Mô phỏng 3D là diễn giải nguyên lý, không tái tạo tuyến Talent Park.

## Chủ đề 2 — Robot giao tận phòng khách sạn

Nguồn biên tập: [Robot giao hàng tận phòng tại khách sạn Trung Quốc — Team Truck On-Demand, 20/09/2026](https://docs.google.com/document/d/17bI67RGsjEB8GECcz_JJnRICAKicv2CofpdORjiz77Y/edit?tab=t.0), do người dùng chỉ định. [Bản chụp văn bản đã đọc](sources/hotel-room-delivery-2026-09-20.md). Dữ liệu chương: `src/data/hotelRobot.ts`.

| Slide | Nội dung | Mục trong tài liệu |
| --- | --- | --- |
| 10 | Robot giao phòng — logistics trong khách sạn | 1, 10 |
| 11 | 6 bước: đặt đơn, tạo task, nạp & gán phòng, di chuyển, báo khách, nhận đồ | 3 |
| 12 | Khoang → phòng → tọa độ; LiDAR, SLAM và cảm biến | 1, 4.1 |
| 13 | Tích hợp thang máy: gọi, nhận trạng thái, kiểm tra an toàn, ra đúng tầng | 4.2 |
| 14 | PMS/POS → điều phối → đội robot; gán đơn, xếp hàng thang, quản lý pin | 4.3, 4.4 |
| 15 | Hạ tầng và người xử lý ngoại lệ | 5, 8 |
| 16 | Thị trường toàn cầu, lực đẩy và rào cản | 2, 7, 8 |
| 17 | Liên hệ Ahamove / Truck OD: bài toán điều phối | 9, 10 |

Sau khi gom số liệu và đặt liên hệ Ahamove trong từng chủ đề ngày 22/09, Drone có slide tổng hợp 5–6; Meituan có slide tổng hợp 20–21. Không bỏ chỉ số, biểu đồ hoặc mốc thời gian của các nhóm được gom. Thị trường robot vẫn gói trong một slide (16).

Mỗi chủ đề kết bằng một slide liên hệ Ahamove: slide 9 về chuẩn hoá điểm nhận từ bài học Drone; slide 17 đối chiếu điều phối robot với Truck OD theo mục 9–10 của tài liệu; slide 24 về ghép đơn, ETA và hiệu quả từng đơn từ bài học Meituan. Bỏ slide liên hệ chung cuối bài. Đây là gợi ý thảo luận, không phải số liệu, cam kết hay mô tả sản phẩm Ahamove đã xác nhận. Các đề xuất thử nghiệm không tự đặt mục tiêu số hoặc thời hạn. Nội dung Drone/Meituan ở `src/data/ahamove.ts`.

| Số liệu | Mốc / phạm vi | Cách thể hiện |
| --- | --- | --- |
| ~0,7 tỷ USD | 2025, robot khách sạn toàn cầu | Ước lượng |
| ~2,13 tỷ USD | 2030, robot khách sạn toàn cầu | Dự báo |
| ~24% CAGR | 2026–2030 theo tài liệu | Dự báo dẫn lại, không tự tính từ hai mốc khác kỳ |

**Giới hạn.** Đây là biên tập theo tài liệu được cung cấp, chưa kiểm chứng độc lập báo cáo thị trường gốc. Tài liệu nêu The Business Research Company nhưng không cho link cụ thể của báo cáo; không trình bày các số này thành số riêng Trung Quốc hoặc số đo của đoàn. Không nội suy các năm giữa 2025 và 2030. Khả năng API/cloud, cách mở khoang và hệ thống nhận đơn phụ thuộc triển khai; PMS/POS có thể được thay bằng nhập task thủ công.

Phòng 1205 là ví dụ ánh xạ trong tài liệu, không phải số phòng của đoàn. Hình robot là hình 2D tạo mới, không xác nhận hãng, cấu hình thực tế hay khách sạn mà đoàn đã ở. Không dùng ảnh rider, số xe L4, 120 km/ngày hay thống kê đường phố để mô tả robot giao phòng.

Phần mang về đã đổi để phản ánh hạ tầng, tích hợp thang máy, con người ở hai đầu và bài toán điều phối; bỏ kết luận gom cả ba chủ đề thành câu chuyện giấy phép đường phố.

## Chủ đề 3 — Đặt đồ ăn trên Meituan

| Số liệu | Mốc | Nguồn |
| --- | --- | --- |
| 150 triệu đơn bán lẻ tức thời trong một ngày, đỉnh 23:36 | 12/07/2025 | Meituan newsroom, 07/2025 |
| 34 phút — thời gian giao trung bình toàn bộ đơn của ngày đó | 12/07/2025 | Meituan newsroom |
| 神抢手 >50 triệu đơn · 拼好饭 >35 triệu đơn trong cùng ngày | 12/07/2025 | Meituan newsroom |
| >800 triệu người dùng giao dịch trong 12 tháng | Q3/2025 | Meituan, báo cáo Q3 2025 |
| 3,36 triệu rider có đơn bình quân mỗi tháng | 10/2025 | China.com dẫn Meituan |
| >60% thị phần GTV giao đồ ăn | 2025 | Meituan, báo cáo cả năm 2025 |
| Doanh thu 364,9 tỷ CNY (+8%) · lỗ ròng 23,4 tỷ · lỗ vận hành 17,0 tỷ · R&D 26,0 tỷ (+23%)<br>Slide hiển thị: 1.440 · −92,4 · −67,1 · 102,6 nghìn tỷ VNĐ | 2025 | Meituan, báo cáo cả năm 2025 |
| Thương mại địa phương cốt lõi 260,8 tỷ CNY, lỗ vận hành 6,9 tỷ · Hoạt động mới 104,0 tỷ (+19%)<br>Slide hiển thị: 1.029,4 · 27,2 · 410,5 nghìn tỷ VNĐ | 2025 | Meituan, báo cáo cả năm 2025 |
| 3,4 triệu nhà bán dùng trợ lý kinh doanh AI | 2025 | Meituan, báo cáo cả năm 2025 |

**Giới hạn.** 150 triệu là số của một ngày đạt đỉnh trong cuộc đua khuyến mãi, không phải mức trung bình; slide nói rõ. Hai chương trình 神抢手 và 拼好饭 là tập con của tổng và được công bố dạng "hơn", nên biểu đồ ghi "≥ 50" và "≥ 35" và caveat cấm cộng ba dòng. Tổng doanh thu công bố là 364,9 tỷ trong khi hai mảng cộng lại 364,8 do làm tròn; chênh 0,1 được giữ nguyên thay vì làm khớp số.

## Media

Ảnh và video của đoàn cùng SHA-256 gốc nằm trong [public/media/trip/drone/SOURCES.md](../public/media/trip/drone/SOURCES.md). Hình bước đặt món do AI tạo; theo yêu cầu mới nhất, nhãn "Minh hoạ" đã bỏ khỏi giao diện, mô tả alt và nguồn vẫn giữ. Nguồn ghi trong [public/media/illustrations/SOURCES.md](../public/media/illustrations/SOURCES.md). Không có screenshot giao diện Meituan nào được dựng lại.

Bộ hình 2D mới và prompt: [subjects-2d/README.md](../public/media/illustrations/subjects-2d/README.md).
