// Bài chia sẻ "Một cuốc xe Didi ở Thẩm Quyến" — bản v5, 9 slide, 20 phút gồm Q&A.
// Mặt slide bám khối "TRÊN SLIDE" của docs/didi-script-v5-present.md; lời nói và ghi chú sân khấu chỉ nằm trong tài liệu đó.
// Tiền giữ nguyên CNY như trên ảnh chụp màn hình, để người xem nhìn ảnh là thấy khớp số.
// Toạ độ khoanh trên ảnh (`Rect`) là tỉ lệ 0–1 theo bề rộng/bề cao ảnh gốc.

export type Presenter = 'Sâm' | 'Bình'
export type Rect = { x: number; y: number; w: number; h: number }
export type Photo = { src: string; alt: string; width: number; height: number }

const chapter = { sam: 'Sâm · Cái em thấy', binh: 'Bình · Tìm hiểu thêm', close: 'Sâm · Chốt bài' }

export const didiPages = [
  { key: 'open', presenter: 'Sâm', chapter: chapter.sam, kicker: 'Study trip IOTE 2026 · 24–28/08/2026 · Sâm & Bình', title: 'Một cuốc xe Didi ở Thẩm Quyến — và những gì nó hé lộ', sourceIds: ['didi-sam-deck'] },
  { key: 'scale', presenter: 'Sâm', chapter: chapter.sam, kicker: 'Didi · Quy mô · Quý II/2026', title: 'Didi — nền tảng gọi xe lớn nhất Trung Quốc', sourceIds: ['didi-q2-2026', 'didi-h1-2026-caixin', 'vn-ridehail-q1-2026'], source: 'Nguồn: Báo cáo quý II/2026 của Didi, công bố 14/8/2026 · Mordor Intelligence, Q1/2026' },
  { key: 'tiers', presenter: 'Sâm', chapter: chapter.sam, kicker: 'Didi · Chọn xe · Huaqiangbei → Dongmen', title: 'Cùng một chuyến 4,8km — mười hạng xe để chọn', sourceIds: ['didi-sam-deck'], source: 'Ảnh chụp màn hình app Didi ngày 23/9/2026, đặt lại đúng tuyến đoàn đã đi · giá niêm yết bằng CNY', reveal: true },
  { key: 'screens', presenter: 'Sâm', chapter: chapter.sam, kicker: 'Didi · Trước và sau chuyến xe', title: 'App tự nói trước khi mình kịp hỏi', sourceIds: ['didi-sam-deck'], source: 'Ảnh chụp màn hình app Didi của đoàn trong chuyến đi, 08/2026' },
  { key: 'traffic', presenter: 'Bình', chapter: chapter.binh, kicker: 'Tìm hiểu thêm · Đèn đỏ', title: 'Làm sao app biết tài xế đang kẹt đèn đỏ?', sourceIds: ['amap-light-xinhua', 'amap-light-taibo', 'didi-sam-deck'], source: 'Nguồn: Tân Hoa Xã, 15/8/2022 (công bố tính năng) · phân tích cơ chế: 泰伯网 (Taibo)', reveal: true },
  { key: 'driver', presenter: 'Bình', chapter: chapter.binh, kicker: 'Tìm hiểu thêm · Phía tài xế', title: 'Phía khách minh bạch vậy — còn phía tài xế?', sourceIds: ['didi-commission-ithome', 'didi-driver-bill-acftu'], source: 'Nguồn: IT之家, 5/2026 · Báo Công đoàn Trung Quốc (Nhân Dân), 6/2026', reveal: true },
  { key: 'carbon', presenter: 'Bình', chapter: chapter.binh, kicker: 'Tìm hiểu thêm · Carbon', title: '1.430 gram carbon — nó là cái gì?', sourceIds: ['didi-carbon-21jingji', 'sz-carbon-inclusion-ccn', 'vn-qd42-2026'], source: 'Nguồn: 21世纪经济报道, 6/2026 · 碳中和网 · Quyết định 42/2026/QĐ-TTg (qua VnEconomy)' },
  { key: 'ev', presenter: 'Bình', chapter: chapter.binh, kicker: 'Tìm hiểu thêm · Điện khí hoá', title: 'Xe điện — cuộc chơi quyết ở thời gian nạp', sourceIds: ['vn-ridehail-q1-2026', 'vn-delivery-2w-062026', 'sz-charging-gov', 'sz-charging-people', 'sz-taxi-szbus', 'hn-lez-vnexpress', 'vgreen-swap-ktck', 'selex-swap-ndt'], source: 'Nguồn: Cổng TTĐT TP Thẩm Quyến · Nhân Dân Nhật Báo · Shenzhen Bus Group · Nghị quyết vùng phát thải thấp Hà Nội (qua VnExpress) · tổng hợp báo VN 2026' },
  { key: 'robotaxi', presenter: 'Sâm', chapter: chapter.close, kicker: 'Chốt bài · Robotaxi & ba xu hướng', title: 'Không chỉ ở Trung Quốc — đây là cuộc đua toàn cầu', sourceIds: ['pony-sz-permit', 'didi-r2-uniteai', 'europe-robotaxi-euronews'], source: 'Nguồn: PR Newswire 31/10/2025 · Unite.AI · Euronews 18/9/2026' },
] as const satisfies readonly { key: string; presenter: Presenter; chapter: string; kicker: string; title: string; sourceIds: readonly string[]; source?: string; reveal?: boolean }[]
export type DidiPage = typeof didiPages[number]['key']

