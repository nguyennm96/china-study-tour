# Drone tại Talent Park — 2 stage trong website

Bố cục chốt ngày 21/09/2026: hướng cuộn phim, tập trung web desktop. [Mở modal](http://127.0.0.1:4173/#subjects/drone/0).

## Stage 1 — Trải nghiệm: bốn bước trên cùng một màn hình

1. **Đặt qua Meituan.** Ghi chép của đoàn mô tả đặt KFC qua mini-program trên WeChat. Chưa có screenshot ứng dụng trong các tư liệu đính kèm được chỉ rõ, nên dùng hình minh hoạ AI có nhãn “Minh hoạ”.
2. **Tới trạm.** Ảnh thật của trạm nhận tại Talent Park.
3. **Drone hạ cánh.** Bấm Play để phát clip thật ngay trong khung. Video giữ nguyên tỷ lệ, có nút dừng, xem lại và toàn màn hình; không đổi stage khi phát.
4. **Lấy hàng.** Ảnh thật của người lấy hộp từ khoang tủ. Theo ghi chép, khách nhập mã để nhận và trả vỏ hộp ở khu thu hồi; ảnh cho thấy hướng dẫn NFC nhưng không chứng minh đoàn dùng NFC.

**Lời dẫn:** “Mình đặt món qua Meituan trên WeChat, tới trạm trong công viên. Đây là khoảnh khắc drone mang hộp hàng tới nóc tủ. Cuối cùng khách nhận món tại khoang tủ và trả lại vỏ hộp.”

Bấm **Next** để sang stage 2. Footer chỉ giữ các nút điều hướng và số stage; cụm tư liệu cùng menu chọn phần đã được bỏ. Không có slide chi tiết riêng theo từng bước, không có slide tracking hay bài học sau trải nghiệm.

## Stage 2 — Quy trình 3D

Giữ mô phỏng nguyên lý hiện có: người chuẩn bị và đưa hàng tới bãi → drone nhận kiện và vận chuyển → bàn giao xuống tủ → khách nhận. Khi vào stage 2, mô phỏng tự chạy liên tục khoảng 32 giây qua toàn bộ 13 hành động (tốc độ 1,5×), không yêu cầu click qua từng bước. Camera, kiện hàng và bước chân nội suy liên tục. Popup chỉ hiện tiêu đề hành động. Kết thúc lượt thì giữ ở cảnh nhận hàng.

Nhãn “Mô phỏng nguyên lý · Không tái tạo tuyến Talent Park” luôn hiện. Hình học, cơ cấu và chuyển động là minh hoạ, không phải thông số kỹ thuật xác minh của trạm trong video.

Hình thức tủ dùng vỏ trắng, mặt vàng và hai khoang tối màu tham khảo từ ảnh của đoàn; màn hình, cửa, chân đế và nóc được dựng riêng để dễ nhìn khi trình chiếu. Cơ cấu khay nâng và cửa trượt vẫn là minh hoạ. Nhân vật dùng bước chân theo quãng đường, giữ chân trụ trên mái và giữ tay ổn định khi mang hộp. Sau khi giao hộp, nhân vật quay người 180° tại chỗ rồi bước tới phía ngoài bãi; drone chờ người đi ra xa mới cất cánh.

**Lời dẫn:** “Mô hình này tách rõ các lần bàn giao, giúp hình dung ai hoặc thiết bị nào đang giữ hàng. Mình xem nguyên lý phối hợp, không coi đây là bản tái tạo chiếc trạm vừa quay.”

- **Tạm dừng / Tiếp tục** giữ và nối chuyển động ngay vị trí hiện tại. **Chạy lại** bắt đầu lượt mới. Khi tab bị ẩn, đồng hồ dừng để tránh bỏ lỡ các cảnh.
- Mũi tên trái quay lại stage trải nghiệm. `Home` về stage 1; `End` tới stage 2; `Esc` đóng về map.
- **Điểm tiếp theo** chuyển sang subject kế tiếp bất cứ lúc nào.
- Các URL drone cũ `/2`, `/3` được giới hạn về stage 3D `/1` thay vì mở slide đã bỏ.

## Nguồn và giới hạn

[Outline Sharing](https://docs.google.com/spreadsheets/d/1kU_8BZwFz49gIsoyGRuZT7ivJnuTg7NM_SwKiKhi7CE/edit?gid=1775856938#gid=1775856938), B9, E9(b), F9. Chi tiết file, liên kết Drive và checksum nằm trong `public/media/trip/drone/SOURCES.md`.

- Ba tư liệu thật dùng trên stage 1: station.jpg, landing.mp4, locker.jpg.
- meituan-order.png là minh hoạ AI; không giả làm giao diện Meituan chính thức hoặc ảnh do đoàn chụp.
- Thời lượng clip không phải thời gian giao đơn. Không dùng các mốc 4 phút/60 phút đang chưa thống nhất trong sheet.
- Tư liệu rider vẫn lưu trong thư viện nguồn; không còn được chiếu trong modal drone hai stage.
