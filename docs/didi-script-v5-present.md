# SCRIPT TRÌNH BÀY — "Một cuốc xe Didi ở Thẩm Quyến"

**Bản dùng để present và để build slide.**

> **Cập nhật 23/09/2026 khi dựng slide:** (1) ô “51” cạnh đèn đỏ trên ảnh `04a` là **đếm ngược đèn đỏ** — Sâm xác nhận; slide 5 dùng ảnh này thay cho ảnh Amap phải tìm thêm. (2) Mẹo tra địa chỉ: “pinyin” → **tên tiếng Trung (chữ Hán)**. (3) Slide 3: “chỗ nào cũng ghi Upfront Fare” → **“hầu hết các hạng”** — Taxi và Comfort Taxi ghi “Est.”. (4) Hai ảnh `03a`/`03b` có metadata **23/09/2026 09:21**: là màn hình đặt lại đúng tuyến sau chuyến đi, không phải chụp trong chuyến — lời nói slide 3 đã sửa cho khớp.

| | |
|---|---|
| **Người trình bày** | SamNTT (slide 1–4, 9) · BinhNT (slide 5–8) |
| **Thời lượng** | **20 phút — đã bao gồm Q&A** (nói ~16'45, Q&A ~3'15) |
| **Khán giả** | **Toàn thể nhân viên Ahamove** |
| **Chuyến đi** | 24–28/08/2026 · 5 ngày · Thẩm Quyến · 6 người · 11 chuyến Didi |
| **Xưng hô** | "em" với phòng · "mình" với công ty/đoàn |
| **Số slide** | 9 |

**Cách đọc file:** mỗi slide có 5 khối —
🖥️ **TRÊN SLIDE** · 🖼️ **HÌNH / VIDEO** (ghi rõ file đã có hoặc cần tìm gì) · 🎙️ **LỜI NÓI** · 🎬 **GHI CHÚ SÂN KHẤU**.
Số `[n]` là nguồn — danh sách đầy đủ ở cuối file.

> **Về lời nói:** phần 🎙️ viết dài đúng bằng thời lượng cho phép (tiếng Việt nói ~140 chữ/phút). Đừng học thuộc — đọc vài lần cho thuộc *ý*, lên nói bằng chữ của mình. Chỗ in đậm là chỗ không được bỏ.

> ⚠️ **Vì khán giả là toàn thể nhân viên, không riêng Vận hành:** tránh từ nội bộ (ETA, dispatch, POD, GMV, first-mile). Mỗi khi buộc phải dùng thì giải thích ngay trong câu. Câu hỏi tương tác phải là câu **ai ngồi dưới cũng trả lời được** — không hỏi những thứ chỉ một bộ phận mới biết. Mấy câu chuyên sâu cho Vận hành/CS đã được dời xuống phần Q&A ở cuối.

---

## 📦 Thư mục media — `Media_Didi_Slides/`

Tôi đã gom sẵn toàn bộ ảnh đang có vào một thư mục để anh đóng gói gửi anh Sâm. Năm ảnh đầu vốn nhúng trong file HTML, đã trích ra file rời.

| File | Nội dung | Dùng ở |
|---|---|---|
| `01_Bien-E-hailing-Area-B-San-bay-Bao-An.jpg` | Biển 网约车B区 "E-hailing Area B" ở sân bay Bảo An, cả đoàn đứng chờ xe với vali, 8:06 sáng 24/08 | Slide 1 |
| `01_Logo-Didi.png` | Logo Didi Chuxing | Slide 2 |
| `03a_Man-hinh-Chon-xe-co-ban-do-tuyen.png` | Màn hình chọn xe + bản đồ tuyến (4,8km · 14 phút), có điểm kẹt 堵 | **Slide 3 — chủ lực** |
| `03b_Man-hinh-Chon-xe-day-du-10-hang.png` | Màn hình chọn xe cuộn hết — thấy đủ 10 hạng xe và giá từng hạng | **Slide 3 — chủ lực** |
| `04a_Man-hinh-Cho-tai-xe-Walk39m-WaitingTrafficLight.jpg` | Màn hình chờ tài xế: "Walk 39m and save 1min" · "Waiting for a traffic light" · Fang 5.0★ · AION S Plus | **Slide 4 + 5** |
| `04b_Man-hinh-Hoa-don-77.80CNY-1430g-carbon.jpg` | Hoá đơn cuối chuyến: Talent Park → SEG Plaza, 77,80 CNY, tiết kiệm 19,50, 32 phút, **1.430g carbon** | **Slide 4 + 7** |
| `05_Amap-Chi-duong-thuc-te.png` | Màn hình Amap chỉ đường thật, chụp 26/08 | Slide 5 |
| `08_Duong-pho-Tham-Quyen-toan-xe-dien.jpg` | Trục đường lớn Thẩm Quyến, phần lớn xe lưu thông là xe điện | Slide 8 |
| `08b_Noi-that-xe-dien-man-hinh-dieu-khien.jpg` | Nội thất xe điện, màn hình điều khiển | Slide 8 (phụ) |
| `09_Robotaxi-ban-dem-so-hieu-4484.jpg` | Xe dáng robotaxi chụp đêm ở Thẩm Quyến, cụm cảm biến trên gương, số hiệu 4484 | Slide 9 |

**Video B-roll AI đã có sẵn** trong `Pic & Video/AI_Broll/` — 8 clip cho chủ đề đặt xe, mỗi clip 10 giây, 1280×720: `AI_Bumper_DatXe` · `AI_Gap_DatXe_DatChuyen` · `_BaoGia` · `_GhepTaiXe` · `_TaiXeDon` · `_TrenDuong` · `_ThanhToan` · `_CaoDiem` · `_ThapDiem`.

**Video robotaxi thật:** đang nhúng trong deck dưới dạng link Drive — https://drive.google.com/file/d/1dGdoSl5wS7ePTU9mV1scqe05KXf6nah6/view

---

# PHẦN A — SÂM · "Cái em thấy"

---

## SLIDE 1 · Mở đầu — 45 giây

🖥️ **TRÊN SLIDE**
- Tiêu đề lớn: **Một cuốc xe Didi ở Thẩm Quyến — và những gì nó hé lộ**
- Dòng phụ: Study trip IOTE 2026 · 24–28/08/2026 · Sâm & Bình
- Bốn ô số: **5 ngày** · **6 người** · **11 chuyến** Didi · **0** người biết tiếng Trung

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** `01_Bien-E-hailing-Area-B-San-bay-Bao-An.jpg` — để làm ảnh nền hoặc ảnh lớn bên phải. Ảnh này rất hợp mở bài vì nó *là* khoảnh khắc đầu tiên của chuyến: cả đoàn vừa đáp, đứng ở khu chờ xe công nghệ của sân bay.
- ✅ **Đã có (tuỳ chọn):** `AI_Broll/AI_Bumper_DatXe.mp4` — cắt 3 giây làm "cold open" trước khi slide 1 hiện ra. Chỉ dùng nếu deck chạy được video.
- ✅ Sơ đồ tuyến vẽ sẵn trong deck hiện tại — giữ được thì giữ.

🎙️ **LỜI NÓI**

> *"Chào mọi người. Hôm nay em với Bình chia sẻ về phần đặt xe — app Didi, cái mà đoàn mình dùng suốt 5 ngày ở Thẩm Quyến, từ 24 tới 28 tháng 8.*
>
> **✋ *«Hỏi nhanh cả phòng cho vui: ở đây có ai từng đi nước ngoài mà không nói được một chữ tiếng bản địa, vẫn phải tự đi lại không ạ? Giơ tay em xem.»*** *(đếm tay, cười, đi tiếp ngay)*
>
> *Đoàn mình đúng hoàn cảnh đó. Sáu người, không ai biết tiếng Trung, biển hiệu cũng chịu. Vậy mà 5 ngày, 11 chuyến xe, không lạc lần nào, không cãi giá lần nào, không móc tiền mặt lần nào.*
>
> *Em muốn kể về 11 chuyến đó — và cái đứng sau nó."*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu hỏi mở đầu **chỉ đếm tay rồi đi tiếp**, không hỏi ai thêm. Vì Q&A nằm trong 20 phút nên phải tiết kiệm từ slide đầu.
- Nếu không ai giơ tay: cười, *"chắc mọi người đi đâu cũng có phiên dịch"*, đi tiếp.

---

