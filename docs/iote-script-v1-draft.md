# SCRIPT TRÌNH BÀY — "Một ngày ở IOTE: AI bước ra khỏi màn hình"

**Bản v3 (24/09/2026). Script viết theo đúng 7 trang của ghim IOTE trên bản đồ, cũng là 7 trang ở `/iote/`.**

> **Cập nhật v3 (24/09/2026):** (1) Ghim IOTE trên bản đồ (bản của VinhTien) là **bản chính**. `/iote/` chạy đúng dãy trang của ghim (`ioteSlides()` trong `src/data/deck.ts`). (2) Từ bản 5 slide cũ chỉ giữ slide **"AI là máy móc"**, đặt ở trang 5. Các slide Mở đầu, Quy mô, Hàng bán sẵn và Mang về đã gỡ khỏi deck. Nội dung cũ vẫn còn trong git, commit `dd08524`. (3) Lời nói viết lại cho cả 7 trang. Câu hỏi mở đầu giữ nguyên, chuyển sang trang 1, đáp án vẫn ở trang "AI là máy móc". (4) Trang "Bốn hall" giờ nằm trong mạch chính, không còn là slide dự phòng. Chủ đề từng hall vẫn **chưa có nguồn chính thức** (xem 🔎 ở trang 2). (5) Ý "máy quét cầm tay bên trong là Android" không còn trên slide, chuyển sang Q&A.

> **Lịch sử:** v2 (23/09) cắt từ 7 xuống 5 slide, thêm ảnh robot bán kem và hai ảnh minh hoạ thiết bị. v2.1 (23/09) chốt ngày trình bày, sửa chi tiết máy bán kem (chọn vị trên màn hình, trả bằng Alipay).


|                     |                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| **Người trình bày** | **Tiến**                                                                                         |
| **Ngày trình bày**  | **24/09/2026**                                                                                   |
| **Thời lượng**      | **5–10 phút**. Phần nói khoảng **7'10** (khoảng 1.000 chữ). Còn lại là Q&A                        |
| **Khán giả**        | **Toàn thể nhân viên Ahamove**                                                                   |
| **Chuyến đi**       | 24–28/08/2026 · Thẩm Quyến · IOTE là **ngày thứ ba**, đoàn đi trọn một ngày                      |
| **Xưng hô**         | "em" với phòng · "mình" với công ty/đoàn                                                         |
| **Số trang**        | **7**, mở từ ghim IOTE trên bản đồ hoặc ở `/iote/`                                               |


**Cách đọc file:** mỗi trang có 4 khối:
🖥️ **TRÊN SLIDE** · 🖼️ **HÌNH / VIDEO** · 🎙️ **LỜI NÓI** · 🎬 **GHI CHÚ SÂN KHẤU**.
Số `[n]` là nguồn, danh sách ở cuối file. Ô 🔎 ghi chỗ nào đã kiểm tra, chỗ nào chưa.

> **Về lời nói:** tiếng Việt nói khoảng 140 chữ/phút. Đọc vài lần để thuộc *ý*, không cần học thuộc từng chữ. Chỗ in đậm là chỗ không được bỏ.

> **Về cách gọi tên:** lời nói dẫn ý của Công, Quân, Sâm và Bình bằng tên. Tiến tự thêm "anh"/"chị" theo cách thường gọi trong công ty.

> ⚠️ **Khán giả là toàn công ty, không riêng Vận hành hay Tech.** Slide có sẵn chữ NFC, RFID, hub, same-day. Lời nói **giải thích ngay lần đầu nhắc tới**, sau đó mới dùng tên. Không đọc các thuật ngữ khác trên slide (UWB, RTLS, LoRa, LLM, AMR…).

> ⚠️ **Không mô tả quy trình hiện tại của Ahamove.** Trang 4 là đề xuất. Lời nói chỉ nói "có thể làm thế này", không nói "hiện tài xế mình đang làm thế kia".

---

## 🧭 MẠCH BÀI

**Mạch:** *quy mô + câu hỏi* → *bốn khu như đường đi một món hàng* → *đi sâu Hall 9* → *liên hệ Ahamove* → *đáp án: AI là máy móc* → *hình ảnh và câu chốt* → *gợi ý ghé thăm, vào Q&A*.

