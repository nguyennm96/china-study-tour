# Tài liệu robot khách sạn do người dùng cung cấp

Nguồn: https://docs.google.com/document/d/17bI67RGsjEB8GECcz_JJnRICAKicv2CofpdORjiz77Y/edit?tab=t.0
Đọc qua Google Drive ngày 22/09/2026. Nội dung dưới đây là bản chụp văn bản nguồn; nguồn biên tập cho chương robot. Các trích dẫn ngành trong tài liệu chưa được kiểm chứng độc lập trong lần cập nhật này.

﻿🤖
ROBOT GIAO HÀNG TẬN PHÒNG
TẠI KHÁCH SẠN TRUNG QUỐC
Nghiên cứu chuyên sâu: Xuất thân · Quy trình · Công nghệ · Hệ thống · Thị trường
Tài liệu nội bộ · Team Truck On-Demand · Ahamove
Ngày 20/09/2026
________________


Mục lục




________________


1. Tóm tắt điều hành (BLUF)
Robot giao hàng tận phòng khách sạn thực chất là một hệ thống logistics chặng-cuối (last-mile) hoạt động trong không gian đứng của tòa nhà. Nó không đơn thuần là một cỗ máy tự chạy, mà là điểm cuối của một chuỗi tích hợp gồm: phần mềm đặt đơn (app/PMS/POS) → hệ thống điều phối trên cloud → robot điều hướng bằng cảm biến → tích hợp thang máy qua IoT → tương tác & xác thực với khách.
Điểm mấu chốt cần nhớ: Robot KHÔNG “nhận diện món ăn”. Nhân viên nạp đồ thủ công và gán số phòng đích. Cái robot thực sự “nhận diện” là môi trường (bản đồ tòa nhà) và vị trí của chính nó — nhờ công nghệ SLAM. Việc lên đúng tầng, tới đúng phòng là bài toán định vị + tích hợp thang máy, không phải thị giác nhận dạng vật thể.
Khía cạnh
	Bản chất
	Vì sao xuất hiện
	Giao điểm của thiếu nhân lực + chi phí lao động tăng + cú hích COVID + lợi thế sản xuất phần cứng của TQ
	Quy trình
	6 bước: đặt đơn → tạo task → nạp đồ + gán phòng → điều hướng & đi thang máy → thông báo khách → xác thực & mở khoang
	Công nghệ lõi
	LiDAR + SLAM (định vị), IoT/Cloud API (thang máy), fleet dispatch (điều phối đội), cảm biến đa tầng (an toàn)
	Hạ tầng KS cần có
	Tích hợp PMS/POS, thang máy có bộ điều khiển số + API, phủ WiFi/4G ổn định, trạm sạc, (tùy chọn) cửa/khóa thông minh
	Thị trường
	~0,7 tỷ USD (2025) → ~2,13 tỷ USD (2030), CAGR ~24%; APAC tăng nhanh nhất; nhưng nhiều hãng còn lỗ, đua giá
	Liên hệ Ahamove
	Cùng bài toán điều phối & tối ưu chặng cuối của Truck OD — chỉ khác môi trường (trong nhà, theo chiều dọc)
	2. Xuất thân & Lý do xuất hiện