## SLIDE 2 · Didi lớn cỡ nào — 1 phút

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Didi — nền tảng gọi xe lớn nhất Trung Quốc**
- 滴滴出行 · *Dīdī Chūxíng*
- Ba ô số (quý II/2026): **> 55 triệu** cuốc/ngày · **5,05 tỷ** đơn một quý (+13,2%) · **133,9 tỷ NDT** giá trị giao dịch (+22,2%)
- Ô so sánh: *Cả thị trường gọi xe 4 bánh Việt Nam một quý ≈ **153 triệu chuyến*** → Didi chạy hết chừng đó trong **chưa tới 3 ngày**
- Chân slide: *Nguồn: Báo cáo quý II/2026 của Didi, công bố 14/8/2026 · Mordor Intelligence, Q1/2026*

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** `01_Logo-Didi.png`
- Slide này **không cần ảnh thật** — để số làm chính, nền sạch. Đừng chèn ảnh stock cho kín slide.

🎙️ **LỜI NÓI**

> *"Nói nhanh về quy mô cho mọi người dễ hình dung.*
>
> *Quý vừa rồi Didi chạy **hơn 55 triệu cuốc xe mỗi ngày** — lần đầu tiên họ vượt mốc đó. [1]*
>
> *Con số 55 triệu hơi trừu tượng, nên em lấy cái này so: cả thị trường gọi xe 4 bánh Việt Nam, một quý là khoảng **153 triệu chuyến**. [3] Didi chạy hết chừng đó **trong chưa tới 3 ngày**.*
>
> *Nhưng nghe to vậy thôi — **nửa đầu năm nay họ vẫn lỗ** đó mọi người. [2] Trong nước lãi, mang ra nước ngoài thì lỗ vì đang đốt tiền khuyến mãi giành khách ở Brazil với Mexico. Nghe quen không ạ?"* *(dừng nửa giây)*

🎬 **GHI CHÚ SÂN KHẤU**
- **Bỏ khỏi deck cũ:** dòng "550 triệu người dùng, hơn 400 thành phố" — số từ thời IPO 2021, cũ 5 năm.
- Câu cuối là câu bắt phòng. Nói xong dừng lại, đừng nói đè lên tiếng cười.

---

## SLIDE 3 · Mười hạng xe cho cùng một chuyến — 2 phút 45

> ✅ **SLIDE NÀY VỪA ĐƯỢC VIẾT LẠI** nhờ hai ảnh anh Sâm gửi. Ảnh thật cho thấy con số mạnh hơn nhiều so với tài liệu tôi tra được trước đó — xem ghi chú đính chính bên dưới.

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Cùng một chuyến 4,8km — mười hạng xe để chọn**
- Ảnh chụp màn hình thật chiếm **60% diện tích**, bên cạnh là các chú thích có mũi tên trỏ vào:

| Chú thích | Trỏ vào chi tiết nào trên ảnh |
|---|---|
| **Giá chốt trước, không phải giá ước tính** | Chữ **"Upfront Fare"** ở các hạng xe |
| **Rẻ nhất 12,8 tệ — đắt nhất 88,3 tệ. Chênh 7 lần, cùng một quãng đường** | Economy 12,8 CNY ↔ Luxe 88,3 CNY |
| **Thời gian ghép tài xế tính bằng GIÂY** | "3 sec" · "4 sec" · "5 sec" dưới tên mỗi hạng |
| **Tick được nhiều hạng cùng lúc — hạng nào có xe trước thì đi hạng đó** | 3 ô tick xanh ở Economy · Taxi · Comfort Taxi, và dải giá **"Est. 12–21.9 CNY"** ở nút Confirm |
| **Bán riêng cả "đỡ phải chờ" và "xe không mùi"** | Priority: *"Shorter waiting time"* · Comfort: *"Roomy B-class, odor-free"* |
| **Giảm giá hiện ngay từng hạng** | −2.4 CNY và −4.6 CNY màu đỏ |
| **Trả online hoặc tiền mặt · đặt hẹn giờ · đặt hộ người khác** | Thanh dưới cùng: Pay Online · Schedule · For Others |

- Ô mẹo riêng, nổi bật: **Didi chạy nền bản đồ Amap (高德地图) → tra tên tiếng Trung (chữ Hán) của địa chỉ rồi dán vào, chọn đúng điểm dễ hơn nhiều so với gõ tiếng Anh**

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có — chủ lực:** `03b_Man-hinh-Chon-xe-day-du-10-hang.png` *(thấy đủ 10 hạng — dùng làm ảnh chính)*
- ✅ **Đã có — phụ:** `03a_Man-hinh-Chon-xe-co-ban-do-tuyen.png` *(có bản đồ tuyến 4,8km · 14 phút và điểm kẹt — dùng ảnh nhỏ ở góc để người xem biết đây là chuyến thật, đi từ đâu tới đâu)*
- ✅ **Tuỳ chọn:** `AI_Broll/AI_Gap_DatXe_BaoGia.mp4` làm nền mờ. **Khuyến nghị: đừng dùng** — ảnh thật đã quá mạnh, thêm b-roll AI chỉ làm loãng.
- 🔍 **Không cần tìm thêm gì.**

🎙️ **LỜI NÓI**

> *"Giờ em cho mọi người xem một cái màn hình.*
>
> *Đây là màn hình đặt xe cho đúng tuyến tụi em hay đi: từ khách sạn ở Huaqiangbei ra phố đi bộ Dongmen. Tuyến này 4,8 cây số, 14 phút.*
>
> **🔢 *«Em hỏi trước: app mình hay dùng ở nhà, một chuyến 4 chỗ như vậy có mấy mức giá để chọn ạ?»*** *(chờ — sẽ có người nói 2, 3)*
>
> ***«Mọi người đoán Didi có mấy?»*** *(chờ 3 giây)*
>
> *(bấm hiện ảnh) **Mười.***
>
> *Mọi người nhìn: Economy 12,8 tệ. Standard 16,2. Priority 17,9. Comfort 18,2. Taxi 21,9. Premium 32,1. Premium XL 43,6. Luxe 88,3. Cùng một quãng đường 4,8 cây số — **rẻ nhất với đắt nhất chênh nhau 7 lần**.*
>
> *Nhưng cái làm em chú ý không phải là mười hạng. Là **ba chi tiết nhỏ** trên màn hình này.*
>
> ***Thứ nhất*** *— hầu hết các hạng đều ghi «**Upfront Fare**», nghĩa là giá chốt trước. Không phải giá ước tính rồi đi xong mới biết. Mình bấm là biết đúng số tiền đó.*
>
> ***Thứ hai*** *— nhìn dưới tên mỗi hạng: **3 giây, 4 giây, 5 giây**. Đó là thời gian ghép được tài xế. Họ không đếm bằng phút, họ đếm bằng giây.*
>
> ***Thứ ba, cái này em thấy hay nhất*** *— mọi người nhìn ba ô tích xanh. Em **tick cùng lúc ba hạng**: Economy, Taxi, Comfort Taxi. Rồi dưới nút xác nhận nó hiện «**Est. 12 tới 21,9 tệ**». Tức là hạng nào có xe tới trước thì em đi hạng đó, trong khoảng giá em đã đồng ý.*
>
> *Em thì được đi nhanh hơn. Còn họ thì ghép được nhiều xe hơn cho cùng một khách. **Hai bên cùng lợi.***
>
> *À và họ bán cả những thứ mình ít nghĩ tới: hạng «Priority» là bán riêng chuyện **đỡ phải chờ**. Hạng «Comfort» ghi thẳng là **xe rộng, không mùi**.*
>
> *Cuối cùng một mẹo thực tế cho ai sắp đi Trung Quốc: **Didi chạy nền bản đồ Amap**. Gõ địa chỉ tiếng Anh nhiều khi ra không đúng chỗ. Tra trước **tên tiếng Trung** của địa chỉ rồi dán vào thì chọn đúng điểm dễ hơn hẳn. Cái này tụi em mò mấy chuyến mới ra."*

🎬 **GHI CHÚ SÂN KHẤU**
- **Đây là slide có bằng chứng mạnh nhất cả bài.** Để ảnh thật thật to. Nói chậm, chỉ tay lên màn hình theo từng chú thích.
- Con số **"Mười"** ẩn sau nút bấm, lật ra sau khi phòng đoán.
- Nếu cháy giờ: bỏ đoạn "Priority / Comfort", giữ ba chi tiết chính.

