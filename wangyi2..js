var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});


rl.on('line', function(line){ 
	
        function test(arr,t){
		  var j=0;
		  var ren = 0;
		  for(let i=0;i<arr.length;i++){
		    if(parseInt(arr[i]) == t){
		            j++;
		      }
		  }
		  var c=1;
		  for(let i=0;i<j;i++){
		    ren +=parseInt(t)*c;
		    c*=10;
		  }
		  return ren;
		}
        var arr = line.split(' ');
    
        var a = arr[0].toString();
        var b = arr[2].toString();
        var PA =0;
        var PB =0;
 
        PA = test(a,arr[1]);
 
        PB = test(b,arr[3]);
 

        console.log(PA+PB);
});