// Liên hệ từ nội dung từng chủ đề; đây là gợi ý thảo luận, không phải kế hoạch đã chốt.
export const ahamoveReferences = {
  drone: {
    title: 'Vậy theo bạn, ở Việt Nam đã có mô hình drone giao hàng chưa?',
    sourceIds: ['aha-warehouse', 'aha-delivery-process', 'hcm-uav-delivery-2026', 'vn-uav-decree-288', 'vnpost-uav-2026', 'uav-decree-288-summary', 'hcm-uav-sandbox', 'mt-gen4'],
    // Dẫn chứng thay cho ô bài học: Việt Nam đã có tuyến UAV chạy thật.
    vietnam: {
      photo: {
        src: '/media/research/cangio-uav-pad.jpg',
        alt: 'UAV của CT UAV mang hộp hàng Vietnam Post đậu trên bãi đáp chữ H tại bến phà Cần Giờ, đoàn đại biểu đứng phía sau',
        credit: 'Sở Khoa học và Công nghệ TP.HCM · 12/02/2026',
        focus: '15% center',
      },
      eyebrow: 'Việt Nam cũng đã có · 12/02/2026',
      title: 'Tuyến UAV Cần Giờ – Vũng Tàu',
      stats: [{ value: '12 km', label: 'vượt biển' }, { value: '15 phút', label: 'thời gian bay' }],
    },
    lesson: 'Điểm nhận là một phần của dịch vụ.',
    observation: 'Trạm cố định giúp thống nhất vị trí, mã nhận hàng và thao tác bàn giao.',
    fieldNotes: {
      author: 'Nguyễn Trương Tấn Sâm',
      items: [
        { label: 'Rào cản ngôn ngữ', text: 'Trải nghiệm Meituan của đoàn chỉ có tiếng Trung, chưa hỗ trợ đa ngôn ngữ.' },
        { label: 'ETA & tracking', text: 'Đoàn thấy ETA khá sát và tracking real-time; chưa đủ dữ liệu để kết luận giảm can thiệp của con người sẽ làm ETA chính xác hơn.' },
        { label: 'Nhận hàng đơn giản', text: 'Nhập mã → lấy đơn → trả vỏ hộp vào tủ thu hồi.' },
      ],
    },
    // Hai thách thức, đặt Việt Nam cạnh mô hình Meituan ở Trung Quốc để so trực tiếp.
    challenges: [
      { label: 'Cơ sở pháp lý', vietnam: { value: 'Mỗi tuyến', detail: 'phải xin phép quân đội' }, china: { value: '1 giấy phép', detail: 'cho cả nước · Meituan' } },
      { label: 'Cơ sở hạ tầng', vietnam: { value: '2 bãi đáp', detail: 'tại Cần Giờ' }, china: { value: '1.200+ điểm', detail: 'tại Thâm Quyến' } },
    ],
    conditions: ['Pháp lý phù hợp', 'Hạ tầng sẵn sàng', 'Vận hành an toàn', 'Hiệu quả chi phí'],
    question: 'Ahamove có thể cân nhắc triển khai trong tương lai, khi đủ điều kiện.',
  },
  meituan: {
    title: 'Meituan → Ahamove: hiệu quả từng đơn.',
    lesson: 'Quy mô cần đi cùng chất lượng.',
    observation: 'Ngày đạt đỉnh cho thấy năng lực điều phối; báo cáo tài chính cho thấy chi phí của quy mô.',
    connection: 'Gợi ý cho Ahamove: đánh giá ghép đơn cùng độ chính xác ETA và lãi đóng góp, thay vì chỉ nhìn sản lượng.',
    trial: 'Chọn một nhóm đơn cùng khu vực và khung giờ; thử cách ghép đơn rồi so với hiện trạng.',
    metrics: 'Tỷ lệ đúng hẹn · Sai lệch ETA · Lãi đóng góp / đơn',
    question: 'Ghép được thêm đơn có làm trải nghiệm giao hàng tốt hơn?',
  },
} as const

export type AhamoveSubject = keyof typeof ahamoveReferences
