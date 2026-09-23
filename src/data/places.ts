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
  photo: { src: string; alt: string; credit: string }
  /** Ảnh thứ hai cho trang đặc điểm, để hai trang không lặp lại một khung hình. */
  photoAlt: { src: string; alt: string; credit: string }
  /** Trang ảnh do đoàn tự chụp tại điểm dừng, xếp theo thứ tự muốn kể. */
  gallery?: {
    title: string
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
  /** Trang thứ hai của điểm dừng: đặc điểm cụ thể của nơi này. */
  featuresTitle: string
  features: { title: string; detail: string }[]
  sourceIds: string[]
}

export const places: Place[] = [
  {
    id: 'place-talent-park', stopId: 'talent-park',
    title: 'Công viên nhân tài',
    kicker: 'Talent Park · Vì sao tuyến drone đặt ở đây',
    headline: 'Công viên chủ đề nhân tài đầu tiên cả nước.',
    lead: 'Công viên nằm ở Hậu Hải, kẹp giữa khu công nghệ cao và cụm trụ sở Vịnh Thâm Quyến — nơi tập trung dân kỹ thuật của thành phố. Chính vì tập khách đó mà Meituan chọn nơi này làm tuyến drone thứ ba ở Nam Sơn.',
    photo: {
      src: '/media/places/talent-park.jpg',
      alt: 'Công viên Nhân tài ở tiền cảnh, phía sau là đường chân trời Hậu Hải với toà Hoa Nhuận',
      credit: 'Charlie fong · CC BY-SA 4.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/research/talent-park-drone.jpg',
      alt: 'Điểm cất cánh của tuyến drone Coastal City – Công viên Nhân tài trong ảnh khai trương',
      credit: 'Meituan · ảnh khai trương tuyến, 04/09/2023',
    },
    metrics: [
      { value: '770.000', unit: 'm²', label: 'Diện tích công viên', asOf: 'mở 01/11/2017' },
      { value: '300.000', unit: 'm²', label: 'Mặt nước, hồ hình trái tim', asOf: '2017' },
      { value: '1', unit: 'km', label: 'Từ điểm cất cánh Coastal City tới công viên', asOf: '04/09/2023' },
      { value: '~50%', label: 'Thời gian giao rút ngắn, theo Meituan công bố', asOf: '04/09/2023' },
    ],
    note: 'Tuyến bay mở ngày 04/09/2023, là tuyến thứ ba của Meituan ở Nam Sơn và tuyến thứ năm đặt trong khu tham quan trên cả nước. Đối tác vận hành là China Resources Land — cũng chính là chủ đầu tư MixC World.',
    featuresTitle: 'Vì sao công viên là chỗ khó giao hàng',
    features: [
      { title: 'Địa chỉ trong công viên không tồn tại', detail: 'Trước đây khách phải mô tả “cột đèn thứ 4”, “gốc cây thứ 6” cho shipper. Drone bỏ hẳn việc đó: hàng rơi vào một tủ có địa chỉ cố định.' },
      { title: 'Một cây số, nhưng là một cây số khó', detail: 'Điểm cất cánh đặt ở khu thương mại Coastal City, cách công viên khoảng 1 km. Đi bộ hay chạy xe đều phải vòng; bay thẳng thì không.' },
      { title: 'Tập khách đúng gu', detail: 'Hậu Hải là chỗ dân kỹ thuật tụ tập, nên người ở đây sẵn sàng thử cái mới. Thử nghiệm cần người chịu thử trước khi cần công nghệ tốt.' },
      { title: 'Công viên là phòng thí nghiệm vừa đủ', detail: 'Không gian mở, ít vật cản, ít nhà cao tầng chắn đường bay, mà vẫn có người thật đặt đơn thật. Hơn hai mươi khu cảnh quan trải trên 77 ha.' },
    ],
    sourceIds: ['talent-park-gov', 'mt-talent-route', 'trip-sheet'],
  },
  {
    id: 'place-seg', stopId: 'seg',
    title: 'Quy mô khu chợ điện tử',
    kicker: 'Huaqiangbei · Quy mô khu chợ',
    headline: 'Cả chuỗi cung ứng trong bán kính đi bộ.',
    lead: 'Khu chợ điện tử lớn nhất thế giới nằm gọn trong vài khối nhà. Đó là lý do một kỹ sư ở đây dựng được nguyên mẫu trong một buổi chiều: linh kiện, gia công bo mạch, vỏ hộp và kênh phân phối đều nằm cạnh nhau.',
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
    metrics: [
      { value: '115.000', unit: 'chủ thể', label: 'Doanh nghiệp và hộ kinh doanh trong khu', asOf: '08/2025' },
      { value: '1.579', unit: 'nghìn tỷ VND', label: 'Giao dịch mỗi năm, quy đổi từ 400 tỷ CNY', asOf: '2025' },
      { value: '71', unit: 'tầng', label: 'Toà SEG Plaza; riêng chợ chiếm tầng 1 đến 10', asOf: 'xây xong 2000' },
      { value: '100.000', unit: 'kính AI', label: 'Kính AI lắp tại khu, bán ra mỗi tháng', asOf: '2025' },
    ],
    note: 'Khu chợ đang đổi mặt hàng chứ không sống bằng linh kiện cũ: riêng kính AI lắp tại đây, doanh số xuất khẩu nửa đầu 2025 tăng 270% so với cùng kỳ.',
    featuresTitle: 'Đi chợ ở đây thế nào',
    features: [
      { title: 'Mỗi toà một chuyên ngành', detail: 'Đây không phải một chợ mà khoảng 35 chợ chuyên ngành đứng cạnh nhau: linh kiện rời, phụ kiện điện thoại, máy tính cũ, máy ảnh cũ, đèn LED. Biết cần gì thì biết vào toà nào.' },
      { title: 'Tầng càng cao, giá càng gốc', detail: 'Trong cùng một toà, tầng dưới bán lẻ cho khách vãng lai, càng lên cao càng gần giá sỉ. Đoàn thấy rõ nhất ở mặt hàng máy dịch cầm tay.' },
      { title: 'Giá niêm yết không phải giá thật', detail: 'Ghi chép của đoàn: phải trả giá xuống còn 40–50% mới ra đúng giá. Đây là luật chơi mặc định của khu chợ, không phải chuyện riêng với khách nước ngoài.' },
      { title: 'Trùng lặp là nhiên liệu, không phải lãng phí', detail: 'Hàng nghìn gian bán món giống hệt nhau vẫn sống được vì họ cạnh tranh bằng vị trí trong mạng lưới, tốc độ và dòng tiền chứ không bằng khác biệt sản phẩm.' },
    ],
    visit: {
      title: 'Nếu bạn ghé Hoa Cường Bắc',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 1 ga Hoa Cường Lộ', detail: 'Hoặc tuyến 2 và 7 ga Hoa Cường Bắc. Trục đi bộ 930 m nối 42 cửa lên xuống, ra cửa nào cũng vào được chợ.' },
        { label: 'Dành bao lâu', title: 'Nửa buổi đi ngang, cả buổi nếu mua', detail: 'Chợ mở khoảng 10 giờ sáng, phần lớn đóng cửa từ 18 đến 20 giờ. Đi buổi chiều là vừa đẹp.' },
        { label: 'Xem và mua gì', title: 'Linh kiện, phụ kiện, máy dịch cầm tay', detail: 'Cả module cảm biến và đồ chơi công nghệ. Muốn mua thật thì nhắm một toà theo mặt hàng rồi đi lên tầng cao.' },
        { label: 'Lưu ý', title: 'Trả giá xuống 40–50% rồi hãy chốt', detail: 'Thử hàng ngay tại quầy trước khi trả tiền. Nhớ cài sẵn thanh toán nội địa vì gần như không ai nhận tiền mặt.' },
      ],
    },
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
    headline: 'Thâm Quyến lấy tên từ cái chợ này.',
    lead: 'Chợ cũ ở đây đã có từ giữa thời Minh, và tên thành phố Thâm Quyến lấy từ chính cái chợ đó. “Đông Môn” là cổng phía đông — cổng đông khách nhất trong bốn cổng, lâu dần thành tên gọi cho cả khu.',
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
    note: 'Khu phố hiện tại được dựng lại từ đầu thập niên 1990, nên cái “cổ” ở đây là vị trí và vai trò thương mại chứ không phải kiến trúc. Cùng một thành phố: một bên là chợ 300 năm, một bên là chợ linh kiện ở Hoa Cường Bắc — cả hai nay đều không nhận tiền mặt.',
    featuresTitle: 'Có gì trong khu phố',
    features: [
      { title: 'Hơn 600 thương hiệu', detail: 'Hơn hai mươi trung tâm thương mại lớn cùng hàng trăm cửa hàng nhỏ nằm trên mười mấy tuyến phố nối nhau, tạo thành nhiều tầng giá trong cùng một khu.' },
      { title: 'Di tích nằm xen giữa chợ', detail: 'Thư viện Tư Nguyệt và sở chỉ huy đội du kích Đông Giang vẫn còn giữa khu mua sắm; một đoạn phố được dựng lại theo diện mạo thị trấn biên giới ngày trước.' },
      { title: 'Không nơi nào nhận tiền mặt', detail: 'Ghi chép của đoàn: mọi cửa hàng lớn nhỏ đều thanh toán bằng Alipay. Chạm QR hoặc NFC là chuẩn mực mặc định chứ không phải lựa chọn thêm.' },
      { title: 'Màn hình LED tròn dưới sàn', detail: 'Đặt điện thoại lên là tương tác được. Bán lẻ kiểu phygital giữ chân khách rất tự nhiên — một ý tưởng nhỏ cho activation offline tại hub hoặc điểm đối tác.' },
    ],
    visit: {
      title: 'Nếu bạn ghé Đông Môn',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 1 hoặc 3, ga Lão Nhai', detail: 'Lên khỏi ga là vào thẳng khu phố đi bộ, không phải đi bộ thêm.' },
        { label: 'Đi lúc nào', title: 'Buổi tối', detail: 'Phố ăn sáng đèn và đông nhất sau 19 giờ. Ban ngày khu này thiên về mua sắm hơn.' },
        { label: 'Xem và ăn gì', title: 'Phố ăn Đông Môn và hơn 600 thương hiệu', detail: 'Trải trên mười mấy tuyến phố nối nhau, di tích cũ nằm xen giữa, thêm màn hình LED tròn dưới sàn để nghịch.' },
        { label: 'Lưu ý', title: 'Không nơi nào nhận tiền mặt', detail: 'Cài sẵn Alipay hoặc WeChat Pay trước khi đi, không thì chỉ đứng nhìn người ta mua.' },
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
    headline: 'Bốn hall trong một trung tâm mười chín hall.',
    lead: 'Kỳ thứ 25 của triển lãm IoT quốc tế, mở 26–28/08/2026 tại Trung tâm Hội chợ Quốc tế Thâm Quyến ở Bảo An — một trong những trung tâm hội chợ lớn nhất thế giới. Bốn hall của IOTE chỉ là bốn trong mười chín hall ở đó. Đoàn đi trọn ngày thứ ba của chuyến.',
    photo: {
      src: '/media/places/iote.jpg',
      alt: 'Trung tâm Hội chợ Quốc tế Thâm Quyến nhìn từ trên cao, dãy hall trải dọc hành lang trung tâm',
      credit: 'Dinkun Chen · CC BY-SA 4.0 · Wikimedia Commons',
    },
    photoAlt: {
      src: '/media/places/iote-2.jpg',
      alt: 'Sảnh vào phía bắc của Trung tâm Hội chợ Quốc tế Thâm Quyến',
      credit: 'Lhzss8 · CC BY-SA 4.0 · Wikimedia Commons',
    },
    metrics: [
      { value: '80.000', unit: 'm²', label: 'Diện tích IOTE 2026 chiếm dụng', asOf: '08/2026' },
      { value: '400.000', unit: 'm²', label: 'Trưng bày trong nhà của cả trung tâm, giai đoạn 1', asOf: '2026' },
      { value: '1.000', unit: 'gian hàng', label: 'Doanh nghiệp tham gia trưng bày', asOf: '08/2026' },
      { value: '100.000', unit: 'lượt', label: 'Khách chuyên ngành, số ban tổ chức công bố', asOf: '08/2026' },
    ],
    featuresTitle: 'Bốn hall, bốn chủ đề',
    features: [
      { title: 'Hall 9 · Passive IoT và thiết bị đầu cuối', detail: 'RFID, mã QR, NFC và thiết bị cầm tay cho kho vận. Đây là nhóm rẻ và sẵn nhất, mua về dùng được ngay.' },
      { title: 'Hall 10 · IoT công nghiệp, cảm biến, định vị', detail: 'UWB và RTLS định vị trong nhà, LoRa và NB-IoT theo dõi tài sản, GNSS RTK cho ETA, cảm biến nhiệt ẩm và rung sốc.' },
      { title: 'Hall 11 · Digital China', detail: 'Nhãn e-paper tái sử dụng cập nhật qua NFC, giải pháp chống hàng giả và truy xuất hành trình, màn hình thông minh.' },
      { title: 'Hall 12 · AI tổng quát', detail: 'Vision-IoT đo kiện và phát hiện hư hỏng, LLM và AI agent cho vận hành, chip chạy trên thiết bị, robot và AMR.' },
    ],
    visit: {
      title: 'Nếu bạn ghé IOTE',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 20, ga Quốc Triển Bắc', detail: 'Lên là vào thẳng sảnh phía bắc. Trung tâm nằm ở Bảo An, khá xa khu trung tâm nên trừ hao thời gian đi.' },
        { label: 'Đi lúc nào', title: 'Chỉ trong ba ngày triển lãm', detail: 'Thường rơi vào cuối tháng 8. Cần đăng ký trước để lấy thẻ vào cửa.' },
        { label: 'Xem gì', title: 'Bốn hall theo bốn chủ đề', detail: 'RFID và NFC, cảm biến và định vị, nhãn e-paper và chống hàng giả, AI và robot.' },
        { label: 'Lưu ý', title: 'Đi hết bốn hall mất trọn một ngày', detail: 'Chọn trước hall cần xem thay vì đi tuần tự từ đầu, nếu không sẽ hết sức trước khi tới phần mình cần.' },
      ],
    },
    gallery: {
      title: 'AI bước ra khỏi màn hình.',
      video: {
        src: '/media/places/iote-robot-bar.mp4', poster: '/media/places/iote-robot-bar-poster.jpg',
        alt: 'Cánh tay robot pha đồ uống từ dãy chai treo ngược trong một quầy tròn tại IOTE, khách đứng quay điện thoại',
        caption: 'Quầy robot pha chế: cánh tay robot tự lấy đồ uống từ dãy chai treo.',
      },
      photos: [
        { src: '/media/places/iote-team-1.jpg', tall: true, alt: 'Booth TunStar với khẩu hiệu tiếng Trung “Để AI bước ra khỏi màn hình, cảm nhận thế giới thật”, nhân viên giới thiệu thiết bị', caption: 'TunStar: “Để AI bước ra khỏi màn hình, cảm nhận thế giới thật.”' },
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
    title: 'Chợ dựa vào cửa khẩu',
    kicker: 'Luohu · Chợ dựa vào cửa khẩu',
    headline: 'Cửa khẩu chạy gấp đôi công suất thiết kế.',
    lead: 'Trung tâm thương mại bảy tầng dựng ngay sát cửa khẩu La Hồ — cửa ngõ đường bộ lâu đời nhất nối Thâm Quyến với Hong Kong. Mặt hàng và tập khách của chợ do vị trí này quyết định, không phải do chính nó chọn.',
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
      { title: 'Chín nhóm ngành cùng một mái', detail: 'Ăn uống, chợ vải và may đo, quần áo may sẵn, thủ công mỹ nghệ, rèm vải, đồ da và bách hoá, trà và trà cụ, văn hoá dân tộc, văn hoá Việt kịch.' },
      { title: 'Phố may đo nằm trong toà nhà', detail: 'Hơn 140 tiệm may đo, mỗi năm ra khoảng 70.000 bộ vest, sườn xám và váy cưới. Đây là thứ khách Hong Kong sang đặt chứ không phải hàng chợ.' },
      { title: 'Khách chủ yếu từ bên kia sông', detail: 'Có giai đoạn chợ đón 50.000 lượt mỗi ngày, khoảng chín phần mười là khách Hong Kong qua cửa khẩu rồi đi bộ sang.' },
      { title: 'Nằm trên đầu mối giao thông', detail: 'Hải quan, ga tàu, bến xe khách, ga metro tuyến 1 và bến xe buýt gặp nhau ngay tại đây — chợ không phải điểm đến, chợ là thứ nằm trên đường đi.' },
    ],
    visit: {
      title: 'Nếu bạn ghé Luohu',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 1 ga La Hồ, cửa A', detail: 'Đi bộ sang là tới. Cùng một chỗ với cửa khẩu sang Hong Kong, ga tàu và bến xe khách.' },
        { label: 'Dành bao lâu', title: 'Một buổi, hai buổi nếu may đo', detail: 'Đặt may thì phải quay lại lần hai để thử và sửa, nên đừng để vào ngày cuối chuyến.' },
        { label: 'Mua gì', title: 'Trà, đồ khô, đồ da, vải và may đo', detail: 'Hơn 140 tiệm may đo nằm ngay trong toà nhà — đây là thứ khách Hong Kong sang đặt.' },
        { label: 'Lưu ý', title: 'Hàng thật giả lẫn lộn, phải trả giá', detail: 'Ghi chép của đoàn: giá bình dân nhưng phân biệt thật giả hơi khó. Không khí giống chợ An Đông.' },
      ],
    },
    sourceIds: ['luohu-port-gov', 'luohu-city', 'luohu-trades'],
  },
  {
    id: 'place-mixc', stopId: 'mixc',
    title: 'Bán lẻ kiểu phố đi bộ',
    kicker: 'MixC World · Cách bố trí',
    headline: 'Phá cái hộp lớn thành phố đi bộ.',
    lead: 'Tổ hợp bán lẻ của China Resources Land mở năm 2017, ngay cạnh khu công nghệ cao Nam Sơn. Thứ đáng xem không phải danh sách thương hiệu mà là cách bố trí: khách đi ngoài trời giữa các toà nhà thay vì đi trong hành lang kín.',
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
    metrics: [
      { value: '~230.000', unit: 'm²', label: 'Tổng diện tích sàn', asOf: '2017' },
      { value: '10', unit: 'toà', label: 'Cửa hàng flagship đứng riêng thành từng toà', asOf: '2017' },
      { value: '300', unit: 'cửa hàng', label: 'Quy tụ hơn 1.000 thương hiệu', asOf: '2017' },
      { value: '30%', label: 'Thương hiệu lần đầu có mặt tại Thâm Quyến', asOf: '2017' },
    ],
    note: 'Mô hình phố phường cộng trung tâm thương mại. Sáu tác phẩm nghệ thuật cố định đặt xen giữa các toà, biến lối đi thành chỗ đáng dừng lại chứ không chỉ là đường dẫn tới cửa hàng.',
    featuresTitle: 'Bố trí khác gì trung tâm thường',
    features: [
      { title: 'Mười toà flagship đứng riêng', detail: 'Thay vì gom hết vào một khối hộp, mỗi thương hiệu lớn có một toà riêng. Khách đi ngoài trời giữa các toà, không đi trong hành lang kín.' },
      { title: 'Bốn nhóm ngành rõ ràng', detail: 'Thời trang quốc tế, ẩm thực đặc sắc, khu trẻ em và đời sống văn hoá — khoảng ba phần mười thương hiệu lần đầu vào Thâm Quyến.' },
      { title: 'Sáu tác phẩm nghệ thuật cố định', detail: 'Đặt xen giữa các toà, trong đó có tượng voi khoác áo phao đã thành điểm hẹn quen. Lối đi trở thành chỗ đáng dừng lại chứ không chỉ là đường dẫn.' },
      { title: 'Gắn thẳng vào hạ tầng', detail: 'Nối trực tiếp ga metro tuyến 1 và nằm sát khu công nghệ cao Nam Sơn: khách là dân đi làm quanh đó chứ không phải khách đi chơi cuối tuần.' },
    ],
    visit: {
      title: 'Nếu bạn ghé MixC World',
      items: [
        { label: 'Đi thế nào', title: 'Metro tuyến 1 ga Cao Tân Viên, cửa A', detail: 'Nối thẳng vào tổ hợp, không phải băng qua đường.' },
        { label: 'Dành bao lâu', title: 'Một buổi chiều tối', detail: 'Nằm cạnh khu công nghệ cao nên đông nhất sau giờ tan làm.' },
        { label: 'Xem gì', title: 'Mười toà flagship và sáu tác phẩm nghệ thuật', detail: 'Trong đó có tượng voi khoác áo phao đã thành điểm hẹn quen, cùng hiệu sách và khu ẩm thực.' },
        { label: 'Lưu ý', title: 'Đây là chỗ xem cách bố trí, không phải chỗ mua rẻ', detail: 'Khách đi bộ ngoài trời giữa các toà nên trời mưa thì hơi cực.' },
      ],
    },
    gallery: {
      title: 'Một vòng quanh MixC World.',
      photos: [
        { src: '/media/places/mixc_ngoaitroi.jpg', weight: 3, alt: 'Ngã tư gần MixC World: cao ốc kính Nam Sơn, người đi xe đạp công cộng màu vàng và dòng người qua đường', caption: 'Bên ngoài: cao ốc Nam Sơn và xe đạp công cộng.' },
        { src: '/media/places/mixc_2.jpg', weight: 2.2, alt: 'Tượng voi bơm hơi màu xám bám trên mặt tiền toà nhà MixC World, vòi buông dài xuống', caption: 'Tượng voi “khoác áo phao” trên mặt tiền.' },
        { src: '/media/places/mixc_trienlam.jpg', weight: 5, alt: 'Triển lãm tượng đầu người khổng lồ màu bạc đặt trên thảm xanh giữa sảnh MixC World, khách đứng xem và chụp ảnh', caption: 'Triển lãm tượng đầu người khổng lồ ngay giữa sảnh, khách dừng lại chụp ảnh.' },
        { src: '/media/places/mixc_ansaukhidi.jpg', weight: 3, alt: 'Thành viên đoàn ngồi bên vỉa hè buổi tối ăn ly mì bò hầm', caption: 'Kết thúc buổi đi: một ly mì bò hầm ngay bên vỉa hè.' },
      ],
    },
    sourceIds: ['mixc-nanshan-gov', 'dachong-nfapp'],
  },
]

export const placeById = Object.fromEntries(places.map(place => [place.id, place]))
