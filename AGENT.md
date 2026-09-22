# Style guide · Shenzhen Live

Hướng dẫn giữ giao diện nhất quán khi phát triển website chia sẻ chuyến đi Thâm Quyến của Ahamove. Ưu tiên yêu cầu mới nhất của người dùng; khi không có yêu cầu đổi hướng thiết kế, tiếp nối style trong mã hiện tại.

## Tinh thần thiết kế

- Thiết kế cho người thuyết trình và người xem trên màn chiếu: một ý chính mỗi slide, số lớn, chữ ngắn, hình ảnh rõ.
- Light mode, nền trắng ngà, chữ xanh navy, cam đất làm điểm nhấn. Giữ cảm giác sáng, gọn và có khoảng thở.
- Bản đồ, ảnh chuyến đi và minh hoạ là nội dung chính; thanh điều hướng và nút điều khiển giữ vai trò hỗ trợ.
- Viết tiếng Việt tự nhiên, có dấu. Nhãn nút mô tả hành động: “Slide sau”, “Quay lại bản đồ”, “Chạy lại từ đầu”.
- Khi có ảnh tham chiếu được chọn, bám bố cục và tỷ lệ của ảnh; không tự thay bằng một mẫu landing page khác.

## Các file làm chuẩn

| Phần | File |
| --- | --- |
| Font, màu và focus dùng chung | `src/main.tsx`, `src/styles.css` |
| Khung slide và thanh điều hướng | `src/components/Presentation.tsx`, `src/components/SlideDeck.css` |
| Nút và tiện ích chung của bài trình bày | `src/components/StudyTour.css` |
| Thứ tự slide, nhãn chương | `src/data/deck.ts` |
| Bản đồ tám điểm dừng và modal | `src/components/ItineraryMap.tsx`, `src/data/itinerary.ts` |
| Live-map V2 | `src/components/LiveAtlas.tsx`, `src/components/LiveAtlas.css` |
| Biểu đồ | `src/components/DataCharts.tsx`, `src/components/DataCharts.css` |
| Nội dung, số liệu và nguồn | `src/data/`, `docs/presentation-data-sources.md` |

Một số tài liệu cũ mô tả bộ 28 slide. Trang `/` hiện dùng `classicDeck()` với bốn màn: Mở đầu → Thành viên → Hành trình → Mang về; bài theo chủ đề mở trong ghim bản đồ. Kiểm tra route và component thực tế trước khi sửa.

## Màu sắc

Dùng CSS variables có sẵn thay vì tạo bảng màu riêng cho mỗi component. Tên `--ink` và `--paper` là tên kế thừa: trong light mode, `--ink` là nền sáng và `--paper` là chữ tối.

| Token | Giá trị | Vai trò |
| --- | --- | --- |
| `--ink` | `#fffdf9` | Nền chính trắng ngà |
| `--ink-deep` | `#f3f6f7` | Nền ngoài khung |
| `--surface` | `#f1f5f7` | Mảng nền phụ |
| `--surface-raised` | `#e7eef3` | Nhãn và vùng nền nhấn nhẹ |
| `--paper` | `#172b3d` | Tiêu đề và chữ chính |
| `--mist` | `#435b6c` | Nội dung phụ |
| `--muted` | `#5b7081` | Chú thích |
| `--brand` | `#be4b0c` | Điểm nhấn, trạng thái active, focus |
| `--brand-soft` | `#a83d08` | Biến thể cam đậm |
| `--line` | `rgba(23, 43, 61, .14)` | Đường phân cách |
| `--line-bright` | `rgba(23, 43, 61, .28)` | Viền tương tác |

V2 có phạm vi màu riêng trong `.live-atlas`: nền `#f5f3eb`, `--atlas-navy: #193541`, `--atlas-muted: #5a6e70`. Giữ các override này trong V2, tránh ảnh hưởng trang `/`.

## Chữ và bố cục

- Dùng **Lexend** được đóng gói qua `@fontsource/lexend`; các weight hiện có là 400, 500, 600, 700 và 800.
- Thân bài thường dùng 400–500; tiêu đề 500–600. Dùng `text-wrap: balance` cho tiêu đề và chừa đủ khoảng cho dấu tiếng Việt.
- Cỡ chữ tham chiếu trên khung thiết kế: tiêu đề slide 46px, tiêu đề mở đầu 72px, nội dung 15–17px, kicker 10–11px. Chỉ dùng chữ nhỏ cho thông tin thứ cấp.
- Kicker viết hoa, giãn chữ nhẹ; không áp dụng kiểu này cho đoạn văn. Số liệu dùng chữ số thẳng hàng khi cần so sánh.
- Khung trình bày rộng **1280px**, cao suy theo tỷ lệ màn hình và chặn trong **600–1024px**, rồi scale đồng đều. Modal bản đồ chứa slide thiết kế **1280×720px**.
- Giữ slide nằm trọn màn hình. Khi chật, rút gọn câu, điều chỉnh khoảng cách hoặc chia trang; không thu nhỏ toàn bộ chữ để nhét nội dung.
- Khoảng cách tham chiếu của deck: padding `40px 56px 18px`, gap chính `28px`; phần nội dung chia cột thường dùng gap `24–48px`.
- Ưu tiên bố cục phẳng, ảnh lớn và đường phân cách. Card dùng khi cần nhóm nội dung; bo góc thường 14–20px, shadow nhẹ.
- Thanh điều hướng nổi có nền trắng gần đục, viền mảnh và bo 16px. Khi modal điểm dừng mở, thanh này thu xuống để nhường chỗ cho nội dung.
- Dùng `minmax(0, 1fr)`, `min-width: 0`, `min-height: 0` trong grid/flex để tránh tràn. Giữ các quy tắc `.is-compact` và responsive sẵn có.

