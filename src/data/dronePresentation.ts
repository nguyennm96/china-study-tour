const tripMedia = '/media/trip/drone/'
export const droneSheetUrl = 'https://docs.google.com/spreadsheets/d/1kU_8BZwFz49gIsoyGRuZT7ivJnuTg7NM_SwKiKhi7CE/edit?gid=1775856938#gid=1775856938&range=A9:G9'

export type DroneMedia = {
  kind: 'image' | 'video'
  src: string
  poster?: string
  alt: string
  caption: string
  url: string
  /** Khung ảnh khi cắt theo tỷ lệ ô phim; không sửa nội dung tư liệu gốc. */
  objectPosition?: string
}

export const droneMedia = {
  droneOrder: {
    kind: 'video', src: `${tripMedia}drone-order.mp4`, poster: `${tripMedia}drone-order-poster.jpg`,
    alt: 'Video người dùng cung cấp: thao tác đặt đơn giao bằng drone qua Meituan.',
    caption: 'Đặt đơn drone qua Meituan', url: '',
  },
  order: {
    kind: 'image', src: '/media/illustrations/meituan-order.png', objectPosition: '50% 50%',
    alt: 'Minh hoạ thao tác đặt món qua Meituan trên điện thoại, không phải ảnh màn hình ứng dụng thật.',
    caption: 'Mini-program trên WeChat', url: '',
  },
  station: {
    kind: 'image', src: `${tripMedia}station.jpg`, objectPosition: '50% 78%',
    alt: 'Trạm Meituan tại Talent Park, có khu vực nhận hàng và giá trả hộp bên cạnh.',
    caption: 'Trạm nhận · Talent Park',
    url: 'https://drive.google.com/file/d/1JBcPcaP6QibrUfM1igZ224EPp2ayLBv4/view',
  },
  locker: {
    kind: 'image', src: `${tripMedia}locker.jpg`, objectPosition: '50% 55%',
    alt: 'Người nhận lấy hộp đồ ăn từ khoang tủ Meituan đang mở; bên cạnh là hướng dẫn chạm NFC.',
    caption: 'Lấy hàng từ khoang tủ',
    url: 'https://drive.google.com/file/d/1jwMSVMX2B8VMO-WCv_synn86xyiMcibO/view',
  },
  landing: {
    kind: 'video', src: `${tripMedia}landing.mp4`, poster: `${tripMedia}landing-poster.jpg`,
    alt: 'Video của đoàn: drone mang hộp hàng hạ xuống nóc trạm tại Talent Park.',
    caption: 'Drone hạ cánh · Talent Park',
    url: 'https://drive.google.com/file/d/1__4EUDrAzgLo0apI189OE-YOLWHfS6FM/view',
  },
  rider: {
    kind: 'image', src: `${tripMedia}rider.jpg`, objectPosition: '50% 45%',
    alt: 'Rider Meituan trên xe hai bánh, mang túi giao hàng tại Nanshan.',
    caption: 'Rider Meituan · Nanshan',
    url: 'https://drive.google.com/file/d/1yF5D_xnS0Omwa5LRmwBl3IOvUL-XjdfN/view',
  },
  ramp: {
    kind: 'video', src: `${tripMedia}rider-ramp.mp4`, poster: `${tripMedia}rider-ramp-poster.jpg`,
    alt: 'Video của đoàn: rider điều khiển xe đi lên đường dốc cạnh cầu thang.',
    caption: 'Rider đi qua đường dốc · 8 giây',
    url: 'https://drive.google.com/file/d/1yyzuE-YUC3eAmn1kLEIRxICZuXQ6NGj1/view',
  },
} satisfies Record<string, DroneMedia>
