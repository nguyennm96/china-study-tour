// Bài chia sẻ "Một cuốc xe Didi ở Thẩm Quyến" — bản v5, 9 slide, 20 phút gồm Q&A.
// Mặt slide bám khối "TRÊN SLIDE" của docs/didi-script-v5-present.md; lời nói và ghi chú sân khấu chỉ nằm trong tài liệu đó.
// Tiền giữ nguyên CNY như trên ảnh chụp màn hình, để người xem nhìn ảnh là thấy khớp số.
// Toạ độ khoanh trên ảnh (`Rect`) là tỉ lệ 0–1 theo bề rộng/bề cao ảnh gốc.

export type Presenter = 'Sâm' | 'Bình'
export type Rect = { x: number; y: number; w: number; h: number }
export type Photo = { src: string; alt: string; width: number; height: number }

const chapter = { see: 'Bình · Cái em thấy', dig: 'Sâm · Tìm hiểu thêm', close: 'Bình · Chốt bài' }

export const didiPages = [
  { key: 'open', presenter: 'Bình', chapter: chapter.see, kicker: 'Study trip IOTE 2026 · 24–28/08/2026 · Bình & Sâm', title: 'Một cuốc xe Didi ở Thẩm Quyến — và những gì đằng sau nó', sourceIds: ['didi-sam-deck'] },
  { key: 'scale', presenter: 'Bình', chapter: chapter.see, kicker: 'Didi · Quy mô · Quý II/2026', title: 'Didi — nền tảng gọi xe lớn nhất Trung Quốc', sourceIds: ['didi-q2-2026', 'didi-h1-2026-caixin', 'vn-ridehail-q1-2026'], source: 'Nguồn: Báo cáo quý II/2026 của Didi, công bố 14/8/2026 · Mordor Intelligence, Q1/2026' },
  { key: 'tiers', presenter: 'Bình', chapter: chapter.see, kicker: 'Didi · Chọn xe · Huaqiangbei → Dongmen', title: 'Cùng một chuyến 4,8km — mười hạng xe để chọn', sourceIds: ['didi-sam-deck'], source: 'Ảnh chụp màn hình app Didi ngày 23/9/2026, đặt lại đúng tuyến đoàn đã đi · giá niêm yết bằng CNY', reveal: true },
  { key: 'screens', presenter: 'Bình', chapter: chapter.see, kicker: 'Didi · Trước và sau chuyến xe', title: 'App nói trước khi mình kịp hỏi', sourceIds: ['didi-sam-deck'], source: 'Ảnh chụp màn hình app Didi của đoàn trong chuyến đi, 08/2026' },
  { key: 'traffic', presenter: 'Sâm', chapter: chapter.dig, kicker: 'Tìm hiểu thêm · Đèn đỏ', title: 'Làm sao app biết tài xế đang kẹt đèn đỏ?', sourceIds: ['amap-light-xinhua', 'amap-light-ithome-2026', 'amap-light-taibo'], cite: true, reveal: true },
  { key: 'driver', presenter: 'Sâm', chapter: chapter.dig, kicker: 'Tìm hiểu thêm · Phía tài xế', title: 'Với khách rõ ràng vậy — còn với tài xế?', sourceIds: ['didi-driver-bill-workercn', 'didi-commission-ithome', 'vn-driver-transparency-thuonggia'], cite: true, reveal: true },
  { key: 'carbon', presenter: 'Sâm', chapter: chapter.dig, kicker: 'Tìm hiểu thêm · Carbon', title: '1.430 gram carbon — là gì vậy?', sourceIds: ['sh-carbon-credit', 'didi-carbon-21jingji', 'sz-lowcarbon-planet-gov', 'vn-qd42-chinhphu', 'vn-qd42-2026'], cite: true, reveal: true },
  { key: 'ev', presenter: 'Sâm', chapter: chapter.dig, kicker: 'Tìm hiểu thêm · Xe điện', title: 'Xe điện — cuộc chơi quyết ở thời gian nạp', sourceIds: ['sz-charging-gov', 'sz-taxi-sznews-2019', 'hn-lez-nq57', 'hn-lez-qd3273-tuoitre', 'vgreen-swap-ktck', 'vinfast-swap-free-tuoitre', 'selex-swap-ndt'], cite: true },
  { key: 'robotaxi', presenter: 'Bình', chapter: chapter.close, kicker: 'Chốt bài · Robotaxi & bốn xu hướng', title: 'Không chỉ ở Trung Quốc — đây là cuộc đua toàn cầu', sourceIds: ['pony-sz-permit', 'didi-r2-uniteai', 'europe-robotaxi-euronews'], source: 'Nguồn: PR Newswire 31/10/2025 · Unite.AI · Euronews 18/9/2026' },
] as const satisfies readonly { key: string; presenter: Presenter; chapter: string; kicker: string; title: string; sourceIds: readonly string[]; source?: string; cite?: boolean; reveal?: boolean }[]
export type DidiPage = typeof didiPages[number]['key']

