export type DiagramKind = 'drone' | 'lighting' | 'pcb' | 'show' | 'radar' | 'facade'
type Step = { title: string; detail: string }
export type Mission = {
  id: string; code: string; title: string; location: string
  coordinates: [number, number]; osmUrl: string; locationNote?: string
  image: string; imageAlt: string; imageCaption: string
  topic: string; scope: string; overview: string; diagram: DiagramKind
  sources: { label: string; url: string }[]
  facts: { value: string; label: string; source: number }[]
  lens: { title: string; intro: string; steps: Step[]; insight: string; sources: number[] }
  engineering: { title: string; intro: string; steps: Step[]; metricLabel: string; metric: string; note: string; sources: number[] }
  lesson: string; question: string
}

// Sources describe site deployments or explicitly scoped vendor capabilities.
// Diagrams and engineering questions are editorial explanations, not as-built drawings.
// Coordinates remain backed by docs/locations-source.json.
export const missions: Mission[] = [
  {
    id: 'arrival', code: 'A1', title: 'Giao hàng trên một tầng trời.', location: 'Shenzhen Bay Park',
    coordinates: [113.9879978, 22.5244887], osmUrl: 'https://www.openstreetmap.org/node/9062301243',
    locationNote: 'Ghim tại ga Shenzhen Bay Park, điểm hẹn cạnh công viên.',
    image: '/media/research/bay-park-drone.jpg', imageAlt: 'Drone Meituan và tủ nhận hàng tại Shenzhen Bay Park', imageCaption: 'Ảnh: Shenzhen Daily / Nanshan Government',
    topic: 'Autonomous delivery', diagram: 'drone',
    overview: 'Bay Park có dịch vụ giao hàng bằng drone Meituan. Phía sau chuyến bay là cảm biến, điều khiển tự động và nhiều tầng xử lý sự cố.',
    scope: 'Dịch vụ tại công viên: nguồn chính quyền. Thông số dưới đây: nền tảng Meituan Gen 4, công bố 2023.',
    sources: [
      { label: 'Shenzhen · Drone trong công viên', url: 'https://www.sz.gov.cn/szzt2010/szcycx/cxdt/content/post_11908290.html' },
      { label: 'Meituan · Gen 4, 2023', url: 'https://www.meituan.com/news/NN230706019014042' },
    ],
    facts: [
      { value: '4D', label: 'radar mmWave + camera stereo', source: 1 },
      { value: '5 km', label: 'cự ly giao tối đa · thông số Gen 4', source: 1 },
      { value: '3 lớp', label: 'ứng phó sự cố theo thiết kế', source: 1 },
    ],
    lens: {
      title: 'Nhìn đường. Giữ hướng. Xử lý lỗi.',
      intro: 'Sơ đồ chức năng diễn giải từ công bố Gen 4. Không phải bản vẽ cấu hình drone đang chạy tại ghim này.',
      steps: [
        { title: 'Cảm nhận', detail: 'Camera stereo kết hợp radar mmWave để quan sát môi trường.' },
        { title: 'Điều khiển', detail: 'Các khối định vị, cảm biến và điều khiển bay có thiết kế dự phòng.' },
        { title: 'Ứng phó', detail: 'Tiếp tục bằng dự phòng → hạ cánh có kiểm soát → dù cứu hộ.' },
      ],
      insight: 'Dự phòng ở nhiều khối chỉ có ý nghĩa khi một lỗi chung không làm chúng cùng mất tác dụng.', sources: [1],
    },
    engineering: {
      title: 'Bay nhanh chưa đủ để giao nhanh.',
      intro: 'Phân tích kỹ thuật: tối ưu thời gian giao cần nhìn cả chuỗi, kể cả các lần bàn giao ở mặt đất.',
      steps: [
        { title: 'Hàng đợi tại trạm', detail: 'Chuẩn bị hàng và chờ phương tiện có thể lớn hơn thời gian bay.' },
        { title: 'Lỗi có tương quan', detail: 'Hai cảm biến cùng bị ảnh hưởng bởi môi trường vẫn có thể cùng sai.' },
        { title: 'Bàn giao cuối', detail: 'Đã hạ cánh, đã mở ngăn và khách đã nhận là ba trạng thái khác nhau.' },
      ],
      metricLabel: 'Mô hình thời gian để phân tích', metric: 'Tổng thời gian = chuẩn bị + chờ trạm + bay + nhận hàng.',
      note: 'Công thức là mô hình diễn giải; không có số đo độ trễ hoặc tỷ lệ lỗi của tuyến Bay Park trong nguồn.', sources: [0, 1],
    },
    lesson: 'Tự hành là một chuỗi quyết định khi có lỗi.',
    question: 'Nếu mất định vị hoặc điểm nhận chưa sẵn sàng, hệ thống chuyển trạng thái thế nào để đơn hàng không bị “mất dấu”?',
  },
  {
    id: 'city-rhythm', code: 'B2', title: 'Cả skyline thành một màn hình.', location: 'Civic Center',
    coordinates: [114.0545223, 22.5463725], osmUrl: 'https://www.openstreetmap.org/relation/10837975',
    image: '/media/research/futian-light-show.jpg', imageAlt: 'Light show trên các tòa nhà quanh Civic Center', imageCaption: 'Ảnh: Futian Government · 2023',
    topic: 'Distributed lighting control', diagram: 'lighting',
    overview: 'Dự án chiếu sáng Futian kết nối Civic Center với các tòa nhà khác thành một hệ thống trình diễn, điều khiển và giám sát tập trung.',
    scope: 'Case hoàn thành 2018. Quy mô là toàn dự án Futian, không riêng tòa Civic Center.',
    sources: [
      { label: 'Traxon e:cue · Futian CBD', url: 'https://www.traxon-ecue.com/project/shenzhen-futian-cbd/' },
      { label: 'e:cue · Butler PRO DMX', url: 'https://na.traxon-ecue.com/products/butler-pro/' },
    ],
    facts: [
      { value: '43', label: 'tòa nhà được kết nối', source: 0 },
      { value: '>1,5M', label: 'bộ đèn trong dự án', source: 0 },
      { value: '8.192', label: 'kênh / Butler PRO bản DMX', source: 1 },
    ],
    lens: {
      title: 'Từ nội dung số tới từng kênh đèn.',
      intro: 'SYMPHO City nối các hệ điều khiển. Tại thiết bị biên, Butler PRO bản DMX chuyển dữ liệu Ethernet e:net sang DMX512/RDM.',
      steps: [
        { title: 'Điều phối · SYMPHO City', detail: 'Liên kết trình diễn và giám sát các tòa nhà từ trung tâm.' },
        { title: 'Thiết bị biên · Butler PRO', detail: 'Bản DMX có 16 universe, mỗi universe 512 kênh.' },
        { title: 'Đầu ra · Đèn', detail: 'Giá trị kênh điều khiển ánh sáng; RDM hỗ trợ trao đổi hai chiều.' },
      ],
      insight: 'Một “kênh” không bằng một “pixel”: RGB cơ bản cần ba kênh điều khiển.', sources: [0, 1],
    },
    engineering: {
      title: 'Mất mạng, thành phố chiếu gì?',
      intro: 'Butler PRO hỗ trợ lưu cảnh tĩnh khi mất kết nối server. Đó là một ví dụ cụ thể về chế độ dự phòng tại biên.',
      steps: [
        { title: 'Ánh xạ đúng', detail: 'Mỗi kênh phải tới đúng đèn và đúng thành phần màu của nội dung.' },
        { title: 'Đồng bộ thời gian', detail: 'Sai lệch giữa các tòa nhà làm một chuyển động liên tục bị đứt đoạn.' },
        { title: 'Giảm chức năng có kiểm soát', detail: 'Cảnh tĩnh dự phòng khác với tiếp tục phát toàn bộ video khi mất server.' },
      ],
      metricLabel: 'Ví dụ tính dung lượng · RGB cơ bản', metric: '512 ÷ 3 = 170 pixel RGB / universe, dư 2 kênh.',
      note: 'Ví dụ theo datasheet bản DMX; nguồn dự án không nêu biến thể Butler PRO hoặc giao thức đồng bộ thời gian đã lắp.', sources: [1],
    },
    lesson: 'Một màn hình lớn là nhiều hệ nhỏ cùng giữ nhịp.',
    question: 'Khi một tòa nhà mất kết nối, ưu tiên tiếp tục nội dung, giữ cảnh tĩnh hay tắt có kiểm soát — và ai quyết định?',
  },
  {
    id: 'signal-hunting', code: 'C3', title: 'Từ linh kiện tới một bo mạch chạy được.', location: 'Huaqiangbei',
    coordinates: [114.0815422, 22.5448183], osmUrl: 'https://www.openstreetmap.org/node/3373068621',
    locationNote: 'Ghim đại diện khu Huaqiangbei, không phải cửa hàng hoặc nhà máy Seeed.',
    image: '/media/research/huaqiangbei-seeed.jpeg', imageAlt: 'Các module trên kệ cửa hàng Seeed ở Huaqiangbei', imageCaption: 'Ảnh: Seeed Studio · 2019',
    topic: 'Hardware prototyping · PCB / PCBA', diagram: 'pcb',
    overview: 'Seeed mở cửa hàng tại Huaqiangbei năm 2019, đưa các module như Grove vào hệ sinh thái linh kiện. Dịch vụ Fusion của hãng cho thấy bước tiếp theo: chế tạo PCB và lắp ráp PCBA.',
    scope: 'Năng lực bên dưới thuộc Seeed Fusion; không đại diện cho mọi nhà cung cấp Huaqiangbei.',
    sources: [
      { label: 'Seeed · Cửa hàng Huaqiangbei, 2019', url: 'https://www.seeedstudio.com/blog/2019/07/17/seeeds-first-ever-offline-store-opens-in-huangqiangbei%EF%BB%BF/' },
      { label: 'Seeed Fusion · PCB capabilities', url: 'https://www.seeedstudio.com/fusion_pcb.html' },
      { label: 'Arduino · Grove Sensor Kit', url: 'https://store.arduino.cc/collections/mkr-family/products/sensor-kit-base' },
    ],
    facts: [
      { value: '4/4 mil', label: 'đường mạch / khoảng cách tối thiểu', source: 1 },
      { value: '0,2 mm', label: 'đường kính lỗ khoan tối thiểu', source: 1 },
      { value: '1–3 oz', label: 'các mức đồng PCB được công bố', source: 1 },
    ],
    lens: {
      title: 'Cùng đầu cắm, chưa chắc cùng giao thức.',
      intro: 'Grove hỗ trợ cổng digital, analog, I²C và UART. Kết nối cơ khí thuận tiện vẫn cần kiểm tra tín hiệu và điện áp.',
      steps: [
        { title: 'Module · Thử chức năng', detail: 'Ghép cảm biến và vi điều khiển; chọn đúng loại giao tiếp.' },
        { title: 'PCB · Chế tạo bo', detail: 'Gerber mô tả các lớp để làm bo mạch, chưa bao gồm linh kiện đã lắp.' },
        { title: 'PCBA · Lắp linh kiện', detail: 'Bo đã lắp cần được kiểm thử chức năng trước khi xem là sản phẩm.' },
      ],
      insight: 'Một mẫu “cắm là chạy” chưa chứng minh thiết kế đã sẵn sàng để sản xuất hàng loạt.', sources: [1, 2],
    },
    engineering: {
      title: 'Đóng gói cả thiết kế lẫn cách kiểm thử.',
      intro: 'Checklist kỹ thuật đề xuất khi chuyển từ prototype sang một lô nhỏ; không phải quy trình nội bộ của mọi xưởng trong khu.',
      steps: [
        { title: 'Gerber + dữ liệu khoan', detail: 'Kiểm tra kích thước, đường mạch, khoảng cách và lỗ theo năng lực xưởng.' },
        { title: 'BOM + vị trí linh kiện', detail: 'Chốt mã linh kiện, phương án thay thế, hướng đặt và tọa độ lắp.' },
        { title: 'Firmware + fixture', detail: 'Định nghĩa cách cấp nguồn, nạp firmware và điều kiện pass/fail cho từng bo.' },
      ],
      metricLabel: 'Quy đổi để đọc thông số', metric: '4 mil = 0,1016 mm. “mil” là 1/1.000 inch, không phải mm.',
      note: 'Kích thước nhỏ nhất không mặc nhiên là lựa chọn tốt nhất: cần xét dòng điện, sai số chế tạo và khả năng sửa chữa.', sources: [1],
    },
    lesson: 'Prototype chạy được. Sản phẩm phải kiểm thử được.',
    question: 'Nếu giao file thiết kế cho một xưởng khác, họ có đủ dữ liệu để tạo ra cùng một bo và xác nhận cùng một kết quả?',
  },
  {
    id: 'people-flow', code: 'D4', title: 'Nước, ánh sáng và một nhịp điều khiển.', location: 'OCT Harbour',
    coordinates: [113.9830035, 22.5259532], osmUrl: 'https://www.openstreetmap.org/way/322631274',
    image: '/media/research/oct-mangrove-show.jpg', imageAlt: 'Nước, ánh sáng và người biểu diễn trong Mangrove Groove', imageCaption: '© ECA2 · Julien PANIÉ',
    topic: 'Show control · Mechatronics', diagram: 'show',
    overview: 'Mangrove Groove do ECA2 thực hiện kết hợp màn nước, ánh sáng, laser và biểu diễn. Một hệ điều khiển phối hợp hàng trăm hiệu ứng vật lý.',
    scope: 'Cấu hình dự án gốc 2011 do ECA2 công bố; không phải kiểm kê thiết bị hiện tại.',
    sources: [{ label: 'ECA2 · Mangrove Groove', url: 'https://www.eca2.com/cases/mangrove-groove/' }],
    facts: [
      { value: '2 × 50 m', label: 'hai màn nước · bề ngang mỗi màn', source: 0 },
      { value: '600', label: 'đèn chiếu sáng dưới nước', source: 0 },
      { value: '7 + 5', label: 'máy chiếu video + máy chiếu laser', source: 0 },
    ],
    lens: {
      title: 'Một timeline. Nhiều loại cơ cấu.',
      intro: 'Sơ đồ nguyên lý show control: mỗi cue là lệnh cho hiệu ứng xuất hiện đúng thời điểm. Không phải sơ đồ đấu nối của ECA2.',
      steps: [
        { title: 'Timeline · Cue', detail: 'Biên đạo khi nào hình ảnh, nước và ánh sáng cùng xuất hiện.' },
        { title: 'Điều khiển · Thiết bị', detail: 'Chuyển cue thành tác động cho từng nhóm cơ cấu.' },
        { title: 'Sân khấu · Hiệu ứng', detail: 'Màn nước, tia nước, video và laser tạo thành một cảnh.' },
      ],
      insight: 'Đồng bộ lệnh chưa đủ: nước cần thời gian hình thành bề mặt để hình chiếu đọc được.', sources: [0],
    },
    engineering: {
      title: 'Phần khó nằm ở thế giới vật lý.',
      intro: 'ECA2 mô tả dùng khí nén tạo áp suất dương để bảo vệ thiết bị nhạy cảm trong môi trường lắp đặt có nước biển.',
      steps: [
        { title: 'Độ trễ cơ cấu', detail: 'Phân tích: cần bù thời gian đáp ứng của nước so với ánh sáng.' },
        { title: 'Môi trường ăn mòn', detail: 'Áp suất dương là một biện pháp bảo vệ; không thay thế toàn bộ bảo trì.' },
        { title: 'Điều kiện dừng', detail: 'Câu hỏi thiết kế: hiệu ứng nào phải dừng khi gió, áp lực hoặc cảm biến vượt ngưỡng?' },
      ],
      metricLabel: 'Đại lượng cần đo khi căn chỉnh', metric: 'Sai lệch giữa thời điểm ra lệnh và thời điểm hiệu ứng thực sự xuất hiện.',
      note: 'Không có số đo độ trễ, giao thức điều khiển hoặc ngưỡng liên động an toàn trong hồ sơ công khai này.', sources: [0],
    },
    lesson: 'Muốn hiệu ứng đúng nhịp, phải hiểu độ trễ vật lý.',
    question: 'Khi màn nước chưa ổn định nhưng video đã tới cue, bộ điều khiển nên chờ, bỏ qua hay chuyển cảnh?',
  },
  {
    id: 'horizon', code: 'E5', title: 'Trạm 5G cũng có thể “nhìn” drone.', location: 'Shenzhen Talent Park',
    coordinates: [113.9441738, 22.5136618], osmUrl: 'https://www.openstreetmap.org/relation/18459537',
    image: '/media/research/talent-isac-demo.png', imageAlt: 'Buổi trình diễn công nghệ ISAC tại Talent Park', imageCaption: 'Ảnh: ZTE · 2024',
    topic: '5G-Advanced · Integrated sensing', diagram: 'radar',
    overview: 'ZTE và Shenzhen Mobile thử nghiệm kết hợp truyền thông với cảm nhận vô tuyến: nhiều trạm cùng theo dõi drone và phát hiện xâm nhập vùng giới hạn.',
    scope: 'Thử nghiệm công bố 2024 tại Talent Park và các điểm ở Nanshan. Không phải số liệu vận hành thời gian thực.',
    sources: [
      { label: 'ZTE × Shenzhen Mobile · 14/05/2024', url: 'https://www.zte.com.cn/china/about/news/_7.html' },
      { label: 'ZTE · ISAC & low-altitude sensing', url: 'https://www.zte.com.cn/global/about/magazine/zte-technologies/2025/special-topic---5g-a-mmwave/special-topic---5g-a-mmwave/mmwave-isac-driving-low-altitude-economy.html' },
    ],
    facts: [
      { value: '4,9 GHz', label: 'băng tần trạm 5G-A của case', source: 0 },
      { value: 'ISAC', label: 'tích hợp truyền thông và cảm nhận', source: 1 },
      { value: 'Đa trạm', label: 'phối hợp theo dõi quỹ đạo drone', source: 0 },
    ],
    lens: {
      title: 'Từ tín hiệu phản xạ tới quỹ đạo.',
      intro: 'ISAC dùng hạ tầng vô tuyến cho cả kết nối và cảm nhận. Sơ đồ mô tả nguyên lý, không biểu diễn vùng phủ sóng thực.',
      steps: [
        { title: 'Phát / thu · Cảm nhận', detail: 'Trạm thu tín hiệu phản xạ từ vật thể trong môi trường.' },
        { title: 'Phối hợp · Nhiều trạm', detail: 'Kết hợp quan sát để duy trì theo dõi khi mục tiêu di chuyển.' },
        { title: 'Ứng dụng · Quỹ đạo', detail: 'Case đã thử theo dõi nhiều drone và cảnh báo xâm nhập geofence.' },
      ],
      insight: '4,9 GHz thuộc dải sub-6 GHz; không được nhầm case này với các triển khai mmWave ở thành phố khác.', sources: [0, 1],
    },
    engineering: {
      title: 'Phát hiện được, rồi tin đến mức nào?',
      intro: 'Phân tích kỹ thuật: có điểm phản xạ chưa đồng nghĩa có quỹ đạo ổn định, danh tính hay quyền điều khiển drone.',
      steps: [
        { title: 'Báo động giả', detail: 'Phân biệt drone với phản xạ môi trường; theo dõi cả báo nhầm lẫn bỏ sót.' },
        { title: 'Mất / nối lại quỹ đạo', detail: 'Đánh giá việc giữ đúng mục tiêu khi bị che khuất hoặc đổi vùng quan sát.' },
        { title: 'Cảnh báo ≠ điều khiển', detail: 'Phát hiện vượt ranh giới không có nghĩa hệ thống tự chặn hoặc lái drone.' },
      ],
      metricLabel: 'Bộ chỉ số cần có để đánh giá', metric: 'Tỷ lệ phát hiện · báo động giả · thời gian mất quỹ đạo · độ trễ cảnh báo.',
      note: 'Nguồn công bố các kịch bản đã thử, không nêu giá trị các chỉ số này riêng cho Talent Park.', sources: [0],
    },
    lesson: 'Kết nối cho drone bay. Cảm nhận cho biết nó ở đâu.',
    question: 'Nếu drone không gửi telemetry, hệ thống còn quan sát được gì — và bằng chứng nào đủ để kích hoạt cảnh báo?',
  },
  {
    id: 'team-table', code: 'F6', title: 'Lớp vỏ cũng là một hệ thống.', location: 'Sea World · Shekou',
    coordinates: [113.9118315, 22.4860651], osmUrl: 'https://www.openstreetmap.org/way/543176177',
    locationNote: 'Ghim khu Sea World; case là Sea World Culture and Arts Center trong khu vực, không phải vị trí cửa vào tòa nhà.',
    image: '/media/research/swcac-interior.jpg', imageAlt: 'Khoảng thông tầng và mặt kính bên trong SWCAC', imageCaption: 'Ảnh từ hồ sơ Maki and Associates',
    topic: 'Structural engineering · Building envelope', diagram: 'facade',
    overview: 'Sea World Culture and Arts Center của Maki and Associates kết hợp khối đua, khung bê tông–thép và các kiểu mặt dựng phục vụ những không gian khác nhau.',
    scope: 'Case công trình SWCAC trong khu Sea World. Thông tin kỹ thuật từ kiến trúc sư, không phải tòa nhà tại tâm ghim.',
    sources: [
      { label: 'Maki and Associates · SWCAC', url: 'https://www.maki-and-associates.co.jp/projects/SZC?lang=en' },
      { label: 'Maki · Thuyết minh trên ArchDaily', url: 'https://www.archdaily.com/885148/shenzhen-sea-world-culture-and-arts-center-maki-and-associates-not-ready' },
    ],
    facts: [
      { value: '3 khối', label: 'khối đua khỏi khối đế', source: 1 },
      { value: '2 lớp', label: 'mặt dựng tại các khối phía trên', source: 1 },
      { value: '9,5 m', label: 'chiều cao Main Gallery có skylight', source: 1 },
    ],
    lens: {
      title: 'Kết cấu, mặt dựng, ánh sáng.',
      intro: 'Ba lớp để đọc công trình: hệ chịu lực, lớp bao che và điều kiện bên trong. Hình vẽ là mặt cắt khái niệm.',
      steps: [
        { title: 'Chịu lực · Bê tông + thép', detail: 'Kết cấu công trình kết hợp bê tông cốt thép và thép.' },
        { title: 'Bao che · Theo chức năng', detail: 'Nhà hát có lam ngoài; sảnh hướng biển dùng kính liên kết điểm kiểu spider.' },
        { title: 'Không gian · Ánh sáng', detail: 'Main Gallery cao 9,5 m, nhận ánh sáng từ skylight trên mái.' },
      ],
      insight: 'Cùng một tòa nhà nhưng không thể chọn một giải pháp mặt dựng cho mọi phòng.', sources: [0, 1],
    },
    engineering: {
      title: 'Trong suốt đến đâu là đủ?',
      intro: 'Phân tích thiết kế: mở tầm nhìn ra biển đồng thời tạo bài toán về nhiệt, chói và chuyển vị giữa các cấu kiện.',
      steps: [
        { title: 'Khối đua · Chuyển vị', detail: 'Cần kiểm tra độ võng và cách mặt dựng thích ứng với chuyển vị của kết cấu.' },
        { title: 'Kính · Nhiệt và chói', detail: 'Không chỉ độ trong: cần xét truyền nhiệt, nhiệt mặt trời và ánh sáng hữu ích.' },
        { title: 'Chi tiết · Bảo trì', detail: 'Liên kết kính, khe nối và khả năng tiếp cận vệ sinh quyết định vận hành lâu dài.' },
      ],
      metricLabel: 'Dữ liệu cần để đánh giá hiệu năng', metric: 'U-value · SHGC · độ chói · độ võng cho phép · khả năng tiếp cận bảo trì.',
      note: 'Hồ sơ được dẫn không công bố các trị số này. Không suy ra mức tiết kiệm năng lượng chỉ từ hình dáng công trình.', sources: [0, 1],
    },
    lesson: 'Hình thức là nơi nhiều ràng buộc kỹ thuật gặp nhau.',
    question: 'Nếu tăng diện tích kính hướng biển, cần những phép đo hoặc mô phỏng nào trước khi kết luận trải nghiệm sẽ tốt hơn?',
  },
]
