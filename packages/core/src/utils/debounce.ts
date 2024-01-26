export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay = 100
) {
  let timerId: number

  return (...args: Parameters<T>) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