/** Id nguồn gắn vào từng ý, hiện thành số [n] theo thứ tự `sourceIds` của trang — khớp danh sách ở chân slide. */
export type Cite = readonly string[]

/** Tên chương dùng làm tiêu đề ghim Sân bay Bảo An trên bản đồ. */
export const didiIntro = { title: 'Gọi xe với Didi' }

export const didiPhotos = {
  airport: { src: '/media/didi/airport-e-hailing.jpg', width: 4032, height: 3024, alt: 'Đoàn đứng chờ xe cùng vali cạnh biển 网约车B区 “E-hailing Area B” ở sân bay Bảo An, Thẩm Quyến' },
  tiers: { src: '/media/didi/tiers-full.png', width: 1320, height: 2868, alt: 'Màn hình chọn xe của Didi cho tuyến Huaqiangbei → phố đi bộ Dongmen, chụp ngày 23/09/2026, cuộn hết danh sách mười hạng xe kèm giá chốt trước bằng CNY' },
  route: { src: '/media/didi/tiers-route.png', width: 1320, height: 2868, alt: 'Bản đồ tuyến trên màn hình chọn xe của Didi: 4,8km, 14 phút, có điểm kẹt xe đánh dấu 堵' },
  waiting: { src: '/media/didi/waiting.jpg', width: 700, height: 1520, alt: 'Màn hình Didi lúc chờ xe: gợi ý đi bộ 39m để tiết kiệm 1 phút, đèn đỏ đếm ngược còn 51 giây cạnh xe tài xế và thông báo tài xế đang chờ đèn đỏ cách 0,4km' },
  receipt: { src: '/media/didi/trip-summary.jpg', width: 700, height: 1520, alt: 'Màn hình Didi sau chuyến Talent Park → SEG Plaza Tower A: tổng 77,80 CNY, tiết kiệm 19,50 CNY, dòng chữ 本单获得1430g碳元气' },
  street: { src: '/media/didi/ev-street.jpg', width: 900, height: 1600, alt: 'Một trục đường lớn ở Thẩm Quyến, phần lớn ô tô đang lưu thông là xe điện biển xanh' },
  interior: { src: '/media/didi/ev-interior.jpg', width: 1440, height: 1440, alt: 'Nội thất một xe điện gọi qua Didi, màn hình điều khiển lớn giữa táp-lô' },
} satisfies Record<string, Photo>

export const didiOpen = {
  facts: [
    { value: '5', label: 'ngày' },
    { value: '6', label: 'người' },
    { value: '11', label: 'chuyến Didi' },
    { value: '0', label: 'người biết tiếng Trung' },
  ],
  caption: 'Khu đón xe công nghệ, sân bay Bảo An · 8:06 sáng 24/08/2026 · ảnh của đoàn',
}

export const didiScale = {
  hanzi: '滴滴出行',
  pinyin: 'Dīdī Chūxíng',
  stats: [
    { value: '> 55 triệu', label: 'cuốc xe mỗi ngày' },
    { value: '5,05 tỷ', label: 'chuyến mỗi quý', delta: '+13,2%' },
    { value: '133,9 tỷ NDT', label: 'tổng tiền giao dịch mỗi quý', delta: '+22,2%' },
  ],
  compare: {
    lead: 'Cả thị trường gọi ô tô Việt Nam, một quý',
    value: '≈ 153 triệu chuyến',
    punch: 'Didi chạy chưa tới 3 ngày là đủ số đó',
  },
  loss: 'Dù vậy, nửa đầu 2026 Didi vẫn lỗ: trong nước có lãi, nhưng đang đốt tiền giành khách ở Brazil và Mexico',
}

