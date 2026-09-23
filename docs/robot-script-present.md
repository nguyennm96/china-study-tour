# SCRIPT TRÌNH BÀY — "Robot mang đồ lên phòng ở Rezen Dong Hotel"

**Bản dùng để present.** Khớp với 10 slide của chương Robot trên deck, bản ngày 23/09/2026: mở ghim **Rezen Dong Hotel**, trang 01–10.

| | |
|---|---|
| **Người trình bày** | Thiều Vĩnh Tiến (slide 1–3, 10) · Nguyễn Khánh Công (slide 4–9). Chia vậy là đề xuất, hai anh đổi được. |
| **Thời lượng** | **~10 phút nói** (rút về ~9 phút: bỏ đoạn Starship ở slide 2, lướt nhanh slide 9) · Q&A tính riêng (câu hỏi soạn sẵn ở cuối file) |
| **Khán giả** | Toàn thể nhân viên Ahamove |
| **Xưng hô** | "mình" cho người nói, cho đoàn và cho công ty |
| **Số slide** | 10 |

**Cách đọc file:** mỗi slide có 4 khối:
🖥️ **TRÊN SLIDE** (đã dựng sẵn trên deck) · 🎙️ **LỜI NÓI** · 🎬 **GHI CHÚ SÂN KHẤU** · ⏱️ thời lượng ở tiêu đề.
Số `[n]` là nguồn, danh sách đầy đủ ở cuối file.

> **Về lời nói:** phần 🎙️ viết dài vừa đúng thời lượng (tiếng Việt nói ~140 chữ/phút). Đừng học thuộc. Đọc vài lần cho thuộc *ý* rồi lên nói bằng chữ của mình. Chỗ in đậm là chỗ không được bỏ.

> ⚠️ **Khán giả là toàn thể nhân viên, không riêng Vận hành.** Các từ LiDAR, SLAM, PMS, API đều đã được "dịch" sẵn trong lời nói, đừng nói trần từ tiếng Anh. Chương này **không dùng số liệu thị trường**: đó là lựa chọn biên tập, đừng thêm số khi nói.

---

## 🧭 Mạch câu chuyện: một vòng tròn

```
Mở vòng  →  Lùi về quá khứ  →  Mở máy ra xem  →  Đóng vòng
 (1)          (2)(3)          (4)(5)(6)(7)(8)(9)     (10)
"Đêm ở     "Nó từ đâu ra,     "Đi theo một đơn      "Xem lại lượt
 Rezen,     vì sao lại là      hàng, bước 2 → 4,     giao thật, và
 robot gõ   Thâm Quyến?"       rồi nhìn lại cả 6"    chỗ nó vẫn cần
 cửa…"                                               con người"
```

**Một câu để cả phòng nhớ:** *Robot không thay con người. Nó thay **chặng đi lại lặp đi lặp lại**, còn hai đầu vẫn cần người.*

**Phần B đi theo đúng một đơn hàng.** Slide 4 bày 6 bước; slide 5–8 soi kỹ bước 2 → 3 → 4, với **slide 6 (LiDAR + SLAM) là trọng tâm kỹ thuật** theo đúng chiều đơn đi, có thanh 6 bước sáng đúng bước đang nói; slide 9 nhìn lại cả 6 bước và gắn mỗi điều kiện vào bước cần nó. Bước 5–6 để video ở slide 10 kể.

Slide 1 hứa một cảnh ("lát nữa mọi người sẽ xem"), slide 10 trả cảnh đó. Nhờ vậy khán giả có lý do để theo tới cuối.

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
- **Đừng chiếu video ở đây.** Để dành cho slide 10, đó là phần thưởng cuối bài.

---

## SLIDE 2 · Ra đời ở Mỹ. Nhân rộng ở Trung Quốc. · ⏱️ 1 phút 10 giây

🖥️ **TRÊN SLIDE**
- 4 thẻ có ảnh thật: **2014** Cupertino, Mỹ · **2016** nhà hàng Trung Quốc · **2018–2019** Hàng Châu, Thâm Quyến · **2020–2022** toàn Trung Quốc
- Dải cam cuối slide: Starship, nhánh robot vỉa hè

🎙️ **LỜI NÓI**

