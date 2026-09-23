// Năm điểm dừng còn lại không gắn với ba chủ đề chính, nhưng mỗi nơi đều có số liệu
// công bố đủ chắc để dựng một slide. Mỗi con số trỏ về một id trong sổ nguồn.
// Ảnh lấy nguyên bản từ Wikimedia Commons, ghi công tác giả theo đúng giấy phép.
export type PlaceMetric = { value: string; unit?: string; label: string; asOf: string }

export type Place = {
  id: string
  stopId: string
  title: string
  kicker: string
  headline: string
  lead: string
  overviewFacts?: { label: string; detail: string }[]
  photo: { src: string; alt: string; credit: string }
  /** Ảnh thứ hai cho trang đặc điểm, để hai trang không lặp lại một khung hình. */
  photoAlt: { src: string; alt: string; credit: string }
  /** Trang ảnh tại điểm dừng; ảnh tư liệu phải có ghi công riêng. */
  gallery?: {
    title: string
    kicker?: string
    description?: string
    credit?: string
    afterOverview?: boolean
    /** Video dọc đặt thành cột bên trái; khi có video, chú thích ảnh nằm đè lên ảnh cho gọn. */
    video?: { src: string; poster: string; alt: string; caption: string }
    /** tall: ảnh dọc chiếm trọn chiều cao lưới ảnh. focus: object-position khi cắt ảnh vào ô.
     *  weight: độ rộng cột tương đối khi không có video, để ảnh dọc hẹp và ảnh ngang rộng. */
    photos: { src: string; alt: string; caption: string; tall?: boolean; focus?: string; weight?: number }[]
  }
  /** Trang gợi ý ghé thăm. Điểm chỉ đóng vai dẫn nhập cho một chủ đề thì không có. */
  visit?: { title: string; items: { label: string; title: string; detail: string }[] }
  metrics: PlaceMetric[]
  note?: string
  /** Trang đặc điểm; không tạo slide nếu danh sách trống. */
  featuresTitle: string
  features: {
    title: string; detail: string; context?: string; sourceIds?: string[]
    photo?: { src: string; alt: string; credit: string; sourceId: string; focus?: string }
  }[]
  sourceIds: string[]
  showSources?: boolean
}

