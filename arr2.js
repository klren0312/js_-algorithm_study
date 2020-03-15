const arr = [7,5,3,1,2,4,6]
let ctm = [3, 4, 2, 5, 1, 6, 0]

function sort (arr) {
  let afterArr = []
  ctm.forEach((v, i) => {
    afterArr[ctm[i + 1]] = arr[v]
  })
  return afterArr
}