export const didiTiers = {
  titleBefore: 'Cùng một chuyến 4,8km — có mấy hạng xe để chọn?',
  question: 'Ở nhà, gọi một chuyến 4 chỗ mình có mấy mức giá để chọn? Didi có mấy?',
  answer: '10',
  answerLabel: 'hạng xe cho cùng một chuyến',
  route: { text: 'Huaqiangbei → phố đi bộ Dongmen', meta: '4,8km · 14 phút · tuyến đoàn đã đi', crop: { x: 0, y: 0.04, w: 1, h: 0.29 } },
  /** Mười hạng giữ đúng thứ tự trên màn hình để người xem dò theo ảnh được. Giá niêm yết CNY. */
  lineup: [
    { group: 'Better vehicles & service', tiers: [
      { name: 'Premium', sells: 'Xe cao cấp, tài xế giỏi', price: '32,1' },
      { name: 'Economy', sells: 'Rẻ nhất', price: '12,8', picked: true },
      { name: 'Taxi', sells: 'Taxi truyền thống', price: '21,9', picked: true },
      { name: 'Comfort Taxi', sells: 'Taxi rộng rãi hơn', price: '21,9', picked: true },
      { name: 'Standard', sells: 'Đi hằng ngày', price: '16,2' },
      { name: 'Priority', sells: 'Ít phải chờ', price: '17,9' },
      { name: 'Comfort', sells: 'Xe rộng, không mùi', price: '18,2' },
    ] },
    { group: 'More Trip Types', tiers: [
      { name: 'Premium XL', sells: 'Xe rộng cho nhóm đông', price: '43,6' },
      { name: 'Luxe', sells: 'Xe sang, tài xế giỏi', price: '88,3' },
      { name: 'Luxe XL', sells: 'Hạng sang 6 chỗ', price: '—' },
    ] },
  ] satisfies { group: string; tiers: { name: string; sells: string; price: string; picked?: boolean }[] }[],
  /** Trọng tâm slide: tick nhiều hạng cùng lúc. Khoanh 3 ô tick và dải giá ở nút xác nhận. */
  pick: {
    head: 'Tick nhiều hạng một lúc — hạng nào có xe trước thì đi hạng đó',
    detail: 'Tick Economy, Taxi, Comfort Taxi → nút xác nhận báo khoảng giá “Est. 12–21.9 CNY”',
    note: 'Chọn một hạng thì chỉ tài xế hạng đó thấy đơn. Tick cả ba thì tài xế của cả ba hạng cùng thấy — khách có xe sớm hơn.',
    rings: [{ x: 0.882, y: 0.258, w: 0.06, h: 0.162 }, { x: 0.06, y: 0.922, w: 0.6, h: 0.046 }] satisfies Rect[],
  },
  tip: { head: 'Mẹo', body: 'Didi dùng bản đồ Amap (高德地图). Tra sẵn tên địa chỉ bằng chữ Hán rồi dán vào — ra đúng chỗ hơn hẳn gõ tiếng Anh.' },
}

/** Cắt bớt phần bản đồ trống trên và dưới, để chữ cần khoanh to hơn trên màn chiếu. */
const screenCrop: Rect = { x: 0, y: 0.14, w: 1, h: 0.73 }

