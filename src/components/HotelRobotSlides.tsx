import { ArrowRight, Brain, Eye, BatteryCharging, Bell, Buildings, CheckCircle, City, Cloud, Coins, Cpu, Door, Elevator, ForkKnife, MapTrifold, Package, Path, PersonSimpleWalk, Robot, Virus, WifiHigh } from '@phosphor-icons/react'
import { hotelInfrastructure, hotelRobotCore, hotelRobotPages, hotelRobotDrivers, hotelRobotOutdoorNote, hotelRobotShenzhenPhotos, hotelRobotTimeline, hotelRobotFlow, hotelRobotVideo, type HotelRobotPage } from '../data/hotelRobot'
import './HotelRobotSlides.css'

const icons = { task: Package, map: MapTrifold, elevator: Elevator, wifi: WifiHigh, battery: BatteryCharging, human: PersonSimpleWalk }
const driverIcons = { labor: Coins, covid: Virus, hardware: Cpu, city: City }
const journeyIcons = [ForkKnife, Cloud, Package, Robot, Bell, CheckCircle]
const art = '/media/illustrations/subjects-2d/hotel-robot.png'
function RobotArt() { return <img className="hotel-art" src={art} alt="Minh hoạ 2D robot giao phòng cạnh thang máy khách sạn" /> }

type CorePart = typeof hotelRobotCore.eyes | typeof hotelRobotCore.brain
function CoreCard({ part, icon: Icon, children }: { part: CorePart; icon: typeof Eye; children?: React.ReactNode }) {
  return <article className="hotel-core-card">
    <header><Icon size={30} aria-hidden="true" /><div><small>{part.role}</small><h3>{part.name}</h3></div></header>
    <p className="hotel-algo-question">“{part.question}”</p>
    {children}
    <ol>{part.how.map(([label, detail], n) => <li key={label}><span>{n + 1}</span><div><strong>{label}</strong><p>{detail}</p></div></li>)}</ol>
    <p className="hotel-algo-where">{part.note}</p>
  </article>
}

/** Nhìn từ trên xuống: robot giữa hành lang, tia laser chạm tường thành các điểm. Chỉ minh hoạ nguyên lý. */
function LidarSketch() {
  const hits: [number, number][] = [[20, 14], [60, 14], [100, 14], [140, 14], [180, 14], [220, 14], [260, 14], [20, 66], [60, 66], [100, 66], [180, 66], [220, 66], [260, 66], [8, 40], [292, 40], [140, 54]]
  return <svg className="hotel-lidar" viewBox="0 0 300 80" role="img" aria-label="Sơ đồ nguyên lý: robot quét laser, tia chạm tường và người tạo thành các điểm">
    <rect x="4" y="10" width="292" height="60" rx="4" className="wall" />
    {hits.map(([x, y]) => <line key={`l${x}-${y}`} x1="140" y1="40" x2={x} y2={y} className="ray" />)}
    {hits.map(([x, y]) => <circle key={`p${x}-${y}`} cx={x} cy={y} r="2.4" className="hit" />)}
    <circle cx="140" cy="54" r="5" className="person" />
    <circle cx="140" cy="40" r="7" className="robot" />
  </svg>
}

/** Thanh 6 bước đầu mỗi trang soi kỹ: sáng đúng bước đang nói để người nghe biết mình đang ở đâu. */
function StepTrail({ page }: { page: HotelRobotPage }) {
  const spec = hotelRobotPages.find(item => item.key === page)
  const active: readonly number[] = spec && 'steps' in spec ? spec.steps : []
  return <ol className="hotel-trail" aria-label="Vị trí trong sáu bước giao hàng">{hotelRobotFlow.nodes.map((node, i) =>
    <li key={node.title} className={active.includes(i + 1) ? 'is-active' : undefined} aria-current={active.includes(i + 1) ? 'step' : undefined}><span>0{i + 1}</span>{node.title}</li>)}</ol>
}

