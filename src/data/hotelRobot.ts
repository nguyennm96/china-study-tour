import type { TopicData } from './topicData'
import type { FlowSpec } from './mechanisms'

// Nguồn biên tập do người dùng chỉ định; số thị trường chưa kiểm chứng độc lập.
export const hotelRobotSourceId = 'hotel-robot-team-doc'
export const hotelRobotPages = [
  { key: 'origin', kicker: 'Robot khách sạn · Ra đời từ đâu', title: 'Ra đời ở Mỹ. Nhân rộng ở Trung Quốc.' },
  { key: 'shenzhen', kicker: 'Robot khách sạn · Vì sao là Thâm Quyến', title: 'Vì sao lại là Thâm Quyến.' },
  { key: 'journey', kicker: 'Robot khách sạn · Từ đơn hàng tới cửa phòng', title: 'Sáu bước. Một lần giao tận phòng.' },
  // Ba trang sau đi theo đúng chiều của một đơn hàng; `steps` là bước được soi kỹ trên thanh 6 bước.
  { key: 'dispatch', kicker: 'Bước 02 · Tạo tác vụ', title: 'Đơn hàng thành nhiệm vụ cho cả đội robot.', steps: [2] },
  { key: 'core', kicker: 'Bước 03–04 · Công nghệ lõi của robot', title: 'Đôi mắt LiDAR. Bộ não SLAM.', steps: [3, 4] },
  { key: 'navigation', kicker: 'Bước 03–04 · Tìm đúng phòng', title: 'Biết đúng phòng. Không cần nhận diện món.', steps: [3, 4] },
  { key: 'elevator', kicker: 'Bước 04 · Lên đúng tầng', title: 'Chỗ khó nhất: nói chuyện với thang máy.', steps: [4] },
  { key: 'infrastructure', kicker: 'Cả sáu bước · Điều kiện triển khai', title: 'Mỗi bước cần một thứ khách sạn phải có.', steps: [1, 2, 3, 4, 5, 6] },
  { key: 'video', kicker: 'Robot khách sạn · Trải nghiệm của đoàn tại Rezen', title: 'Xem một lượt giao thật.' },
] as const
export type HotelRobotPage = typeof hotelRobotPages[number]['key']

export const hotelRobotFlow: FlowSpec = {
  eyebrow: 'Quy trình · robot giao phòng', headline: hotelRobotPages.find(page => page.key === 'journey')!.title,
  lead: 'Nhân viên nạp đồ và gán số phòng; robot thực hiện chặng di chuyển trong tòa nhà.',
  nodes: [
    { title: 'Khách đặt đồ', detail: 'Qua app, QR, lễ tân hoặc quầy F&B.', actor: 'human' },
    { title: 'Tạo tác vụ', detail: 'PMS/POS hoặc nhân viên nhập điểm lấy và phòng nhận.', actor: 'system' },
    { title: 'Nạp & gán phòng', detail: 'Nhân viên đặt đồ, xác nhận khoang nào giao phòng nào.', actor: 'human' },
    { title: 'Di chuyển', detail: 'Theo bản đồ, tránh vật cản, gọi thang và tới đúng tầng.', actor: 'machine' },
    { title: 'Báo khách', detail: 'Gọi điện phòng, SMS hoặc thông báo qua ứng dụng.', actor: 'system' },
    { title: 'Mở khoang & nhận', detail: 'Mã hoặc thao tác xác nhận tùy hệ thống; ghi log rồi quay về.', actor: 'human' },
  ],
  bands: [
    { label: 'Gán đích', detail: 'Khoang hàng → số phòng → tọa độ trên bản đồ đã thiết lập.', sourceId: hotelRobotSourceId },
    { label: 'Hoàn tất', detail: 'Nhận hàng, đóng khoang, cập nhật task và quay về trạm.', sourceId: hotelRobotSourceId },
  ],
  gap: 'Tài liệu mô tả kiến trúc và quy trình, không cung cấp số đo thực địa về tỷ lệ giao thành công, thời gian chờ thang, số can thiệp hay chi phí mỗi đơn tại khách sạn đoàn ở.',
}

