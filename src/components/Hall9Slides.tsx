import { Broadcast, HandTap } from '@phosphor-icons/react'
import { hall9Checks, hall9Flow, hall9Order, hall9Principle, hall9Reusable, hall9TeamPhotos, hall9Tech, type Hall9Page } from '../data/hall9'
import './Hall9Slides.css'

const techIcon = { NFC: HandTap, RFID: Broadcast } as const

export function Hall9Slides({ page }: { page: Hall9Page }) {
  if (page === 'basics') return <div className="hall9-basics">
    {hall9Tech.map(tech => {
      const Icon = tech.key === 'nfc' ? HandTap : Broadcast
      return <article key={tech.key} className={`hall9-tech is-${tech.key}`}>
        <figure><img src={tech.image} alt={tech.credit} style={{ objectPosition: tech.focus }} /><figcaption>{tech.credit}</figcaption></figure>
        <header><Icon size={26} aria-hidden="true" /><h3>{tech.name}</h3><span>{tech.verb} · {tech.range}</span></header>
        <ul>{tech.points.map(point => <li key={point}>{point}</li>)}</ul>
      </article>
    })}
    <aside className="hall9-team">
      <p>Ở Hall 9 · ảnh của đoàn</p>
      {hall9TeamPhotos.map(item => <figure key={item.src}><img src={item.src} alt={item.alt} style={{ objectPosition: item.focus }} /><figcaption>{item.caption}</figcaption></figure>)}
    </aside>
    <p className="hall9-principle">{hall9Principle}</p>
  </div>

  return <div className="hall9-ahamove">
    <ol className="hall9-flow">{hall9Flow.map(item => {
      const Icon = techIcon[item.tech]
      return <li key={item.step} className={`is-${item.tech.toLowerCase()}`}>
        <figure><img src={item.image} alt={item.credit} style={{ objectPosition: item.focus }} /><figcaption>{item.credit}</figcaption></figure>
        <p className="hall9-flow-head"><span>{item.step}</span>{item.where}<em><Icon size={14} aria-hidden="true" />{item.tech}</em></p>
        <p>{item.idea}</p>
      </li>
    })}</ol>
    <p className="hall9-reusable">{hall9Reusable}</p>
    <div className="hall9-footer">
      <p className="hall9-order">{hall9Order}</p>
      <ul className="hall9-checks" aria-label="Cần kiểm tra trước khi thử">{hall9Checks.map(check => <li key={check}>{check}</li>)}</ul>
    </div>
  </div>
}