export const didiScreens = {
  crop: screenCrop,
  waiting: {
    label: 'Lúc đứng chờ',
    highlights: [
      { quote: '“Walk 39m and save 1min”', note: 'Đi bộ thêm 39m, bớt 1 phút chờ', ring: { x: 0.045, y: 0.3, w: 0.62, h: 0.042 } },
      { quote: '“Waiting for a traffic light”', note: 'Tài xế đang dừng đèn đỏ · còn 0,4km, 3 phút nữa tới', ring: { x: 0.555, y: 0.414, w: 0.44, h: 0.062 } },
    ],
    chips: ['Fang · 5.0★', 'AION S Plus · xe điện'],
  },
  receipt: {
    label: 'Lúc xuống xe',
    route: 'Talent Park → SEG Plaza Tower A',
    facts: [
      { value: '77,80 CNY', label: 'tổng cước' },
      { value: '19,50 CNY', label: 'được giảm' },
      { value: '32 phút', label: 'thời gian đi' },
    ],
    carbon: { quote: 'Nhận 1.430g carbon', ring: { x: 0.045, y: 0.585, w: 0.4, h: 0.055 } },
  },
  punch: 'Cả hai lần, app trả lời trước khi mình kịp hỏi',
}

export const didiTraffic = {
  question: 'Theo mọi người, app lấy dữ liệu đèn giao thông ở đâu? Kết nối với sở giao thông?',
  evidence: {
    crop: { x: 0.41, y: 0.36, w: 0.59, h: 0.122 },
    caption: 'Ảnh của đoàn: bản đồ đếm ngược đèn đỏ còn 51 giây ngay cạnh xe tài xế, kèm dòng “Waiting for a traffic light”',
  },
  no: { label: 'Phần lớn không phải', body: 'Kết nối với đèn tín hiệu của sở giao thông — chỉ một số thành phố có chia sẻ thêm dữ liệu đèn', cite: ['amap-light-taibo'] as Cite },
  yes: { label: 'Mà chủ yếu là', body: 'Nhìn vệt GPS của chính các xe đang chạy app: ở mỗi nút giao, xe dừng rồi đi theo một nhịp đều → từ đó suy ra chu kỳ đèn', cite: ['amap-light-taibo'] as Cite },
  steps: ['Nhiều xe cùng dừng ở nút giao', 'Hệ thống thấy nhịp lặp lại', 'Suy ra chu kỳ đèn'],
  stats: [
    { value: '~500.000', label: 'nút giao hiện nay · lúc ra mắt 2022 là 80.000', cite: ['amap-light-ithome-2026', 'amap-light-xinhua'] as Cite },
    { value: '~5 giây', label: 'nhắc bằng giọng nói khi đèn đỏ sắp hết', cite: ['amap-light-xinhua'] as Cite },
    { value: 'Số nhịp', label: 'đèn phải chờ, khi nút giao quá đông', cite: ['amap-light-xinhua'] as Cite },
  ],
  punch: 'Không cần đi xin dữ liệu — phần lớn là dùng lại dữ liệu mình đã có.',
}

export const didiDriver = {
  question: 'Tài xế có biết cả tháng nền tảng lấy trung bình bao nhiêu phần trăm không?',
  answer: 'Có.',
  boxes: [
    { head: 'Xem được hoa hồng trung bình', body: 'Trang thu nhập có mục hoa hồng trung bình 7 ngày và của tháng trước — khỏi tự cộng từng cuốc. Từng cuốc thì đã hiện thu nhập, thưởng và tỷ lệ hoa hồng.', cite: ['didi-driver-bill-workercn'] as Cite },
    { head: 'Trần hoa hồng 27% mỗi cuốc', body: 'Hạ từ 29%. Chạy từ 50 cuốc/tháng thì trung bình cả tháng không quá 25% — phần vượt được hoàn lại.', cite: ['didi-driver-bill-workercn', 'didi-commission-ithome'] as Cite },
    { head: 'Khiếu nại về hoa hồng ở Bắc Kinh giảm 68%', body: 'Tính đến đầu 01/2026, trên 154.000 tài xế, so với trước khi thương lượng.', by: 'Số giám sát của Ủy ban Giao thông Bắc Kinh', cite: ['didi-driver-bill-workercn'] as Cite },
  ],
  /** Ghi nhận thẳng để phòng khỏi phản biện "ở mình cũng minh bạch mà". */
  vietnam: { text: 'Ở Việt Nam, app tài xế cũng đã ghi phí từng cuốc. Cái khác là con số trung bình cả tháng và một mức trần có cam kết.', cite: ['vn-driver-transparency-thuonggia'] as Cite },
  bill: {
    title: 'Một cuốc xe, tách làm ba dòng',
    rows: [
      { label: 'Cước khách trả', value: '100%' },
      { label: 'Tài xế nhận', value: '≥ 73%' },
      { label: 'Nền tảng giữ', value: '≤ 27%', accent: true },
    ],
    note: 'Hình tự vẽ theo mức trần 27% mỗi cuốc, không phải ảnh chụp app tài xế.',
  },
  punch: 'Tài xế tự xem được số thì bớt gọi lên hỏi — minh bạch cũng là cách giảm việc cho vận hành',
}

