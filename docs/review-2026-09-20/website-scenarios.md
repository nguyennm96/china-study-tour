# Review và 3 kịch bản website present study tour

Ngày review: 20/09/2026. Tài liệu này ghi lại review và ba phương án trước khi triển khai. Bản mẫu hiện đã được dựng theo yêu cầu mới nhất: **Team → Subjects trên live map → Key takeaways**, light mode, có dữ liệu mẫu. Xem [biên bản triển khai](./implementation.md). Các ảnh review cũ ghi lại phiên bản trước khi đổi theme. Không dùng Ponytail cho thiết kế UI/UX.

**Cấu trúc đã chốt theo yêu cầu mới: Team → Subjects → Key takeaways.** Ba kịch bản bên dưới là ba cách thể hiện cùng cấu trúc này. Đề xuất chọn Shenzhen Live để phù hợp việc chia nội dung cho nhiều người và điều khiển trình bày trực tiếp.

## Cấu trúc chung của website

| Phần | Nội dung cần có | Cách thể hiện đề xuất |
|---|---|---|
| 01 · Team | Các thành viên tham gia; ảnh, tên, vai trò và subject phụ trách khi đã phân công. Một câu ngắn về góc nhìn hoặc điều mỗi người quan tâm. | Mở bằng ảnh nhóm, sau đó giới thiệu từng người; thành viên đang được nói tới được làm nổi bật. |
| 02 · Subjects | Mục lục các chủ đề, rồi trải nghiệm/tính năng và demo của từng chủ đề. | Chọn subject để mở chương; ảnh/video lớn, thao tác người dùng theo từng bước, có tên người trình bày. |
| 03 · Key takeaways | 3–5 điều cả nhóm muốn người nghe nhớ sau chuyến đi, mỗi điều gắn với ví dụ đã trình bày. | Hiện từng takeaway khi nói; kết bằng một màn tổng hợp có thể chụp lại. Ý tưởng áp dụng hoặc thử tiếp được ghi rõ nếu có. |

Điều hướng cấp cao luôn có đúng ba mục **Team / Subjects / Key takeaways**. Danh sách Drone, Giao hàng, Di chuyển… nằm bên trong Subjects. Mặc định present theo thứ tự ba phần; vẫn có thể nhảy tới phần hoặc subject cần nói. Intro chuyến bay, nếu giữ, là đoạn mở của Team. Bản đồ chủ yếu phục vụ phần Subjects.

Nhịp gợi ý cho bài 25–30 phút: Team 3–4 phút → Subjects 18–21 phút → Key takeaways 4–5 phút. Không tự gán tên, vai trò hay nhận xét cho thành viên khi chưa có thông tin.

Key takeaways là phần bắt buộc theo yêu cầu mới; không yêu cầu mỗi subject phải có một bài học riêng. Mỗi takeaway đi theo khung: **điều nhóm nhận thấy → ví dụ trong chuyến đi → ý nghĩa hoặc điều muốn thử tiếp nếu có**. Nội dung phải được nhóm xác nhận, không lấy kết luận kỹ thuật cũ làm suy nghĩ của đoàn.

## Cơ sở review