| # | Trang | Vai trò | Thời gian |
|---|---|---|---|
| 1 | **Tổng quan**: Bốn khu trưng bày về công nghệ IoT | IOTE là gì, lớn cỡ nào. Gài câu hỏi cho trang 5 | 1'10 |
| 2 | **Bốn khu trưng bày, bốn nhóm chủ đề** | Một hình ảnh dễ nhớ: đi hết bốn khu = đi theo một món hàng | 0'50 |
| 3 | **Hall 9 · Cùng một con chip. Khác tầm đọc.** | Giải thích NFC và RFID bằng lời thường | 1'20 |
| 4 | **Hall 9 · Chạm ở hai đầu. Quét cả loạt ở giữa.** | Đề xuất cho Ahamove, kèm ba câu phải trả lời trước | 1'30 |
| 5 | **AI ở IOTE là máy móc, không phải màn hình.** | Đáp án câu hỏi ở trang 1 | 1'10 |
| 6 | **Robot và thiết bị AI tại IOTE.** (ảnh của đoàn) | Hình ảnh thật + câu chốt | 0'35 |
| 7 | **Nếu bạn ghé IOTE** | Mở vào Q&A | 0'25 |
| | **Tổng phần nói** | | **khoảng 7'10** |

---

## 📦 Media

| File | Loại | Nội dung | Dùng ở |
|---|---|---|---|
| `iote.jpg` | Wikimedia, CC BY-SA 4.0 · Dinkun Chen | Hành lang có mái che dọc các hall, thấy lối vào hall 8 | Trang 1 |
| `iote-2.jpg` | Wikimedia, CC BY-SA 4.0 · Lhzss8 | Sảnh vào phía bắc | Trang 2 |
| `hall9/nfc-alipay-tap-terminal-china.jpg`, `hall9/rfid-uhf-inlay-textile-label-peeled.jpg` | Wikimedia, ảnh minh hoạ, không chụp tại IOTE | Đầu đọc Alipay "碰一下", tem RFID bóc hở thấy anten | Trang 3 |
| `hall9/iote-hall9-rfid-tags.jpg`, `hall9/iote-hall9-xcc.jpg` | **Ảnh của đoàn** tại Hall 9 | Booth tem dán RFID, booth XCC RFID | Trang 3 |
| `hall9/nfc-tag-bus-stop-tap-phone.jpg`, `rfid-portal-pallet-gate.jpg`, `rfid-handheld-inventory-warehouse.jpg`, `nfc-phone-tap-pos-terminal.jpg` | Wikimedia, ảnh minh hoạ | Thẻ NFC dán sẵn, cổng đọc RFID, súng đọc kiểm kho, chạm điện thoại | Trang 4 |
| `iote-robot-icecream.jpg` | **Ảnh của đoàn**, 26/08/2026 11:19 | Cánh tay robot trong máy bán kem đặt ly kem lên khay | **Trang 5 — chủ lực** |
| `iote-team-1.jpg` | **Ảnh của đoàn** | Booth TunStar, khẩu hiệu 让AI走出屏幕，感知真实世界 | Trang 5, trang 6 |
| `iote-robot-bar.mp4` (22 giây, dọc) | **Clip của đoàn** | Cánh tay robot lấy đồ uống từ dãy chai treo ngược | Trang 6 |
| `iote-team-6.jpg` | **Ảnh của đoàn** | Bảng cảm ứng ở một booth: "Xin chào Ahamovers" | Trang 6 |
| `iote-team-2/3/4/5.jpg` | **Ảnh của đoàn** | Booth CTONE, ZNV, XCC; đoàn giữa lối đi | Trang 6 |

Giấy phép đầy đủ của mọi ảnh Wikimedia ở `public/media/places/SOURCES.md`.

---

## TRANG 1 · Tổng quan — 1 phút 10

