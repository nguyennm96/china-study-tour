export type EvidenceMedia = {
  type: 'photo' | 'video'
  src: string
  poster?: string
  title: string
  caption: string
  credit: string
  sourceUrl: string
  focus: string[]
}

// Photos retain their original pixels and credits. Video streams from the publisher.
export const missionMedia: Record<string, EvidenceMedia[]> = {
  arrival: [{
    type: 'video',
    src: 'https://s3plus.meituan.net/v1/mss_f5ecef526b384cbaa1117230d53b4bd6/smart/%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%89%AA%E8%BE%91_0724_%E9%9D%99%E9%9F%B3_fxgx8c.mp4',
    poster: '/media/research/drone-video-poster.jpg',
    title: 'Xem drone bay và bàn giao hàng.',
    caption: 'Video giới thiệu M-Drone 4L Winch của Meituan. Bản dùng cáp hạ hàng; không mặc định là cấu hình Gen 4 năm 2023 hoặc tuyến Bay Park.',
    credit: 'Meituan · Our technology', sourceUrl: 'https://www.meituan.com/technology',
    focus: ['Quan sát cách mang tải', 'Cách giữ vị trí khi hạ hàng', 'Bàn giao giữa không trung và mặt đất'],
  }, {
    type: 'photo', src: '/media/research/bay-park-drone.jpg', title: 'Điểm nhận hàng tại Bay Park.',
    caption: 'Drone và tủ nhận hàng tại Shenzhen Bay Park, trong ảnh tư liệu do cổng Nanshan đăng ngày 03/06/2024.',
    credit: 'Shenzhen Daily / Nanshan Government · 2024', sourceUrl: 'https://www.szns.gov.cn/english/news/content/post_11367103.html',
    focus: ['Drone tiếp cận từ phía trên', 'Tủ nhận hàng ở mặt đất', 'Tách chuyến bay khỏi thao tác nhận của khách'],
  }],
  'city-rhythm': [{
    type: 'photo', src: '/media/research/futian-light-show.jpg', title: 'Nội dung chạy xuyên qua skyline.',
    caption: 'Ảnh light show quanh Civic Center, trong bài tổng kết dịp Tết 2023 của cơ quan quản lý đô thị Futian.',
    credit: 'Futian Government · 31/01/2023', sourceUrl: 'https://www.szft.gov.cn/ftxx/xwdt/bmgzdt/content/post_10401675.html',
    focus: ['Mỗi mặt dựng là một phần hình ảnh', 'Ánh xạ nội dung theo hình khối', 'Cùng một cảnh trên nhiều tòa nhà'],
  }],
  'signal-hunting': [{
    type: 'photo', src: '/media/research/huaqiangbei-seeed.jpeg', title: 'Module thật, ngay trên kệ.',
    caption: 'Ảnh cửa hàng Seeed tại Huaqiangbei trong bài công bố năm 2019. Các dòng module và bo phát triển được trưng bày theo sản phẩm.',
    credit: 'Seeed Studio · 2019', sourceUrl: 'https://www.seeedstudio.com/blog/2019/07/17/seeeds-first-ever-offline-store-opens-in-huangqiangbei%EF%BB%BF/',
    focus: ['Từ cảm biến tới bo phát triển', 'Module làm sẵn rút ngắn bước thử', 'Vẫn cần kiểm tra giao tiếp và điện áp'],
  }],
  'people-flow': [{
    type: 'photo', src: '/media/research/oct-mangrove-show.jpg', title: 'Khi cue trở thành một cảnh thật.',
    caption: 'Mangrove Groove tại OCT Bay, Shenzhen: nước, ánh sáng và người biểu diễn xuất hiện trong cùng một cảnh sân khấu.',
    credit: '© ECA2 · Julien PANIÉ', sourceUrl: 'https://www.eca2.com/cases/mangrove-groove/',
    focus: ['Vị trí tia nước so với người diễn', 'Ánh sáng trên nền nước', 'Phối hợp hiệu ứng vật lý'],
  }],
  horizon: [{
    type: 'photo', src: '/media/research/talent-isac-demo.png', title: 'Từ thử nghiệm tới màn hình giám sát.',
    caption: 'Ảnh buổi trình diễn 5G-A tại sự kiện ở Talent Park, do ZTE công bố ngày 14/05/2024. Đây là ảnh sự kiện, không phải dữ liệu đang chạy trực tiếp.',
    credit: 'ZTE × Shenzhen Mobile · 2024', sourceUrl: 'https://www.zte.com.cn/china/about/news/_7.html',
    focus: ['Đặt mục tiêu vào bối cảnh địa lý', 'Theo dõi quỹ đạo qua nhiều trạm', 'Chuyển quan sát thành cảnh báo'],
  }, {
    type: 'photo', src: '/media/research/talent-park-drone.jpg', title: 'Phía dưới mỗi chuyến bay là một trạm.',
    caption: 'Điểm cất cánh tuyến Coastal City – Talent Park trong ảnh khai trương Meituan công bố ngày 04/09/2023.',
    credit: 'Meituan · Tuyến Talent Park, 2023', sourceUrl: 'https://www.meituan.com/news/NN230904058001287',
    focus: ['Vị trí cất cánh được tổ chức riêng', 'Luồng di chuyển của người và thiết bị', 'Hạ tầng mặt đất của giao hàng tự hành'],
  }],
  'team-table': [{
    type: 'photo', src: '/media/research/swcac-interior.jpg', title: 'Ánh sáng đi qua nhiều tầng không gian.',
    caption: 'Sea World Culture and Arts Center, từ bộ ảnh hồ sơ của Maki and Associates. Dùng cùng sơ đồ khái niệm ở trang sau để đọc các lớp công trình.',
    credit: 'Maki and Associates · SWCAC', sourceUrl: 'https://www.maki-and-associates.co.jp/projects/SZC?lang=en',
    focus: ['Khoảng thông tầng và cầu thang', 'Ánh sáng qua mặt kính lớn', 'Kết nối thị giác giữa các cao độ'],
  }],
}
