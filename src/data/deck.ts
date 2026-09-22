// Toàn bộ bài chia sẻ là một bộ slide tuyến tính: mở đầu → ba chủ đề → điều mang về.
// Mỗi slide dựng ở khung thiết kế 1280×720 rồi được scale vừa màn hình.
import { subjects, takeaways, type Subject } from './presentation'
import { hotelRobotPages, type HotelRobotPage } from './hotelRobot'
import { ahamoveReferences, type AhamoveSubject } from './ahamove'
import { didiPages, type DidiPage } from './didi'
import { places } from './places'

export type Slide = { chapter: string; kicker: string; title: string; subjectId?: string } & (
  | { kind: 'team' }
  | { kind: 'roster' }
  | { kind: 'itinerary' }
  | { kind: 'title' }
  | { kind: 'experience' }
  | { kind: 'data-summary'; chartIndex: number }
  | { kind: 'data-context'; chartIndex: number }
  | { kind: 'evidence' }
  | { kind: 'mechanism' }
  | { kind: 'takeaway'; takeawayIndex: number }
  | { kind: 'takeaways' }
  | { kind: 'hotel-robot'; page: HotelRobotPage }
  | { kind: 'ahamove'; subjectId: AhamoveSubject }
  | { kind: 'didi'; page: DidiPage }
  | { kind: 'place'; placeId: string }
)

/** Nhãn ngắn dùng cho thanh tiến trình; tên chủ đề đầy đủ vẫn hiện ở chân slide. */
const railLabel: Record<string, string> = { drone: 'Drone', robots: 'Robot', meituan: 'Meituan' }

function subjectSlides(subject: Subject): Slide[] {
  const chapter = railLabel[subject.id] ?? subject.title
  if (subject.id === 'robots') return [
    { kind: 'title', chapter, subjectId: subject.id, kicker: subject.label, title: subject.title },
    ...hotelRobotPages.map(page => ({ kind: 'hotel-robot' as const, chapter, subjectId: subject.id, kicker: page.kicker, title: page.title, page: page.key })),
  ]
  const slides: Slide[] = [
    { kind: 'title', chapter, subjectId: subject.id, kicker: subject.label, title: subject.title },
    { kind: 'experience', chapter, subjectId: subject.id, kicker: subject.experience.eyebrow, title: `${subject.experience.headline} ${subject.experience.highlight}` },
    { kind: 'data-summary', chartIndex: subject.id === 'drone' ? 0 : 1, chapter, subjectId: subject.id, kicker: 'Số liệu tổng hợp · Quy mô', title: subject.id === 'drone' ? 'Một triệu đơn. Một mạng lưới đang lớn lên.' : '150 triệu đơn — trong một ngày đạt đỉnh.' },
    { kind: 'data-context', chartIndex: subject.id === 'drone' ? 1 : 0, chapter, subjectId: subject.id, kicker: 'Số liệu tổng hợp · Bối cảnh', title: subject.id === 'drone' ? 'Hạ tầng và tốc độ: đọc đúng phạm vi.' : 'Quy mô lớn. Chi phí cũng lớn.' },
  ]
  if (subject.data.specs || subject.data.fieldNotes) {
    slides.push({ kind: 'evidence', chapter, subjectId: subject.id, kicker: 'Ranh giới bằng chứng', title: subject.data.specs?.title ?? subject.data.fieldNotes!.title })
  }
  slides.push({
    kind: 'mechanism', chapter, subjectId: subject.id,
    kicker: subject.mechanism.kind === 'flow' ? subject.mechanism.flow.eyebrow : 'Cơ chế · mô phỏng',
    title: subject.mechanism.kind === 'flow' ? subject.mechanism.flow.headline : 'Theo chân một hộp hàng.',
  })
  const referenceSubject = subject.id as AhamoveSubject
  slides.push({ kind: 'ahamove', chapter, subjectId: referenceSubject, kicker: `${chapter} · Liên hệ Ahamove · Gợi ý thảo luận`, title: ahamoveReferences[referenceSubject].title })
  return slides
}

export function buildPresentation(): Slide[] {
  return [
    // Ba slide mở đầu mang ba nhãn chương khác nhau: deckRail gom theo slide liên tiếp cùng
    // chương, nên đặt tên riêng là cách duy nhất để "Hành trình" có nhãn mà không sinh hai
    // nhóm "Mở đầu" rời nhau khi bản đồ chen vào giữa.
    { kind: 'team', chapter: 'Mở đầu', kicker: 'Ahamove Study Tour · Shenzhen', title: 'Sáu người. Ba chủ đề. Một hành trình.' },
    { kind: 'roster', chapter: 'Thành viên', kicker: 'Những người kể chuyện', title: 'Ba cặp, ba chủ đề.' },
    { kind: 'itinerary', chapter: 'Hành trình', kicker: 'Hành trình 24–28/08/2026', title: 'Tám điểm dừng ở Thâm Quyến.' },
    ...subjects.flatMap(subjectSlides),
    ...takeaways.map((takeaway, takeawayIndex) => ({
      kind: 'takeaway' as const, takeawayIndex, chapter: 'Key takeaways',
      kicker: `Mang về · 0${takeawayIndex + 1} / 0${takeaways.length}`, title: takeaway.title,
    })),
  ]
}

/** Bài trình chiếu tuyến tính. Ba chủ đề đã có ghim riêng trên bản đồ hành trình nên
 *  không lặp lại ở đây; buildPresentation() vẫn giữ bản đầy đủ làm nguồn slide cho bản đồ. */
export function classicDeck(): Slide[] {
  const full = buildPresentation()
  return [
    ...full.filter(slide => !slide.subjectId && slide.kind !== 'takeaway'),
    // Bốn điều mang về gom vào một slide; buildPresentation() vẫn giữ bốn slide rời cho V2.
    { kind: 'takeaways', chapter: 'Key takeaways', kicker: `Mang về · ${takeaways.length} điều`, title: 'Bốn điều mang về từ Thâm Quyến.' },
  ]
}

/** Năm điểm dừng còn lại: mỗi nơi một slide số liệu, chỉ hiện trong ghim tương ứng. */
export function placeSlides(): Slide[] {
  return places.map(place => ({
    kind: 'place' as const, placeId: place.id, chapter: 'Điểm dừng', subjectId: place.id,
    kicker: place.kicker, title: place.headline,
  }))
}

/** Bài Didi của Sâm là phần chia sẻ rời: chỉ gắn vào ghim Sân bay Bảo An trên bản đồ,
 *  không nằm trong mạch ba chủ đề chính nên không gọi từ buildPresentation(). */
export function didiSlides(): Slide[] {
  return didiPages.map(page => ({
    kind: 'didi' as const, page: page.key, chapter: 'Didi', subjectId: 'didi',
    kicker: page.kicker, title: page.title,
  }))
}

/** Các nhóm liên tiếp dùng để vẽ thanh tiến trình dưới đáy slide. */
export function deckRail(slides: Slide[]) {
  const groups: { label: string; from: number; count: number }[] = []
  slides.forEach((slide, index) => {
    const last = groups[groups.length - 1]
    if (last && last.label === slide.chapter) last.count += 1
    else groups.push({ label: slide.chapter, from: index, count: 1 })
  })
  return groups
}
