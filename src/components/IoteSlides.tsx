import { ioteMachines, iotePages, iotePhotos, type IotePage } from '../data/iote'
import './IoteSlides.css'

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

/** Không có huy hiệu người trình bày: trang này nằm trong ghim IOTE, cùng khung với các trang điểm dừng. */
export function IoteSlides({ page }: { page: IotePage }) {
  const meta = iotePages.find(item => item.key === page)!
  return <div className={`iote-page iote-${page}`}>
    <div className="iote-body"><MachinesSlide /></div>
    <p className="iote-source">{meta.source}</p>
  </div>
}
