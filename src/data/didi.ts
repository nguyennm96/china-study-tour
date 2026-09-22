// Bài chia sẻ của Sâm về Didi, chuyển từ file HTML rời sang đúng hệ slide của deck.
// Nội dung giữ nguyên lập luận bản gốc; riêng giá tiền quy đổi sang VND như các chủ đề khác.
export const didiSourceId = 'didi-sam-deck'

export const didiPages = [
  { key: 'title', kicker: 'Didi · Sân bay Bảo An → Huaqiangbei', title: 'Một cuốc xe, và những gì nó hé lộ.' },
  { key: 'intro', kicker: 'Didi · Giới thiệu & tính năng', title: 'Nền tảng gọi xe lớn nhất Trung Quốc.' },
  { key: 'pricing', kicker: 'Didi · Tầng giá', title: 'Sáu tầng giá cho cùng một nhu cầu.' },
  { key: 'process', kicker: 'Didi · Quy trình sử dụng', title: 'Một chuyến đi, năm bước.' },
  { key: 'carbon', kicker: 'Didi · Sau khi xuống xe', title: 'Đi xe cũng “tích điểm” cho môi trường.' },
  { key: 'waiting', kicker: 'Didi · Trước khi lên xe', title: 'Chờ xe cũng thông minh.' },
  { key: 'ev', kicker: 'Bối cảnh · Điện khí hoá', title: 'Xe điện là số đông — không phải ngẫu nhiên.' },
  { key: 'robotaxi', kicker: 'Bối cảnh · Cuộc đua robotaxi', title: 'Không chỉ ở Trung Quốc.' },
  { key: 'close', kicker: 'Didi · Khép lại & hỏi đáp', title: 'Một trải nghiệm nhỏ, ba xu hướng lớn.' },
] as const
export type DidiPage = typeof didiPages[number]['key']

export const didiIntro = {
  label: 'Didi · Sân bay Bảo An → Huaqiangbei',
  title: 'Gọi xe với Didi',
  headline: 'Một cuốc xe, và những gì nó hé lộ.',
  description: 'Sâm kể lại 11 chuyến Didi trong 5 ngày ở Thẩm Quyến: không ai trong đoàn biết tiếng Trung, nhưng cả nhóm vẫn di chuyển trơn tru. Phía sau sự trơn tru đó là ba thứ đang định hình ngành di chuyển.',
  facts: [
    { value: '11', label: 'chuyến ghi nhận trong app' },
    { value: '5', label: 'ngày ở Thẩm Quyến' },
    { value: '6', label: 'người, không ai biết tiếng Trung' },
  ],
}

export const didiFeatures = [
  { icon: 'chat', title: 'Không rào cản ngôn ngữ', detail: 'Nhắn tin với tài xế qua dịch tự động. App có sẵn giao diện tiếng Anh, đổi một lần trong Settings là dùng cho cả chuyến.' },
  { icon: 'price', title: 'Giá phân tầng rất kỹ', detail: 'Sáu mức cho cùng một nhu cầu, nhiều hơn hẳn mức 2–3 tầng quen thuộc ở app Việt Nam.' },
  { icon: 'map', title: 'Bản đồ “biết nói”', detail: 'Realtime, đếm ngược đèn đỏ trên đường tài xế tới, tự gợi ý đổi điểm đón để rút ngắn thời gian chờ.' },
] as const

export const didiScale = [
  { value: '550', unit: 'triệu người dùng', label: 'Quy mô Didi được dẫn trong bài chia sẻ' },
  { value: '400', unit: 'thành phố', label: 'Độ phủ được dẫn trong bài chia sẻ' },
]

