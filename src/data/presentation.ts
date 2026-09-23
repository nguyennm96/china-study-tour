import { droneMedia } from './dronePresentation'
import { droneData, meituanData, robotData, type TopicData } from './topicData'
import { meituanFlow, robotFlow, type FlowSpec } from './mechanisms'
import type { ExperienceSpec } from '../components/DronePresentationContent'

// Năm chủ đề của buổi chia sẻ; một thành viên có thể tham gia nhiều chủ đề.
export const teamGroups = [
  { topic: 'Drone', headline: 'Từ đặt món đến nhận hàng tại trạm.', illustration: 'drone', members: ['Phạm Minh Quân', 'Nguyễn Minh Nguyên'] },
  { topic: 'Robot', headline: 'Giao đồ đến cửa phòng khách sạn.', illustration: 'robots', members: ['Nguyễn Khánh Công', 'Thiều Vĩnh Tiến'] },
  { topic: 'Didi', headline: 'Trải nghiệm gọi xe và câu chuyện phía sau ứng dụng.', illustration: 'didi', members: ['Nguyễn Trương Tấn Sâm', 'Nguyễn Thanh Bình'] },
  { topic: 'IOTE', headline: 'Công nghệ và sản phẩm qua góc nhìn của đoàn.', illustration: 'iote', members: ['Nguyễn Trương Tấn Sâm', 'Nguyễn Thanh Bình', 'Thiều Vĩnh Tiến'] },
  { topic: 'Tips & Tricks', headline: 'Mẹo đi lại, thanh toán và dùng ứng dụng tại Trung Quốc.', illustration: 'tips', members: ['Phạm Minh Quân', 'Nguyễn Minh Nguyên', 'Nguyễn Khánh Công'] },
] as const

export type Subject = {
  id: string
  title: string
  label: string
  description: string
  headline: string
  duration: string
  cover: string
  caption: string
  source?: { label: string; url: string }
  experience: ExperienceSpec
  data: TopicData
  mechanism: { kind: 'sim3d'; note: string } | { kind: 'flow'; flow: FlowSpec }
  insights: { title: string; detail: string }[]
}

