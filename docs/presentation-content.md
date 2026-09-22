# Shenzhen Mission Log — technical field notes

Nghiên cứu và cập nhật: 17/09/2026. **33 slide, 6 case kỹ thuật**. Mỗi điểm đi qua case → tư liệu thực tế (nếu có) → nguyên lý → bài toán kỹ thuật → câu hỏi thảo luận. A1 có một cảnh 3D liên tục với 13 trạng thái do người thuyết trình điều khiển. Trình chiếu thủ công bằng previous/next hoặc phím mũi tên. Không tự chuyển trang.

## Phạm vi bằng chứng

- Dữ kiện được dẫn ngay trên slide; mốc công bố và phạm vi thiết bị được ghi tại phần mở đầu. Nguồn ưu tiên bên triển khai, nhà sản xuất, kiến trúc sư hoặc chính quyền.
- Ảnh mở/chốt chương và các trang tư liệu riêng đều dùng ảnh thật có ghi nguồn. Đây là ảnh từ các đơn vị công bố, không phải ảnh chụp của đoàn. Sơ đồ SVG là diễn giải nguyên lý, không phải bản vẽ hoàn công, telemetry hay vùng phủ sóng thực. Clip pan ảnh cũ không nằm trong bộ slide kỹ thuật; renderer vẫn hỗ trợ video khi có tư liệu phù hợp.
- Phần phân tích, phép tính và câu hỏi thiết kế không được trình bày như số liệu vận hành thực tế. Không tự gán quan sát, kết quả hoặc lời kể cho thành viên đoàn.
- Giữ bản đồ và sáu ghim OSM đã xác minh trong `locations-source.json`. Bay Park dùng điểm hẹn cạnh ga metro; Huaqiangbei là ghim đại diện khu. Case SWCAC ở khu Sea World, không phải tọa độ cửa vào SWCAC.
- Các case 2011/2018/2024 là hồ sơ dự án hoặc thử nghiệm vào thời điểm nêu; không mặc định cấu hình còn nguyên vào năm 2026.

## Kịch bản trình bày — khoảng 25 phút

Mở đầu: “Ở mỗi nơi, chúng ta chọn một hệ thống kỹ thuật có hồ sơ công khai. Nhìn nó qua ba câu hỏi: hoạt động thế nào, hỏng ở đâu, và cần đo gì để biết nó làm tốt?”

### A1 · Bay Park — drone delivery

Sau slide mở đầu là một cảnh 3D toàn màn hình: overview → nhân viên mang hộp → gắn hộp → lùi khỏi bãi → cất cánh → bay → hạ tới tủ → bàn giao hộp → drone rời đi → mở nóc tủ → tách vỏ để nhìn khoang giữ → màn hình xác nhận → mở cửa lấy hàng. Mỗi lần Next chạy đúng một hành động rồi dừng; Previous lùi một bước. Khi vào cảnh, mọi vật đứng yên chờ người trình bày. Phần tủ nối liền trong cùng canvas và cùng slide. Không còn cột giải thích bên trái; chú thích đổi theo hành động trong cảnh.

Nhân vật dùng model Worker của Quaternius (CC0, qua Poly Pizza), có rig và animation đi bộ. Chỉnh shading, bảng màu cam/navy và tư thế tay bằng IK để mang hộp. Bối cảnh là diorama đô thị hiện đại với mặt dựng kính, đường ven nước, bồn cây và bóng đổ. Camera tiến gần mái, mở rộng khi bay rồi theo tới tủ. Một hộp duy nhất theo người, gắn dưới drone và chuyển vào tủ. Tôn trọng thiết lập giảm chuyển động, dừng khi tab ẩn và giải phóng WebGL khi rời cảnh.

Các mô hình Ping An, China Resources và Civic Center chỉ làm bối cảnh Shenzhen, không có thuyết minh kiến trúc trên màn hình này. Tòa nhà có bãi trên mái, nhân viên, đường bay, vị trí, tỉ lệ và thời gian là mô phỏng quy trình. Không khẳng định các landmark đó có tuyến drone hay tủ nhận. Bản đồ OSM và ghim thật không đổi.

