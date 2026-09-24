# SCRIPT TRÌNH BÀY — "Robot mang đồ lên phòng ở Rezen Dong Hotel"

**Bản dùng để present.** Khớp với 7 slide của chương Robot trên deck, bản ngày 24/09/2026: mở ghim **Rezen Dong Hotel**, trang 01–07.

| | |
|---|---|
| **Người trình bày** | Thiều Vĩnh Tiến (slide 1–3, 7) · Nguyễn Khánh Công (slide 4–6). Chia vậy là đề xuất, hai anh đổi được. |
| **Thời lượng** | **~8 phút nói** (rút về ~7 phút 30: bỏ đoạn Starship ở slide 2) · Q&A tính riêng (câu hỏi soạn sẵn ở cuối file) |
| **Khán giả** | Toàn thể nhân viên Ahamove |
| **Xưng hô** | "mình" cho người nói, cho đoàn và cho công ty |
| **Số slide** | 7 |

**Cách đọc file:** mỗi slide có 4 khối:
🖥️ **TRÊN SLIDE** (đã dựng sẵn trên deck) · 🎙️ **LỜI NÓI** · 🎬 **GHI CHÚ SÂN KHẤU** · ⏱️ thời lượng ở tiêu đề.
Số `[n]` là nguồn, danh sách đầy đủ ở cuối file.

> **Về lời nói:** phần 🎙️ viết dài vừa đúng thời lượng (tiếng Việt nói ~140 chữ/phút). Đừng học thuộc. Đọc vài lần cho thuộc *ý* rồi lên nói bằng chữ của mình. Chỗ in đậm là chỗ không được bỏ.

> ⚠️ **Khán giả là toàn thể nhân viên, không riêng Vận hành.** Các từ LiDAR, SLAM, PMS, API đều đã được "dịch" sẵn trong lời nói, đừng nói trần từ tiếng Anh. Chương này **không dùng số liệu thị trường**: đó là lựa chọn biên tập, đừng thêm số khi nói.

---

## 🧭 Mạch câu chuyện: một vòng tròn

```
Mở vòng  →  Lùi về quá khứ  →      Mở máy ra xem      →  Đóng vòng
 (1)          (2)(3)            (4)      (5)       (6)       (7)
"Đêm ở     "Nó từ đâu ra,    Quy trình Thuật toán Hệ thống  "Xem lại lượt
 Rezen,     vì sao lại là    6 bước    LiDAR +    khách     giao thật, và
 robot gõ   Thâm Quyến?"               SLAM       sạn"      chỗ nó vẫn cần
 cửa…"                                                      con người"
```

**Một câu để cả phòng nhớ:** *Robot không thay con người. Nó thay **chặng đi lại lặp đi lặp lại**, còn hai đầu vẫn cần người.*

**Phần B có đúng ba ý, mỗi ý một slide, không quay lại ý cũ:**
1. **Quy trình** (slide 4): một đơn đi qua 6 bước nào, bước nào còn con người.
2. **Thuật toán** (slide 5): robot tự đi bằng cách nào: đôi mắt LiDAR, bộ não SLAM, và cách nó tìm đúng phòng 1205.
3. **Hệ thống khách sạn** (slide 6): robot chỉ là một mắt xích, phải nói chuyện được với hệ thống đặt đơn, bộ điều phối, thang máy và khách.

Hai slide 5–6 có thanh 6 bước ở trên cùng, sáng đúng bước đang nói, để người nghe biết ý đó nằm ở đâu trong quy trình.

Phần A cũng tách rõ: slide 2 kể **chuyện gì xảy ra** (mốc thời gian), slide 3 giải thích **vì sao** (lý do). COVID chỉ nói ở slide 3, Meituan chỉ nói ở slide 2.

Slide 1 hứa một cảnh ("lát nữa mọi người sẽ xem"), slide 7 trả cảnh đó. Nhờ vậy khán giả có lý do để theo tới cuối.

---

# PHẦN A — TIẾN · "Chuyện gì đã xảy ra, và vì sao lại ở đây"

---

## SLIDE 1 · Mở đầu: Robot giao tận phòng · ⏱️ 40 giây

🖥️ **TRÊN SLIDE**
- Tiêu đề: **Robot giao tận phòng** · Khách sạn · Trung Quốc
- Minh hoạ robot cạnh thang máy

