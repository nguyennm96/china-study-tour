import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import {
  ArrowRight, BatteryCharging, CheckCircle, ChargingStation, HandTap, Lightbulb, Microphone, Warning, XCircle,
} from '@phosphor-icons/react'
import {
  didiCarbon, didiDriver, didiEv, didiOpen, didiPages, didiPhotos, didiRobotaxi, didiScale, didiScreens,
  didiTiers, didiTraffic, type DidiPage, type Photo, type Rect,
} from '../data/didi'
import { holdNextStep } from './slideSteps'
import './DidiSlides.css'

const FULL: Rect = { x: 0, y: 0, w: 1, h: 1 }
const pct = (value: number) => `${value * 100}%`
const stagger = (index: number) => ({ '--didi-order': index } as CSSProperties)

/** Cắt một vùng của ảnh gốc và khoanh các chi tiết cần chỉ. Toạ độ khoanh theo ảnh gốc, không theo vùng cắt. */
function Shot({ photo, crop = FULL, rings = [], className = '', alt }: {
  photo: Photo; crop?: Rect; rings?: { rect: Rect; label?: number }[]; className?: string; alt?: string
}) {
  return <span className={`didi-shot ${className}`} style={{ aspectRatio: `${crop.w * photo.width} / ${crop.h * photo.height}` }}>
    <img src={photo.src} alt={alt ?? photo.alt} style={{ width: pct(1 / crop.w), left: pct(-crop.x / crop.w), top: pct(-crop.y / crop.h) }} />
    {rings.map(({ rect, label }, index) => <span key={index} className="didi-ring" aria-hidden="true" style={{
      left: pct((rect.x - crop.x) / crop.w), top: pct((rect.y - crop.y) / crop.h), width: pct(rect.w / crop.w), height: pct(rect.h / crop.h),
    }}>{label !== undefined && <b>{label}</b>}</span>)}
  </span>
}

/** Slide có đáp án ẩn: lần "tiếp" đầu tiên (phím, nút hoặc bấm vào ô hỏi) chỉ lật đáp án. */
function useReveal() {
  const [shown, setShown] = useState(false)
  useEffect(() => (shown ? undefined : holdNextStep(() => setShown(true))), [shown])
  return [shown, () => setShown(true)] as const
}

function Ask({ question, onReveal }: { question: string; onReveal: () => void }) {
  return <button type="button" className="didi-ask" onClick={onReveal}>
    <span className="didi-ask-label">Hỏi cả phòng</span>
    <strong>{question}</strong>
    <span className="didi-ask-hint"><HandTap size={16} aria-hidden="true" />Bấm hoặc nhấn → để lật đáp án</span>
  </button>
}

function Page({ page, children }: { page: DidiPage; children: ReactNode }) {
  const meta = didiPages.find(item => item.key === page)!
  return <div className={`didi-page didi-${page}`}>
    <p className="didi-presenter"><Microphone size={14} weight="fill" aria-hidden="true" /><span>Trình bày</span>{meta.presenter}</p>
    <div className="didi-body">{children}</div>
    {'source' in meta && <p className="didi-source">{meta.source}</p>}
  </div>
}

function OpenSlide() {
  const meta = didiPages[0]
  return <div className="didi-open-layout">
    <div className="didi-open-copy">
      <p className="deck-kicker">{meta.kicker}</p>
      <h3 className="didi-open-title">Một cuốc xe Didi ở Thẩm Quyến <span>— và những gì nó hé lộ</span></h3>
      <ul className="didi-open-facts">{didiOpen.facts.map(fact => <li key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></li>)}</ul>
    </div>
    <figure className="didi-open-photo">
      <img src={didiPhotos.airport.src} alt={didiPhotos.airport.alt} />
      <figcaption>{didiOpen.caption}</figcaption>
    </figure>
  </div>
}

function ScaleSlide() {
  return <div className="didi-scale-layout">
    <div className="didi-brand">
      <img src="/media/didi/logo.png" alt="Logo Didi Chuxing" />
      <p lang="zh">{didiScale.hanzi}<span lang="zh-Latn">{didiScale.pinyin}</span></p>
    </div>
    <ul className="didi-stats">{didiScale.stats.map(stat => <li key={stat.label}>
      <strong>{stat.value}</strong><span>{stat.label}</span>{'delta' in stat && <em>{stat.delta}</em>}
    </li>)}</ul>
    <div className="didi-compare">
      <p>{didiScale.compare.lead}</p>
      <strong>{didiScale.compare.value}</strong>
      <p className="didi-compare-punch"><ArrowRight size={22} aria-hidden="true" />{didiScale.compare.punch}</p>
    </div>
  </div>
}