🔎 *Số liệu đã đối chiếu với trang giới thiệu chính thức của ban tổ chức [1] ngày 23/09/2026: 80.000 m², 1.000+ doanh nghiệp (展商), 100.000+ lượt khách chuyên ngành. Đây là số ban tổ chức **tự công bố**. 19 hall và 400.000 m² lấy từ hồ sơ trung tâm hội chợ trên AIPC [2].*

🖥️ **TRÊN SLIDE**

- Kicker: IOTE · Triển lãm IoT quốc tế lần thứ 25
- Tiêu đề: **Bốn khu trưng bày về công nghệ IoT.**
- Đoạn giới thiệu: 26–28/08/2026, Trung tâm Hội chợ Quốc tế Thâm Quyến, Bảo An, 4 trong 19 khu, ngày thứ ba của chuyến đi
- Bốn ô số: **80.000 m²** diện tích IOTE · **400.000 m²** cả trung tâm · **1.000+ doanh nghiệp** · **100.000 lượt** khách chuyên ngành

🖼️ **HÌNH / VIDEO**

- ✅ `iote.jpg`, khung dọc bên trái.

🎙️ **LỜI NÓI**

> *"Ngày thứ ba của chuyến đi, đoàn mình dành trọn một ngày ở IOTE. Đây là triển lãm về những thiết bị có gắn cảm biến và kết nối mạng, người trong ngành gọi chung là IoT. Nói dễ hiểu là từ con chip, cái tem dán trên hàng, cho tới robot.*
>
> *IOTE rộng 80.000 mét vuông, cỡ 11 sân bóng đá. Hơn một nghìn doanh nghiệp mang hàng tới, và theo ban tổ chức là khoảng 100.000 lượt khách, toàn người đi tìm hàng hoặc tìm đối tác.* **Vậy mà đó mới chỉ là 4 trong 19 khu của cả trung tâm hội chợ.**
>
> **✋ *«Trước khi đi tiếp, em hỏi cả phòng một câu: ở một triển lãm công nghệ lớn của Trung Quốc năm nay, mọi người nghĩ AI xuất hiện nhiều nhất dưới dạng nào: chatbot trên màn hình, hay máy móc chạy ngoài đời thật? Ai nghĩ là chatbot giơ tay em xem.»*** *(đếm tay)*
>
> *Em giữ đáp án tới gần cuối bài."*

🎬 **GHI CHÚ SÂN KHẤU**

- "11 sân bóng": một sân 105 × 68 m ≈ 7.140 m², 80.000 ÷ 7.140 ≈ 11,2.
- Không đọc từng ô số. Câu in đậm là đủ.
- Chỉ đếm tay, **không nói đáp án**. Đáp án ở trang 5.

---

## TRANG 2 · Bốn khu trưng bày, bốn nhóm chủ đề — 50 giây

🔎 ⚠️ *Trang giới thiệu của ban tổ chức [1] **không liệt kê chủ đề của hall 9/10/11/12**. Chủ đề trên slide lấy theo ghi chép của đoàn [3]. Riêng Hall 9 đã có ảnh đoàn chụp biển "9 Hall · Gate 15" và các booth RFID/NFC. Cách kể "đi theo một món hàng" là **cách đoàn diễn giải**, lời nói phải nói rõ như vậy.*

🖥️ **TRÊN SLIDE**

- Kicker: IOTE · Đặc điểm
- Tiêu đề: **Bốn khu trưng bày, bốn nhóm chủ đề**
- Bốn thẻ:
  1. **Hall 9 · Passive IoT và thiết bị đầu cuối**: RFID, mã QR, NFC, thiết bị cầm tay cho kho vận
  2. **Hall 10 · IoT công nghiệp, cảm biến, định vị**: định vị trong nhà, theo dõi tài sản, cảm biến nhiệt ẩm và rung sốc
  3. **Hall 11 · Digital China**: nhãn giấy điện tử dùng lại, chống hàng giả, truy xuất hành trình
  4. **Hall 12 · AI tổng quát**: camera đo kiện và phát hiện hư hỏng, AI cho vận hành, robot

🖼️ **HÌNH / VIDEO**

- ✅ `iote-2.jpg`, sảnh bắc của trung tâm hội chợ.

🎙️ **LỜI NÓI**