🎙️ **LỜI NÓI**

> *"Tối ngày thứ hai ở Thâm Quyến, đoàn mình ngồi trong phòng khách sạn Rezen, mở Meituan đặt đồ ăn, chọn giao tới phòng.*
>
> *Người mang đồ lên tới tầng của đoàn **không phải shipper, cũng không phải nhân viên khách sạn. Mà là một con robot.** Nó tự đi, tự gọi thang máy, tự lên đúng tầng.* [T1]
>
> *Lát nữa mọi người sẽ xem lại đúng lượt giao đó. Nhưng trước khi xem, mình muốn trả lời ba câu: **nó từ đâu ra, vì sao lại nhiều ở Thâm Quyến, và nó thật sự làm việc thế nào.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu in đậm thứ hai nói chậm, dừng nửa giây trước chữ *"một con robot"*.
- **Đừng chiếu video ở đây.** Để dành cho slide 7, đó là phần thưởng cuối bài.

---

## SLIDE 2 · Ra đời ở Mỹ. Nhân rộng ở Trung Quốc. · ⏱️ 1 phút 25 giây

🖥️ **TRÊN SLIDE**
- 4 thẻ có ảnh thật: **2014** Cupertino, Mỹ · **2016** nhà hàng Trung Quốc · **2018–2019** Hàng Châu, Thâm Quyến · **2020–2022** Từ thử nghiệm thành chuẩn
- Dải cam cuối slide: Starship, nhánh robot vỉa hè

🎙️ **LỜI NÓI**

> *"Nhiều người nghĩ robot giao hàng là chuyện của Trung Quốc. Thật ra **nó ra đời ở Mỹ**.*
>
> *Năm 2014, ở Cupertino, sát trụ sở Apple, một công ty tên Savioke đưa con robot đầu tiên vào khách sạn Aloft. Nó mang bàn chải, khăn tắm lên phòng, tới cửa thì gọi điện báo khách.* [1][2]
>
> *Nhưng người **làm nó thành phổ biến** là Trung Quốc, và họ đi một đường rất khôn: **bắt đầu từ nhà hàng**. Keenon và Pudu (Pudu là công ty Thâm Quyến) làm robot bưng bê trước, vì trong nhà hàng chỉ có một mặt sàn, dễ hơn nhiều.* [3][4]
>
> *Đi quen rồi mới lên khách sạn, nơi khó hơn hẳn vì phải đi thang máy. Năm 2018, khách sạn FlyZoo của Alibaba dùng robot mang đồ tận phòng. Năm 2019, Meituan thử robot tự đi thang máy ở ngay Thâm Quyến.* [5][6] *Tới 2020–2022, robot **từ thử nghiệm thành chuẩn** trong các chuỗi khách sạn lớn, và Meituan rót vốn thẳng vào Pudu.* [7][14]
>
> *Mọi người có thể nghe tới Starship, loại robot sáu bánh chạy trên vỉa hè. Nó cũng ra đời năm 2014 nhưng là **một nhánh khác**: chạy ngoài đường, không đi thang máy."* [8]

🎬 **GHI CHÚ SÂN KHẤU**
- Khi nói tới năm nào, chỉ tay lần lượt qua 4 thẻ từ trái sang phải.
- Câu chốt của slide là *"bắt đầu từ nhà hàng"*. Đây là bài học về cách mở thị trường: **làm bài toán dễ trước, rồi mới lên bài toán khó.** Có thể nói thêm câu này nếu thấy phòng đang nghe tốt.
- Nếu thiếu giờ thì bỏ đoạn Starship, slide vẫn hiện dòng đó.

---

## SLIDE 3 · Vì sao lại là Thâm Quyến · ⏱️ 1 phút

🖥️ **TRÊN SLIDE**
- Ảnh phố Hoa Cường Bắc và bên trong SEG Plaza
- 4 lý do: Linh kiện ngay dưới nhà · Thiếu người, lương tăng · Cú hích COVID-19 · Chính sách và cụm doanh nghiệp
- Dải xanh: *Robot không bùng nổ vì công nghệ mới…*

🎙️ **LỜI NÓI**

