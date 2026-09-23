# Media · Điểm dừng (places)

Hiện mới ghi nguồn cho nhóm ảnh IOTE. Credit Wikimedia của các điểm dừng khác nằm trong trường `credit` ở `src/data/places.ts`.

## IOTE

### Ảnh và clip của đoàn (chụp tại IOTE, 26/08/2026)

| File | Gốc | Nội dung |
| --- | --- | --- |
| `iote-robot-bar.mp4` | `IOTE_video.MOV` (bản nén) | Cánh tay robot pha đồ uống từ dãy chai treo ngược, 22 giây |
| `iote-robot-bar-poster.jpg` | khung hình từ clip trên | Poster của clip |
| `iote-robot-icecream.jpg` | `IMG_6263_still.HEIC` (Sâm gửi 23/09/2026, chuyển sang JPG, giữ nguyên kích thước 1080×1920) | Cánh tay robot trong máy bán kem tự động đặt ly kem có topping lên khay nhận. Chụp 26/08/2026 11:19 |
| `iote-team-1.jpg` | `iote_1.HEIC` | Booth TunStar, khẩu hiệu 让AI走出屏幕，感知真实世界 |
| `iote-team-2.jpg` | | Booth CTONE |
| `iote-team-3.jpg` | `IOTE_6.HEIC` | Booth ZNV, 驾驭复杂场景，释放AI能量 |
| `iote-team-4.jpg` | | Đoàn tại booth thẻ RFID/NFC của XCC |
| `iote-team-5.jpg` | | Đoàn giữa lối đi |

### Ảnh thật dùng để minh hoạ loại thiết bị: **không chụp tại IOTE, không phải ảnh của đoàn**

Đây là ảnh chụp thật, không phải ảnh AI. Chúng chỉ minh hoạ *loại* thiết bị đoàn thấy ở IOTE, không phải đúng mẫu hay đúng booth. Chú thích trên slide phải ghi rõ điều này và kèm credit.

| File | Nguồn | Tác giả · Giấy phép | Nội dung |
| --- | --- | --- | --- |
| `iote-sample-pda.jpg` | https://commons.wikimedia.org/wiki/File:Android-MDE-mit-LTE.jpg | Bartolo Bernoulli · CC BY-SA 4.0 | Máy quét cầm tay Aitronic chạy Android 5.1, màn hình hiện giao diện Android. Thu nhỏ từ 2765×3958 xuống cạnh dài 1600px |
| `iote-sample-rfid.jpg` | https://commons.wikimedia.org/wiki/File:RFID_tag_in_a_label_1.png | Pedalito · CC0 | Tem nhãn hàng chiếu ngược sáng, thấy anten RFID dưới lớp mã vạch. Chuyển PNG sang JPG, cạnh dài 1600px |

`iote.jpg` và `iote-2.jpg` là ảnh Wikimedia về trung tâm hội chợ. Credit của hai ảnh này nằm trong `places.ts`.

Các file gốc `*.HEIC` và `IOTE_video.MOV` trong thư mục này không được trang nào dùng tới, nhưng vẫn bị copy vào `dist/`.

## Hall 9 · NFC và RFID (`hall9/`, thêm 24/09/2026)

Ảnh của đoàn chụp tại Hall 9 ngày 26/08/2026 (IMG_0333 có biển "9 Hall · Gate 15"): `iote-hall9-rfid-tags.jpg` (IMG_0337, booth tem dán RFID), `iote-hall9-xcc.jpg` (IMG_0338, booth XCC RFID). Đã thu nhỏ và xoá metadata.

Ảnh minh hoạ loại thiết bị, **không chụp tại IOTE**, lấy từ Wikimedia Commons, giấy phép kiểm tra qua Commons API:

| File | Nội dung | Tác giả | Giấy phép | Nguồn |
|---|---|---|---|---|
| nfc-alipay-tap-terminal-china.jpg | Đầu đọc NFC Alipay "碰一下" tại một quầy ở Trung Quốc | HualinXMN | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:NFC_Pay_terminal,_Alipay.jpg |
| nfc-phone-tap-pos-terminal.jpg | Điện thoại chạm máy POS NFC ở quầy cà phê | HLundgaard | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Mobile_payment_03.JPG |
| nfc-tag-bus-stop-tap-phone.jpg | Thẻ NFC "Tap phone here" gắn ở trạm xe buýt | John Robert McPherson | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Ellison_Road_-_41_bus_stop_near_field_communication_tag_Murphy_Rd_Chermside_L1010757.jpg |
| rfid-uhf-inlay-textile-label-peeled.jpg | Nhãn vải bóc hở, lộ inlay RFID UHF | Boevaya mashina | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:RFID_tag_in_textile_label_disassembled.jpg |
| rfid-handheld-inventory-warehouse.jpg | Nhân viên kho kiểm kê bằng súng đọc RFID | U.S. Air Force, SrA Jessica Sanchez-Chen | Public domain | https://commons.wikimedia.org/wiki/File:Innovative_RFID_Technology_Enhances_Inventory_Management_at_52nd_LRS_(8877947).jpg |
| rfid-portal-pallet-gate.jpg | Cổng RFID cố định, pallet thùng đi qua (ảnh gốc đã tách nền) | Geirvevle | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:HRAFN_Advanced_RFID_portal.png |