/** Quy đổi theo 3.947 VND/CNY, cùng tỷ giá dùng cho các chủ đề khác. */
export const didiPricing = {
  head: ['Tầng giá', 'So với mức chuẩn'],
  rows: [
    { tier: 'Economy', note: 'Rẻ nhất — thấp hơn Standard.' },
    { tier: 'Standard', note: 'Mức chuẩn: ~5.900–9.900 VND/km, mở cửa ~36.000–51.000 VND.', base: true },
    { tier: 'Comfort', note: 'Cao hơn Standard ~20–30%.' },
    { tier: 'Premium', note: 'Cao hơn Standard ~50%.' },
    { tier: 'Premium XL', note: 'Gấp đôi Standard trở lên.' },
    { tier: 'Taxi', note: 'Tính theo đồng hồ, mở cửa ~47.000–51.000 VND cho 3km đầu.' },
  ],
  caveat: 'Giá gốc niêm yết bằng CNY, quy đổi theo tỷ giá 3.947 VND/CNY ngày 19/09/2026. Tỷ giá đổi theo ngày nên đây là ước tính, không phải giá Didi công bố bằng VND.',
  tip: 'Didi chạy trên nền bản đồ Amap, tối ưu cho địa danh tiếng Trung. Tìm bằng tiếng Anh nhiều khi ra sai điểm — tra tên tiếng Trung rồi dán vào ô tìm kiếm sẽ chọn đúng hơn.',
}

export const didiSteps = [
  { title: 'Nhập điểm đến', detail: 'App tự gợi ý điểm đón gần nhất. Gõ tên tiếng Trung thay vì tiếng Anh để ra đúng vị trí.' },
  { title: 'Chọn tầng giá', detail: 'Thấy giá cụ thể của từng tầng trước khi xác nhận đặt xe.' },
  { title: 'Theo dõi tài xế', detail: 'Định vị chính xác, kèm đếm ngược đèn giao thông trên đường tới điểm đón.' },
  { title: 'Lên xe điện', detail: 'Phần lớn xe dịch vụ ở Thẩm Quyến đã là xe điện.' },
  { title: 'Thanh toán tự động', detail: 'Trừ qua Alipay sau chuyến, không giao dịch trực tiếp với tài xế, không cần thẻ hay tiền mặt.' },
] as const

export const didiCarbon = {
  hero: { value: '1.430', unit: 'g', label: 'Carbon được app ghi nhận cho một chuyến — vì đây là xe điện' },
  chips: [
    { label: 'Tổng cước', value: '~307.000 VND' },
    { label: 'Tiết kiệm', value: '~77.000 VND' },
    { label: 'Thời gian', value: '32 phút' },
  ],
  note: 'Cơ chế “carbon inclusion” ở cấp quốc gia: hành vi ít phát thải được quy đổi thành điểm carbon, đổi được ưu đãi thật, hạn dùng 2 năm. Thẩm Quyến đẩy mạnh vì giao thông là nguồn phát thải lớn nhất thành phố.',
  photo: { src: '/media/didi/trip-summary.jpg', alt: 'Màn hình Didi tổng kết chuyến từ Talent Park tới SEG Plaza: tổng cước 77,80 CNY và 1430g carbon được ghi nhận' },
  caption: 'Ảnh chụp màn hình sau chuyến · tư liệu của Sâm, 08/2026.',
}

export const didiWaiting = {
  lead: 'Nếu trang trước là khoảnh khắc sau khi xuống xe, đây là khoảnh khắc trước khi lên xe — lúc đang đứng chờ tài xế.',
  cards: [
    { head: '“Waiting for a traffic light”', body: 'App nói thẳng tài xế đang dừng đèn đỏ, cách 0,4km, khoảng 3 phút nữa tới. Không phải một vòng xoay “đang tới”.' },
    { head: '“Walk 39m and save 1min”', body: 'Gợi ý đổi điểm đón để cả hai bên cùng đỡ mất thời gian, chứ không chỉ tối ưu cho một phía.' },
  ],
  chips: [
    { label: 'Tài xế', value: 'Fang · 5.0★' },
    { label: 'Xe', value: 'AION S Plus (điện)' },
  ],
  photo: { src: '/media/didi/waiting.jpg', alt: 'Màn hình Didi lúc chờ xe: gợi ý đi bộ 39m để tiết kiệm 1 phút và thông báo tài xế đang chờ đèn đỏ cách 0,4km' },
  caption: 'Ảnh chụp màn hình lúc chờ xe · tư liệu của Sâm, 08/2026.',
}

