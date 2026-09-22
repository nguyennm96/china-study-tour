import { ForkKnife, PaperPlaneTilt, Robot } from '@phosphor-icons/react'
import type { Subject } from '../data/presentation'
import fallbackTeamArt from '../../assets/generated/shenzhen-team-editorial-v2.png'

// Thả một ảnh vào assets/team/ là trang Team dùng ảnh đó; thư mục trống thì quay về ảnh mặc định.
// Xem assets/team/README.md.
const dropped = import.meta.glob('../../assets/team/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const droppedPath = Object.keys(dropped).sort()[0]
const customTeamArt = {
  src: droppedPath ? dropped[droppedPath] : '',
  alt: 'Key visual “Shenzhen from A to Z” do AI tạo, không phải ảnh chụp của đoàn: sáu thành viên mặc áo Ahamove tạo dáng trước skyline Thâm Quyến, xung quanh là tàu metro, drone giao hàng, robot dịch vụ, xe máy và chợ đêm.',
}
const teamArt = customTeamArt.src
  ? customTeamArt
  : { src: fallbackTeamArt, alt: 'Ảnh minh họa do AI tạo, không phải ảnh thật của đoàn: một nhóm cùng khám phá Shenzhen bên bờ vịnh' }

const icons: Record<string, typeof Robot> = { drone: PaperPlaneTilt, robots: Robot, meituan: ForkKnife }
export function SubjectIcon({ id, size = 24 }: { id: string; size?: number }) {
  const Icon = icons[id] ?? Robot
  return <Icon size={size} weight="regular" aria-hidden="true" />
}

export function SubjectFigure({ subject }: { subject: Subject }) {
  return <figure className="subject-figure"><img src={subject.cover} alt={subject.caption} /><figcaption>{subject.caption}</figcaption></figure>
}

export { teamArt }