/** Tên chương dùng làm tiêu đề ghim Sân bay Bảo An trên bản đồ. */
export const didiIntro = { title: 'Gọi xe với Didi' }

export const didiPhotos = {
  airport: { src: '/media/didi/airport-e-hailing.jpg', width: 4032, height: 3024, alt: 'Đoàn đứng chờ xe cùng vali cạnh biển 网约车B区 “E-hailing Area B” ở sân bay Bảo An, Thẩm Quyến' },
  tiers: { src: '/media/didi/tiers-full.png', width: 1320, height: 2868, alt: 'Màn hình chọn xe của Didi cho tuyến Huaqiangbei → phố đi bộ Dongmen, chụp ngày 23/09/2026, cuộn hết danh sách mười hạng xe kèm giá chốt trước bằng CNY' },
  route: { src: '/media/didi/tiers-route.png', width: 1320, height: 2868, alt: 'Bản đồ tuyến trên màn hình chọn xe của Didi: 4,8km, 14 phút, có điểm kẹt xe đánh dấu 堵' },
  waiting: { src: '/media/didi/waiting.jpg', width: 700, height: 1520, alt: 'Màn hình Didi lúc chờ xe: gợi ý đi bộ 39m để tiết kiệm 1 phút, đèn đỏ đếm ngược còn 51 giây cạnh xe tài xế và thông báo tài xế đang chờ đèn đỏ cách 0,4km' },
  receipt: { src: '/media/didi/trip-summary.jpg', width: 700, height: 1520, alt: 'Màn hình Didi sau chuyến Talent Park → SEG Plaza Tower A: tổng 77,80 CNY, tiết kiệm 19,50 CNY, dòng chữ 本单获得1430g碳元气' },
  amap: { src: '/media/didi/amap-route.png', width: 1206, height: 2622, alt: 'Màn hình Amap chỉ đường bằng tàu điện ngầm từ sân bay, chụp ngày 26/08/2026' },
  street: { src: '/media/didi/ev-street.jpg', width: 900, height: 1600, alt: 'Một trục đường lớn ở Thẩm Quyến, phần lớn ô tô đang lưu thông là xe điện biển xanh' },
  interior: { src: '/media/didi/ev-interior.jpg', width: 1440, height: 1440, alt: 'Nội thất một xe điện gọi qua Didi, màn hình điều khiển lớn giữa táp-lô' },
  robotaxi: { src: '/media/didi/robotaxi.jpg', width: 900, height: 1200, alt: 'Xe dáng robotaxi số hiệu 4484 trên phố Thẩm Quyến ban đêm, có cụm cảm biến trên gương' },
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
    { value: '5,05 tỷ', label: 'đơn một quý', delta: '+13,2%' },
    { value: '133,9 tỷ NDT', label: 'giá trị giao dịch một quý', delta: '+22,2%' },
  ],
  compare: {
    lead: 'Cả thị trường gọi xe 4 bánh Việt Nam một quý',
    value: '≈ 153 triệu chuyến',
    punch: 'Didi chạy hết chừng đó trong chưa tới 3 ngày',
  },
}

