import { useEffect, useState } from 'react'
import { ArrowRight, Check, Compass } from '@phosphor-icons/react'
import { atlasChapters as chapters, atlasChapterCounts as counts } from '../data/atlasDeck'
import { atlasHash, atlasStops, parseAtlasRoute, type ChapterId, type StopId } from '../data/atlas'
import { AtlasMap } from './AtlasMap'
import { AtlasChapter } from './AtlasChapter'
import { Presentation } from './Presentation'
import './LiveAtlas.css'

export default function LiveAtlas() {
  const [route, setRoute] = useState(() => parseAtlasRoute(window.location.hash, counts))
  const [visited, setVisited] = useState<StopId[]>([])
  const [resetKey, setResetKey] = useState(0)
  const selected = atlasStops.find(stop => stop.id === route.chapter) ?? null
  const hasChapter = route.chapter !== null && route.page !== null

  useEffect(() => {
    const sync = () => setRoute(parseAtlasRoute(window.location.hash, counts))
    window.addEventListener('hashchange', sync)
    document.title = 'Thâm Quyến · Live Atlas | Ahamove Study Tour'
    return () => window.removeEventListener('hashchange', sync)
  }, [])
  const navigate = (chapter: ChapterId | null, page: number | null = null) => {
    const hash = atlasHash(chapter, page)
    if (window.location.hash !== hash) window.location.hash = hash
    else setRoute(parseAtlasRoute(hash, counts))
  }
  const finish = () => {
    if (selected) {
      setVisited(previous => previous.includes(selected.id) ? previous : [...previous, selected.id])
      const next = atlasStops[atlasStops.findIndex(stop => stop.id === selected.id) + 1]
      if (next) navigate(next.id)
      else navigate('takeaways', 0)
    } else navigate(null)
  }
  if (route.chapter === 'team') return <Presentation slides={chapters.team} index={route.page ?? 0}
    onIndex={page => navigate('team', page)} onComplete={() => navigate(null)} completeLabel="Mở live-map" />

  return <main className="live-atlas" aria-label="Live-map Thâm Quyến">
    <AtlasMap selected={selected?.id ?? null} onSelect={id => navigate(id, 0)} resetKey={resetKey} />
    <div className="atlas-map-veil" aria-hidden="true" />
    <header className="atlas-header">
      <a className="atlas-brand" href="#map" aria-label="Ahamove · Toàn cảnh bản đồ" onClick={() => setResetKey(value => value + 1)}><img src="/brand/ahamove-logo.svg" alt="Ahamove" /><span>STUDY TOUR</span></a>
      <nav aria-label="Điều hướng bài trình bày">
        <button onClick={() => navigate('takeaways', 0)}>Điều mang về <ArrowRight size={16} /></button>
        <a href="/#1" className="atlas-classic-link">Bản slide</a>
      </nav>
    </header>

    <div className="atlas-north" aria-hidden="true"><span>N</span><Compass size={39} weight="light" /></div>
    <footer className="atlas-footer">
      <div className="atlas-route-caption"><span>HÀNH TRÌNH</span><span>{visited.length} / 3</span></div>
      <nav className="atlas-stops" aria-label="Ba chủ đề trên bản đồ">{atlasStops.map(stop => <button className="atlas-stop" key={stop.id} onClick={() => navigate(stop.id, 0)} aria-haspopup="dialog" aria-pressed={selected?.id === stop.id} style={{ '--stop-color': stop.color } as React.CSSProperties}>
        <span className="atlas-stop-number">{visited.includes(stop.id) ? <Check size={22} /> : stop.number}</span>
        <span className="atlas-stop-copy"><strong>{stop.title}</strong></span>
        <ArrowRight className="atlas-stop-arrow" size={21} />
      </button>)}</nav>
      <div className="atlas-bottom-line"><span>SHENZHEN EXPLORER <b>VOL. 02</b></span><span>Điểm robot & Meituan mô phỏng</span></div>
    </footer>

    {hasChapter && <AtlasChapter key={`chapter-${route.chapter}`} slides={chapters[route.chapter!]} index={route.page!}
      label={selected ? `${selected.number} / ${selected.title}` : 'Điều mang về Ahamove'}
      color={selected?.color ?? '#d85c23'} onPage={page => navigate(route.chapter, page)}
      onClose={() => navigate(selected?.id ?? null)} onFinish={finish}
      finishLabel={route.chapter === 'takeaways' ? 'Về bản đồ' : selected?.id === 'meituan' ? 'Điều mang về' : 'Chủ đề tiếp theo'} />}
  </main>
}
