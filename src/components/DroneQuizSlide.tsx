import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Buildings, Check, Coins, Scales, ShieldCheck, X } from '@phosphor-icons/react'
import { ahamoveReferences } from '../data/ahamove'
import './DroneQuizSlide.css'

export function DroneQuizSlide() {
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [showEvidence, setShowEvidence] = useState(false)
  const [audioFailed, setAudioFailed] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    return () => { audio?.pause() }
  }, [])

  useEffect(() => { headingRef.current?.focus() }, [showEvidence])

  const choose = (value: boolean) => {
    if (answer !== null) return
    setAnswer(value)
    setAudioFailed(false)
    const audio = audioRef.current
    if (!audio) return
    audio.src = `/media/audio/quiz-${value ? 'correct' : 'incorrect'}.wav`
    audio.volume = 0.55
    void audio.play().catch(error => {
      if (error.name !== 'AbortError' && audioRef.current === audio) setAudioFailed(true)
    })
  }

  return <div className={`drone-quiz ${showEvidence ? 'is-evidence' : ''}`}>
    <audio ref={audioRef} preload="none" hidden />
    {showEvidence ? <div className="drone-quiz-evidence">
      <h2 className="drone-quiz-evidence-title" ref={headingRef} tabIndex={-1}>Giao hàng bằng drone tại Việt Nam.</h2>
      <DroneEvidence />
    </div> : <div className="drone-quiz-question">
      <h2 className="drone-quiz-heading" ref={headingRef} tabIndex={-1}>{ahamoveReferences.drone.title}</h2>
      <div className="drone-quiz-choices" role="group" aria-label="Chọn đáp án">
        {[true, false].map((value, index) => {
          const selected = answer === value
          const result = answer === null ? '' : value ? 'is-correct' : selected ? 'is-incorrect' : 'is-unselected'
          return <button key={String(value)} type="button" className={`drone-quiz-choice ${result}`} aria-label={value ? 'Có' : 'Không'} aria-pressed={selected} aria-disabled={answer !== null} onClick={() => choose(value)}>
            <span className="drone-quiz-choice-letter" aria-hidden="true">{index === 0 ? 'A' : 'B'}</span>
            <strong>{value ? 'Có' : 'Không'}</strong>
            <span className="drone-quiz-choice-result">
              {answer !== null && (value ? <><Check size={24} weight="bold" aria-hidden="true" />Đáp án đúng</> : selected ? <><X size={24} weight="bold" aria-hidden="true" />Chưa đúng</> : null)}
            </span>
          </button>
        })}
      </div>
      <div className="drone-quiz-feedback">
        <div role="status" aria-live="polite" aria-atomic="true">
          {answer === null ? <p className="drone-quiz-hint">Mời bạn chọn một đáp án.</p> : <>
            <p className={`drone-quiz-verdict ${answer ? 'is-correct' : 'is-incorrect'}`}>{answer ? 'Chính xác!' : 'Chưa chính xác.'}</p>
            <p className="drone-quiz-explanation">{answer ? 'Việt Nam đã triển khai tuyến giao hàng bằng UAV.' : 'Đáp án đúng là Có.'}</p>
          </>}
        </div>
        {answer !== null && <button type="button" className="drone-quiz-reveal" onClick={() => setShowEvidence(true)}>Xem mô hình tại Việt Nam<ArrowRight size={22} aria-hidden="true" /></button>}
      </div>
      {audioFailed && <p className="drone-quiz-audio-error" role="status">Không phát được âm thanh</p>}
    </div>}
  </div>
}

/** Cùng thứ tự với `conditions` trong dữ liệu drone. */
const conditionIcons = [Scales, Buildings, ShieldCheck, Coins]

/** Dẫn chứng sau câu hỏi: tuyến Việt Nam → so với Trung Quốc → điều kiện → hướng đi. */
function DroneEvidence() {
  const { vietnam, challenges, conditions, question } = ahamoveReferences.drone
  return <div className="drone-evidence">
    <figure className="drone-evidence-case">
      <div className="drone-evidence-photo">
        <img src={vietnam.photo.src} alt={vietnam.photo.alt} style={{ objectPosition: vietnam.photo.focus }} />
        <small>{vietnam.photo.credit}</small>
      </div>
      <figcaption>
        <p className="drone-evidence-eyebrow">{vietnam.eyebrow}</p>
        <h3>{vietnam.title}</h3>
        <dl className="drone-evidence-stats">{vietnam.stats.map(stat => <div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt></div>)}</dl>
      </figcaption>
    </figure>
    <div className="drone-evidence-analysis">
      <section className="drone-evidence-compare" aria-labelledby="drone-compare-title">
        <h3 id="drone-compare-title" className="drone-evidence-label">Thách thức · Việt Nam so với Trung Quốc</h3>
        <table>
          <thead><tr><td /><th scope="col" className="is-vietnam">Việt Nam</th><th scope="col">Trung Quốc</th></tr></thead>
          <tbody>{challenges.map(row => <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td className="is-vietnam"><strong>{row.vietnam.value}</strong><span>{row.vietnam.detail}</span></td>
            <td><strong>{row.china.value}</strong><span>{row.china.detail}</span></td>
          </tr>)}</tbody>
        </table>
      </section>
      <section className="drone-evidence-conditions" aria-labelledby="drone-conditions-title">
        <h3 id="drone-conditions-title" className="drone-evidence-label">Điều kiện để tiến tới</h3>
        <ol>{conditions.map((condition, index) => {
          const Icon = conditionIcons[index]
          return <li key={condition}><span className="drone-evidence-icon"><Icon size={24} aria-hidden="true" /></span>{condition}</li>
        })}</ol>
      </section>
      <p className="drone-evidence-direction"><span>Hướng phát triển trong tương lai</span><strong>{question}</strong></p>
    </div>
  </div>
}
