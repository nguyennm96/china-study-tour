// Hành trình 24–28/08/2026, dựng từ sheet Outline_Sharing_Shenzhen_Trip.
// Mỗi địa điểm là một ghim; các sự kiện diễn ra tại đó gom về cùng ghim thay vì tách ra.
// Ghi chú giữ nguyên ý của người điền trong sheet, chỉ rút gọn câu chữ.
export const itinerarySheetUrl = 'https://docs.google.com/spreadsheets/d/1kU_8BZwFz49gIsoyGRuZT7ivJnuTg7NM_SwKiKhi7CE/edit?gid=1775856938#gid=1775856938'

export type Contribution = { member: string; text: string }
export type StopEvent = { day: number; title: string; contributions: Contribution[] }
export type Stop = {
  id: string
  order: number
  name: string
  district: string
  coordinates: [number, number]
  /** true khi toạ độ suy từ địa chỉ công bố chứ không phải điểm đã xác minh tại chỗ. */
  approximate?: boolean
  /** Hướng đặt nhãn quanh toạ độ; dùng để các ghim sát nhau không che nhau. */
  anchor?: 'bottom' | 'top' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** Id chủ đề có cuộn phim trải nghiệm để nhúng vào modal của điểm này. */
  /** Các chủ đề nhúng vào modal, theo đúng thứ tự muốn trình bày. */
  embeddedSubjectIds?: string[]
  events: StopEvent[]
}

