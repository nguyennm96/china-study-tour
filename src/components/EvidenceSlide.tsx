import { useState } from 'react'
import type { EvidenceMedia } from '../data/missionMedia'

export function EvidenceSlide({ media }: { media: EvidenceMedia }) {
  const [failed, setFailed] = useState(false)
  return <div className={`evidence-layout evidence-${media.type}`}>
    <div className="evidence-heading"><span className="presentation-eyebrow">{media.type === 'video' ? 'Video từ đơn vị phát triển' : 'Tư liệu thực tế'}</span><h2>{media.title}</h2></div>
    <figure className="evidence-figure">
      {media.type === 'video'
        ? <video controls playsInline preload="metadata" poster={media.poster} tabIndex={0} aria-label={media.title} onError={() => setFailed(true)}><source src={media.src} type="video/mp4" onError={() => setFailed(true)} /></video>
        : <img src={media.src} alt={media.caption} onError={() => setFailed(true)} />}
      {failed && <p className="evidence-error" role="status">Chưa tải được tư liệu. <a href={media.sourceUrl} target="_blank" rel="noreferrer">Mở bản gốc ↗</a></p>}
    </figure>
    <div className="evidence-copy"><p>{media.caption}</p><a className="evidence-credit" href={media.sourceUrl} target="_blank" rel="noreferrer">{media.credit} ↗</a><ul>{media.focus.map(point => <li key={point}>{point}</li>)}</ul></div>
  </div>
}