> *"Vậy vì sao lại là Thâm Quyến? Ảnh bên trái là Hoa Cường Bắc, **chính khu chợ điện tử đoàn mình đã đi**. Mọi người còn nhớ không, module, cảm biến bán như bán rau. Thứ để làm ra một con robot, ở đây mua được ngay dưới nhà.* [9]
>
> *Có linh kiện rồi thì phải có người cần. Thứ nhất, khách sạn **khó tuyển người** cho ca đêm và cho mấy việc lặp đi lặp lại như mang nước, mang khăn.* [10] *Thứ hai, **COVID** khiến việc giao không tiếp xúc thành bắt buộc, khách quen với robot từ đó.* [7] *Thứ ba, **chính sách**: nhà nước có kế hoạch "Robot+", Thâm Quyến có kế hoạch robot riêng, và cả một cụm doanh nghiệp robot ở Nam Sơn, Pudu là một trong số đó.* [11]
>
> ***Công nghệ này có từ lâu. Nó chỉ bùng nổ khi linh kiện rẻ, nhân công đắt và COVID gặp nhau cùng lúc.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Slide này **không nhắc lại Meituan**: đã kể ở slide 2.
- Câu *"chính khu chợ điện tử đoàn mình đã đi"* nối với ghim SEG Plaza trên bản đồ. Nếu phòng đã xem phần SEG thì nói *"như anh Quân kể lúc nãy"*.
- Câu cuối in đậm là câu chốt Phần A. Đọc chậm rồi **chuyển người**: *"Vậy nó làm việc thế nào? Mời anh Công."*

---

# PHẦN B — CÔNG · "Mở máy ra xem"

---

## SLIDE 4 · Ý 1 · Quy trình: Sáu bước. Một lần giao tận phòng. · ⏱️ 1 phút

🖥️ **TRÊN SLIDE**
- 6 ô: 01 Khách đặt đồ · 02 Tạo tác vụ · **03 Nạp & gán phòng** · 04 Di chuyển · 05 Báo khách · **06 Mở khoang & nhận**
- Dải xanh: *Nhân viên gán đồ với phòng. Robot lo hành trình tới cửa.*

🎙️ **LỜI NÓI**

> *"Cảm ơn anh Tiến. Phần của mình có đúng ba ý: **quy trình, thuật toán, và hệ thống của khách sạn.** Ý đầu tiên: một lượt giao đi qua sáu bước.*
>
> *Một: khách đặt, qua app, quét mã QR hoặc gọi lễ tân. Hai: hệ thống khách sạn biến đơn đó thành một nhiệm vụ cho robot. Ba: **một người** đặt đồ vào khoang và chọn phòng. Bốn: robot tự đi, gọi thang, lên đúng tầng. Năm: tới nơi thì báo khách. Sáu: khách nhập mã, khoang mở, lấy đồ.*
>
> *Mọi người để ý hai ô màu cam, bước ba và bước sáu: đó là hai chỗ **vẫn có con người**. **Robot chỉ lo phần ở giữa: đi lại.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu mở đầu **báo trước ba ý** để người nghe biết phần này dài bao nhiêu.
- Chỉ tay vào **hai ô cam** khi nói *"vẫn có con người"*. Slide 7 sẽ quay lại đúng ý này.

---

## SLIDE 5 · Ý 2 · Thuật toán: Đôi mắt LiDAR. Bộ não SLAM. · ⏱️ 1 phút 35 giây

> ⭐ **Slide trọng tâm của phần kỹ thuật.** Dành thời gian nhiều nhất ở đây.

🖥️ **TRÊN SLIDE**
- Thanh 6 bước, **sáng bước 03–04**
- Thẻ trái (nền xanh), **Đôi mắt · LiDAR**: *"Xung quanh mình có gì, cách bao xa?"* · sơ đồ tia laser · 3 hàng: Quét laser 360° · Đo tia dội lại · Ra "đám mây điểm"
- Thẻ phải, **Bộ não · SLAM**: *"Mình đang đứng ở đâu, đi đường nào tới phòng 1205?"* · 3 hàng: Lập bản đồ một lần · Tự định vị liên tục · Tìm đường tới đích (ví dụ khoang 01 → phòng 1205)
- Dải cam: cảm biến tầm gần lo an toàn

🎙️ **LỜI NÓI**

