// Số liệu ba chủ đề. Nguyên tắc: mỗi giá trị đi kèm mốc thời gian và một id trong sources.ts.
// Không có số nào ở đây được suy diễn ngoài phần đã ghi rõ "suy ra" trong caveat.
export type Metric = {
  value: string
  unit?: string
  label: string
  asOf: string
  sourceId: string
  note?: string
}

export type ChartPoint = {
  label: string
  value: number
  display: string
  emphasis?: boolean
}

export type ChartSpec = {
  id: string
  kind: 'column' | 'bar' | 'stack'
  title: string
  question: string
  axisLabel: string
  points: ChartPoint[]
  /** So sánh cùng kỳ đặt dưới biểu đồ, thay cho câu đọc; tách riêng để cột chỉ mang một đại lượng. */
  comparisons?: { period: string; value: string; delta: string; base: string }[]
  total?: { value: number; display: string; label: string }
  reading: string
  sourceIds: string[]
  caveat?: string
}

export type SpecRow = { label: string; value: string; sourceId: string; note?: string }

export type TopicData = {
  hero: Metric
  metrics: Metric[]
  context?: { title: string; caption: string; metrics: Metric[] }
  charts: ChartSpec[]
  specs?: { title: string; caption: string; rows: SpecRow[] }
  fieldNotes?: { title: string; caption: string; items: string[]; excluded: string }
}

