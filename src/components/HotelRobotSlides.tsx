import { ArrowRight, BatteryCharging, Bell, Buildings, CheckCircle, Cloud, Door, Elevator, ForkKnife, MapTrifold, Package, Path, PersonSimpleWalk, Robot, WifiHigh } from '@phosphor-icons/react'
import { hotelInfrastructure, hotelRobotData, hotelRobotFlow, type HotelRobotPage } from '../data/hotelRobot'
import { ChartPlot } from './DataCharts'
import './HotelRobotSlides.css'

const icons = { task: Package, map: MapTrifold, elevator: Elevator, wifi: WifiHigh, battery: BatteryCharging, human: PersonSimpleWalk }
const journeyIcons = [ForkKnife, Cloud, Package, Robot, Bell, CheckCircle]
const art = '/media/illustrations/subjects-2d/hotel-robot.png'
function RobotArt() { return <img className="hotel-art" src={art} alt="Minh hoạ 2D robot giao phòng cạnh thang máy khách sạn" /> }

export function HotelRobotSlides({ page }: { page: HotelRobotPage }) {
  if (page === 'journey') return <div className="hotel-journey">
    <ol className="hotel-step-grid">{hotelRobotFlow.nodes.map((node, i) => {
      const Icon = journeyIcons[i]
      return <li key={node.title}><div className="hotel-step-top"><Icon size={30} aria-hidden="true" /><span>0{i + 1}</span></div><h3>{node.title}</h3><p>{node.detail}</p></li>
    })}</ol>
    <p className="hotel-bottom-line">Nhân viên gán đồ với phòng. Robot lo hành trình tới cửa.</p>
  </div>

  if (page === 'navigation') return <div className="hotel-split">
    <div className="hotel-explainer">
      <div className="hotel-routing" aria-label="Ví dụ ánh xạ phòng"><div><Package size={26} aria-hidden="true" /><small>KHOANG HÀNG</small><strong>01</strong></div><ArrowRight size={24} aria-hidden="true" /><div><Door size={26} aria-hidden="true" /><small>PHÒNG ĐÍCH</small><strong>1205</strong></div></div>
      <p className="hotel-example-label">Ví dụ ánh xạ · phòng 1205 trên bản đồ tầng 12</p>
      <h3>LiDAR + SLAM</h3><p>Robot định vị chính mình trên bản đồ đã gắn nhãn, rồi tìm đường tới tọa độ phòng.</p>
      <p className="hotel-callout">Né người và vật cản bằng cảm biến. Nội dung món ăn do nhân viên quản lý.</p>
    </div><div className="hotel-art-panel"><RobotArt /></div>
  </div>

  if (page === 'elevator') return <div className="hotel-split">
    <div className="hotel-art-panel"><RobotArt /><p className="hotel-art-line">Robot gửi lệnh điện tử qua hệ thống tích hợp.</p></div>
    <ol className="hotel-vertical-flow">{[
      ['Gọi thang', 'Gửi tầng đón và tầng đến qua API hoặc bộ điều khiển tích hợp.'],
      ['Chờ xác nhận', 'Nhận trạng thái cabin và cửa từ hệ thống thang máy.'],
      ['Kiểm tra an toàn', 'Cảm biến xác nhận cửa mở và cabin còn chỗ trước khi vào.'],
      ['Ra đúng tầng', 'Tiếp tục theo bản đồ hành lang tới cửa phòng.'],
    ].map(([title, detail], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}<li className="hotel-flow-note"><p>Từng tòa nhà cần khảo sát khả năng tích hợp thang máy.</p></li></ol>
  </div>

  if (page === 'dispatch') return <div className="hotel-dispatch">
    <div className="hotel-system-chain"><div><Buildings size={30} aria-hidden="true" /><span>PMS / POS</span><small>Đơn & số phòng</small></div><ArrowRight size={28} aria-hidden="true" /><div className="is-central"><Cloud size={36} aria-hidden="true" /><span>Điều phối</span><small>Tác vụ · trạng thái · nhật ký</small></div><ArrowRight size={28} aria-hidden="true" /><div><Robot size={30} aria-hidden="true" /><span>Đội robot</span><small>Vị trí & cảm biến</small></div></div>
    <div className="hotel-dispatch-rules">{[
      { Icon: Path, title: 'Gán đúng robot', detail: 'Gần điểm lấy, còn pin, đang rảnh.' },
      { Icon: Elevator, title: 'Xếp hàng thang máy', detail: 'Phối hợp nhiều robot và nhiều điểm giao.' },
      { Icon: BatteryCharging, title: 'Giữ đội sẵn sàng', detail: 'Theo dõi pin và điều robot về sạc.' },
    ].map(({ Icon, title, detail }) => <article key={title}><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></article>)}</div>
    <p className="hotel-bottom-line">Từ đơn hàng đến tác vụ, rồi từ tác vụ trở lại dữ liệu vận hành.</p>
  </div>

  if (page === 'infrastructure') return <div className="hotel-journey"><div className="hotel-step-grid hotel-infrastructure">{hotelInfrastructure.map(item=>{const Icon=icons[item.icon];return <article key={item.title}><Icon size={30} aria-hidden="true" /><h3>{item.title}</h3><p>{item.detail}</p></article>})}</div><p className="hotel-bottom-line">Điểm khó khi nhân rộng: thang máy và hệ thống khách sạn cũ.</p></div>

  if (page === 'market') return <div className="deck-chart-layout hotel-market"><ChartPlot chart={hotelRobotData.charts[0]} /><aside className="chart-narrative"><p className="hotel-market-number">~24%<small>CAGR 2026–2030 · dự báo</small></p><p className="viz-question">Tăng trưởng chưa bảo đảm lợi nhuận.</p><p className="viz-reading">Thiếu nhân lực, COVID và phần cứng rẻ tạo lực đẩy. Tích hợp tòa nhà, cạnh tranh giá và chi phí vẫn là rào cản.</p><p className="hotel-example-label">Ước lượng toàn cầu được tài liệu tổng hợp dẫn lại, không phải số riêng Trung Quốc.</p></aside></div>

  return <div className="hotel-split hotel-ahamove"><div className="hotel-explainer"><p className="hotel-punchline">Last-mile<br /><em>theo chiều dọc.</em></p><dl className="hotel-parallels"><div><dt>Khách sạn</dt><dd>Truck On-Demand</dd></div><div><dt>Gán robot theo vị trí & pin</dt><dd>Gán tài xế theo vị trí & khả năng nhận</dd></div><div><dt>Hàng đợi thang máy</dt><dd>Điểm nghẽn trên tuyến giao</dd></div><div><dt>Task → giao → nhật ký</dt><dd>Đơn → dispatch → dữ liệu vận hành</dd></div></dl><p className="hotel-callout">Chặng nào đủ lặp lại để thử tự động hoá, và ai xử lý ngoại lệ?</p></div><div className="hotel-art-panel"><RobotArt /></div></div>
}
