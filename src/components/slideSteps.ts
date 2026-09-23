// Một số slide có bước lật đáp án: lần "tiếp" đầu tiên chỉ lật, lần sau mới sang slide.
// Deck và modal bản đồ đều hỏi ở đây trước khi chuyển trang, nên slide không phải tự bắt phím.
let pending: (() => void) | null = null

/** Slide đang chờ lật gọi hàm này khi mount; trả về hàm huỷ khi đã lật hoặc rời slide. */
export function holdNextStep(reveal: () => void) {
  pending = reveal
  return () => { if (pending === reveal) pending = null }
}

/** Trả về true nếu lần "tiếp" này đã được dùng để lật đáp án. */
export function consumeNextStep() {
  if (!pending) return false
  const reveal = pending
  pending = null
  reveal()
  return true
}