export const droneData: TopicData = {
  hero: {
    value: '1.000.000+', unit: 'đơn', label: 'Đơn giao thương mại, luỹ kế toàn cầu',
    asOf: '30/06/2026', sourceId: 'sz-21jingji',
    note: 'Trang công nghệ của Meituan cũng ghi “hơn 1 triệu đơn” ở mốc 07/2026.',
  },
  metrics: [
    { value: '1 : 50', label: 'Một người giám sát hơn 50 drone', asOf: '05/2026', sourceId: 'mt-drone-econ', note: 'Thời kỳ đầu cần hai người cho một drone. Mô hình thị giác trên đám mây là thứ đổi được tỷ lệ này.' },
    { value: '40–50%', unit: 'mỗi năm', label: 'Mức giảm chi phí vận hành một đơn', asOf: '3–5 năm tới 2026', sourceId: 'mt-drone-econ', note: 'Meituan nói mảng y tế đã có lãi, còn mảng giao đồ ăn chưa đạt quy mô kỳ vọng; họ đặt mục tiêu có lãi ở quy mô trong hai đến ba năm.' },
    { value: '400+', unit: 'đơn/ngày', label: 'Điểm cất cánh đông nhất, từ mức 10 đơn', asOf: '05/2026', sourceId: 'mt-drone-econ' },
    { value: '21', unit: 'phút', label: 'Từ lúc đặt tới lúc nhận, một lần đo', asOf: '21/05/2026', sourceId: 'mt-drone-test', note: 'Chỉ 6 trong 21 phút là drone bay. Phần còn lại là làm món và thao tác ở hai đầu — nơi thời gian thật sự trôi đi.' },
  ],
  context: {
    title: 'Thâm Quyến: hạ tầng bay tầm thấp',
    caption: 'Toàn thành phố, gồm nhiều đơn vị vận hành.',
    metrics: [
      { value: '310', unit: 'tuyến', label: 'Tuyến bay logistics tầm thấp đã mở', asOf: '31/12/2025', sourceId: 'sz-xinhua' },
      { value: '1.000.000+', unit: 'chuyến', label: 'Chuyến drone chở hàng năm 2025 · tăng 29%', asOf: '2025', sourceId: 'sz-xinhua', note: 'Bài báo xếp quy mô này thứ nhất trong các thành phố Trung Quốc. Năm 2024 thành phố ghi 776.000 chuyến (sz-gov-lowalt-2024).' },
      { value: '1.200+', unit: 'điểm', label: 'Điểm cất, hạ cánh tầm thấp đã xây dựng', asOf: '2025', sourceId: 'sz-xinhua' },
      { value: '736.000', unit: 'chuyến bay', label: 'Tám tháng đầu 2026 · tăng 30,4%', asOf: '01–08/2026', sourceId: 'sz-21jingji', note: 'Đếm cả chuyến chở hàng lẫn chuyến bay khác trong không phận tầm thấp của thành phố.' },
    ],
  },
  charts: [
    {
      id: 'drone-cumulative', kind: 'column',
      title: 'Đơn drone thương mại của Meituan, luỹ kế',
      question: 'Đường cong này đang dốc lên hay đi ngang?',
      axisLabel: 'nghìn đơn (luỹ kế)',
      points: [
        { label: '12/2023', value: 220, display: '220' },
        { label: '12/2024', value: 450, display: '450' },
        { label: '12/2025', value: 780, display: '780' },
        { label: '06/2026', value: 1000, display: '1.000', emphasis: true },
      ],
      comparisons: [
        { period: 'Đơn mới năm 2025', value: '330 nghìn', delta: '+43%', base: 'so với 230 nghìn năm 2024' },
        { period: 'Đơn mới nửa đầu 2026', value: '220 nghìn', delta: '+47%', base: 'so với 150 nghìn nửa đầu 2025' },
      ],
      reading: 'Năm 2025 thêm 330 nghìn đơn, nhiều hơn mức 230 nghìn của năm 2024. Riêng nửa đầu 2026 đã thêm 220 nghìn.',
      sourceIds: ['mt-fy2023-eeo', 'mt-fy2024', 'mt-fy2025', 'mt-q2-2025', 'sz-21jingji'],
      caveat: 'Các mốc đến từ các bản công bố khác nhau; trừ mốc cuối 2024 (đúng 450.000), đều là số làm tròn dạng “hơn”. Đơn mới trong kỳ là suy ra từ hiệu hai mốc luỹ kế; nửa đầu 2025 lấy hơn 600.000 (06/2025) trừ 450.000, nên các mức % chỉ gần đúng. Cột cuối là ngưỡng 1 triệu, không phải con số chính xác.',
    },
    {
      id: 'drone-time', kind: 'bar',
      title: 'Cùng tuyến hơn 2 km, từ lúc đặt tới lúc nhận',
      question: 'Trên cùng một quãng đường, drone nhanh hơn xe máy bao nhiêu?',
      axisLabel: 'phút',
      points: [
        { label: 'Drone', value: 15, display: '15', emphasis: true },
        { label: 'Xe máy', value: 40, display: '40' },
      ],
      reading: 'Trên tuyến Long Hoa hơn 2 km, drone rút thời gian từ khoảng 40 phút xuống khoảng 15 phút, đã tính cả lúc nhà hàng làm món.',
      sourceIds: ['mt-longhua-2023'],
      caveat: 'Số do quản lý tuyến drone Long Hoa của Meituan nêu, dạng “khoảng”, tính từ lúc đặt tới lúc nhận và gồm cả thời gian làm món; không phải phép đo độc lập. Meituan còn công bố drone trung bình khoảng 12 phút so với gần 30 phút của cách giao thường (02/2023), nhưng không nói hai số cùng quãng đường.',
    },
  ],
  specs: {
    title: 'Drone thế hệ 4 — năng lực nền tảng theo công bố',
    caption: 'Thông số thiết kế do nhà sản xuất công bố, không phải kết quả đo tại Talent Park.',
    rows: [
      { label: 'Tải trọng', value: '2,5 kg', sourceId: 'mt-gen4' },
      { label: 'Bán kính bay', value: '10 km', sourceId: 'mt-gen4', note: 'Tăng 35% so với thế hệ 3.' },
      { label: 'Tuyến 3 km', value: '≈ 15 phút', sourceId: 'mt-gen4' },
      { label: 'Chịu gió', value: 'Cấp 6', sourceId: 'mt-gen4', note: 'Khoảng 49 km/h gió duy trì; bay được trong mưa và tuyết vừa.' },
      { label: 'Nhiệt độ vận hành', value: '−20 °C … 50 °C', sourceId: 'mt-gen4' },
      { label: 'Tính toán trên máy bay', value: '30 TOPS', sourceId: 'mt-gen4', note: 'Hai radar sóng mm 4D, IMU dự phòng ba lớp.' },
      { label: 'Giấy phép', value: 'CAAC · phủ toàn quốc, 04/2025', sourceId: 'mt-gen4', note: 'Giấy phép logistics tầm thấp toàn quốc đầu tiên: mở tuyến không cần xin phép từng chặng.' },
    ],
  },
  fieldNotes: {
    title: 'Đoàn đã tự thấy gì tại Talent Park',
    caption: 'Ghi chép của đoàn, 24–28/08/2026 — quan sát một lần, không phải phép đo lặp lại.',
    items: [
      'Đặt KFC qua mini-program trong WeChat, không dùng app riêng.',
      'Trạm nhận cố định trong công viên, có khu trả vỏ hộp ngay cạnh.',
      'Video của đoàn: drone hạ hộp hàng xuống nóc trạm.',
      'Lấy hàng bằng mã đơn; ảnh tủ có hướng dẫn chạm NFC.',
    ],
    excluded: 'Sheet của đoàn có hai mốc ~4 phút và ~60 phút cho chặng drone. Chưa rõ hai mốc đo cùng chặng hay khác chặng, nên cả hai bị loại khỏi mọi thông điệp định lượng ở đây.',
  },
}

// Chương robot hiện theo tài liệu giao phòng khách sạn do người dùng cung cấp.
export { hotelRobotData as robotData } from './hotelRobot'

