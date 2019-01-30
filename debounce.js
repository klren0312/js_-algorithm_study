function debounce(fn, delay) {
  let timer = null
  return function() {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
