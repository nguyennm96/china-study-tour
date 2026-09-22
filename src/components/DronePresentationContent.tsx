import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight, Play } from '@phosphor-icons/react'
import type { DroneMedia } from '../data/dronePresentation'

export type Moment = { title: string; media: DroneMedia; illustrated?: boolean; featured?: boolean }
export type ExperienceSpec = {
  eyebrow: string
  headline: string
  highlight: string
  moments: Moment[]
  note?: string
}

/** Cuộn phim tư liệu của đoàn: một tiêu đề, các khung media, mốc thời gian nối liền. */
export function ExperienceScene({ spec }: { spec: ExperienceSpec }) {
  const [playing, setPlaying] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  useLayoutEffect(() => {
    if (playing) videoRef.current?.focus({ preventScroll: true })
  }, [playing])
  const count = spec.moments.length
  const columns = spec.moments.map(moment => (moment.featured ? '1.14fr' : '1fr')).join(' ')

  return <section className="chapter-enter drone-film" aria-label={spec.headline}>
    <div className="drone-film-heading">
      <p className="tour-eyebrow">{spec.eyebrow}</p>
      <h3>{spec.headline} <span>{spec.highlight}</span></h3>
    </div>
    <ol className="drone-filmstrip" style={{ ['--film-count' as string]: count, gridTemplateColumns: columns }}>
      {spec.moments.map(({ media, title, illustrated, featured }, index) => <li className={`drone-moment ${featured ? 'is-featured' : ''}`} key={title}>
        <figure className="drone-moment-image">
          {media.kind === 'video' && playing === title
            ? <video ref={videoRef} src={media.src} poster={media.poster} controls autoPlay playsInline preload="metadata" tabIndex={0} aria-label={media.alt}>Trình duyệt chưa phát được video. <a href={media.src}>Mở video gốc</a></video>
            : <><img src={media.kind === 'video' ? media.poster : media.src} alt={media.alt} style={{ objectPosition: media.objectPosition }} />
              {media.kind === 'video' && <button className="drone-play" onClick={() => setPlaying(title)} aria-label={`Phát video: ${title}`}><span className="drone-play-icon"><Play weight="fill" size={26} aria-hidden="true" /></span></button>}</>}
          {media.kind === 'image' && media.url && <a className="drone-moment-open" href={media.url} target="_blank" rel="noreferrer" aria-label={`Xem tư liệu gốc: ${title}`}><ArrowUpRight size={18} aria-hidden="true" /></a>}
        </figure>
        <div className="drone-moment-caption"><span className="drone-moment-number">0{index + 1}</span><span className="drone-moment-dot" /><strong>{title}</strong>{illustrated && <small>{media.caption}</small>}</div>
      </li>)}
    </ol>
  </section>
}