export const meituanData: TopicData = {
  hero: {
    value: '150 triệu', unit: 'đơn/ngày', label: 'Đơn bán lẻ tức thời trong một ngày đỉnh',
    asOf: '12/07/2025', sourceId: 'mt-peak-2025',
    note: 'Là số của một ngày đạt đỉnh trong cuộc đua khuyến mãi, không phải mức trung bình.',
  },
  metrics: [
    { value: '34 phút', label: 'Giao trung bình, toàn bộ đơn ngày đỉnh', asOf: '12/07/2025', sourceId: 'mt-peak-2025', note: 'Giữ được mức này trong khi sản lượng tăng thêm 30 triệu đơn so với tuần trước.' },
    { value: '800 triệu+', unit: 'người', label: 'Người dùng giao dịch trong 12 tháng', asOf: 'Q3/2025', sourceId: 'mt-q3-2025' },
    { value: '3,36 triệu', unit: 'rider', label: 'Rider có đơn mỗi tháng', asOf: '10/2025', sourceId: 'mt-riders' },
    { value: '>60%', label: 'Thị phần GTV giao đồ ăn, cả năm 2025', asOf: '2025', sourceId: 'mt-fy2025' },
  ],
  context: {
    title: 'Cái giá của quy mô đó, đọc trong báo cáo 2025',
    caption: 'Số hợp nhất cả tập đoàn, thông cáo ngày 26/03/2026.',
    metrics: [
      { value: '1.440', unit: 'nghìn tỷ VND', label: 'Doanh thu cả năm 2025, tăng 8%', asOf: '2025', sourceId: 'mt-fy2025' },
      { value: '−92,4', unit: 'nghìn tỷ VND', label: 'Lỗ ròng cả năm 2025', asOf: '2025', sourceId: 'mt-fy2025' },
      { value: '−67,1', unit: 'nghìn tỷ VND', label: 'Lỗ từ hoạt động kinh doanh', asOf: '2025', sourceId: 'mt-fy2025' },
      { value: '102,6', unit: 'nghìn tỷ VND', label: 'Chi cho R&D, tăng 23%', asOf: '2025', sourceId: 'mt-fy2025', note: 'Tăng chi R&D trong năm lỗ — drone và xe tự hành nằm trong khoản này.' },
      { value: '3,4 triệu', unit: 'nhà bán', label: 'Nhà bán dùng trợ lý kinh doanh AI', asOf: '2025', sourceId: 'mt-fy2025' },
    ],
  },
  charts: [
    {
      id: 'meituan-revenue', kind: 'stack',
      title: 'Doanh thu 2025 đến từ đâu',
      question: 'Mảng nào mang tiền về, và mảng đó có lãi không?',
      axisLabel: 'nghìn tỷ VND · năm 2025',
      points: [
        { label: 'Thương mại địa phương cốt lõi', value: 1029.4, display: '1.029,4', emphasis: true },
        { label: 'Hoạt động mới (bán lẻ, quốc tế)', value: 410.5, display: '410,5' },
      ],
      total: { value: 1439.9, display: '1.440,3', label: 'Tổng doanh thu công bố' },
      reading: 'Mảng cốt lõi chiếm ~71% doanh thu nhưng vẫn lỗ vận hành 27,2 nghìn tỷ VND. Mảng mới nhỏ hơn, tăng 19%.',
      sourceIds: ['mt-fy2025'],
      caveat: 'Nguồn công bố bằng CNY: tổng 364,9 tỷ, hai mảng 260,8 và 104,0. Quy đổi ở đây theo tỷ giá 3.947 VND/CNY ngày 19/09/2026 — tỷ giá thay đổi theo ngày nên con số VND là ước tính, không phải số do Meituan công bố. Hai mảng cộng lại 1.439,9 trong khi tổng là 1.440,3, chênh lệch do làm tròn ngay từ bản gốc.',
    },
    {
      id: 'meituan-peak', kind: 'bar',
      title: 'Ngày đạt đỉnh được cấu thành từ gì',
      question: '150 triệu đơn đó là nhu cầu thật, hay là khuyến mãi?',
      axisLabel: 'triệu đơn · ngày 12/07/2025',
      points: [
        { label: 'Tổng đơn bán lẻ tức thời', value: 150, display: '150', emphasis: true },
        { label: 'Trong đó · gom deal giá sốc', value: 50, display: '≥ 50' },
        { label: 'Trong đó · cơm ghép đơn giá rẻ', value: 35, display: '≥ 35' },
      ],
      reading: 'Hai chương trình giá rẻ chiếm ít nhất 57% sản lượng ngày đỉnh. Quy mô ấy được mua bằng trợ giá.',
      sourceIds: ['mt-peak-2025'],
      caveat: 'Hai dòng sau là tập con của dòng đầu và được công bố dưới dạng “hơn”, nên 50 và 35 là sàn chứ không phải giá trị chính xác. Không cộng ba dòng lại với nhau.',
    },
  ],
  fieldNotes: {
    title: 'Đoàn đã tự trải nghiệm gì khi đặt món',
    caption: 'Ghi chép của đoàn, 24–28/08/2026 — một nhóm khách nước ngoài, quan sát một lần.',
    items: [
      'Mini-program trong WeChat có nút dịch trang; app riêng gần như chỉ tiếng Trung.',
      'Theo dõi rider thời gian thực; cảm nhận là ETA sát thực tế.',
      'Nhập mã đơn để nhận, rồi trả vỏ hộp vào khu thu hồi.',
      'Khó nhất không phải công nghệ, mà là thao tác bằng tiếng Trung.',
    ],
    excluded: 'Không có ảnh chụp màn hình app trong tư liệu được dẫn của đoàn. Minh hoạ ở bước đặt món là hình do AI tạo và được dán nhãn, không phải screenshot giao diện thật.',
  },
}