> ⚠️ **ĐÍNH CHÍNH so với bản trước:** các bản outline trước tôi viết Didi có "5–6 tầng giá" — số đó lấy từ tài liệu tiếng Trung mô tả các dòng xe chính. **Ảnh chụp màn hình thật cho thấy 10 hạng.** Dùng số 10 và dùng ảnh làm bằng chứng. Bảng giá chi tiết theo tài liệu Trung Quốc [6][7] giữ lại ở cuối file, chỉ dùng nếu bị hỏi về cách tính cước.

---

## SLIDE 4 · App tự nói trước khi mình kịp hỏi — 2 phút 30

🖥️ **TRÊN SLIDE**
- Tiêu đề: **App tự nói trước khi mình kịp hỏi**
- Hai cột, mỗi cột một ảnh chụp màn hình thật:
  - **Trái — Lúc đứng chờ:** *"Walk 39m and save 1min"* · *"Waiting for a traffic light — cách 0,4km, 3 phút"* · Fang, 5.0★ · AION S Plus (xe điện)
  - **Phải — Lúc xuống xe:** Talent Park → SEG Plaza Tower A · **77,80 CNY** · tiết kiệm 19,50 CNY · 32 phút · **1.430g carbon** *(khoanh tròn dòng này)*
- Dòng chốt: **Cả hai màn hình đều là app trả lời trước khi khách kịp hỏi**

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** `04a_Man-hinh-Cho-tai-xe-Walk39m-WaitingTrafficLight.jpg` và `04b_Man-hinh-Hoa-don-77.80CNY-1430g-carbon.jpg`
- **Xử lý ảnh cần làm:** khoanh/đánh dấu 3 chỗ — dòng *"Walk 39m and save 1min"*, dòng *"Waiting for a traffic light"*, và dòng *1.430g carbon*. Người ngồi cuối phòng sẽ không tự tìm ra nếu không khoanh.
- ✅ **Tuỳ chọn:** `AI_Broll/AI_Gap_DatXe_TaiXeDon.mp4` (tài xế đến đón) và `_ThanhToan.mp4`. **Khuyến nghị đừng dùng** — hai ảnh thật đã đủ, thêm video AI làm giảm độ tin.
- 🔍 **Không cần tìm thêm.**

🎙️ **LỜI NÓI**

> *"Slide này là phần em thích nhất, và nó chỉ là hai cái màn hình.*
>
> ***Cái thứ nhất — lúc em đứng chờ xe.***
>
> *Nó báo: tài xế tên Fang, xe AION S Plus, cách 0,4 cây, 3 phút nữa tới. Cái đó app nào cũng có.*
>
> *Nhưng có thêm một dòng: **«Waiting for a traffic light»** — tài xế đang dừng đèn đỏ. App không chỉ nói «3 phút nữa tới», nó nói luôn **tại sao đang chậm**. Mình đứng chờ mà không sốt ruột, vì biết ông ấy kẹt đèn chứ không phải đi lạc.*
>
> *Rồi phía trên còn một dòng nữa: **«Walk 39m and save 1min»** — đi bộ thêm 39 mét thì bớt được 1 phút chờ.*
>
> *Nói thật 1 phút chẳng đáng gì. Nhưng cái em để ý là **nó không tối ưu cho riêng mình** — mình bước thêm 39 mét thì tài xế khỏi vòng vô hẻm, khỏi quay đầu. Hai bên cùng được.*
>
> ***Cái thứ hai — lúc em xuống xe.***
>
> *Chuyến này từ Talent Park về SEG Plaza. Xuống xe là xong, không móc ví, không nói chuyện tiền nong với tài xế, tiền tự trừ. Mà hay ở chỗ mình **chủ động bấm thanh toán sau khi xuống xe cũng được**, không ai đứng chờ ai.*
>
> *Hoá đơn: 77 tệ 8, tiết kiệm 19 tệ rưỡi, 32 phút. Tới đây thì bình thường.*
>
> *Nhưng có một dòng ở trên: **«1.430 gram carbon».***
>
> *Lúc đó em tưởng app ghi cho vui. **Hoá ra không phải.** Cái này lát Bình sẽ kể, và em nghĩ đó là phần bất ngờ nhất của cả bài.*
>
> *Tóm lại hai màn hình này chung một điểm: **app nói trước khi mình kịp hỏi.***
>
> *Đó là mấy thứ em thấy trong 5 ngày. Còn **vì sao họ làm được** thì Bình có đi tìm hiểu thêm — em mời Bình."*

🎬 **GHI CHÚ SÂN KHẤU**
- **Tuyệt đối không giải thích 1.430g ở đây.** Treo đúng như script. Giải thích ở đây thì slide 7 mất hết sức nặng.
- Chuyển người: bước sang một bên, đưa tay mời, đừng đứng chắn màn hình.
- **Đã bỏ** câu hỏi giơ tay "ai đi bộ 39m" so với bản trước — để tiết kiệm thời gian cho Q&A.

> ⚠️ **CẦN ANH SÂM XÁC NHẬN:** deck cũ có nhắc tính năng *"bản đồ đếm ngược đèn đỏ còn bao nhiêu giây"* trên màn hình trong xe. Mình **không có ảnh chụp**. Nếu anh nhớ chắc có thấy thì kể thêm một câu như quan sát cá nhân; không chắc thì **bỏ** — dòng "Waiting for a traffic light" trên ảnh đã đủ mạnh và có bằng chứng.

---

# PHẦN B — BÌNH · "Cái tụi em tìm hiểu thêm"

---

## SLIDE 5 · Làm sao app biết tài xế đang kẹt đèn đỏ? — 2 phút 15

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Làm sao app biết tài xế đang kẹt đèn đỏ?**
- Hai ô đối nhau:
  - ❌ **Không phải:** đấu nối dữ liệu với hệ thống đèn tín hiệu của sở giao thông
  - ✅ **Mà là:** nhìn vệt di chuyển GPS của chính những xe đang chạy app dừng ở nút giao đó → thấy dừng rồi đi theo chu kỳ đều đặn → **suy ngược ra nhịp đèn**
- Ba số: phủ **hơn 80.000 nút giao** khi công bố · nhắc trước **~5 giây** khi sắp xanh · nút quá đông thì báo **phải chờ mấy nhịp đèn**
- Ô nhấn màu: **Họ không xin dữ liệu của ai. Họ dùng lại dữ liệu vốn đã có.**
- Chân slide: *Nguồn: Tân Hoa Xã (công bố tính năng) · phân tích cơ chế: Taibo*

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** crop phóng to đúng dòng *"Waiting for a traffic light"* từ `04a_...jpg` — đặt ở góc trên trái để nối mạch trực tiếp với phần anh Sâm vừa kể.
- ✅ **Đã có:** `05_Amap-Chi-duong-thuc-te.png` — màn hình Amap chỉ đường thật của đoàn, dùng làm ảnh phụ chứng minh "đây là bản đồ họ dùng".
- 🔍 **Nên tìm thêm (1 ảnh):** ảnh chụp giao diện Amap đang hiện **vòng đếm ngược đèn đỏ** (hình tròn có số giây trên bản đồ).
  - Từ khoá tìm: **`高德地图 红绿灯读秒 截图`** hoặc **`高德 红绿灯倒计时 界面`**
  - Có sẵn trong bài của Tân Hoa Xã [8] và bài phân tích của Taibo [9] — lấy ảnh từ đó và ghi nguồn dưới ảnh.
  - Nếu không tìm được: vẽ sơ đồ 3 bước thay thế — *nhiều xe dừng ở nút giao → hệ thống thấy nhịp lặp lại → suy ra chu kỳ đèn*. Sơ đồ vẽ tay kiểu này thậm chí dễ hiểu hơn ảnh chụp.

🎙️ **LỜI NÓI**

