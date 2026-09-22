// Bài chia sẻ là một dãy slide phẳng. Đường dẫn chia sẻ đánh số từ 1 cho dễ đọc khi trình bày.
export function parseSlideRoute(hash: string, total: number): number {
  const raw = hash.replace(/^#\/?/, '').split('/')[0]
  const value = Number(raw)
  if (!Number.isInteger(value)) return 0
  return Math.max(0, Math.min(total - 1, value - 1))
}

export function slideHash(index: number) {
  return `#${index + 1}`
}