export const subjects: Subject[] = [
  {
    id: 'drone', title: 'Drone giao hàng', label: 'Meituan · Talent Park', duration: '8 phút',
    headline: 'Đặt món qua Meituan, nhận hàng tại trạm drone.',
    description: 'Tại Talent Park, đoàn đặt món qua mini-program Meituan, quan sát drone giao hàng đến trạm và nhận đồ ăn từ tủ. Meituan đã triển khai dịch vụ giao hàng bằng drone từ năm 2021.',
    cover: droneMedia.station.src, caption: 'Trạm Meituan tại Talent Park · Ảnh của đoàn, 08/2026.',
    source: { label: 'Tư liệu chuyến đi', url: droneMedia.station.url },
    experience: {
      eyebrow: 'Trải nghiệm tại Talent Park',
      headline: 'Đặt món qua Meituan.', highlight: 'Nhận hàng tại trạm drone.',
      note: 'Ba bước trình bày: gộp tới trạm và quét QR vào bước mở đầu, theo lựa chọn biên tập của đoàn.',
      moments: [
        { title: 'Quét mã QR Meituan tại trạm', media: droneMedia.droneOrder },
        { title: 'Drone giao hàng đến trạm', media: droneMedia.landing, featured: true },
        { title: 'Nhận đồ ăn từ tủ', media: droneMedia.locker },
      ],
    },
    data: droneData,
    mechanism: { kind: 'sim3d', note: 'Mô phỏng nguyên lý · Không tái tạo tuyến Talent Park' },
    insights: [
      { title: 'Thứ được mở rộng là giấy phép, không phải thiết bị', detail: 'Tháng 4/2025 Meituan nhận giấy phép logistics tầm thấp phủ toàn quốc đầu tiên của CAAC: mở tuyến mới không cần xin phép từng chặng. Số tuyến đi từ 53 (cuối 2024) lên 70 (cuối 2025). Drone thế hệ 4 vẫn chỉ mang 2,5 kg — năng lực phần cứng không đổi nhiều, thủ tục mới là thứ đổi.' },
      { title: 'Không có điểm nhận thì không có tuyến', detail: 'Thâm Quyến đã xây hơn 1.200 điểm cất/hạ cánh tầm thấp. Trạm mà đoàn thấy ở Talent Park là một mắt của lưới đó, kèm khu thu hồi vỏ hộp. Phần khó nhân bản của mô hình này là bất động sản và giấy phép mặt đất, không phải con drone.' },
      { title: 'Đo cả chuỗi, đừng đo chặng bay', detail: 'Con số 15 phút thuộc về chặng bay 3 km theo công bố kỹ thuật. Thời gian khách thật sự chờ còn gồm chuẩn bị đơn, chờ slot tại trạm và bước tự đi lấy hàng. Sheet của đoàn có hai mốc ~4 phút và ~60 phút; vì chưa rõ hai mốc đo chặng nào, chúng tôi không dùng cả hai.' },
    ],
  },
  {
    id: 'robots', title: 'Robot giao tận phòng', label: 'Khách sạn · Trung Quốc', duration: '8 phút',
    headline: 'Gọi thang máy. Giao đúng phòng.',
    description: 'Từ một yêu cầu của khách đến cửa phòng: robot định vị trên bản đồ, kết nối thang máy và phối hợp với hệ thống điều phối. Nhân viên vẫn nạp đồ và gán phòng.',
    cover: '/media/illustrations/subjects-2d/hotel-robot.png', caption: 'Robot giao phòng · Hệ thống logistics trong khách sạn',
    source: { label: 'Nghiên cứu robot khách sạn · Team Truck OD', url: 'https://docs.google.com/document/d/17bI67RGsjEB8GECcz_JJnRICAKicv2CofpdORjiz77Y/edit?tab=t.0' },
    experience: {
      eyebrow: 'Quy trình giao phòng', headline: 'Sáu bước.', highlight: 'Một lần giao tận phòng.', moments: [],
      note: 'Chương này dùng nghiên cứu do người dùng cung cấp, không dùng ảnh rider làm bằng chứng cho robot khách sạn. Quy trình trình bày riêng trong HotelRobotSlides.',
    },
    data: robotData,
    mechanism: { kind: 'flow', flow: robotFlow },
    insights: [
      { title: 'Gán khoang với phòng, không nhận diện món ăn', detail: 'Nhân viên nạp đồ và chọn phòng. Robot tra điểm đã gắn nhãn trên bản đồ, dùng LiDAR và SLAM để định vị, điều hướng.' },
      { title: 'Tích hợp thang máy là điểm nghẽn', detail: 'Gọi thang bằng kết nối điện tử, nhận trạng thái cửa và cabin, kiểm tra an toàn rồi mới đi. Từng tòa nhà cần khảo sát khả năng tích hợp.' },
      { title: 'Cùng bài toán điều phối với Truck OD', detail: 'Gán đơn theo trạng thái robot, tối ưu thứ tự giao, quản lý hàng đợi thang máy và lưu nhật ký. Không gian thay đổi nhưng bài toán vận hành quen thuộc.' },
    ],
  },
  {
    id: 'meituan', title: 'Đặt đồ ăn trên Meituan', label: 'Mini-program · Nanshan', duration: '8 phút',
    headline: 'Một app. 150 triệu đơn một ngày.',
    description: 'Đoàn đặt đồ ăn như một khách nước ngoài: vào mini-program trong WeChat vì có nút dịch. Phía sau thao tác đó là ngày đạt đỉnh 150 triệu đơn, trung bình 34 phút — và một khoản lỗ 92,4 nghìn tỷ VND.',
    cover: droneMedia.order.src, caption: 'Minh hoạ AI có nhãn cho bước đặt món · Không phải ảnh màn hình ứng dụng thật.',
    experience: {
      eyebrow: 'Trải nghiệm đặt món của đoàn',
      headline: 'Hai bước,', highlight: 'một rào cản.',
      moments: [
        { title: 'Đặt qua mini-program', media: droneMedia.order, illustrated: true },
        { title: 'Rider mang đơn tới', media: droneMedia.rider, featured: true },
      ],
      note: 'Không có ảnh chụp màn hình app trong tư liệu được dẫn của đoàn. Khung đầu là hình do AI tạo và được dán nhãn “Minh hoạ”; chúng tôi không dựng screenshot giả của giao diện Meituan.',
    },
    data: meituanData,
    mechanism: { kind: 'flow', flow: meituanFlow },
    insights: [
      { title: 'Quy mô mua được. Biên lợi nhuận thì không', detail: 'Ngày đỉnh 150 triệu đơn có ít nhất 85 triệu đơn đến từ hai chương trình giá rẻ. Cả năm 2025, doanh thu tăng 8% nhưng tập đoàn lỗ ròng 92,4 nghìn tỷ VND và mảng cốt lõi lỗ vận hành 27,2 nghìn tỷ VND. Con số sản lượng và con số lợi nhuận phải luôn đọc cùng nhau.' },
      { title: '34 phút là chỉ số của cả chuỗi, không phải của rider', detail: 'Tổng thời gian gồm chế biến ở nhà bán, ghép đơn của hệ điều phối, đường đi của rider và vài trăm mét cuối trong toà nhà. Chỉ một chặng do thuật toán quyết định. Ép chỉ số này xuống bằng cách siết rider sẽ chạm vào chặng không phải nguyên nhân.' },
      { title: 'Rào cản của khách nước ngoài là ngôn ngữ, không phải công nghệ', detail: 'Đoàn chọn mini-program thay vì app riêng chỉ vì có nút dịch trang. Điều khó nhất được ghi lại không phải thanh toán hay tracking, mà là thao tác bằng tiếng Trung. Một lớp ngôn ngữ mỏng đã quyết định người dùng mới có đi hết luồng hay không.' },
    ],
  },
]

