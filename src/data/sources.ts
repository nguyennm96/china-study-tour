// Sổ nguồn cho ba chủ đề. Mỗi số liệu trên slide trỏ về một id ở đây.
// Quy ước: `asOf` là mốc số liệu được công bố áp dụng, `date` là ngày xuất bản.
// `tier` phân biệt nguồn sơ cấp (đơn vị tự công bố) với nguồn thứ cấp (báo chí dẫn lại).
export type SourceTier = 'primary' | 'secondary' | 'trip'

export type Source = {
  id: string
  publisher: string
  title: string
  date: string
  url: string
  tier: SourceTier
  scope?: string
}

export const sources: Source[] = [
  {
    id: 'talent-park-gov', publisher: 'UBND quận Nam Sơn · Thâm Quyến', title: 'Trang giới thiệu Công viên Nhân tài Thâm Quyến', date: '2026', tier: 'primary',
    url: 'https://www.szns.gov.cn/mlns/stns/lc/csgy/content/post_12595660.html',
    scope: 'Diện tích, diện tích mặt nước, ngày mở cửa và vị thế công viên chủ đề nhân tài đầu tiên cả nước.',
  },
  {
    id: 'mt-drone-econ', publisher: '21 Thế kỷ Kinh tế Đạo báo', title: 'Không chỉ giao đồ ăn: drone Meituan muốn có lãi trong hai ba năm', date: '25/05/2026', tier: 'secondary',
    url: 'https://www.21jingji.com/article/20260525/herald/388a82619d8a8b1bd08cef8892f34852.html',
    scope: 'Phỏng vấn lãnh đạo mảng drone của Meituan: tỷ lệ người trên drone, đà giảm chi phí mỗi đơn, sản lượng một điểm cất cánh và tình hình lãi lỗ. Đây là số do Meituan tự nêu trong phỏng vấn, không phải số trong báo cáo tài chính đã kiểm toán.',
  },
  {
    id: 'mt-talent-route', publisher: 'Meituan', title: 'Tuyến drone Công viên Nhân tài Thâm Quyến khai trương tháng 9', date: '04/09/2023', tier: 'primary',
    url: 'https://www.meituan.com/news/NN230904058001287',
    scope: 'Thông cáo của Meituan về tuyến Coastal City – Công viên Nhân tài: ngày khai trương, thứ tự tuyến, điểm cất cánh, đối tác và mức rút ngắn thời gian giao. Con số rút ngắn 50% là do Meituan tự công bố, không có kiểm chứng độc lập.',
  },
  {
    id: 'mt-drone-test', publisher: '21 Thế kỷ Kinh tế Đạo báo', title: 'Tham vọng drone của Meituan không dừng ở giao đồ ăn', date: '23/05/2026', tier: 'secondary',
    url: 'https://www.21jingji.com/article/20260523/herald/b356afb90c235049a99921270f8f7e78.html',
    scope: 'Phóng viên tự đặt một đơn tại Thâm Quyến ngày 21/05/2026 và bấm giờ: 21 phút từ lúc đặt tới lúc nhận, trong đó 6 phút là drone bay. Đây là một lần đo thực địa, không phải thời gian trung bình do Meituan công bố.',
  },
  {
    id: 'hqb-szgov', publisher: 'Cổng thông tin Chính quyền TP Thâm Quyến', title: 'Chuyện Thâm Quyến — “Phố điện tử số một Trung Quốc” Hoa Cường Bắc', date: '03/2023', tier: 'primary',
    url: 'https://www.sz.gov.cn/szstory/202303/content/post_10466042.html',
    scope: 'Các mốc hình thành khu chợ: khu công nghiệp Thượng Bộ, chợ linh kiện 1988, danh hiệu 2008, bốn năm rào đường làm metro và ngày mở lại phố đi bộ 14/01/2017.',
  },
  {
    id: 'dachong-nfapp', publisher: 'Nam Phương Plus', title: 'Hoa Nhuận Thành: dự án cải tạo làng trong phố lớn nhất Quảng Đông', date: '19/09/2019', tier: 'secondary',
    url: 'https://static.nfapp.southcn.com/content/201909/19/c2638568.html',
    scope: 'Quy mô cải tạo làng Đại Xung thành khu Hoa Nhuận Thành, nơi MixC World toạ lạc. Số hộ và số công trình di dời do báo chí dẫn từ hồ sơ dự án, không phải công bố của cơ quan quản lý đất đai.',
  },
  {
    id: 'hqb-markets', publisher: 'Cục Lưu trữ TP Thâm Quyến', title: 'Hoa Cường Bắc — từ chợ linh kiện đến địa danh thương mại công nghệ', date: '2026', tier: 'secondary',
    url: 'https://www.szdag.gov.cn/gzdt/gzdt/content/post_1615342.html',
    scope: 'Dùng cho quá trình hình thành và cách phân chia chợ chuyên ngành. Chi tiết từng tầng bán gì là tổng hợp từ hướng dẫn mua sắm tiếng Trung, không phải công bố chính thức của ban quản lý chợ.',
  },
  {
    id: 'dongmen-duten', publisher: 'Đọc Đặc · Tập đoàn Báo chí Thâm Quyến', title: 'Đến Đông Môn, chứng kiến quá khứ và tương lai của Thâm Quyến', date: '2026', tier: 'secondary',
    url: 'https://m.dutenews.com/n/article/7814945',
    scope: 'Số thương hiệu trong khu và các di tích còn lại giữa phố mua sắm. Báo địa phương tổng hợp, chưa đối chiếu số liệu quản lý thị trường.',
  },
  {
    id: 'luohu-trades', publisher: 'The Paper và Tinh Đảo Đầu Điều', title: 'Luohu Commercial City: chín nhóm ngành và phố may đo', date: '2024–2025', tier: 'secondary',
    url: 'https://www.thepaper.cn/newsDetail_forward_22765971',
    scope: 'Chín nhóm ngành, hơn 140 tiệm may đo, khoảng 70.000 bộ mỗi năm và tỷ lệ khách Hong Kong. Số do báo chí Trung Quốc và Hong Kong tổng hợp, không phải thống kê của ban quản lý.',
  },
  {
    id: 'seg-plaza-wiki', publisher: 'Wikipedia tiếng Anh', title: 'SEG Plaza', date: '2026', tier: 'secondary',
    url: 'https://en.wikipedia.org/wiki/SEG_Plaza',
    scope: 'Thông số toà nhà và sự cố rung lắc 18/05/2021. Chiều cao 291,6 m là số sau khi tháo cột ăng-ten; trước đó toà nhà được ghi 356 m.',
  },
  {
    id: 'shenzhen-world-aipc', publisher: 'AIPC · Hiệp hội Trung tâm Hội nghị Quốc tế', title: 'Hồ sơ thành viên Shenzhen World Exhibition & Convention Center', date: '2026', tier: 'secondary',
    url: 'https://aipc.org/member/shenzhen-world-exhibition-convention-center/',
    scope: 'Quy mô trung tâm hội chợ: 400.000 m² trưng bày trong nhà ở giai đoạn 1, 19 hall. Trang chính thức của trung tâm dựng bằng JavaScript nên không đọc được số trực tiếp từ nguồn gốc.',
  },
  {
    id: 'aha-warehouse', publisher: 'Ahamove', title: 'Dịch vụ Warehouse — giải pháp doanh nghiệp', date: 'Truy cập 22/09/2026', tier: 'primary',
    url: 'https://ahamove.com/service/cooperate/warehouse',
    scope: 'Trang dịch vụ tự công bố tracking real-time và quy trình qua kho. Chỉ dùng xác nhận nền tảng hiện hữu; không chứng minh đã có locker, QR/OTP tự nhận hoặc giao bằng UAV.',
  },
  {
    id: 'aha-delivery-process', publisher: 'Ahamove', title: 'Quy trình giao hàng hoá', date: 'Truy cập 22/09/2026', tier: 'primary',
    url: 'https://ahamove.com/quytrinhthuchiendonhang',
    scope: 'Quy trình công khai có liên hệ người nhận, COD, xác thực giao hàng và hoàn trả. Thử nghiệm điểm nhận cần thiết kế riêng các ngoại lệ; không coi quét mã là thay thế toàn bộ nghiệp vụ.',
  },
  {
    id: 'hcm-uav-delivery-2026', publisher: 'Sở Khoa học và Công nghệ TP.HCM', title: 'TP.HCM vận chuyển hàng bằng UAV xuyên biển', date: '12/02/2026', tier: 'primary',
    url: 'https://dost.hochiminhcity.gov.vn/hoat-dong-so-khcn/tphcm-van-chuyen-hang-bang-uav-xuyen-bien/',
    scope: 'Công bố tuyến Cần Giờ–Vũng Tàu của Vietnam Post và CT UAV, có giấy phép bay. Chứng minh một triển khai cụ thể, không chứng minh lợi nhuận, độ tin cậy dài hạn hoặc khả năng bay đại trà của Ahamove.',
  },
  {
    id: 'vn-uav-decree-288', publisher: 'Công báo Chính phủ', title: 'Nghị định 288/2025/NĐ-CP về quản lý tàu bay không người lái và phương tiện bay khác', date: '05/11/2025', tier: 'primary',
    url: 'https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-288-2025-nd-cp-46557.htm',
    scope: 'Văn bản quản lý UAV được dẫn trong công bố tuyến Cần Giờ–Vũng Tàu. Không suy từ giấy phép tuyến này thành quyền khai thác cho tuyến hoặc đơn vị khác.',
  },
  {
    id: 'hqb-xinhua', publisher: 'Tân Hoa Xã', title: 'Nhìn cái đổi và cái không đổi của Hoa Cường Bắc qua “năm cái một”', date: '25/08/2025', tier: 'secondary',
    url: 'https://www.news.cn/fortune/20250825/2dff6f2aa52146d8b014ad21f2e36959/c.html',
    scope: 'Số liệu khu Hoa Cường Bắc do Tân Hoa Xã dẫn từ cơ quan quản lý địa phương. Phạm vi “khu” theo cách bài báo dùng, không trùng ranh giới phường Hoa Cường Bắc trong thống kê hành chính.',
  },
  {
    id: 'dongmen-wiki', publisher: 'Wikipedia tiếng Trung', title: 'Khu thương mại Đông Môn', date: '2026', tier: 'secondary',
    url: 'https://zh.wikipedia.org/wiki/%E6%9D%B1%E9%96%80%E5%95%86%E6%A5%AD%E5%8D%80',
    scope: 'Dùng cho diện tích khu, nguồn gốc tên gọi và mốc McDonald’s 1990. Lượng khách mỗi ngày lưu truyền trên báo du lịch (30–50 vạn lượt) không đưa vào slide vì không có nguồn gốc rõ ràng.',
  },
  {
    id: 'iote-2026', publisher: 'IOTE · Ban tổ chức triển lãm IoT quốc tế', title: 'Giới thiệu triển lãm IOTE 2026 Thâm Quyến', date: '08/2026', tier: 'primary',
    url: 'https://www.iotexpo.com.cn/sz/HTMLIntro',
    scope: 'Ban tổ chức tự công bố quy mô và lượng khách, không có kiểm toán độc lập. Một nguồn thứ cấp dẫn 6.000 khách quốc tế trong khi trang chính thức ghi 3.000; slide lấy theo con số chính thức.',
  },
  {
    id: 'luohu-port-gov', publisher: 'Văn phòng Cửa khẩu · UBND TP Thâm Quyến', title: 'Trang giới thiệu cửa khẩu La Hồ', date: '2026', tier: 'primary',
    url: 'https://ka.sz.gov.cn/bmfw/katgfw/content/post_2287730.html',
    scope: 'Công suất thiết kế, lưu lượng trung bình, đỉnh lịch sử và số luồng kiểm tra là số của cơ quan quản lý cửa khẩu. Trang không ghi mốc thời gian cho con số trung bình 170.000 lượt/ngày.',
  },
  {
    id: 'luohu-city', publisher: 'Wikipedia tiếng Trung và tư liệu báo chí Thâm Quyến', title: 'Luohu Commercial City', date: '2026', tier: 'secondary',
    url: 'https://zh.wikipedia.org/wiki/%E7%BE%85%E6%B9%96%E5%95%86%E6%A5%AD%E5%9F%8E',
    scope: 'Mốc khai trương 07/1994, diện tích 55.000 m² và số gian hàng. Số gian dao động theo thời kỳ: 1.280 gian lúc mở bán, sau mở rộng lên hơn 1.700.',
  },
  {
    id: 'mixc-nanshan-gov', publisher: 'UBND quận Nam Sơn · Thâm Quyến', title: 'Trang giới thiệu Vạn Tượng Thiên Địa', date: '2026', tier: 'primary',
    url: 'https://www.szns.gov.cn/mlns/nsgk_113865/lg/content/post_9364223.html',
    scope: 'Mô hình bố trí, số toà flagship, số cửa hàng và thương hiệu là số của chính quyền quận. Riêng tổng diện tích sàn ~230.000 m² lấy từ nguồn thứ cấp vì trang này không nêu.',
  },
  {
    id: 'didi-sam-deck', publisher: 'Nguyễn Trương Tấn Sâm · Ahamove',
    title: 'Trải nghiệm Didi ở Thẩm Quyến — bài chia sẻ study tour', date: '22/09/2026', tier: 'trip',
    url: 'https://drive.google.com/file/d/1dGdoSl5wS7ePTU9mV1scqe05KXf6nah6/view',
    scope: 'Ghi nhận trực tiếp 11 chuyến Didi của đoàn: ảnh màn hình app, ảnh đường phố và quan sát cá nhân. Các con số thị trường (quy mô Didi, thị phần taxi công nghệ Việt Nam, số chuyến robotaxi) là số Sâm dẫn lại trong bài, chưa đối chiếu báo cáo gốc.',
  },
  {
    id: 'hotel-robot-team-doc', publisher: 'Team Truck On-Demand · Ahamove',
    title: 'Robot giao hàng tận phòng tại khách sạn Trung Quốc', date: '20/09/2026', tier: 'secondary',
    url: 'https://docs.google.com/document/d/17bI67RGsjEB8GECcz_JJnRICAKicv2CofpdORjiz77Y/edit?tab=t.0',
    scope: 'Tài liệu nghiên cứu nội bộ do người dùng chỉ định làm nguồn biên tập. Mô tả kiến trúc tổng quát, không xác nhận khách sạn hoặc thiết bị đoàn trải nghiệm. Số thị trường toàn cầu là ước lượng/dự báo dẫn lại, chưa đối chiếu báo cáo ngành gốc trong lần cập nhật này.',
  },
  {
    id: 'mt-tech', publisher: 'Meituan', title: 'Trang “Công nghệ của chúng tôi”', date: '07/2026', tier: 'primary',
    url: 'https://www.meituan.com/technology',
    scope: 'Trang tự công bố của Meituan. Mốc số liệu ghi ngay trên từng khối, không phải báo cáo được kiểm toán.',
  },
  {
    id: 'mt-fy2025', publisher: 'Meituan', title: 'Báo cáo Q4 và cả năm 2025', date: '26/03/2026', tier: 'primary',
    url: 'https://www.meituan.com/news/NN260326174005788',
    scope: 'Thông cáo kết quả kinh doanh. Số tài chính là số hợp nhất cả tập đoàn, không tách riêng Thâm Quyến.',
  },
  {
    id: 'mt-q3-2025', publisher: 'Meituan', title: 'Báo cáo Q3 2025', date: '28/11/2025', tier: 'primary',
    url: 'https://www.meituan.com/news/NN251128093005515',
    scope: 'Người dùng giao dịch là số luỹ kế 12 tháng, không phải người dùng hoạt động hằng tháng.',
  },
  {
    id: 'mt-peak-2025', publisher: 'Meituan', title: 'Đơn bán lẻ tức thời đạt 150 triệu/ngày, trung bình 34 phút', date: '07/2025', tier: 'primary',
    url: 'https://www.meituan.com/news/NN250718108001691',
    scope: 'Số của một ngày đạt đỉnh (12/07/2025), không phải trung bình cả năm. 34 phút tính trên toàn bộ đơn giao của ngày đó.',
  },
  {
    id: 'mt-uv-oct2025', publisher: 'Tencent News dẫn Meituan', title: 'Xe tự hành Meituan triển khai quy mô tại Thâm Quyến', date: '20/10/2025', tier: 'secondary',
    url: 'https://news.qq.com/rain/a/20251020A04XQP00',
    scope: 'Báo dẫn phát biểu của Phó chủ tịch Meituan Mao Yinian. Chưa có bản công bố gốc kèm phương pháp đo.',
  },
  {
    id: 'mt-gen4', publisher: 'Low Altitude Economy', title: 'Drone thế hệ 4 của Meituan và giấy phép toàn quốc của CAAC', date: '2025', tier: 'secondary',
    url: 'https://lowaltitudeeconomy.aero/en/evtol-news-and-electric-aircraft-news/cargo-drones/meituan-fourth-generation-drone-caac-national-full-territory-logistics-license',
    scope: 'Thông số nền tảng theo công bố của nhà sản xuất. Là năng lực thiết kế, không phải kết quả đo trên tuyến Talent Park.',
  },
  {
    id: 'sz-21jingji', publisher: '21 Thế kỷ Kinh tế Đạo báo', title: 'Logistics tầm thấp Thâm Quyến vào giai đoạn thương mại thường lệ', date: '21/09/2026', tier: 'secondary',
    url: 'https://www.21jingji.com/article/20260921/herald/2cd4229697432459adcf14efb5ffd964.html',
    scope: 'Bài báo tổng hợp số liệu thành phố và doanh nghiệp. Số Meituan trong bài trùng với mốc tháng 6/2026.',
  },
  {
    id: 'sz-xinhua', publisher: 'Tân Hoa Xã', title: 'Từ công xưởng thế giới đến thành phố tầm thấp', date: '31/05/2026', tier: 'secondary',
    url: 'https://www.news.cn/fortune/20260531/2c5e31f791974ab187693599a10f65a1/c.html',
    scope: 'Số liệu cấp thành phố cho năm 2025. Tỷ lệ sản xuất drone là thị phần sản lượng, không phải doanh thu.',
  },
  {
    id: 'sz-uv-jan2026', publisher: 'OFweek dẫn báo cáo tháng ngành xe không người Thâm Quyến', title: 'Tháng 1/2026: 1.168 xe, 2,42 triệu đơn', date: '02/2026', tier: 'secondary',
    url: 'https://mp.ofweek.com/auto/a956714520697',
    scope: 'Báo cáo tháng của hiệp hội ngành tại Thâm Quyến. Bao gồm cả xe logistics và xe dịch vụ khác, không chỉ giao đồ ăn.',
  },
  {
    id: 'sz-uv-2025', publisher: 'Eastmoney', title: 'Thâm Quyến: 8,66 triệu đơn xe không người trong năm 2025', date: '09/02/2026', tier: 'secondary',
    url: 'https://finance.eastmoney.com/a/202602093645625992.html',
    scope: 'Số cả năm 2025 cấp thành phố. Dự báo 2026 trong bài là của tổ chức phân tích, không phải số thực hiện.',
  },
  {
    id: 'mt-riders', publisher: 'China.com dẫn Meituan', title: 'Quy mô 3,36 triệu rider có đơn mỗi tháng giữ ổn định', date: '09/10/2025', tier: 'secondary',
    url: 'https://digi.china.com/articles/20251009/202510091744732.html',
    scope: 'Là rider có phát sinh đơn bình quân tháng, không phải tổng số người từng nhận thu nhập trong năm.',
  },
  {
    id: 'keeta-drone', publisher: 'Keeta Drone (Meituan)', title: 'Trang giới thiệu Keeta Drone', date: '2026', tier: 'primary',
    url: 'https://www.keetadrone.com/pages/about-us',
    scope: 'Trang marketing quốc tế. Ghi “70+ tuyến”, cách đếm khác với báo cáo thường niên; dùng để đối chiếu, không dùng làm số chính.',
  },
  {
    id: 'uv-cost', publisher: '36Kr', title: 'Giá xe giao hàng không người lái giảm từ vài trăm nghìn xuống vài chục nghìn tệ', date: '2026', tier: 'secondary',
    url: 'https://eu.36kr.com/en/p/3526682750163847',
    scope: 'Khoảng chi phí theo phân tích ngành trên tuyến lặp lại tần suất cao. Không phải số liệu kế toán của một doanh nghiệp cụ thể.',
  },
  {
    id: 'fudan', publisher: 'Đại học Phúc Đán', title: 'Ghi nhận trực tiếp tuyến giao drone trong khuôn viên', date: '17/03/2025', tier: 'secondary',
    url: 'https://news.fudan.edu.cn/2025/0317/c31a144526/page.htm',
    scope: 'Trải nghiệm tại Phúc Đán. Dùng để giải thích nguyên lý khoang nhận, không suy ra cấu hình tủ ở Talent Park.',
  },
  {
    id: 'trip-sheet', publisher: 'Đoàn Ahamove', title: 'Outline_Sharing_Shenzhen_Trip', date: '24–28/08/2026', tier: 'trip',
    url: 'https://docs.google.com/spreadsheets/d/1kU_8BZwFz49gIsoyGRuZT7ivJnuTg7NM_SwKiKhi7CE/edit?gid=1775856938#gid=1775856938',
    scope: 'Ghi chép và media của đoàn. Là quan sát một lần, không phải phép đo có lặp lại.',
  },
]

const index = new Map(sources.map(source => [source.id, source]))
export const source = (id: string): Source => {
  const found = index.get(id)
  if (!found) throw new Error(`Thiếu nguồn cho id "${id}"`)
  return found
}