export const stops: Stop[] = [
  {
    id: 'szx', order: 1, name: 'Sân bay Bảo An (SZX)', district: 'Bao’an', coordinates: [113.81083, 22.63944], embeddedSubjectIds: ['didi'],
    events: [
      {
        day: 1, title: 'Đáp 6:30 · mua eSIM · đặt Didi về khách sạn',
        contributions: [
          { member: 'Phạm Minh Quân', text: 'Nhập cảnh nhanh. eSIM có số điện thoại ~200 tệ, đoàn 6 người mua 2 sim. Setup và chờ kích hoạt mất ~30 phút nên cài trước ở Việt Nam thì hơn. Sau đó đặt Didi về khách sạn, đi ~45 phút.' },
          { member: 'Nguyễn Trương Tấn Sâm', text: 'Quầy eSIM có màn hình trong suốt tích hợp AI đa ngôn ngữ, trao đổi trực tiếp với nhân viên. Sim 190–300 tệ, loại data-only không dùng được dịch vụ ngoài Trung Quốc. Phải chờ tối thiểu 30 phút mới nhận được OTP để đăng ký app nội địa. Didi tối ưu cho địa chỉ tiếng Trung — search bằng tiếng Trung rồi dán vào app sẽ ra đúng vị trí hơn. Xe dịch vụ đa phần là xe điện biển xanh.' },
          { member: 'Nguyễn Thanh Bình', text: 'eSIM data-only không đăng ký được Meituan hay PonyPilot vì cần số Trung Quốc nhận OTP. Cả đoàn phải xoay quanh 2 sim có số: người có số đặt hộ, người còn lại chỉ xem.' },
          { member: 'Thiều Vĩnh Tiến', text: 'Tàu điện ngầm nằm ngay trong sân bay — hạ tầng kết nối thành một hệ thống nhất quán, đi đâu cũng dễ, không phải dồn hết vào một cụm quận. Ấn tượng nhất là đêm đầu tiên: 1h sáng vẫn còn shipper chạy giao hàng ngoài đường.' },
        ],
      },
      { day: 5, title: 'Metro ra sân bay · bay về SGN', contributions: [
        { member: 'Phạm Minh Quân', text: 'Đi metro ra sân bay, thanh toán bằng Apple Pay — nhanh và tiện hơn hẳn. Nhược điểm là nhiều trạm rất đông, phải chen.' },
      ] },
    ],
  },
  {
    id: 'hotel', order: 2, name: 'Rezen Dong Hotel', district: 'Futian', coordinates: [114.0862, 22.5392], anchor: 'top-right', approximate: true, embeddedSubjectIds: ['robots', 'meituan'],
    events: [
      { day: 1, title: 'Nhận phòng · ăn tối dim sum gần khách sạn', contributions: [
        { member: 'Phạm Minh Quân', text: 'Order qua QR ngay tại bàn, không cần gọi phục vụ. Thanh toán bằng Alipay hay ZaloPay đều được, mã nào cũng nhận.' },
        { member: 'Nguyễn Trương Tấn Sâm', text: 'Mỗi bàn có một tag NFC — thực chất là Alipay Tap ra mắt giữa 2024. Chạm điện thoại vào là mở thẳng menu, giống App Clip của iOS nhưng chạy ở chế độ đọc tag. Trung Quốc tận dụng rất tốt để mở nhanh trải nghiệm mà khách không phải cài app của quán.' },
        { member: 'Nguyễn Thanh Bình', text: 'Tag chạm trên bàn: chạm điện thoại là ra menu song ngữ, gọi món và trả tiền trong một luồng. Với Ahamove, có thể đặt tag NFC tại điểm giao/nhận để xác nhận bàn giao bằng một chạm thay vì đọc mã hay chụp ảnh.' },
      ] },
      { day: 2, title: 'Test robot Meituan giao tới khách sạn', contributions: [
        { member: 'Phạm Minh Quân', text: 'Đặt Meituan về khách sạn: app hiện vị trí realtime rất mượt, giao tận nơi. Đáng học là tracking realtime, ETA và nhận hàng bằng mã.' },
        { member: 'Nguyễn Thanh Bình', text: 'Robot tự gọi thang máy, tới sảnh thì hiện màn hình để nhập hoặc quét mã mở khoang. Thực tế nhân viên khách sạn vẫn phải hỗ trợ đoạn cuối vì thang đông và khách chưa quen. Điểm nghẽn là “50 mét cuối” — sảnh, thang máy, bảo vệ.' },
      ] },
    ],
  },
  {
    id: 'seg', order: 3, name: 'Huaqiangbei · SEG Plaza', district: 'Futian', coordinates: [114.08111, 22.54361], anchor: 'bottom-right',
    embeddedSubjectIds: ['place-seg'],
    events: [
      { day: 1, title: 'Hệ sinh thái phần cứng', contributions: [
        { member: 'Phạm Minh Quân', text: 'Module drone, cảm biến, RFID bán “như rau” — phần cứng rẻ và sẵn, mình mua về tích hợp chứ không tự chế. Bí kíp: phải trả giá 40–50% mới đúng giá. Máy dịch real-time càng lên tầng cao càng rẻ.' },
        { member: 'Thiều Vĩnh Tiến', text: 'SEG Plaza không chỉ là chợ mà là “hệ điều hành” của hệ sinh thái phần cứng: một kỹ sư mua được linh kiện, thuê gia công bo mạch, mua vỏ, đóng gói và tìm kênh phân phối trong cùng một toà nhà 71 tầng với hơn 3.000 gian hàng. Cái làm nên nó là văn hoá tụ lại thành cụm: tập trung để hút lưu lượng chứ không để chia lợi nhuận, chia sẻ nguồn hàng và thông tin, tín dụng nội bộ dựa trên chữ tín, vừa cạnh tranh giá vừa giới thiệu khách cho nhau, và copy mẫu mới trong vài ngày. Hàng nghìn gian bán món giống hệt nhau vẫn sống được vì họ cạnh tranh bằng vị trí trong mạng lưới, tốc độ và dòng tiền chứ không bằng khác biệt sản phẩm.' },
      ] },
      { day: 2, title: 'Quay lại mua linh kiện', contributions: [
        { member: 'Nguyễn Khánh Công', text: 'Máy phiên dịch không cần wifi, dịch gần như tức thời và được phần lớn ngôn ngữ. Có sản phẩm còn kết nối điện thoại, phần mềm gọi họp và dịch realtime.' },
      ] },
    ],
  },
  {
    id: 'talent-park', order: 4, name: 'Talent Park', district: 'Nanshan', coordinates: [113.9441738, 22.5136618], embeddedSubjectIds: ['place-talent-park', 'drone'],
    events: [
      { day: 2, title: 'Drone giao hàng Meituan', contributions: [
        { member: 'Phạm Minh Quân', text: 'Đặt gà rán KFC qua mini-program WeChat, drone hạ xuống tủ, lấy bằng mã. Ấn tượng nhất chuyến. Mô hình lai: người mang hàng ra bãi → drone bay chặng giữa → tủ nhận.' },
        { member: 'Nguyễn Trương Tấn Sâm', text: 'Nhược điểm lớn là Meituan không hỗ trợ đa ngôn ngữ, phải thao tác hoàn toàn bằng tiếng Trung. Điểm mạnh: ETA khá chuẩn vì hầu như không có yếu tố con người làm lệch leadtime, và tracking được vị trí drone real-time. Nhận hàng chỉ một bước: nhập code, lấy đơn, trả vỏ hộp vào tủ thu hồi. Với Ahamove, độ chính xác ETA tỉ lệ nghịch với mức can thiệp của con người; hai chuẩn UX tối thiểu là tracking real-time xuyên suốt và nhận hàng một bước.' },
        { member: 'Nguyễn Thanh Bình', text: 'Trạm drone là tủ có nóc hạ cánh cố định, khoang mở bằng NFC hoặc mã, hộp chuẩn hoá có nắp khoá, bảng hướng dẫn hai bước ai cũng tự làm được. Drone không giao tận cửa mà giao vào “điểm cuối chuẩn”. Với Ahamove: last-mile kiểu hub-to-locker, và UX nhận hàng một chạm mới là yếu tố quyết định chứ không phải con drone.' },
      ] },
    ],
  },
  {
    id: 'dongmen', order: 5, name: 'Phố đi bộ Dongmen', district: 'Luohu', coordinates: [114.1140, 22.5455], anchor: 'bottom-left',
    embeddedSubjectIds: ['place-dongmen'],
    events: [
      { day: 2, title: 'Thanh toán chạm · bán lẻ tương tác', contributions: [
        { member: 'Nguyễn Trương Tấn Sâm', text: 'Tất cả cửa hàng lớn nhỏ ở Dongmen đều thanh toán bằng Alipay, không nơi nào yêu cầu hay nhận tiền mặt. Thanh toán chạm bằng QR hoặc NFC là chuẩn mực mặc định chứ không phải ngoại lệ.' },
        { member: 'Nguyễn Thanh Bình', text: 'Màn hình LED tròn dưới sàn phố đi bộ, đặt điện thoại lên là tương tác — bán lẻ “phygital” giữ chân khách rất tự nhiên. Có thể là ý tưởng nhỏ cho activation offline tại hub hoặc điểm đối tác.' },
      ] },
      { day: 3, title: 'Ghé lại buổi tối', contributions: [] },
    ],
  },
  {
    id: 'iote', order: 6, name: 'IOTE Expo · Shenzhen World', district: 'Bao’an · Fuhai', coordinates: [113.7734, 22.6984], anchor: 'left',
    embeddedSubjectIds: ['place-iote'],
    events: [
      { day: 3, title: 'Bốn hall 9/10/11/12 — cả ngày', contributions: [
        { member: 'Phạm Minh Quân', text: 'Chủ yếu là booth giới thiệu sản phẩm đóng gói sẵn — NFC, scanner QR/barcode, RFID, phần mềm build sẵn. Ít thứ để build sâu trên app, chủ yếu là mua và dùng.' },
        { member: 'Nguyễn Khánh Công', text: 'Triển lãm thiên về giải pháp phần cứng hơn phần mềm. Khu showcase AI phần lớn là robot; SaaS và LLM chỉ chiếm 10–20%. Cho thấy Trung Quốc đang đẩy mạnh đưa AI vật lý ra ngoài đời thực, áp vào business.' },
        { member: 'Nguyễn Trương Tấn Sâm', text: 'Arizon gia công thẻ RFID cho nhiều ngành, giải bài toán quản lý số lượng hàng hoá và đánh mẫu theo dõi với chi phí thấp. Có cả máy bán hàng dùng robot nhận order theo món nước, vị kem rồi tự pha.' },
        { member: 'Nguyễn Thanh Bình', text: 'PDA UROVO thực chất là Android cộng scanner và NFC — app tài xế trên điện thoại thường làm được ~80%. Booth “goods-to-person + AR picking”: AGV mang kệ tới người, kính AR chỉ ô cần lấy, vendor công bố +40% hiệu suất nhưng chưa kiểm chứng. Ring scanner đeo ngón giúp rảnh hai tay khi soạn hàng. Máy in RFID inlay chạy tại chỗ, tag rất rẻ khi mua số lượng. Thứ tự nên mua và tích hợp: QR-app + NFC POD → ring scanner ở hub → RFID/AR khi có hub lớn.' },
      ] },
    ],
  },
  {
    id: 'luohu', order: 7, name: 'Luohu Commercial City', district: 'Luohu', coordinates: [114.1130, 22.5330], anchor: 'top-left',
    embeddedSubjectIds: ['place-luohu'],
    events: [
      { day: 4, title: 'Chợ sát cửa khẩu Hong Kong', contributions: [
        { member: 'Phạm Minh Quân', text: 'Gần biên giới Hong Kong: mua bánh, trà, hạt, lương khô khá rẻ nếu biết trả giá — không khí giống chợ An Đông.' },
        { member: 'Nguyễn Khánh Công', text: 'Giá cả bình dân nhưng phân biệt hàng thật giả hơi khó.' },
      ] },
    ],
  },
  {
    id: 'mixc', order: 8, name: 'MixC World', district: 'Nanshan', coordinates: [113.95123, 22.54504],
    embeddedSubjectIds: ['place-mixc'],
    events: [
      { day: 4, title: 'Tổ hợp bán lẻ cao cấp', contributions: [
        { member: 'Phạm Minh Quân', text: 'Tổ hợp mua sắm cao cấp, đa dạng, high-tech, bắt trend, nhiều tiện ích và dịch vụ hỗ trợ.' },
      ] },
    ],
  },
]
