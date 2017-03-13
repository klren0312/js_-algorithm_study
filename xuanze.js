var arr = [5,4,6,1,8,55,2,56];

function xuanze(array){
  let length = array.length;
  for(let i=0;i<length-1;i++){
    let minIndex = i;
    for(let j = i;j<length;j++){
      if(array[j]<array[minIndex]){
        const temp = array[j];
        array[j] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    array[i] = array[minIndex];
  }
  return array;
}

function bianli(array){
  for(let i=0;i<array.length;i++){
    console.log(array[i]);
  }
}

bianli(xuanze(arr));