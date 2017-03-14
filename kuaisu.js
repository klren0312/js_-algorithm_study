
var arr = [2,3,4,1,6,22,44,32];

function quickSort(array,left,right) {
	if(left < right){
		let x = array[right] , i = left - 1;
		for(let j = left;j <= right; j++){
			if (array[j] <= x) {
				i++;
				const temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
		quickSort(array,left,i - 1);
		quickSort(array, i + 1,right);
	}
	return array;
}

function bianli(array){
  for(let i =0;i<array.length;i++){
   console.log(array[i]);
  }
}

	bianli(quickSort(arr,0,arr.length-1)); 
 