> *"Bốn khu này chia theo nhóm công nghệ. Em không đọc hết chữ trên slide, chỉ kể theo cách đoàn thấy dễ nhớ:* **đi hết bốn khu giống như đi theo một món hàng.**
>
> *Hall 9 là chỗ món hàng được gắn "chứng minh thư": một cái tem, một mã QR, một con chip. Hall 10 trả lời câu "món hàng đang ở đâu, có bị va đập không". Hall 11 là chuyện chứng minh hàng thật, món hàng đi từ đâu tới. Còn Hall 12 là khu AI: máy tự nhìn, tự đo kiện hàng, robot tự chạy trong kho.*
>
> *Em xin đi sâu vào Hall 9, vì đó là khu gần với chuyện giao hàng của mình nhất."*

🎬 **GHI CHÚ SÂN KHẤU**

- Chỉ tay lần lượt vào bốn thẻ khi nói tới từng hall.
- Không đọc các chữ viết tắt trên thẻ (UWB, RTLS, LoRa, NB-IoT, GNSS RTK, LLM, AMR). Nếu có người hỏi thì trả lời ở Q&A.

---

## TRANG 3 · Hall 9: Cùng một con chip. Khác tầm đọc. — 1 phút 20

🔎 *Kiến thức NFC và RFID theo các nguồn ghi trong `src/data/hall9.ts` [5], VinhTien kiểm chứng ngày 24/09/2026. Alipay Tap (碰一下) ra mắt 7/2024. Chi tiết thẻ NFC trên bàn quán dim sum là ghi chép ngày 1 của Sâm [3]: chạm điện thoại vào là mở thẳng menu. Hai ảnh booth do đoàn chụp tại Hall 9. Hai ảnh lớn là ảnh minh hoạ lấy từ Wikimedia, **không chụp tại IOTE**.*

🖥️ **TRÊN SLIDE**

- Kicker: Hall 9 · NFC và RFID
- Tiêu đề: **Cùng một con chip. Khác tầm đọc.**
- Thẻ **NFC · Chạm · Vài centimet**: đọc từng thẻ một, phải chạm gần; điện thoại thường đọc được; Alipay Tap ở Trung Quốc
- Thẻ **RFID UHF · Quét cả loạt · Vài mét**: đọc hàng trăm thẻ cùng lúc, kể cả trong thùng; cần máy đọc riêng; tem rẻ khi mua nhiều, đọc kém khi sát kim loại hoặc chất lỏng
- Cột phải: hai ảnh của đoàn ở Hall 9
- Dải dưới: *Chip và anten, không có pin. Máy đọc phát sóng, thẻ "mượn" chút điện từ sóng đó để gửi lại mã của nó.*

🖼️ **HÌNH / VIDEO**

- ✅ Bốn ảnh đã có sẵn trên slide. Không cần thêm.

🎙️ **LỜI NÓI**

> *"Ở Hall 9, hai thứ gặp nhiều nhất là NFC và RFID. Tên khác nhau, nhưng bên trong giống nhau:* **một con chip nhỏ với một vòng anten, không có pin.** *Máy đọc phát sóng, cái thẻ "mượn" chút điện từ sóng đó để gửi lại mã của nó. Dòng chữ dưới cùng của slide nói đúng ý này.*
>
> *Khác nhau là ở tầm đọc. NFC là kiểu **chạm**: phải đưa sát vài centimet mới đọc được, và điện thoại bình thường đọc được luôn. Ở Trung Quốc, Alipay dùng cách này để chạm điện thoại trả tiền. Tối đầu tiên, trên bàn quán dim sum đoàn ăn cũng dán sẵn một cái thẻ như vậy: chạm điện thoại vào là mở ra thực đơn, khỏi cài app.*
>
> *RFID thì **quét cả loạt**: đứng cách vài mét vẫn đọc được hàng trăm cái tem cùng lúc, kể cả tem nằm trong thùng. Đổi lại phải có máy đọc riêng, điện thoại không làm được, và đọc kém khi sát kim loại hay chất lỏng.*
>
> *Hai ảnh bên phải là đoàn chụp ở Hall 9. Booth làm tem dán RFID lúc nào cũng kín người."*

