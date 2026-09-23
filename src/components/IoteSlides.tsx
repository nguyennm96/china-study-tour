import type { ReactNode } from 'react'
import { ChatCircleDots, Microphone, Quotes } from '@phosphor-icons/react'
import {
  ioteIntro, ioteMachines, ioteOpen, iotePages, iotePhotos, ioteScale, ioteShelf, ioteTakeaway, ioteVideo, type IotePage,
} from '../data/iote'
import './IoteSlides.css'

function Page({ page, children }: { page: IotePage; children: ReactNode }) {
  const meta = iotePages.find(item => item.key === page)!
  return <div className={`iote-page iote-${page}`}>
    <p className="iote-presenter"><Microphone size={14} weight="fill" aria-hidden="true" /><span>Trình bày</span>{ioteIntro.presenter}</p>
    <div className="iote-body">{children}</div>
    {'source' in meta && <p className="iote-source">{meta.source}</p>}
  </div>
}

function OpenSlide() {
  const meta = iotePages[0]
  return <div className="iote-open-layout">
    <div className="iote-open-copy">
      <p className="deck-kicker">{meta.kicker}</p>
      <h3 className="iote-open-title">Một ngày ở IOTE: <span>AI bước ra khỏi màn hình</span></h3>
      <p className="iote-open-lead">{ioteOpen.lead}</p>
      <div className="iote-ask">
        <p className="iote-ask-label"><ChatCircleDots size={16} weight="fill" aria-hidden="true" />Hỏi cả phòng</p>
        <strong>{ioteOpen.question}</strong>
      </div>
    </div>
    <figure className="iote-open-video">
      {/* Clip không tiếng, tự chạy và lặp: người nói vẫn nói được trong lúc clip chạy. */}
      <video src={ioteVideo.src} poster={ioteVideo.poster} autoPlay muted loop playsInline aria-label={ioteVideo.alt} />
      <figcaption>{ioteVideo.caption}</figcaption>
    </figure>
  </div>
}

function ScaleSlide() {
  return <div className="iote-scale-layout">
    <figure className="iote-scale-photo">
      <img src={iotePhotos.venue.src} alt={iotePhotos.venue.alt} />
    </figure>
    <div className="iote-scale-facts">
      <ul className="iote-stats">{ioteScale.stats.map(stat => <li key={stat.label}>
        <strong>{stat.value}{stat.unit && <small> {stat.unit}</small>}</strong><span>{stat.label}</span>
      </li>)}</ul>
      <p className="iote-asof">{ioteScale.asOf}</p>
      <p className="iote-accent">{ioteScale.venue}</p>
    </div>
  </div>
}

function MachinesSlide() {
  return <div className="iote-machines-layout">
    <div className="iote-machines-copy">
      <blockquote className="iote-slogan">
        <p lang="zh">{ioteMachines.slogan}</p>
        <p className="iote-slogan-vi">{ioteMachines.sloganVi}</p>
        <footer>{ioteMachines.sloganBy}</footer>
      </blockquote>
      <div className="iote-share">
        <strong>{ioteMachines.share.value}</strong>
        <p>{ioteMachines.share.label}<em>{ioteMachines.estimate}</em></p>
      </div>
    </div>
    <figure className="iote-photo iote-icecream">
      <img src={iotePhotos.icecream.src} alt={iotePhotos.icecream.alt} />
      <figcaption>{ioteMachines.icecreamCaption}</figcaption>
    </figure>
    <figure className="iote-photo iote-tunstar">
      <img src={iotePhotos.tunstar.src} alt={iotePhotos.tunstar.alt} />
      <figcaption>Booth TunStar</figcaption>
    </figure>
  </div>
}

function ShelfSlide() {
  return <div className="iote-shelf-layout">
    {ioteShelf.items.map(item => {
      const photo = iotePhotos[item.photo]
      return <article className="iote-device" key={item.title}>
        <figure><img src={photo.src} alt={photo.alt} /></figure>
        <div>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <p className="iote-credit">{ioteShelf.sampleNote} · {photo.credit}</p>
        </div>
      </article>
    })}
    <p className="iote-quote"><Quotes size={26} weight="fill" aria-hidden="true" /><span>{ioteShelf.quote}</span><em>{ioteShelf.quoteBy}</em></p>
  </div>
}

function TakeawaySlide() {
  return <div className="iote-takeaway-layout">
    <p className="iote-tag">{ioteTakeaway.tag}</p>
    <ol className="iote-steps">{ioteTakeaway.steps.map((step, index) => <li key={step.title}>
      <b>{index + 1}</b>
      <h4>{step.title}</h4>
      <p>{step.body}</p>
    </li>)}</ol>
    <p className="iote-close" style={{ backgroundImage: `linear-gradient(90deg, #15364df2 0%, #15364dd9 55%, #15364d99 100%), url(${iotePhotos.crowd.src})` }}>
      {ioteTakeaway.close}
    </p>
  </div>
}

const bodies: Record<IotePage, () => ReactNode> = {
  open: OpenSlide, scale: ScaleSlide, machines: MachinesSlide, shelf: ShelfSlide, takeaway: TakeawaySlide,
}

export function IoteSlides({ page }: { page: IotePage }) {
  const Body = bodies[page]
  return <Page page={page}><Body /></Page>
}