> *"Nhiều người nghĩ robot giao hàng là chuyện của Trung Quốc. Thật ra **nó ra đời ở Mỹ**.*
>
> *Năm 2014, ở Cupertino, sát trụ sở Apple, một công ty tên Savioke đưa con robot đầu tiên vào khách sạn Aloft. Nó mang bàn chải, khăn tắm lên phòng, tới cửa thì gọi điện báo khách.* [1][2]
>
> *Nhưng người **làm nó thành phổ biến** là Trung Quốc, và họ đi một đường rất khôn: **bắt đầu từ nhà hàng**. Keenon và Pudu (Pudu là công ty Thâm Quyến) làm robot bưng bê trước, vì trong nhà hàng chỉ có một mặt sàn, dễ hơn nhiều.* [3][4]
>
> *Đi quen rồi mới lên khách sạn, nơi khó hơn hẳn vì phải đi thang máy. Năm 2018, khách sạn FlyZoo của Alibaba dùng robot mang đồ tận phòng. Năm 2019, Meituan thử robot tự đi thang máy ở ngay Thâm Quyến.* [5][6] *Rồi COVID tới: không ai muốn tiếp xúc, và robot từ "cho vui" thành "bình thường".* [7]
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
- 4 lý do: Linh kiện ngay dưới nhà · Thiếu người, lương tăng · Cú hích COVID-19 · Nền tảng và chính sách kéo cầu
- Dải xanh: *Robot không bùng nổ vì công nghệ mới…*

🎙️ **LỜI NÓI**

> *"Vậy vì sao lại là Thâm Quyến? Ảnh bên trái là Hoa Cường Bắc, **chính khu chợ điện tử đoàn mình đã đi**. Mọi người còn nhớ không, module, cảm biến bán như bán rau. Thứ để làm ra một con robot, ở đây mua được ngay dưới nhà.* [9]
>
> *Có linh kiện rồi thì phải có người cần. Thứ nhất, khách sạn **khó tuyển người** cho ca đêm và cho mấy việc lặp đi lặp lại như mang nước, mang khăn.* [10] *Thứ hai, **COVID** khiến việc giao không tiếp xúc thành bắt buộc, khách quen với robot từ đó.* [7] *Thứ ba, **Meituan** cần robot để shipper khỏi phải leo từng tầng, cộng thêm chính sách nhà nước đẩy robot vào đời sống.* [6][11]
>
> ***Công nghệ này có từ lâu. Nó chỉ bùng nổ khi linh kiện rẻ, nhân công đắt và COVID gặp nhau cùng lúc.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu *"chính khu chợ điện tử đoàn mình đã đi"* nối với ghim SEG Plaza trên bản đồ. Nếu phòng đã xem phần SEG thì nói *"như anh Quân kể lúc nãy"*.
- Câu cuối in đậm là câu chốt Phần A. Đọc chậm rồi **chuyển người**: *"Vậy nó làm việc thế nào? Mời anh Công."*

---

# PHẦN B — CÔNG · "Mở máy ra xem"

---

## SLIDE 4 · Sáu bước. Một lần giao tận phòng. · ⏱️ 1 phút 10 giây

🖥️ **TRÊN SLIDE**
- 6 ô: 01 Khách đặt đồ · 02 Tạo tác vụ · **03 Nạp & gán phòng** · 04 Di chuyển · 05 Báo khách · **06 Mở khoang & nhận**
- Dải xanh: *Nhân viên gán đồ với phòng. Robot lo hành trình tới cửa.*

🎙️ **LỜI NÓI**

> *"Cảm ơn anh Tiến. Một lượt giao có sáu bước, mình lướt qua trước rồi đi kỹ từng bước sau.*
>
> *Một: khách đặt, qua app, quét mã QR hoặc gọi lễ tân. Hai: hệ thống của khách sạn biến đơn đó thành **một nhiệm vụ cho robot**: lấy đồ ở đâu, mang lên phòng số mấy.*
>
> *Ba: **một người** đặt đồ vào khoang và chọn phòng. Bốn: robot tự đi, gọi thang, lên đúng tầng. Năm: tới nơi thì báo khách, bằng điện thoại phòng hoặc tin nhắn. Sáu: khách nhập mã, khoang mở, lấy đồ, robot quay về.*
>
> *Mọi người để ý hai ô màu cam, bước ba và bước sáu. Đó là hai chỗ **vẫn có con người**. **Robot chỉ lo phần ở giữa: đi lại.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Chỉ tay vào **hai ô cam** khi nói *"vẫn có con người"*. Đây là hình ảnh then chốt của cả chương, slide 9 và 10 sẽ quay lại ý này.
- Slide này chỉ **lướt**. Đừng giải thích sâu bước nào, vì các slide sau sẽ đi kỹ.

