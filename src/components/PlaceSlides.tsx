import { placeById } from '../data/places'
import { source } from '../data/sources'
import './PlaceSlides.css'

/** Cỡ số suy từ độ dài chuỗi, cùng cách làm với thẻ số liệu của ba chủ đề chính. */
const valueSize = (value: string, unit?: string) => {
  const weight = value.length + (unit ? (unit.length + 1) * 0.45 : 0)
  return ([[8, 52], [12, 44], [16, 36], [Infinity, 30]] as [number, number][]).find(([limit]) => weight <= limit)![1]
}

export function PlaceSlide({ placeId, page }: { placeId: string; page: 'overview' | 'features' | 'visit' }) {
  const place = placeById[placeId]
  if (page === 'features') return <div className="place-features">
    <figure className="place-photo is-wide">
      <img src={place.photoAlt.src} alt={place.photoAlt.alt} />
      <figcaption>{place.photoAlt.credit}</figcaption>
    </figure>
    <ol className="place-feature-list">{place.features.map((feature, index) => <li key={feature.title}>
      <span className="place-feature-index" aria-hidden="true">0{index + 1}</span>
      <div><h4>{feature.title}</h4><p>{feature.detail}</p></div>
    </li>)}</ol>
  </div>

  if (page === 'visit' && place.visit) return <ol className="place-visit">
    {place.visit.items.map(item => <li key={item.label}>
      <p className="place-visit-label">{item.label}</p>
      <h4>{item.title}</h4>
      <p className="place-visit-detail">{item.detail}</p>
    </li>)}
  </ol>

  return <div className="place-layout">
    <figure className="place-photo">
      <img src={place.photo.src} alt={place.photo.alt} />
      <figcaption>{place.photo.credit}</figcaption>
    </figure>
    <div className="place-copy">
      <p className="place-lead">{place.lead}</p>
      {place.note && <p className="place-note">{place.note}</p>}
      <p className="place-sources">
        {place.sourceIds.map(id => source(id)).map(item => `${item.publisher} · ${item.date}`).join(' · ')}
      </p>
    </div>
    <ul className="place-metrics">{place.metrics.map(metric => <li key={metric.label}>
      <p className="place-value" style={{ fontSize: valueSize(metric.value, metric.unit) }}>
        {metric.value}{metric.unit && <> <small>{metric.unit}</small></>}
      </p>
      <p className="place-label">{metric.label}</p>
      <p className="place-asof">{metric.asOf}</p>
    </li>)}</ul>
  </div>
}
