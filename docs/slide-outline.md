# Outline thuyết trình — Shenzhen Mission Log

Đối chiếu bộ slide trong dự án ngày 18/09/2026: **33 slide, 6 điểm dừng**. Outline giữ nguyên thứ tự trình chiếu hiện tại. A1.2 là một slide 3D có 13 bước điều khiển, không phải 13 slide riêng.

Mục tiêu: giúp người nghe hiểu tại mỗi địa điểm có hệ thống gì đáng tìm hiểu, hệ thống hoạt động thế nào, bài toán kỹ thuật nằm ở đâu và nhóm rút ra điều gì. Giả định đây là buổi chia sẻ nội bộ, người nghe có mức độ hiểu biết kỹ thuật khác nhau; giải thích thuật ngữ ở lần xuất hiện đầu tiên.

Đây là đề xuất biên tập từ nội dung hiện có, không phải một đợt xác minh mới các nguồn bên ngoài. Hồ sơ nguồn và phạm vi từng case nằm trong [presentation-content.md](presentation-content.md), [missions.ts](../src/data/missions.ts) và [missionMedia.ts](../src/data/missionMedia.ts).

## Cách dùng outline

- **Nội dung trên slide:** chọn 2–3 ý, viết thành từ khóa hoặc câu ngắn. Mỗi slide trả lời một câu hỏi chính.
- **Hình thức:** dùng ảnh để chỉ ra điều có thể quan sát, sơ đồ để giải thích cơ chế, tình huống để dẫn tới thảo luận.
- **Ý nói / câu chốt:** phần người trình bày diễn giải; không cần đưa nguyên văn lên màn hình.
- Giới thiệu địa điểm chỉ cần đủ để hiểu case. Slide tư liệu tập trung vào chi tiết trong ảnh/video; tránh lặp lại phần giới thiệu.
- Giữ nhãn nguồn, năm và phạm vi: ảnh của đơn vị công bố, mô phỏng nguyên lý, hay dữ liệu do đoàn tự ghi nhận. Chỉ bổ sung lời kể “chúng tôi đã thấy/đã thử” khi có trải nghiệm thật của đoàn.

## Mở đầu tại bản đồ — khoảng 1 phút

**Trên màn hình:** hành trình 6 điểm và 6 chủ đề: giao hàng tự hành → điều khiển ánh sáng → chế tạo phần cứng → điều khiển hiệu ứng vật lý → cảm nhận vô tuyến → kỹ thuật công trình.

**Lời dẫn:** “Ở mỗi điểm, chúng ta chọn một hệ thống để tìm hiểu: nó hoạt động thế nào, khi có sự cố thì chuyện gì xảy ra, và cần đo gì để biết nó làm tốt?”

Phần mở và phần kết dùng màn hình bản đồ, không tính thêm vào 33 slide.

## A1 · Shenzhen Bay Park — giao hàng bằng drone

**Câu hỏi của điểm:** Một hộp hàng đi từ người gửi đến người nhận như thế nào, và hệ thống giữ được sự kiểm soát ở mỗi lần bàn giao ra sao?

**Thời lượng gợi ý:** 5 phút 30 giây; dành khoảng 90 giây cho cảnh 3D.