export const didiCarbon = {
  crop: { x: 0, y: 0.285, w: 1, h: 0.45 },
  ring: { x: 0.045, y: 0.585, w: 0.4, h: 0.055 },
  caption: 'Dòng trên hoá đơn: 本单获得1430g碳元气 — “chuyến này bạn nhận 1.430g 碳元气”, tức lượng CO₂ Didi ước tính chuyến đi giảm được',
  points: [
    { head: '碳普惠 — “phổ cập carbon”', body: 'Nhiều tỉnh, thành Trung Quốc đang chạy: đi lại ít phát thải thì được cộng điểm, đổi được ưu đãi thật. Ở Thượng Hải, điểm có hạn 2 năm.', cite: ['sh-carbon-credit'] as Cite },
    { head: 'Didi có hẳn sản phẩm riêng: 碳元气', body: 'Đang chạy ở 298 thành phố. 1.430g là lượng CO₂ ước tính giảm được, không phải lượng thải ra.', cite: ['didi-carbon-21jingji'] as Cite },
    { head: 'Thẩm Quyến có nền tảng riêng: 低碳星球', body: 'Ra mắt 12/2021 cùng Tencent: đi xe buýt điện, tàu điện ngầm là được cộng điểm.', cite: ['sz-lowcarbon-planet-gov'] as Cite },
  ],
  loop: ['Đi lại ít phát thải', 'Đo được ngay', 'Thưởng ngay trong app'],
  /** Khối Việt Nam ẩn tới đúng câu "không xa đâu" trong lời nói — câu hỏi tu từ, không chờ phòng trả lời. */
  teaser: { label: 'Còn ở Việt Nam', question: 'Chuyện này ở Việt Nam còn xa không?', hint: 'Bấm hoặc nhấn → để xem' },
  vietnam: {
    head: 'Còn ở Việt Nam',
    decree: { lead: 'Quyết định', number: '42/2026/QĐ-TTg', cite: ['vn-qd42-chinhphu'] as Cite },
    dates: 'Ban hành 10/8/2026 · có hiệu lực từ 25/9/2026',
    items: [
      { value: '2.441', label: 'cơ sở phải kiểm kê khí nhà kính', note: 'nhiều hơn danh mục 2024 là 275 cơ sở', cite: ['vn-qd42-2026'] as Cite },
      { value: 'Giao thông vận tải', label: 'có tên trong danh mục', cite: ['vn-qd42-2026'] as Cite },
    ],
  },
}