Robot dịch vụ trong khách sạn không phải một phát minh đơn lẻ mà là kết quả hội tụ của nhiều yếu tố kinh tế – xã hội – công nghệ chín muồi cùng lúc, đặc biệt tại Trung Quốc.
2.1 Bốn lực đẩy chính
* Thiếu hụt & chi phí lao động tăng. Ngành khách sạn có tỷ lệ nghỉ việc cao, khó tuyển người cho ca đêm và các công việc lặp lại (giao nước, khăn, đồ ăn). Chi phí nhân công tại các đô thị lớn của TQ tăng nhanh khiến bài toán tự động hóa trở nên hấp dẫn về mặt tài chính.
* Cú hích COVID-19 (2020–2022). Nhu cầu dịch vụ “không tiếp xúc” (contactless) bùng nổ. Robot giao đồ tới cửa phòng mà không cần con người tiếp xúc trực tiếp trở thành giải pháp vừa an toàn dịch tễ vừa là điểm cộng marketing.
* Hệ sinh thái sản xuất phần cứng của TQ. Thâm Quyến và vùng lân cận là trung tâm sản xuất cảm biến, LiDAR, pin, động cơ và bo mạch. Điều này giúp chi phí sản xuất robot giảm rất nhanh, tạo điều kiện nhân rộng ở quy mô lớn với giá cạnh tranh.
* Văn hóa & chính sách ủng hộ tự động hóa. Thị trường và người tiêu dùng TQ có mức độ chấp nhận robot dịch vụ cao; các thành phố lớn xem robot dịch vụ là biểu tượng của “thành phố thông minh”, tạo lực kéo cho việc triển khai.
Bài học về timing: Công nghệ điều hướng robot đã tồn tại từ lâu, nhưng nó chỉ “bùng nổ” khi bối cảnh (chi phí lao động + COVID + phần cứng rẻ) chín muồi. Đây là ví dụ kinh điển: sản phẩm thắng không chỉ vì công nghệ tốt, mà vì đúng thời điểm.
2.2 Từ robot nhà hàng đến robot khách sạn
Nhiều hãng (Pudu, Keenon) khởi đầu từ robot bưng bê trong nhà hàng — bài toán tương đối đơn giản vì chỉ di chuyển trên một mặt sàn. Khi công nghệ điều hướng đủ vững, họ mở rộng sang khách sạn, nơi bài toán khó hơn hẳn vì phải di chuyển giữa nhiều tầng (cần tích hợp thang máy) và tương tác với khách lạ (cần thông báo, xác thực).
________________


3. Quy trình đặt & giao hàng (end-to-end)
Dưới đây là luồng đầy đủ từ lúc khách đặt đơn đến khi robot quay về trạm sạc. Cột “Dữ liệu đi đâu” đặc biệt hữu ích để hiểu hệ thống thông tin phía sau.
Bước
	Diễn ra gì
	Dữ liệu đi đâu / Hệ thống nào xử lý
	1. Đặt đơn
	Khách gọi đồ qua app khách sạn, quét QR trong phòng, gọi lễ tân, hoặc đặt tại quầy F&B/mini-bar
	Yêu cầu đi vào PMS (Property Management System) và/hoặc POS (điểm bán). Hệ thống ghi nhận số phòng + nội dung đơn
	2. Tạo tác vụ giao
	Đơn được chuyển thành một “delivery task” cho robot
	PMS/POS gửi task qua API tới nền tảng điều phối robot (thường trên cloud của hãng). Task gồm: điểm lấy đồ + số phòng đích
	3. Nạp đồ & gán đích
	Nhân viên đặt đồ vào khoang chứa của robot, rồi trên màn hình robot chọn/xác nhận số phòng đích (hoặc đích tự đổ về từ task)
	Robot nhận toạ độ đích từ bản đồ nội bộ tương ứng số phòng. Một số hệ thống sinh mã đơn/OTP gắn với khoang
	4. Điều hướng & đi thang máy
	Robot tự tính lộ trình, di chuyển trong hành lang, tự gọi thang máy, vào đúng cabin, chọn tầng, ra đúng tầng, tới trước cửa phòng
	Robot ↔ hệ thống thang máy trao đổi lệnh qua IoT/cloud (chi tiết ở mục 4.3). Robot dùng cảm biến để né người/vật cản
	5. Thông báo khách
	Tới nơi, robot gọi điện tới phòng hoặc nhắn tin SMS/app báo “đồ đã tới cửa”
	Lệnh gọi/nhắn phát qua tích hợp tổng đài KS hoặc gateway SMS. Robot phát âm thanh/hiển thị màn hình
	6. Xác thực & lấy đồ
	Khách ra cửa, nhập mã/chạm màn hình → khoang mở → lấy đồ → xác nhận “đã nhận”. Robot đóng khoang, quay về trạm sạc
	Nhật ký giao (access log) được ghi lại để đối soát. Robot cập nhật trạng thái task = hoàn tất về hệ điều phối


Trả lời trực tiếp câu hỏi “robot nhận diện thế nào”: Ở bước 3, robot không “nhìn” món ăn để biết đó là gì. Nó chỉ cần biết KHOANG NÀO → GIAO PHÒNG NÀO. Việc gắn đồ với phòng do con người (hoặc mã đơn) quyết định. Từ đó trở đi, mọi thứ là bài toán ĐỊNH VỊ và ĐIỀU HƯỚNG tới toạ độ của số phòng đó trên bản đồ.
________________