| Slide | Nội dung cần có | Hình thức phù hợp | Ý nói / câu chốt |
| --- | --- | --- | --- |
| **01 · A1.1 — Giao hàng trên một tầng trời** | Bay Park là bối cảnh của dịch vụ giao hàng bằng drone; chuỗi gồm điểm gửi, drone, tủ và khách; giới thiệu bài toán giao hàng tự hành. Tách thông tin hiện diện dịch vụ khỏi thông số nền tảng Gen 4. | Ảnh drone và tủ tại Bay Park; một câu hỏi mở; tối đa ba thông tin nền có ghi phạm vi. | “Chúng ta sẽ theo dõi một đơn hàng, từ chuẩn bị đến lúc khách lấy được hộp.” |
| **02 · A1.2 — Theo chân một hộp hàng** | Chuẩn bị và gắn hàng → cất cánh và di chuyển → bàn giao vào tủ → giữ hàng → xác nhận và lấy hàng. Nhấn ba lần chuyển trách nhiệm: người sang drone, drone sang tủ, tủ sang khách. | Giữ cảnh 3D hiện có; bấm từng bước và nói theo hành động. Chi tiết 13 bước ở bảng bên dưới. | “Mỗi lần chuyển hộp cũng cần một trạng thái xác nhận. Cơ cấu bên trong tủ ở đây là mô phỏng giải thích chức năng.” |
| **03 · A1.3 — Xem drone bay và bàn giao hàng** | Quan sát cách mang tải, giữ vị trí và hạ hàng bằng cáp của M-Drone 4L Winch; đặt cạnh cách giao vào tủ ở cảnh trước. | Video hiện có; đặt một nhiệm vụ quan sát trước khi phát: “Hộp rời drone bằng cách nào?” | “Đây là tư liệu về phương án hạ hàng bằng cáp; không gán video này cho tuyến Bay Park hoặc drone Gen 4 trong phần thông số.” |
| **04 · A1.4 — Điểm nhận hàng tại Bay Park** | Chỉ ra drone, tủ nhận và khu vực khách tiếp cận; giải thích vai trò điểm nhận trong chuỗi giao hàng. | Ảnh đúng địa điểm; ba nhãn hoặc điểm chỉ dẫn trực tiếp trên ảnh. | “Ảnh giúp đặt quy trình vào bối cảnh thật; ảnh không cho biết thiết kế cơ khí bên trong tủ.” |
| **05 · A1.5 — Nhìn đường. Giữ hướng. Xử lý lỗi** | Ba khối chức năng theo công bố Gen 4: cảm nhận môi trường; định vị và điều khiển; dự phòng và ứng phó sự cố. | Sơ đồ chức năng ba khối; dùng mũi tên và một nhánh lỗi, tránh dồn danh sách cảm biến. | “Tự hành cần vừa hoạt động bình thường, vừa có cách chuyển trạng thái khi một thành phần gặp lỗi.” |
| **06 · A1.6 — Bay nhanh chưa đủ để giao nhanh** | Tổng thời gian gồm chuẩn bị + chờ trạm + bay + nhận hàng; xác định nơi có thể gây chờ; phân biệt giao vào tủ với khách đã nhận. | Thanh thời gian chia bốn đoạn, không gán thời lượng thực khi chưa đo; đánh dấu các điểm bàn giao. | “Muốn tối ưu một đơn hàng, cần đo cả chuỗi thay vì chỉ đo thời gian bay.” |
| **07 · A1.7 — Khi có lỗi, đơn hàng đang ở đâu?** | Chốt bài học về trạng thái và bàn giao; chọn tình huống điểm nhận chưa sẵn sàng; hỏi trạng thái tiếp theo và bằng chứng xác nhận. | Một tình huống ngắn với ba lựa chọn để thảo luận, chẳng hạn chờ, chuyển điểm hoặc quay về; đây là phương án đề xuất. | “Điều cần làm rõ là hộp đang ở đâu, bên nào đang giữ và khi nào được coi là hoàn tất.” |

**Lời dẫn theo 13 bước của A1.2:**

