import { lazy, Suspense, type ReactNode } from 'react'
import { ArrowUpRight, Cpu, Drone, Path, PersonSimpleWalk, Robot, Star, Timer, UserFocus } from '@phosphor-icons/react'
import type { Metric, TopicData } from '../data/topicData'
import { source } from '../data/sources'
import type { Actor, FlowSpec } from '../data/mechanisms'
import { subjects, takeaways, teamGroups, type Subject } from '../data/presentation'
import type { Slide } from '../data/deck'
import { ChartPlot } from './DataCharts'
import { ExperienceScene } from './DronePresentationContent'
import { teamArt } from './TourSections'
import { HotelRobotSlides } from './HotelRobotSlides'
import { DidiSlides } from './DidiSlides'
import { IoteSlides } from './IoteSlides'
import { Hall9Slides } from './Hall9Slides'
import { DroneQuizSlide } from './DroneQuizSlide'
import { PlaceSlide } from './PlaceSlides'
import { ahamoveReferences, type AhamoveSubject } from '../data/ahamove'

const DeliveryAnatomy = lazy(() => import('./DeliveryAnatomy').then(module => ({ default: module.DeliveryAnatomy })))
const ItineraryMap = lazy(() => import('./ItineraryMap').then(module => ({ default: module.ItineraryMap })))

const actorIcon = { human: PersonSimpleWalk, machine: Robot, system: Cpu }
const actorName: Record<Actor, string> = { human: 'Người', machine: 'Thiết bị', system: 'Hệ thống' }

const subjectArt: Record<string, { src: string; alt: string }> = {
  didi: { src: '/media/illustrations/subjects-2d/didi.png', alt: 'Minh hoạ xe đặt qua DiDi' },
  drone: { src: '/media/illustrations/subjects-2d/drone.png', alt: 'Minh hoạ 2D: drone mang hộp đồ ăn' },
  robots: { src: '/media/illustrations/subjects-2d/hotel-robot.png', alt: 'Minh hoạ 2D: robot giao hàng tận phòng khách sạn' },
  iote: { src: '/media/illustrations/subjects-2d/iote.png', alt: 'Minh hoạ AI: gian triển lãm IoT với chip và cảm biến kết nối' },
  tips: { src: '/media/illustrations/subjects-2d/tips-tricks.png', alt: 'Minh hoạ AI: điện thoại thanh toán, bản đồ và hành lý du lịch' },
  meituan: { src: '/media/illustrations/subjects-2d/order.png', alt: 'Minh hoạ 2D: điện thoại đặt món và túi đồ ăn' },
}

function SubjectIllustration({ id, className = '' }: { id: string; className?: string }) {
  const art = subjectArt[id]
  return <figure className={`deck-illustration ${className}`}>
    <img src={art.src} alt={art.alt} />
  </figure>
}

function MetricMeta({ metric }: { metric: Metric }) {
  return <p className="metric-meta"><span className="metric-asof">{metric.asOf}</span></p>
}

/** Canvas slide cố định nên cỡ số suy được từ độ dài chuỗi: số ngắn thì to hết mức ô cho phép. */
function valueSize(metric: Metric, wide: boolean) {
  const weight = metric.value.length + (metric.unit ? (metric.unit.length + 1) * 0.45 : 0)
  const ladder: [number, number][] = [[7, 58], [10, 50], [13, 42], [16, 35], [19, 30], [Infinity, 26]]
  const base = ladder.find(([limit]) => weight <= limit)![1]
  return wide ? Math.round(base * 1.16) : base
}

function MetricTile({ metric, wide = false, dense = false, icon }: { metric: Metric; wide?: boolean; dense?: boolean; icon?: ReactNode }) {
  return <li className="metric-tile">
    {icon && <span className="metric-icon" aria-hidden="true">{icon}</span>}
    <p className="metric-value" style={{ fontSize: Math.round(valueSize(metric, wide) * (dense ? .78 : 1)) }}>{metric.value}{metric.unit && <> <small>{metric.unit}</small></>}</p>
    <p className="metric-label">{metric.label}</p>
    <MetricMeta metric={metric} />
  </li>
}