> *"Dạ em chào mọi người. Phần của em khác anh Sâm một chút, em nói rõ trước: **mấy cái em sắp kể tụi em không trải nghiệm trực tiếp** — là về nhà tò mò quá nên đi tra thêm. Em sẽ nói rõ cái nào là cái nào.*
>
> *Bắt đầu từ đúng cái màn hình anh Sâm vừa chiếu. Dòng **«Waiting for a traffic light»** đó — em nhìn xong em thắc mắc:*
>
> ***Làm sao cái app biết ông tài xế đó đang dừng ở đèn đỏ?***
>
> **🔢 *«Em hỏi thử: theo mọi người, họ lấy dữ liệu đèn giao thông từ đâu? Đấu nối với sở giao thông à?»*** *(chờ 3 giây)*
>
> *(bấm lật) **Không. Không đấu nối gì hết.***
>
> *Cách họ làm thế này: bản đồ Amap nhìn **vệt di chuyển của chính những chiếc xe đang chạy app** đi qua nút giao đó. Thấy một đám xe dừng lại, rồi đi, rồi lại dừng — đều đặn theo một chu kỳ. Từ cái nhịp đó họ **suy ngược ra chu kỳ đèn**. [9]*
>
> *Và không phải làm vài chỗ cho vui — lúc công bố, tính năng này đã phủ **hơn 80.000 nút giao** trên toàn Trung Quốc. [8] Nó còn nhắc trước khoảng 5 giây khi sắp xanh.*
>
> *Chỗ này em dừng một chút, vì em nghĩ nó liên quan tới mình.*
>
> ***Họ không đi xin dữ liệu của ai hết. Họ lấy đúng cái dữ liệu GPS mà app vốn đã có sẵn, rồi nặn ra một tính năng mới.***
>
> *Mỗi ngày tài xế mình để lại bao nhiêu vệt di chuyển trên bản đồ? Chỗ đó mình đang có sẵn rồi, không phải mua của ai. Ví dụ từ mấy vệt đó mình có thể biết được: **toà nhà nào hay phải chờ lâu, đoạn nào hay kẹt vào giờ nào.***
>
> *Cái đó không cần công nghệ mới. Chỉ cần chịu nhìn lại thứ mình đang có."*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu mở đầu về ranh giới *"không trải nghiệm trực tiếp"* — **nói một lần ở đây là đủ cho cả phần B**, khỏi rào đón ở từng slide sau.
- Đây là **điểm bất ngờ nhất cả bài**. Nói chậm đoạn "Không. Không đấu nối gì hết", im 1 giây rồi mới giải thích.
- Đáp án ẩn sau nút bấm.
- **Đã bỏ** câu hỏi mở cuối slide so với bản trước, chuyển thành câu khẳng định — để dồn thời gian cho Q&A.

---

## SLIDE 6 · Phía tài xế thì sao? — 1 phút 15

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Phía khách minh bạch vậy — còn phía tài xế?**
- Ba ô:
  1. **Hoá đơn minh bạch trong app tài xế** — mỗi cuốc hiện rõ thu nhập · thưởng · **tỷ lệ hoa hồng**; tra được hoa hồng bình quân 7 ngày và tháng trước
  2. **Trần hoa hồng: 29% → 27%** *(Didi công bố 5/2026)*
  3. **Khiếu nại liên quan hoa hồng giảm 68%** tại Bắc Kinh — ⚠️ *số do Didi tự công bố, không phải kiểm toán độc lập*
- Ô chốt: **Minh bạch ở đây được dùng như một cách giảm tải vận hành**

🖼️ **HÌNH / VIDEO**
- ❌ **Không có ảnh thật** — mình là khách, không phải tài xế. **Không được lấy ảnh trên mạng rồi để như ảnh mình chụp.**
- 🔍 **Nên tìm (1 ảnh):** ảnh chụp màn hình tính năng hoá đơn minh bạch trong app tài xế Didi.
  - Từ khoá: **`滴滴司机端 透明账单 截图`** hoặc **`滴滴 司机 抽成 明细 界面`**
  - Bài của IT之家 [10] và bài Báo Công đoàn [11] đều có ảnh minh hoạ — lấy từ đó, **ghi rõ nguồn dưới ảnh**.
- ✅ **Phương án thay thế (khuyến nghị nếu không tìm được ảnh rõ):** tự vẽ một hoá đơn cách điệu tách 3 dòng — **Cước khách trả · Tài xế nhận · Nền tảng giữ (27%)**. Đồ hoạ tự vẽ vừa sạch, vừa không phải lo bản quyền, vừa đúng tinh thần "đây là thứ tụi em đọc được chứ không chụp được".

🎙️ **LỜI NÓI**

> *"Cái thứ hai em đi tra, xuất phát từ một chuyện hơi lạ.*
>
> ***Phía khách thì Didi minh bạch kinh khủng*** *— giá chốt trước khi bấm, xuống xe hoá đơn tách từng khoản. Như mấy cái màn hình anh Sâm vừa chiếu.*
>
> *Em mới nghĩ: **phía khách rõ vậy, thế còn phía tài xế thì sao? Tài xế có biết nền tảng lấy bao nhiêu phần trăm trên cuốc của họ không?***
>
> *(bấm) **Có.** Trong app tài xế của họ có tính năng gọi là «hoá đơn minh bạch»: mỗi cuốc hiện rõ thu nhập bao nhiêu, thưởng bao nhiêu, nền tảng lấy bao nhiêu phần trăm. Tài xế còn tra được **hoa hồng bình quân 7 ngày gần nhất** và **của tháng trước**. [11]*
>
> *Tháng 5 vừa rồi họ công bố **hạ trần hoa hồng từ 29% xuống 27%**. [10] Và con số họ đưa ra là: khiếu nại liên quan tới hoa hồng ở Bắc Kinh **giảm 68%**. [11]*
>
> ***Em nói rõ luôn: con số 68% là Didi tự công bố, không phải số kiểm toán độc lập. Em không dám khẳng định nó chính xác.*** *Nhưng cái hướng thì đáng chú ý — và nó không phải chuyện đạo đức.*
>
> ***Minh bạch ở đây họ dùng như một cách giảm việc cho chính họ.*** *Tài xế nhìn đủ số trên app thì bớt gọi lên hỏi. Mà bớt người gọi lên hỏi thì bớt người phải ngồi trả lời."*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu **"em nói rõ luôn, con số này họ tự công bố"** là câu giữ uy tín cho cả bài — **không được bỏ**.
- Đây là slide **rút gọn nhiều nhất** so với bản trước: đã bỏ câu hỏi giơ tay và bỏ câu hỏi dành riêng cho CS/Vận hành *(đã chuyển xuống Q&A)*.
- Nếu cháy giờ, đây là slide cắt được: bỏ đoạn 29→27%, giữ ý chính.

---

## SLIDE 7 · 1.430 gram carbon — trả nợ câu hỏi treo — 2 phút 15

🖥️ **TRÊN SLIDE**
- Tiêu đề: **1.430 gram carbon — nó là cái gì?**
- Trái: ảnh hoá đơn, **khoanh tròn đúng dòng 1.430g**
- Phải, ba ý:
  - **碳普惠 — "phổ cập carbon"**: cơ chế cấp quốc gia. Hành vi ít phát thải → **điểm carbon** → đổi được ưu đãi thật · hạn dùng 2 năm
  - Didi có sản phẩm carbon riêng, đã chạy ở **298 thành phố**
  - Thẩm Quyến có nền tảng riêng — vì **giao thông là nguồn phát thải lớn nhất thành phố**
- Dải ngang: **Làm hành vi tốt → đo được ngay → thưởng ngay trong app**
- Khối riêng, màu nhấn — **Còn ở Việt Nam:**
  - **Quyết định 42/2026/QĐ-TTg** — ban hành 10/8/2026, **hiệu lực 25/9/2026**
  - **2.441 cơ sở** phải kiểm kê khí nhà kính *(tăng 275 so với danh mục 2024)*
  - **Giao thông vận tải nằm trong danh mục**
- Chân slide: *Nguồn: 21世纪经济报道 6/2026 · Quyết định 42/2026/QĐ-TTg*

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** `04b_Man-hinh-Hoa-don-77.80CNY-1430g-carbon.jpg` — crop phần trên, khoanh dòng carbon.
- 🔍 **Nên tìm (1–2 ảnh):**
  1. Giao diện tích điểm carbon trong app Didi — từ khoá **`滴滴 碳元气 截图`** hoặc **`滴滴 碳积分 界面`**
  2. Ảnh/logo nền tảng **低碳星球** của Thẩm Quyến — từ khoá **`深圳 低碳星球 小程序`**
  3. Cho phần Việt Nam: ảnh chụp đầu trang **Quyết định 42/2026/QĐ-TTg** trên Cổng TTĐT Chính phủ (chinhphu.vn / vanban.chinhphu.vn) — một ảnh văn bản gốc nhìn rất "chắc", tăng độ tin cho phần này.