| Bước trong cảnh | Điểm cần nói |
| --- | --- |
| 1. Tổng quan điểm xuất phát | Xác định người chuẩn bị, hộp hàng, drone và đích đến. Bối cảnh mái nhà là mô phỏng. |
| 2. Nhân viên mang hộp | Con người đảm nhiệm phần chuẩn bị và đưa hàng ra bãi. |
| 3. Gắn hộp vào drone | Hộp chuyển từ tay người sang vị trí mang tải; đánh dấu lần bàn giao thứ nhất. |
| 4. Nhân viên lùi khỏi bãi | Trong mô phỏng, người rời vùng cánh quạt trước khi drone cất cánh. |
| 5. Cất cánh | Quan sát việc nâng hộp khỏi bãi trước khi di chuyển. |
| 6. Bay tới điểm nhận | Theo dõi cùng một hộp đi xuyên suốt hành trình; đường bay và thời gian là minh họa. |
| 7. Tiếp cận tủ | Cửa trên mở để tiếp nhận; điểm nhận cần sẵn sàng cho lần bàn giao tiếp theo. |
| 8. Chuyển hộp vào tủ | Hộp rời drone; chuyển động khay chỉ giúp diễn giải luồng hàng. |
| 9. Drone rời đi | Tủ giữ hộp trong khi chờ khách; thời điểm drone tới khác thời điểm khách nhận. |
| 10. Xem cửa trên | Phân biệt cửa nhận từ drone với cửa phía trước dành cho khách. |
| 11. Xem khoang bên trong | Giải thích chức năng đưa và giữ hộp. Ray, khay và số khoang không phải cấu hình đã được xác minh tại Bay Park. |
| 12. Thao tác trên màn hình | Liên kết lượt nhận với hộp. Cách nhập số cuối điện thoại được lấy từ trải nghiệm tại Fudan. |
| 13. Mở cửa lấy hàng | Kết thúc lần bàn giao cho khách trong mô phỏng; quay lại câu hỏi về bằng chứng hoàn tất đơn. |

**Chuyển điểm:** “Một drone cần phối hợp nhiều bộ phận. Ở Civic Center, bài toán phối hợp mở rộng ra nhiều tòa nhà.”

## B2 · Civic Center — điều khiển ánh sáng phân tán

**Câu hỏi của điểm:** Làm thế nào để nhiều tòa nhà cùng thể hiện một nội dung và vẫn có cách vận hành khi một phần mất kết nối?

**Thời lượng gợi ý:** 3 phút 30 giây.

| Slide | Nội dung cần có | Hình thức phù hợp | Ý nói / câu chốt |
| --- | --- | --- | --- |
| **08 · B2.1 — Cả skyline thành một màn hình** | Giới thiệu case Futian và vai trò Civic Center trong tổng thể; quy mô nhiều tòa nhà; bài toán điều phối chung. | Toàn cảnh skyline và sơ đồ phạm vi khái niệm; ghi năm hồ sơ dự án. | “Điều đáng tìm hiểu là cách nhiều mặt dựng cùng tạo ra một trải nghiệm liên tục.” |
| **09 · B2.2 — Nội dung chạy xuyên qua skyline** | Chỉ ra các phần của hình ảnh trên những tòa nhà khác nhau; khác biệt hình khối và khoảng cách; yêu cầu ánh xạ nội dung. | Ảnh tư liệu; đánh dấu hai hoặc ba mặt dựng để người nghe theo dõi. | “Ảnh cho thấy nội dung được bố trí trên nhiều mặt dựng; muốn đánh giá độ đồng bộ phải có quan sát theo thời gian.” |
| **10 · B2.3 — Từ nội dung số tới từng kênh đèn** | Luồng điều phối trung tâm → bộ điều khiển tại biên → đèn; giải thích kênh điều khiển khác pixel; minh họa RGB dùng ba kênh. | Sơ đồ ba tầng và một pixel RGB phóng lớn. | “Một hình ảnh phải được chuyển thành đúng giá trị ở đúng kênh của đúng thiết bị.” |
| **11 · B2.4 — Mất mạng, thành phố chiếu gì?** | Ánh xạ đúng; giữ nhịp giữa các phần; hành vi khi mất server. Dùng tính năng cảnh tĩnh dự phòng của Butler PRO làm ví dụ thiết bị. | Một nhánh bình thường và một nhánh mất kết nối. Có thể đưa phép tính 512 ÷ 3 = 170 pixel RGB, dư hai kênh như chú thích dung lượng. | “Cần định nghĩa hệ thống còn làm được gì khi mất kết nối; không mặc định cảnh tĩnh đồng nghĩa tiếp tục phát video.” |
| **12 · B2.5 — Nhiều hệ nhỏ cùng giữ nhịp** | Chốt ba yếu tố: ánh xạ, đồng bộ, dự phòng; đặt tình huống một tòa nhà offline; chọn hành vi và nơi ra quyết định. | Một câu hỏi lựa chọn: giữ cảnh tĩnh, tắt có kiểm soát hay phương án khác? | “Quy tắc khi một phần gặp sự cố cần được thiết kế cùng với trải nghiệm trình diễn.” |