> *"Ý thứ hai: robot tự đi bằng cách nào? Thanh trên cùng đang sáng bước ba và bốn. Câu trả lời nằm ở hai thứ: **một đôi mắt, và một bộ não.***
>
> ***Đôi mắt là LiDAR.** Trên đầu robot có một đầu laser quay liên tục, bắn tia ra mọi hướng. Tia chạm tường, chạm người thì dội lại, robot đo thời gian tia đi rồi về để biết vật đó cách bao xa. Mỗi chấm trên sơ đồ là một chỗ tia chạm vào; hàng nghìn chấm như vậy vẽ nên hình dạng hành lang. Nó thấy được cả khi thiếu sáng, nhưng **không đọc chữ và không nhận ra món ăn**.* [12]
>
> ***Bộ não là SLAM**, vừa lập bản đồ vừa tự định vị. Lúc lắp đặt, robot chạy một vòng khắp toà nhà để vẽ bản đồ, rồi người ta đánh dấu phòng, thang máy, trạm sạc lên đó: **mỗi số phòng thành một toạ độ**. Khi chạy, nó so cái đôi mắt đang thấy với bản đồ để biết mình đang đứng ở đâu.* [12][13]
>
> *Nên khi nhận nhiệm vụ "khoang số 1, phòng 1205", nó không cần biết mình chở món gì, cũng không cần đọc biển số cửa. Nó tra toạ độ 1205 trên bản đồ tầng 12 rồi tự tính đường tới đó.*
>
> ***Mắt để thấy, não để biết mình ở đâu.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Nói thẻ trái (mắt) trước, **chỉ vào sơ đồ tia laser**, rồi theo mũi tên *"dữ liệu"* sang thẻ phải (não).
- Ví dụ *"khoang số 1, phòng 1205"* là chỗ để khán giả hình dung. Nói chậm.
- Nếu có ai hỏi "sao không dùng GPS": **GPS không xuyên được tường và không phân biệt được tầng**, nên trong nhà phải tự định vị bằng bản đồ.

---

## SLIDE 6 · Ý 3 · Hệ thống khách sạn: Robot chỉ là một mắt xích. · ⏱️ 1 phút 15 giây

🖥️ **TRÊN SLIDE**
- Thanh 6 bước, **sáng bước 02, 04, 05**
- Chuỗi 5 mắt xích: **Hệ thống khách sạn** (PMS / POS) → **Bộ điều phối** (cloud, nền xanh) → **Robot** (LiDAR + SLAM) → **Thang máy** (lệnh điện tử qua API, viền cam) → **Khách** (điện thoại phòng · SMS)
- Dải "Khách sạn phải có sẵn": Bản đồ đã gắn nhãn · Sóng phủ khắp · Lối đi & trạm sạc · Người ở hai đầu
- Dải xanh: *Câu đầu tiên phải hỏi không phải "mua robot nào", mà là "thang máy nhà mình có kết nối được không".*

🎙️ **LỜI NÓI**

> *"Ý thứ ba: con robot giỏi mấy cũng **chỉ là một mắt xích**. Mọi người đi theo chuỗi từ trái sang phải.*
>
> *Đơn vào **hệ thống của khách sạn**, thành một nhiệm vụ. Nhiệm vụ lên **bộ điều phối** trên cloud: nó chọn robot gần nhất, còn pin, đang rảnh, và xếp lượt khi nhiều robot cùng cần thang.* [12] *Nghe quen không mọi người? **Đây chính là việc Ahamove làm mỗi ngày với tài xế.***
>
> *Robot đi như vừa nói. Rồi tới mắt xích **khó nhất, viền cam: thang máy**. Robot không có tay bấm nút, nó gửi lệnh điện tử cho thang, chờ thang báo cửa đã mở, kiểm tra còn chỗ rồi mới vào. Cuối cùng hệ thống báo **khách** ra nhận.*
>
> *Dải dưới là những thứ khách sạn phải có sẵn, và ô cuối là **người ở hai đầu**. Nên câu đầu tiên phải hỏi không phải "mua robot nào", mà là **"thang máy nhà mình có kết nối được không"**. Mời anh Tiến cho mọi người xem một lượt giao thật."*

