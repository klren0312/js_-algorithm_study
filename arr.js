let arr = new Array(7)
let current = 3
let ctm = [3, 4, 2, 5, 1, 6, 0]
function setData (v) {
  let index = ctm.indexOf(current)
  if (current === 3) {
    arr = sort(arr)
  }
  arr[current] = v
  if (index + 1 > 6) {
    current = 3
  } else {
    current = ctm[index + 1]
  }
  console.log(JSON.stringify(arr), index)
}

function sort (arr) {
  let afterArr = []
  ctm.forEach((v, i) => {
    afterArr[ctm[i + 1]] = arr[v]
  })
  return afterArr
}


for (let i = 1; i < 21; i++) {
  setData(i)
}