**Chuyển điểm:** “Phía sau hệ điều khiển là các bo mạch và linh kiện. Huaqiangbei giúp chúng ta nhìn vào cách một ý tưởng trở thành phần cứng.”

## C3 · Huaqiangbei — từ module đến bo mạch kiểm thử được

**Câu hỏi của điểm:** Cần chuẩn bị gì để một prototype hoạt động được trở thành sản phẩm mà nhà cung cấp khác có thể chế tạo và kiểm tra lại?

**Thời lượng gợi ý:** 3 phút 30 giây.

| Slide | Nội dung cần có | Hình thức phù hợp | Ý nói / câu chốt |
| --- | --- | --- | --- |
| **13 · C3.1 — Từ linh kiện tới một bo mạch chạy được** | Giới thiệu hệ sinh thái linh kiện và prototyping qua ví dụ Seeed; ba mức module, PCB, PCBA; phạm vi thông số thuộc dịch vụ Seeed Fusion. | Ảnh địa điểm/tư liệu và ba hình đại diện cho ba mức sản phẩm. | “Tại điểm này, chúng ta xem khoảng cách giữa mua được linh kiện và bàn giao được một thiết kế.” |
| **14 · C3.2 — Module thật, ngay trên kệ** | Module có thể giúp thử chức năng nào; cần kiểm tra điện áp, tín hiệu và đầu nối gì trước khi ghép; ảnh cửa hàng thuộc hồ sơ năm 2019. | Ảnh kệ hàng; chọn một module làm ví dụ thay vì liệt kê toàn bộ. | “Module làm sẵn giúp thử nhanh, nhưng kết nối vừa đầu cắm vẫn chưa đủ.” |
| **15 · C3.3 — Cùng đầu cắm, chưa chắc cùng giao thức** | Giải thích digital, analog, I²C, UART ở mức chức năng; phân biệt PCB chưa lắp linh kiện với PCBA đã lắp; kiểm thử sau lắp ráp. | Dòng tiến trình module thử nghiệm → PCB → PCBA → kiểm thử; thêm nhãn giao tiếp. | “Sự tương thích gồm cả cơ khí, điện và cách trao đổi dữ liệu.” |
| **16 · C3.4 — Đóng gói cả thiết kế lẫn cách kiểm thử** | Ba bộ bàn giao: Gerber và dữ liệu khoan; BOM và vị trí linh kiện; firmware và bộ gá kiểm thử cùng tiêu chí đạt/không đạt. | Checklist ba nhóm, mỗi nhóm một ví dụ đầu ra; giải thích Gerber và BOM bằng tiếng Việt. | “Nhà sản xuất cần biết phải làm ra cái gì và bằng cách nào xác nhận nó làm đúng.” |
| **17 · C3.5 — Prototype chạy được. Sản phẩm phải kiểm thử được** | Chốt yêu cầu tái lập; đặt tình huống chuyển sang một xưởng khác; tìm phần hồ sơ còn thiếu. | Một bộ hồ sơ minh họa với câu hỏi: “Xưởng mới có đủ dữ liệu để làm và kiểm tra cùng một bo không?” | “Kết quả đáng tin là kết quả có thể tái lập, không chỉ một mẫu từng chạy được.” |

