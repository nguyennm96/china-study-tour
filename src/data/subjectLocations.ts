// Ba điểm của bài chia sẻ. Talent Park là địa điểm đoàn thật sự trải nghiệm drone;
// Tọa độ robots giữ để tương thích bản đồ cũ, KHÔNG được dùng làm địa điểm khách sạn.
// Chương robot hiện là nghiên cứu tổng quát về khách sạn Trung Quốc; chưa xác định một khách sạn cụ thể.
export const subjectLocations: Record<string, { coordinates: [number, number]; place: string; short: string }> = {
  drone: { coordinates: [113.9441738, 22.5136618], place: 'Talent Park', short: 'Drone giao hàng' },
  robots: { coordinates: [113.9515, 22.5400], place: 'Khách sạn · Trung Quốc', short: 'Robot giao phòng' },
  meituan: { coordinates: [113.9226, 22.5389], place: 'Nanshan · Điểm minh họa', short: 'Đặt đồ ăn Meituan' },
}