- ❌ **Đừng dùng** ảnh stock kiểu "trái đất xanh, lá cây, tay cầm mầm non" — làm cả slide mất nghiêm túc ngay.

🎙️ **LỜI NÓI**

> *"Giờ em trả nợ cái câu anh Sâm treo. Dòng **1.430 gram carbon**.*
>
> *Nó không phải app ghi cho vui. **Nó nằm trong cả một chính sách cấp quốc gia.***
>
> *Bên Trung Quốc có cơ chế tên là **碳普惠** — đại ý là «phổ cập carbon». Nguyên tắc đơn giản: người dân làm hành vi ít phát thải thì được quy đổi thành **điểm carbon**. Điểm đó đổi được ưu đãi thật, hạn dùng 2 năm. [12][13]*
>
> *Didi có hẳn sản phẩm carbon riêng, hiện chạy ở **298 thành phố**. [12] Riêng Thẩm Quyến có nền tảng riêng của thành phố — họ đẩy mạnh vì **giao thông là nguồn phát thải lớn nhất** của họ. [13]*
>
> *Cái hay là **khách không cần hiểu gì về carbon hết.** Mình chỉ thấy đi chuyến này mình được thêm một thứ. Vòng lặp rất gọn: **làm hành vi tốt, đo được ngay, thưởng ngay trong app.** Không báo cáo, không thủ tục.*
>
> *(chậm lại, đổi giọng) **Tới đây thì em nghĩ chuyện này ở Việt Nam còn xa. Nhưng em tra lại thì không xa đâu.***
>
> ***Ngày 25 tháng 9 — tức là đúng tuần này*** *— có một quyết định mới của Thủ tướng bắt đầu có hiệu lực. Nó mở rộng danh sách cơ sở **bắt buộc phải kiểm kê khí nhà kính lên hơn 2.400 cơ sở**, tăng gần 300 so với trước. Và **giao thông vận tải nằm trong danh mục đó**. [14]*
>
> *Mà một doanh nghiệp đã phải kiểm kê thì họ không chỉ tính phần họ tự đốt xăng. **Họ phải tính cả phần thuê ngoài.** Vận chuyển thuê ngoài — là nằm ở chỗ mình.*
>
> ***Em không có đề xuất gì chi tiết ở đây cả*** *— em chỉ nghĩ đây là thứ **thời gian tới mình nên nhìn tới**. Vì dữ liệu để tính ra con số đó thì mình đang có sẵn: quãng đường, loại xe, thời gian."*

🎬 **GHI CHÚ SÂN KHẤU**
- Đoạn *"em nghĩ chuyện này còn xa — nhưng không xa đâu"* là **chỗ lật của slide**. Chậm lại, đổi giọng.
- Câu **"em không có đề xuất gì chi tiết"** phải nói, để không thành hứa thay bộ phận khác. Nói xong dừng, đừng sa đà vào cách làm.

---

## SLIDE 8 · Xe điện: cuộc chơi quyết ở thời gian nạp — 2 phút 30

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Xe điện — cuộc chơi quyết ở thời gian nạp**
- **Dải mốc chữ nhỏ trên cùng:** Thị phần taxi công nghệ VN Q1/2026 — Green SM 54,51% · Grab 40,92% · Be 4,57%. Giao hàng 2 bánh 6/2026: ba bên chênh nhau chưa tới 1 điểm %
- **Khối 1 — Thẩm Quyến:**
  - Hơn **1.000 trạm siêu sạc** · hơn **487.000 trụ sạc**
  - **Thành phố đầu tiên trên thế giới có số trạm sạc vượt số trạm xăng**
  - Trụ nhanh nhất **600 kW** — *"một giây một kilômét"*
  - Trên nền đó: **~99% trong 21.689 taxi** của thành phố là xe điện
  - 👉 **Hạ tầng trước, lệnh cấm sau**
- **Khối 2 — Hà Nội, đã hiệu lực:**

| Mốc | Phạm vi vùng phát thải thấp |
|---|---|
| **1/7/2026** *(đang áp dụng)* | **9 phường** vành đai 1: Hoàn Kiếm · Ba Đình · Cửa Nam · Hai Bà Trưng · Ô Chợ Dừa · Văn Miếu–Quốc Tử Giám · Giảng Võ · Ngọc Hà · Tây Hồ |
| **1/1/2028** | Toàn vành đai 1 + một phần vành đai 2 |
| **1/1/2030** | Vào vành đai 3 — tổng **36 phường/xã** |

  - Trong vùng: xe máy xăng hạn chế **theo khung giờ và khu vực**; **xe hành nghề trên nền tảng ứng dụng không được phép hoạt động**
- **Khối 3 — Đổi pin ở VN:** V-Green đã lắp **4.500 trạm**, mục tiêu **45.000 tủ** · VinFast **9.000đ/lần** *(miễn phí tối đa 20 lần/tháng tới giữa 2028)* · Selex **14.000đ/lần**, xe lắp 3 pin đi ~150km
- Chân slide: *Nguồn: Cổng TTĐT TP Thẩm Quyến · Nhân Dân Nhật Báo · Nghị quyết vùng phát thải thấp Hà Nội · tổng hợp báo VN 2026*

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** `08_Duong-pho-Tham-Quyen-toan-xe-dien.jpg` — làm nền khối 1. Đây là ảnh thật của đoàn, rất hợp vì nó chứng minh đúng luận điểm bằng mắt thường.
- ✅ **Đã có (phụ):** `08b_Noi-that-xe-dien-man-hinh-dieu-khien.jpg`
- 🔍 **Nên tìm (2–3 ảnh, đây là slide thiếu ảnh nhiều nhất):**
  1. **Trạm siêu sạc ở Thẩm Quyến** — từ khoá tiếng Trung **`深圳 超充站`**, hoặc tiếng Anh **`Shenzhen supercharging station Huawei liquid-cooled`**. Ảnh từ bài của Nhân Dân Nhật Báo [16] hoặc Cổng TTĐT TP Thẩm Quyến [15] là chuẩn nhất, có ghi nguồn được.
  2. **Bản đồ 9 phường vùng phát thải thấp Hà Nội** — nhiều báo Việt Nam đã làm infographic. Từ khoá: **`bản đồ vùng phát thải thấp Hà Nội vành đai 1`** hoặc **`infographic 9 phường vùng phát thải thấp`**. Xem bài VnExpress [18] và VietnamNet. **Ảnh này quan trọng** — một tấm bản đồ làm cả phòng hiểu ngay phạm vi, hơn hẳn đọc tên 9 phường.
  3. **Trạm đổi pin xe máy điện** — từ khoá **`trạm đổi pin V-Green`** hoặc **`trạm đổi pin Selex Motors shipper`**. Ưu tiên ảnh có shipper đang thao tác đổi pin, vì nó minh hoạ đúng ý "2 phút vs vài tiếng".
- ⚠️ B-roll `AI_Gap_DatXe_CaoDiem/ThapDiem.mp4` **không hợp slide này** *(chúng minh hoạ giá động, không phải sạc điện)* — đừng dùng.

🎙️ **LỜI NÓI**

