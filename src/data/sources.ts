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
    id: 'vnpost-uav-2026', publisher: 'Tổng công ty Bưu điện Việt Nam', title: 'Ứng dụng UAV giao hàng: từ y tế đô thị đến logistics tuyến biển', date: '22/02/2026', tier: 'primary',
    url: 'https://vnpost.vn/vi/hoat-dong-nganh/ung-dung-uav-giao-hang-tu-y-te-do-thi-den-logistics-tuyen-bien',
    scope: 'Vai trò của Vietnam Post trên tuyến Cần Giờ – Vũng Tàu (thiết kế dịch vụ, nhận – giao, tracking, POD) và mức kỳ vọng giảm 80–90% thời gian chặng so với đường bộ. Mức giảm là kỳ vọng do chính Vietnam Post nêu, chưa phải số đo vận hành.',
  },
  {
    id: 'uav-decree-288-summary', publisher: 'Báo Điện tử Chính phủ', title: 'Quy định mới về điều kiện đăng ký, khai thác sử dụng phương tiện bay không người lái', date: '07/11/2025', tier: 'primary',
    url: 'https://baochinhphu.vn/quy-dinh-moi-ve-dieu-kien-dang-ky-khai-thac-su-dung-phuong-tien-bay-khong-nguoi-lai-102251107151800489.htm',
    scope: 'Tóm tắt Nghị định 288/2025: giấy phép điều khiển theo khối lượng và cách quan sát, cấp phép bay trong khu vực cấm chỉ cho hoạt động công vụ. Dùng làm bằng chứng về điều kiện hiện hành, không suy ra thời gian xử lý hồ sơ.',
  },
  {
    id: 'hcm-uav-sandbox', publisher: 'VnExpress', title: 'TP HCM ưu tiên thử nghiệm drone, UAV tại Củ Chi, Cần Giờ', date: '23/09/2026', tier: 'secondary',
    url: 'https://vnexpress.net/tp-hcm-uu-tien-thu-nghiem-drone-uav-tai-cu-chi-can-gio-5123676.html',
    scope: 'UBND TP.HCM chấp thuận chủ trương không gian thử nghiệm UAV năm 2026, ưu tiên Cần Giờ, Củ Chi và khu đô thị khoa học công nghệ phía Bắc; Bộ Tư lệnh TP chủ trì.',
  },
  {
    id: 'talent-park-rules', publisher: 'Shenzhen Bendibao', title: 'Công viên Nhân tài có cho đi xe đạp không', date: '28/04/2022', tier: 'secondary',
    url: 'https://m.wenda.bendibao.com/tour/101530.shtm',
    scope: 'Quy định vào cổng: cấm xe đạp và thú cưng; xe cơ giới chưa được phép không được vào công viên.',
  },
  {
    id: 'talent-park-gov', publisher: 'UBND quận Nam Sơn · Thâm Quyến', title: 'Trang giới thiệu Công viên Nhân tài Thâm Quyến', date: '12/01/2026', tier: 'primary',
    url: 'https://www.szns.gov.cn/mlns/stns/lc/csgy/content/post_12595660.html',
    scope: 'Công viên tại Hậu Hải, quận Nam Sơn, kết nối dải công viên ven Vịnh Thâm Quyến và cạnh khu trụ sở Shenzhen Bay. Tổng diện tích 77 ha, mặt nước 30 ha, mở cửa 01/11/2017. Công viên chủ đề nhân tài đầu tiên của Trung Quốc, với hơn 20 không gian cảnh quan theo chủ đề nhân tài.',
  },
  {
    id: 'houhai-tech-headquarters', publisher: 'Sở Công nghiệp và Công nghệ thông tin Thâm Quyến', title: 'Giới thiệu Khu công nghiệp phần mềm Thâm Quyến', date: '29/11/2024', tier: 'primary',
    url: 'https://gxj.sz.gov.cn/xxgk/xxgkml/qt/gzdt/content/post_11833144.html',
    scope: 'Khu công nghiệp phần mềm nằm tại điểm giao giữa khu công nghệ cao phía Nam và khu trụ sở Hậu Hải. Khu vực lân cận có trụ sở hoặc trụ sở khu vực của Tencent, Alibaba, Baidu và Kingdee; không hàm ý tất cả đều nằm sát Talent Park.',
  },
  {
    id: 'mad-culture-square', publisher: 'MAD Architects', title: 'Shenzhen Bay Culture Square — kiến trúc và không gian công cộng ven vịnh', date: '04/08/2026', tier: 'primary',
    url: 'https://www.i-mad.com/zh/articles/shenzhen-bay-culture-square-completion-cn',
    scope: 'Đơn vị thiết kế mô tả cụm công trình văn hóa liền kề Talent Park, với các khối nhà ốp đá granite trắng, mái phủ xanh và lối đi bộ nối với công viên. Đây là Shenzhen Bay Culture Square, không phải trụ sở doanh nghiệp công nghệ.',
  },
  {
    id: 'mt-drone-econ', publisher: '21 Thế kỷ Kinh tế Đạo báo', title: 'Không chỉ giao đồ ăn: drone Meituan muốn có lãi trong hai ba năm', date: '25/05/2026', tier: 'secondary',
    url: 'https://www.21jingji.com/article/20260525/herald/388a82619d8a8b1bd08cef8892f34852.html',
    scope: 'Phỏng vấn lãnh đạo mảng drone của Meituan: tỷ lệ người trên drone, đà giảm chi phí mỗi đơn, sản lượng một điểm cất cánh và tình hình lãi lỗ. Đây là số do Meituan tự nêu trong phỏng vấn, không phải số trong báo cáo tài chính đã kiểm toán.',
  },
  {
    id: 'talent-park-coffee', publisher: 'Shenzhen Special Zone Daily · Shenzhen Government Online', title: 'Robot AI² Robotics pha cà phê tại Talent Park', date: '23/02/2026', tier: 'secondary',
    url: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12650660.html',
    scope: 'Ảnh và chú thích xác nhận robot của AI² Robotics pha cà phê cho khách tại Talent Park. Không suy ra model phần cứng, sản lượng, giờ mở cửa hoặc mức tự động hóa từ ảnh.',
  },
  {
    id: 'ai2-alphabot-cube', publisher: 'AI² Robotics', title: 'AlphaBot Cube — mô hình pha chế, bán lẻ và tương tác', date: 'Truy cập 23/09/2026', tier: 'primary',
    url: 'https://ai2robotics.com/en/about/',
    scope: 'Nhà sản xuất mô tả AlphaBot Cube tích hợp pha chế đồ uống, bán lẻ và tương tác trong không gian thương mại, du lịch. Nguồn này giải thích mô hình; bằng chứng có robot tại Talent Park nằm ở talent-park-coffee.',
  },
  {
    id: 'talent-park-pm01', publisher: 'Shenzhen Daily · Nanshan Government Online', title: 'EngineAI PM01 chạy ngoài trời tại Talent Park', date: '12/03/2025', tier: 'secondary',
    url: 'https://www.szns.gov.cn/english/news/content/post_12073776.html',
    scope: 'Bài và ảnh ghi nhận PM01 chạy ngoài trời lần đầu tại Talent Park trong video do EngineAI công bố. Chỉ xác nhận hoạt động trình diễn, không khẳng định robot trực thường xuyên hay cung cấp dịch vụ trong công viên.',
  },
  {
    id: 'talent-park-tech-education', publisher: 'Phòng Giáo dục Nam Sơn · Shenzhen Government Online', title: 'Khu thực hành công nghệ cho thanh thiếu niên tại Talent Park', date: '01/06/2023', tier: 'primary',
    url: 'https://www.sz.gov.cn/ztfw/jyly/wyk/content/post_10623389.html',
    scope: 'Đơn vị tổ chức công bố khu thực hành khoảng 170 m² trong Talent Park có drone, RoboMaster, robot lập trình và hoạt động với cánh tay robot Dobot (越疆). Không xác nhận đời máy cụ thể hoặc lịch hoạt động hiện tại.',
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
    id: 'mixc-winshang', publisher: 'Winshang · Doanh Thương Võng', title: 'Vạn Tượng Thiên Địa: mô hình “MALL + phố” đầu tiên', date: '09/03/2018', tier: 'secondary',
    url: 'https://m.winshang.com/news635181.html',
    scope: 'Ngày khai trương 27/09/2017 và tổng diện tích sàn 23 vạn m². Bài ghi 12 toà flagship độc lập, trang của quận ghi 10; slide theo số của quận. Wikipedia tiếng Trung ghi 260.000 m², chưa rõ vì sao chênh.',
  },
  {
    id: 'mixc-elephant-hypebeast', publisher: 'Hypebeast', title: 'Florentijn Hofman x AllRightsReserved: Bubblecoat Elephant tại Vạn Tượng Thiên Địa', date: '07/09/2017', tier: 'secondary',
    url: 'https://hypebeast.cn/2017/9/florentijn-hofman-x-allrightsreserved-bubblecoat-elephant',
    scope: 'Kích thước voi (dài 12 m, cao 7,5 m, vòi ~24 m), nặng 30 tấn, phun nước định kỳ, mô hình kỷ niệm bán từ 27/09/2017 và tiền đợt đầu góp cho Orbis. Số do đơn vị tổ chức công bố trước khai trương.',
  },
  {
    id: 'huawei-flagship-21jingji', publisher: '21 Thế kỷ Kinh tế Đạo báo', title: 'Cửa hàng flagship đầu tiên của Huawei ra mắt', date: '30/09/2019', tier: 'secondary',
    url: 'https://m.21jingji.com/article/20190930/herald/b863a1fefb34e9921ee32e624bf40706.html',
    scope: 'Ngày mở 28/09/2019, khoảng 1.300 m² và phủ sóng 5G. Việc xe điện được trưng bày trong cửa hàng là quan sát của đoàn tháng 08/2026, không có trong bài.',
  },
  {
    id: 'haus-nowhere-winshang', publisher: 'Winshang · Doanh Thương Võng', title: 'HAUS NOWHERE lớn nhất thế giới đến Thâm Quyến', date: '05/09/2024', tier: 'secondary',
    url: 'https://m.winshang.com/news727349.html',
    scope: 'Ngày mở 05/09/2024, thứ ba sau Seoul và Thượng Hải, 6.914 m² trên ba tầng, 21 thương hiệu dạng cửa hàng trong cửa hàng; tượng người khổng lồ ở lối vào và bò rừng ở tầng 3.',
  },
  {
    id: 'mixc-disney-2026', publisher: 'Trung Nhiếp Tại Tuyến', title: 'Triển lãm chủ đề Disney ở Vạn Tượng Thiên Địa hút khách dịp hè', date: '15/08/2026', tier: 'secondary',
    url: 'https://m.mp.oeeee.com/n/video/BAAFRD0000202608151644283',
    scope: 'Khu trưng bày chủ đề Disney Hong Kong ở quảng trường flagship: Woody, Buzz Lightyear, lâu đài xếp khối. Bài không ghi ngày kết thúc triển lãm.',
  },
  {
    id: 'didi-sam-deck', publisher: 'Nguyễn Trương Tấn Sâm · Ahamove',
    title: 'Trải nghiệm Didi ở Thẩm Quyến — bài chia sẻ study tour', date: '22/09/2026', tier: 'trip',
    url: 'https://drive.google.com/file/d/1dGdoSl5wS7ePTU9mV1scqe05KXf6nah6/view',
    scope: 'Ghi nhận trực tiếp 11 chuyến Didi của đoàn: ảnh màn hình app, ảnh đường phố và quan sát cá nhân. Số thị trường của bài v5 có nguồn riêng ở các mục didi-* bên dưới; ảnh màn hình là bằng chứng một lần, không phải phép đo lặp lại.',
  },
  // Nguồn của script "Một cuốc xe Didi ở Thẩm Quyến" v5 (docs/didi-script-v5-present.md), số [n] trong ngoặc là số trong script.
  {
    id: 'didi-q2-2026', publisher: 'BigGo Finance', title: 'Didi quý II/2026: hơn 55 triệu đơn/ngày, 5,052 tỷ đơn, GTV lõi 133,9 tỷ NDT', date: '08/2026', tier: 'secondary',
    url: 'https://finance.biggo.com/news/806884eb-f12d-4346-8047-e6d1d30713a5',
    scope: '[1] Dẫn lại báo cáo quý II/2026 Didi công bố 14/08/2026: số đơn/ngày, tổng đơn quý (+13,2%) và giá trị giao dịch lõi (+22,2%). Số do Didi tự công bố.',
  },
  {
    id: 'didi-h1-2026-caixin', publisher: 'Caixin Global', title: 'Didi swings to quarterly profit but overseas push weighs on first-half results', date: '14/08/2026', tier: 'secondary',
    url: 'https://www.caixinglobal.com/2026-08-14/didi-swings-to-quarterly-profit-but-overseas-push-weighs-on-first-half-results-102474321.html',
    scope: '[2] Didi lãi quý II nhưng lỗ nửa đầu 2026; mảng quốc tế (Brazil, Mexico) kéo lợi nhuận xuống.',
  },
  {
    id: 'vn-ridehail-q1-2026', publisher: 'VnEconomy · dẫn Mordor Intelligence', title: 'Thị trường taxi Việt quý I/2026: xe xanh áp đảo, tái cấu trúc thị phần', date: '2026', tier: 'secondary',
    url: 'https://vneconomy.vn/automotive/thi-truong-taxi-viet-quy-i2026-xe-xanh-ap-dao-tai-cau-truc-thi-phan.htm',
    scope: '[3] Thị phần taxi công nghệ Q1/2026 (Green SM 54,51% · Grab 40,92% · Be 4,57%) và 153,26 triệu chuyến. Là ước tính của hãng nghiên cứu, không phải số các hãng gọi xe công bố.',
  },
  {
    id: 'vn-delivery-2w-062026', publisher: 'CafeBiz', title: 'Green SM Express vượt Grab, Be về thị phần GMV giao hàng xe hai bánh', date: '07/2026', tier: 'secondary',
    url: 'https://cafebiz.vn/green-sm-express-vuot-grab-be-ve-thi-phan-gmv-giao-hang-xe-hai-banh-176260724103344156.chn',
    scope: '[5] Thị phần GMV giao hàng 2 bánh tháng 6/2026, ba bên chênh nhau chưa tới 1 điểm %. Chỉ dùng làm dải mốc, không phân tích thêm.',
  },
  {
    id: 'amap-light-xinhua', publisher: 'Tân Hoa Xã', title: 'Amap chính thức ra mắt tính năng đếm ngược đèn giao thông, hỗ trợ hơn 80.000 nút giao', date: '15/08/2022', tier: 'secondary',
    url: 'https://www.news.cn/tech/20220815/fb3ad5003d834046b7c4d0d2e1f7c2a3/c.html',
    scope: '[8] Mốc ra mắt và độ phủ hơn 80.000 nút giao ở gần 240 thành phố lúc ra mắt; nhắc bằng giọng nói khi đèn đỏ còn khoảng 5 giây; nút giao đông thì hiện số nhịp đèn phải chờ.',
  },
  {
    id: 'amap-light-ithome-2026', publisher: 'IT之家', title: 'Đếm ngược đèn giao thông của Amap ra nước ngoài; đã phủ gần 500.000 nút giao', date: '20/05/2026', tier: 'secondary',
    url: 'https://www.ithome.com/0/952/703.htm',
    scope: '[8b] Độ phủ hiện tại: gần 500.000 nút giao ở Trung Quốc đại lục, Hồng Kông, Ma Cao, Đài Loan.',
  },
  {
    id: 'amap-light-taibo', publisher: '泰伯网 (Taibo)', title: 'Cơ chế đếm ngược đèn của Amap: suy ra chu kỳ đèn từ quỹ đạo xe', date: '08/03/2023', tier: 'secondary',
    url: 'https://www.taibo.cn/p/90332',
    scope: '[9] Dẫn bằng sáng chế của Amap: suy chu kỳ đèn từ quỹ đạo của các xe dừng chờ đèn. Bài cũng ghi một số địa phương có cơ quan giao thông chia sẻ thêm dữ liệu đèn cho nhà cung cấp bản đồ — nên không được nói là "không đấu nối gì hết".',
  },
  {
    id: 'amap-light-yantai', publisher: '大众网 · Yên Đài', title: 'Cảnh sát giao thông Yên Đài cùng Amap làm 235 đèn giao thông “biết nói” — lần đầu tiên cả nước', date: '09/12/2019', tier: 'secondary',
    url: 'https://yantai.dzwww.com/xinwen/ytxw/ytsh/201912/t20191209_17203181.htm',
    scope: 'Yên Đài là nơi đầu tiên cảnh sát giao thông đưa dữ liệu tín hiệu thật của 235 nút giao lên Amap, từ 10/12/2019. Đây là trường hợp chia sẻ dữ liệu, không phải cách Amap làm ở phần lớn nút giao.',
  },
  {
    id: 'amap-light-police-2023', publisher: '快科技 · qua 腾讯新闻', title: 'Amap hợp tác cảnh sát giao thông nhiều địa phương về dữ liệu đèn tín hiệu', date: '30/11/2023', tier: 'secondary',
    url: 'https://news.qq.com/rain/a/20231130A09LTK00',
    scope: 'Liệt kê Tây An, Lan Châu, Tuyền Châu, Tế Ninh, Bắc Kinh Diệc Trang là các nơi cảnh sát giao thông hợp tác với Amap. Không nêu số nút giao của từng nơi.',
  },
  {
    id: 'didi-commission-ithome', publisher: 'IT之家', title: 'Didi hạ trần hoa hồng mỗi đơn từ 29% xuống 27%, công khai giá toàn trình', date: '08/05/2026', tier: 'secondary',
    url: 'https://www.ithome.com/0/947/975.htm',
    scope: '[10] Trần hoa hồng mỗi đơn 29% → 27%; tài xế từ 50 đơn/tháng được bảo đảm hoa hồng trung bình tháng không quá 25% (hoàn phần vượt qua 返佣宝). Công bố trong đợt các nền tảng thực hiện danh sách cấm về thuật toán của Cục Quản lý Không gian mạng.',
  },
  {
    id: 'didi-driver-bill-workercn', publisher: '中工网 (Báo Công nhân Trung Quốc)', title: 'Thương lượng thuật toán: hoa hồng của tài xế gọi xe có “sổ rõ ràng”', date: '31/05/2026', tier: 'secondary',
    url: 'https://www.workercn.cn/c/2026-05-31/8813487.shtml',
    scope: '[11] App tài xế xem được thu nhập, thưởng, tỷ lệ hoa hồng từng đơn (có từ 2022) và mục hoa hồng trung bình 7 ngày, tháng trước; trần 27% nằm trong «Thoả thuận về thuật toán và quy tắc lao động» Didi ký cuối 2025 — Công đoàn TP Bắc Kinh cùng nhiều sở ngành trực tiếp thúc đẩy, Tổng Công đoàn chỉ đạo chung (统筹指导), 7 đại diện tài xế tham gia thương lượng; bài không ghi rõ bên ký với Didi. Phần hoa hồng vượt 25% tự động trả lại tài khoản tài xế vào tháng sau. Hoá đơn tài xế bản mới thí điểm ở 21 thành phố. Mức giảm 68% khiếu nại liên quan hoa hồng là số giám sát của Ủy ban Giao thông Bắc Kinh, tính đến đầu 01/2026, trên 154.000 tài xế Didi ở Bắc Kinh, so với trước khi thương lượng (không nêu khoảng thời gian).',
  },
  {
    id: 'vn-driver-transparency-thuonggia', publisher: 'Thương Gia', title: 'Grab và “khoảng trống” minh bạch trong bài toán giá cước', date: '15/09/2026', tier: 'secondary',
    url: 'https://thuonggiaonline.vn/grab-va-khoang-trong-minh-bach-trong-bai-toan-gia-cuoc-post572857.html',
    scope: '[11b] Ở Việt Nam tài xế thấy giá cuốc và các khoản trừ từng cuốc, nhưng không thấy rõ tỷ lệ khấu trừ thực tế; phí nền tảng Grab thay đổi theo cuốc. Chỉ nói về Grab, không phải mọi nền tảng.',
  },
  {
    id: 'didi-carbon-21jingji', publisher: '21世纪经济报道', title: 'Nền tảng lượng hoá hành vi xanh; sản phẩm carbon 碳元气 của Didi phủ 298 thành phố', date: '18/06/2026', tier: 'secondary',
    url: 'https://m.21jingji.com/article/20260618/herald/267c9983aa2ee5d8b4ee9a785089a8f9.html',
    scope: '[12] Didi tự phát triển sản phẩm 碳普惠 “碳元气”, đã triển khai ở 298 thành phố; người dùng tích điểm qua đi lại xanh. Lượng CO₂ giảm mỗi chuyến là số Didi ước tính. Số “1,6 tỷ lượt xe điện, giảm 240.000 tấn” trong bài là của khách doanh nghiệp, không phải của 碳元气.',
  },
  {
    id: 'didi-carbon-wuhan', publisher: 'Sở Sinh thái Môi trường Vũ Hán', title: 'Didi tham gia 碳普惠 Vũ Hán: điểm carbon đổi phiếu gọi xe, phiếu đi chung', date: '05/11/2024', tier: 'primary',
    url: 'https://hbj.wuhan.gov.cn/hjxw/202411/t20241105_2480145.html',
    scope: 'Ở Vũ Hán, điểm carbon của Didi đổi được phiếu giảm giá gọi xe và phiếu đi chung xe với nhiều mệnh giá; thoả thuận có hiệu lực từ 22/09/2024. Chỉ nói Vũ Hán, không phải mọi thành phố.',
  },
  {
    id: 'didi-carbon-beijing', publisher: 'Sở Sinh thái Môi trường Bắc Kinh · hồ sơ dự án của 北京桔行科技', title: 'Hồ sơ thiết kế dự án 碳普惠 đi chung xe của Didi tại Bắc Kinh (V5.0)', date: '12/05/2024', tier: 'primary',
    url: 'https://sthjj.beijing.gov.cn/bjhrb/index/xxgk69/zfxxgk43/fdzdgknr2/325924085/436464568/2024060610273424514.pdf',
    scope: 'Dự án đi chung xe (拼车, 顺风车) từ 03/09/2023. Mốc so sánh là người dùng tự đi ô tô một mình; hệ số 0,104 kgCO₂/người·km. Người dùng nhận “滴碳能量” đúng bằng lượng giảm phát thải để đổi quà; phần giảm phát thải được xác nhận đem bán trên thị trường carbon để bù chi phí thưởng. Chỉ áp cho dự án đi chung xe ở Bắc Kinh — không dùng làm mốc so sánh cho chuyến xe điện đi riêng.',
  },
  {
    id: 'sh-carbon-credit', publisher: 'Sở Sinh thái Môi trường Thượng Hải', title: 'Hỏi đáp về điểm carbon 碳普惠 Thượng Hải', date: '30/10/2024', tier: 'primary',
    url: 'https://sthj.sh.gov.cn/hbzhywpt1098/ydqhbh/tph/20241030/a0fd51d73510459e8211da564ce271f5.html',
    scope: '[13] Mỗi lượt xe buýt giảm 422g CO₂, tàu điện ngầm 97g/km, xe đạp công cộng 98g/km; giảm 1g = 1 điểm. Điểm có hạn 2 năm, đổi được lì xì nhân dân tệ số, thẻ hội viên nền tảng nghe nhìn, các loại phiếu ưu đãi, quà lưu niệm; trang không nêu 1 điểm bằng bao nhiêu tiền. Tham gia qua app 随申办市民云. Đây là quy định của Thượng Hải — 碳普惠 do từng địa phương ban hành, chưa có văn bản thống nhất cấp quốc gia.',
  },
  {
    id: 'sz-lowcarbon-planet-gov', publisher: 'Cổng TTĐT Chính quyền TP Thẩm Quyến', title: 'Ra mắt nền tảng 碳普惠 đầu tiên của Thẩm Quyến “低碳星球”', date: '12/2021', tier: 'primary',
    url: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_9462083.html',
    scope: '[13b] Mini program WeChat, “nền tảng vận hành 碳普惠 được cấp phép đầu tiên của Thẩm Quyến”, ra mắt 17/12/2021 tại Diễn đàn Thành phố Carbon thấp quốc tế Thẩm Quyến lần 9. Bốn đơn vị cùng làm: 光明日报全媒体, Sở Sinh thái Môi trường Thẩm Quyến, Sở Giao dịch quyền phát thải Thẩm Quyến, Tencent (lo kỹ thuật, vận hành). Xe buýt điện qua 腾讯乘车码 giảm 26,9g CO₂/người/km, tàu điện ngầm 46,8g; điểm đổi quà qua cửa hàng điểm của 腾讯乘车码. Không nêu giao thông là nguồn phát thải lớn nhất thành phố.',
  },
  {
    id: 'sz-lowcarbon-planet-tencent', publisher: '腾讯SSV · qua 腾讯新闻', title: 'Hơn 1 triệu người dân Thẩm Quyến tích điểm carbon qua “低碳星球”', date: '12/12/2022', tier: 'primary',
    url: 'https://news.qq.com/rain/a/20221212A07QZE00',
    scope: 'Số người dùng do chính Tencent công bố: hơn 1 triệu người dân Thẩm Quyến tích điểm carbon qua 低碳星球. Cùng ngày hoàn tất giao dịch 碳普惠 đầu tiên; khối lượng và bên mua không xác minh được.',
  },
  {
    id: 'vn-qd42-chinhphu', publisher: 'Cổng TTĐT Chính phủ', title: 'Quyết định 42/2026/QĐ-TTg ban hành danh mục lĩnh vực, cơ sở phát thải khí nhà kính phải kiểm kê (cập nhật)', date: '10/08/2026', tier: 'primary',
    url: 'https://chinhphu.vn/?docid=219154&pageid=27160',
    scope: '[14] Văn bản gốc: ban hành 10/08/2026, hiệu lực 25/09/2026, Phó Thủ tướng Hồ Quốc Dũng ký; thay Quyết định 13/2024/QĐ-TTg. Giao thông vận tải nay xếp chung vào “ngành xây dựng (gồm lĩnh vực xây dựng và lĩnh vực giao thông vận tải)” ở Phụ lục III.',
  },
  {
    id: 'vn-qd42-2026', publisher: 'VnEconomy', title: 'Năm 2026 thêm hàng trăm cơ sở phát thải khí nhà kính phải thực hiện kiểm kê', date: '12/08/2026', tier: 'secondary',
    url: 'https://vneconomy.vn/nam-2026-them-hang-tram-co-so-phat-thai-khi-nha-kinh-phai-thuc-hien-kiem-ke.htm',
    scope: '[14b] 2.441 cơ sở phải kiểm kê, tăng 275 so với 2.166 cơ sở năm 2024. Theo ngành: Công Thương 1.916, Xây dựng 411, Nông nghiệp và Môi trường 61, Giao thông vận tải 53. Danh sách 53 cơ sở GTVT (Phụ lục III.A của văn bản gốc) chủ yếu là hãng bay, nhà xe khách, vận tải thuỷ; dò bằng OCR không thấy nền tảng giao hàng nào — có sai số OCR.',
  },
  {
    id: 'vn-nd06-2022', publisher: 'Cổng TTĐT Chính phủ', title: 'Nghị định 06/2022/NĐ-CP quy định giảm nhẹ phát thải khí nhà kính và bảo vệ tầng ô-dôn', date: '07/01/2022', tier: 'primary',
    url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2022/01/06-nd.signed.pdf',
    scope: '[14c] Điều 6 khoản 1: cơ sở phải kiểm kê là cơ sở phát thải từ 3.000 tấn CO₂ tương đương/năm, hoặc thuộc các trường hợp, trong đó có “công ty kinh doanh vận tải hàng hoá có tổng tiêu thụ nhiên liệu hằng năm từ 1.000 TOE trở lên”. Nghị định 119/2025 không sửa điều này. Mẫu báo cáo kiểm kê (Mẫu 06) chỉ yêu cầu nguồn phát thải “trong phạm vi hoạt động của cơ sở”; không văn bản nào ghi chữ “phạm vi 3”.',
  },
  {
    id: 'vn-nd119-2025', publisher: 'Cổng TTĐT Chính phủ', title: 'Nghị định 119/2025/NĐ-CP sửa đổi Nghị định 06/2022/NĐ-CP', date: '09/06/2025', tier: 'primary',
    url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/6/119-nd.signed.pdf',
    scope: '[14d] Cơ sở trong danh mục làm báo cáo kiểm kê định kỳ hai năm một lần, gửi UBND cấp tỉnh trước 31/3; báo cáo giảm nhẹ phát thải cấp cơ sở hằng năm, gửi trước 31/3 kể từ 2027. Hạn ngạch phát thải hiện chỉ phân bổ cho nhiệt điện, sắt thép, xi măng — chưa có vận tải.',
  },
  {
    id: 'vn-toe-factor', publisher: 'Bộ Công Thương · tietkiemnangluong.com.vn', title: 'Hệ số chuyển đổi năng lượng áp dụng cho các cơ sở sử dụng năng lượng trọng điểm', date: '06/05/2016', tier: 'primary',
    url: 'https://tietkiemnangluong.com.vn/tin-tuc/tai-lieu/t25077/he-so-chuyen-doi-nang-luong-ap-dung-cho-cac-co-so-su-dung-nang-luong-trong-diem',
    scope: '[14e] Dầu DO: 0,88 TOE/1.000 lít. Quy đổi 1.000 TOE ≈ 1,14 triệu lít dầu diesel là do tụi em tự tính từ hệ số này, không có sẵn trong nguồn.',
  },
  {
    id: 'sz-charging-gov', publisher: 'Cổng TTĐT Chính quyền TP Thẩm Quyến', title: 'Thẩm Quyến có 1.057 trạm siêu sạc, hơn 487.000 trụ sạc', date: '11/08/2025', tier: 'primary',
    url: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12322460.html',
    scope: '[15] Số liệu tới hết nửa đầu 2025: 1.057 trạm siêu sạc, hơn 487.000 trụ sạc; từ cuối 03/2024 số trạm siêu sạc đã vượt số trạm xăng (nguồn chính thức nói “đi đầu”, không nói “đầu tiên trên thế giới”); trụ nhanh nhất 600 kW.',
  },
  {
    id: 'sz-charging-people', publisher: 'Nhân Dân Nhật Báo', title: 'Siêu sạc Thẩm Quyến: “một giây một kilômét”', date: '22/10/2024', tier: 'secondary',
    url: 'https://www.peopleapp.com/column/30047064794-500005852700',
    scope: '[16] Khẩu hiệu “một giây một kilômét” gắn với trụ siêu sạc từ 480 kW mỗi súng. Là cách nói quảng bá, không phải thông số đo độc lập.',
  },
  {
    id: 'sz-taxi-sznews-2019', publisher: '深圳新闻网', title: '21.689 xe! Số taxi thuần điện đang chạy ở Thẩm Quyến đứng đầu thế giới', date: '19/09/2019', tier: 'secondary',
    url: 'https://www.sznews.com/news/content/2019-09/19/content_22480112.htm',
    scope: '[17] Toàn thành phố có 21.689 taxi, đã điện hoá hoàn toàn. Số liệu năm 2019.',
  },
  {
    id: 'sz-ridehail-ev-2023', publisher: 'Cổng TTĐT Chính quyền TP Thẩm Quyến · 深圳特区报', title: '96.000 xe công nghệ thuần điện: Thẩm Quyến điện hoá toàn bộ xe công nghệ', date: '15/11/2023', tier: 'primary',
    url: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_10960508.html',
    scope: '[17b] “9,6 vạn xe công nghệ thuần điện, đưa Thẩm Quyến thành thành phố đầu tiên trên thế giới điện hoá toàn bộ xe công nghệ”. Đây là cách nói của báo chính quyền thành phố. Tới 30/06/2025 thành phố có 131.715 giấy phép xe công nghệ, nhưng báo cáo đó không nêu tỷ lệ xe điện.',
  },
  {
    id: 'hn-lez-nq57', publisher: 'HĐND TP Hà Nội · qua hhtp.gov.vn', title: 'Nghị quyết 57/2025/NQ-HĐND quy định thực hiện vùng phát thải thấp', date: '26/11/2025', tier: 'primary',
    url: 'https://www.hhtp.gov.vn/vi/tin-tuc/quy-dinh-thuc-hien-vung-phat-thai-thap-tren-dia-ban-thanh-pho-ha-noi-2684.html',
    scope: '[18] Nguyên văn: xe mô tô, xe gắn máy dùng nhiên liệu hoá thạch kinh doanh trên nền tảng ứng dụng “cấm lưu thông trong vùng phát thải thấp”; xe máy xăng khác cấm theo khung giờ. Lộ trình: thí điểm từ 01/07/2026 tới 31/12/2027 trong 9 phường vành đai 1 (Hai Bà Trưng, Cửa Nam, Hoàn Kiếm, Ô Chợ Dừa, Văn Miếu - Quốc Tử Giám, Ba Đình, Giảng Võ, Ngọc Hà, Tây Hồ); từ 2028 thêm 5 phường vành đai 2; từ 2030 tới vành đai 3 (36 phường, xã). Biện pháp kiểm soát: camera, màu nền biển số, mã QR, kết nối VNeID và iHanoi. Mức phạt cụ thể chưa xác minh được.',
  },
  {
    id: 'hn-lez-qd3273-tuoitre', publisher: 'Tuổi Trẻ', title: 'Hà Nội công bố đề án vùng phát thải thấp áp dụng từ ngày 1/7', date: '30/06/2026', tier: 'secondary',
    url: 'https://tuoitre.vn/ha-noi-cong-bo-de-an-vung-phat-thai-thap-ap-dung-tu-ngay-1-7-100260630153418275.htm',
    scope: '[18b] Quyết định 3273 của UBND TP: từ 01/07/2026 áp dụng ở khu vực 1, 2 thuộc phường Hoàn Kiếm. Khu vực 1 cấm toàn bộ mô tô, xe gắn máy, ô tô từ 19h đến 24h thứ Sáu, thứ Bảy, Chủ nhật. Giai đoạn 1 (01/07–31/12/2026): xe máy xăng kinh doanh trên nền tảng ứng dụng kết nối vận tải chỉ “khuyến khích hạn chế hoạt động”. Giai đoạn 2 (01/01–31/12/2027): không cho phép lưu thông trong khu vực 1, 2, 3 thuộc phường Hoàn Kiếm và Cửa Nam — không phải toàn vùng phát thải thấp.',
  },
  {
    id: 'hn-lez-bnews', publisher: 'BNews · TTXVN', title: 'Hà Nội thí điểm vùng phát thải thấp: cấm xe cơ giới khu vực 1', date: '30/06/2026', tier: 'secondary',
    url: 'https://bnews.vn/ha-noi-thi-diem-vung-phat-thai-thap-cam-xe-co-gioi-khu-vuc-1/426957.html',
    scope: 'Khu vực 1 (phố đi bộ, chợ đêm quanh Hồ Gươm) giới hạn bởi 12 phố: Tràng Tiền, Hàng Khay, Lê Thái Tổ, Hàng Đào, Hàng Ngang, Hàng Buồm, Mã Mây, Hàng Bạc, Hàng Mắm, Nguyễn Hữu Huân, Lý Thái Tổ, Ngô Quyền. Khu vực 2 là phố cổ bên trong vòng Tràng Thi – Hàng Bông – Phùng Hưng – Trần Nhật Duật – Trần Quang Khải (ranh giới khu vực 2 mới đối chiếu qua bản tóm tắt).',
  },
  {
    id: 'hn-lez-vanhoa-shipper', publisher: 'Báo Văn Hoá · qua vietnam.vn', title: 'Hà Nội thí điểm vùng phát thải thấp: shipper, xe tải nhỏ và hộ kinh doanh cần lưu ý gì', date: '02/07/2026', tier: 'secondary',
    url: 'https://www.vietnam.vn/ha-noi-thi-diem-vung-phat-thai-thap-shipper-xe-tai-nho-va-ho-kinh-doanh-can-luu-y-gi',
    scope: 'Báo hiểu lệnh cấm xe máy xăng chạy app gồm cả xe ôm công nghệ và shipper. Văn bản gốc không có chữ “giao hàng” hay “shipper”, chỉ ghi “kinh doanh trên nền tảng phần mềm ứng dụng hỗ trợ kết nối vận tải” — đây là cách hiểu của báo.',
  },
  {
    id: 'vgreen-swap-ktck', publisher: 'Kinh tế Chứng khoán', title: 'Loạt xe điện đổi pin bùng nổ thị trường 2026', date: '22/01/2026', tier: 'secondary',
    url: 'https://kinhtechungkhoan.vn/loat-xe-dien-doi-pin-bung-no-thi-truong-2026-vinfast-phu-tram-day-honda-tao-soc-voi-pin-0-dong-1424386.html',
    scope: '[19] V-Green khoảng 4.500 trạm đổi pin, mục tiêu 45.000; phí khoảng 9.000đ/pin/lần.',
  },
  {
    id: 'vinfast-swap-free-tuoitre', publisher: 'Tuổi Trẻ', title: 'VinFast miễn phí đổi pin xe máy điện đến giữa năm 2028', date: '09/02/2026', tier: 'secondary',
    url: 'https://tuoitre.vn/vinfast-mien-phi-sac-pin-o-to-den-dau-nam-2029-xe-may-dien-mien-phi-doi-pin-den-giua-nam-2028-20260209080709921.htm',
    scope: '[19b] Miễn phí đổi pin xe máy điện tới 30/06/2028: tối đa 20 lần/tháng cho người dùng cá nhân, không giới hạn cho tài xế nền tảng Xanh SM.',
  },
  {
    id: 'selex-swap-ndt', publisher: 'Người Đưa Tin', title: 'Danh sách xe máy điện đổi pin tại thị trường Việt Nam', date: '08/2026', tier: 'secondary',
    url: 'https://www.nguoiduatin.vn/danh-sach-xe-may-dien-doi-pin-tai-thi-truong-viet-nam-204260807045002722.htm',
    scope: '[20] Selex lắp tối đa 3 pin, đi khoảng 150 km, phí đổi 14.000đ/lần. Quãng đường là số nhà sản xuất công bố.',
  },
  {
    id: 'selex-camel2', publisher: 'Selex Motors', title: 'Thông số Selex Camel 2', date: '2025', tier: 'primary',
    url: 'https://selex.vn/selex-camel-2-2/',
    scope: 'Số nhà sản xuất công bố: tối đa 3 pin chạy 150km, đổi pin tại trạm 2 phút, sạc tại nhà 5–8 tiếng.',
  },
  {
    id: 'ahamove-selex-2025', publisher: 'Selex Motors', title: 'Ahamove tiên phong chuyển đổi 1.000 xe máy điện Selex', date: '17/06/2025', tier: 'primary',
    url: 'https://selex.vn/ahamove-tien-phong-chuyen-doi-1000-xe-may-dien-selex-dan-dau-xu-huong-giao-hang-xanh-tai-viet-nam/',
    scope: 'Thông cáo của Selex: Ahamove hợp tác triển khai 1.000 xe Selex Camel cho giao hàng, đợt đầu nhận 300 xe do Gopika vận hành. Là số công bố lúc ký, chưa đối chiếu số xe đang chạy hiện nay.',
  },
  {
    id: 'pony-sz-permit', publisher: 'Pony.ai · PR Newswire', title: 'Pony.ai granted Shenzhen’s first citywide permit for fully driverless commercial robotaxi operations', date: '31/10/2025', tier: 'primary',
    url: 'https://www.prnewswire.com/news-releases/ponyai-granted-shenzhens-first-citywide-permit-for-fully-driverless-commercial-robotaxi-operations-302600723.html',
    scope: '[21] Giấy phép robotaxi không người lái thương mại toàn thành phố Thẩm Quyến; triển khai đầu ở Nanshan, Tiền Hải, Bảo An. Thông cáo của chính Pony.ai.',
  },
  {
    id: 'didi-r2-uniteai', publisher: 'Unite.AI', title: 'Didi starts driverless trials with R2 robotaxi in Beijing and Guangzhou', date: '09/2026', tier: 'secondary',
    url: 'https://www.unite.ai/didi-starts-driverless-trials-with-r2-robotaxi-in-beijing-and-guangzhou/',
    scope: '[22] Didi mở thử nghiệm chở khách hoàn toàn không người lái với R2 từ 31/08/2026, đặt trong app Didi, tại Bắc Kinh và Quảng Châu. Là thử nghiệm, chưa phải dịch vụ thương mại đại trà.',
  },
  {
    id: 'europe-robotaxi-euronews', publisher: 'Euronews', title: 'From Madrid to Zagreb, Europe’s autonomous vehicles are multiplying', date: '18/09/2026', tier: 'secondary',
    url: 'https://www.euronews.com/next/2026/09/18/from-madrid-to-zagreb-europes-autonomous-vehicles-are-multiplying',
    scope: '[24] Ngày 10/09/2026: WeRide lấy giấy phép L4 đầu tiên của Tây Ban Nha (Madrid, với Uber); Pony.ai chạy chuyến không người lái có khách đầu tiên của châu Âu (Zagreb, với Verne).',
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
    id: 'mt-fy2023-eeo', publisher: 'Kinh tế Quan sát Võng', title: 'Báo cáo năm 2023 của Meituan: drone giao hơn 22 vạn đơn', date: '22/03/2024', tier: 'secondary',
    url: 'https://www.eeo.com.cn/2024/0322/646672.shtml',
    scope: 'Dẫn báo cáo năm 2023 của Meituan: tính đến cuối 2023 drone luỹ kế hơn 220.000 đơn, phủ văn phòng, khu dân cư, trường học, khu tham quan, công viên và y tế.',
  },
  {
    id: 'mt-fy2024', publisher: 'Meituan', title: 'Meituan công bố báo cáo năm 2024', date: '21/03/2025', tier: 'primary',
    url: 'https://www.meituan.com/news/NN250321082001991',
    scope: 'Tính đến cuối 2024, drone luỹ kế 450.000 đơn và xe tự hành 4,91 triệu đơn. Số tròn đúng, không có chữ “hơn”; Meituan tự công bố.',
  },
  {
    id: 'mt-q2-2025', publisher: 'Meituan', title: 'Báo cáo Q2 2025', date: '27/08/2025', tier: 'primary',
    url: 'https://www.meituan.com/news/NN250827125003917',
    scope: 'Tính đến cuối 06/2025, drone mở 64 tuyến ở Thâm Quyến, Bắc Kinh, Thượng Hải, Quảng Châu, Hong Kong, Dubai và luỹ kế hơn 600.000 đơn. Dùng làm mốc cùng kỳ để suy ra mức tăng tới 06/2026.',
  },
  {
    id: 'mt-q1-2026', publisher: 'Meituan', title: 'Báo cáo Q1 2026', date: '01/06/2026', tier: 'primary',
    url: 'https://www.meituan.com/news/NN260601238004976',
    scope: 'Drone giao thường xuyên ở Bắc Kinh, Thượng Hải, Thâm Quyến, Hong Kong, Dubai; luỹ kế hơn 900.000 đơn thương mại. Câu “đứng thứ hai thế giới” là Meituan tự xếp hạng, không nêu phương pháp nên không đưa lên slide.',
  },
  {
    id: 'sz-gov-lowalt-2024', publisher: 'Cổng thông tin Chính quyền TP Thâm Quyến', title: 'Kinh tế tầm thấp Thâm Quyến năm 2024', date: '17/01/2025', tier: 'primary',
    url: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_11964163.html',
    scope: 'Năm 2024: 776.000 chuyến drone chở hàng (tăng 27%), 250 tuyến drone, 483 cơ sở cất hạ cánh, hơn 1.700 doanh nghiệp trong chuỗi. “Cơ sở cất hạ cánh” có thể khác định nghĩa “điểm” ở các nguồn năm sau.',
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
  {
    id: 'trip-talent-station', publisher: 'Đoàn Ahamove', title: 'Ảnh trạm nhận hàng drone tại Talent Park', date: 'Chuyến đi 08/2026', tier: 'trip',
    url: 'https://drive.google.com/file/d/1JBcPcaP6QibrUfM1igZ224EPp2ayLBv4/view',
    scope: 'Ảnh do người dùng cung cấp trong thư viện chuyến đi, liên kết tại F9 của Outline Sharing. Ảnh cho thấy trạm Meituan tại Talent Park; tháng 08/2026 là mốc chuyến đi, không phải ngày chụp xác minh bằng EXIF.',
  },
]

const index = new Map(sources.map(source => [source.id, source]))
export const source = (id: string): Source => {
  const found = index.get(id)
  if (!found) throw new Error(`Thiếu nguồn cho id "${id}"`)
  return found
}
