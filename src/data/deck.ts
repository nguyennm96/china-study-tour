// Toàn bộ bài chia sẻ là một bộ slide tuyến tính: mở đầu → ba chủ đề → điều mang về.
// Mỗi slide dựng ở khung thiết kế 1280×720 rồi được scale vừa màn hình.
import { subjects, takeaways, type Subject } from './presentation'
import { hotelRobotPages, type HotelRobotPage } from './hotelRobot'
import { ahamoveReferences, type AhamoveSubject } from './ahamove'
import { didiPages, type DidiPage } from './didi'
import { iotePages, type IotePage } from './iote'
import { places } from './places'
import { hall9Pages, type Hall9Page } from './hall9'

export type Slide = { chapter: string; kicker: string; title: string; subjectId?: string } & (
  | { kind: 'team' }
  | { kind: 'recap' }
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
  | { kind: 'iote'; page: IotePage }
  | { kind: 'hall9'; page: Hall9Page }
  | { kind: 'place'; placeId: string; page: 'overview' | 'features' | 'gallery' | 'visit' }
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
    { kind: 'data-summary', chartIndex: subject.id === 'drone' ? 0 : 1, chapter, subjectId: subject.id, kicker: subject.id === 'drone' ? 'Drone · Quy mô' : 'Số liệu tổng hợp · Quy mô', title: subject.id === 'drone' ? 'Ở Thâm Quyến, drone giao hàng đã quen thuộc.' : '150 triệu đơn — trong một ngày đạt đỉnh.' },
  ]
  // Drone chỉ trình bày số liệu Thâm Quyến; bỏ trang thông số theo lựa chọn biên tập.
  if (subject.id !== 'drone') {
    slides.push({ kind: 'data-context', chartIndex: 0, chapter, subjectId: subject.id, kicker: 'Số liệu tổng hợp · Bối cảnh', title: 'Quy mô lớn. Chi phí cũng lớn.' })
  }
  if (subject.id !== 'drone' && (subject.data.specs || subject.data.fieldNotes)) {
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
    { kind: 'team', chapter: 'Mở đầu', kicker: 'Ahamove Study Tour · Shenzhen', title: 'Sáu người. Năm chủ đề. Một hành trình.' },
    { kind: 'recap', chapter: 'Recap', kicker: 'Recap · 24–28/08/2026', title: 'Năm ngày ở Thâm Quyến.' },
    { kind: 'roster', chapter: 'Chủ đề', kicker: 'Nội dung buổi chia sẻ', title: 'Năm chủ đề từ chuyến đi Thâm Quyến.' },
    { kind: 'itinerary', chapter: 'Hành trình', kicker: 'Hành trình 24–28/08/2026', title: 'Tám điểm dừng ở Thâm Quyến.' },
    ...subjects.flatMap(subjectSlides),
    ...takeaways.map((takeaway, takeawayIndex) => ({
      kind: 'takeaway' as const, takeawayIndex, chapter: 'Key takeaways',
      kicker: `Mang về · 0${takeawayIndex + 1} / 0${takeaways.length}`, title: takeaway.title,
    })),
  ]
}

/** Slide “Mang về” đang ẩn khỏi bài trình chiếu; đổi thành true là nó hiện lại.
 *  Dữ liệu takeaways và kind 'takeaways' vẫn giữ nguyên, không xoá. */
const SHOW_TAKEAWAYS = false

/** Bài trình chiếu tuyến tính. Ba chủ đề đã có ghim riêng trên bản đồ hành trình nên
 *  không lặp lại ở đây; buildPresentation() vẫn giữ bản đầy đủ làm nguồn slide cho bản đồ. */
export function classicDeck(): Slide[] {
  const full = buildPresentation()
  return [
    ...full.filter(slide => !slide.subjectId && slide.kind !== 'takeaway'),
    ...(SHOW_TAKEAWAYS ? [{ kind: 'takeaways' as const, chapter: 'Key takeaways', kicker: `Mang về · ${takeaways.length} điều`, title: 'Bốn điều mang về từ Thâm Quyến.' }] : []),
  ]
}

/** Năm điểm dừng còn lại: mỗi nơi một slide số liệu, chỉ hiện trong ghim tương ứng. */
export function placeSlides(): Slide[] {
  return places.flatMap(place => {
    const gallery: Slide[] = place.gallery ? [{ kind: 'place', placeId: place.id, page: 'gallery', chapter: 'Điểm dừng', subjectId: place.id, kicker: place.gallery.kicker ?? `${place.kicker.split(' · ')[0]} · Ảnh của đoàn`, title: place.gallery.title }] : []
    return [
      { kind: 'place' as const, placeId: place.id, page: 'overview' as const, chapter: 'Điểm dừng', subjectId: place.id, kicker: place.kicker, title: place.headline },
      ...(place.gallery?.afterOverview ? gallery : []),
      ...(place.features.length ? [{ kind: 'place' as const, placeId: place.id, page: 'features' as const, chapter: 'Điểm dừng', subjectId: place.id, kicker: `${place.kicker.split(' · ')[0]} · Đặc điểm`, title: place.featuresTitle }] : []),
      // Ghim IOTE đi sâu thêm Hall 9: hai trang NFC và RFID ngay sau trang bốn hall.
      ...(place.id === 'place-iote' ? hall9Pages.map(page => ({ kind: 'hall9' as const, page: page.key, chapter: 'Điểm dừng', subjectId: place.id, kicker: page.kicker, title: page.title })) : []),
      // Lấy từ bài nói của Tiến: trang "AI là máy móc" đứng ngay trước trang ảnh robot của đoàn.
      ...(place.id === 'place-iote' ? iotePages.map(page => ({ kind: 'iote' as const, page: page.key, chapter: 'Điểm dừng', subjectId: place.id, kicker: page.kicker, title: page.title })) : []),
      ...(!place.gallery?.afterOverview ? gallery : []),
      ...(place.visit ? [{ kind: 'place' as const, placeId: place.id, page: 'visit' as const, chapter: 'Điểm dừng', subjectId: place.id, kicker: `${place.kicker.split(' · ')[0]} · Gợi ý ghé thăm`, title: place.visit.title }] : []),
    ]
  })
}

/** Bài Didi của Sâm & Bình là phần chia sẻ rời, không nằm trong mạch ba chủ đề chính nên không gọi
 *  từ buildPresentation(). Nó gắn vào ghim Sân bay Bảo An và chạy thành deck riêng ở /didi/.
 *  Nhãn chương theo người trình bày để thanh tiến trình cho thấy chỗ chuyển người. */
export function didiSlides(): Slide[] {
  return didiPages.map(page => ({
    kind: 'didi' as const, page: page.key, chapter: page.chapter, subjectId: 'didi',
    kicker: page.kicker, title: page.title,
  }))
}

/** Deck /iote/ là đúng dãy trang của ghim IOTE, để trình chiếu và ghim trên bản đồ không lệch nhau.
 *  Chỉ đổi nhãn chương cho thanh tiến trình, vì trong ghim mọi trang cùng nhãn "Điểm dừng". */
export function ioteSlides(): Slide[] {
  const placeChapters = { overview: 'Tổng quan', features: 'Bốn hall', gallery: 'Ảnh của đoàn', visit: 'Ghé thăm' } as const
  return placeSlides().filter(slide => slide.subjectId === 'place-iote').map(slide => ({
    ...slide,
    chapter: slide.kind === 'place' ? placeChapters[slide.page] : slide.kind === 'hall9' ? 'Hall 9' : slide.kind === 'iote' ? iotePages.find(page => page.key === slide.page)!.chapter : slide.chapter,
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
