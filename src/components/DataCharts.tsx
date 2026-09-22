import { useId, useState } from 'react'
import { Table } from '@phosphor-icons/react'
import type { ChartSpec } from '../data/topicData'

const ticks = (max: number) => {
  const step = Math.pow(10, Math.floor(Math.log10(max))) / (max / Math.pow(10, Math.floor(Math.log10(max))) < 2 ? 4 : 2)
  const values: number[] = []
  for (let value = 0; value <= max + step / 2; value += step) values.push(Number(value.toFixed(6)))
  return values
}
const round = (value: number) => value.toLocaleString('vi-VN', { maximumFractionDigits: 1 })

function DataTable({ chart }: { chart: ChartSpec }) {
  return <table className="viz-table">
    <caption>{chart.title} — {chart.axisLabel}</caption>
    <thead><tr><th scope="col">Hạng mục</th><th scope="col">Giá trị</th></tr></thead>
    <tbody>
      {chart.points.map(point => <tr key={point.label}><th scope="row">{point.label}</th><td>{point.display}</td></tr>)}
      {chart.total && <tr className="viz-table-total"><th scope="row">{chart.total.label}</th><td>{chart.total.display}</td></tr>}
    </tbody>
  </table>
}

function Columns({ chart }: { chart: ChartSpec }) {
  const max = Math.max(...chart.points.map(point => point.value))
  const scale = max * 1.12
  return <div className="viz-columns" role="img" aria-label={`${chart.title}. ${chart.points.map(point => `${point.label}: ${point.display} ${chart.axisLabel}`).join('. ')}`}>
    <div className="viz-grid" aria-hidden="true">{ticks(scale).map(tick => <span key={tick} style={{ bottom: `${(tick / scale) * 100}%` }}><small>{round(tick)}</small></span>)}</div>
    <ol className="viz-column-list">
      {chart.points.map(point => <li key={point.label} style={{ '--column-height': `${(point.value / scale) * 100}%` } as React.CSSProperties}>
        <span className="viz-column-value">{point.display}</span>
        <span className={`viz-column-mark ${point.emphasis ? 'is-emphasis' : ''}`} style={{ height: `${(point.value / scale) * 100}%` }} title={`${point.label}: ${point.display} ${chart.axisLabel}`} />
        <span className="viz-column-label">{point.label}</span>
      </li>)}
    </ol>
  </div>
}

function Bars({ chart }: { chart: ChartSpec }) {
  const max = Math.max(...chart.points.map(point => point.value))
  return <ol className="viz-bars" role="img" aria-label={`${chart.title}. ${chart.points.map(point => `${point.label}: ${point.display} ${chart.axisLabel}`).join('. ')}`}>
    {chart.points.map(point => <li key={point.label}>
      <span className="viz-bar-label">{point.label}</span>
      <span className="viz-bar-track" title={`${point.label}: ${point.display} ${chart.axisLabel}`}>
        <span className={`viz-bar-mark ${point.emphasis ? 'is-emphasis' : ''}`} style={{ width: `${Math.max(1.5, (point.value / max) * 100)}%` }} />
      </span>
      <span className="viz-bar-value">{point.display}</span>
    </li>)}
  </ol>
}

function Stack({ chart }: { chart: ChartSpec }) {
  const total = chart.points.reduce((sum, point) => sum + point.value, 0)
  return <div className="viz-stack">
    <div className="viz-stack-track" role="img" aria-label={`${chart.title}. ${chart.points.map(point => `${point.label}: ${point.display} ${chart.axisLabel}`).join('. ')}`}>
      {chart.points.map((point, index) => <span key={point.label} className={`viz-stack-mark viz-series-${index + 1}`} style={{ flexBasis: `${(point.value / total) * 100}%` }} title={`${point.label}: ${point.display} ${chart.axisLabel}`} />)}
    </div>
    <ul className="viz-legend">
      {chart.points.map((point, index) => <li key={point.label}>
        <span className={`viz-legend-swatch viz-series-${index + 1}`} aria-hidden="true" />
        <span className="viz-legend-label">{point.label}</span>
        <strong>{point.display}</strong>
        <small>{Math.round((point.value / total) * 100)}%</small>
      </li>)}
    </ul>
  </div>
}

/** Chỉ phần vẽ: nhãn trục, các mark, nút xem dạng bảng. Phần diễn giải do slide bố trí. */
export function ChartPlot({ chart }: { chart: ChartSpec }) {
  const [table, setTable] = useState(false)
  const headingId = useId()
  return <figure className="viz-figure" aria-labelledby={headingId}>
    <figcaption className="viz-head">
      <p className="viz-axis" id={headingId}>{chart.axisLabel}</p>
      <button className="viz-table-toggle" aria-pressed={table} onClick={() => setTable(value => !value)}>
        <Table size={13} aria-hidden="true" />{table ? 'Xem biểu đồ' : 'Xem dạng bảng'}
      </button>
    </figcaption>
    {table
      ? <DataTable chart={chart} />
      : chart.kind === 'column' ? <Columns chart={chart} /> : chart.kind === 'stack' ? <Stack chart={chart} /> : <Bars chart={chart} />}
    {chart.total && chart.kind !== 'stack' && !table && <p className="viz-total">{chart.total.label}: <strong>{chart.total.display}</strong></p>}
  </figure>
}
