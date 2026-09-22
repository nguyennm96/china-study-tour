import type { TopicData } from './topicData'
import type { FlowSpec } from './mechanisms'

// Nguồn biên tập do người dùng chỉ định; số thị trường chưa kiểm chứng độc lập.
export const hotelRobotSourceId = 'hotel-robot-team-doc'
export const hotelRobotPages = [
  { key: 'journey', kicker: 'Robot khách sạn · Từ đơn hàng tới cửa phòng', title: 'Sáu bước. Một lần giao tận phòng.' },
  { key: 'navigation', kicker: 'Robot khách sạn · Định vị', title: 'Biết đúng phòng. Không cần nhận diện món.' },
  { key: 'elevator', kicker: 'Robot khách sạn · Điểm tích hợp khó nhất', title: 'Lên đúng tầng nhờ kết nối thang máy.' },
  { key: 'dispatch', kicker: 'Robot khách sạn · Hệ thống phía sau', title: 'Một đội robot cần một bộ điều phối.' },
  { key: 'infrastructure', kicker: 'Robot khách sạn · Điều kiện triển khai', title: 'Khách sạn phải sẵn sàng trước.' },
  { key: 'market', kicker: 'Robot khách sạn · Thị trường toàn cầu', title: 'Tăng trưởng nhanh. Tích hợp vẫn khó.' },
  { key: 'ahamove', kicker: 'Robot khách sạn · Liên hệ Ahamove / Truck On-Demand', title: 'Robot → Ahamove: bài toán điều phối.' },
] as const
export type HotelRobotPage = typeof hotelRobotPages[number]['key']

export const hotelRobotFlow: FlowSpec = {
  eyebrow: 'Quy trình · robot giao phòng', headline: hotelRobotPages[0].title,
  lead: 'Nhân viên nạp đồ và gán số phòng; robot thực hiện chặng di chuyển trong tòa nhà.',
  nodes: [
    { title: 'Khách đặt đồ', detail: 'Qua app, QR, lễ tân hoặc quầy F&B.', actor: 'human' },
    { title: 'Tạo tác vụ', detail: 'PMS/POS hoặc nhân viên nhập điểm lấy và phòng nhận.', actor: 'system' },
    { title: 'Nạp & gán phòng', detail: 'Nhân viên đặt đồ, xác nhận khoang nào giao phòng nào.', actor: 'human' },
    { title: 'Di chuyển', detail: 'Theo bản đồ, tránh vật cản, gọi thang và tới đúng tầng.', actor: 'machine' },
    { title: 'Báo khách', detail: 'Gọi điện phòng, SMS hoặc thông báo qua ứng dụng.', actor: 'system' },
    { title: 'Mở khoang & nhận', detail: 'Mã hoặc thao tác xác nhận tùy hệ thống; ghi log rồi quay về.', actor: 'human' },
  ],
  bands: [
    { label: 'Gán đích', detail: 'Khoang hàng → số phòng → tọa độ trên bản đồ đã thiết lập.', sourceId: hotelRobotSourceId },
    { label: 'Hoàn tất', detail: 'Nhận hàng, đóng khoang, cập nhật task và quay về trạm.', sourceId: hotelRobotSourceId },
  ],
  gap: 'Tài liệu mô tả kiến trúc và quy trình, không cung cấp số đo thực địa về tỷ lệ giao thành công, thời gian chờ thang, số can thiệp hay chi phí mỗi đơn tại khách sạn đoàn ở.',
}

export const hotelInfrastructure = [
  { icon: 'task', title: 'Đơn & số phòng', detail: 'Kết nối PMS/POS hoặc nhập tác vụ thủ công.' },
  { icon: 'map', title: 'Bản đồ đã gắn nhãn', detail: 'Phòng, thang máy, điểm lấy hàng và trạm sạc.' },
  { icon: 'elevator', title: 'Thang máy tương thích', detail: 'Khảo sát bộ điều khiển, API hoặc module tích hợp.' },
  { icon: 'wifi', title: 'Kết nối ổn định', detail: 'Wi-Fi / 4G xuyên sảnh, hành lang và khu vực thang.' },
  { icon: 'battery', title: 'Sạc & đường đi', detail: 'Trạm sạc, lối đủ rộng, sàn phẳng và ngưỡng thấp.' },
  { icon: 'human', title: 'Người xử lý ngoại lệ', detail: 'Nạp đồ, hỗ trợ khách và tiếp quản khi có sự cố.' },
] as const

export const hotelRobotData: TopicData = {
  hero: { value: '~0,7', unit: 'tỷ USD', label: 'Thị trường robot khách sạn toàn cầu', asOf: '2025 · ước lượng', sourceId: hotelRobotSourceId },
  metrics: [
    { value: '~2,13', unit: 'tỷ USD', label: 'Thị trường toàn cầu được dự báo', asOf: '2030 · dự báo', sourceId: hotelRobotSourceId },
    { value: '~24%', label: 'CAGR được tài liệu tổng hợp dẫn lại', asOf: '2026–2030 · dự báo', sourceId: hotelRobotSourceId,
      note: 'Giữ đúng mốc và tỷ lệ trong tài liệu. Không tự suy ra CAGR từ cặp số làm tròn 2025 và 2030 vì khoảng thời gian không trùng.' },
  ],
  charts: [{
    id: 'hotel-robot-market', kind: 'column', title: 'Thị trường robot khách sạn toàn cầu',
    axisLabel: 'Tỷ USD · ước lượng và dự báo',
    question: 'Tăng trưởng thị trường có đồng nghĩa dễ triển khai?',
    points: [
      { label: '2025 · ước lượng', value: .7, display: '0,7' },
      { label: '2030 · dự báo', value: 2.13, display: '2,13', emphasis: true },
    ],
    reading: 'Quy mô toàn cầu; việc nhân rộng vẫn phụ thuộc tích hợp thang máy, hệ thống khách sạn và chi phí vận hành.',
    sourceIds: [hotelRobotSourceId],
    caveat: 'Số ước lượng và dự báo được dẫn lại từ tài liệu nội bộ ngày 20/09/2026, không phải số riêng Trung Quốc hay số đo của đoàn. Chưa kiểm chứng báo cáo ngành gốc trong lần biên tập này. Không nội suy các năm ở giữa.',
  }],
  fieldNotes: {
    title: 'Tích hợp quyết định khả năng nhân rộng', caption: 'Tổng hợp từ tài liệu robot giao phòng ngày 20/09/2026.',
    items: ['Khách sạn cũ có thể phải nâng cấp hoặc bổ sung module thang máy.', 'Nhân viên vẫn nạp đồ, gán phòng và xử lý ngoại lệ.', 'Giá giảm và tăng trưởng nhanh không bảo đảm lợi nhuận.'],
    excluded: 'Không dùng các số đội xe đường phố, vận tốc L4, quãng đường 120 km/ngày hoặc media rider để mô tả robot giao phòng. Tài liệu không xác nhận khách sạn, hãng robot hay mô hình mà đoàn trực tiếp sử dụng.',
  },
}