**Chuyển điểm:** “Khi phần cứng tác động lên nước và ánh sáng, vấn đề tiếp theo là thời gian đáp ứng của thế giới vật lý.”

## D4 · OCT Harbour — đồng bộ nước, ánh sáng và sân khấu

**Câu hỏi của điểm:** Làm sao các thiết bị nhận lệnh ở những thời điểm khác nhau nhưng tạo ra hiệu ứng đúng nhịp?

**Thời lượng gợi ý:** 3 phút 30 giây.

| Slide | Nội dung cần có | Hình thức phù hợp | Ý nói / câu chốt |
| --- | --- | --- | --- |
| **18 · D4.1 — Nước, ánh sáng và một nhịp điều khiển** | Giới thiệu Mangrove Groove; các lớp nước, chiếu sáng, video, laser và biểu diễn; mục tiêu phối hợp thành một cảnh. | Ảnh toàn cảnh; nhãn các nhóm hiệu ứng; ghi cấu hình gốc theo hồ sơ 2011. | “Một cảnh sân khấu là kết quả phối hợp của nhiều cơ cấu có cách đáp ứng khác nhau.” |
| **19 · D4.2 — Khi cue trở thành một cảnh thật** | Quan sát vị trí người diễn, vùng nước và ánh sáng; chỉ ra các hiệu ứng cần xuất hiện cùng lúc; giới thiệu cue là lệnh gắn với mốc trình diễn. | Ảnh tư liệu có ba điểm chỉ dẫn; tránh khẳng định độ chính xác thời gian chỉ từ ảnh. | “Hãy tách cảnh đang nhìn thấy thành các thành phần mà bộ điều khiển phải phối hợp.” |
| **20 · D4.3 — Một timeline. Nhiều loại cơ cấu** | Timeline → cue → thiết bị → hiệu ứng; phân biệt thời điểm ra lệnh và thời điểm hiệu ứng xuất hiện. | Hai hàng thời gian khái niệm cho nước và ánh sáng, không gán số đo thực. | “Muốn hiệu ứng cùng xuất hiện, cần xét cả độ trễ sau khi thiết bị nhận lệnh.” |
| **21 · D4.4 — Phần khó nằm ở thế giới vật lý** | Ba bài toán: đáp ứng của nước, môi trường có nước biển, điều kiện phải dừng hiệu ứng; đưa áp suất dương như biện pháp được hồ sơ công bố. | Sơ đồ nguyên nhân → ảnh hưởng → đại lượng cần đo; dùng một tình huống màn nước hình thành chậm. | “Cần đo thời gian đáp ứng, tính đến môi trường và xác định điều kiện dừng; nguồn chưa cho các ngưỡng cụ thể.” |
| **22 · D4.5 — Muốn đúng nhịp, phải hiểu độ trễ** | Chốt bài học về đồng bộ hiệu ứng thực; hỏi khi màn nước chưa sẵn sàng thì chờ, bỏ cue hay chuyển cảnh. | Một tình huống và ba lựa chọn để nhóm giải thích đánh đổi. | “Quyết định nên dựa trên trạng thái thực của hiệu ứng và ưu tiên vận hành.” |

**Chuyển điểm:** “Muốn quyết định theo trạng thái thực, hệ thống cần cảm nhận được môi trường. Talent Park đưa câu chuyện sang cảm nhận bằng sóng vô tuyến.”

## E5 · Talent Park — cảm nhận drone bằng hạ tầng 5G-A

**Câu hỏi của điểm:** Hệ thống vô tuyến có thể quan sát gì về drone, và cần bằng chứng nào để tin một cảnh báo?

**Thời lượng gợi ý:** 4 phút.

