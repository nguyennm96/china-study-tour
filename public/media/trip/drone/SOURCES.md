# Talent Park — tư liệu đoàn Shenzhen

Đọc và tải qua Google Drive ngày 20/09/2026 để gắn vào modal drone của website nội bộ. Nguồn biên tập: [Outline_Sharing_Shenzhen_Trip](https://docs.google.com/spreadsheets/d/1kU_8BZwFz49gIsoyGRuZT7ivJnuTg7NM_SwKiKhi7CE/edit?gid=1775856938#gid=1775856938), tab **Outline Sharing**. Ngày chuyến đi 24–28/08/2026 lấy từ tiêu đề sheet, không phải ngày chụp xác minh qua EXIF.

## Media đã đọc

| Local | Tên file nguồn | Link nguồn | Căn cứ trong sheet |
| --- | --- | --- | --- |
| `landing.mp4` | Meituan-Drone_Landing_v01.mp4 | [Drive](https://drive.google.com/file/d/1__4EUDrAzgLo0apI189OE-YOLWHfS6FM/view) | F9 |
| `station.jpg` | Meituan-Drone_Station-TalentPark_01.jpg | [Drive](https://drive.google.com/file/d/1JBcPcaP6QibrUfM1igZ224EPp2ayLBv4/view) | F9 |
| `locker.jpg` | Meituan-Drone_Pickup-Locker_01.jpg | [Drive](https://drive.google.com/file/d/1jwMSVMX2B8VMO-WCv_synn86xyiMcibO/view) | F9 |
| `rider.jpg` | Meituan-Rider_Nanshan_01.jpg | [Drive](https://drive.google.com/file/d/1yF5D_xnS0Omwa5LRmwBl3IOvUL-XjdfN/view) | F23 |
| `rider-ramp.mp4` | Meituan-Rider_Ramp_v01.mp4 | [Drive](https://drive.google.com/file/d/1yyzuE-YUC3eAmn1kLEIRxICZuXQ6NGj1/view) | F23 |

Ba ảnh và hai video giữ nguyên bytes tải từ Drive. Modal hiện tại chỉ dùng ảnh station/locker và video landing; các file rider giữ làm tư liệu lưu trữ. Hai JPEG `landing-poster.jpg`, `rider-ramp-poster.jpg` là khung hình trích tại giây 2 của video tương ứng, không phải ảnh tổng hợp. Ảnh được căn khung bằng CSS quanh trạm hoặc thao tác nhận, có thể lược bớt vùng trời/nền; link Drive mở bản đầy đủ. Video luôn giữ nguyên tỷ lệ và toàn bộ khung hình (`object-fit: contain`). Video landing phát ngay trong khung khi bấm Play ở stage 1. Tư liệu rider không còn chiếu trong modal drone hai stage, nhưng giữ trong thư viện nguồn. Cả hai có điều khiển và toàn màn hình của trình duyệt. Không tự chuyển slide. Poster trong cuộn phim căn theo tỷ lệ khung để giữ drone và nút Play tách nhau; không chỉnh sửa nội dung tư liệu gốc.

`ffprobe`: cả hai clip H.264 + AAC, 464×848. Landing dài 4.333333 giây; rider dài 7.933333 giây. **Đây là thời lượng video, không phải thời gian giao hàng.**

## Ranh giới bằng chứng

- B9: đoàn đặt KFC qua mini-program WeChat; mô hình người → bãi → drone chặng giữa → tủ nhận.
- E9 phần (b): thành viên kể tracking real-time, cảm nhận ETA sát, nhập code lấy đơn và hoàn trả vỏ hộp; khó khăn thao tác tiếng Trung. Không lấy phần Luckin ở E9 để mô tả drone.
- F9: cấu hình trạm, hộp, NFC/mã. Ảnh tủ cho thấy hướng dẫn NFC; không chứng minh cả đoàn dùng NFC trong lần lấy hàng.
- F23: rider, drone và robot cùng hiện diện; dispatch theo ngữ cảnh là đề xuất của đoàn. Media rider không được trình bày như cùng đơn drone.
- F30: ý tưởng ứng dụng cho Ahamove, chưa phải kết quả pilot.
- B9 ghi ~4 phút, B23 ghi ~60 phút cho drone. Chưa rõ hai mốc đo cùng hay khác chặng; loại cả hai khỏi thông điệp định lượng trong modal đến khi được xác nhận.
- Không có ảnh app đặt món/tracking trong các file được link trực tiếp ở F9. Stage 1 ban đầu dùng minh hoạ AI cho thao tác đặt Meituan, sau đó được thay bằng video người dùng cung cấp ngày 22/09/2026 (xem cập nhật bên dưới). Các slide chi tiết đặt món/tracking đã được bỏ theo yêu cầu ngày 21/09/2026.
- Clip landing chứng minh drone tiếp cận/hạ xuống nóc trạm. Clip không cho thấy toàn bộ cơ chế chuyển kiện bên trong tủ.
- Mô phỏng 3D giữ từ website cũ, có nhãn nguyên lý; không phải tái tạo hay bằng chứng của tuyến Talent Park. Không ghép winch/Gen 4/Bay Park/Fudan thành một cấu hình.

Đã đọc hàng liên quan trong Outline Sharing, phần chốt highlight của Sheet1 và phần đầu Expo Insight. Đã xem danh sách folder BinhNT và hai folder CongNK/SamNTT liên kết trong thư viện chuyến đi. Chỉ năm file được chỉ đích danh tại F9/F23 được chọn cho bài drone; không khẳng định đã xem toàn bộ video tên IMG/vid trong thư viện chung.

Các file được người dùng cung cấp cho bài trình bày này; không suy ra giấy phép công khai hoặc tác giả chụp từ tên cột. Giữ link nguồn; chưa thay đổi quyền chia sẻ Drive hoặc xuất bản website.

## SHA-256 của file gốc

```text
da854e752de8859316228172780d18aae2c2f64c6d73c634fa4dab50ecf23fc3  landing.mp4
86466fdf306145bea225532b4721b9c0159cab6f2cbe6c16639b3e9050c1181e  station.jpg
7e7188929e0f7004c3ecf52045197d4453f6dd8062657aee7c767b0f91e3c332  locker.jpg
1a3009d948fc3c042c826ac3ad294b1317852ec8a80f51efc10521b71929a5e4  rider.jpg
f5ab15e7ab509a824e1c825ca431602a74680c74d524adbf057b75be67e3bc5f  rider-ramp.mp4
```

## Cập nhật 22/09/2026 — video đặt drone

Người dùng cung cấp `Video đặt Drone.mp4` và yêu cầu thay stage 1 ở slide 4. File được sao chép nguyên bytes thành `drone-order.mp4`, dùng cho bước **Đặt qua Meituan** của chủ đề Drone trong cả bản slide và live-map. Ảnh minh hoạ dùng ở chủ đề Meituan giữ nguyên.

`ffprobe`: H.264 + AAC, 1080×1920, 30 fps, dài 79.481905 giây. `drone-order-poster.jpg` được trích tại giây 20, hiển thị màn hình chọn món. Ban đầu chỉ hiện thumbnail; bấm vào bất kỳ vị trí nào trên ảnh sẽ mở video trong khung. Video có điều khiển và giữ toàn bộ khung hình dọc; không suy ra ngày quay, địa điểm hay thời gian giao hàng từ thời lượng clip. Trong cuộn phim bốn bước hiện tại, video đặt đơn ở stage 1 và video hạ cánh ở stage 3.

```text
264a968182c473e14c86ae5a1d4f2b7540956ed55e2345ab5bfa4d1dd0f589a0  drone-order.mp4
```

## Cập nhật 23/09/2026 — video drone hạ cánh

Người dùng cung cấp `Untitled2.mov` và yêu cầu thay video ở bước **Drone giao hàng đến trạm** (slide Trải nghiệm tại Talent Park). File gốc HEVC 1920×1080, 60 fps, cờ xoay −90°, không có âm thanh, dài 26.728333 giây; được chuyển mã thành `drone-landing.mp4` (H.264 High, 1080×1920, 30 fps, CRF 24, faststart) để trình duyệt phát được. Nội dung khung hình không cắt, không chỉnh. `drone-landing-poster.jpg` trích tại giây 12, lúc drone mang hộp hàng tiến tới nóc trạm. `landing.mp4` cũ giữ nguyên, vẫn dùng ở slide v3.

## Cập nhật 23/09/2026 — video nhận hàng từ tủ

Người dùng cung cấp `Untitled.mp4` và yêu cầu thay ảnh `locker.jpg` ở bước **Nhận đồ ăn từ tủ**. File gốc H.264 1080×1920, 30 fps, không có âm thanh, dài 63.867 giây, 45.7 MB; được chuyển mã thành `drone-locker.mp4` (H.264 High, 720×1280, 30 fps, CRF 25, faststart, 14.9 MB) cho nhẹ khi trình chiếu. Nội dung khung hình không cắt, không chỉnh. `drone-locker-poster.jpg` trích tại giây 28, lúc tay kéo hộp Meituan 无人机 ra khỏi khoang. `locker.jpg` giữ nguyên làm tư liệu lưu trữ.

Cùng ngày, bài V3 (`/v3`) được gỡ khỏi website; `landing.mp4`, `landing-poster.jpg` và `locker.jpg` không còn slide nào dùng nhưng giữ lại cùng mã SHA-256 ở trên.