4. Kiến trúc công nghệ
4.1 Điều hướng: LiDAR + SLAM + hợp nhất cảm biến
SLAM (Simultaneous Localization and Mapping) là “bộ não định vị” của robot. Nó cho phép robot vừa dựng bản đồ môi trường, vừa xác định vị trí của chính mình trên bản đồ đó theo thời gian thực — mà không cần vạch kẻ sàn hay đường ray cố định.
* LiDAR: phát tia laser quét 360° để đo khoảng cách tới tường, cột, vật cản → dựng bản đồ hình học chính xác của hành lang, sảnh, thang máy.
* Visual SLAM (camera): bổ sung nhận diện đặc điểm hình ảnh, hữu ích ở nơi ít cấu trúc hình học.
* Cảm biến siêu âm / hồng ngoại / cảm biến va chạm: phát hiện người, hành lý, xe đẩy ở cự ly gần để dừng/né kịp thời (an toàn).
* Hợp nhất cảm biến (sensor fusion): kết hợp tất cả nguồn dữ liệu để ra quyết định di chuyển ổn định, chống trơn trượt định vị.
Cách robot “tìm đúng phòng”: Khi lắp đặt, kỹ thuật viên cho robot chạy khảo sát để dựng bản đồ toàn tòa nhà, rồi GẮN NHÃN từng điểm (số phòng, thang máy, trạm sạc) lên bản đồ. Khi có task giao phòng 1205, robot tra toạ độ điểm “1205” trên bản đồ tầng 12 và điều hướng tới đó. Nó “biết” phòng nhờ bản đồ đã gắn nhãn, không phải nhờ đọc biển số phòng bằng mắt (dù một số robot có thêm camera đối chiếu).
4.2 Tích hợp thang máy — phần khó & quan trọng nhất
Đây là rào cản kỹ thuật lớn nhất và cũng là điều khiến người xem bất ngờ nhất: robot “tự bấm thang máy”. Thực tế robot không dùng tay bấm — nó giao tiếp điện tử với hệ thống thang máy.
Cách hoạt động
1. Giao tiếp hai chiều qua cloud/API. Robot gửi lệnh “gọi thang tới tầng X”, “đi tới tầng Y”; hệ thống thang máy phản hồi trạng thái (đang tới, đã mở cửa, chế độ bảo trì, cảnh báo khẩn). Ví dụ điển hình: nền tảng Otis Integrated Dispatch tích hợp ở cấp cụm thang máy qua giao diện số trên cloud.
2. Giao thức kết nối. Robot ↔ bộ điều khiển thang có thể qua API cloud, hoặc các chuẩn công nghiệp như TCP/IP, RS-485, CAN bus. Kết nối không dây dùng Wi-Fi hoặc 4G để giữ liên lạc thời gian thực.
3. Xác nhận & lên/xuống an toàn. Robot dùng cảm biến (LiDAR/camera/hồng ngoại) để xác nhận cabin đã tới, cửa mở, và cabin đủ chỗ/không quá đông trước khi vào; ra đúng tầng rồi mới tiếp tục lộ trình.
Điều kiện hạ tầng: thang máy cần có bộ điều khiển số (digital controller) và cho phép truy cập API. Ưu điểm của kiến trúc cloud hiện đại là hạn chế thi công phần cứng nặng — chuyển sang “kết nối số được chứng nhận”. Lưu ý: KHÔNG phải thang máy nào cũng hỗ trợ API, nên cần khảo sát tương thích trước khi triển khai. Một số nước bắt đầu có chuẩn interoperability (ví dụ SS 713 của Singapore).
4.3 Điều phối đội robot (fleet dispatch)
Khi một khách sạn có nhiều robot, cần một “bộ não trung tâm” trên cloud để chia đơn, tối ưu lộ trình, tránh việc hai robot tranh nhau một thang máy hay tắc nghẽn ở hành lang. Đây chính là bài toán điều phối (dispatching & routing) — điểm giao thoa trực tiếp với công việc của team Truck OD.
* Gán đơn cho robot phù hợp nhất (gần điểm lấy đồ, còn pin, đang rảnh).
* Tối ưu thứ tự & lộ trình nhiều điểm giao.
* Quản lý hàng đợi thang máy giữa nhiều robot.
* Giám sát pin, tự điều robot về trạm sạc khi cần.
4.4 Tương tác với khách & xác thực
* Thông báo: gọi trực tiếp vào điện thoại phòng, hoặc SMS/thông báo app; robot phát loa và hiển thị hướng dẫn trên màn hình cảm ứng.
* Xác thực: khách nhập mã PIN/OTP hoặc chạm nút trên màn hình để mở khoang — bảo đảm đúng người, đúng phòng nhận đồ.
* Khoang chứa: kín, có thể có nhiều ngăn, một số dòng giữ nhiệt/ổn định để đồ ăn không đổ; đóng/mở bằng động cơ.
* Nhật ký giao: mỗi lần giao đều ghi log (thời gian, phòng, trạng thái) để đối soát và xử lý khiếu nại.
________________