🎬 **GHI CHÚ SÂN KHẤU**

- Câu cần người nghe nhớ: **NFC là chạm, RFID là quét cả loạt.** Có thể nói chậm lại ở hai chữ "chạm" và "quét cả loạt".
- Không giải thích chữ "UHF" trên slide.

---

## TRANG 4 · Hall 9: Chạm ở hai đầu. Quét cả loạt ở giữa. — 1 phút 30

🔎 *Đây là **đề xuất để thảo luận**, **không phải** việc Ahamove đang làm hay đã lên kế hoạch. Thứ tự "NFC trước, RFID sau" lấy theo ghi chép của đoàn [3]. Ví dụ UPS, Decathlon, Uniqlo, Zara lấy từ nguồn công khai trong `hall9.ts` [5]. ⚠️ Chữ trên thẻ "Lấy hàng" có cụm "thay cho chụp ảnh hay gọi điện", tức là đang ngầm mô tả cách làm hiện tại. Lời nói bên dưới **cố ý không nhắc tới cụm này**. Thẻ "Hub chia chọn" ghi "UPS và Delta": Delta là hãng bay, họ dùng RFID để theo dõi hành lý ở sân bay chứ không phải ở kho hàng, nên lời nói chỉ nhắc UPS.*

🖥️ **TRÊN SLIDE**

- Kicker: Hall 9 · Liên hệ Ahamove · Đề xuất để thảo luận
- Tiêu đề: **Chạm ở hai đầu. Quét cả loạt ở giữa.**
- Bốn bước: **01 Lấy hàng · NFC** · **02 Hub chia chọn · RFID** · **03 Kho same-day · RFID** · **04 Bàn giao · NFC**
- Dải: túi giữ nhiệt, thùng, xe lồng dùng lại, mỗi món một "căn cước" RFID
- Khung tối: *Thứ tự nên thử, theo ghi chép của đoàn: NFC trên điện thoại tài xế trước, RFID khi có hub đủ lớn.*
- Ba câu cần kiểm tra: tỷ lệ tài xế có điện thoại NFC · hàng làm RFID đọc kém · chi phí nằm ở máy đọc và phần mềm

🖼️ **HÌNH / VIDEO**

- ✅ Bốn ảnh minh hoạ đã có sẵn trên slide.

🎙️ **LỜI NÓI**

> *"Vậy chuyện này liên quan gì tới Ahamove?* **Em nói trước: đây là đề xuất để mọi người cùng bàn, không phải việc Ahamove đang làm.**
>
> *Tiêu đề slide tóm gọn lại: chạm ở hai đầu, quét cả loạt ở giữa. **Hai đầu** là lúc lấy hàng và lúc giao hàng. Một cái thẻ NFC dán ở quầy, hay trên túi hàng, tài xế hoặc người nhận chạm điện thoại vào là xác nhận xong, không cần mua máy gì thêm. **Ở giữa** là kho trung chuyển, nơi chia hàng, và kho giao trong ngày. Kiện hàng đi qua một cái cổng đọc là tự ghi nhận, không phải quét từng mã. Lia máy đọc qua kệ là đếm xong hàng trong vài giây. UPS, Decathlon, Uniqlo đã làm những việc này.*
>
> *Nhưng trước khi thử có ba câu phải trả lời: bao nhiêu tài xế đang dùng điện thoại có NFC, hàng đi qua kho có nhiều đồ uống, thuốc, đồ kim loại không, và chi phí thật nằm ở máy đọc với phần mềm chứ không nằm ở con tem.*
>
> *Nên thứ tự đoàn đề xuất là:* **thử cái chạm trên điện thoại tài xế trước. RFID để sau, khi có kho đủ lớn.**"

🎬 **GHI CHÚ SÂN KHẤU**

- Không hứa mốc thời gian. Không nói "Ahamove sẽ…".
- Nếu trễ giờ: bỏ câu "UPS, Decathlon, Uniqlo…".
- Dải "túi giữ nhiệt, thùng, xe lồng" không nói trong mạch chính. Để dành cho Q&A.

---

## TRANG 5 · AI ở IOTE là máy móc, không phải màn hình — 1 phút 10