---

## SLIDE 5 · Bước 02: Đơn hàng thành nhiệm vụ cho cả đội robot · ⏱️ 45 giây

🖥️ **TRÊN SLIDE**
- Thanh 6 bước ở trên cùng, **sáng bước 02**
- Chuỗi: **PMS / POS** (đơn & số phòng) → **Điều phối** → **Đội robot**
- 3 quy tắc: Gán đúng robot · Xếp hàng thang máy · Giữ đội sẵn sàng

🎙️ **LỜI NÓI**

> *"Giờ mình đi theo đúng một đơn hàng, từng bước một. Mọi người nhìn thanh trên cùng: mình đang ở **bước hai**.*
>
> *Đơn vừa đặt xong, hệ thống của khách sạn biến nó thành một nhiệm vụ: lấy đồ ở đâu, mang lên phòng nào. Nhiệm vụ đó đi lên một **bộ điều phối trên cloud**, và bộ điều phối chọn robot: con nào gần, còn pin, đang rảnh. Hai con cùng cần thang thì con nào đi trước. Con nào sắp hết pin thì gọi về sạc.* [12]
>
> *Nghe quen không mọi người? **Đây chính là việc Ahamove làm mỗi ngày với tài xế**, chỉ khác là trong một toà nhà, và đi theo chiều dọc."*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu đầu tiên **dạy khán giả đọc thanh 6 bước**. Chỉ tay lên thanh một lần ở đây; các slide sau chỉ cần nói "bước mấy".
- *"Nghe quen không"*: dừng một nhịp. Đây là **chỗ duy nhất trong chương nói thẳng về Ahamove**, đừng nói dài hơn.
- Nói lướt: điều phối là **tầng quản lý đứng trên**. Trọng tâm kỹ thuật của chương nằm ở slide sau.

---

## SLIDE 6 · Bước 03–04: Đôi mắt LiDAR. Bộ não SLAM. · ⏱️ 1 phút 15 giây

> ⭐ **Slide trọng tâm của phần kỹ thuật.** Đây là thứ làm nên một con robot tự đi được. Dành thời gian nhiều nhất ở đây.

🖥️ **TRÊN SLIDE**
- Thanh 6 bước, **sáng bước 03–04**
- Thẻ trái (nền xanh), **Đôi mắt · LiDAR**: *"Xung quanh mình có gì, cách bao xa?"* · sơ đồ robot bắn tia laser trong hành lang · 3 hàng: Quét laser 360° · Đo tia dội lại · Ra "đám mây điểm"
- Mũi tên **dữ liệu** ở giữa
- Thẻ phải, **Bộ não · SLAM**: *"Mình đang đứng ở đâu, đi đường nào tới phòng 1205?"* · 3 hàng: Lập bản đồ một lần · Tự định vị liên tục · Tìm đường tới đích
- Dải cam: camera và cảm biến tầm gần lo an toàn; sensor fusion

🎙️ **LỜI NÓI**

> *"Robot đã nhận đơn. Giờ đến câu hỏi mà ai cũng thắc mắc: **nó tự đi bằng cách nào?** Câu trả lời nằm ở hai thứ: **một đôi mắt, và một bộ não.***
>
> ***Đôi mắt là LiDAR.** Trên đầu robot có một đầu laser quay liên tục, bắn tia ra mọi hướng. Tia chạm tường, chạm cột, chạm người thì dội lại, và robot đo thời gian tia đi rồi về để biết vật đó cách bao xa. Mọi người nhìn sơ đồ: mỗi chấm là một chỗ tia chạm vào. Hàng nghìn chấm như vậy vẽ nên hình dạng hành lang quanh robot, nhiều lần trong một giây. Nó thấy được cả khi thiếu sáng, nhưng **nó không đọc chữ và không nhận ra món ăn**.* [12]
>
> ***Bộ não là SLAM**, nghĩa là vừa lập bản đồ vừa tự định vị. Lúc lắp đặt, người ta cho robot chạy một vòng khắp toà nhà để vẽ bản đồ, rồi đánh dấu phòng, thang máy, trạm sạc lên đó. Từ đó mỗi lần chạy, nó lấy hình ảnh đôi mắt vừa thấy, so với bản đồ, và biết chính xác **mình đang đứng ở đâu**. Biết mình ở đâu rồi thì mới tính được đường tới phòng.* [12][13]
>
> *Còn ở tầm gần, camera và cảm biến va chạm lo phần an toàn: có người bước ra, có xe đẩy thì dừng hoặc né.*
>
> ***Mắt để thấy, não để biết mình ở đâu.** Thiếu một trong hai, robot không đi được."*