export const places: Place[] = [
  {
    id: 'place-talent-park', stopId: 'talent-park',
    title: 'Công viên nhân tài',
    kicker: 'Talent Park',
    headline: 'Talent Park — Công viên Nhân tài Thâm Quyến.',
    lead: 'Công viên chủ đề nhân tài đầu tiên của Trung Quốc, tại khu Hậu Hải, quận Nam Sơn.',
    overviewFacts: [
      { label: 'Vì sao có tên “Talent Park”?', detail: 'Công viên chủ đề nhân tài đầu tiên của Trung Quốc, tôn vinh đóng góp của nhân tài cho thành phố. Hơn 20 không gian cảnh quan được thiết kế theo chủ đề này.' },
      { label: 'Vị trí', detail: 'Nằm ven Vịnh Thâm Quyến, tại khu Hậu Hải, quận Nam Sơn — khu vực tập trung nhiều trụ sở doanh nghiệp công nghệ lớn như Tencent, Alibaba và Baidu.' },
    ],
    photo: {
      src: '/media/places/talent-park-user.webp',
      alt: 'Toàn cảnh Talent Park với hồ nước, đường dạo và các toà nhà ven công viên',
      credit: '', // Ảnh người dùng gửi: talent_park1.webp; không hiển thị chú thích trên slide.
    },
    photoAlt: {
      src: '/media/places/talent-park-coffee-robot.jpg',
      alt: 'Robot AI² Robotics dùng cánh tay robot pha cà phê cho khách tại Talent Park',
      credit: 'Robot pha cà phê tại Talent Park · Shenzhen Special Zone Daily, 23/02/2026',
    },
    gallery: {
      title: 'Những khối kiến trúc bên Talent Park.',
      kicker: 'Talent Park · Không gian',
      description: 'Shenzhen Bay Culture Square — cụm công trình văn hóa do MAD thiết kế, nối liền công viên bằng thảm cỏ và lối đi bộ.',
      credit: '', // Ảnh tư liệu: Shenzhen Government Online · MAD Architects; không hiển thị chú thích trên slide.
      afterOverview: true,
      photos: [
        {
          src: '/media/places/talent-park-culture-aerial.jpg',
          alt: 'Hai khối nhà trắng uốn cong của Shenzhen Bay Culture Square nhìn từ trên cao, xen giữa thảm cỏ và lối đi bộ',
          caption: 'Các khối nhà trắng nhìn từ trên cao',
          weight: 1.65,
        },
        {
          src: '/media/places/talent-park-culture-garden.jpg',
          alt: 'Người dân đi bộ giữa mái phủ xanh và các khối kiến trúc trắng của Shenzhen Bay Culture Square',
          caption: 'Lối đi bộ và mái phủ xanh',
          focus: '60% center',
        },
      ],
    },
    metrics: [],
    featuresTitle: 'Công nghệ bước vào công viên.',
    features: [
      {
        title: 'Meituan · Drone và tủ nhận hàng',
        detail: 'Nhận đồ ăn tại tủ trong công viên.',
        context: 'Trải nghiệm của đoàn · 08/2026',
        sourceIds: ['mt-talent-route', 'trip-talent-station'],
        photo: {
          src: '/media/trip/drone/station.jpg',
          alt: 'Ảnh của đoàn: trạm nhận hàng drone Meituan tại Talent Park',
          credit: 'Đoàn Ahamove', sourceId: 'trip-talent-station',
        },
      },
      {
        title: 'Robot bán kem',
        detail: 'Robot làm kem, bán cho khách ngay trong công viên.',
        context: 'Ảnh người dùng cung cấp',
        sourceIds: ['trip-sheet'],
        photo: {
          src: '/media/places/talent-park-icecream-robot.jpg',
          alt: 'Robot hình người đứng sau quầy kính của ki-ốt bán kem tại Talent Park, cạnh máy làm kem',
          credit: 'Ảnh người dùng cung cấp', sourceId: 'trip-sheet',
        },
      },
    ],
    sourceIds: ['talent-park-gov', 'houhai-tech-headquarters', 'mad-culture-square', 'talent-park-rules', 'mt-talent-route', 'talent-park-coffee', 'ai2-alphabot-cube', 'trip-sheet'],
    showSources: false,
  },
  {
    id: 'place-seg', stopId: 'seg',
    title: 'Quy mô khu chợ điện tử',
    kicker: 'Huaqiangbei · Quy mô khu chợ',
    headline: 'Linh kiện, gia công và phân phối trong cùng một khu.',
    lead: 'Hoa Cường Bắc tập trung các chợ điện tử và dịch vụ hỗ trợ phát triển sản phẩm. Linh kiện, gia công bo mạch, vỏ hộp và kênh phân phối nằm gần nhau, thuận tiện cho việc tìm nguồn và làm mẫu.',
    photo: {
      src: '/media/places/seg.jpg',
      alt: 'Bên trong chợ điện tử SEG Plaza: các gian hàng linh kiện san sát nhau dưới trần thấp',
      credit: 'Bobbie Johnson · CC BY-SA 2.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/places/seg-2.jpg',
      alt: 'Toà SEG Plaza 71 tầng nhìn từ dưới đường, giữa khu Hoa Cường Bắc',
      credit: 'Charlie fong · CC BY-SA 4.0 · Wikimedia Commons',
    },
    metrics: [],
    featuresTitle: 'Cách tổ chức và giao dịch tại khu chợ',
    features: [
      { title: 'Các chợ phân theo nhóm sản phẩm', detail: 'Khoảng 35 chợ chuyên ngành nằm cạnh nhau, từ linh kiện, phụ kiện điện thoại đến máy tính, máy ảnh cũ và đèn LED. Nên xác định nhóm sản phẩm trước khi chọn toà nhà để tham quan.' },
      { title: 'Giá bán lẻ và giá sỉ khác nhau', detail: 'Theo quan sát của đoàn, tầng dưới thường bán lẻ, các tầng cao có nhiều mức giá sỉ hơn. Sự khác biệt thể hiện rõ ở mặt hàng máy dịch cầm tay.' },
      { title: 'Cần so sánh giá và thương lượng', detail: 'Ghi chép của đoàn có mức giá sau thương lượng còn 40–50% giá chào ban đầu. Nên đối chiếu giữa các quầy và kiểm tra sản phẩm trước khi mua.' },
      { title: 'Cạnh tranh giữa các gian hàng', detail: 'Nhiều gian hàng bán cùng nhóm sản phẩm. Khả năng tìm nguồn, tốc độ đáp ứng và quản lý dòng tiền là những yếu tố cạnh tranh đáng chú ý.' },
    ],
    gallery: {
      title: 'Chợ linh kiện, và cả robot.',
      video: {
        src: '/media/places/seg-robot-boxing.mp4', poster: '/media/places/seg-robot-boxing-poster.jpg',
        alt: 'Robot hình người màu đỏ bạc đá và đấm bao cát trong một sàn đấu nhỏ, khách đứng quanh quay điện thoại',
        caption: 'Một gian trong chợ: robot hình người biểu diễn đá bao cát.',
      },
      photos: [
        { src: '/media/places/seg-team-1.jpg', tall: true, alt: 'Nhìn lên giếng trời SEG Plaza: nhiều tầng gian hàng với biển hiệu điện tử sáng đèn', caption: 'Nhìn lên giếng trời: tầng nào cũng kín gian hàng, biển quảng cáo điốt và cuộn cảm.' },
        { src: '/media/places/seg-team-2.jpg', tall: true, alt: 'Ba thành viên đoàn đi giữa các quầy linh kiện điện tử trong SEG Plaza', caption: 'Đoàn dạo giữa các quầy linh kiện.' },
      ],
    },
    sourceIds: ['hqb-xinhua', 'hqb-markets', 'hqb-szgov'],
  },
  {
    id: 'place-dongmen', stopId: 'dongmen',
    title: 'Khu thương mại lâu đời nhất',
    kicker: 'Dongmen · Khu thương mại lâu đời nhất',
    headline: 'Đông Môn và lịch sử tên gọi Thâm Quyến.',
    lead: 'Khu chợ hình thành từ giữa thời Minh và gắn với nguồn gốc tên gọi Thâm Quyến. Tên “Đông Môn” bắt nguồn từ cổng phía đông, nơi giao thương nhộn nhịp của khu chợ cũ.',
    photo: {
      src: '/media/places/dongmen.jpg',
      alt: 'Phố đi bộ Dongmen ở Thâm Quyến với biển hiệu cửa hàng dày đặc hai bên lối đi',
      credit: '30000lightyears · CC BY-SA 4.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/places/dongmen-2.jpg',
      alt: 'Phố ăn Đông Môn buổi tối, khách xếp hàng trước các quầy đồ ăn',
      credit: 'TWMEAU rOEPPOUL · CC0 · Wikimedia Commons',
    },
    metrics: [
      { value: '~180.000', unit: 'm²', label: 'Diện tích khu thương mại Đông Môn', asOf: 'hiện trạng' },
      { value: '300', unit: 'năm', label: 'Tuổi chợ cũ theo ghi chép địa phương', asOf: 'từ thời Minh' },
      { value: '1990', label: 'McDonald’s đầu tiên của Trung Quốc đại lục mở tại đây, 08/10', asOf: '08/10/1990' },
    ],
    note: 'Khu phố hiện tại được xây dựng lại từ đầu thập niên 1990. Giá trị lịch sử của Đông Môn nằm ở vị trí và vai trò thương mại lâu đời; phần lớn kiến trúc hiện nay đã được tái thiết.',
    featuresTitle: 'Có gì trong khu phố',
    features: [
      { title: 'Hơn 600 thương hiệu', detail: 'Hơn hai mươi trung tâm thương mại lớn cùng hàng trăm cửa hàng nhỏ nằm trên mười mấy tuyến phố nối nhau, tạo thành nhiều tầng giá trong cùng một khu.' },
      { title: 'Di tích nằm xen giữa chợ', detail: 'Thư viện Tư Nguyệt và sở chỉ huy đội du kích Đông Giang vẫn còn giữa khu mua sắm; một đoạn phố được dựng lại theo diện mạo thị trấn biên giới ngày trước.' },
      { title: 'Thanh toán bằng ví điện tử', detail: 'Tại các cửa hàng đoàn ghé, thanh toán bằng Alipay rất phổ biến. Các thao tác quét mã QR hoặc chạm NFC được tích hợp vào trải nghiệm mua sắm.' },
      { title: 'Màn hình tương tác tại điểm bán', detail: 'Đoàn quan sát màn hình LED tròn dưới sàn có thể tương tác bằng điện thoại. Đây là một hình thức kết hợp trải nghiệm số với không gian bán lẻ.' },
    ],
    visit: {
      title: 'Nếu bạn ghé Đông Môn',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 1 hoặc 3, ga Lão Nhai', detail: 'Lên khỏi ga là vào thẳng khu phố đi bộ, không phải đi bộ thêm.' },
        { label: 'Đi lúc nào', title: 'Buổi tối', detail: 'Phố ăn sáng đèn và đông nhất sau 19 giờ. Ban ngày khu này thiên về mua sắm hơn.' },
        { label: 'Xem và ăn gì', title: 'Phố ăn Đông Môn và hơn 600 thương hiệu', detail: 'Các tuyến phố mua sắm nối tiếp nhau, xen giữa là di tích và những điểm trải nghiệm tương tác.' },
        { label: 'Lưu ý', title: 'Chuẩn bị phương thức thanh toán điện tử', detail: 'Cài đặt và kiểm tra Alipay hoặc WeChat Pay trước khi đi để thuận tiện mua sắm.' },
      ],
    },
    gallery: {
      title: 'Một buổi tối ở Đông Môn.',
      photos: [
        { src: '/media/places/Dongmen_1.jpg', alt: 'Thành viên đoàn ngồi bên đường Đông Môn buổi tối, sau lưng là biển neon và dòng người, xe giao hàng', caption: 'Biển neon kín hai bên đường, shipper vẫn len giữa dòng người đi bộ.' },
        { src: '/media/places/Dongmen_2.jpg', alt: 'Thành viên đoàn cầm xiên mực nướng dài và ly nước trên phố Đông Môn', caption: 'Phố ăn buổi tối: một xiên mực nướng cỡ lớn, vừa đi vừa ăn.' },
        { src: '/media/places/Dongmen_3.jpg', alt: 'Dãy nhà mái ngói kiểu cũ ở Đông Môn sáng đèn về đêm, mặt sàn ướt phản chiếu ánh đèn', caption: 'Đoạn phố dựng lại theo diện mạo thị trấn cũ, sáng đèn về đêm.' },
      ],
    },
    sourceIds: ['dongmen-wiki', 'dongmen-duten'],
  },
  {
    id: 'place-iote', stopId: 'iote',
    title: 'Triển lãm IoT lần thứ 25',
    kicker: 'IOTE · Triển lãm IoT quốc tế lần thứ 25',
    headline: 'Bốn khu trưng bày về công nghệ IoT.',
    lead: 'Triển lãm IoT quốc tế lần thứ 25 diễn ra ngày 26–28/08/2026 tại Trung tâm Hội chợ Quốc tế Thâm Quyến, Bảo An. IOTE sử dụng bốn trong tổng số mười chín khu trưng bày của trung tâm. Đoàn dành ngày thứ ba của chuyến đi để tham quan.',
    photo: {
      src: '/media/places/iote.jpg',
      alt: 'Hành lang có mái che chạy dọc các hall của Trung tâm Hội chợ Quốc tế Thâm Quyến, bên trái là lối vào hall số 8',
      credit: 'Dinkun Chen · CC BY-SA 4.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/places/iote-2.jpg',
      alt: 'Sảnh vào phía bắc của Trung tâm Hội chợ Quốc tế Thâm Quyến',
      credit: 'Lhzss8 · CC BY-SA 4.0 · Wikimedia Commons',
    },
    metrics: [
      { value: '80.000', unit: 'm²', label: 'Diện tích triển lãm IOTE 2026', asOf: '08/2026' },
      { value: '400.000', unit: 'm²', label: 'Trưng bày trong nhà của cả trung tâm, giai đoạn 1', asOf: '2026' },
      { value: '1.000+', unit: 'doanh nghiệp', label: 'Tham gia trưng bày, số ban tổ chức công bố', asOf: '08/2026' },
      { value: '100.000', unit: 'lượt', label: 'Khách chuyên ngành, số ban tổ chức công bố', asOf: '08/2026' },
    ],
    featuresTitle: 'Bốn khu trưng bày, bốn nhóm chủ đề',
    features: [
      { title: 'Hall 9 · Passive IoT và thiết bị đầu cuối', detail: 'RFID, mã QR, NFC và thiết bị cầm tay cho kho vận. Nhóm sản phẩm này phù hợp để tìm hiểu các ứng dụng nhận diện và theo dõi hàng hoá.' },
      { title: 'Hall 10 · IoT công nghiệp, cảm biến, định vị', detail: 'UWB và RTLS định vị trong nhà, LoRa và NB-IoT theo dõi tài sản, GNSS RTK cho ETA, cảm biến nhiệt ẩm và rung sốc.' },
      { title: 'Hall 11 · Digital China', detail: 'Nhãn e-paper tái sử dụng cập nhật qua NFC, giải pháp chống hàng giả và truy xuất hành trình, màn hình thông minh.' },
      { title: 'Hall 12 · AI tổng quát', detail: 'Vision-IoT đo kiện và phát hiện hư hỏng, LLM và AI agent cho vận hành, chip chạy trên thiết bị, robot và AMR.' },
    ],
    visit: {
      title: 'Nếu bạn ghé IOTE',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 20, ga Quốc Triển Bắc', detail: 'Ga kết nối với sảnh phía bắc. Địa điểm nằm ở Bảo An, nên cần tính thêm thời gian di chuyển từ trung tâm thành phố.' },
        { label: 'Đi lúc nào', title: 'Chỉ trong ba ngày triển lãm', detail: 'Thường rơi vào cuối tháng 8. Cần đăng ký trước để lấy thẻ vào cửa.' },
        { label: 'Xem gì', title: 'Bốn khu trưng bày theo nhóm công nghệ', detail: 'RFID và NFC, cảm biến và định vị, nhãn e-paper và chống hàng giả, AI và robot.' },
        { label: 'Lưu ý', title: 'Ưu tiên các khu trưng bày phù hợp', detail: 'Nên dành một ngày và xác định trước nhóm công nghệ cần tìm hiểu để phân bổ thời gian tham quan.' },
      ],
    },
    gallery: {
      title: 'Robot và thiết bị AI tại IOTE.',
      video: {
        src: '/media/places/iote-robot-bar.mp4', poster: '/media/places/iote-robot-bar-poster.jpg',
        alt: 'Cánh tay robot pha đồ uống từ dãy chai treo ngược trong một quầy tròn tại IOTE, khách đứng quay điện thoại',
        caption: 'Quầy robot pha chế: cánh tay robot tự lấy đồ uống từ dãy chai treo.',
      },
      photos: [
        { src: '/media/places/iote-team-1.jpg', tall: true, alt: 'Booth TunStar với khẩu hiệu tiếng Trung “Để AI bước ra khỏi màn hình, cảm nhận thế giới thật”, nhân viên giới thiệu thiết bị', caption: 'TunStar: “Để AI bước ra khỏi màn hình, cảm nhận thế giới thật.”' },
        { src: '/media/places/iote-team-6.jpg', tall: true, focus: '38% 45%', alt: 'Màn hình bảng viết cảm ứng tại một booth IOTE, dòng chữ viết tay phát sáng “Xin chào Ahamovers”, phía sau là khách tham quan', caption: 'Một booth chào đoàn trên bảng cảm ứng: “Xin chào Ahamovers”.' },
        { src: '/media/places/iote-team-4.jpg', focus: '12% center', alt: 'Thành viên đoàn mặc áo Ahamove trao đổi với nhân viên booth XCC RFID, quầy trưng bày thẻ RFID và NFC', caption: 'Đoàn trao đổi tại booth thẻ RFID/NFC của XCC.' },
        { src: '/media/places/iote-team-2.jpg', alt: 'Booth CTONE với vòng đèn tròn và biển “đầu cuối – biên – đám mây”, khách đứng kín lối đi', caption: 'CTONE: máy tính biên, đầu cuối – biên – đám mây.' },
        { src: '/media/places/iote-team-5.jpg', focus: '45% center', alt: 'Lối đi giữa các booth đông kín khách, thành viên đoàn mặc áo Ahamove đứng giữa dòng người', caption: 'Đoàn Ahamove giữa lối đi.' },
        { src: '/media/places/iote-team-3.jpg', alt: 'Booth ZNV với các vòng biển đỏ treo trên cao, đông khách chuyên ngành', caption: 'ZNV: AI cho “tình huống phức tạp”.' },
      ],
    },
    sourceIds: ['iote-2026', 'shenzhen-world-aipc'],
  },
  {
    id: 'place-luohu', stopId: 'luohu',
    title: 'Thương mại tại cửa khẩu La Hồ',
    kicker: 'Luohu · Thương mại tại cửa khẩu',
    headline: 'Lưu lượng qua cửa khẩu hơn gấp đôi công suất thiết kế.',
    lead: 'Trung tâm thương mại bảy tầng nằm sát cửa khẩu La Hồ, kết nối Thâm Quyến với Hong Kong. Vị trí cửa khẩu ảnh hưởng rõ đến nhóm khách hàng và các mặt hàng kinh doanh tại đây.',
    photo: {
      src: '/media/places/luohu.jpg',
      alt: 'Khu vực cửa khẩu La Hồ, cửa ngõ đường bộ nối Thâm Quyến với Hong Kong',
      credit: 'David290 · CC BY-SA 4.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/places/luohu-2.jpg',
      alt: 'Đường Hoà Bình nhìn về phía cửa khẩu La Hồ',
      credit: 'Huepang2012 · CC BY-SA 3.0 · Wikimedia Commons',
    },
    metrics: [
      { value: '55.000', unit: 'm²', label: 'Diện tích kinh doanh, bảy tầng', asOf: 'từ 07/1994' },
      { value: '1.700', unit: 'gian hàng', label: 'Tăng từ 1.280 gian lúc mở bán', asOf: 'sau 1994' },
      { value: '170.000', unit: 'lượt/ngày', label: 'Trung bình qua cửa khẩu La Hồ', asOf: 'công bố hiện hành' },
      { value: '80.000', unit: 'lượt/ngày', label: 'Công suất thiết kế của cửa khẩu', asOf: 'thiết kế 1986' },
    ],
    note: 'Đỉnh lịch sử 395.000 lượt một ngày, gần gấp năm lần thiết kế. Cửa khẩu chịu tải bằng tự động hoá: 190 luồng kiểm tra, trong đó 115 luồng tự phục vụ, xác thực 2–5 giây và cam kết chờ không quá 30 phút.',
    featuresTitle: 'Chín ngành trong một toà',
    features: [
      { title: 'Chín nhóm ngành trong cùng toà nhà', detail: 'Ăn uống, chợ vải và may đo, quần áo may sẵn, thủ công mỹ nghệ, rèm vải, đồ da và bách hoá, trà và trà cụ, văn hoá dân tộc, văn hoá Việt kịch.' },
      { title: 'Dịch vụ may đo tập trung', detail: 'Hơn 140 tiệm may đo, mỗi năm cung cấp khoảng 70.000 bộ vest, sườn xám và váy cưới. Đây là nhóm dịch vụ thu hút khách từ Hong Kong.' },
      { title: 'Phần lớn khách đến từ Hong Kong', detail: 'Có giai đoạn chợ đón 50.000 lượt mỗi ngày, khoảng chín phần mười là khách Hong Kong qua cửa khẩu rồi đi bộ sang.' },
      { title: 'Kết nối nhiều loại hình giao thông', detail: 'Cửa khẩu, ga tàu, bến xe khách, metro tuyến 1 và xe buýt tập trung tại đây, tạo thuận lợi cho khách ghé mua sắm trong hành trình di chuyển.' },
    ],
    visit: {
      title: 'Nếu bạn ghé Luohu',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 1 ga La Hồ, cửa A', detail: 'Đi bộ sang là tới. Cùng một chỗ với cửa khẩu sang Hong Kong, ga tàu và bến xe khách.' },
        { label: 'Dành bao lâu', title: 'Một buổi, hai buổi nếu may đo', detail: 'Đặt may thì phải quay lại lần hai để thử và sửa, nên đừng để vào ngày cuối chuyến.' },
        { label: 'Mua gì', title: 'Trà, đồ khô, đồ da, vải và may đo', detail: 'Hơn 140 tiệm may đo nằm ngay trong toà nhà — đây là thứ khách Hong Kong sang đặt.' },
        { label: 'Lưu ý', title: 'Kiểm tra chất lượng và nguồn gốc sản phẩm', detail: 'Theo ghi chép của đoàn, giá khá đa dạng và có sản phẩm khó xác định nguồn gốc. Nên kiểm tra kỹ trước khi thương lượng và mua.' },
      ],
    },
    sourceIds: ['luohu-port-gov', 'luohu-city', 'luohu-trades'],
  },
  {
    id: 'place-mixc', stopId: 'mixc',
    title: 'Bán lẻ kiểu phố đi bộ',
    kicker: 'MixC World · Cách bố trí',
    headline: 'Trung tâm thương mại kết hợp phố đi bộ.',
    lead: 'Tổ hợp bán lẻ của China Resources Land, khai trương ngày 27/09/2017 trên nền làng Đại Xung cũ, sát khu công nghệ cao Nam Sơn. Thay vì một khối mall khép kín, các toà nhà nối với nhau bằng phố đi bộ ngoài trời.',
    photo: {
      src: '/media/places/mixc.jpg',
      alt: 'MixC World ở Nam Sơn: các toà nhà thấp tách rời nhau, lối đi ngoài trời ở giữa',
      credit: 'Charlie fong · CC BY-SA 4.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/places/mixc-2.jpg',
      alt: 'Giếng trời phía đông của MixC World',
      credit: 'Jasper201434 · CC BY 4.0 · Wikimedia Commons',
    },
    metrics: [],
    featuresTitle: 'Bốn điểm nhấn trong tổ hợp.',
    features: [
      {
        title: 'Bubblecoat Elephant · Voi phun nước',
        detail: 'Của Florentijn Hofman, tác giả chú vịt vàng khổng lồ. Voi dài 12 m, cao 7,5 m, vòi 24 m, nặng 30 tấn, định kỳ phun nước xuống đài phun bên dưới.',
        context: 'Ra mắt cùng ngày khai trương · 27/09/2017',
        sourceIds: ['mixc-elephant-hypebeast'],
        photo: { src: '/media/places/mixc_2.jpg', alt: 'Tượng voi bơm hơi màu xám bám trên mặt tiền toà nhà MixC World, vòi buông dài xuống', credit: 'Đoàn Ahamove', sourceId: 'trip-sheet', focus: 'center 12%' },
      },
      {
        title: 'Huawei · Flagship toàn cầu đầu tiên',
        detail: 'Mở ngày 28/09/2019, rộng khoảng 1.300 m², phủ sóng 5G toàn cửa hàng. Khi đoàn ghé, xe điện được trưng bày ngay cạnh bàn trải nghiệm điện thoại.',
        context: 'Khai trương 28/09/2019',
        sourceIds: ['huawei-flagship-21jingji', 'trip-sheet'],
        photo: { src: '/media/places/mixc-huawei.jpg', alt: 'Trong flagship Huawei: xe SUV điện màu tím và một xe màu nâu trưng bày dưới trần đèn trắng, khách xem điện thoại ở bàn phía sau', credit: 'Đoàn Ahamove', sourceId: 'trip-sheet', focus: '45% 60%' },
      },
      {
        title: 'HAUS NOWHERE · Bán lẻ như triển lãm',
        detail: 'Mở 05/09/2024, là HAUS NOWHERE thứ ba và lớn nhất thế giới: 6.914 m², ba tầng, 21 thương hiệu. Tượng người khổng lồ cao bằng một tầng nhà đón khách ở lối vào.',
        context: 'Khai trương 05/09/2024',
        sourceIds: ['haus-nowhere-winshang'],
        photo: { src: '/media/places/mixc-haus-giant.jpg', alt: 'Tượng người khổng lồ trắng ngồi ôm gối, nhắm mắt, bàn tay và bàn chân tả thực, trong sảnh HAUS NOWHERE', credit: 'Đoàn Ahamove', sourceId: 'trip-sheet', focus: 'center 30%' },
      },
      {
        title: 'Quảng trường · Sân khấu sự kiện',
        detail: 'Quảng trường giữa các toà đổi chủ đề theo mùa. Hè 2026 là khu trưng bày Disney Hong Kong: Woody, Buzz Lightyear và lâu đài xếp khối cho các gia đình chụp ảnh.',
        context: 'Hè 2026',
        sourceIds: ['mixc-disney-2026', 'trip-sheet'],
        photo: { src: '/media/places/mixc-disney.jpg', alt: 'Khu trưng bày Toy Story trước cửa hàng Uniqlo: tượng Woody ngồi trên lâu đài xếp khối, Buzz Lightyear và chó lò xo Slinky, trẻ em đứng chụp ảnh', credit: 'Đoàn Ahamove', sourceId: 'trip-sheet', focus: '40% center' },
      },
    ],
    gallery: {
      title: 'Một vòng quanh MixC World.',
      video: {
        src: '/media/places/mixc-robot-dog.mp4', poster: '/media/places/mixc-robot-dog-poster.jpg',
        alt: 'Robot chó bốn chân mặc áo sọc hồng chạy cạnh hai chú chó thật được dắt dây, đám đông vây quanh quay điện thoại',
        caption: 'Robot chó bốn chân “đi dạo” cùng chó thật giữa quảng trường.',
      },
      photos: [
        { src: '/media/places/mixc_ngoaitroi.jpg', tall: true, alt: 'Ngã tư gần MixC World: cao ốc kính Nam Sơn, người đi xe đạp công cộng màu vàng và dòng người qua đường', caption: 'Bên ngoài: cao ốc Nam Sơn và xe đạp công cộng.' },
        { src: '/media/places/mixc_trienlam.jpg', alt: 'Triển lãm tượng đầu người khổng lồ màu bạc đặt trên thảm xanh giữa sảnh MixC World, khách đứng xem và chụp ảnh', caption: 'Triển lãm tượng đầu người khổng lồ giữa sảnh.' },
        { src: '/media/places/mixc-starbucks.jpg', alt: 'Starbucks Reserve nằm trong khối trụ kính phủ đèn lấp lánh, khách ngồi kín bàn', caption: 'Starbucks Reserve trong khối trụ kính phủ đèn.' },
        { src: '/media/places/mixc-haus-bison.jpg', alt: 'Ba tượng bò rừng đứng trên đồi đất đỏ trong HAUS NOWHERE', caption: 'HAUS NOWHERE: đàn bò rừng cử động được ở tầng 3.' },
        { src: '/media/places/mixc_ansaukhidi.jpg', alt: 'Thành viên đoàn ngồi bên vỉa hè buổi tối ăn ly mì bò hầm', caption: 'Kết thúc buổi đi: ly mì bò hầm bên vỉa hè.' },
      ],
    },
    sourceIds: ['mixc-nanshan-gov', 'mixc-winshang', 'dachong-nfapp'],
    showSources: false,
  },
]

export const placeById = Object.fromEntries(places.map(place => [place.id, place]))
