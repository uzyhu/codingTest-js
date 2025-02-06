const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr = line.split(" ");
}).on('close', () => {
    let str;
    if(arr[0] == arr[1]) str = "same";
    else if(Number(arr[0]) > Number(arr[1])) str = 'A';
    else str = 'B';
    console.log(str);
    process.exit(0);
});