function TiersSlide() {
  const [shown, reveal] = useReveal()
  const meta = didiPages[2]
  const rings = didiTiers.callouts.flatMap((callout, index) => callout.rings.map(rect => ({ rect, label: index + 1 })))
  return <div className={`didi-tiers-layout ${shown ? 'is-shown' : ''}`}>
    <header className="deck-slide-head">
      <p className="deck-kicker">{meta.kicker}</p>
      <h2 className="deck-slide-heading" aria-hidden="true">{shown ? meta.title : didiTiers.titleBefore}</h2>
    </header>
    <div className="didi-tiers-grid">
      <aside className="didi-tiers-side">
        {shown && <p className="didi-answer didi-pop"><strong>{didiTiers.answer}</strong><span>{didiTiers.answerLabel}</span></p>}
        <figure className="didi-route">
          <Shot photo={didiPhotos.route} crop={didiTiers.route.crop} />
          <figcaption><strong>{didiTiers.route.text}</strong>{didiTiers.route.meta}</figcaption>
        </figure>
      </aside>
      <figure className="didi-tiers-phone">
        <Shot photo={didiPhotos.tiers} rings={shown ? rings : []} className={shown ? '' : 'is-veiled'} />
      </figure>
      {shown ? <ol className="didi-callouts">
        {didiTiers.callouts.map((callout, index) => <li key={callout.head} className="didi-rise" style={stagger(index)}>
          <b aria-hidden="true">{index + 1}</b><strong>{callout.head}</strong><span>{callout.detail}</span>
        </li>)}
        <li className="didi-tip didi-rise" style={stagger(7)}><Lightbulb size={20} weight="fill" aria-hidden="true" /><p>{didiTiers.tip.body}</p></li>
      </ol> : <Ask question={didiTiers.question} onReveal={reveal} />}
    </div>
  </div>
}

