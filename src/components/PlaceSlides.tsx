import { placeById } from '../data/places'
import { source } from '../data/sources'
import './PlaceSlides.css'

/** Cỡ số suy từ độ dài chuỗi, cùng cách làm với thẻ số liệu của ba chủ đề chính. */
const valueSize = (value: string, unit?: string) => {
  const weight = value.length + (unit ? (unit.length + 1) * 0.45 : 0)
  return ([[8, 52], [12, 44], [16, 36], [Infinity, 30]] as [number, number][]).find(([limit]) => weight <= limit)![1]
}

export function PlaceSlide({ placeId, page }: { placeId: string; page: 'overview' | 'features' | 'gallery' | 'visit' }) {
  const place = placeById[placeId]
  if (page === 'features' && place.features.length > 0 && place.features.every(feature => feature.photo)) return <ol className="place-feature-gallery">
    {place.features.map((feature, index) => {
      const photo = feature.photo!
      return <li key={feature.title}>
        <figure>
          <img src={photo.src} alt={photo.alt} style={photo.focus ? { objectPosition: photo.focus } : undefined} />
          <figcaption>
            <span className="place-feature-index" aria-hidden="true">0{index + 1}</span>
            <h4>{feature.title.replaceAll(' · ', '\u00a0· ')}</h4>
            <p className="place-feature-detail">{feature.detail}</p>
          </figcaption>
        </figure>
      </li>
    })}
  </ol>
  if (page === 'features') return <div className="place-features">
    <figure className="place-photo is-wide">
      <img src={place.photoAlt.src} alt={place.photoAlt.alt} />
      <figcaption>{place.photoAlt.credit}</figcaption>
    </figure>
    <ol className="place-feature-list">{place.features.map((feature, index) => <li key={feature.title}>
      <span className="place-feature-index" aria-hidden="true">0{index + 1}</span>
      <div>
        <h4>{feature.title}</h4><p>{feature.detail}</p>
        {feature.context && <p className="place-feature-context">{feature.context}
          {feature.sourceIds?.map((id, sourceIndex) => {
            const item = source(id)
            return <a key={id} href={item.url} target="_blank" rel="noreferrer" aria-label={`Nguồn ${feature.title}: ${item.publisher}`} title={`${item.publisher} · ${item.date}`}>[{sourceIndex + 1}]</a>
          })}
        </p>}
      </div>
    </li>)}</ol>
  </div>

  if (page === 'gallery' && place.gallery) {
    const { video, photos, description, credit } = place.gallery
    const figures = photos.map(photo => <figure key={photo.src} className={`place-gallery-item ${photo.tall ? 'is-tall' : ''}`}>
      <img src={photo.src} alt={photo.alt} style={photo.focus ? { objectPosition: photo.focus } : undefined} />
      <figcaption>{photo.caption}</figcaption>
    </figure>)
    const columns = video ? undefined : { gridTemplateColumns: photos.map(photo => `minmax(0, ${photo.weight ?? 1}fr)`).join(' ') }
    return <div className={`place-gallery ${video ? 'has-video' : ''} ${description ? 'has-description' : ''}`} style={columns}>
      {description && <p className="place-gallery-description">{description}</p>}
      {video && <figure className="place-gallery-video">
        <video src={video.src} poster={video.poster} controls autoPlay muted loop playsInline preload="metadata" aria-label={video.alt}>Trình duyệt chưa phát được video.</video>
        <figcaption>{video.caption}</figcaption>
      </figure>}
      {/* Lưới hai hàng: số cột đủ chứa mọi ảnh, ảnh dọc tính là hai ô. */}
      {video ? <div className="place-gallery-grid" style={{ gridTemplateColumns: `repeat(${Math.ceil(photos.reduce((cells, photo) => cells + (photo.tall ? 2 : 1), 0) / 2)}, minmax(0, 1fr))` }}>{figures}</div> : figures}
      {credit !== '' && <p className="place-gallery-credit">{credit ?? `${video ? 'Ảnh và video' : 'Ảnh'} của đoàn · 08/2026`}</p>}
    </div>
  }

  if (page === 'visit' && place.visit) return <ol className="place-visit">
    {place.visit.items.map(item => <li key={item.label}>
      <p className="place-visit-label">{item.label}</p>
      <h4>{item.title}</h4>
      <p className="place-visit-detail">{item.detail}</p>
    </li>)}
  </ol>

  const metrics = place.metrics.length > 0 && <ul className="place-metrics">{place.metrics.map(metric => <li key={metric.label}>
    <p className="place-value" style={{ fontSize: valueSize(metric.value, metric.unit) }}>
      {metric.value}{metric.unit && <> <small>{metric.unit}</small></>}
    </p>
    <p className="place-label">{metric.label}</p>
    <p className="place-asof">{metric.asOf}</p>
  </li>)}</ul>

  return <div className={`place-layout ${place.overviewFacts ? 'has-overview-facts' : ''}`}>
    <figure className="place-photo">
      <img src={place.photo.src} alt={place.photo.alt} />
      {place.photo.credit && <figcaption>{place.photo.credit}</figcaption>}
    </figure>
    <div className="place-copy">
      {place.overviewFacts ? <>
        <dl className="place-overview-facts">{place.overviewFacts.map(fact => <div key={fact.label}>
          <dt>{fact.label}</dt><dd>{fact.detail}</dd>
        </div>)}</dl>
        {metrics}
      </> : <p className="place-lead">{place.lead}</p>}
      {place.note && <p className="place-note">{place.note}</p>}
      {place.showSources !== false && <p className="place-sources">
        {place.sourceIds.map(id => source(id)).map(item => `${item.publisher} · ${item.date}`).join(' · ')}
      </p>}
    </div>
    {!place.overviewFacts && metrics}
  </div>
}