export const takeaways = [
  {
    word: 'Hạ tầng', title: 'Hạ tầng mở đường cho tự động hoá.',
    text: 'Một thiết bị tự chạy chỉ tạo ra dịch vụ khi điểm nhận, hệ thống đặt đơn và quyền tiếp cận đã sẵn sàng.',
    example: 'Drone cần tuyến và trạm nhận. Robot khách sạn cần bản đồ gắn nhãn, kết nối thang máy và hệ thống chuyển đơn thành tác vụ.',
    question: 'Hạ tầng và đối tác nào cần sẵn sàng trước khi mình chọn thiết bị?',
    subject: 'drone',
  },
  {
    word: 'Điều phối', title: 'Tự động hoá chặng lặp lại, giữ người ở hai đầu.',
    text: 'Trong quy trình giao phòng, robot đảm nhiệm di chuyển. Nhân viên nạp đồ, gán phòng và tiếp quản những tình huống ngoại lệ.',
    example: 'Robot nhận task từ PMS/POS, đi hành lang và thang máy, báo khách rồi ghi log. Gán đơn, quản lý điểm nghẽn và đối soát đều là bài toán quen thuộc của Truck OD.',
    question: 'Chặng nào trong mạng Ahamove đủ lặp lại để thử tự động hoá trước?',
    subject: 'robots',
  },
  {
    word: 'Phạm vi đo', title: 'Một con số chỉ có nghĩa cùng phạm vi của nó.',
    text: '15 phút của drone và 34 phút của Meituan đều đúng, nhưng đo hai thứ khác nhau. Ghép chúng lại là tạo ra một kết luận không ai công bố.',
    example: 'Sheet của đoàn có hai mốc ~4 phút và ~60 phút cho chặng drone. Vì chưa rõ đo chặng nào, cả hai bị loại khỏi mọi biểu đồ trong bài này.',
    question: 'Chỉ số nào của mình đang được so sánh với một phạm vi đo khác?',
    subject: 'drone',
  },
  {
    word: 'Cái giá', title: 'Đọc sản lượng cùng với lợi nhuận.',
    text: 'Quy mô lớn nhất trong ba chủ đề cũng là quy mô đắt nhất. Con số đẹp và con số thật thường nằm trong cùng một báo cáo.',
    example: 'Meituan: 150 triệu đơn một ngày, giữ trung bình 34 phút — và lỗ ròng 92,4 nghìn tỷ VND cả năm 2025 trong khi vẫn tăng chi R&D 23%.',
    question: 'Khi đề xuất một pilot, mình sẽ cam kết chỉ số nào ngoài sản lượng?',
    subject: 'meituan',
  },
]
