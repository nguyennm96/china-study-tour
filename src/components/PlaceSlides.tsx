import { placeById } from '../data/places'
import { source } from '../data/sources'
import './PlaceSlides.css'

/** Cỡ số suy từ độ dài chuỗi, cùng cách làm với thẻ số liệu của ba chủ đề chính. */
const valueSize = (value: string, unit?: string) => {
  const weight = value.length + (unit ? (unit.length + 1) * 0.45 : 0)
  return ([[8, 52], [12, 44], [16, 36], [Infinity, 30]] as [number, number][]).find(([limit]) => weight <= limit)![1]
}

export function PlaceSlide({ placeId }: { placeId: string }) {
  const place = placeById[placeId]
  return <div className="place-layout">
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