// Mốc ra đời kiểm chứng ngày 23/09/2026; mỗi mốc có ít nhất hai nguồn trong `source`.
// Ảnh thật từ Wikimedia Commons / Flickr, giấy phép ghi ở public/media/robot-origin/SOURCES.md.
const photo = (file: string) => `/media/robot-origin/${file}`
export const hotelRobotTimeline = [
  { year: '2014', place: 'Cupertino, Mỹ', title: 'Robot đầu tiên lên tận phòng',
    detail: 'Savioke đưa robot Relay vào khách sạn Aloft: tự đi thang máy, gọi điện báo khách khi tới cửa.',
    image: photo('savioke-relay-1.jpg'), focus: '30% 50%', credit: 'Savioke Relay · Collision Conf, CC BY 2.0',
    source: ['https://techcrunch.com/2014/08/13/starwood-introduces-robotic-butlers-at-aloft-hotel-in-palo-alto/', 'https://www.therobotreport.com/hotel-delivery-robot-debuts-in-silicon-valley/'] },
  { year: '2016', place: 'Nhà hàng Trung Quốc', title: 'Bắt đầu từ bưng bê',
    detail: 'Keenon và Pudu (Thâm Quyến) làm robot nhà hàng trước: chỉ một mặt sàn, bài toán dễ hơn.',
    image: photo('keenon-restaurant-beijing-1.jpg'), focus: '50% 55%', credit: 'Keenon tại Bắc Kinh · N509FZ, CC BY-SA 4.0',
    source: ['https://www.therobotreport.com/pudu-robotics-gets-series-b-financing-for-indoor-delivery-service-robots/', 'https://www.robotsasia.com/Keenon.htm'] },
  { year: '2018–2019', place: 'Hàng Châu · Thâm Quyến', title: 'Lên khách sạn và toà nhà',
    detail: 'Khách sạn FlyZoo của Alibaba dùng robot mang đồ tận phòng; Meituan thử robot tự đi thang máy ở Bắc Kinh và Thâm Quyến.',
    image: photo('pudu-yunji-robots-1.jpg'), focus: '45% 60%', credit: 'Robot Yunji và Pudu · Vieinrose, CC0',
    source: ['https://technode.com/2018/11/07/alibaba-checks-in-to-unmanned-hotels/', 'https://kr-asia.com/meituan-tests-unmanned-delivery-with-robots-in-beijing-and-shenzhen'] },
  { year: '2020–2022', place: 'Toàn Trung Quốc', title: 'COVID biến thành chuẩn mực',
    detail: 'Chuỗi khách sạn lớn dùng robot giao không tiếp xúc; Meituan rót vốn vào Pudu năm 2020.',
    image: photo('hk-restaurant-pudu-1.jpg'), focus: '60% 35%', credit: 'Robot Pudu · Domixlandz Huangoeiw, CC BY-SA 4.0',
    source: ['https://link.springer.com/article/10.1007/s40558-020-00193-z', 'https://www.caixinglobal.com/2020-07-02/meituan-eyes-robot-enabled-deliveries-with-14-million-investment-in-pudutech-101574672.html'] },
] as const

/** Starship là nhánh robot vỉa hè ngoài trời, không phải gốc của robot trong nhà. */
export const hotelRobotOutdoorNote = 'Song song ngoài trời: Starship (Estonia, 2014) do Janus Friis, đồng sáng lập Skype, và Ahti Heinla, kỹ sư trưởng của Skype, lập ra; thử nghiệm từ 2015–2016, lên Milton Keynes (Anh) năm 2018. Robot vỉa hè không đi thang máy nên là một nhánh khác.'

