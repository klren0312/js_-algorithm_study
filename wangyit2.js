var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

rl.on('line',function(line){
	function fn(Powr){
	    var sum = [];
	    var less = 0;
	    if(typeof Powr == "number"){
	        for(var i=0;i<=Math.sqrt(Powr);i++){
	        	//半径相当于直角三角形的斜边，i相当于直角三角形的一个直角边。勾股定理可求出第三边
	            var coordinate = Math.sqrt(Powr-Math.pow(i,2))
	            if(coordinate.toString().split(".")[1]==undefined){ //验证开方后是否为整数
	                if(i==0){
	                    less=4; //验证是否存在有圆点的情况
	                }
	                sum.push({i,coordinate})
	            }
	        }
	        return sum.length*4-less
	    }
	    else{
	        return "please number";
	    }
	}
	
	var arr = parseInt(line);
	console.log(fn(arr));
})