Đã đọc trực tiếp [Guideline làm slide sharing Shenzhen theo subject](https://docs.google.com/document/d/16RUOzwRTQ0vN7Wj5iPE4RTR933HX5e62ucqy70Ahx4A/edit) trong lượt này, đối chiếu tài liệu và mã nguồn hiện tại, mở ứng dụng local để xem bản đồ → chương drone → mô phỏng → trở lại bản đồ.

Guideline hiện chia tám nhóm subject. Ba subject ưu tiên là **drone tại Talent Park, quy trình giao hàng Meituan, Didi/Amap**. Phần mở rộng gồm gọi món/thanh toán, robot dịch vụ, giao diện tương tác, phần cứng và logistics tại Expo. Guideline cung cấp nội dung cho phần Subjects; cấu trúc toàn website áp dụng yêu cầu mới Team → Subjects → Key takeaways. Liên hệ Ahamove vẫn chỉ đưa vào khi có ý cụ thể.

Giả định cho ba phương án: trình bày nội bộ khoảng 20–30 phút, nhiều người phụ trách các subject, dùng laptop/máy chiếu; website có thể được mở lại sau buổi sharing. Thời lượng là gợi ý biên tập, chưa phải lịch đã chốt.

## Review bản mẫu hiện tại

### 1. Chọn điểm trên bản đồ — hoạt động, cần đổi cách tổ chức nội dung

![Bản đồ desktop hiện tại](/Users/daniel_nguyen/Documents/ChatGPT/china-study-tour/docs/review-2026-09-20/02-map-desktop.png)

- Điểm mạnh: màu cam/navy nhất quán; có cảm giác đang khám phá một thành phố; các điểm mở được chương nội dung.
- Vấn đề chính: người xem phải biết địa điểm để tìm subject. Sáu điểm hiện tại gồm cả ánh sáng đô thị, show control và kiến trúc, khác trọng tâm mới trong guideline.
- Khi present: cần nhìn thấy mục lục subject và đường đi tiếp. Bản đồ nên hỗ trợ định vị câu chuyện; người trình bày cần quyền nhảy thẳng tới phần đang nói.
- Chữ nhãn và chú thích tương đối nhỏ so với tiêu đề. Đây là rủi ro khi chiếu xa; chưa thử trên máy chiếu thực.

### 2. Mở chương drone — hình ảnh tốt, nội dung cần chuyển trọng tâm

![Chương drone hiện tại](/Users/daniel_nguyen/Documents/ChatGPT/china-study-tour/docs/review-2026-09-20/03-drone-case.png)

- Điểm mạnh: ảnh lớn, tiêu đề nổi, có ghi nguồn và nút Previous/Next rõ.
- Chương hiện mở ở **Bay Park**, nhấn radar, cự ly Gen 4 và các lớp dự phòng. Guideline mới kể trải nghiệm **đặt và nhận hàng tại Talent Park**. Cần thay đúng case và tư liệu trước khi dựng bản present chính thức.
- Nên mở bằng “người dùng đặt gì, theo dõi ra sao, nhận ở đâu”; chi tiết thiết bị có thể mở thêm nếu phục vụ câu chuyện.
- Có chú thích phân biệt nguồn dịch vụ và thông số sản phẩm, nhưng chữ nhỏ dễ bị bỏ qua khi trình chiếu. Các ví dụ khác địa điểm/phiên bản nên được tách rõ ngay trong câu chuyện.

### 3. Mở mô phỏng và đi từng bước — có điểm nhấn, cần rút gọn nhịp kể

![Mô phỏng giao hàng hiện tại](/Users/daniel_nguyen/Documents/ChatGPT/china-study-tour/docs/review-2026-09-20/04-drone-simulation.png)

- Mô phỏng tải được; đã dùng phím mũi tên phải để chuyển từ tổng quan sang bước nhân viên mang hàng. Nút về bản đồ hoạt động và focus trở lại ghim đã mở.
- Đây là tài sản có thể giữ lại để giải thích bàn giao người → drone → tủ → khách.
- Tài liệu/mã nguồn mô tả 13 trạng thái. Với sharing ngắn, đề xuất gom thành 4–5 chặng hoặc đặt dưới nút “Xem quy trình”; tránh để một demo chiếm phần lớn thời lượng.
- Cần có chỉ báo đang ở bước nào và đường bỏ qua demo. Trong ảnh hiện tại, nhịp tiến độ chủ yếu được thể hiện qua nội dung và hai mũi tên.

Giới hạn review: đây là kiểm tra luồng đại diện, không phải QA toàn bộ sáu chương, 13 trạng thái, video, mobile hay accessibility. Đã quan sát bản đồ ở khung hẹp và desktop; chưa kiểm tra tương phản bằng công cụ, screen reader, hiệu năng thiết bị yếu hoặc mạng offline. Màn intro đã tự kết thúc trước lúc chụp nên không dùng làm bằng chứng đánh giá hình ảnh.

## Kịch bản 1 — Tech Passport: mở từng trải nghiệm trên bản đồ

**Ý tưởng:** người nghe cùng mở một cuốn hộ chiếu công nghệ. Mỗi dấu mốc là một subject; địa điểm cho biết trải nghiệm đó xuất hiện ở đâu.

**Màn hình:** Team là trang hộ chiếu với ảnh nhóm và hồ sơ từng thành viên. Sang Subjects, bản đồ Shenzhen làm nền, một dải subject luôn hiện bên cạnh: Drone / Giao hàng / Di chuyển / Khám phá thêm. Chọn subject làm sáng các địa điểm liên quan. Key takeaways là trang tổng kết cuốn hộ chiếu, mỗi điều gắn với ảnh hoặc dấu subject làm ví dụ. Không ép mỗi subject tương ứng đúng một địa điểm và không tự vẽ tuyến đường nếu chưa xác nhận.

**Kịch bản trình bày khoảng 25 phút:**

1. **Team:** mở bằng ảnh đoàn và tên chuyến đi, giới thiệu ảnh/tên/vai trò/góc nhìn của từng thành viên; sau đó mở bản đồ của phần Subjects.
2. Chọn **Drone** → bản đồ tới Talent Park → mở ảnh trạm → lần lượt đặt món, theo dõi đơn, xem clip hạ cánh, lấy hàng và trả hộp.
3. Đóng chương → một dấu hoàn thành xuất hiện ở subject → chọn **Giao hàng** → xem app/rider, rồi mở video robot trong khách sạn. Các ví dụ được ghi rõ là trải nghiệm riêng.
4. Chọn **Di chuyển** → mở ảnh màn hình Didi và Amap theo từng thao tác. Địa điểm làm bối cảnh cho chuyến đi đã xác nhận.
5. Chọn một nhánh mở rộng có media tốt, chẳng hạn một demo quét hàng tại Expo.
6. **Key takeaways:** gom các dấu subject thành trang tổng kết; lần lượt hiện 3–5 điều nhóm rút ra, mỗi điều có ảnh hoặc ví dụ đã kể, rồi hiện toàn bộ để kết bài.

**Tương tác tạo điểm nhấn:** nhảy từ bản đồ vào ảnh/video toàn màn hình; đánh dấu phần đã xem; quay lại đúng vị trí cũ. Có nút “Phần tiếp theo” để người trình bày không phải tìm ghim mỗi lần.

**Cần triển khai:** giữ MapPanel, đổi cấu trúc từ địa điểm sang subject, bổ sung menu chủ đề và thứ tự present; thay nội dung và tư liệu theo guideline. Bản đồ nhỏ hoặc danh sách địa điểm dự phòng khi mất kết nối.

**Đánh đổi:** tái sử dụng bản mẫu nhiều nhất, có dấu ấn chuyến đi. Nhưng các subject trải rộng nhiều nơi có thể làm người nghe mất mạch nếu liên tục quay lại map; tên chủ đề cần luôn rõ hơn mã A1–F6.

**Chọn khi:** muốn website có cảm giác khám phá và để người xem tự mở lại sau buổi sharing.

## Kịch bản 2 — Shenzhen Live: sân khấu trình chiếu theo subject

**Ý tưởng:** một chương trình sharing có từng tiết mục. Mỗi người phụ trách một subject và điều khiển cảnh khi nói.

**Màn hình:** Team mở bằng ảnh nhóm rồi giới thiệu từng thành viên bằng ảnh chân dung, tên, vai trò và subject phụ trách. Subjects có các ảnh chủ đề lớn để chọn chương. Khi vào chương, ảnh/video chiếm phần lớn khung hình; thanh chương nhỏ nằm dưới. Chú thích xuất hiện cạnh chi tiết đang nói. Key takeaways hiển thị từng kết luận lớn kèm ví dụ, sau đó gom lại thành một màn tổng hợp. Bản đồ là một cảnh định vị ngắn trong Subjects.

**Kịch bản trình bày khoảng 25–30 phút:**

1. **Team, 3–4 phút:** ảnh nhóm → giới thiệu từng người → vai trò và subject phụ trách → chuyển sang mục lục Subjects.
2. **Drone, 6 phút:** bắt đầu bằng khoảnh khắc lấy được món ở trạm; quay lại thao tác đặt; hiện tracking; mở video hạ cánh; kết bằng lấy hàng/trả hộp. Mô phỏng quy trình là nhánh mở thêm khi cần giải thích.
3. **Giao hàng Meituan, 5 phút:** từ màn hình app tới rider ngoài đường và robot khách sạn. Người nói bật từng đoạn video, dừng đúng khoảnh khắc giao nhận và phóng to chi tiết.
4. **Didi/Amap, 5 phút:** dẫn qua một lần chọn điểm đón/điểm đến, theo dõi xe hoặc xem tuyến metro; đánh dấu 2–3 chi tiết nhóm đã trực tiếp dùng.
5. **Khám phá thêm, 2–5 phút:** chọn một hoặc hai demo mạnh nhất từ thanh toán, robot dịch vụ hoặc Expo.
6. **Key takeaways, 4–5 phút:** lần lượt hiện 3–5 điều nhóm muốn người nghe nhớ, nối lại với các subject vừa trình bày. Kết bằng một màn tổng hợp; có thể mở thảo luận từ đây.

**Ví dụ một cảnh drone:** ảnh tủ bên trái, bên phải có ba nhãn “Xác nhận đơn / Lấy hàng / Trả hộp”. Mỗi lần Next chỉ làm nổi một thao tác. Nếu chưa xác nhận là mã hay NFC, giữ nhãn “Xác nhận đơn”. Tư liệu được chọn sau khi xem file thực tế.

**Tương tác tạo điểm nhấn:** chapter picker, phóng chi tiết trên ảnh, video có mốc đoạn, demo tiến từng bước, quay lại mục lục để nhường người nói tiếp theo. Có chế độ xem lại theo cùng thứ tự.

**Cần triển khai:** bổ sung ba phần Team / Subjects / Key takeaways và điều hướng giữa chúng; tái sử dụng renderer trình chiếu, phần media và nút điều khiển; thêm bước/tiến độ nhìn thấy được và khả năng mở trực tiếp từng chương. Mỗi subject có cấu trúc nội dung chung: một câu giới thiệu → trải nghiệm → 2–3 chi tiết → demo.

**Đánh đổi:** thuận tiện nhất cho present live và chia việc; khối lượng tương đối thấp đến vừa nếu media đã đủ. Chất lượng phụ thuộc việc chọn đúng ảnh/đoạn video và tiết chế chữ.

**Chọn khi:** mục tiêu chính là một buổi sharing nội bộ có nhiều người trình bày. Đây là phương án đề xuất.

## Kịch bản 3 — Một ngày chạm công nghệ: câu chuyện theo nhu cầu

**Ý tưởng:** dẫn người nghe qua các nhu cầu quen thuộc — đi lại, gọi món, nhận hàng, về khách sạn — để giới thiệu công nghệ thông qua hành động.

**Màn hình:** một trang kể chuyện bằng cảnh lớn. Team là phần mở đầu giới thiệu những người đồng hành. Trong Subjects, thanh tiến trình dùng “Di chuyển / Gọi món / Nhận hàng / Khách sạn / Khám phá thêm”. Key takeaways là chương kết nhìn lại trải nghiệm của cả nhóm. Khi present dùng Next/Previous để chuyển cảnh; khi xem lại có thể cuộn. Màu sắc và ảnh thay theo bối cảnh, mỗi cảnh giữ tên subject để người phụ trách nhận ra phần của mình.

**Kịch bản trình bày khoảng 25–30 phút:**

Mở **Team** trong 3–4 phút: ảnh nhóm và từng thành viên, một góc nhìn mỗi người; sau đó bước vào phần Subjects theo các cảnh dưới đây.

1. **Ra ngoài:** “Muốn tới công viên thì tìm đường và gọi xe thế nào?” → mở các thao tác Didi/Amap của một hành trình đã chọn.
2. **Muốn gọi món:** cho xem một trải nghiệm Alipay Tap hoặc Luckin, tùy tư liệu. Nêu rõ đây là ví dụ riêng.
3. **Nhận đồ ăn ở công viên:** vào subject drone tại Talent Park — đặt, theo dõi, hạ cánh, lấy và trả hộp. Đây là cao trào thị giác của bài.
4. **Về khách sạn:** chuyển sang subject robot giao hàng — xem hành trình và thao tác nhận thực tế đã xác nhận.
5. **Mở rộng góc nhìn:** tách sang một chương Expo ngắn: một lần quét hàng hoặc robot di chuyển trong kho.

Kết bằng **Key takeaways** trong 4–5 phút: trở lại ảnh các thành viên cùng 3–5 điều nhóm rút ra; mỗi điều dẫn lại một khoảnh khắc trong phần Subjects. Kết luận và người phát biểu chỉ được gán sau khi nhóm xác nhận.

**Lưu ý biên tập:** “một ngày” là khung kể chuyện tổng hợp từ chuyến đi, không khẳng định mọi trải nghiệm diễn ra cùng ngày. Không nối rider, drone và robot thành một đơn giao xuyên suốt. Expo là phần mở rộng riêng, không phải hậu trường đã được xác nhận của các dịch vụ vừa kể.

**Tương tác tạo điểm nhấn:** từ ảnh bối cảnh tiến vào màn hình app, rồi chuyển sang video thiết bị phản hồi; một thanh bước luôn cho biết người xem đang ở hành động nào. Có mục lục để nhảy chương khi cần.

**Cần triển khai:** xây khung chuyển cảnh có điều khiển, biên tập chuyển đoạn, giữ renderer media dùng chung. Mỗi cảnh cần đủ ảnh/video đồng nhất bối cảnh; ưu tiên ảnh tĩnh và chuyển cảnh nhẹ ở bản đầu.

**Đánh đổi:** có khả năng tạo cảm giác liền mạch và giàu trải nghiệm nhất; cần công biên tập cao nhất. Đổi thứ tự người nói hoặc thiếu media giữa chừng dễ làm đứt mạch.

**Chọn khi:** có đủ tư liệu đẹp và muốn bài present giống một câu chuyện có mở đầu, cao trào, kết thúc.

## So sánh để chọn

| Tiêu chí | Tech Passport | Shenzhen Live | Một ngày chạm công nghệ |
|---|---|---|---|
| Trục điều hướng | Bản đồ + subject | Subject + cảnh trình chiếu | Nhu cầu + mạch kể |
| Điểm mạnh | Cảm giác chuyến đi, tự khám phá | Present live, chia người phụ trách | Câu chuyện liền mạch |
| Tái sử dụng bản hiện tại | Nhiều | Vừa đến nhiều | Chủ yếu media/demo |
| Công triển khai tương đối | Vừa | Thấp đến vừa | Cao |
| Phụ thuộc media đầy đủ | Vừa | Có thể dựng từng subject | Cao |
| Rủi ro chính | Map ngắt mạch kể | Chữ và video thiếu chọn lọc | Thiếu cảnh nối, dễ gán nhầm hành trình |

Đánh giá khối lượng chỉ mang tính so sánh, giả định không làm backend, không live voting và media đã được bàn giao. Chưa ước lượng ngày công khi chưa kiểm tra đầy đủ bộ media.

## Phạm vi bản đầu đề xuất

Chọn **Shenzhen Live** với ba phần Team → Subjects → Key takeaways. Dùng bản đồ hiện tại để định vị trải nghiệm trong Subjects khoảng 20–30 giây, và giữ demo drone dưới nhánh xem thêm. Dựng storyboard toàn bài trước; sau đó làm trọn một subject drone để kiểm tra nhịp nói rồi mới nhân rộng.

- Màn Team có ảnh/tên/vai trò và subject của thành viên; phần Subjects có mục lục riêng; màn Key takeaways có 3–5 điều đã được nhóm chốt.
- Mỗi cảnh tập trung một ý, ưu tiên ảnh/video; điều khiển bằng phím và nút, có chỉ báo bước/chương, mở trực tiếp một subject để rehearsal hoặc chia sẻ.
- Video do người nói chủ động phát; chuyển cảnh theo lệnh, có giảm chuyển động. Các nguyên tắc điều khiển bàn phím và dừng chuyển động phù hợp hướng dẫn [W3C WAI về slideshow/carousel](https://www.w3.org/WAI/tutorials/carousels/).
- Dùng media có quyền sử dụng, lưu nguồn và phân biệt ảnh đoàn / tư liệu bên ngoài / mô phỏng. Chuẩn bị ảnh dự phòng cho video và danh sách địa điểm dự phòng cho bản đồ.
- Tận dụng React/Vite, map và renderer hiện có; chưa cần hệ thống quản trị nội dung hoặc tài khoản.

Trước khi dựng, cần bộ ảnh/video drone Talent Park, robot khách sạn và màn hình Didi/Amap mà guideline nêu. Chưa tìm thấy các tên file tương ứng trong public/assets/docs của checkout này; điều đó không khẳng định chúng không tồn tại trên Drive hoặc thư mục khác. Cần xác nhận mốc thời gian đơn drone, cách mở tủ và điểm robot thực sự giao tới trước khi đưa thành lời khẳng định trên website.

**Bước tiếp theo đề xuất:** chốt storyboard toàn bài theo ba phần, với Team giới thiệu thành viên, Subjects kể các trải nghiệm chính và Key takeaways kết bằng các điều nhóm muốn người nghe nhớ. Sau đó dựng chi tiết chương drone làm mẫu.
