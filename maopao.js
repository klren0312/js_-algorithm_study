/*
 * js冒泡排序
 *
 */
var array = [1,3,4,5,32,4,2,5]
function maopao(array) {
	const length = array.length;
	for(let i =0 ; i <length;i++){
		for(let j =0 ;j <length-i-1;j++){
			if (array[j]<array[j+1]) {
				let temp = array[j+1];
				array[j+1] = array[j];
				array[j] = temp;
			}
		}
	}
}

function printArray(array){
	const length = array.length;
	for(let i =0;i<length;i++){
		console.log(array[i]);
	}
}

maopao(array);
printArray(array);
