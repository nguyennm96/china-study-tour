# Minh hoạ chủ đề 2D

Bộ hình PNG nền trong suốt được tạo bằng công cụ Imagegen tích hợp ngày 22/09/2026 theo yêu cầu minh hoạ 2D của người dùng. Đây là hình minh hoạ, không phải ảnh của đoàn, thiết bị chính xác của nhà sản xuất hay ảnh màn hình Meituan.

- `drone.png`: drone giao một hộp đồ ăn.
- `robot.png`: phương án robot ngoài đường ban đầu, không còn dùng trong deck.
- `hotel-robot.png`: robot giao phòng và thang máy; thay hình robot ngoài đường sau khi người dùng cung cấp tài liệu khách sạn.
- `order.png`: điện thoại, túi đồ ăn và hộp mang đi.

Các hình được dùng trong slide nhóm, mở chương, số liệu, biểu đồ và phần mang về. Ảnh/video tư liệu gốc vẫn được giữ riêng và giữ chú thích.

Prompt đầy đủ: [generation.json](./generation.json). Bản gốc do Imagegen xuất được sao chép nguyên bytes; giữ alpha.

Theo yêu cầu người dùng, không hiển thị nhãn “Minh hoạ”; mô tả alt và nguồn vẫn giữ.

## Bổ sung cho 5 chủ đề · 23/09/2026

- `iote.png`: gian triển lãm IoT, chip và cảm biến kết nối; thay hình xe robot ở mục IOTE.
- `tips-tricks.png`: điện thoại thanh toán, bản đồ và thẻ hành lý; thay hình đặt đồ ăn ở mục Tips & Tricks.

Hai hình được tạo bằng Imagegen tích hợp, sao chép nguyên bản PNG với alpha vào dự án. Đây là minh hoạ AI, không phải ảnh triển lãm hay giao diện ứng dụng thực tế. Prompt đầy đủ: [agenda-generation.json](./agenda-generation.json).

- `didi.png`: xe đặt qua ứng dụng cùng điện thoại hiển thị lộ trình, tạo bằng công cụ Imagegen tích hợp ngày 22/09/2026; dùng drone.png làm tham chiếu nét vẽ, giữ PNG alpha. Dùng cho cặp 03 trong slide thành viên. Đây là minh hoạ, không phải xe hoặc giao diện DiDi thực tế. Prompt: `didi-generation.txt`.