## Icon, bản đồ và media

- Icon chức năng dùng **Phosphor** từ `@phosphor-icons/react`; giữ weight và kích thước nhất quán với nút lân cận. Không dùng emoji thay icon UI.
- Ghim có chủ đề chính và **IOTE Expo** dùng sao vàng cùng hai tia lấp lánh. Dùng lại `.is-featured`, `.stop-topic-star`, `.stop-sparkle`.
- Màu sao hiện tại là `#e8ab0d`, tia sáng `#e7b221`, nền ghim `#fffaf0`, viền `#dfb74e`. Giữ hiệu ứng nhỏ để tên địa điểm vẫn dễ đọc.
- MapLibre điều khiển vị trí marker bằng `transform`; chỉ animate icon bên trong, không ghi đè transform của marker.
- Bản đồ nền giữ màu dịu, nhãn ít và đủ đọc. Không che attribution hoặc đặt trang trí chặn thao tác kéo, zoom, chọn ghim.
- Tái sử dụng ảnh, icon 3D và model đã có trong `assets/` và `public/`. Dùng `object-fit: cover` cho ảnh bối cảnh, `contain` cho hình cần xem đủ.
- Giữ alt text và sổ nguồn phân biệt ảnh thật, hình AI và mô phỏng; việc rút gọn nhãn hiển thị không được làm mất xuất xứ tư liệu.

## Chuyển động và tương tác

- Transition nút nhẹ khoảng 180–220ms; chuyển slide khoảng 280–350ms. Ưu tiên opacity và transform, không animate kích thước gây xô bố cục.
- Sao vàng dùng glow 3.6s, tia sáng 2.8s, tia thứ hai lệch 1.4s. Chỉ chạy khi `prefers-reduced-motion: no-preference`.
- Tôn trọng `prefers-reduced-motion` cho mọi hiệu ứng mới; vẫn giữ icon và thông tin khi tắt chuyển động.
- Giữ focus nhìn rõ, nút icon có `aria-label`, icon trang trí có `aria-hidden`. Mục tiêu vùng bấm mới là ít nhất 44×44 CSS px ở kích thước hiển thị thực tế.
- Modal có tiêu đề truy cập được, giữ focus bên trong, đóng bằng Escape và trả focus về ghim đã mở nó. Phím chuyển trang trong modal không được chuyển cả deck phía sau.
- Giữ thao tác bàn phím, hash/deep link và trạng thái loading/error. Không để hiệu ứng làm chậm hoặc che thao tác.

## Nội dung và biểu đồ

- Mỗi slide trả lời một câu hỏi; giữ con số, nhãn ngắn và mốc thời gian trên mặt slide. Diễn giải dài và nguồn đầy đủ nằm ở tầng dữ liệu hoặc tài liệu.
- Không tự sửa số liệu, đơn vị, mốc thời gian hay ranh giới bằng chứng khi chỉ chỉnh style.
- Biểu đồ dùng các token `--viz-*`: cam `#be4b0c`, xanh dương `#256abf`, xanh lá `#0f8a5f`. Dùng nhãn trực tiếp và giữ nút “Xem dạng bảng”.
- Nội dung liên hệ Ahamove là đề xuất thảo luận khi chưa có bằng chứng triển khai; không trình bày thành tính năng đang vận hành.

## Cách thay đổi và kiểm tra

- Sửa component và CSS đang phụ trách màn hình; tái sử dụng class và dependency có sẵn. Giữ thay đổi nhỏ, tránh thêm thư viện cho một hiệu ứng đơn giản.
- Không ghi đè công việc chưa commit của người dùng. Kiểm tra `git status` và stage rõ các file thuộc yêu cầu.
- Với thay đổi giao diện, chạy `npm run build` và xem trực tiếp màn hình bị ảnh hưởng trên trình duyệt; kiểm tra desktop và màn hẹp nếu thay đổi bố cục.
- Khi thay đổi logic, điều hướng, dữ liệu hoặc 3D, chạy test phù hợp; toàn bộ test hiện có chạy bằng `node --test tests/*.test.mjs`.
- Kiểm tra chữ bị cắt, tràn khung, focus, đóng/mở modal và reduced motion theo phạm vi thay đổi. Build thành công không thay cho xác nhận bằng trình duyệt.
- Báo rõ lỗi test hoặc phần chưa kiểm tra. Không đổi assertion chỉ để có kết quả xanh; không tự commit, push hay deploy nếu người dùng chưa yêu cầu.
