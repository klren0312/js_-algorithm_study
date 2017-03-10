var array = [5,7,3,8,4,2,6,98,1,45];

function maopao(array){
	let i = array.length - 1;
	while(i>0){
		let pos =0;
		for (let j=0;j<i;j++) {
			if(array[j] > array[j+1]){
				pos = j;
				let temp = array[j+1];
				array[j+1] = array[j];
				array[j] = temp;
			}
		}
		i = pos;
	}
	return array;
}

function printArray(array){
	const length = array.length;
	for(let i =0;i<length;i++){
		console.log(array[i]);
	}
}

printArray(maopao(array));