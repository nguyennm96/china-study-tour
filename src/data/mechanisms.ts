// Sơ đồ cơ chế: ai giữ hàng ở mỗi chặng, và chặng nào đo được.
export type Actor = 'human' | 'machine' | 'system'

export type FlowNode = {
  title: string
  detail: string
  actor: Actor
  metric?: { value: string; label: string; sourceId: string }
}

export type FlowSpec = {
  eyebrow: string
  headline: string
  lead: string
  nodes: FlowNode[]
  bands: { label: string; detail: string; sourceId?: string }[]
  gap: string
}

export { hotelRobotFlow as robotFlow } from './hotelRobot'

export const meituanFlow: FlowSpec = {
  eyebrow: 'Cơ chế · một đơn đồ ăn',
  headline: 'Ba mươi bốn phút được chia cho ai?',
  lead: 'Con số công khai duy nhất là tổng thời gian tới tay khách. Bên trong là bốn chặng, chỉ một chặng do thuật toán quyết định.',
  nodes: [
    { title: 'Người đặt', detail: 'Mini-program trong WeChat, vì có nút dịch trang.', actor: 'human', metric: { value: '800 triệu+', label: 'Người dùng giao dịch 12 tháng', sourceId: 'mt-q3-2025' } },
    { title: 'Nhà bán nhận đơn', detail: 'Thời gian chế biến nằm ở đây — biến động lớn nhất của tổng.', actor: 'human' },
    { title: 'Hệ điều phối gán rider', detail: 'Ghép đơn theo vị trí và hướng đi. Chặng duy nhất thuật toán quyết định.', actor: 'system' },
    { title: 'Rider giao', detail: 'Nhiều đơn cùng lúc. Vài trăm mét cuối quyết định trải nghiệm.', actor: 'human', metric: { value: '3,36 triệu', label: 'Rider có đơn mỗi tháng', sourceId: 'mt-riders' } },
    { title: 'Người nhận', detail: 'Nhập mã hoặc nhận trực tiếp.', actor: 'human', metric: { value: '34 phút', label: 'Trung bình ngày đạt đỉnh', sourceId: 'mt-peak-2025' } },
  ],
  bands: [
    { label: 'Lớp nhu cầu', detail: 'Ngày đỉnh 150 triệu đơn, ít nhất 85 triệu từ hai chương trình giá rẻ.', sourceId: 'mt-peak-2025' },
    { label: 'Lớp chi phí', detail: 'Cả năm 2025 lỗ ròng 92,4 nghìn tỷ VND (23,4 tỷ CNY) dù doanh thu tăng 8%.', sourceId: 'mt-fy2025' },
  ],
  gap: 'Chúng tôi bỏ các số liệu thường được dẫn về hệ điều phối (số phép tính mỗi giờ, thời gian tính tuyến) vì chỉ tìm được nguồn thứ cấp đã cũ, không có bản công bố gốc kèm mốc thời gian. Thiếu chúng, sơ đồ này mô tả cấu trúc chứ không định lượng chặng điều phối.',
}