function TitleSlide({ subject }: { subject: Subject }) {
  const chapter = subjects.indexOf(subject) + 1
  return <div className="deck-title-layout">
    <div className="deck-title-copy">
      {subject.id !== 'drone' && <>
        <p className="deck-chapter-index"><strong>0{chapter}</strong><span>CHỦ ĐỀ<br />SHENZHEN STUDY TOUR</span></p>
        <p className="deck-title-eyebrow">{subject.label}</p>
      </>}
      <h3 className="deck-title-name">{subject.title}</h3>
      <p className="deck-title-headline">{subject.headline}</p>
      <p className="deck-title-lead">{subject.description}</p>
    </div>
    <div className={`deck-title-visual ${subject.id === 'robots' ? 'is-illustrated' : ''}`}>
      <figure className="deck-title-figure">
        <img src={subject.cover} alt={subject.id === 'robots' ? subjectArt.robots.alt : subject.caption} />
        {subject.source && <figcaption>{subject.caption}</figcaption>}
      </figure>
      {subject.id !== 'robots' && <SubjectIllustration id={subject.id} className="deck-title-art" />}
    </div>
  </div>
}

function DataSummarySlide({ subject, chartIndex, context = false }: { subject: Subject; chartIndex: number; context?: boolean }) {
  const data = subject.data
  // Drone: đường đơn luỹ kế của Meituan bên trái, bốn con số cho thấy mạng bay đang dày lên bên phải.
  if (subject.id === 'drone' && data.context) {
    const growth = data.charts[chartIndex]
    const speed = data.charts[1]
    const speedMax = Math.max(...speed.points.map(point => point.value))
    return <div className="deck-city-summary">
      <p className="city-summary-scope">Số Meituan và TP Thâm Quyến công bố. Meituan đã giao drone thường xuyên ở Bắc Kinh, Thượng Hải, Thâm Quyến, Hong Kong và Dubai.</p>
      <div className="drone-growth">
        <section className="summary-chart">
          <h3>{growth.title}</h3>
          <ChartPlot chart={growth} />
          {growth.comparisons ? <dl className="growth-compare">{growth.comparisons.map(item => <div key={item.period}>
            <dt>{item.period}</dt>
            <dd><strong>{item.value}</strong><span className="growth-delta"><ArrowUpRight size={14} weight="bold" aria-hidden="true" />{item.delta}</span></dd>
            <dd className="growth-base">{item.base}</dd>
          </div>)}</dl> : <p className="summary-reading">{growth.reading}</p>}
        </section>
        <ul className="summary-metrics">
          {[data.context.metrics[1], data.context.metrics[0]].map((metric, index) => {
            const Icon = [Drone, Path][index]
            return <MetricTile key={metric.label} metric={metric} icon={<Icon size={22} />} />
          })}
          {/* Thẻ so thời gian giao: drone và xe máy trên cùng một tuyến. */}
          <li className="metric-tile speed-tile">
            <span className="metric-icon" aria-hidden="true"><Timer size={22} /></span>
            <p className="metric-label">{speed.title}</p>
            <ul className="speed-bars" aria-label={`${speed.title}: ${speed.points.map(point => `${point.label} ${point.display} ${speed.axisLabel}`).join(', ')}`}>
              {speed.points.map(point => <li key={point.label}>
                <span>{point.label}</span>
                <span className="speed-track"><span className={point.emphasis ? 'is-emphasis' : ''} style={{ width: `${(point.value / speedMax) * 100}%` }} /></span>
                <strong>{point.display} <small>{speed.axisLabel}</small></strong>
              </li>)}
            </ul>
            <p className="metric-meta"><span className="metric-asof">{speed.sourceIds.map(id => `${source(id).publisher} · ${source(id).date}`).join(' · ')}</span></p>
          </li>
          <MetricTile metric={data.metrics[0]} icon={<UserFocus size={22} />} />
        </ul>
      </div>
    </div>
  }
  const chart = data.charts[chartIndex]
  const metrics = context ? data.context!.metrics : data.metrics
  const note = context ? 'VNĐ ước tính · 3.947 VND/CNY, 19/09/2026. Số hợp nhất cả tập đoàn.' : 'Ngày đỉnh, không phải trung bình. Hai chương trình là tập con của tổng đơn.'
  return <div className={`deck-data-summary ${context ? 'is-context' : ''}`}>
    <section className="summary-facts" aria-label={context ? data.context!.title : 'Quy mô công bố'}>
      {context ? <div className="summary-context-head"><h3>{data.context!.title}</h3><p>{data.context!.caption}</p></div> : <div className="summary-hero">
        <div><p className="summary-hero-value">{data.hero.value}<small>{data.hero.unit}</small></p><p className="summary-hero-label">{data.hero.label}</p><MetricMeta metric={data.hero} /></div>
        <SubjectIllustration id={subject.id} />
      </div>}
      <ul className="summary-metrics">{metrics.map(metric => <MetricTile key={metric.label} metric={metric} dense />)}</ul>
    </section>
    <aside className="summary-chart">
      <h3>{chart.title}</h3>
      <ChartPlot chart={chart} />
      <p className="summary-reading">{chart.reading}</p>
      <p className="summary-scope">{note}</p>
    </aside>
  </div>
}