export function HotelRobotSlides({ page }: { page: HotelRobotPage }) {
  if (page === 'origin') return <div className="hotel-origin">
    <ol className="hotel-timeline">{hotelRobotTimeline.map(item => <li key={item.year}>
      <figure><img src={item.image} alt={item.title} style={{ objectPosition: item.focus }} loading="lazy" /><figcaption>{item.credit}</figcaption></figure>
      <p className="hotel-timeline-when"><strong>{item.year}</strong> · {item.place}</p>
      <h3>{item.title}</h3><p>{item.detail}</p>
    </li>)}</ol>
    <p className="hotel-origin-note">{hotelRobotOutdoorNote}</p>
  </div>

  if (page === 'shenzhen') return <div className="hotel-shenzhen">
    <div className="hotel-shenzhen-photos">
      <figure className="is-main"><img src={hotelRobotShenzhenPhotos.main.src} alt={hotelRobotShenzhenPhotos.main.alt} /><figcaption>{hotelRobotShenzhenPhotos.main.credit}</figcaption></figure>
      <figure><img src={hotelRobotShenzhenPhotos.detail.src} alt={hotelRobotShenzhenPhotos.detail.alt} /><figcaption>{hotelRobotShenzhenPhotos.detail.credit}</figcaption></figure>
      <p className="hotel-shenzhen-cluster">{hotelRobotShenzhenPhotos.cluster}</p>
    </div>
    <div className="hotel-origin-drivers">{hotelRobotDrivers.map(item => {
      const Icon = driverIcons[item.icon]
      return <article key={item.title}><Icon size={26} aria-hidden="true" /><h3>{item.title}</h3><p>{item.detail}</p></article>
    })}</div>
    <p className="hotel-bottom-line">Robot không bùng nổ vì công nghệ mới. Nó bùng nổ khi linh kiện rẻ, nhân công đắt và COVID gặp nhau cùng lúc.</p>
  </div>

  if (page === 'journey') return <div className="hotel-journey">
    <ol className="hotel-step-grid">{hotelRobotFlow.nodes.map((node, i) => {
      const Icon = journeyIcons[i]
      return <li key={node.title}><div className="hotel-step-top"><Icon size={30} aria-hidden="true" /><span>0{i + 1}</span></div><h3>{node.title}</h3><p>{node.detail}</p></li>
    })}</ol>
    <p className="hotel-bottom-line">Nhân viên gán đồ với phòng. Robot lo hành trình tới cửa.</p>
  </div>

  if (page === 'core') return <div className="hotel-stepped"><StepTrail page="core" /><div className="hotel-core">
    <CoreCard part={hotelRobotCore.eyes} icon={Eye}><LidarSketch /></CoreCard>
    <div className="hotel-core-link" aria-hidden="true"><ArrowRight size={26} /><small>dữ liệu</small></div>
    <CoreCard part={hotelRobotCore.brain} icon={Brain} />
    <p className="hotel-core-support">{hotelRobotCore.support}</p>
  </div></div>

  if (page === 'dispatch') return <div className="hotel-stepped"><StepTrail page="dispatch" /><div className="hotel-dispatch">
    <div className="hotel-system-chain"><div><Buildings size={30} aria-hidden="true" /><span>PMS / POS</span><small>Đơn & số phòng</small></div><ArrowRight size={28} aria-hidden="true" /><div className="is-central"><Cloud size={36} aria-hidden="true" /><span>Điều phối</span><small>Tác vụ · trạng thái · nhật ký</small></div><ArrowRight size={28} aria-hidden="true" /><div><Robot size={30} aria-hidden="true" /><span>Đội robot</span><small>Vị trí & cảm biến</small></div></div>
    <div className="hotel-dispatch-rules">{[
      { Icon: Path, title: 'Gán đúng robot', detail: 'Gần điểm lấy, còn pin, đang rảnh.' },
      { Icon: Elevator, title: 'Xếp hàng thang máy', detail: 'Phối hợp nhiều robot và nhiều điểm giao.' },
      { Icon: BatteryCharging, title: 'Giữ đội sẵn sàng', detail: 'Theo dõi pin và điều robot về sạc.' },
    ].map(({ Icon, title, detail }) => <article key={title}><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></article>)}</div>
    <p className="hotel-bottom-line">Từ đơn hàng đến tác vụ, rồi từ tác vụ trở lại dữ liệu vận hành.</p>
  </div></div>

  if (page === 'navigation') return <div className="hotel-stepped"><StepTrail page="navigation" /><div className="hotel-split">
    <div className="hotel-explainer">
      <div className="hotel-routing" aria-label="Ví dụ ánh xạ phòng"><div><Package size={26} aria-hidden="true" /><small>KHOANG HÀNG</small><strong>01</strong></div><ArrowRight size={24} aria-hidden="true" /><div><Door size={26} aria-hidden="true" /><small>PHÒNG ĐÍCH</small><strong>1205</strong></div></div>
      <p className="hotel-example-label">Ví dụ ánh xạ · phòng 1205 trên bản đồ tầng 12</p>
      <h3>Số phòng là một toạ độ</h3><p>Nhận task “phòng 1205”, robot tra điểm có nhãn 1205 trên bản đồ tầng 12 rồi đi tới đó. Nó biết phòng nhờ nhãn trên bản đồ, không phải đọc biển số cửa.</p>
      <p className="hotel-callout">Robot chỉ biết khoang nào đi phòng nào. Món gì, nóng hay lạnh, là việc của người nạp đồ.</p>
    </div><div className="hotel-art-panel"><RobotArt /></div>
  </div></div>

  if (page === 'elevator') return <div className="hotel-stepped"><StepTrail page="elevator" /><div className="hotel-split">
    <div className="hotel-art-panel"><RobotArt /><p className="hotel-art-line">Robot gửi lệnh điện tử qua hệ thống tích hợp.</p></div>
    <ol className="hotel-vertical-flow">{[
      ['Gọi thang', 'Gửi tầng đón và tầng đến qua API hoặc bộ điều khiển tích hợp.'],
      ['Chờ xác nhận', 'Nhận trạng thái cabin và cửa từ hệ thống thang máy.'],
      ['Kiểm tra an toàn', 'Cảm biến xác nhận cửa mở và cabin còn chỗ trước khi vào.'],
      ['Ra đúng tầng', 'Tiếp tục theo bản đồ hành lang tới cửa phòng.'],
    ].map(([title, detail], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}<li className="hotel-flow-note"><p>Từng tòa nhà cần khảo sát khả năng tích hợp thang máy.</p></li></ol>
  </div></div>

  if (page === 'video') return <figure className="hotel-video">
    <video src={hotelRobotVideo.src} poster={hotelRobotVideo.poster} controls autoPlay muted playsInline preload="metadata" aria-label={hotelRobotVideo.alt}>Trình duyệt chưa phát được video.</video>
  </figure>

  if (page === 'infrastructure') return <div className="hotel-stepped"><StepTrail page="infrastructure" /><div className="hotel-journey"><div className="hotel-step-grid hotel-infrastructure">{hotelInfrastructure.map(item => {
    const Icon = icons[item.icon]
    return <article key={item.title}><div className="hotel-step-top"><Icon size={28} aria-hidden="true" /><small>{item.steps}</small></div><h3>{item.title}</h3><p>{item.detail}</p></article>
  })}</div><p className="hotel-bottom-line">Robot chỉ là một phần. Thang máy và hệ thống khách sạn cũ mới quyết định có nhân rộng được không.</p></div></div>
  return null
}