export const didiTiers = {
  titleBefore: 'Cùng một chuyến 4,8km — có mấy hạng xe để chọn?',
  question: 'App mình hay dùng có mấy mức giá cho một chuyến 4 chỗ? Didi có mấy?',
  answer: '10',
  answerLabel: 'hạng xe cho cùng một chuyến',
  route: { text: 'Huaqiangbei → phố đi bộ Dongmen', meta: '4,8km · 14 phút · tuyến đoàn đã đi', crop: { x: 0, y: 0.04, w: 1, h: 0.29 } },
  callouts: [
    { head: 'Giá chốt trước, không phải giá ước tính', detail: '“Upfront Fare”', rings: [{ x: 0.605, y: 0.184, w: 0.15, h: 0.022 }] },
    { head: 'Rẻ nhất 12,8 tệ — đắt nhất 88,3 tệ', detail: 'Chênh 7 lần, cùng một quãng đường', rings: [{ x: 0.745, y: 0.249, w: 0.125, h: 0.034 }, { x: 0.74, y: 0.8, w: 0.13, h: 0.03 }] },
    { head: 'Ghép tài xế tính bằng GIÂY', detail: '“3 sec · 4 sec · 5 sec”', rings: [{ x: 0.162, y: 0.201, w: 0.078, h: 0.018 }] },
    { head: 'Tick nhiều hạng cùng lúc — hạng nào có xe trước thì đi', detail: '3 ô tick · “Est. 12–21.9 CNY”', rings: [{ x: 0.882, y: 0.258, w: 0.06, h: 0.162 }, { x: 0.06, y: 0.922, w: 0.6, h: 0.046 }] },
    { head: 'Bán riêng “đỡ phải chờ” và “xe không mùi”', detail: 'Priority · Comfort', rings: [{ x: 0.162, y: 0.537, w: 0.235, h: 0.018 }, { x: 0.162, y: 0.61, w: 0.298, h: 0.018 }] },
    { head: 'Giảm giá hiện ngay từng hạng', detail: '−2,4 và −4,6 CNY', rings: [{ x: 0.734, y: 0.621, w: 0.141, h: 0.019 }] },
    { head: 'Trả online hoặc tiền mặt · hẹn giờ · đặt hộ', detail: 'Pay Online · Schedule · For Others', rings: [{ x: 0.07, y: 0.882, w: 0.86, h: 0.026 }] },
  ] satisfies { head: string; detail: string; rings: Rect[] }[],
  tip: { head: 'Mẹo', body: 'Didi chạy nền bản đồ Amap (高德地图) → tra tên tiếng Trung (chữ Hán) của địa chỉ rồi dán vào, chọn đúng điểm dễ hơn nhiều so với gõ tiếng Anh.' },
}

export const didiScreens = {
  waiting: {
    label: 'Lúc đứng chờ',
    highlights: [
      { quote: '“Walk 39m and save 1min”', note: 'Đi bộ thêm 39m, bớt 1 phút chờ', ring: { x: 0.045, y: 0.3, w: 0.62, h: 0.042 } },
      { quote: '“Waiting for a traffic light”', note: 'Cách 0,4km · 3 phút nữa tới', ring: { x: 0.555, y: 0.414, w: 0.44, h: 0.062 } },
    ],
    chips: ['Fang · 5.0★', 'AION S Plus · xe điện'],
  },
  receipt: {
    label: 'Lúc xuống xe',
    route: 'Talent Park → SEG Plaza Tower A',
    facts: [
      { value: '77,80 CNY', label: 'tổng cước' },
      { value: '19,50 CNY', label: 'tiết kiệm' },
      { value: '32 phút', label: 'thời gian' },
    ],
    carbon: { quote: '1.430g carbon', ring: { x: 0.045, y: 0.585, w: 0.4, h: 0.055 } },
  },
  punch: 'Cả hai màn hình đều là app trả lời trước khi khách kịp hỏi',
}