🎬 **GHI CHÚ SÂN KHẤU**
- Nói thẻ trái (mắt) trước, **chỉ vào sơ đồ tia laser** khi nói *"mỗi chấm là một chỗ tia chạm vào"*, rồi theo mũi tên *"dữ liệu"* sang thẻ phải (não).
- Hai câu hỏi trong ngoặc kép trên slide là cách dễ nhất để khán giả không chuyên nhớ mỗi thứ làm gì. Có thể đọc to.
- Nếu có ai hỏi "sao không dùng GPS": **GPS không xuyên được tường và không phân biệt được tầng**, nên trong nhà phải tự định vị bằng bản đồ.

---

## SLIDE 7 · Bước 03–04: Biết đúng phòng. Không cần nhận diện món. · ⏱️ 35 giây

🖥️ **TRÊN SLIDE**
- Thanh 6 bước, **sáng bước 03 và 04**
- Khoang **01** → Phòng **1205** · **Số phòng là một toạ độ** · minh hoạ robot

🎙️ **LỜI NÓI**

> *"Vậy robot biết phòng 1205 ở đâu bằng cách nào? **Số phòng chỉ là một toạ độ** trên bản đồ vừa nói. Nhận nhiệm vụ "khoang số 1, phòng 1205", nó tra điểm có nhãn 1205 trên bản đồ tầng 12 rồi đi tới đó. Nó không cần đọc biển số trên cửa.*
>
> *Và nó cũng không cần biết mình chở món gì. Món gì, nóng hay lạnh, là việc của người nạp đồ ở bước ba.*
>
> *Đi hành lang thì dễ. Cái khó nằm ở chỗ tiếp theo."*

🎬 **GHI CHÚ SÂN KHẤU**
- Cách LiDAR và SLAM hoạt động đã nói ở slide 6. Ở đây chỉ cho thấy **nó được dùng để tìm phòng**, đừng giải thích lại.
- Câu cuối là **câu móc** sang slide thang máy. Nói xong thì bấm chuyển ngay.

---

## SLIDE 8 · Bước 04: Chỗ khó nhất là nói chuyện với thang máy · ⏱️ 50 giây

🖥️ **TRÊN SLIDE**
- Thanh 6 bước, **sáng bước 04**
- 4 bước nhỏ: Gọi thang · Chờ xác nhận · Kiểm tra an toàn · Ra đúng tầng

🎙️ **LỜI NÓI**

> *"Vẫn là bước bốn, nhưng đây là **đoạn khó nhất**, và cũng là chỗ robot khách sạn khác robot nhà hàng.*
>
> *Robot không có tay, không bấm nút thang được. Nó gọi thang **bằng tín hiệu điện tử**: báo cho hệ thống thang máy *"tôi ở tầng 1, muốn lên tầng 12"*, chờ thang báo lại là cửa đã mở, kiểm tra trong cabin còn chỗ rồi mới đi vào, tới tầng thì ra và đi tiếp tới phòng.* [12]
>
> *Nghĩa là **thang máy phải "nói chuyện" được với robot**. Toà cũ, thang đời cũ thì phải lắp thêm thiết bị. Nên câu đầu tiên phải hỏi không phải "mua robot nào", mà là **"thang máy nhà mình có kết nối được không"**."*

🎬 **GHI CHÚ SÂN KHẤU**
- Câu cuối là ý đáng mang về nhất của phần kỹ thuật. Nói chậm.
- Bước 05 (báo khách) và 06 (mở khoang) **không có slide riêng**. Video ở slide 10 sẽ cho thấy hai bước này.

---

## SLIDE 9 · Cả sáu bước: Mỗi bước cần một thứ khách sạn phải có · ⏱️ 45 giây

🖥️ **TRÊN SLIDE**
- Thanh 6 bước **sáng cả sáu**
- 6 thẻ, mỗi thẻ ghi bước cần nó: Đơn & số phòng (01–02) · Người ở hai đầu (03 · 06) · Bản đồ đã gắn nhãn (03–04) · Thang máy kết nối được (04) · Lối đi & trạm sạc (04) · Sóng phủ khắp (04–05)
- Dải xanh: *Robot chỉ là một phần. Thang máy và hệ thống khách sạn cũ mới quyết định có nhân rộng được không.*

🎙️ **LỜI NÓI**