> *"Slide này em nói trước một câu: **phần thị phần thì nhiều anh chị ở đây nắm rõ hơn em.** Em để một dòng làm mốc rồi đi tiếp.*
>
> *(chỉ lên dải mốc, nói nhanh) Quý I năm nay Green SM 54,5%, Grab gần 41%, Be 4,5%. [3] Mảng giao hàng 2 bánh tháng 6 thì ba bên gần như ngang nhau. [5] Hết phần đó.*
>
> ***Cái em muốn nói là thứ đứng sau con số đó.***
>
> *Ở Thẩm Quyến, ra đường là thấy xe điện — như tấm ảnh này tụi em chụp. Lúc đầu tụi em nghĩ do nhà nước cấm xe xăng. Nhưng tra kỹ thì không hẳn.*
>
> *Thành phố đó có **hơn 1.000 trạm siêu sạc và hơn 487.000 trụ sạc**. Và đây mới là con số làm em dừng lại: **Thẩm Quyến là thành phố đầu tiên trên thế giới có số trạm sạc nhiều hơn số trạm xăng.** [15][16] Trụ nhanh nhất là 600 kW — họ quảng cáo là **«một giây một kilômét»**. [16]*
>
> *Trên cái nền đó thì gần như **toàn bộ hơn 21.000 taxi** của thành phố mới chạy điện được. [17]*
>
> ***Ý em là: chính sách chỉ ép người ta mua xe điện thôi. Còn một đội xe chạy dịch vụ chỉ thật sự vận hành được khi nạp điện nhanh gần bằng đổ xăng.*** *Họ làm hạ tầng trước rồi mới cấm, không phải ngược lại.*
>
> *(chuyển) **Giờ nói về mình.***
>
> *Cái này không còn là chuyện bên Trung Quốc nữa. **Từ mùng 1 tháng 7 năm nay, Hà Nội đã áp dụng vùng phát thải thấp** ở 9 phường trong vành đai 1 — Hoàn Kiếm, Ba Đình, Hai Bà Trưng, Tây Hồ, mấy phường trung tâm. [18]*
>
> *Trong vùng đó xe máy xăng bị hạn chế theo khung giờ và khu vực. Và có một dòng liên quan trực tiếp tới mình: **xe hành nghề trên nền tảng ứng dụng thì không được phép hoạt động.** [18]*
>
> *Lộ trình còn tiếp: **2028** mở rộng ra cả vành đai 1 và một phần vành đai 2. **2030** vào tới vành đai 3, tổng 36 phường xã. [18]*
>
> *Song song đó mạng đổi pin cũng khác trước nhiều rồi — V-Green lắp xong 4.500 trạm đầu tiên [19], Selex thì làm riêng cho nhóm shipper, xe lắp 3 viên pin đi được khoảng 150 km [20].*
>
> ***Đổi pin mất khoảng 2 phút. Sạc mất vài tiếng.*** *Với một người chạy ăn theo đơn thì khác biệt đó không nằm ở tiền điện — nó nằm ở **số đơn chạy được trong một ca**.*
>
> *Phần em tới đây thôi. Em gửi lại anh Sâm ạ."*

🎬 **GHI CHÚ SÂN KHẤU**
- **Câu mở đầu thừa nhận là bắt buộc.** Kể thị phần như phát hiện mới thì mất phòng ngay.
- Dải mốc thị phần: nói trong **10 giây**, không dừng, không giải thích.
- **Đã bỏ** hai câu hỏi dành riêng cho Vận hành so với bản trước — **chuyển xuống Q&A** để dùng khi phòng im.

---

# PHẦN C — SÂM · Chốt bài

---

## SLIDE 9 · Robotaxi và ba xu hướng — 1 phút 30 + Q&A 3 phút 15

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Không chỉ ở Trung Quốc — đây là cuộc đua toàn cầu**
- Ba mốc:
  - **Thẩm Quyến, 31/10/2025** — Pony.ai được cấp **giấy phép robotaxi không người lái thương mại trên toàn thành phố**, triển khai đầu ở **Nanshan** *(đúng khu đoàn mình tới)*
  - **31/8/2026** — Didi mở **thử nghiệm chở khách hoàn toàn không người lái** với robotaxi R2, đặt ngay trong app Didi, tại Bắc Kinh và Quảng Châu
  - **10/9/2026, cùng một ngày** — WeRide lấy giấy phép L4 đầu tiên của Tây Ban Nha *(Madrid, với Uber)* · Pony.ai chạy chuyến không người lái có khách **đầu tiên của châu Âu** *(Zagreb, với Verne)*
- Khối chốt chữ to: **11 chuyến xe · 5 ngày · 3 xu hướng — cá nhân hoá · điện khí hoá · tự động hoá**
- Dòng cuối: *Cả ba đang diễn ra ở Việt Nam rồi — chỉ là mình chưa gọi tên*
- Chân slide: *Nguồn: PR Newswire 31/10/2025 · Unite.AI · Euronews 18/9/2026*

🖼️ **HÌNH / VIDEO**
- ✅ **Đã có:** `09_Robotaxi-ban-dem-so-hieu-4484.jpg` — ảnh thật của đoàn, để lớn.
- ✅ **Đã có:** video robotaxi trên Drive (link ở đầu file) — **chỉ chiếu nếu còn dư giờ**, vì Q&A nằm trong 20 phút.
- 🔍 **Nên tìm (1 ảnh):** ảnh robotaxi Pony.ai hoặc Didi R2 nhìn rõ cụm cảm biến trên nóc.
  - Từ khoá: **`Pony.ai robotaxi Shenzhen`** · **`DiDi GAC Aion R2 robotaxi`**
  - Bộ ảnh báo chí trong thông cáo của Pony.ai [21] và bài Gasgoo [23] dùng được, có ghi nguồn.
  - Mục đích: đặt cạnh ảnh 4484 của đoàn để cho thấy *"cái tụi em thấy ngoài đường chính là loại xe này"*.

🎙️ **LỜI NÓI**

> *"Cảm ơn Bình. Em chốt bằng một chuyện cuối.*
>
> *Tấm ảnh này tụi em chụp buổi tối ở Thẩm Quyến — chiếc xe có cụm cảm biến trên gương, nhìn dáng là robotaxi.*
>
> **✋ *«Em hỏi cả phòng câu cuối cho vui: ngay bây giờ dưới sảnh có một chiếc xe không người lái, đi miễn phí. Ai dám lên giơ tay ạ?»*** *(đếm tay, cười)*
>
> *Chuyện này đang đi nhanh hơn mình nghĩ.*
>
> ***Ngay tại Thẩm Quyến***, *cuối năm ngoái Pony.ai đã được cấp phép chạy robotaxi không người lái thương mại **trên toàn thành phố**. Khu triển khai đầu là **Nanshan** — đúng khu đoàn mình tới hôm đi DJI. [21]*
>
> ***Didi cũng đã vào cuộc***: *từ cuối tháng 8 vừa rồi họ mở thử nghiệm chở khách hoàn toàn không người lái ở Bắc Kinh và Quảng Châu — đặt **ngay trong app Didi**, cùng chỗ mình đặt xe bình thường. [22]*
>
> ***Và nó đang ra khỏi Trung Quốc rất nhanh*** *— riêng ngày 10 tháng 9 vừa rồi, cùng một ngày: WeRide lấy giấy phép đầu tiên của Tây Ban Nha ở Madrid, còn Pony.ai chạy chuyến không người lái có khách **đầu tiên của cả châu Âu** ở Zagreb, Croatia. [24]*
>
> *(dừng, chuyển giọng chốt)*
>
> ***11 chuyến xe trong 5 ngày, mà đụng vào đúng ba thứ đang thay đổi cả ngành:*** *trải nghiệm ngày càng **cá nhân hoá** — app nói trước khi mình kịp hỏi. Đội xe ngày càng **chạy điện**. Vận hành ngày càng **tự động**.*
>
> ***Cả ba đang diễn ra ở Việt Nam rồi. Chỉ là mình chưa gọi tên thôi.***
>
> *Tụi em xin dừng ở đây. Mọi người có câu hỏi gì không ạ?"*

🎬 **GHI CHÚ SÂN KHẤU**
- **Sửa so với deck cũ:** deck đang ghi *"cùng ngày, cả hai qua Uber"* — **sai**. Madrid qua Uber, Zagreb với **Verne**. Mốc Didi R2 là **31/8/2026**, không phải "cuối 2025".
- Nếu đã trễ: bỏ hẳn đoạn Madrid/Zagreb, giữ Thẩm Quyến + câu chốt.
- Mở Q&A xong thì **im lặng, nhìn quanh phòng**. Đừng lấp bằng lời.

---

## 💬 Q&A — 3 phút 15 (nằm trong 20 phút)

**Nếu phòng im quá 5 giây, tự mồi bằng một trong ba câu này** — chọn theo ai đang ngồi dưới:

- *(chung cho cả phòng)* **"Trong mấy thứ tụi em kể — app nói trước khi khách kịp hỏi, cho tài xế thấy đủ số, đo phát thải trên đơn — mọi người thấy cái nào hợp với cách mình đang làm nhất?"**
- *(nếu có Vận hành)* **"Anh chị bên Vận hành cho em hỏi: một ca chạy, tài xế mình mất bao nhiêu thời gian cho việc nạp năng lượng? Mình có đang đo cái đó không ạ?"**
- *(nếu có CS)* **"Khiếu nại của tài xế mình, bao nhiêu phần là do không hiểu cách tính tiền, chứ không phải do sai tiền thật?"**

