var result = 0;
function fn(arr){
	var revArr = arr.slice(0).reverse();
	if (revArr.join("") == arr.join("")) {
		return result;
	}
	else if(revArr[0]==arr[0]){
		arr.shift();
		arr.pop();
		return fn(arr);
	}
	else{
		revArr.splice(0,2,revArr[0]+revArr[1]);
		arr.splice(0,2,arr[0]+arr[1]);
		arr[0]>revArr[0]?fn(revArr):fn(arr);
		return ++result;
	}
}

var arr = [3,1,1,2,2];
console.log(fn(arr));