export const didiEv = {
  shenzhen: {
    head: 'Thẩm Quyến',
    stats: [
      { value: '1.057', label: 'trạm siêu sạc (giữa 2025)', cite: ['sz-charging-gov'] as Cite },
      { value: '487.000+', label: 'trụ sạc', cite: ['sz-charging-gov'] as Cite },
      { value: '600 kW', label: 'trụ sạc nhanh nhất', cite: ['sz-charging-gov'] as Cite },
      { value: '21.689', label: 'taxi, đã chạy điện toàn bộ (2019)', cite: ['sz-taxi-sznews-2019'] as Cite },
    ],
    first: { text: 'Đi đầu Trung Quốc: từ 03/2024, số trạm siêu sạc đã nhiều hơn số trạm xăng', cite: ['sz-charging-gov'] as Cite },
    punch: 'Làm hạ tầng trước, rồi mới cấm xe xăng',
  },
  hanoi: {
    head: 'Hà Nội — vùng phát thải thấp',
    stages: [
      { date: '1/7/2026', status: 'thí điểm', scope: '9 phường vành đai 1 · bước đầu ở Hoàn Kiếm', cite: ['hn-lez-nq57', 'hn-lez-qd3273-tuoitre'] as Cite },
      { date: '1/1/2028', scope: '14 phường: vành đai 1 và một phần vành đai 2', cite: ['hn-lez-nq57'] as Cite },
      { date: '1/1/2030', scope: 'Tới vành đai 3 — 36 phường, xã', cite: ['hn-lez-nq57'] as Cite },
    ],
    rule: { text: 'Xe máy xăng nói chung: cấm theo khung giờ', cite: ['hn-lez-nq57'] as Cite },
    /** Câu chốt của slide: dòng liên quan trực tiếp tới Ahamove. Nguyên văn nghị quyết chỉ nói xe máy dùng nhiên liệu hoá thạch. */
    key: { text: 'Xe máy xăng chạy dịch vụ qua app: cấm hẳn trong vùng từ 1/1/2027', note: 'Nửa cuối 2026 mới khuyến khích hạn chế · xe máy điện không thuộc lệnh cấm', cite: ['hn-lez-nq57', 'hn-lez-qd3273-tuoitre'] as Cite },
    diagramNote: 'Sơ đồ minh hoạ, không theo tỉ lệ',
  },
  swap: {
    head: 'Đổi pin ở Việt Nam',
    items: [
      { value: '~4.500 trạm', label: 'V-Green đã lắp, mục tiêu 45.000', cite: ['vgreen-swap-ktck'] as Cite },
      { value: '9.000đ/lần', label: 'VinFast · miễn phí tới 30/6/2028: 20 lần/tháng, tài xế Xanh SM không giới hạn', cite: ['vgreen-swap-ktck', 'vinfast-swap-free-tuoitre'] as Cite },
      { value: '14.000đ/lần', label: 'Selex · xe lắp 3 pin chạy được khoảng 150km', cite: ['selex-swap-ndt'] as Cite },
    ],
  },
}

export const didiRobotaxi = {
  /** Clip tự chạy và lặp khi trình chiếu: không tiếng, không nút bấm, không cần thao tác giữa lúc nói. */
  clip: { src: '/media/didi/robotaxi.mp4', poster: '/media/didi/robotaxi-poster.jpg', width: 1280, height: 720, label: 'Xe không người lái chạy trên phố Thẩm Quyến ban đêm, quay từ trong xe của đoàn' },
  caption: 'Xe không người lái · Thẩm Quyến, ban đêm · clip của đoàn',
  milestones: [
    { date: 'Thẩm Quyến · 31/10/2025', body: 'Pony.ai được phép chạy robotaxi không người lái, có thu tiền, trên toàn thành phố. Khu chạy đầu tiên là Nanshan', note: 'đúng khu đoàn mình đã tới' },
    { date: '31/8/2026', body: 'Didi bắt đầu chở khách thử bằng robotaxi R2 hoàn toàn không người lái, đặt ngay trong app Didi, ở Bắc Kinh và Quảng Châu' },
    { date: '10/9/2026 · cùng một ngày', body: 'WeRide có giấy phép L4 đầu tiên ở Tây Ban Nha (Madrid, cùng Uber). Pony.ai chạy chuyến không người lái chở khách đầu tiên ở châu Âu (Zagreb, cùng Verne)' },
  ],
  close: {
    tally: ['11 chuyến xe', '5 ngày', '4 xu hướng'],
    /** Mỗi xu hướng trỏ về đúng nhóm slide đã kể, để người nghe tự nối lại được. */
    trends: [
      { name: 'Nói trước khi khách hỏi', from: 'giá chốt trước · báo đèn đỏ · hoá đơn rõ ràng' },
      { name: 'Dùng lại dữ liệu sẵn có', from: 'từ vệt GPS ra nhịp đèn · hoá đơn rõ cho tài xế' },
      { name: 'Chuyển sang xe điện', from: 'điểm carbon · trạm sạc · đổi pin' },
      { name: 'Xe tự lái', from: 'robotaxi đặt ngay trong app' },
    ],
    line: 'Cả bốn đã bắt đầu ở Việt Nam — chỉ là mình chưa gọi tên',
  },
}
