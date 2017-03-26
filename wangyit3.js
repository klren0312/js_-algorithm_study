var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

rl.on('line', function(line){
    var s = line.split(' ');

    if(s[0]>=1&&s[0]<=s[1]&&s[1]<=100&&s[1]>=1&&s[2]>=1&&s[2]<=s[3]&&s[3]>=1&&s[3]<=100){
        console.log("p: "+(s[1]-s[0]+1));
        console.log("p: "+(s[3]-s[2]+1));
        console.log((s[1]-s[0]+1)*(s[3]-s[2]+1));
    }
});