| Slide | Nội dung cần có | Hình thức phù hợp | Ý nói / câu chốt |
| --- | --- | --- | --- |
| **23 · E5.1 — Trạm 5G cũng có thể “nhìn” drone** | Giới thiệu ISAC: kết hợp truyền thông và cảm nhận; bối cảnh thử nghiệm ZTE × Shenzhen Mobile công bố 2024; mục tiêu theo dõi và cảnh báo. | Một sơ đồ tách hai vai trò kết nối/cảm nhận; ảnh sự kiện làm bối cảnh. | “Cảm nhận vô tuyến bổ sung quan sát về vật thể; đây là case thử nghiệm được công bố.” |
| **24 · E5.2 — Từ thử nghiệm tới màn hình giám sát** | Những thông tin hệ thống hướng tới: vị trí, quỹ đạo và vượt ranh giới; màn hình dùng để hỗ trợ quyết định gì; phạm vi ảnh sự kiện. | Ảnh demo hiện có; chỉ chú thích các chi tiết đọc được. Phần giải thích chức năng dùng chú giải riêng. | “Một màn hình có mục tiêu chưa cho biết độ chính xác, độ liên tục hay tỷ lệ cảnh báo nhầm.” |
| **25 · E5.3 — Phía dưới mỗi chuyến bay là một trạm** | Liên hệ hoạt động drone với hạ tầng mặt đất qua ảnh điểm cất cánh tuyến Coastal City–Talent Park; khu thao tác và luồng người/thiết bị; quay lại bài toán vận hành của A1. | Ảnh tuyến giao hàng; ghi rõ đây là tư liệu bối cảnh riêng. | “Ảnh này bổ sung bối cảnh vận hành drone; không chứng minh tuyến Meituan đã tích hợp với hệ thống ISAC.” |
| **26 · E5.4 — Từ tín hiệu phản xạ tới quỹ đạo** | Ba bước: thu phản xạ → kết hợp quan sát qua nhiều trạm → theo dõi và cảnh báo ranh giới; giải thích vùng giới hạn bằng ví dụ. | Sơ đồ nguyên lý với một mục tiêu và nhiều điểm quan sát; không trình bày như vùng phủ thực. | “Một lần thấy phản xạ khác với duy trì được quỹ đạo qua nhiều thời điểm.” |
| **27 · E5.5 — Phát hiện được, rồi tin đến mức nào?** | Bốn nhóm chỉ số đề xuất: phát hiện, báo động giả, mất quỹ đạo, độ trễ cảnh báo; phân biệt phát hiện với nhận dạng và điều khiển. | Bảng ‘chỉ số / câu hỏi nó trả lời’, để trống giá trị vì chưa có số đo riêng cho case. | “Muốn sử dụng cảnh báo cần biết cả khả năng phát hiện lẫn các trường hợp hệ thống sai hoặc mất dấu.” |
| **28 · E5.6 — Nếu drone không gửi dữ liệu thì sao?** | Chốt vai trò của quan sát qua cảm nhận; tình huống mất telemetry, tức dữ liệu drone tự gửi; phân biệt điều quan sát được và điều chưa thể kết luận. | Hai cột ‘có thể quan sát’ và ‘cần thêm bằng chứng’, để người nghe đề xuất. | “Quan sát vị trí không tự cho biết danh tính, ý định hay quyền điều khiển drone.” |

**Chuyển điểm:** “Ở điểm cuối, chúng ta áp dụng cùng cách nhìn hệ thống vào một công trình: kết cấu, lớp vỏ và trải nghiệm bên trong.”

## F6 · Sea World / Shekou — kỹ thuật phía sau không gian kiến trúc

**Câu hỏi của điểm:** Những lựa chọn về kết cấu và mặt dựng ảnh hưởng thế nào đến ánh sáng, nhiệt và việc sử dụng công trình?

**Thời lượng gợi ý:** 3 phút.