export const hotelRobotDrivers = [
  { icon: 'hardware', title: 'Linh kiện ngay dưới nhà', detail: 'LiDAR, cảm biến, pin, động cơ có sẵn quanh Châu Giang: từ mẫu thử sang sản xuất lô nhỏ rất nhanh, giá robot giảm mạnh.' },
  { icon: 'labor', title: 'Thiếu người, lương tăng', detail: 'Dân số già, khách sạn khó tuyển ca đêm và việc lặp lại như giao nước, khăn, đồ ăn.' },
  { icon: 'covid', title: 'Cú hích COVID-19', detail: '2020–2022, giao không tiếp xúc thành bắt buộc; khách quen với việc robot mang đồ lên phòng.' },
  { icon: 'city', title: 'Nền tảng và chính sách kéo cầu', detail: 'Meituan cần robot lên từng tầng thay tài xế; kế hoạch “Robot+” (2023) và kế hoạch robot riêng của Thâm Quyến.' },
] as const

export const hotelRobotShenzhenPhotos = {
  main: { src: photo('huaqiangbei-street-1.jpg'), alt: 'Phố đi bộ Hoa Cường Bắc, Thâm Quyến, nhìn từ trên cao', credit: 'Hoa Cường Bắc · Mx. Granger, CC0' },
  detail: { src: photo('seg-plaza-interior-2.jpg'), alt: 'Các sạp linh kiện điện tử bên trong SEG Plaza', credit: 'Bên trong SEG Plaza · Bobbie Johnson, CC BY-SA 2.0' },
  cluster: 'Cụm “Robot Valley” ở Nam Sơn: Pudu, UBTECH, RoboSense (LiDAR), DJI.',
} as const

// Video do đoàn dựng từ lượt đặt Meituan giao tới khách sạn Rezen; không có tiếng.
export const hotelRobotVideo = {
  src: '/media/trip/robot/Robot_giao_do-36s.mp4',
  poster: '/media/trip/robot/Robot_giao_do-poster.jpg',
  alt: 'Video quy trình robot giao đồ tới phòng khách sạn Rezen: đặt hàng, nạp đồ, robot đi thang máy và khách lấy hàng',
  caption: 'Video của đoàn · Rezen Dong Hotel, 08/2026 · 36 giây, không tiếng',
}

// Mục 4.1 của tài liệu nguồn: LiDAR là đôi mắt, SLAM là bộ não định vị; cảm biến tầm gần lo an toàn.
export const hotelRobotCore = {
  eyes: { name: 'LiDAR', role: 'Đôi mắt', question: 'Xung quanh mình có gì, cách bao xa?',
    how: [['Quét laser 360°', 'Một đầu laser quay liên tục, bắn tia ra mọi hướng.'], ['Đo tia dội lại', 'Tia chạm tường, cột, người rồi dội về; thời gian đi–về cho ra khoảng cách.'], ['Ra “đám mây điểm”', 'Hàng nghìn điểm vẽ nên hình dạng hành lang quanh robot, nhiều lần mỗi giây.']],
    note: 'Thấy được cả khi thiếu sáng. Không đọc chữ, không nhận ra món ăn.' },
  brain: { name: 'SLAM', role: 'Bộ não', question: 'Mình đang đứng ở đâu, đi đường nào tới phòng 1205?',
    how: [['Lập bản đồ một lần', 'Lúc lắp đặt, robot chạy khảo sát cả toà; kỹ thuật viên gắn nhãn phòng, thang máy, trạm sạc.'], ['Tự định vị liên tục', 'So “đám mây điểm” đang thấy với bản đồ để biết chính xác mình đang ở đâu.'], ['Tìm đường tới đích', 'Tính đường tới toạ độ phòng, đi lại khi gặp vật cản.']],
    note: 'Vừa lập bản đồ vừa định vị: Simultaneous Localization and Mapping.' },
  support: 'Camera, cảm biến siêu âm, hồng ngoại và va chạm lo tầm gần: dừng hoặc né kịp khi có người, hành lý, xe đẩy. Máy gộp mọi nguồn lại (sensor fusion) để không bị “lạc”.',
} as const

