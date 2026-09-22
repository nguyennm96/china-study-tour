# Gom số liệu và thêm liên hệ Ahamove

Yêu cầu: gom các slide số liệu và thêm một slide liên hệ Ahamove; giữ hướng hình 2D và không hiện nhãn “Minh hoạ”.

- Deck từ 30 còn 27 slide: Drone và Meituan mỗi chương giảm từ 8 xuống 6, thêm slide Ahamove cuối bài.
- Slide 5–6 và 19–20 giữ đủ hero, các chỉ số, bối cảnh và cả hai biểu đồ của từng chủ đề. Chỉ thay cách trình bày; không thêm số liệu ngoài nguồn hoặc bỏ mốc thời gian.
- Slide 27 nối ba chủ đề với ba gợi ý thử nghiệm cho Ahamove, kèm chỉ số đánh giá. Không mô tả đây là chức năng hoặc kế hoạch đã có của công ty.
- Robot vẫn có 8 slide theo tài liệu giao phòng, nay ở vị trí 9–16.
- Hash được đánh số lại; README và bảng đối chiếu nguồn đã cập nhật.

## Kiểm tra

- 18/18 bài kiểm tra dữ liệu và điều hướng đạt: `node --test tests/topic-data.test.mjs tests/tour-navigation.test.mjs`.
- `npm run build` thành công. Vẫn có cảnh báo kích thước chunk mô phỏng 3D có sẵn.
- Browser: 5 slide mới × 2 khung 1280×720 / 1280×600, cùng 4 biểu đồ ở dạng bảng × 2 khung = 18 trạng thái. Không có nội dung chạm thanh điều hướng hoặc ra ngoài slide, không có ảnh hỏng, không hiện nhãn “Minh hoạ”. Chi tiết: `consolidated-layout-checks.json`.
- Đã xem trực quan ảnh slide tổng hợp Drone, Meituan, tài chính và liên hệ Ahamove. Hình 2D dùng lại bộ tài sản đã có.
- Không chạy lại bộ kiểm tra 3D ngoài phạm vi thay đổi; lỗi chuyển động worker đã ghi trong lần QA trước không được coi là đã sửa.
