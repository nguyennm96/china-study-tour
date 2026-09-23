// Bài chia sẻ "Một ngày ở IOTE: AI bước ra khỏi màn hình" — 5 slide, Tiến trình bày, 5–10 phút gồm Q&A.
// Mặt slide bám khối "TRÊN SLIDE" của docs/iote-script-v1-draft.md; lời nói và ghi chú sân khấu chỉ nằm trong tài liệu đó.
// Hai ảnh thiết bị lấy từ Wikimedia là ảnh thật minh hoạ loại thiết bị, không chụp tại IOTE: chú thích phải nói rõ.

export type IotePhoto = { src: string; alt: string; width: number; height: number; credit?: string }

const presenter = 'Tiến'

export const iotePages = [
  { key: 'open', chapter: 'Mở đầu', kicker: 'Triển lãm IoT quốc tế lần thứ 25 · Thẩm Quyến · 26–28/08/2026', title: 'Một ngày ở IOTE: AI bước ra khỏi màn hình', sourceIds: ['trip-sheet'] },
  { key: 'scale', chapter: 'Quy mô', kicker: 'IOTE 2026 · Quy mô · 08/2026', title: 'Bốn hall trong một trung tâm mười chín hall', sourceIds: ['iote-2026', 'shenzhen-world-aipc'], source: 'Nguồn: Ban tổ chức IOTE tự công bố, 08/2026 · AIPC, hồ sơ Shenzhen World · Ảnh: Dinkun Chen, CC BY-SA 4.0, Wikimedia Commons' },
  { key: 'machines', chapter: 'Điều thứ nhất', kicker: 'Điều thứ nhất · AI ở IOTE', title: 'AI ở IOTE là máy móc, không phải màn hình', sourceIds: ['trip-sheet'], source: 'Nguồn: ghi chép và ảnh của đoàn tại IOTE, 26/08/2026 · 10–20% là ước lượng bằng mắt, không phải số thống kê' },
  { key: 'shelf', chapter: 'Điều thứ hai', kicker: 'Điều thứ hai · Hàng bán sẵn', title: 'Phần lớn là hàng bán sẵn, mua về là dùng', sourceIds: ['trip-sheet'], source: 'Nguồn: ghi chép của đoàn, 26/08/2026 · 80% là ước tính của Bình, không phải phép đo · Đoàn không ghi lại báo giá' },
  { key: 'takeaway', chapter: 'Mang về', kicker: 'Mang về · Đề xuất để thảo luận', title: 'Nếu thử, nên thử theo thứ tự nào?', sourceIds: ['trip-sheet'], source: 'Đề xuất từ ghi chép của đoàn · chưa phải kế hoạch, chưa có mốc thời gian' },
] as const satisfies readonly { key: string; chapter: string; kicker: string; title: string; sourceIds: readonly string[]; source?: string }[]
export type IotePage = typeof iotePages[number]['key']

export const ioteIntro = { title: 'Một ngày ở IOTE', presenter }

export const iotePhotos = {
  venue: { src: '/media/places/iote.jpg', width: 1280, height: 854, alt: 'Hành lang có mái che chạy dọc các hall của Trung tâm Hội chợ Quốc tế Thâm Quyến, bên trái là lối vào hall số 8', credit: 'Dinkun Chen · CC BY-SA 4.0 · Wikimedia Commons' },
  icecream: { src: '/media/places/iote-robot-icecream.jpg', width: 1080, height: 1920, alt: 'Ảnh đoàn chụp tại IOTE: cánh tay robot trong máy bán kem tự động đặt ly kem có topping lên khay nhận' },
  tunstar: { src: '/media/places/iote-team-1.jpg', width: 1200, height: 1600, alt: 'Ảnh đoàn chụp tại IOTE: booth TunStar với khẩu hiệu tiếng Trung “Để AI bước ra khỏi màn hình, cảm nhận thế giới thật”' },
  pda: { src: '/media/places/iote-sample-pda.jpg', width: 1117, height: 1600, alt: 'Ảnh thật minh hoạ, không chụp tại IOTE: máy quét cầm tay Aitronic, màn hình hiện giao diện Android', credit: 'Bartolo Bernoulli · CC BY-SA 4.0' },
  rfid: { src: '/media/places/iote-sample-rfid.jpg', width: 1600, height: 740, alt: 'Ảnh thật minh hoạ, không chụp tại IOTE: tem nhãn hàng chiếu ngược sáng, thấy vòng anten RFID nằm dưới lớp mã vạch', credit: 'Pedalito · CC0' },
  crowd: { src: '/media/places/iote-team-5.jpg', width: 1600, height: 1200, alt: 'Ảnh đoàn chụp tại IOTE: thành viên đoàn mặc áo Ahamove đứng giữa lối đi đông kín khách' },
} satisfies Record<string, IotePhoto>

