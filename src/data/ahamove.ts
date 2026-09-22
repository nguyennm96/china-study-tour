// Liên hệ từ nội dung từng chủ đề; đây là gợi ý thảo luận, không phải kế hoạch đã chốt.
export const ahamoveReferences = {
  drone: {
    title: 'Drone & Ahamove: câu chuyện tương lai.',
    labels: { connection: 'Thách thức · cơ sở pháp lý', trial: 'Thách thức · cơ sở hạ tầng', metrics: 'Điều kiện để tiến tới', conclusion: 'Hướng phát triển trong tương lai' },
    sourceIds: ['aha-warehouse', 'aha-delivery-process', 'hcm-uav-delivery-2026', 'vn-uav-decree-288'],
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
    connection: 'Việt Nam đã có tuyến UAV được cấp phép, nhưng triển khai rộng còn phụ thuộc điều kiện vùng bay, cấp phép theo tuyến và trách nhiệm vận hành.',
    trial: 'Cần điểm cất/hạ cánh, trạm nhận hàng, hệ thống giám sát và phương án khi không thể bay. Với Ahamove, đây là hạ tầng cần chuẩn bị trước khi triển khai.',
    metrics: 'Pháp lý phù hợp · Hạ tầng sẵn sàng · Vận hành an toàn · Hiệu quả chi phí',
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