/** Drone có slide riêng (DroneQuizSlide); các chủ đề còn lại dùng bố cục bài học → gợi ý. */
function AhamoveSlide({ subjectId }: { subjectId: Exclude<AhamoveSubject, 'drone'> }) {
  const reference = ahamoveReferences[subjectId]
  return <div className="deck-subject-reference">
    <aside className="reference-lesson">
      <SubjectIllustration id={subjectId} />
      <p className="reference-eyebrow">Bài học từ chủ đề</p>
      <h3>{reference.lesson}</h3>
      <p className="reference-observation">{reference.observation}</p>
    </aside>
    <div className="reference-application">
      <section><h3>Liên hệ với Ahamove</h3><p>{reference.connection}</p></section>
      <section><h3>Có thể thử ở phạm vi nhỏ</h3><p>{reference.trial}</p></section>
      <section className="reference-metrics"><h3>Đo hiệu quả</h3><p>{reference.metrics}</p></section>
      <p className="reference-question"><span>Để cùng thảo luận</span><strong>{reference.question}</strong></p>
    </div>
  </div>
}

function EvidenceSlide({ data }: { data: TopicData }) {
  return <div className={`deck-evidence-layout ${data.specs ? '' : 'is-single'}`}>
    {data.specs && <section aria-labelledby="slide-specs-heading">
      <h4 id="slide-specs-heading" className="deck-subhead">{data.specs.title}</h4>
      <p className="deck-caption">{data.specs.caption}</p>
      <dl className="spec-list">{data.specs.rows.map(row => <div key={row.label}>
        <dt>{row.label}</dt>
        <dd><strong>{row.value}</strong></dd>
      </div>)}</dl>
    </section>}
    {data.fieldNotes && <section className="field-notes" aria-labelledby="slide-field-heading">
      <h4 id="slide-field-heading" className="deck-subhead">{data.fieldNotes.title}</h4>
      <p className="deck-caption">{data.fieldNotes.caption}</p>
      <ul className="field-list">{data.fieldNotes.items.map(item => <li key={item}>{item}</li>)}</ul>
    </section>}
  </div>
}

function FlowSlide({ flow }: { flow: FlowSpec }) {
  return <div className="deck-flow-layout">
    <div className="mechanism-intro">
      <p className="deck-caption">{flow.lead}</p>
      <ul className="mechanism-key" aria-label="Chú giải vai trò">
        {(['human', 'machine', 'system'] as Actor[]).map(actor => {
          const Icon = actorIcon[actor]
          return <li key={actor}><span className={`actor-chip actor-${actor}`}><Icon size={12} aria-hidden="true" /></span>{actorName[actor]}</li>
        })}
      </ul>
    </div>
    <div className="mechanism-band"><span className="mechanism-band-label">{flow.bands[0].label}</span><p>{flow.bands[0].detail}</p></div>
    <ol className="mechanism-flow">
      {flow.nodes.map((node, index) => {
        const Icon = actorIcon[node.actor]
        return <li key={node.title}>
          <div className="flow-node">
            <p className="flow-node-head"><span className={`actor-chip actor-${node.actor}`}><Icon size={12} aria-hidden="true" /></span><span className="flow-step">0{index + 1}</span></p>
            <h4>{node.title}</h4>
            <p className="flow-detail">{node.detail}</p>
            {node.metric && <p className="flow-metric"><strong>{node.metric.value}</strong><span>{node.metric.label}</span></p>}
          </div>
          {index < flow.nodes.length - 1 && <span className="flow-arrow" aria-hidden="true" />}
        </li>
      })}
    </ol>
    <div className="mechanism-band"><span className="mechanism-band-label">{flow.bands[1].label}</span><p>{flow.bands[1].detail}</p></div>
  </div>
}

function TeamSlide() {
  return <div className="deck-team-layout">
    <figure className="team-art"><img src={teamArt.src} alt={teamArt.alt} /></figure>
  </div>
}

