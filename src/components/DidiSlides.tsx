import { ChatCircleDots, CurrencyCircleDollar, MapPin } from '@phosphor-icons/react'
import {
  didiCarbon, didiClose, didiEv, didiFeatures, didiGap, didiIntro, didiPricing,
  didiRobotaxi, didiScale, didiSteps, didiWaiting, type DidiPage,
} from '../data/didi'
import './DidiSlides.css'

const featureIcon = { chat: ChatCircleDots, price: CurrencyCircleDollar, map: MapPin }

/** Bố cục dùng lại cho bốn trang có ảnh: chữ bên trái, ảnh dọc bên phải. */
function PhotoSplit({ photo, caption, children, tall = false }: {
  photo: { src: string; alt: string }; caption: string; children: React.ReactNode; tall?: boolean
}) {
  return <div className="didi-split">
    <div className="didi-copy">{children}</div>
    <figure className={`didi-photo ${tall ? 'is-tall' : ''}`}>
      <img src={photo.src} alt={photo.alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  </div>
}

function Cards({ items }: { items: readonly { head: string; body: string; accent?: boolean }[] }) {
  return <div className="didi-cards">{items.map(card => <section key={card.head} className={card.accent ? 'is-accent' : ''}>
    <h4>{card.head}</h4>
    <p>{card.body}</p>
  </section>)}</div>
}

function Chips({ items }: { items: readonly { label: string; value: string }[] }) {
  return <ul className="didi-chips">{items.map(chip => <li key={chip.label}>
    <span>{chip.label}</span><strong>{chip.value}</strong>
  </li>)}</ul>
}

export function DidiSlides({ page }: { page: DidiPage }) {
  if (page === 'title') return <div className="didi-title">
    <div>
      <p className="didi-title-index"><strong>04</strong><span>CHIA SẺ THÊM<br />SHENZHEN STUDY TOUR</span></p>
      <p className="didi-title-eyebrow">{didiIntro.label}</p>
      <h3 className="didi-title-name">{didiIntro.title}</h3>
      <p className="didi-title-headline">{didiIntro.headline}</p>
      <p className="didi-title-lead">{didiIntro.description}</p>
    </div>
    <ul className="didi-facts">{didiIntro.facts.map(fact => <li key={fact.label}>
      <strong>{fact.value}</strong><span>{fact.label}</span>
    </li>)}</ul>
  </div>

  if (page === 'intro') return <div className="didi-intro">
    <div className="didi-intro-head">
      <img className="didi-logo" src="/media/didi/logo.png" alt="Logo Didi Chuxing" />
      <p className="didi-hanzi">Didi Chuxing<span>Dīdī Chūxíng</span></p>
      <ul className="didi-scale">{didiScale.map(item => <li key={item.label}>
        <strong>{item.value}<small> {item.unit}</small></strong><span>{item.label}</span>
      </li>)}</ul>
    </div>
    <ol className="didi-features">{didiFeatures.map(feature => {
      const Icon = featureIcon[feature.icon]
      return <li key={feature.title}>
        <Icon size={30} aria-hidden="true" />
        <h4>{feature.title}</h4>
        <p>{feature.detail}</p>
      </li>
    })}</ol>
  </div>

  if (page === 'pricing') return <div className="didi-pricing">
    <table className="didi-table">
      <thead><tr>{didiPricing.head.map(cell => <th key={cell}>{cell}</th>)}</tr></thead>
      <tbody>{didiPricing.rows.map(row => <tr key={row.tier} className={row.base ? 'is-base' : ''}>
        <th scope="row">{row.tier}</th><td>{row.note}</td>
      </tr>)}</tbody>
    </table>
    <div className="didi-side">
      <p className="didi-callout">{didiPricing.tip}</p>
      <p className="didi-caveat">{didiPricing.caveat}</p>
    </div>
  </div>

  if (page === 'process') return <ol className="didi-steps">{didiSteps.map((step, index) => <li key={step.title}>
    <span className="didi-step-num">0{index + 1}</span>
    <h4>{step.title}</h4>
    <p>{step.detail}</p>
  </li>)}</ol>

  if (page === 'carbon') return <PhotoSplit photo={didiCarbon.photo} caption={didiCarbon.caption} tall>
    <p className="didi-hero">{didiCarbon.hero.value}<small>{didiCarbon.hero.unit}</small></p>
    <p className="didi-hero-label">{didiCarbon.hero.label}</p>
    <Chips items={didiCarbon.chips} />
    <p className="didi-callout">{didiCarbon.note}</p>
  </PhotoSplit>

  if (page === 'waiting') return <PhotoSplit photo={didiWaiting.photo} caption={didiWaiting.caption} tall>
    <p className="didi-lead">{didiWaiting.lead}</p>
    <Cards items={didiWaiting.cards} />
    <Chips items={didiWaiting.chips} />
  </PhotoSplit>

  if (page === 'ev') return <PhotoSplit photo={didiEv.photo} caption={didiEv.caption}>
    <p className="didi-lead">{didiEv.lead}</p>
    <Cards items={didiEv.cards} />
  </PhotoSplit>

  if (page === 'robotaxi') return <PhotoSplit photo={didiRobotaxi.photo} caption={didiRobotaxi.caption}>
    <p className="didi-lead">{didiRobotaxi.lead}</p>
    <Cards items={didiRobotaxi.cards} />
  </PhotoSplit>

  return <div className="didi-close">
    <div>
      <p className="didi-lead">{didiClose.lead}</p>
      <ol className="didi-trends">{didiClose.trends.map(trend => <li key={trend.word}>
        <strong>{trend.word}</strong><span>{trend.detail}</span>
      </li>)}</ol>
      <p className="didi-caveat">{didiGap}</p>
    </div>
    <section className="didi-questions">
      <h4>Để cùng thảo luận</h4>
      <ul>{didiClose.questions.map(question => <li key={question}>{question}</li>)}</ul>
    </section>
  </div>
}
