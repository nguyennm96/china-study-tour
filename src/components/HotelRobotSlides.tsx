import { ArrowRight, BatteryCharging, Bell, Brain, Buildings, CheckCircle, City, Cloud, Coins, Cpu, Elevator, Eye, ForkKnife, MapTrifold, Package, PersonSimpleWalk, Robot, Virus, WifiHigh } from '@phosphor-icons/react'
import { hotelRobotCore, hotelRobotSystem, hotelRobotPages, hotelRobotDrivers, hotelRobotOutdoorNote, hotelRobotShenzhenPhotos, hotelRobotTimeline, hotelRobotFlow, hotelRobotVideo, type HotelRobotPage } from '../data/hotelRobot'
import './HotelRobotSlides.css'

const chainIcons = { pms: Buildings, cloud: Cloud, robot: Robot, elevator: Elevator, guest: Bell }
const needIcons = { map: MapTrifold, wifi: WifiHigh, battery: BatteryCharging, human: PersonSimpleWalk }
const driverIcons = { labor: Coins, covid: Virus, hardware: Cpu, city: City }
const journeyIcons = [ForkKnife, Cloud, Package, Robot, Bell, CheckCircle]

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

  if (page === 'system') return <div className="hotel-stepped"><StepTrail page="system" /><div className="hotel-system">
    <ol className="hotel-chain">{hotelRobotSystem.chain.map((link, i) => {
      const Icon = chainIcons[link.icon]
      return <li key={link.name} className={link.icon === 'cloud' ? 'is-central' : link.icon === 'elevator' ? 'is-hard' : undefined}>
        {i > 0 && <ArrowRight className="hotel-chain-arrow" size={18} aria-hidden="true" />}
        <Icon size={26} aria-hidden="true" /><h3>{link.name}</h3><small>{link.via}</small><p>{link.detail}</p>
      </li>
    })}</ol>
    <div className="hotel-needs"><p>Khách sạn phải có sẵn</p>{hotelRobotSystem.needs.map(need => {
      const Icon = needIcons[need.icon]
      return <article key={need.title}><Icon size={22} aria-hidden="true" /><div><h4>{need.title}</h4><p>{need.detail}</p></div></article>
    })}</div>
    <p className="hotel-bottom-line">{hotelRobotSystem.close}</p>
  </div></div>

  if (page === 'video') return <figure className="hotel-video">
    <video src={hotelRobotVideo.src} poster={hotelRobotVideo.poster} controls autoPlay muted playsInline preload="metadata" aria-label={hotelRobotVideo.alt}>Trình duyệt chưa phát được video.</video>
  </figure>

  return null
}