export const didiTraffic = {
  question: 'Họ lấy dữ liệu đèn giao thông từ đâu? Đấu nối với sở giao thông à?',
  evidence: {
    crop: { x: 0.41, y: 0.36, w: 0.59, h: 0.122 },
    caption: 'Ảnh của đoàn: đèn đỏ còn 51 giây, đếm ngược ngay trên bản đồ cạnh xe tài xế — và dòng “Waiting for a traffic light”',
  },
  amapCaption: 'Amap — bản đồ nền của Didi · ảnh của đoàn, 26/08',
  no: { label: 'Không phải', body: 'Đấu nối dữ liệu với hệ thống đèn tín hiệu của sở giao thông' },
  yes: { label: 'Mà là', body: 'Nhìn vệt GPS của chính những xe đang chạy app dừng ở nút giao → thấy dừng rồi đi theo chu kỳ đều đặn → suy ngược ra nhịp đèn' },
  steps: ['Nhiều xe dừng ở nút giao', 'Hệ thống thấy nhịp lặp lại', 'Suy ra chu kỳ đèn'],
  stats: [
    { value: '80.000+', label: 'nút giao khi công bố' },
    { value: '~5 giây', label: 'nhắc trước khi sắp xanh' },
    { value: 'Mấy nhịp', label: 'đèn phải chờ, khi nút quá đông' },
  ],
  punch: 'Họ không xin dữ liệu của ai. Họ dùng lại dữ liệu vốn đã có.',
}

export const didiDriver = {
  question: 'Tài xế có biết nền tảng lấy bao nhiêu phần trăm trên cuốc của họ không?',
  answer: 'Có.',
  boxes: [
    { head: 'Hoá đơn minh bạch trong app tài xế', body: 'Mỗi cuốc hiện rõ thu nhập · thưởng · tỷ lệ hoa hồng. Tra được hoa hồng bình quân 7 ngày và tháng trước.' },
    { head: 'Trần hoa hồng 29% → 27%', body: 'Didi công bố tháng 5/2026.' },
    { head: 'Khiếu nại liên quan hoa hồng giảm 68%', body: 'Tại Bắc Kinh.', caveat: 'Số do Didi tự công bố, không phải kiểm toán độc lập' },
  ],
  bill: {
    title: 'Một cuốc xe, tách ba dòng',
    rows: [
      { label: 'Cước khách trả', value: '100%' },
      { label: 'Tài xế nhận', value: '≥ 73%' },
      { label: 'Nền tảng giữ', value: '≤ 27%', accent: true },
    ],
    note: 'Đồ hoạ tự vẽ theo mô tả trong bài báo — không phải ảnh chụp app tài xế.',
  },
  punch: 'Minh bạch ở đây được dùng như một cách giảm tải vận hành',
}

export const didiCarbon = {
  crop: { x: 0, y: 0.285, w: 1, h: 0.45 },
  ring: { x: 0.045, y: 0.585, w: 0.4, h: 0.055 },
  caption: 'Hoá đơn cuối chuyến: 本单获得1430g碳元气 — “chuyến này nhận 1.430g carbon”',
  points: [
    { head: '碳普惠 — “phổ cập carbon”', body: 'Cơ chế cấp quốc gia. Hành vi ít phát thải → điểm carbon → đổi được ưu đãi thật · hạn dùng 2 năm.' },
    { head: 'Didi có sản phẩm carbon riêng', body: 'Đã chạy ở 298 thành phố.' },
    { head: 'Thẩm Quyến có nền tảng riêng', body: 'Vì giao thông là nguồn phát thải lớn nhất thành phố.' },
  ],
  loop: ['Làm hành vi tốt', 'Đo được ngay', 'Thưởng ngay trong app'],
  vietnam: {
    head: 'Còn ở Việt Nam',
    decree: 'Quyết định 42/2026/QĐ-TTg',
    dates: 'Ban hành 10/8/2026 · hiệu lực 25/9/2026',
    items: [
      { value: '2.441', label: 'cơ sở phải kiểm kê khí nhà kính', note: 'tăng 275 so với danh mục 2024' },
      { value: 'Giao thông vận tải', label: 'nằm trong danh mục' },
    ],
  },
}

