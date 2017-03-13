var array = [5,7,3,8,4,2,6,98,1,45];

function maopao(array){
  let low = 0;
  let high = array.length - 1;
  while(low < high){
    for(let j = low;j < high;j++){
      if(array[j] > array[j+1]){
        const temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
    --high;
  }
  return array;
}
var a = maopao(array);
for(let i = 0;i<a.length;i++){
  console.log(a[i]);
}