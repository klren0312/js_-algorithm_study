var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var n = -1;// 初始状态为负数，表示还没开始读取
rl.on('line', function(line){
	function fn(arr){
		var length = arr.length;
		for(var i =0 ; i <length;i++){
			for(var j =0 ;j <length-i-1;j++){
				if (arr[j]>arr[j+1]) {
					var temp = arr[j+1];
					arr[j+1] = arr[j];
					arr[j] = temp;
				}
			}
		}
		for(var i =0 ; i <length;i++){
			for(var j =0 ;j <length-i-1;j++){
				if (arr[j]==arr[j+1]) {
					arr.splice(j,1);
				}
			}
			i++;j++
		}
		var ans = "";
		 for(var i =0;arr[i]!=undefined;i++){
            ans +=arr[i]+" ";
        }
		return ans;
		
	}


	if(n < 0){
		n = parseInt(line.trim())
	} else{
		var a = line.split(' ');
		var arr = [];
		for(var i  = 0;i<a.length;i++){
			arr[i] = parseInt(a[i]);
		}
		 
    	console.log(fn(arr));
	}
   
});