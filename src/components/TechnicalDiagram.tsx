import { useId } from 'react'
import type { DiagramKind } from '../data/missions'

// Concept diagrams intentionally contain no live telemetry or geographic coverage claims.
export function TechnicalDiagram({ kind }: { kind: DiagramKind }) {
  const glow = useId()
  return <svg className={`technical-diagram diagram-${kind}`} viewBox="0 0 480 250" aria-hidden="true" focusable="false">
    <defs><filter id={glow}><feGaussianBlur stdDeviation="2.8" /></filter></defs>
    <g className="diagram-grid" stroke="currentColor" fill="none">
      {[40, 90, 140, 190, 240].map(y => <path key={y} d={`M20 ${y} H460`} />)}
      {[40, 120, 200, 280, 360, 440].map(x => <path key={x} d={`M${x} 20 V240`} />)}
    </g>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {kind === 'drone' && <>
        <path className="diagram-trace" d="M40 211 H158 L234 141 L322 92 H443" />
        <g className="diagram-machine">
          <path className="diagram-body" d="M216 101 L265 87 L289 107 L251 128 Z M216 101 V125 L251 146 L289 125 V107 M251 128 V146" />
          <path className="diagram-line" d="M227 102 L178 77 M266 96 L310 65 M227 121 L182 153 M277 117 L329 143" />
          {[[174,75],[313,64],[178,155],[334,145]].map(([x,y]) => <ellipse className="diagram-rotor" key={x} cx={x} cy={y} rx="29" ry="9" />)}
          <path className="diagram-signal" d="M221 167 Q251 191 286 166 M207 181 Q251 218 301 178" />
        </g>
        <circle className="diagram-dot" cx="40" cy="211" r="5" /><circle className="diagram-dot" cx="443" cy="92" r="5" />
      </>}
      {kind === 'lighting' && <>
        {[{x:62,y:120,w:44},{x:139,y:75,w:42},{x:219,y:47,w:47},{x:303,y:103,w:42},{x:377,y:82,w:42}].map((b,i) => <g key={b.x}>
          <path className="diagram-body" d={`M${b.x} 200 V${b.y} L${b.x+b.w} ${b.y-12} V188 Z M${b.x+b.w} ${b.y-12} l14 9 V198 l-14 -10 M${b.x} 200 l14 9 l${b.w} -11`} />
          {[0,1,2,3].map(n => <path className="diagram-window" style={{animationDelay:`${i*.18+n*.1}s`}} key={n} d={`M${b.x+10} ${b.y+17+n*16} l${b.w-19} -7`} />)}
          <path className="diagram-wire" d={`M240 233 H${b.x+22} V211`} />
        </g>)}
        <circle className="diagram-dot" cx="240" cy="233" r="6" />
      </>}
      {kind === 'pcb' && <>
        <path className="diagram-board" d="M73 67 L333 26 L423 155 L159 218 Z M73 67 V82 L159 232 L423 168 V155 M159 218 V232" />
        <path className="diagram-body" d="M181 92 L276 76 L307 129 L211 149 Z M181 92 V103 L211 160 L307 140 V129 M211 149 V160" />
        <path className="diagram-trace" d="M207 87 L184 53 L127 63 M240 81 L226 51 L311 37 M288 100 L337 89 L358 122 L391 115 M298 124 L365 110 M276 149 L297 182 L375 164 M239 156 L260 188 L186 207 M198 132 L164 141 L132 93 L103 100" />
        {[[127,63],[311,37],[391,115],[375,164],[186,207],[103,100]].map(([x,y]) => <circle className="diagram-dot" key={x} cx={x} cy={y} r="4" />)}
        <path className="diagram-line" d="M221 105 l27 -5 l11 19 l-28 6 Z" />
      </>}
      {kind === 'show' && <>
        <ellipse className="diagram-orbit" cx="239" cy="200" rx="197" ry="28" />
        {[0,1,2,3,4,5,6,7].map(i => <path key={i} className="diagram-water" style={{animationDelay:`${i*.07}s`}} d={`M${103+i*38} 196 Q240 ${-40+i%2*35} ${368-i*38} 196`} />)}
        <path className="diagram-beam" d="M49 211 L190 63 L310 89 Z" />
        <path className="diagram-line" d="M39 208 l14 -4 l13 12 l-16 5 Z" />
        {[104,180,256,332,370].map(x=><circle key={x} className="diagram-dot" cx={x} cy="196" r="4" />)}
      </>}
      {kind === 'radar' && <>
        <path className="diagram-orbit" d="M42 194 L200 237 L435 164 L268 123 Z" />
        <path className="diagram-trace" d="M79 112 C163 22 240 127 379 53" />
        {[[91,185],[249,206],[394,161]].map(([x,y]) => <g key={x}>
          <path className="diagram-line" d={`M${x-12} ${y} L${x} ${y-64} L${x+12} ${y} M${x-6} ${y-30} h12`} />
          <path className="diagram-signal" d={`M${x-18} ${y-76} Q${x} ${y-92} ${x+18} ${y-76} M${x-30} ${y-86} Q${x} ${y-111} ${x+30} ${y-86}`} />
          <path className="diagram-wire" d={`M${x} ${y-64} L244 78`} />
        </g>)}
        <g className="diagram-target"><circle className="diagram-dot" cx="244" cy="78" r="6" /><circle className="diagram-orbit" cx="244" cy="78" r="19" /></g>
      </>}
      {kind === 'facade' && <>
        <path className="diagram-board" d="M46 187 L271 134 L437 194 L213 246 Z" />
        {[{x:86,y:81},{x:192,y:53},{x:298,y:26}].map((p,i) => <g key={p.x} className="diagram-layer" style={{animationDelay:`${i*.14}s`}}>
          <path className="diagram-body" d={`M${p.x} ${p.y} l75 -18 v126 l-75 18 Z`} />
          {[1,2,3,4].map(j => <path key={j} className={i===1?'diagram-accent':'diagram-line'} d={`M${p.x} ${p.y+j*25} l75 -18`} />)}
          <path className="diagram-line" d={`M${p.x+25} ${p.y-6} v126 M${p.x+50} ${p.y-12} v126`} />
        </g>)}
        <path className="diagram-trace" d="M60 115 L404 29 M60 172 L404 86" />
      </>}
    </g>
    <g filter={`url(#${glow})`} opacity=".4"><circle className="diagram-dot" cx="240" cy="126" r="5" /></g>
  </svg>
}