export const didiEv = {
  lead: 'Phần lớn ô tô lưu thông ở Thẩm Quyến đã là xe điện. Xe xăng gần như chỉ còn ở phân khúc xe cá nhân cao cấp.',
  cards: [
    { head: 'Ở Thẩm Quyến', body: 'Xe dịch vụ — taxi và xe công nghệ như Didi — gần như đã điện khí hoá toàn bộ.', accent: true },
    { head: 'Ở Việt Nam', body: 'Cùng hướng đi nhưng khác động lực: thị trường thay vì chính sách. Green SM chạy thuần điện dẫn đầu ~51% thị phần taxi công nghệ, vượt Grab ~41%. Grab × BYD cam kết thu nhập tới 25 triệu đồng/tháng cho tài xế chuyển sang xe điện; Be × VinFast hỗ trợ ~6% giá xe kèm gói phụ kiện ~15 triệu đồng.' },
  ],
  photo: { src: '/media/didi/ev-street.jpg', alt: 'Một trục đường lớn ở Thẩm Quyến, phần lớn ô tô đang lưu thông là xe điện' },
  caption: 'Ảnh chụp trên đường · tư liệu của Sâm, 08/2026.',
}

export const didiRobotaxi = {
  lead: 'Chiếc xe bắt gặp giữa đêm ở Thẩm Quyến mang dáng dấp một robotaxi. Năm 2026, Thẩm Quyến ban hành quy định riêng cho xe tự lái, cho thử nghiệm trên toàn thành phố.',
  cards: [
    { head: 'Tại Thẩm Quyến', body: 'Apollo Go (Baidu) chạy mạnh nhất — dẫn đầu chỉ số Autonomy AI tháng 6/2026 với hơn 22 triệu chuyến và hơn 220 triệu km không người lái. Đây cũng là nơi Pony.ai nhận giấy phép không người lái đầu tiên của thành phố.', accent: true },
    { head: 'Đang lan ra toàn cầu', body: 'Tháng 9/2026, WeRide giành giấy phép robotaxi quốc gia đầu tiên tại Tây Ban Nha (Madrid) và Pony.ai chạy chuyến không người lái đầu tiên ở châu Âu (Zagreb) — cùng ngày, cả hai qua Uber. Riêng Didi có robotaxi “R2” chạy 24/7 ở Quảng Châu từ cuối 2025.' },
  ],
  photo: { src: '/media/didi/robotaxi.jpg', alt: 'Một chiếc xe mang dáng dấp robotaxi trên phố Thẩm Quyến ban đêm, có cụm cảm biến trên gương' },
  caption: 'Ảnh chụp ban đêm · tư liệu của Sâm, 08/2026.',
}

export const didiClose = {
  lead: '11 chuyến xe trong 5 ngày chạm vào ba xu hướng đang định hình ngành di chuyển.',
  trends: [
    { word: 'Cá nhân hoá', detail: 'Sáu tầng giá, gợi ý đổi điểm đón, dịch tin nhắn tự động.' },
    { word: 'Điện khí hoá', detail: 'Đội xe dịch vụ gần như đã chuyển hết sang xe điện.' },
    { word: 'Tự động hoá', detail: 'Robotaxi ra khỏi Trung Quốc nhanh hơn dự đoán.' },
  ],
  questions: [
    'Didi thưởng ngay cho hành vi xanh — mình học được gì?',
    'Đèn đỏ đếm ngược và gợi ý đổi điểm đón — đáng thử ở Việt Nam không?',
    'Green SM dẫn đầu bằng xe điện, Grab và Be đang đuổi theo — bao lâu nữa Việt Nam bắt kịp?',
    'Robotaxi Trung Quốc đang ra toàn cầu rất nhanh — Ahamove có nên quan sát sớm hơn?',
  ],
}

export const didiGap = 'Số liệu trong bài là con số Sâm dẫn lại trong tài liệu chia sẻ, chưa đối chiếu với báo cáo gốc của Didi, Baidu, Pony.ai hay các hãng gọi xe Việt Nam. Ảnh và quan sát đường phố là tư liệu trực tiếp của đoàn; phần thị phần, cam kết thu nhập tài xế và số chuyến robotaxi thì không.'