🔎 *"Phần mềm và chatbot chỉ khoảng 10–20%" là **ước lượng bằng mắt của Công** khi đi khu AI, không phải số thống kê. Slide và lời nói đều phải ghi như vậy. Máy bán kem có robot là ghi chú của Sâm. Sâm xác nhận khách chọn vị trên màn hình của máy và trả bằng Alipay. Ảnh do đoàn chụp tại IOTE lúc 11:19 ngày 26/08/2026. Khẩu hiệu TunStar đọc từ ảnh đoàn chụp.*

🖥️ **TRÊN SLIDE**

- Kicker: IOTE · AI ở IOTE
- Tiêu đề: **AI ở IOTE là máy móc, không phải màn hình.**
- Khẩu hiệu lớn: **让AI走出屏幕，感知真实世界** · *"Để AI bước ra khỏi màn hình, cảm nhận thế giới thật"* · Booth TunStar
- Ô số: **10–20%**. *Ở khu AI, phần mềm và chatbot chỉ chiếm chừng này. Phần còn lại là robot và thiết bị.* · *Ước lượng bằng mắt của đoàn, không phải số thống kê.*
- Chân slide: nguồn là ghi chép và ảnh của đoàn

🖼️ **HÌNH / VIDEO**

- ✅ `iote-robot-icecream.jpg` (ảnh chính) và `iote-team-1.jpg` (booth TunStar).

🎙️ **LỜI NÓI**

> *"Giờ quay lại câu hỏi lúc đầu.* **Đáp án là máy móc.**
>
> *Công đi khu AI và ước chừng phần mềm với chatbot chỉ chiếm khoảng 10 tới 20 phần trăm. Đây là cảm nhận bằng mắt của đoàn chứ không phải số đếm, nhưng thấy rất rõ: phần còn lại là robot, là thiết bị đang chạy thật trước mặt mình.*
>
> *Ví dụ cái máy trong ảnh. Nó là máy bán kem. Khách chọn vị trên màn hình của máy, quét Alipay để trả tiền, rồi cánh tay robot bên trong tự làm kem, rắc topping và đưa ly ra. Từ lúc chọn tới lúc cầm ly, không có ai đứng bán.*
>
> *Booth TunStar treo một câu mà em nghĩ tóm được cả ngày hôm đó: "Để AI bước ra khỏi màn hình, cảm nhận thế giới thật."*
>
> **Ở Việt Nam, nói tới AI mình hay nghĩ tới ChatGPT. Ở đây, người ta đang lắp AI vào máy móc và bán cho doanh nghiệp dùng ngay."**

🎬 **GHI CHÚ SÂN KHẤU**

- Nếu ở trang 1 nhiều người chọn "chatbot": *"Phần lớn phòng mình đoán giống đoàn trước khi đi."*
- Không nói "Trung Quốc vượt xa mình" hay các câu so sánh chung chung. Chỉ kể điều đoàn thấy.

---

## TRANG 6 · Robot và thiết bị AI tại IOTE — 35 giây

🔎 *Toàn bộ ảnh và clip trên trang này do đoàn chụp tại IOTE, 08/2026.*

🖥️ **TRÊN SLIDE**

- Kicker: IOTE · Ảnh của đoàn
- Tiêu đề: **Robot và thiết bị AI tại IOTE.**
- Clip quầy robot pha chế và 6 ảnh: TunStar, "Xin chào Ahamovers", XCC, CTONE, đoàn giữa lối đi, ZNV

🖼️ **HÌNH / VIDEO**

- ✅ `iote-robot-bar.mp4`: **bấm chạy clip khi chuyển sang trang này**. Clip không có tiếng.

🎙️ **LỜI NÓI**

> *"Vài hình ảnh của đoàn trong ngày hôm đó. Quầy pha nước không có nhân viên: cánh tay robot tự lấy chai, khách đứng quanh giơ điện thoại lên quay. Có booth còn viết lên bảng cảm ứng để chào đoàn: "Xin chào Ahamovers".*
>
> *Nếu phải tóm cả ngày ở IOTE trong một câu, em sẽ nói thế này:* **công nghệ ở đây không đứng trên sân khấu. Nó nằm trên kệ, có giá, và mua về dùng được ngay."**