export const ioteVideo = {
  src: '/media/places/iote-robot-bar.mp4', poster: '/media/places/iote-robot-bar-poster.jpg', width: 720, height: 1280,
  alt: 'Clip đoàn quay tại IOTE: cánh tay robot lấy đồ uống từ dãy chai treo ngược trong một quầy tròn, khách đứng quay điện thoại',
  caption: 'Quầy pha nước không có nhân viên · clip đoàn quay tại IOTE',
}

export const ioteOpen = {
  lead: 'Ngày thứ ba của chuyến đi · cả đoàn đi trọn một ngày',
  question: 'Ở triển lãm công nghệ lớn của Trung Quốc, AI xuất hiện nhiều nhất dưới dạng nào: chatbot trên màn hình, hay máy móc ngoài đời thật?',
}

export const ioteScale = {
  stats: [
    { value: '80.000', unit: 'm²', label: 'diện tích IOTE, khoảng 11 sân bóng đá' },
    { value: '1.000+', unit: '', label: 'doanh nghiệp trưng bày' },
    { value: '100.000+', unit: '', label: 'lượt khách chuyên ngành' },
  ],
  asOf: '08/2026 · ban tổ chức công bố',
  venue: 'Cả trung tâm hội chợ có 19 hall, 400.000 m² trong nhà. IOTE dùng 4 hall.',
}

export const ioteMachines = {
  slogan: '让AI走出屏幕，感知真实世界',
  sloganVi: '“Để AI bước ra khỏi màn hình, cảm nhận thế giới thật”',
  sloganBy: 'Booth TunStar',
  share: { value: '10–20%', label: 'Ở khu AI, phần mềm và chatbot chỉ chiếm chừng này. Phần còn lại là robot và thiết bị.' },
  estimate: 'Ước lượng bằng mắt của đoàn, không phải số thống kê.',
  icecreamCaption: 'Máy bán kem: chọn vị trên màn hình, trả bằng Alipay, cánh tay robot tự làm và đưa ra.',
}

export const ioteShelf = {
  items: [
    { photo: 'pda', title: 'Máy quét cầm tay', body: 'Bên trong là một máy Android gắn thêm đầu quét mã.' },
    { photo: 'rfid', title: 'Tem RFID', body: 'Con chip mỏng dán dưới nhãn, máy đọc từ xa, không cần quét từng món. Có booth in tem tại chỗ, rất rẻ khi mua số lượng lớn.' },
  ],
  quote: 'Ít thứ để xây sâu thêm, chủ yếu là mua và dùng.',
  quoteBy: 'Quân',
  sampleNote: 'Ảnh minh hoạ loại thiết bị, không chụp tại IOTE',
} as const satisfies { items: readonly { photo: keyof typeof iotePhotos; title: string; body: string }[]; quote: string; quoteBy: string; sampleNote: string }

export const ioteTakeaway = {
  tag: 'Đề xuất để thảo luận, chưa phải kế hoạch',
  steps: [
    { title: 'Tận dụng điện thoại tài xế', body: 'Trước khi mua máy quét chuyên dụng, xem app trên điện thoại còn làm thêm được gì.' },
    { title: 'Máy quét đeo ngón tay ở kho trung chuyển', body: 'Phân loại hàng nhanh hơn, người soạn hàng rảnh cả hai tay.' },
    { title: 'Tem RFID, kính thông minh', body: 'Kính hiện chỉ dẫn lấy hàng ngay trước mắt. Chỉ tính khi có kho đủ lớn, đủ nhiều hàng để bù chi phí.' },
  ],
  close: 'Công nghệ ở đây không đứng trên sân khấu. Nó nằm trên kệ, có giá, mua về dùng được ngay.',
}
