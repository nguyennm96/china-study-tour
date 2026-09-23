// Hai trang đi sâu Hall 9 (Passive IoT) trong ghim IOTE: NFC và RFID là gì, rồi đặt vào hành trình một đơn Ahamove.
// Kiến thức kiểm chứng ngày 24/09/2026, mỗi ý có nguồn trong `sources` bên dưới.
// Ảnh của đoàn chụp tại Hall 9 (biển "9 Hall · Gate 15", booth 9A27); ảnh minh hoạ lấy từ Wikimedia Commons,
// giấy phép ghi ở public/media/places/SOURCES.md.

export const hall9Pages = [
  { key: 'basics', kicker: 'Hall 9 · NFC và RFID', title: 'Cùng một con chip. Khác tầm đọc.' },
  { key: 'ahamove', kicker: 'Hall 9 · Liên hệ Ahamove · Đề xuất để thảo luận', title: 'Chạm ở hai đầu. Quét cả loạt ở giữa.' },
] as const
export type Hall9Page = typeof hall9Pages[number]['key']

const photo = (file: string) => `/media/places/hall9/${file}`

export const hall9Principle = 'Chip và anten, không có pin. Máy đọc phát sóng, thẻ “mượn” chút điện từ sóng đó để gửi lại mã của nó.'

export const hall9Tech = [
  {
    key: 'nfc', name: 'NFC', verb: 'Chạm', range: 'Vài centimet',
    image: photo('nfc-alipay-tap-terminal-china.jpg'), focus: '40% 50%',
    credit: 'Đầu đọc Alipay “碰一下” · HualinXMN, CC BY-SA 4.0',
    points: ['Đọc từng thẻ một, phải chạm gần mới đọc: an toàn theo thiết kế.', 'Điện thoại thường đọc được, không cần máy riêng.', 'Ở Trung Quốc: Alipay Tap (7/2024), chạm là mở trang trả tiền hay gọi món, như thẻ trên bàn quán dim sum đoàn ăn tối ngày đầu.'],
  },
  {
    key: 'rfid', name: 'RFID UHF', verb: 'Quét cả loạt', range: 'Vài mét',
    image: photo('rfid-uhf-inlay-textile-label-peeled.jpg'), focus: '50% 55%',
    credit: 'Tem RFID bóc hở, thấy anten · Boevaya mashina, CC BY-SA 4.0',
    points: ['Đọc hàng trăm thẻ cùng lúc, không cần nhìn thấy thẻ, kể cả khi nằm trong thùng.', 'Cần súng đọc hoặc cổng đọc riêng; điện thoại không đọc được.', 'Tem rẻ khi mua nhiều. Đọc kém khi sát kim loại hoặc chất lỏng.'],
  },
] as const

export const hall9TeamPhotos = [
  { src: photo('iote-hall9-rfid-tags.jpg'), focus: '70% 40%', alt: 'Ảnh đoàn chụp tại Hall 9 IOTE: booth nhà sản xuất tem dán RFID, biển “RFID不干胶标签 · RFID Tag Manufacturer”, khách đứng kín', caption: 'Booth tem dán RFID' },
  { src: photo('iote-hall9-xcc.jpg'), focus: '45% 50%', alt: 'Ảnh đoàn chụp tại Hall 9 IOTE: booth XCC RFID với quầy trưng bày thẻ RFID và NFC', caption: 'Booth XCC RFID · thẻ RFID, NFC' },
] as const

/** Hành trình một đơn: NFC ở hai đầu (chạm bằng điện thoại), RFID ở giữa (quét hàng loạt ở hub, kho). */
export const hall9Flow = [
  { step: '01', where: 'Lấy hàng', tech: 'NFC', image: photo('nfc-tag-bus-stop-tap-phone.jpg'), focus: '50% 55%',
    credit: 'Thẻ NFC dán sẵn · J. R. McPherson, CC BY-SA 4.0',
    idea: 'Thẻ dán ở quầy. Tài xế chạm điện thoại để xác nhận đã tới và đã lấy hàng, thay cho chụp ảnh hay gọi điện.' },
  { step: '02', where: 'Hub chia chọn', tech: 'RFID', image: photo('rfid-portal-pallet-gate.jpg'), focus: '50% 60%',
    credit: 'Cổng đọc RFID · Geirvevle, CC BY-SA 3.0',
    idea: 'Kiện đi qua cổng là tự ghi nhận, không quét từng mã. Chất nhầm xe thì báo ngay. UPS và Delta đang làm cách này.' },
  { step: '03', where: 'Kho same-day', tech: 'RFID', image: photo('rfid-handheld-inventory-warehouse.jpg'), focus: '45% 40%',
    credit: 'Súng đọc RFID kiểm kho · U.S. Air Force, public domain',
    idea: 'Lia súng đọc qua cả kệ để đếm hàng trong vài giây. Decathlon và Uniqlo dùng để kiểm kho và tự thanh toán.' },
  { step: '04', where: 'Bàn giao', tech: 'NFC', image: photo('nfc-phone-tap-pos-terminal.jpg'), focus: '60% 45%',
    credit: 'Chạm điện thoại · HLundgaard, CC BY-SA 3.0',
    idea: 'Người nhận hoặc tài xế chạm vào thẻ trên túi, trên tủ nhận hàng để xác nhận bàn giao bằng một chạm.' },
] as const

export const hall9Reusable = 'Túi giữ nhiệt, thùng, xe lồng dùng lại: mỗi món một “căn cước” RFID để biết ai đang giữ, đã trả về chưa. Zara dùng lại một chip hơn 100 lần.'

export const hall9Checks = [
  'Bao nhiêu tài xế đang dùng điện thoại có NFC? Chưa đo.',
  'Đồ uống, thuốc, hàng kim loại làm RFID đọc kém.',
  'Chi phí nằm ở máy đọc và phần mềm, không nằm ở tem.',
] as const

export const hall9Order = 'Thứ tự nên thử, theo ghi chép của đoàn: NFC trên điện thoại tài xế trước, RFID khi có hub đủ lớn.'

export const hall9Sources = [
  'https://www.atlasrfidstore.com/rfid-insider/nfc-facts/',
  'https://redbeam.com/blog/rfid-vs-nfc',
  'https://www.gs1.org/standards/rfid/uhf-air-interface-protocol',
  'https://kr-asia.com/can-alipays-nfc-push-with-tap-disrupt-qr-code-payments',
  'https://www.rfidjournal.com/news/ups-delivers-next-phase-in-smart-package-smart-facility-initiative-with-rfid/221158/',
  'https://www.prnewswire.com/news-releases/delta-leverages-rfid-introduces-innovative-baggage-tracking-process-300259988.html',
  'https://www.impinj.com/library/blog/how-uniqlo-tracks-style-and-savings-with-rain-rfid',
  'https://www.inditex.com/itxcomweb/so/en/press/news-detail/7f71fd36-94ec-45fa-a2e6-6837b63f2903/inditex-deploys-rfid-technology-in-its-stores',
] as const