🎬 **GHI CHÚ SÂN KHẤU**

- Chỉ tay vào ảnh "Xin chào Ahamovers" khi nhắc tới. Đây là khoảnh khắc riêng của đoàn, người nghe thường cười ở chỗ này.
- Câu chốt nói chậm, dừng một nhịp rồi mới chuyển trang.

---

## TRANG 7 · Nếu bạn ghé IOTE — 25 giây

🖥️ **TRÊN SLIDE**

- Kicker: IOTE · Gợi ý ghé thăm
- Tiêu đề: **Nếu bạn ghé IOTE**
- Bốn thẻ: Đi thế nào (metro tuyến 20, ga Quốc Triển Bắc) · Đi lúc nào (ba ngày cuối tháng 8, đăng ký trước) · Xem gì (bốn khu theo nhóm công nghệ) · Lưu ý (dành một ngày, chọn trước khu cần xem)

🎙️ **LỜI NÓI**

> *"Trang cuối dành cho ai muốn đi IOTE năm sau: đi metro tuyến 20 là tới, triển lãm chỉ mở ba ngày vào cuối tháng 8, cần đăng ký trước, và nên chọn trước khu muốn xem, vì đi hết bốn khu là mất trọn một ngày.*
>
> *Em cảm ơn mọi người. Ai có câu hỏi thì em nghe ạ."*

🎬 **GHI CHÚ SÂN KHẤU**

- Để nguyên trang này trong lúc Q&A.

---

## ⏱️ NẾU CHỈ ĐƯỢC ĐÚNG 5 PHÚT

Phần nói đầy đủ khoảng 7'10. Nếu MC báo chỉ còn 5 phút, cắt theo thứ tự sau, còn khoảng 5'15:

1. **Trang 7:** không đọc gợi ý ghé thăm, chỉ nói "Em cảm ơn mọi người, ai có câu hỏi thì em nghe ạ". *(tiết kiệm khoảng 20 giây)*
2. **Trang 2:** chỉ nói câu in đậm "đi hết bốn khu giống như đi theo một món hàng", rồi chuyển luôn sang Hall 9. *(khoảng 30 giây)*
3. **Trang 3:** bỏ đoạn Alipay và quán dim sum. *(khoảng 20 giây)*
4. **Trang 4:** bỏ câu "UPS, Decathlon, Uniqlo…" và bỏ câu "Ở giữa…" về đếm hàng trên kệ. *(khoảng 15 giây)*
5. **Trang 5:** bỏ câu khẩu hiệu TunStar trong lời nói, để chữ trên slide tự nói. *(khoảng 15 giây)*
6. **Trang 1:** bỏ câu về số doanh nghiệp và số khách, chỉ giữ câu in đậm "4 trong 19 khu". *(khoảng 15 giây)*

**Không bao giờ cắt:** câu hỏi mở đầu và đáp án của nó, câu "đây là đề xuất để thảo luận" ở trang 4, và câu chốt ở trang 6.

---

## 🙋 CHUẨN BỊ Q&A