5. Hệ thống hạ tầng khách sạn cần có
Để một con robot “bấm bấm lên tầng, tới đúng phòng” hoạt động trơn tru, bản thân khách sạn phải có một nền hạ tầng nhất định. Đây là checklist thực tế:
Hạng mục hạ tầng
	Vai trò
	Bắt buộc?
	Tích hợp PMS / POS
	Chuyển đơn của khách thành task giao cho robot; gắn đúng số phòng
	Bắt buộc (hoặc quy trình nạp task thủ công)
	Thang máy có bộ điều khiển số + API
	Để robot gọi & điều khiển thang máy điện tử
	Bắt buộc nếu KS nhiều tầng
	Phủ sóng Wi-Fi / 4G ổn định toàn tòa
	Giữ liên lạc thời gian thực robot ↔ cloud ↔ thang máy
	Bắt buộc
	Bản đồ số đã gắn nhãn phòng
	Robot tra toạ độ số phòng để điều hướng
	Bắt buộc (thiết lập khi lắp đặt)
	Trạm sạc tự động
	Robot tự về sạc giữa các đơn
	Bắt buộc
	Cửa / khóa thông minh (tùy chọn)
	Cho robot qua cửa an ninh, khu vực hạn chế
	Tùy chọn
	Hành lang đủ rộng, sàn phẳng, ngưỡng cửa thấp
	Đảm bảo robot di chuyển an toàn
	Nên có
	Máy chủ / kết nối cloud của hãng robot
	Nền tảng điều phối, cập nhật phần mềm, giám sát
	Bắt buộc


Insight triển khai: Rào cản lớn nhất khi nhân rộng thường KHÔNG phải con robot, mà là tích hợp với thang máy và PMS cũ. Khách sạn mới xây dễ tích hợp; khách sạn cũ có thể phải nâng cấp bộ điều khiển thang hoặc dùng module retrofit.
6. Các hãng & sản phẩm tiêu biểu
Hãng
	Gốc
	Điểm nổi bật
	Pudu Robotics
	Thâm Quyến, TQ
	Dẫn đầu mảng nhà hàng & khách sạn (HolaBot, FlashBot Max). Đã tích hợp thang máy với Otis/Nippon Otis. Đang phát triển khách sạn vận hành hoàn toàn bằng robot
	Keenon Robotics
	Thượng Hải, TQ
	Dải sản phẩm rộng; đã đưa cả robot hình người (humanoid) vào phối hợp với robot chuyên dụng trong khách sạn
	YOGO Robot
	Thượng Hải, TQ
	Mạnh về tích hợp thang máy và điều phối nhiều robot trong tòa nhà
	Otis (đối tác thang máy)
	Mỹ
	Cung cấp nền tảng Integrated Dispatch để robot của bên thứ ba điều khiển thang máy qua API cloud
	________________


7. Thị trường: quy mô, tăng trưởng & mặt trái
7.1 Quy mô & tăng trưởng
Chỉ số
	Giá trị
	Quy mô thị trường robot khách sạn (2025)
	~0,7 tỷ USD
	Dự báo (2030)
	~2,13 tỷ USD
	CAGR 2026–2030
	~24%
	Khu vực dẫn đầu (2025)
	Bắc Mỹ
	Khu vực tăng nhanh nhất
	Châu Á – Thái Bình Dương (APAC)