**Quản lý thời gian Q&A:** nhận tối đa **3 câu hỏi**. Tới câu thứ 3 thì nói *"câu này là câu cuối vì tụi em hết giờ rồi, ai còn thắc mắc thì gặp tụi em sau nhé"*.

---

# PHỤ LỤC

## Bảng thời lượng — tổng 20 phút, đã gồm Q&A

| Slide | Người | Thời lượng |
|---|---|---|
| 1 · Mở đầu | Sâm | 0'45 |
| 2 · Didi lớn cỡ nào | Sâm | 1'00 |
| 3 · Mười hạng xe | Sâm | 2'45 |
| 4 · App nói trước | Sâm | 2'30 |
| 5 · Đèn đỏ | Bình | 2'15 |
| 6 · Phía tài xế | Bình | 1'15 |
| 7 · Carbon | Bình | 2'15 |
| 8 · Xe điện | Bình | 2'30 |
| 9 · Robotaxi + chốt | Sâm | 1'30 |
| **Tổng nói** | | **16'45** |
| **Q&A** | | **3'15** |
| **TỔNG** | | **20'00** |

**Chia việc:** Sâm ~8'30 · Bình ~8'15 — gần như cân nhau.

**Nếu đang chạy trễ, cắt theo thứ tự này:** ① đoạn Madrid/Zagreb ở slide 9 · ② đoạn 29→27% ở slide 6 · ③ đoạn "Priority / Comfort" ở slide 3 · ④ mẹo tra địa chỉ ở slide 3.
**Giữ bằng mọi giá:** slide 3 (ảnh 10 hạng xe) · slide 4 (hai màn hình) · slide 5 (dữ liệu sẵn có) · khối Hà Nội ở slide 8 · câu chốt slide 9.

## 4 điểm tương tác — đừng thêm nữa

| Slide | Câu hỏi | Thời lượng |
|---|---|---|
| 1 | Ai từng tự đi lại ở nước không nói được tiếng bản địa? *(chỉ đếm tay)* | 15 giây |
| 3 | App mình có mấy mức giá? Đoán Didi có mấy? | 30 giây |
| 5 | App lấy dữ liệu đèn đỏ từ đâu? | 20 giây |
| 9 | Ai dám lên xe không người lái? *(chỉ đếm tay)* | 15 giây |

**Mẹo:** chờ đúng **3 giây**. Quá 5 giây không ai nói thì tự trả lời rồi đi tiếp. Gọi tên cụ thể hiệu quả hơn hỏi cả phòng.

## Việc cần làm với deck

| # | Việc | Slide |
|---|---|---|
| 1 | Dựng lại còn **9 slide**; ghi tên người trình bày ở góc mỗi slide | toàn bộ |
| 2 | **Xoá** slide "Một chuyến đi, năm bước" | – |
| 3 | **Viết lại slide 3** quanh ảnh `03b` — 10 hạng xe, đầy đủ chú thích có mũi tên | 3 |
| 4 | Gộp slide chờ xe + slide carbon cũ thành slide 4, **2 ảnh cạnh nhau**, khoanh 3 dòng chữ cần chú ý | 4 |
| 5 | Thêm 3 slide mới phần Bình: đèn đỏ · hoá đơn tài xế · carbon | 5–7 |
| 6 | Viết lại slide xe điện: thị phần rút còn dải mốc chữ nhỏ; nội dung chính là hạ tầng sạc + vùng phát thải thấp Hà Nội + đổi pin | 8 |
| 7 | Thay "550tr user / 400 thành phố" → "hơn 55 triệu cuốc/ngày" | 2 |
| 8 | Cập nhật thị phần sang số Q1/2026 | 8 |
| 9 | Sửa "cả hai qua Uber" → Madrid = Uber, Zagreb = Verne; mốc Didi R2 = 31/8/2026 | 9 |
| 10 | **Thống nhất "5 ngày · 24–28/08"** — bìa deck đang ghi "4 ngày · 24–27.08" | bìa |
| 11 | **Ẩn 3 con số sau nút bấm:** "Mười" (hạng xe) · "không đấu nối" · "Có" (hoá đơn tài xế) | 3, 5, 6 |
| 12 | Ghi nguồn chữ nhỏ ở chân **mỗi** slide có số liệu | 2,3,5,6,7,8,9 |

## Chuẩn bị cho câu hỏi khó

| Nếu bị hỏi | Trả lời |
|---|---|
| "Thị phần thì bọn anh biết rồi, có gì mới không?" | Chuyển ngay sang vùng phát thải thấp Hà Nội — 9 phường đã hiệu lực từ 1/7/2026, xe nền tảng ứng dụng chạy xăng không được hoạt động trong vùng. |
| "Vùng phát thải thấp cấm theo khung giờ nào?" | Nghị quyết ghi "theo khung giờ hoặc khu vực", **chưa công bố khung giờ chi tiết**. Không suy đoán. |
| "Số 68% giảm khiếu nại có đáng tin?" | Didi tự công bố qua kênh công đoàn, không phải số kiểm toán. Nói đúng như vậy. |
| "Vậy cụ thể mình làm gì với chuyện carbon?" | "Em mới dừng ở mức nêu hướng, chưa bàn với ai và chưa có kế hoạch. Bước đầu chắc chỉ là xem mình đã có sẵn dữ liệu gì." |
| "Didi tính cước thế nào?" | Theo tài liệu Trung Quốc: hạng Standard 快车 mở cửa ~11–12 tệ, ~1,9–2,6 tệ/km, ~0,38–0,40 tệ/phút; hạng Comfort 优享 mở cửa ~13,5–15 tệ, ~2,3–3,0 tệ/km. Giá khác nhau theo thành phố. [6][7] |
| "Didi có vào Việt Nam không?" | Chưa. Họ đang dồn lực cho Brazil và Mexico. |
| "Robotaxi bao giờ tới Việt Nam?" | Chưa có khung pháp lý cho xe tự lái thương mại. Đáng theo dõi hơn là đáng lên kế hoạch. |
| "Didi ghép đơn bằng thuật toán gì?" | Họ có công bố nghiên cứu: khung ghép đơn bằng AI tên **GenMatch**, đã chạy ở 5 thành phố thuộc thị trường quốc tế; và **DiMA** — trợ lý gọi xe bằng câu nói tự nhiên, đọc giao thông và thời tiết lúc đó. [25][26] Nói rõ là đọc trong paper, không kiểm chứng được. |
| "Giá Didi rẻ hơn Grab bao nhiêu?" | Không so trực tiếp được — khác thị trường, khác cơ cấu chi phí. Chỉ so **cách phân tầng giá**, đừng so số tuyệt đối. |

---

## NGUỒN TRÍCH DẪN