/** Mỗi điều kiện gắn với bước của đơn hàng cần đến nó, theo thứ tự 6 bước. */
export const hotelInfrastructure = [
  { icon: 'task', steps: 'Bước 01–02', title: 'Đơn & số phòng', detail: 'Hệ thống khách sạn (PMS/POS) chuyển đơn thành tác vụ, hoặc nhân viên nhập tay.' },
  { icon: 'human', steps: 'Bước 03 · 06', title: 'Người ở hai đầu', detail: 'Nạp đồ, gán phòng, đỡ khách lúc nhận và tiếp quản khi có sự cố.' },
  { icon: 'map', steps: 'Bước 03–04', title: 'Bản đồ đã gắn nhãn', detail: 'Phòng, thang máy, điểm lấy hàng và trạm sạc đều có toạ độ.' },
  { icon: 'elevator', steps: 'Bước 04', title: 'Thang máy kết nối được', detail: 'Bộ điều khiển thang nhận lệnh điện tử, toà cũ phải lắp thêm module.' },
  { icon: 'battery', steps: 'Bước 04', title: 'Lối đi & trạm sạc', detail: 'Hành lang đủ rộng, sàn phẳng, ngưỡng cửa thấp, có chỗ về sạc.' },
  { icon: 'wifi', steps: 'Bước 04–05', title: 'Sóng phủ khắp', detail: 'Wi-Fi / 4G từ sảnh tới hành lang và trong thang, để robot gọi thang và báo khách.' },
] as const

export const hotelRobotData: TopicData = {
  hero: { value: '~0,7', unit: 'tỷ USD', label: 'Thị trường robot khách sạn toàn cầu', asOf: '2025 · ước lượng', sourceId: hotelRobotSourceId },
  metrics: [
    { value: '~2,13', unit: 'tỷ USD', label: 'Thị trường toàn cầu được dự báo', asOf: '2030 · dự báo', sourceId: hotelRobotSourceId },
    { value: '~24%', label: 'CAGR được tài liệu tổng hợp dẫn lại', asOf: '2026–2030 · dự báo', sourceId: hotelRobotSourceId,
      note: 'Giữ đúng mốc và tỷ lệ trong tài liệu. Không tự suy ra CAGR từ cặp số làm tròn 2025 và 2030 vì khoảng thời gian không trùng.' },
  ],
  charts: [{
    id: 'hotel-robot-market', kind: 'column', title: 'Thị trường robot khách sạn toàn cầu',
    axisLabel: 'Tỷ USD · ước lượng và dự báo',
    question: 'Tăng trưởng thị trường có đồng nghĩa dễ triển khai?',
    points: [
      { label: '2025 · ước lượng', value: .7, display: '0,7' },
      { label: '2030 · dự báo', value: 2.13, display: '2,13', emphasis: true },
    ],
    reading: 'Quy mô toàn cầu; việc nhân rộng vẫn phụ thuộc tích hợp thang máy, hệ thống khách sạn và chi phí vận hành.',
    sourceIds: [hotelRobotSourceId],
    caveat: 'Số ước lượng và dự báo được dẫn lại từ tài liệu nội bộ ngày 20/09/2026, không phải số riêng Trung Quốc hay số đo của đoàn. Chưa kiểm chứng báo cáo ngành gốc trong lần biên tập này. Không nội suy các năm ở giữa.',
  }],
  fieldNotes: {
    title: 'Tích hợp quyết định khả năng nhân rộng', caption: 'Tổng hợp từ tài liệu robot giao phòng ngày 20/09/2026.',
    items: ['Khách sạn cũ có thể phải nâng cấp hoặc bổ sung module thang máy.', 'Nhân viên vẫn nạp đồ, gán phòng và xử lý ngoại lệ.', 'Giá giảm và tăng trưởng nhanh không bảo đảm lợi nhuận.'],
    excluded: 'Không dùng các số đội xe đường phố, vận tốc L4, quãng đường 120 km/ngày hoặc media rider để mô tả robot giao phòng. Tài liệu không xác nhận khách sạn, hãng robot hay mô hình mà đoàn trực tiếp sử dụng.',
  },
}
