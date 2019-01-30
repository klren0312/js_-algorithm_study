function throttle(fn, delay) {
  let timer = null
  let start = null
  return function loop() {
    const now = new Date().getTime()
    if (!start) {
      start = now
    }
    timer && clearTimeout(timer)
    if (now - start >= delay) {
      fn.apply(this, arguments)
      start = now
    } else {
      timer = setTimeout(() => {
        loop.apply(this, arguments)
      }, delay)
    }
  }
}
