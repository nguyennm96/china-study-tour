// Năm điểm dừng còn lại không gắn với ba chủ đề chính, nhưng mỗi nơi đều có số liệu
// công bố đủ chắc để dựng một slide. Mỗi con số trỏ về một id trong sổ nguồn.
export type PlaceMetric = { value: string; unit?: string; label: string; asOf: string }

export type Place = {
  id: string
  stopId: string
  title: string
  kicker: string
  headline: string
  lead: string
  metrics: PlaceMetric[]
  note?: string
  sourceIds: string[]
}

export const places: Place[] = [
  {
    id: 'place-seg', stopId: 'seg',
    title: 'Quy mô khu chợ điện tử',
    kicker: 'Huaqiangbei · Quy mô khu chợ',
    headline: 'Cả chuỗi cung ứng trong bán kính đi bộ.',
    lead: 'Khu chợ điện tử lớn nhất thế giới nằm gọn trong vài khối nhà. Đó là lý do một kỹ sư ở đây dựng được nguyên mẫu trong một buổi chiều: linh kiện, gia công bo mạch, vỏ hộp và kênh phân phối đều nằm cạnh nhau.',
    metrics: [
      { value: '115.000', unit: 'chủ thể', label: 'Doanh nghiệp và hộ kinh doanh trong khu', asOf: '08/2025' },
      { value: '35', unit: 'chợ', label: 'Chợ điện tử chuyên ngành đang hoạt động', asOf: '08/2025' },
      { value: '1.579', unit: 'nghìn tỷ VND', label: 'Giao dịch mỗi năm, quy đổi từ 400 tỷ CNY', asOf: '2025' },
      { value: '190', unit: 'quốc gia', label: 'Thị trường xuất khẩu hàng điện tử của khu', asOf: '08/2025' },
    ],
    note: 'Khu chợ vẫn đang đổi mặt hàng chứ không sống bằng linh kiện cũ: kính AI lắp ở đây bán hơn 100.000 máy mỗi tháng, doanh số xuất khẩu nửa đầu 2025 tăng 270% so với cùng kỳ.',
    sourceIds: ['hqb-xinhua'],
  },
  {
    id: 'place-dongmen', stopId: 'dongmen',
    title: 'Khu thương mại lâu đời nhất',
    kicker: 'Dongmen · Khu thương mại lâu đời nhất',
    headline: 'Thâm Quyến lấy tên từ cái chợ này.',
    lead: 'Chợ cũ ở đây đã có từ giữa thời Minh, và tên thành phố Thâm Quyến lấy từ chính cái chợ đó. “Đông Môn” là cổng phía đông — cổng đông khách nhất trong bốn cổng, lâu dần thành tên gọi cho cả khu.',
    metrics: [
      { value: '~180.000', unit: 'm²', label: 'Diện tích khu thương mại Đông Môn', asOf: 'hiện trạng' },
      { value: '300', unit: 'năm', label: 'Tuổi chợ cũ theo ghi chép địa phương', asOf: 'từ thời Minh' },
      { value: '1990', label: 'McDonald’s đầu tiên của Trung Quốc đại lục mở tại đây, 08/10', asOf: '08/10/1990' },
    ],
    note: 'Khu phố hiện tại được dựng lại từ đầu thập niên 1990, nên cái “cổ” ở đây là vị trí và vai trò thương mại chứ không phải kiến trúc. Cùng một thành phố: một bên là chợ 300 năm, một bên là chợ linh kiện ở Hoa Cường Bắc — cả hai nay đều không nhận tiền mặt.',
    sourceIds: ['dongmen-wiki'],
  },
  {
    id: 'place-iote', stopId: 'iote',
    title: 'Triển lãm IoT lần thứ 25',
    kicker: 'IOTE · Triển lãm IoT quốc tế lần thứ 25',
    headline: 'Bốn hall, một ngày, chủ yếu là phần cứng.',
    lead: 'Kỳ thứ 25 của triển lãm IoT quốc tế, mở 26–28/08/2026 tại Trung tâm Hội chợ Quốc tế Thâm Quyến ở Bảo An. Đoàn đi trọn ngày thứ ba của chuyến, bốn hall 9/10/11/12.',
    metrics: [
      { value: '80.000', unit: 'm²', label: 'Diện tích trưng bày', asOf: '08/2026' },
      { value: '1.000', unit: 'gian hàng', label: 'Doanh nghiệp tham gia trưng bày', asOf: '08/2026' },
      { value: '100.000', unit: 'lượt', label: 'Khách chuyên ngành, số ban tổ chức công bố', asOf: '08/2026' },
      { value: '3.000', unit: 'khách', label: 'Khách quốc tế từ 70 quốc gia và vùng lãnh thổ', asOf: '08/2026' },
    ],
    sourceIds: ['iote-2026'],
  },
  {
    id: 'place-luohu', stopId: 'luohu',
    title: 'Chợ dựa vào cửa khẩu',
    kicker: 'Luohu · Chợ dựa vào cửa khẩu',
    headline: 'Cửa khẩu chạy gấp đôi công suất thiết kế.',
    lead: 'Trung tâm thương mại bảy tầng dựng ngay sát cửa khẩu La Hồ — cửa ngõ đường bộ lâu đời nhất nối Thâm Quyến với Hong Kong. Mặt hàng và tập khách của chợ do vị trí này quyết định, không phải do chính nó chọn.',
    metrics: [
      { value: '55.000', unit: 'm²', label: 'Diện tích kinh doanh, bảy tầng', asOf: 'từ 07/1994' },
      { value: '1.700', unit: 'gian hàng', label: 'Tăng từ 1.280 gian lúc mở bán', asOf: 'sau 1994' },
      { value: '170.000', unit: 'lượt/ngày', label: 'Trung bình qua cửa khẩu La Hồ', asOf: 'công bố hiện hành' },
      { value: '80.000', unit: 'lượt/ngày', label: 'Công suất thiết kế của cửa khẩu', asOf: 'thiết kế 1986' },
    ],
    note: 'Đỉnh lịch sử 395.000 lượt một ngày, gần gấp năm lần thiết kế. Cửa khẩu chịu tải bằng tự động hoá: 190 luồng kiểm tra, trong đó 115 luồng tự phục vụ, xác thực 2–5 giây và cam kết chờ không quá 30 phút.',
    sourceIds: ['luohu-port-gov', 'luohu-city'],
  },
  {
    id: 'place-mixc', stopId: 'mixc',
    title: 'Bán lẻ kiểu phố đi bộ',
    kicker: 'MixC World · Cách bố trí',
    headline: 'Phá cái hộp lớn thành phố đi bộ.',
    lead: 'Tổ hợp bán lẻ của China Resources Land mở năm 2017, ngay cạnh khu công nghệ cao Nam Sơn. Thứ đáng xem không phải danh sách thương hiệu mà là cách bố trí: khách đi ngoài trời giữa các toà nhà thay vì đi trong hành lang kín.',
    metrics: [
      { value: '~230.000', unit: 'm²', label: 'Tổng diện tích sàn', asOf: '2017' },
      { value: '10', unit: 'toà', label: 'Cửa hàng flagship đứng riêng thành từng toà', asOf: '2017' },
      { value: '300', unit: 'cửa hàng', label: 'Quy tụ hơn 1.000 thương hiệu', asOf: '2017' },
      { value: '30%', label: 'Thương hiệu lần đầu có mặt tại Thâm Quyến', asOf: '2017' },
    ],
    note: 'Mô hình phố phường cộng trung tâm thương mại. Sáu tác phẩm nghệ thuật cố định đặt xen giữa các toà, biến lối đi thành chỗ đáng dừng lại chứ không chỉ là đường dẫn tới cửa hàng.',
    sourceIds: ['mixc-nanshan-gov'],
  },
]

export const placeById = Object.fromEntries(places.map(place => [place.id, place]))