Lưu ý: con số quy mô toàn cầu; các báo cáo hiếm khi tách riêng số liệu Trung Quốc. Về số lượng tuyệt đối, đã có hàng chục nghìn robot dịch vụ loại này vận hành ở TQ.
7.2 Xu hướng nổi bật
* Khách sạn không người phục vụ: một số dự án hướng tới khách sạn vận hành gần như hoàn toàn bằng robot (mốc dự kiến khoảng 2027).
* Robot hình người (humanoid): bắt đầu được thử nghiệm phối hợp với robot chuyên dụng.
* Chuẩn hóa tích hợp thang máy: các chuẩn interoperability giúp việc lắp đặt dễ và rẻ hơn.
7.3 Mặt trái cần lưu ý
Để bài trình bày cân bằng & đáng tin: Thị trường đang cạnh tranh giá rất khốc liệt; nhiều hãng robot khách sạn vẫn lỗ, đã phải giảm giá mạnh để giành thị phần. Đây là ngành tăng trưởng nhanh nhưng chưa bão hòa và đang trong giai đoạn thanh lọc — chớ vẽ bức tranh toàn màu hồng.
8. Lợi ích & Hạn chế
Lợi ích
	Hạn chế / Rủi ro
	Hoạt động 24/7, không nghỉ, không tip
	Chi phí đầu tư & tích hợp ban đầu cao
	Giảm phụ thuộc nhân lực ca đêm/việc lặp lại
	Phụ thuộc hạ tầng KS (thang máy API, WiFi, PMS)
	Dịch vụ không tiếp xúc, điểm cộng trải nghiệm
	Xử lý tình huống bất thường còn kém con người
	Nhật ký giao minh bạch, dễ đối soát
	Rào cản với KS cũ, thang máy không hỗ trợ API
	Chuẩn hóa quy trình, dữ liệu đo lường được
	Chấp nhận của một số nhóm khách còn dè dặt
	________________


9. Liên hệ với Ahamove Truck On-Demand
Điều khiến chủ đề này đáng chú ý với team không nằm ở con robot, mà ở bài toán lõi mà nó giải — trùng khớp đáng kể với bài toán giao vận của mình.
Chủ đề ở khách sạn
	Song song ở Truck OD
	Fleet dispatch: chia đơn cho nhiều robot, tối ưu lộ trình, quản lý hàng đợi thang máy
	Điều phối tài xế, gán đơn, tối ưu routing, xử lý điểm nghẽn
	Last-mile tự động: giao tận cửa, tự về sạc
	Tương lai chặng cuối: tự động hóa, giảm phụ thuộc con người
	Tích hợp hệ thống: PMS/POS → task → robot → log
	Tích hợp đặt đơn → dispatch → giao → dữ liệu vận hành
	Chuẩn hóa & đo lường mọi bước
	Nền tảng cho automation & reporting — thế mạnh sẵn có của team


Câu chốt: Robot khách sạn giải cùng một lớp bài toán mà Truck OD đang giải — điều phối và tối ưu chặng cuối — chỉ khác là trong nhà và theo chiều dọc. Nghiên cứu nó là cách rẻ nhất để hình dung tương lai tự động hóa của chính mình.
10. Kết luận
4. Robot giao phòng đã thành “tiêu chuẩn ngầm” ở khách sạn đô thị Trung Quốc — bản chất là last-mile logistics trong tòa nhà.
5. Nó thắng nhờ đúng thời điểm (thiếu nhân lực + COVID + phần cứng rẻ) và đúng công nghệ (SLAM + IoT thang máy + fleet dispatch).
6. Robot không nhận diện món ăn; nó định vị bản thân và điều hướng tới toạ độ số phòng đã gắn nhãn trên bản đồ, đồng thời điều khiển thang máy bằng tín hiệu điện tử.
7. Rào cản nhân rộng nằm ở tích hợp hạ tầng (thang máy API, PMS, WiFi), không phải ở bản thân robot.
8. Bài toán lõi — điều phối & tối ưu chặng cuối — chính là bài toán của Truck OD.
Nguồn tham khảo
* Pudu Robotics — Hospitality Solutions & FlashBot Max (pudurobotics.com)
* Otis — Integrated Dispatch: Connecting Elevators and Robots (otis.com); The Robot Report — Otis shares secrets to controlling elevators for robots
* Reeman Robotics — How Robots Ride Elevators in Smart Buildings
* Todorobotics — How Robotic Room Service Is Redefining Hotel Operations
* Keenon Robotics — Humanoid Robot Joins Hotel Workforce (PR Newswire)
* The Business Research Company — Hospitality Robots Global Market Report (market size & CAGR)
* 36Kr — Hotel Robots Running at a Loss After Burning Through Billions
* Global Times — Robot services become a common sight; EHL Hospitality Insights — Hotel Robots
* MathWorks / Ouster — Introduction to SLAM (khái niệm định vị & lập bản đồ)


Lưu ý: các số liệu thị trường mang tính ước lượng theo báo cáo ngành và có thể chênh lệch giữa các nguồn; nên ghi rõ nguồn + năm khi trích dẫn.