- [Meituan: bài trải nghiệm quy trình, 20/03/2023](https://www.meituan.com/news/NN230322000052122): bài do Meituan đăng lại ghi nhận cân, đóng và niêm phong hộp, nhân viên gắn hộp lên drone rồi cất cánh. Không coi bài này là bản vẽ hoặc bằng chứng của tòa nhà minh họa.

- [Fudan, 17/03/2025](https://news.fudan.edu.cn/2025/0317/c31a144526/page.htm) mô tả trải nghiệm giao vào tủ: khoang trên mở, drone bàn giao hàng và rời đi, khách nhập số cuối điện thoại để lấy hộp. Đây là ví dụ vận hành tại Fudan, không phải bằng chứng về cấu hình tủ bên trong tại Bay Park.
- Ray, khay nâng, cửa và hình dạng nắp trượt là mô hình giải thích chức năng; nguồn không công bố thiết kế cơ khí bên trong. Không gán cảm biến, số khoang, vật liệu giữ nhiệt hoặc thông số an toàn chưa có nguồn.
- Luồng giao vào tủ tách biệt với sản phẩm 4L Winch hạ hàng bằng cáp trong video phía sau. Previous và Next có thể dùng để xem lại từng hành động.

Tách hai loại bằng chứng: dịch vụ hiện diện ở công viên và công bố nền tảng của nhà sản xuất. Dẫn người xem qua cảm nhận → điều khiển → xử lý sự cố, rồi chuyển sang thời gian giao end-to-end. Phép cộng thời gian là mô hình phân tích, không phải kết quả đo tuyến bay.

- [Chính quyền Shenzhen: drone trong công viên](https://www.sz.gov.cn/szzt2010/szcycx/cxdt/content/post_11908290.html) xác nhận Bay Park thuộc các công viên có dịch vụ Meituan.
- [Meituan: thế hệ 4, 2023](https://www.meituan.com/news/NN230706019014042) cung cấp cấu hình cảm nhận và dự phòng. Không dùng thông số sản phẩm để khẳng định model đang phục vụ từng tuyến, điều kiện thời tiết được phép bay tại chỗ hoặc thời gian giao thực tế.

Câu hỏi thảo luận: điều gì xảy ra khi điểm nhận chưa sẵn sàng? Đâu là bằng chứng hoàn tất một đơn?

### B2 · Civic Center — distributed lighting

Đọc skyline như hệ thống gồm điều phối, mạng, controller và đầu ra. Phân biệt thiết bị vật lý, kênh điều khiển và pixel. Từ đó bàn về mất mạng và chế độ dự phòng tại biên.

- [Traxon e:cue: Futian CBD](https://www.traxon-ecue.com/project/shenzhen-futian-cbd/) xác định phạm vi dự án, năm hoàn thành và các thiết bị.
- [Butler PRO datasheet](https://na.traxon-ecue.com/products/butler-pro/) có các biến thể DMX và e:pix. Slide tính theo **DMX**; nguồn dự án không xác định biến thể lắp tại từng tòa. Đây là thiết bị legacy, trang hãng hiện ghi discontinued.
- Phép tính riêng: 16 × 512 = 8.192 kênh. Với cấu hình RGB 3 kênh/pixel, floor(512/3) = 170 pixel trong một universe, dư 2 kênh. Không áp công thức này để suy ra số pixel thực của Futian: fixture có thể dùng ánh xạ khác.

Câu hỏi thảo luận: lúc mất server, hệ thống giữ được mức chức năng nào? Không tự gán PTP/NTP, độ lệch khung hình hay topology mạng khi nguồn chưa nêu.

### C3 · Huaqiangbei — hardware prototype → PCB → PCBA

Dùng Seeed làm ví dụ có liên hệ địa điểm rõ ràng, không coi toàn khu là một nhà máy. Phân biệt đầu cắm, giao thức điện, file chế tạo và sản phẩm đã lắp. Checklist bàn giao đề xuất gồm Gerber/dữ liệu khoan, BOM/vị trí linh kiện, firmware/fixture/pass-fail.

- [Seeed: cửa hàng Huaqiangbei, 2019](https://www.seeedstudio.com/blog/2019/07/17/seeeds-first-ever-offline-store-opens-in-huangqiangbei%EF%BB%BF/) là bằng chứng liên hệ lịch sử; không khẳng định cửa hàng vẫn hoạt động năm 2026.
- [Seeed Fusion capabilities](https://www.seeedstudio.com/fusion_pcb.html) là thông số của dịch vụ này, không phải mọi xưởng trong khu; khả năng nhận đơn cụ thể còn tùy stackup và lựa chọn chế tạo.
- [Arduino: Grove Sensor Kit](https://store.arduino.cc/collections/mkr-family/products/sensor-kit-base) giúp phân biệt các loại giao tiếp của hệ module.
- Quy đổi riêng: 1 mil = 0,001 inch; 4 mil × 25,4 mm/inch = 0,1016 mm. Không hứa “24 giờ ra sản phẩm hoàn chỉnh”.

Câu hỏi thảo luận: nhà cung cấp khác có tái lập cùng kết quả kiểm thử từ bộ hồ sơ của mình không?

### D4 · OCT Harbour — show control và mechatronics

Phân biệt thời điểm phát lệnh với thời điểm hiệu ứng vật lý xuất hiện. Khí nén áp suất dương là chi tiết kỹ thuật được công bố; độ trễ bơm, thời gian cue, giao thức mạng và ngưỡng interlock chưa có số liệu trong hồ sơ.

- [ECA2: Mangrove Groove](https://www.eca2.com/cases/mangrove-groove/) là nguồn từ đơn vị làm show gốc. “Underwater projectors” trong ngữ cảnh này là đèn chiếu sáng dưới nước, khác với nhóm máy chiếu video.
- Các số lượng trên slide thuộc cấu hình gốc 2011. Không coi các bộ đếm hiển thị 0 trên trang web là số đo thiết bị.

Câu hỏi thảo luận: nếu môi trường làm hiệu ứng đáp ứng chậm, bỏ cue hay chờ? Những kiểm tra nào phải chặn lệnh trước khi chạy?

### E5 · Talent Park — 5G-A integrated sensing and communication

ISAC mở thêm lớp cảm nhận trên hạ tầng vô tuyến. Giải thích quá trình từ phản xạ tới theo dõi mục tiêu, sau đó tách phát hiện, định danh, cảnh báo và quyền điều khiển thành các khả năng riêng.

- [ZTE và Shenzhen Mobile, 14/05/2024](https://www.zte.com.cn/china/about/news/_7.html) là bằng chứng thử nghiệm tại Talent Park và các điểm ở Nanshan.
- [ZTE Technologies: ISAC, 2025](https://www.zte.com.cn/global/about/magazine/zte-technologies/2025/special-topic---5g-a-mmwave/special-topic---5g-a-mmwave/mmwave-isac-driving-low-altitude-economy.html) cung cấp bối cảnh nguyên lý. Bài này còn có các case ở thành phố khác: không chuyển số trạm, diện tích, độ chính xác hoặc kết quả của chúng sang Talent Park.
- Nguồn nêu kịch bản thử nhưng không cung cấp các KPI định lượng riêng của địa điểm. Phần engineering là bộ câu hỏi đánh giá, không phải tuyên bố hiệu năng.

Câu hỏi thảo luận: khi mục tiêu mất telemetry, cảm nhận độc lập còn cung cấp được điều gì đáng tin?

### F6 · Sea World / Shekou — structural engineering và building envelope

Chọn công trình **Sea World Culture and Arts Center**. Đọc ba lớp chức năng: chịu lực, bao che, ánh sáng trong nhà. Phần phân tích chuyển sang đánh đổi giữa tầm nhìn, nhiệt, độ chói, chuyển vị và khả năng bảo trì.

- [Maki and Associates: hồ sơ SWCAC](https://www.maki-and-associates.co.jp/projects/SZC?lang=en) là nguồn kiến trúc sư.
- [ArchDaily: thuyết minh do kiến trúc sư cung cấp](https://www.archdaily.com/885148/shenzhen-sea-world-culture-and-arts-center-maki-and-associates-not-ready) mô tả các khối và mặt dựng.
- U-value là hệ số truyền nhiệt; SHGC là hệ số thu nhiệt mặt trời. Nguồn được dẫn không công bố trị số của công trình. Không suy ra phần trăm tiết kiệm điện hoặc thông số kính từ ảnh kiến trúc.

Câu hỏi thảo luận: muốn thay đổi mặt dựng, cần mô phỏng hoặc đo những gì trước khi đánh giá tốt hơn?

## Thay tư liệu về sau

Dữ liệu slide nằm ở `src/data/missions.ts`; đồ họa nguyên lý ở `src/components/TechnicalDiagram.tsx`. Các ảnh/video tư liệu khai báo tại `src/data/missionMedia.ts`. Có thể thay ảnh minh họa bằng ảnh đoàn cung cấp và cập nhật caption tương ứng. Video hiện phát trực tiếp từ máy chủ Meituan, cần Internet; không tự phát. Chuyển slide hoặc đóng deck sẽ dừng video. Không bỏ phạm vi của thông số khi rút ngắn lời thuyết trình.

## Tư liệu hình ảnh và video đã bổ sung

- A1: video M-Drone 4L Winch từ [trang công nghệ Meituan](https://www.meituan.com/technology), cùng poster do hãng cung cấp. Là tư liệu giới thiệu sản phẩm đời sau, không gán footage cho Bay Park hay cấu hình Gen 4 2023.
- A1 thêm ảnh drone và tủ nhận hàng đúng tại Bay Park từ [Shenzhen Daily / Nanshan Government, 03/06/2024](https://www.szns.gov.cn/english/news/content/post_11367103.html).
- B2: ảnh light show quanh Civic Center từ [Futian Government, 31/01/2023](https://www.szft.gov.cn/ftxx/xwdt/bmgzdt/content/post_10401675.html).
- C3: ảnh module trên kệ cửa hàng Seeed, từ bài công bố cửa hàng năm 2019 đã dẫn.
- D4: ảnh sân khấu Mangrove Groove, credit © ECA2 / Julien PANIÉ. Giữ nguyên ảnh, bao gồm watermark.
- E5: ảnh demo ISAC do ZTE đăng năm 2024; thêm ảnh điểm cất cánh **tuyến** Coastal City–Talent Park từ [Meituan, 04/09/2023](https://www.meituan.com/news/NN230904058001287). Không gán điểm cất cánh đó là phía trong công viên.
- F6: ảnh nội thất và khoảng thông tầng SWCAC từ hồ sơ Maki and Associates.

Ảnh tải về nằm trong `public/media/research`. Thông tin chủ nguồn và liên kết hiện ngay cạnh từng tư liệu. Đây là bộ tham khảo cho trình bày nội bộ; các ảnh không được gắn nhãn tác phẩm của đoàn hay ảnh có giấy phép mở.