> *"Đi hết một vòng rồi, giờ nhìn lại cả sáu bước. **Mỗi bước cần khách sạn có sẵn một thứ.***
>
> *Bước một, hai cần hệ thống nhận đơn. Bước ba, bốn cần bản đồ toà nhà. Bước bốn cần thang máy kết nối được, lối đi đủ rộng và chỗ sạc. Bước năm cần sóng phủ khắp để robot báo được khách.*
>
> *Và thẻ thứ hai: **người ở hai đầu**, bước ba và bước sáu. Không có người đó, cả hệ thống đứng.*
>
> *Nói lý thuyết đủ rồi. Mời anh Tiến cho mọi người xem một lượt giao thật."*

🎬 **GHI CHÚ SÂN KHẤU**
- Đọc theo **thứ tự bước**, không đọc theo thứ tự thẻ. Chỉ tay vào nhãn "Bước…" ở góc mỗi thẻ.
- Dừng lâu nhất ở thẻ **"Người ở hai đầu"**. Nó nối với hai ô cam ở slide 4 và câu chốt ở slide 10.
- **Chuyển người** bằng câu cuối.

---

# PHẦN C — TIẾN · "Đóng vòng"

---

## SLIDE 10 · Xem một lượt giao thật · ⏱️ 1 phút 10 giây (gồm 36 giây video)

🖥️ **TRÊN SLIDE**
- Video của đoàn, **36 giây, không tiếng**, tự phát khi mở trang

🎙️ **LỜI NÓI**

**Trước khi video chạy (~10 giây):**
> *"Đây là đúng lượt giao ở Rezen mà mình kể lúc đầu. Video không có tiếng, mình nói theo."*

**Trong lúc video chạy: nói theo khung hình, mỗi ý một câu ngắn:**
> - Khi hiện **"Quy trình sử dụng dịch vụ"**: *"Đặt trên app, vận chuyển, bàn giao. Ba chặng."*
> - Khi hiện **ảnh robot ở sảnh**: *"Đơn từ Meituan chuyển thẳng sang hệ thống robot của khách sạn."* [T2]
> - Khi hiện **robot trong thang máy**: *"Nó tự gọi thang, lên đúng tầng của đoàn."*
> - Khi hiện **màn hình trên nắp robot**: *"Tới nơi, nó hiện mã. Khách quét, khoang mở."*
> - Khi hiện **khung "Điểm nghẽn thực tế"**: im lặng hai giây, để cả phòng đọc.

**Sau khi video dừng (~25 giây):**
> *"Khung cuối là thứ đoàn mình thấy tận mắt: **nhân viên khách sạn vẫn phải ra đỡ đoạn cuối**, vì thang đông, vì khách chưa quen bấm.* [T1]
>
> *Mọi người còn nhớ hai ô màu cam lúc nãy không? Đây chính là nó. **Robot lo được chặng đi lại. Còn năm mươi mét cuối vẫn cần con người.**"*

🎬 **GHI CHÚ SÂN KHẤU**
- Video **tự phát và không có tiếng**. Nếu nó không tự chạy, bấm nút ▶ trên khung video.
- Đừng nói đè liên tục lên video. Mỗi khung chỉ một câu, rồi để hình tự kể.
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

1. **Ai đặt đồ vào khoang robot ở Rezen:** shipper Meituan hay nhân viên khách sạn? Video ghi *"Xếp đồ vào khoang robot"* nhưng không nói ai làm. Lời nói slide 10 đang viết trung tính; nếu ai trong đoàn nhớ rõ thì thêm một câu.
2. **Robot giao tới cửa phòng hay chỉ tới sảnh thang máy của tầng?** Video ghi *"dừng tại sảnh thang máy, hiện mã để gọi khách"*. Lời nói slide 1 viết *"lên tới tầng của đoàn"* cho khớp. Nếu thực tế nó tới tận cửa thì sửa lại.
3. **Ngày đặt:** ghi chép của đoàn ghi là **Ngày 2** (25/08). Slide 1 nói *"tối ngày thứ hai"*. Nếu thực tế là buổi trưa thì đổi chữ "tối".

---

## 📚 Nguồn

**Của đoàn**
- [T1] Ghi chép chuyến đi, Ngày 2, *Test robot Meituan giao tới khách sạn* (Phạm Minh Quân, Nguyễn Thanh Bình) · `src/data/itinerary.ts`
- [T2] Video của đoàn `public/media/trip/robot/Robot_giao_do-36s.mp4`, khung "Bên trong một lượt giao hàng"

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