| Câu hỏi có thể gặp | Trả lời |
|---|---|
| *Đoàn có mua thử thiết bị nào không?* | **Không.** Đoàn không mua và không mang mẫu thử nào về. Mọi nhận xét trong bài là từ việc xem và trao đổi tại booth. |
| *NFC khác quét mã QR ở chỗ nào?* | Cả hai đều mở được một trang trên điện thoại. QR phải mở camera và ngắm. NFC chỉ cần chạm, và cái thẻ khó bị dán đè mã giả hơn một tờ QR in giấy. Ở quán dim sum, đoàn thấy cả hai cùng lúc. |
| *Điện thoại có đọc được tem RFID không?* | **Không.** Điện thoại chỉ đọc NFC. Tem RFID loại đọc xa cần súng đọc hoặc cổng đọc riêng. Đây là lý do đoàn đề xuất thử NFC trước. |
| *Tem RFID giá bao nhiêu?* | Đoàn không ghi lại báo giá. Chỉ biết booth chào giá rất rẻ khi mua số lượng lớn. **Không đoán số.** Tiền chủ yếu nằm ở máy đọc và phần mềm. |
| *Máy quét cầm tay ở kho có gì đặc biệt?* | Bình mở ra xem: bên trong thực chất là **một máy Android gắn thêm đầu quét mã**. Theo **ước tính của Bình**, không phải phép đo, một chiếc điện thoại cài app làm được khoảng 80% việc của nó. Máy Bình xem là của UROVO. |
| *Robot như vậy có thay được tài xế giao hàng không?* | Chỉ trả lời điều đoàn thấy: robot ở IOTE chủ yếu làm việc ở **một chỗ cố định**, như quầy bán kem, quầy pha nước, hay trong kho. Ở IOTE đoàn **không thấy** robot nào giao hàng ngoài đường. Chuyện drone và robot giao hàng nằm ở các phần khác của chuyến đi. |
| *Khi nào Ahamove làm mấy thứ này?* | Trang 4 là đề xuất để mọi người cùng bàn, **chưa có kế hoạch hay mốc thời gian**. Không hứa gì thêm. |
| *Túi giữ nhiệt, thùng dùng lại thì sao?* | Đây là dải chữ trên trang 4: gắn cho mỗi món một tem RFID để biết ai đang giữ, đã trả về chưa. Zara dùng lại một con chip hơn 100 lần [5]. Vẫn là ý để bàn, chưa ai tính chi phí. |
| *Kính thông minh có tăng năng suất thật không?* | Có một booth trưng bày xe tự hành mang kệ hàng tới chỗ người soạn, kính chỉ ô cần lấy. Booth công bố tăng **40% hiệu suất**, nhưng đó là số **nhà bán tự nói**, đoàn chưa kiểm chứng. |
| *Khách quốc tế có đông không?* | Ban tổ chức công bố hơn 3.000 khách nước ngoài, từ 70 quốc gia và vùng lãnh thổ [1]. |

---

## 📚 NGUỒN

1. **Ban tổ chức IOTE**, *Giới thiệu triển lãm IOTE 2026 Thâm Quyến*, 08/2026 — https://www.iotexpo.com.cn/sz/HTMLIntro · id `iote-2026` trong `sources.ts`. Ban tổ chức tự công bố. Đã đối chiếu ngày 23/09/2026.
2. **AIPC**, *Hồ sơ thành viên Shenzhen World Exhibition & Convention Center* — https://aipc.org/member/shenzhen-world-exhibition-convention-center/ · id `shenzhen-world-aipc`.
3. **Ghi chép của đoàn** (Quân, Công, Sâm, Bình), sheet *Outline_Sharing_Shenzhen_Trip*, ngày 1 (quán dim sum) và ngày 3 (IOTE). Hiện nằm trong `src/data/itinerary.ts`.
4. **Ảnh**: ảnh và clip của đoàn, cùng ảnh minh hoạ lấy từ Wikimedia Commons. Chi tiết trong `public/media/places/SOURCES.md`.
5. **Nguồn kiến thức NFC/RFID của hai trang Hall 9**: danh sách `hall9Sources` trong `src/data/hall9.ts` (Atlas RFID, RedBeam, GS1, KrASIA về Alipay Tap, RFID Journal về UPS, Delta, Impinj về Uniqlo, Inditex về Zara). VinhTien kiểm chứng ngày 24/09/2026.

---

## ❓ CÂU HỎI CÒN MỞ

1. **Chủ đề từng hall (trang 2)**: chưa có nguồn chính thức. Nếu ai trong đoàn có ảnh biển tên hall 10/11/12 thì đối chiếu.
2. **Chữ trên trang 4**: cụm "thay cho chụp ảnh hay gọi điện" và "UPS và Delta" nên sửa trên slide (xem 🔎 trang 4). Lời nói hiện đã tránh hai chỗ này.
3. *(Tuỳ chọn)* Nếu trước giờ trình bày Tiến nhớ ra một khoảnh khắc riêng ở Hall 9, chèn vào cuối trang 3: người nghe tin câu chuyện của chính người nói hơn.