🎬 **GHI CHÚ SÂN KHẤU**
- Chỉ tay dọc chuỗi **từ trái sang phải**, mỗi mắt xích một câu. Đừng đọc chữ nhỏ trên thẻ.
- *"Nghe quen không"*: dừng một nhịp. Đây là **chỗ duy nhất trong chương nói thẳng về Ahamove**.
- Dải "Khách sạn phải có sẵn" chỉ lướt, dừng ở ô **"Người ở hai đầu"**, vì nó nối với hai ô cam ở slide 4 và câu chốt ở slide 7.
- **Chuyển người** bằng câu cuối.

---

# PHẦN C — TIẾN · "Đóng vòng"

---

## SLIDE 7 · Xem một lượt giao thật · ⏱️ 55 giây (gồm 17 giây video)

🖥️ **TRÊN SLIDE**
- Video của đoàn, **17 giây, không tiếng**, tự phát khi mở trang
- Nội dung video: timeline **5 bước** *"Một đơn hàng đến tay khách như thế nào"*, mỗi bước kèm cảnh quay thật ở Rezen

🎙️ **LỜI NÓI**

**Trước khi video chạy (~10 giây):**
> *"Đây là đúng lượt giao ở Rezen mà mình kể lúc đầu. Video không có tiếng, mình nói theo."*

**Trong lúc video chạy (17 giây): mỗi chấm cam trên timeline một câu ngắn:**
> - Chấm 1, **người cầm điện thoại**: *"Đặt trên app, chọn giao tới phòng."*
> - Chấm 2, **robot ở sảnh**: *"Đồ được xếp vào khoang robot."*
> - Chấm 3, **robot trong thang máy**: *"Nó tự gọi thang, lên đúng tầng của đoàn."*
> - Chấm 4, **màn hình trên nắp robot**: *"Tới sảnh thang máy tầng mình, nó hiện mã để gọi khách."*
> - Chấm 5, **người mở khoang**: *"Quét mã, khoang mở, lấy đồ."*

**Sau khi video dừng (~25 giây):**
> *"Nhìn thì trơn tru vậy. Nhưng có một thứ đoàn mình thấy tận mắt mà video không quay: **nhân viên khách sạn vẫn phải ra đỡ đoạn cuối**, vì thang đông, vì khách chưa quen bấm.* [T1]
>
> *Mọi người còn nhớ hai ô màu cam lúc nãy không? Đây chính là nó. **Robot lo được chặng đi lại. Còn năm mươi mét cuối vẫn cần con người.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Video **tự phát và không có tiếng**. Nếu nó không tự chạy, bấm nút ▶ trên khung video.
- Video chỉ 17 giây, mỗi bước khoảng 3 giây: **nói thật ngắn**, câu nào chưa kịp nói thì bỏ, đừng nói đè sang bước sau.
- Nếu muốn khán giả nhìn kỹ, xem trước một lượt không nói, rồi bấm ▶ lần hai để nói theo.
- Câu cuối in đậm là **câu chốt cả chương**. Nói xong, dừng, rồi mới chuyển sang Meituan hoặc Q&A.
- Nếu chương Meituan nói tiếp ngay sau: *"Robot là chặng cuối trong toà nhà. Còn chặng trước đó, từ lúc bấm đặt tới lúc đồ tới sảnh, là chuyện của Meituan."*

---

## ❓ Q&A: câu hỏi soạn sẵn

| Câu hỏi có thể gặp | Gợi ý trả lời |
|---|---|
| **Một con robot giá bao nhiêu?** | Đoàn không có số kiểm chứng nên không nêu con số. Nói được là giá đã giảm mạnh nhờ linh kiện sản xuất ngay ở Thâm Quyến; còn đắt hay rẻ thì phải tính cả tiền nâng cấp thang máy và người xử lý sự cố. |
| **Robot có nhận ra món ăn, có biết đồ nóng đồ lạnh không?** | Không. Nó chỉ biết khoang nào đi phòng nào; người nạp đồ chịu trách nhiệm phần đó. |
| **Việt Nam có chưa?** | Robot bưng bê trong nhà hàng đã có. Robot lên tận phòng khách sạn thì phụ thuộc thang máy toà nhà, đây là rào cản chính. *(Nếu cần ví dụ cụ thể ở Việt Nam thì kiểm tra trước buổi nói, đừng đoán.)* |
| **Ahamove có nên làm robot không?** | Bài học không nằm ở con robot mà ở cách họ chia việc: **tự động hoá chặng lặp lại, giữ người ở hai đầu**, và phần điều phối phía sau chính là việc mình đang làm. |
| **Nếu robot kẹt hay hết pin giữa đường thì sao?** | Bộ điều phối theo dõi pin và trạng thái, gọi robot về sạc. Khi có sự cố thì nhân viên tiếp quản, nên ô "người xử lý ngoại lệ" mới nằm trong danh sách bắt buộc. |

