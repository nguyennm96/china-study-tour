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
    { value: '70', unit: 'tuyến', label: 'Đang hoạt động, trong và ngoài nước', asOf: '31/12/2025', sourceId: 'mt-fy2025', note: 'Trang công nghệ Meituan ghi “65 tuyến thành phố” ở mốc 07/2026 và Keeta Drone ghi “70+”. Ba cách đếm khác nhau; báo cáo thường niên được lấy làm số chính.' },
    { value: '1.500+', unit: 'thương hiệu', label: 'Bán hàng trên tuyến drone', asOf: '07/2026', sourceId: 'mt-tech' },
    { value: '240.000+', unit: 'mặt hàng', label: 'Giao được tức thời qua drone', asOf: '30/06/2026', sourceId: 'sz-21jingji' },
    { value: '810.000+', unit: 'lượt', label: 'Giao vật tư y tế, mạng bay riêng', asOf: '30/06/2026', sourceId: 'sz-21jingji' },
  ],
  context: {
    title: 'Thâm Quyến — nền hạ tầng phía dưới tuyến bay',
    caption: 'Số liệu cấp thành phố — mọi đơn vị bay chở hàng, không riêng Meituan.',
    metrics: [
      { value: '310', unit: 'tuyến', label: 'Logistics tầm thấp, luỹ kế cả thành phố', asOf: '31/12/2025', sourceId: 'sz-xinhua' },
      { value: '+82', unit: 'tuyến', label: 'Mở mới riêng trong năm 2025', asOf: '2025', sourceId: 'sz-xinhua' },
      { value: '1.000.000+', unit: 'chuyến', label: 'Bay chở hàng năm 2025, tăng 29%', asOf: '2025', sourceId: 'sz-xinhua', note: 'Bài báo xếp quy mô này thứ nhất trong các thành phố Trung Quốc.' },
      { value: '1.200+', unit: 'điểm', label: 'Điểm cất/hạ cánh tầm thấp đã xây', asOf: '2025', sourceId: 'sz-xinhua' },
      { value: '736.000', unit: 'chuyến', label: '8 tháng đầu 2026, tăng 30,4%', asOf: '08/2026', sourceId: 'sz-21jingji' },
      { value: '70%', label: 'Drone tiêu dùng Trung Quốc làm tại đây', asOf: '2026', sourceId: 'sz-xinhua', note: 'Drone công nghiệp là 50%. Đây là thị phần sản lượng, không phải doanh thu.' },
    ],
  },
  charts: [
    {
      id: 'drone-cumulative', kind: 'column',
      title: 'Đơn drone thương mại luỹ kế',
      question: 'Đường cong này đang dốc lên hay đi ngang?',
      axisLabel: 'nghìn đơn (luỹ kế)',
      points: [
        { label: '30/09/2025', value: 670, display: '670' },
        { label: '31/12/2025', value: 780, display: '780' },
        { label: '30/06/2026', value: 1000, display: '1.000', emphasis: true },
      ],
      reading: 'Chín tháng cuối thêm ~330.000 đơn — bằng một phần ba toàn bộ số luỹ kế từ 2021.',
      sourceIds: ['mt-q3-2025', 'mt-fy2025', 'sz-21jingji'],
      caveat: 'Ba mốc đến từ ba bản công bố khác nhau nên đều là số làm tròn dạng “hơn”. Cột cuối là ngưỡng 1 triệu, không phải con số chính xác tại ngày 30/06/2026.',
    },
    {
      id: 'drone-time', kind: 'bar',
      title: 'Nhanh hơn — nhưng đang so hai phép đo khác nhau',
      question: 'Con số 15 phút của drone có so được với trải nghiệm giao hàng thường ngày không?',
      axisLabel: 'phút',
      points: [
        { label: 'Drone · tuyến 3 km (năng lực công bố)', value: 15, display: '15', emphasis: true },
        { label: 'Toàn bộ đơn Meituan · ngày đạt đỉnh', value: 34, display: '34' },
      ],
      reading: 'Cùng đơn vị phút, nhưng một bên là năng lực thiết kế trên tuyến ngắn, một bên là trung bình thực tế của mọi loại đơn.',
      sourceIds: ['mt-gen4', 'mt-peak-2025'],
      caveat: 'Không dùng cặp số này để kết luận “drone nhanh hơn 2,3 lần”. Muốn so sánh đúng cần thời gian của cùng một tập đơn, cùng cung đường, tính từ lúc bấm đặt tới lúc khách cầm hàng.',
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