| Slide | Nội dung cần có | Hình thức phù hợp | Ý nói / câu chốt |
| --- | --- | --- | --- |
| **29 · F6.1 — Lớp vỏ cũng là một hệ thống** | Xác định case Sea World Culture and Arts Center trong khu Sea World; giới thiệu ba lớp chịu lực, bao che, không gian; mở câu hỏi về mối liên hệ giữa hình thức và hiệu năng. | Ảnh công trình có nguồn phù hợp hoặc ảnh hiện có kèm sơ đồ ba lớp; ghi rõ ghim đại diện khu Sea World. | “Chúng ta sẽ đọc công trình qua nhiệm vụ của từng lớp, từ chịu lực đến điều kiện bên trong.” |
| **30 · F6.2 — Ánh sáng đi qua nhiều tầng không gian** | Quan sát thông tầng, cầu thang, mặt kính và kết nối thị giác; nêu điều ảnh thể hiện và điều cần đo thêm về trải nghiệm. | Ảnh nội thất; chỉ dẫn hướng ánh sáng và tầm nhìn dưới dạng diễn giải. | “Ảnh gợi ra câu hỏi về ánh sáng và sử dụng; ảnh chưa đủ để kết luận độ chói hay mức tiện nghi.” |
| **31 · F6.3 — Kết cấu, mặt dựng, ánh sáng** | Chịu lực bằng bê tông và thép; các giải pháp bao che theo chức năng; ánh sáng cho sảnh và không gian trưng bày. | Mặt cắt khái niệm ba lớp, mỗi lớp một màu; liên hệ với ảnh trước. | “Các không gian có yêu cầu khác nhau nên cần những giải pháp mặt dựng và ánh sáng phù hợp.” |
| **32 · F6.4 — Trong suốt đến đâu là đủ?** | Các đánh đổi khi tăng kính: tầm nhìn, nhiệt, chói, chuyển vị và bảo trì; dữ liệu cần có trước khi lựa chọn. | Bảng ‘mong muốn / hệ quả cần kiểm tra’; giải thích U-value là hệ số truyền nhiệt, SHGC là hệ số thu nhiệt mặt trời. | “Đề xuất tăng diện tích kính cần được kiểm tra bằng mô phỏng hoặc đo đạc; chưa có trị số hiệu năng trong hồ sơ đang dẫn.” |
| **33 · F6.5 — Hình thức là nơi nhiều ràng buộc gặp nhau** | Chốt mối liên hệ kiến trúc–kỹ thuật–vận hành; đặt tình huống mở thêm mặt kính hướng biển; chọn phép đo hoặc mô phỏng cần làm trước. | Một câu hỏi quyết định và ba tiêu chí nhóm thấy quan trọng nhất. | “Đánh giá một phương án cần nhìn đồng thời trải nghiệm, hiệu năng và khả năng vận hành lâu dài.” |

## Kết tại bản đồ — khoảng 1 phút

Quay lại sáu điểm và đặt cạnh nhau sáu bài học:

| Điểm | Bài học muốn người nghe nhớ |
| --- | --- |
| Bay Park | Theo dõi cả chuỗi giao hàng và từng lần bàn giao. |
| Civic Center | Thiết kế sự phối hợp và hành vi khi một phần mất kết nối. |
| Huaqiangbei | Bàn giao cả sản phẩm lẫn cách kiểm thử lại. |
| OCT Harbour | Đo phản ứng vật lý sau lệnh điều khiển. |
| Talent Park | Đánh giá độ tin cậy của quan sát và cảnh báo. |
| Sea World | Cân bằng trải nghiệm, hiệu năng và vận hành. |

**Câu hỏi kết thúc:** “Trong sáu bài học này, nhóm muốn áp dụng bài học nào vào công việc của mình, và bước thử đầu tiên sẽ là gì?”

**Tổng thời lượng gợi ý:** 25 phút, gồm mở đầu 1 phút, sáu điểm 23 phút và kết 1 phút. Câu hỏi cuối mỗi điểm chỉ nên lấy một ý kiến ngắn; thảo luận sâu cần thêm thời gian riêng.
