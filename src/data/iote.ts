// Trang "AI là máy móc" lấy từ bài nói IOTE của Tiến, chèn vào ghim IOTE ngay trước trang ảnh của đoàn.
// Ghim IOTE (places.ts, hall9.ts) là bản chính; deck /iote/ chạy đúng dãy trang của ghim.
// Mặt slide bám khối "TRÊN SLIDE" của docs/iote-script-v1-draft.md; lời nói chỉ nằm trong tài liệu đó.

export type IotePhoto = { src: string; alt: string; width: number; height: number; credit?: string }

export const iotePages = [
  { key: 'machines', chapter: 'AI là máy móc', kicker: 'IOTE · AI ở IOTE', title: 'AI ở IOTE là máy móc, không phải màn hình.', sourceIds: ['trip-sheet'], source: 'Nguồn: ghi chép và ảnh của đoàn tại IOTE, 26/08/2026 · 10–20% là ước lượng bằng mắt, không phải số thống kê' },
] as const satisfies readonly { key: string; chapter: string; kicker: string; title: string; sourceIds: readonly string[]; source: string }[]
export type IotePage = typeof iotePages[number]['key']

export const iotePhotos = {
  icecream: { src: '/media/places/iote-robot-icecream.jpg', width: 1080, height: 1920, alt: 'Ảnh đoàn chụp tại IOTE: cánh tay robot trong máy bán kem tự động đặt ly kem có topping lên khay nhận' },
  tunstar: { src: '/media/places/iote-team-1.jpg', width: 1200, height: 1600, alt: 'Ảnh đoàn chụp tại IOTE: booth TunStar với khẩu hiệu tiếng Trung “Để AI bước ra khỏi màn hình, cảm nhận thế giới thật”' },
} satisfies Record<string, IotePhoto>

export const ioteMachines = {
  slogan: '让AI走出屏幕，感知真实世界',
  sloganVi: '“Để AI bước ra khỏi màn hình, cảm nhận thế giới thật”',
  sloganBy: 'Booth TunStar',
  share: { value: '10–20%', label: 'Ở khu AI, phần mềm và chatbot chỉ chiếm chừng này. Phần còn lại là robot và thiết bị.' },
  estimate: 'Ước lượng bằng mắt của đoàn, không phải số thống kê.',
  icecreamCaption: 'Máy bán kem: chọn vị trên màn hình, trả bằng Alipay, cánh tay robot tự làm và đưa ra.',
}