export const didiEv = {
  market: [
    'Thị phần taxi công nghệ VN Q1/2026 — Green SM 54,51% · Grab 40,92% · Be 4,57%',
    'Giao hàng 2 bánh 6/2026: ba bên chênh nhau chưa tới 1 điểm %',
  ],
  shenzhen: {
    head: 'Thẩm Quyến',
    stats: [
      { value: '1.000+', label: 'trạm siêu sạc' },
      { value: '487.000+', label: 'trụ sạc' },
      { value: '600 kW', label: '“một giây một kilômét”' },
      { value: '~99%', label: 'trong 21.689 taxi là xe điện' },
    ],
    first: 'Thành phố đầu tiên trên thế giới có số trạm sạc vượt số trạm xăng',
    punch: 'Hạ tầng trước, lệnh cấm sau',
  },
  hanoi: {
    head: 'Hà Nội — đã hiệu lực',
    stages: [
      { date: '1/7/2026', status: 'đang áp dụng', scope: '9 phường vành đai 1' },
      { date: '1/1/2028', scope: 'Toàn vành đai 1 + một phần vành đai 2' },
      { date: '1/1/2030', scope: 'Vào vành đai 3 — tổng 36 phường/xã' },
    ],
    wards: 'Hoàn Kiếm · Ba Đình · Cửa Nam · Hai Bà Trưng · Ô Chợ Dừa · Văn Miếu–Quốc Tử Giám · Giảng Võ · Ngọc Hà · Tây Hồ',
    rules: [
      'Xe máy xăng hạn chế theo khung giờ và khu vực',
      'Xe hành nghề trên nền tảng ứng dụng không được phép hoạt động',
    ],
    diagramNote: 'Sơ đồ minh hoạ, không theo tỉ lệ',
  },
  swap: {
    head: 'Đổi pin ở Việt Nam',
    items: [
      { value: '4.500 trạm', label: 'V-Green đã lắp · mục tiêu 45.000 tủ' },
      { value: '9.000đ/lần', label: 'VinFast · miễn phí tối đa 20 lần/tháng tới giữa 2028' },
      { value: '14.000đ/lần', label: 'Selex · xe lắp 3 pin đi ~150km' },
    ],
  },
}

export const didiRobotaxi = {
  caption: 'Xe dáng robotaxi, số hiệu 4484 · Thẩm Quyến, ban đêm · ảnh của đoàn',
  milestones: [
    { date: 'Thẩm Quyến · 31/10/2025', body: 'Pony.ai được cấp giấy phép robotaxi không người lái thương mại trên toàn thành phố, triển khai đầu ở Nanshan', note: 'đúng khu đoàn mình tới' },
    { date: '31/8/2026', body: 'Didi mở thử nghiệm chở khách hoàn toàn không người lái với robotaxi R2, đặt ngay trong app Didi — Bắc Kinh và Quảng Châu' },
    { date: '10/9/2026 · cùng một ngày', body: 'WeRide lấy giấy phép L4 đầu tiên của Tây Ban Nha (Madrid, với Uber) · Pony.ai chạy chuyến không người lái có khách đầu tiên của châu Âu (Zagreb, với Verne)' },
  ],
  close: {
    tally: '11 chuyến xe · 5 ngày · 3 xu hướng',
    trends: ['Cá nhân hoá', 'Điện khí hoá', 'Tự động hoá'],
    line: 'Cả ba đang diễn ra ở Việt Nam rồi — chỉ là mình chưa gọi tên',
  },
}
