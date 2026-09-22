# Mở đầu SGN → SZX

Đoạn mở đầu khoảng 13 giây, tự chạy mỗi lần tải trang. Người trình bày có thể tạm dừng/tiếp tục hoặc bỏ qua (Esc). Sau khi đến Shenzhen, lớp mở đầu mờ đi trong 850 ms và bản đồ sáu điểm xuất hiện. Các nút này chỉ nằm trong đoạn mở đầu.

Máy bay hiện dùng `public/models/ahamove-a320-v3.glb`: airframe A320 từ FlightAirMap/FlightGear, chỉnh trong Blender. Logo được nhập trực tiếp từ SVG chính thức của Ahamove, giữ nguyên đường nét và tỷ lệ; không dùng chữ gõ lại hay ảnh AI làm logo. Hai mặt thân mang logo đủ màu, đuôi dùng bản đơn sắc trắng của cùng đường nét. Vật liệu cam #FF7F32, navy #0D4073 được đổi đúng từ sRGB sang linear khi xuất PBR. Camera perspective, phản xạ môi trường và tone mapping Neutral tạo độ nổi. Nguồn, giấy phép và source chỉnh sửa nằm trong [A320-V3-CREDITS.md](../public/models/A320-V3-CREDITS.md). File chỉnh tiếp: `assets/models/ahamove-a320-v3.blend`; script dựng: `scripts/build-ahamove-a320.py`. Các PNG và model v1/v2 giữ lại làm thử nghiệm cũ, không được render trong intro.

Máy bay xuất hiện nhỏ ngay tại SGN, theo đúng tọa độ bản đồ ở khung hình đầu tiên; không có cảnh phóng lớn giữa màn hình hoặc di chuyển từ vị trí giả về điểm xuất phát. Máy bay giữ nguyên kích thước từ lúc xuất phát đến lúc tới nơi, tối đa 196 CSS px và co theo viewport; kích thước này lớn hơn khoảng 23% so với cảnh xuất phát trước đó; lắc quanh trục thân khoảng ±9° theo chu kỳ 2,6 giây, kèm chuyển góc nhỏ ở hai trục còn lại để lộ khối cánh và động cơ. Nhịp lắc vào từ từ trong 0,8 giây, dừng khi tạm dừng và tắt khi bật giảm chuyển động. Hướng bay chính vẫn theo tiếp tuyến đường bay; vị trí và kích thước không rung hoặc phóng to/thu nhỏ. Sau 0,65 giây giới thiệu, hành trình kéo dài 10 giây với easing bậc năm: tăng tốc và giảm tốc liên tục, vận tốc/gia tốc bằng không ở hai đầu. Bản đồ giữ nguyên khung nhìn trong lúc bay để nhìn rõ SGN → SZX; sau khi tới nơi, camera tiến nhẹ vào Shenzhen trong hai giây rồi chuyển sang bản đồ sáu điểm.

Vệt bay cập nhật tối đa 30 lần mỗi giây với đầu vệt trùng vị trí hiện tại, thay vì nhảy theo từng 1% hành trình. Shader được biên dịch trước khi bắt đầu; không dùng blur/drop-shadow trên canvas. Tạm dừng và tab ẩn dừng tiến độ; resize lúc tạm dừng vẫn căn đúng máy bay với bản đồ. Zoom mở đầu được tính theo viewport. Hai nhãn sân bay luôn hiện cạnh ghim thật.

Bản đồ mở đầu sử dụng dữ liệu thật OpenFreeMap/OpenStreetMap. Style được giảm nhãn, đường phụ và đổi màu để dễ nhìn hành trình. Bản đồ sáu điểm phía sau giữ nguyên cách tương tác trực tiếp bằng ghim, không có đường nối các điểm.

Hai đầu hành trình là tọa độ sân bay từ OurAirports, đối chiếu 16/09/2026:

- Tân Sơn Nhất (SGN): 10.818800, 106.652000. https://ourairports.com/airports/VVTS/
- Shenzhen Bao'an (SZX): 22.639474, 113.803262. https://ourairports.com/airports/ZGSZ/

Đường bay nội suy theo cung tròn lớn giữa hai sân bay; đây là minh họa hành trình, không phải đường bay khai thác hay dữ liệu ADS-B. Không dùng thời gian bay thực hoặc số chuyến bay giả. Toàn bộ nhãn giao diện dùng Lexend.

Không tự phát âm thanh. Giảm chuyển động theo cài đặt hệ điều hành: không bay hoặc di chuyển camera, chỉ hiện hình minh họa tĩnh ngắn trước khi vào bản đồ. Bỏ qua vẫn hoạt động khi ảnh hoặc bản đồ gặp lỗi tải. Renderer, geometry, material, texture, animation frame và MapLibre được giải phóng khi đóng mở đầu.

## Độ nét và kiểm tra

Canvas máy bay render theo mật độ pixel thật của màn hình (tối đa 3× và 12 triệu pixel để tránh cấp phát quá lớn). Mỗi lần resize đều tính lại. Đã bỏ giới hạn cũ 1,75×. Lớp gradient màu chỉ phủ bản đồ; máy bay ở trên lớp này, chữ và điều khiển ở trên máy bay. Không có blur hoặc depth-of-field trên canvas máy bay. Máy bay giữ độ nét Retina khi hiển thị nhỏ trên hành trình.

Đã kiểm tra trên browser Retina 2×: vùng CSS 776 × 778 có buffer 1552 × 1556. Hai kiểm tra Node xác nhận kích thước ba chiều của A320, hướng mũi +X, asset tự chứa dưới 4 MiB và đúng màu PBR cam/navy. Build TypeScript/Vite thành công. Đây không phải phép đo FPS hay xác nhận photorealism.

### Khắc phục nhiễu lớp sơn khi thu nhỏ

Ảnh phản hồi cho thấy mảng cam bị lốm đốm trắng và logo bị mất từng nét. Nguyên nhân là camera trước đây dùng near=1/far=10000 trong khi máy bay ở cách camera khoảng 1300–1900 scene units: depth buffer không đủ chính xác để phân biệt lớp logo/sơn cách thân 12–15 mm sau khi thu nhỏ. Camera hiện giới hạn near/far quanh độ sâu thực của máy bay và cập nhật lại khi resize; giữ nguyên SVG, màu, độ phân giải Retina và model người dùng đã chấp nhận.

`tests/aircraft-depth.test.mjs` kiểm tra lớp sơn cách thân ít nhất 16 bước depth 24-bit ở bốn cỡ màn hình, kể cả 4K; đồng thời bảo đảm máy bay không bị cắt bởi camera. Bộ kiểm tra model, màu và chiều sâu gồm ba test đều pass. Đã quan sát bản sửa ở SGN: sơn đuôi liền mạch, không còn các đốm trắng thấy trong ảnh phản hồi.
