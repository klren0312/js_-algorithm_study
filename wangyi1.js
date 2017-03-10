var arr = [3862767,6,13530293,3];
var a = arr[0].toString();
var b = arr[2].toString();
var j = 0;
var g = 0;
var PA=0;
var PB=0;


for(let i=0;i<a.length;i++){
  if(parseInt(a[i]) == arr[1]){
    j++;
  }
}

var c =1;
for(let i=0;i<j;i++ ){
  PA +=parseInt(arr[1])*c;
  c*=10;
  
}

for(let i=0;i<b.length;i++){
  if(b[i] == arr[3]){
    g++;
  }
}

var d =1;
for(let i=0;i<g;i++ ){
   
  PB +=parseInt(arr[3])*d;
  d*=10;
}

console.log(PA+PB);