function ScreensSlide() {
  const { waiting, receipt } = didiScreens
  return <div className="didi-screens-layout">
    <section className="didi-screen">
      <Shot photo={didiPhotos.waiting} rings={waiting.highlights.map((item, index) => ({ rect: item.ring, label: index + 1 }))} className="didi-phone" />
      <div className="didi-screen-copy">
        <h4>{waiting.label}</h4>
        <ol className="didi-quotes">{waiting.highlights.map((item, index) => <li key={item.quote}>
          <b aria-hidden="true">{index + 1}</b><strong>{item.quote}</strong><span>{item.note}</span>
        </li>)}</ol>
        <ul className="didi-chips">{waiting.chips.map(chip => <li key={chip}>{chip}</li>)}</ul>
      </div>
    </section>
    <section className="didi-screen">
      <Shot photo={didiPhotos.receipt} rings={[{ rect: receipt.carbon.ring, label: 3 }]} className="didi-phone" />
      <div className="didi-screen-copy">
        <h4>{receipt.label}</h4>
        <p className="didi-screen-route">{receipt.route}</p>
        <dl className="didi-receipt-facts">{receipt.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        <p className="didi-carbon-tag"><b aria-hidden="true">3</b>{receipt.carbon.quote}</p>
      </div>
    </section>
    <p className="didi-punch">{didiScreens.punch}</p>
  </div>
}

/** Ba bước suy ra nhịp đèn — đồ hoạ tự vẽ thay cho ảnh giao diện Amap. */
function TrafficStep({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 120 64" aria-hidden="true">
    <rect x="0" y="24" width="120" height="16" fill="var(--surface-raised)" /><rect x="52" y="0" width="16" height="64" fill="var(--surface-raised)" />
    <line x1="48" y1="24" x2="48" y2="40" stroke="var(--brand)" strokeWidth="2.5" />
    {[10, 22, 34].map(x => <rect key={x} x={x} y="28" width="9" height="8" rx="2" fill="var(--paper)" />)}
  </svg>
  if (index === 1) return <svg viewBox="0 0 120 64" aria-hidden="true">
    {[0, 1, 2].map(cycle => <g key={cycle}>
      <rect x={4 + cycle * 38} y="22" width="18" height="20" rx="3" fill="var(--brand)" opacity=".85" />
      <rect x={22 + cycle * 38} y="22" width="16" height="20" rx="3" fill="var(--viz-green, #0f8a5f)" opacity=".85" />
    </g>)}
    <text x="60" y="58" textAnchor="middle" fontSize="9" fill="var(--muted)">dừng · đi · dừng · đi</text>
  </svg>
  return <svg viewBox="0 0 120 64" aria-hidden="true">
    <rect x="40" y="4" width="22" height="56" rx="6" fill="var(--paper)" />
    <circle cx="51" cy="17" r="6" fill="var(--brand)" /><circle cx="51" cy="32" r="6" fill="#5b7081" /><circle cx="51" cy="47" r="6" fill="#5b7081" />
    <text x="70" y="37" fontSize="18" fontWeight="600" fill="var(--paper)">51s</text>
  </svg>
}

function TrafficSlide() {
  const [shown, reveal] = useReveal()
  return <div className={`didi-traffic-layout ${shown ? 'is-shown' : ''}`}>
    <aside className="didi-evidence">
      <figure>
        <Shot photo={didiPhotos.waiting} crop={didiTraffic.evidence.crop} />
        <figcaption>{didiTraffic.evidence.caption}</figcaption>
      </figure>
      <figure className="didi-amap">
        <Shot photo={didiPhotos.amap} crop={{ x: 0, y: 0, w: 1, h: 0.66 }} />
        <figcaption>{didiTraffic.amapCaption}</figcaption>
      </figure>
    </aside>
    <div className="didi-traffic-main">
      {shown
        ? <div className="didi-verdict">
            <section className="is-no didi-pop"><h4><XCircle size={22} weight="fill" aria-hidden="true" />{didiTraffic.no.label}</h4><p>{didiTraffic.no.body}</p></section>
            <section className="is-yes didi-pop" style={stagger(1)}><h4><CheckCircle size={22} weight="fill" aria-hidden="true" />{didiTraffic.yes.label}</h4><p>{didiTraffic.yes.body}</p></section>
          </div>
        : <Ask question={didiTraffic.question} onReveal={reveal} />}
      <ol className="didi-flow">{didiTraffic.steps.map((step, index) => <li key={step} className="didi-rise" style={stagger(index + 2)}>
        <TrafficStep index={index} /><span><b>0{index + 1}</b>{step}</span>
      </li>)}</ol>
      <div className="didi-traffic-foot didi-rise" style={stagger(5)}>
        <ul className="didi-mini-stats">{didiTraffic.stats.map(stat => <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>)}</ul>
        <p className="didi-accent">{didiTraffic.punch}</p>
      </div>
    </div>
  </div>
}

function DriverSlide() {
  const [shown, reveal] = useReveal()
  const { bill } = didiDriver
  return <div className={`didi-driver-layout ${shown ? 'is-shown' : ''}`}>
    <div className="didi-driver-main">
      {shown
        ? <p className="didi-yes didi-pop">{didiDriver.answer}</p>
        : <Ask question={didiDriver.question} onReveal={reveal} />}
      <ol className="didi-boxes">{didiDriver.boxes.map((box, index) => <li key={box.head} className="didi-rise" style={stagger(index + 1)}>
        <b aria-hidden="true">0{index + 1}</b>
        <h4>{box.head}</h4>
        <p>{box.body}</p>
        {'caveat' in box && <p className="didi-caveat-flag"><Warning size={16} weight="fill" aria-hidden="true" />{box.caveat}</p>}
      </li>)}</ol>
      <p className="didi-accent didi-rise" style={stagger(4)}>{didiDriver.punch}</p>
    </div>
    <figure className="didi-bill didi-rise" style={stagger(2)}>
      <p className="didi-bill-title">{bill.title}</p>
      <dl>{bill.rows.map(row => <div key={row.label} className={'accent' in row ? 'is-accent' : ''}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
      <span className="didi-bill-bar" aria-hidden="true"><i /><i /></span>
      <figcaption>{bill.note}</figcaption>
    </figure>
  </div>
}

function CarbonSlide() {
  const { vietnam } = didiCarbon
  return <div className="didi-carbon-layout">
    <figure className="didi-carbon-shot">
      <Shot photo={didiPhotos.receipt} crop={didiCarbon.crop} rings={[{ rect: didiCarbon.ring }]} />
      <figcaption>{didiCarbon.caption}</figcaption>
    </figure>
    <div className="didi-carbon-china">
      <ul className="didi-points">{didiCarbon.points.map(point => <li key={point.head}><h4>{point.head}</h4><p>{point.body}</p></li>)}</ul>
      <ol className="didi-loop">{didiCarbon.loop.map((step, index) => <li key={step}>{index > 0 && <ArrowRight size={16} aria-hidden="true" />}<span>{step}</span></li>)}</ol>
    </div>
    <section className="didi-vietnam">
      <h4>{vietnam.head}</h4>
      <p className="didi-decree">{vietnam.decree}</p>
      <p className="didi-decree-dates">{vietnam.dates}</p>
      <ul>{vietnam.items.map(item => <li key={item.value}><strong>{item.value}</strong><span>{item.label}</span>{'note' in item && <small>{item.note}</small>}</li>)}</ul>
    </section>
  </div>
}

/** Vùng phát thải thấp Hà Nội — sơ đồ vòng tự vẽ, không theo tỉ lệ. */
function RingDiagram() {
  return <svg className="didi-rings" viewBox="0 0 200 200" role="img" aria-label="Sơ đồ ba vành đai của vùng phát thải thấp Hà Nội theo lộ trình 2026, 2028, 2030">
    <circle cx="100" cy="100" r="94" fill="var(--brand)" fillOpacity=".08" stroke="var(--brand)" strokeOpacity=".35" strokeDasharray="4 4" />
    <path d="M100 38 A62 62 0 0 1 162 100 L134 100 A34 34 0 0 0 100 66 Z" fill="var(--brand)" fillOpacity=".3" />
    <circle cx="100" cy="100" r="62" fill="none" stroke="var(--brand)" strokeOpacity=".45" />
    <circle cx="100" cy="100" r="34" fill="var(--brand)" fillOpacity=".3" stroke="var(--brand)" strokeOpacity=".6" />
    <circle cx="96" cy="102" r="19" fill="var(--brand)" />
    <text x="96" y="106" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">9</text>
    <text x="100" y="146" textAnchor="middle" fontSize="9" fill="var(--paper)">VĐ1</text>
    <text x="100" y="176" textAnchor="middle" fontSize="9" fill="var(--paper)">VĐ2</text>
    <text x="100" y="196" textAnchor="middle" fontSize="9" fill="var(--paper)">VĐ3</text>
  </svg>
}

function EvSlide() {
  const { shenzhen, hanoi, swap } = didiEv
  return <div className="didi-ev-layout">
    <p className="didi-market">{didiEv.market.join('  ·  ')}</p>
    <section className="didi-ev-block is-shenzhen">
      <h4><ChargingStation size={20} aria-hidden="true" />{shenzhen.head}</h4>
      <div className="didi-ev-photos">
        <img src={didiPhotos.street.src} alt={didiPhotos.street.alt} />
        <img src={didiPhotos.interior.src} alt={didiPhotos.interior.alt} />
      </div>
      <ul className="didi-ev-stats">{shenzhen.stats.map(stat => <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>)}</ul>
      <p className="didi-ev-first">{shenzhen.first}</p>
      <p className="didi-accent">{shenzhen.punch}</p>
    </section>
    <section className="didi-ev-block is-hanoi">
      <h4>{hanoi.head}</h4>
      <div className="didi-hanoi">
        <figure><RingDiagram /><figcaption>{hanoi.diagramNote}</figcaption></figure>
        <ol className="didi-stages">{hanoi.stages.map((stage, index) => <li key={stage.date} data-stage={index}>
          <strong>{stage.date}</strong>{'status' in stage && <em>{stage.status}</em>}<span>{stage.scope}</span>
        </li>)}</ol>
      </div>
      <p className="didi-wards">{hanoi.wards}</p>
      <ul className="didi-rules">{hanoi.rules.map((rule, index) => <li key={rule} className={index === 1 ? 'is-key' : ''}>{rule}</li>)}</ul>
    </section>
    <section className="didi-ev-block is-swap">
      <h4><BatteryCharging size={20} aria-hidden="true" />{swap.head}</h4>
      <ul>{swap.items.map(item => <li key={item.value}><strong>{item.value}</strong><span>{item.label}</span></li>)}</ul>
    </section>
  </div>
}

function RobotaxiSlide() {
  const { close } = didiRobotaxi
  return <div className="didi-robotaxi-layout">
    <figure className="didi-robotaxi-photo">
      <img src={didiPhotos.robotaxi.src} alt={didiPhotos.robotaxi.alt} />
      <figcaption>{didiRobotaxi.caption}</figcaption>
    </figure>
    <ol className="didi-timeline">{didiRobotaxi.milestones.map(item => <li key={item.date}>
      <strong>{item.date}</strong><p>{item.body}{'note' in item && <em> — {item.note}</em>}</p>
    </li>)}</ol>
    <section className="didi-close">
      <p className="didi-tally">{close.tally}</p>
      <ul>{close.trends.map(trend => <li key={trend}>{trend}</li>)}</ul>
      <p className="didi-close-line">{close.line}</p>
    </section>
  </div>
}

const bodies: Record<DidiPage, () => ReactNode> = {
  open: OpenSlide, scale: ScaleSlide, tiers: TiersSlide, screens: ScreensSlide, traffic: TrafficSlide,
  driver: DriverSlide, carbon: CarbonSlide, ev: EvSlide, robotaxi: RobotaxiSlide,
}

export function DidiSlides({ page }: { page: DidiPage }) {
  const Body = bodies[page]
  return <Page page={page}><Body /></Page>
}
