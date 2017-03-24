/*现在给出一个数字序列，允许使用一种转换操作：
选择任意两个相邻的数，然后从序列移除这两个数，并用这两个数字的和插入到这两个数之前的位置(只插入一个和)。
现在对于所给序列要求出最少需要多少次操作可以将其变成回文序列。

输入描述:

输入为两行，第一行为序列长度n ( 1 ≤ n ≤ 50)
第二行为序列中的n个整数item[i]  (1 ≤ iteam[i] ≤ 1000)，以空格分隔。



输出描述:

输出一个数，表示最少需要的转换次数


输入例子:

4
1 1 1 3


输出例子:

2

*/
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var n = -1;// 初始状态为负数，表示还没开始读取
rl.on('line', function(line){
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
	if(n < 0){
		n = parseInt(line.trim())
	} else{
		var a = line.split(' ');
		var arr = [];
		for(var i  = 0;i<a.length;i++){
			arr[i] = parseInt(a[i]);
		}
		 
		console.log(arr);
    	console.log(fn(arr));
	}
   
});