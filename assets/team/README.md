# Ảnh key visual của trang Team

Hiện đang dùng `shenzhen-study-trip-key-visual.webp` — xem [SOURCES.md](SOURCES.md).

Muốn đổi ảnh thì xoá file cũ và thả **một** file mới vào thư mục này, không cần sửa code:

```
assets/team/<tên-gì-cũng-được>.png   (hoặc .jpg / .jpeg / .webp)
```

Trang đang chạy `npm run dev` sẽ tự nạp lại. Nếu thư mục trống, trang quay về ảnh minh hoạ mặc định
`assets/generated/shenzhen-team-editorial-v2.png`.

Để nhiều hơn một file thì file đầu tiên theo thứ tự tên được dùng — nên giữ đúng một file cho rõ ràng.

## Nhãn nguồn

Chú thích và alt text của ảnh tuỳ chỉnh nằm trong `src/components/TourSections.tsx` (hằng `customTeamArt`).
Mặc định nó ghi đây là key visual do AI tạo cho chuyến đi, không phải ảnh chụp của đoàn — đúng với
poster "Shenzhen from A to Z". Nếu bạn thả vào một **ảnh chụp thật** của đoàn thì sửa lại hai dòng đó
cho đúng, đừng để nhãn AI trên một tấm ảnh thật.