**Quy mô & tài chính Didi**
- **[1]** [Didi quý II/2026: hơn 55 triệu đơn/ngày, 5,052 tỷ đơn (+13,2%), GTV lõi 133,9 tỷ NDT (+22,2%) — BigGo Finance](https://finance.biggo.com/news/806884eb-f12d-4346-8047-e6d1d30713a5)
- **[2]** [Didi có lãi trở lại quý II nhưng lỗ nửa đầu 2026 do mở rộng quốc tế — Caixin Global, 14/8/2026](https://www.caixinglobal.com/2026-08-14/didi-swings-to-quarterly-profit-but-overseas-push-weighs-on-first-half-results-102474321.html)
- Bổ sung: [Doanh thu quý II 62,52 tỷ NDT, lãi ròng 866 triệu NDT — Simply Wall St](https://simplywall.st/stocks/us/transportation/otc-didi.y/didi-global/news/didi-global-didiy-is-up-136-after-posting-a-quarterly-profit) · [Quan hệ nhà đầu tư Didi](https://ir.didiglobal.com/)

**Thị trường Việt Nam**
- **[3]** [Thị phần taxi công nghệ Q1/2026 (Mordor Intelligence): Green SM 54,51% · Grab 40,92% · Be 4,57%; GMV 580,71 triệu USD; 153,26 triệu chuyến — VnEconomy](https://vneconomy.vn/automotive/thi-truong-taxi-viet-quy-i2026-xe-xanh-ap-dao-tai-cau-truc-thi-phan.htm)
- **[4]** [Chi tiết GMV và số chuyến Q1/2026 — Tuổi Trẻ](https://tuoitre.vn/khoahocphothong/green-sm-tiep-tuc-dan-dau-thi-truong-goi-xe-taxi-viet-nam-trong-quy-i-2026-104265971.htm)
- **[5]** [Giao hàng 2 bánh 6/2026: Green SM Express ~33,7% · Grab ~33,26% · Be ~33,04% GMV — CafeBiz](https://cafebiz.vn/green-sm-express-vuot-grab-be-ve-thi-phan-gmv-giao-hang-xe-hai-banh-176260724103344156.chn)

**Bảng giá Didi** *(chỉ dùng nếu bị hỏi — số chính thức của slide 3 là ảnh chụp màn hình thật)*
- **[6]** [Quy tắc tính cước 快车 / 优享 — 汽车之家](https://www.autohome.com.cn/ask/456110.html)
- **[7]** [Phân loại các hạng xe của Didi — 网约车指南](https://www.eycen.com/post/55.html) · [优享 vs 专车 — 太平洋汽车](https://www.pcauto.com.cn/jxwd/1860/18609643.html)

**Đèn đỏ đếm ngược (Amap)**
- **[8]** [Amap công bố chính thức tính năng đếm ngược đèn đỏ, phủ hơn 80.000 nút giao — Tân Hoa Xã](http://www.news.cn/tech/20220815/fb3ad5003d834046b7c4d0d2e1f7c2a3/c.html)
- **[9]** [Cơ chế thật: suy ra chu kỳ đèn từ dữ liệu quỹ đạo xe, không đấu nối hệ thống đèn — 泰伯网](https://www.taibo.cn/p/90332)

**Hoa hồng & hoá đơn minh bạch cho tài xế**
- **[10]** [Didi hạ trần hoa hồng 29% → 27%, công khai giá toàn trình — IT之家, 5/2026](https://www.ithome.com/0/947/975.htm)
- **[11]** [Hoá đơn minh bạch trong app tài xế; khiếu nại về hoa hồng tại Bắc Kinh giảm 68% — Báo Công đoàn Trung Quốc / Nhân Dân, 6/2026](http://acftu.people.com.cn/n1/2026/0601/c67502-40731411.html)

**Cơ chế carbon**
- **[12]** [Nền tảng lượng hoá hành vi xanh; sản phẩm carbon của Didi phủ 298 thành phố — 21世纪经济报道, 6/2026](https://m.21jingji.com/article/20260618/herald/267c9983aa2ee5d8b4ee9a785089a8f9.html)
- **[13]** [Hệ thống 碳普惠 của Thẩm Quyến — 碳中和网](https://www.ccn.ac.cn/carbon-market/carbon-inclusion/1807.html)

**Kiểm kê khí nhà kính Việt Nam**
- **[14]** [Quyết định 42/2026/QĐ-TTg ban hành 10/8/2026, hiệu lực 25/9/2026; 2.441 cơ sở phải kiểm kê, tăng 275; có lĩnh vực giao thông vận tải — VnEconomy](https://vneconomy.vn/nam-2026-them-hang-tram-co-so-phat-thai-khi-nha-kinh-phai-thuc-hien-kiem-ke.htm)
- Bổ sung: [Kiểm kê khí nhà kính thành yêu cầu bắt buộc — VTV](https://vtv.vn/kiem-ke-khi-nha-kinh-thanh-yeu-cau-bat-buoc-doanh-nghiep-can-ra-soat-gi-100260627085945544.htm) · [Danh mục lĩnh vực & cơ sở — Cục Biến đổi khí hậu](http://www.dcc.gov.vn/tin-tuc/4033/Ban-hanh-danh-muc-linh-vuc,-co-so-phat-thai-khi-nha-kinh-phai-thuc-hien-kiem-ke-khi-nha-kinh.html)

**Hạ tầng sạc & điện khí hoá Thẩm Quyến**
- **[15]** [1.057 trạm siêu sạc, hơn 487.000 trụ sạc; đầu tiên thế giới vượt trạm xăng — Cổng thông tin Chính quyền TP Thẩm Quyến](https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12322460.html)
- **[16]** [Trạm siêu sạc nhiều hơn trạm xăng; trụ Huawei 600kW "một giây một km" — Nhân Dân Nhật Báo](https://www.peopleapp.com/column/30047064794-500005852700)
- **[17]** [~99% trong 21.689 taxi của Thẩm Quyến là xe điện — Shenzhen Bus Group](https://en.szbus.com.cn/about_us_1/5.html)
- Bổ sung: [1,162 triệu xe năng lượng mới; 100 xe bán ra thì 75 là xe năng lượng mới — Sở Phát triển & Cải cách TP Thẩm Quyến](https://fgw.sz.gov.cn/ztzl/qtztzl/cczc/jscx/content/post_11740321.html)

**Vùng phát thải thấp Hà Nội**
- **[18]** [9 phường từ 1/7/2026; lộ trình 2028 và 2030; xe hành nghề trên nền tảng ứng dụng không được hoạt động — VnExpress](https://vnexpress.net/ha-noi-cam-xe-may-xang-trong-vanh-dai-1-theo-khung-gio-tu-1-7-2026-4986524.html)
- Bổ sung: [HĐND TP Hà Nội thông qua 100% — VietnamNet](https://vietnamnet.vn/tu-1-7-2026-ha-noi-cam-xe-may-xang-tai-mot-so-khu-vuc-vanh-dai-1-theo-khung-gio-2466925.html) · [Chưa cấm toàn bộ xe máy xăng — Tuổi Trẻ](https://tuoitre.vn/ha-noi-chua-cam-toan-bo-xe-may-xang-di-vao-vanh-dai-1-tu-1-7-2026-2026040707583458.htm)

**Hạ tầng đổi pin Việt Nam**
- **[19]** [V-Green 4.500 trạm đã lắp, mục tiêu 45.000 tủ; VinFast 9.000đ/lần, miễn phí tối đa 20 lần/tháng tới giữa 2028; Honda mở trạm tại HEAD từ 4/2026 — Kinh tế Chứng khoán](https://kinhtechungkhoan.vn/loat-xe-dien-doi-pin-bung-no-thi-truong-2026-vinfast-phu-tram-day-honda-tao-soc-voi-pin-0-dong-1424386.html)
- **[20]** [Selex Camel nhắm nhóm shipper, lắp 3 pin đi ~150km, phí đổi 14.000đ/lần — Người Đưa Tin](https://www.nguoiduatin.vn/danh-sach-xe-may-dien-doi-pin-tai-thi-truong-viet-nam-204260807045002722.htm)

**Robotaxi**
- **[21]** [Pony.ai được cấp giấy phép robotaxi không người lái thương mại toàn thành phố Thẩm Quyến, 31/10/2025; triển khai đầu ở Nanshan, Tiền Hải, Bảo An — PR Newswire](https://www.prnewswire.com/news-releases/ponyai-granted-shenzhens-first-citywide-permit-for-fully-driverless-commercial-robotaxi-operations-302600723.html)
- **[22]** [Didi mở thử nghiệm chở khách không người lái với R2 tại Bắc Kinh và Quảng Châu, 31/8/2026 — Unite.AI](https://www.unite.ai/didi-starts-driverless-trials-with-r2-robotaxi-in-beijing-and-guangzhou/)
- **[23]** [GAC Aion × Didi giao lô R2 đầu tiên 23/1/2026, 33 cảm biến, phần mềm L4 — Gasgoo](https://autonews.gasgoo.com/articles/icv/gac-aion-didi-move-robotaxi-closer-to-scale-with-first-delivery-of-r2-fleet-2014651311117410305)
- **[24]** [10/9/2026: WeRide lấy giấy phép L4 đầu tiên của Tây Ban Nha (Madrid, với Uber); Pony.ai chạy chuyến không người lái có khách đầu tiên của châu Âu (Zagreb, với Verne) — Euronews, 18/9/2026](https://www.euronews.com/next/2026/09/18/from-madrid-to-zagreb-europes-autonomous-vehicles-are-multiplying)

**Thuật toán ghép đơn** *(chỉ dùng nếu bị hỏi)*
- **[25]** [GenMatch — khung ghép đơn sinh end-to-end, triển khai ở 5 thành phố thuộc thị trường quốc tế của Didi — arXiv 2608.19751](https://arxiv.org/abs/2608.19751)
- **[26]** [DiMA — trợ lý gọi xe dùng LLM của Didi — arXiv 2503.04768](https://arxiv.org/html/2503.04768v3)