function RosterSlide() {
  return <ol className="deck-topic-agenda">{teamGroups.map((group, index) => <li className="topic-agenda-item" key={group.topic}>
    <span className="topic-agenda-index" aria-hidden="true">0{index + 1}</span>
    <div className="topic-agenda-art" aria-hidden="true"><SubjectIllustration id={group.illustration} /></div>
    <div className="topic-agenda-copy"><h3>{group.topic}</h3><p>{group.headline}</p></div>
    <ul className="topic-agenda-presenters" aria-label={`Người trình bày ${group.topic}`}>{group.members.map(name => <li key={name}>{name}{name === 'Phạm Minh Quân' && <span className="topic-agenda-leader" role="img" aria-label="Trưởng đoàn" title="Trưởng đoàn"><Star size={17} weight="fill" aria-hidden="true" /></span>}</li>)}</ul>
  </li>)}</ol>
}

function TakeawaySlide({ index }: { index: number }) {
  const takeaway = takeaways[index]
  const subject = subjects.find(item => item.id === takeaway.subject)!
  return <div className="deck-takeaway-layout">
    <div className="takeaway-body">
      <p className="takeaway-statement">{takeaway.text}</p>
      <p className="takeaway-example">{takeaway.example}</p>
      <p className="takeaway-question"><span>Để cùng thảo luận</span><strong>{takeaway.question}</strong></p>
    </div>
    <div className="takeaway-media">
      <p className="takeaway-memory"><span>ĐIỀU MANG VỀ · 0{index + 1}</span><strong>{takeaway.word}</strong></p>
      <SubjectIllustration id={subject.id} />
      <p className="takeaway-origin">Đọc từ chủ đề <strong>{subject.title}</strong></p>
    </div>
  </div>
}

function TakeawayGridSlide() {
  return <ol className="deck-takeaway-grid">{takeaways.map((takeaway, index) => <li key={takeaway.word}>
    <p className="takeaway-grid-index"><span>0{index + 1}</span><strong>{takeaway.word}</strong></p>
    <h4>{takeaway.title}</h4>
    <p className="takeaway-grid-text">{takeaway.text}</p>
    <p className="takeaway-grid-question"><span>Gợi mở cho Ahamove</span>{takeaway.question}</p>
  </li>)}</ol>
}

export function SlideBody({ slide }: { slide: Slide }) {
  const subject = slide.subjectId ? subjects.find(item => item.id === slide.subjectId)! : undefined
  switch (slide.kind) {
    case 'team': return <TeamSlide />
    case 'roster': return <RosterSlide />
    case 'itinerary': return <Suspense fallback={<div className="tour-loading" role="status">Đang tải bản đồ hành trình…</div>}><ItineraryMap /></Suspense>
    case 'takeaway': return <TakeawaySlide index={slide.takeawayIndex} />
    case 'takeaways': return <TakeawayGridSlide />
    case 'hotel-robot': return <HotelRobotSlides page={slide.page} />
    case 'didi': return <DidiSlides page={slide.page} />
    case 'iote': return <IoteSlides page={slide.page} />
    case 'hall9': return <Hall9Slides page={slide.page} />
    case 'place': return <PlaceSlide placeId={slide.placeId} page={slide.page} />
    case 'ahamove': return slide.subjectId === 'drone' ? <DroneQuizSlide /> : <AhamoveSlide subjectId={slide.subjectId} />
  }
  if (!subject) return null
  switch (slide.kind) {
    case 'title': return <TitleSlide subject={subject} />
    case 'experience': return <ExperienceScene spec={subject.experience} />
    case 'data-summary': return <DataSummarySlide subject={subject} chartIndex={slide.chartIndex} />
    case 'data-context': return <DataSummarySlide subject={subject} chartIndex={slide.chartIndex} context />
    case 'evidence': return <EvidenceSlide data={subject.data} />
    case 'mechanism': return subject.mechanism.kind === 'flow'
      ? <FlowSlide flow={subject.mechanism.flow} />
      : <div className="deck-sim-layout deck-anatomy">
          <Suspense fallback={<div className="tour-loading" role="status">Đang dựng mô phỏng 3D…</div>}><DeliveryAnatomy step={0} autoPlay /></Suspense>
        </div>
    default: return null
  }
}

/** Slide mở đầu và slide trải nghiệm tự lo phần tiêu đề của mình. */
export const slideOwnsHeading = (slide: Slide) => slide.kind === 'title' || slide.kind === 'experience' || slide.kind === 'team' || slide.kind === 'itinerary'
  || (slide.kind === 'ahamove' && slide.subjectId === 'drone')
  || (slide.kind === 'place' && slide.placeId === 'place-talent-park' && slide.page === 'overview')
  // Trang mở đầu Didi tự dựng tiêu đề; trang mười hạng xe đổi tiêu đề sau khi lật đáp án.
  || (slide.kind === 'didi' && (slide.page === 'open' || slide.page === 'tiers'))