---

## ✅ Cần xác nhận trước buổi nói

1. **Ai đặt đồ vào khoang robot ở Rezen:** shipper Meituan hay nhân viên khách sạn? Video (chấm 2) ghi *"Xếp đồ vào khoang robot"* nhưng không nói ai làm. Lời nói slide 7 đang viết trung tính; nếu ai trong đoàn nhớ rõ thì thêm một câu.
2. **Robot giao tới cửa phòng hay chỉ tới sảnh thang máy của tầng?** Video ghi *"dừng tại sảnh thang máy, hiện mã để gọi khách"*. Lời nói slide 1 viết *"lên tới tầng của đoàn"* cho khớp. Nếu thực tế nó tới tận cửa thì sửa lại.
3. **Ngày đặt:** ghi chép của đoàn ghi là **Ngày 2** (25/08). Slide 1 nói *"tối ngày thứ hai"*. Nếu thực tế là buổi trưa thì đổi chữ "tối".

---

## 📚 Nguồn

**Của đoàn**
- [T1] Ghi chép chuyến đi, Ngày 2, *Test robot Meituan giao tới khách sạn* (Phạm Minh Quân, Nguyễn Thanh Bình) · `src/data/itinerary.ts`
- [T2] Video của đoàn `public/media/trip/robot/Robot_giao_do-16-33.mp4` (giây 16–33 của bản gốc `Robot_giao_do.mp4`), timeline 5 bước

**Bên ngoài** (kiểm chứng 23/09/2026)
1. TechCrunch, *Starwood introduces robotic butlers at Aloft hotel*, 13/08/2014: https://techcrunch.com/2014/08/13/starwood-introduces-robotic-butlers-at-aloft-hotel-in-palo-alto/
2. The Robot Report, *Hotel delivery robot debuts in Silicon Valley*: https://www.therobotreport.com/hotel-delivery-robot-debuts-in-silicon-valley/
3. The Robot Report, *Pudu Robotics gets Series B financing*: https://www.therobotreport.com/pudu-robotics-gets-series-b-financing-for-indoor-delivery-service-robots/
4. Robots Asia, *Keenon*: https://www.robotsasia.com/Keenon.htm
5. TechNode, *Alibaba checks in to unmanned hotels*, 07/11/2018: https://technode.com/2018/11/07/alibaba-checks-in-to-unmanned-hotels/
6. KrASIA, *Meituan tests unmanned delivery with robots in Beijing and Shenzhen*, 2019: https://kr-asia.com/meituan-tests-unmanned-delivery-with-robots-in-beijing-and-shenzhen
7. Springer, *Information Technology & Tourism*, 2020 (robot khách sạn thời COVID ở Trung Quốc): https://link.springer.com/article/10.1007/s40558-020-00193-z
8. Wikipedia, *Starship Technologies*: https://en.wikipedia.org/wiki/Starship_Technologies
9. Chính quyền Thâm Quyến, chuỗi cung ứng robot: https://www.sz.gov.cn/en_szgov/business/news/content/post_12140458.html
10. DigiChina (Stanford), *Human resources both drive and limit China's push for automation*: https://digichina.stanford.edu/work/human-resources-both-drive-and-limit-chinas-push-for-automation/
11. China Briefing, kế hoạch "Robot+" (2023): https://www.china-briefing.com/news/china-robotics-industry-what-are-the-opportunities-for-foreign-stakeholders/
12. Team Truck On-Demand · Ahamove, *Robot giao hàng tận phòng tại khách sạn Trung Quốc*, 20/09/2026 · `docs/sources/hotel-room-delivery-2026-09-20.md`
13. MathWorks, *What is SLAM?*: https://www.mathworks.com/discovery/slam.html
14. Caixin Global, *Meituan eyes robot-enabled deliveries with $14 million investment in PuduTech*, 02/07/2020: https://www.caixinglobal.com/2020-07-02/meituan-eyes-robot-enabled-deliveries-with-14-million-investment-in-pudutech-101574672.html
