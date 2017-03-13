//从后往前插
var array = [5,6,7,2,3,4,89,45,21,47];

function charu(array){
  for(let i = 1 ; i<array.length;i++){
    let key = array[i];
    let j = i - 1;
    while(j>=0&&array[j]>key){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = key;
  }
  return array;
}


function bianli(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

bianli(charu(array));