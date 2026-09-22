// Liên hệ từ nội dung từng chủ đề; đây là gợi ý thảo luận, không phải kế hoạch đã chốt.
export const ahamoveReferences = {
  drone: {
    title: 'Drone → Ahamove: chuẩn hoá điểm nhận.',
    lesson: 'Điểm nhận là một phần của dịch vụ.',
    observation: 'Trạm cố định giúp thống nhất vị trí, mã nhận hàng và thao tác bàn giao.',
    connection: 'Với các cụm đơn lặp lại, Ahamove có thể chuẩn hoá điểm giao, hướng dẫn nhận và xác nhận hoàn tất.',
    trial: 'Chọn một cụm văn phòng hoặc chung cư; thử điểm nhận có khung giờ và người phụ trách.',
    metrics: 'Thời gian chờ · Tỷ lệ giao thành công · Chi phí / đơn',
    question: 'Điểm nhận nào có đủ đơn lặp lại để đáng thử?',
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
