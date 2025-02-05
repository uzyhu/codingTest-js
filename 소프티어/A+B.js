const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
let array = [];

rl.on("line", (line) => {
  sum = line.split(" ").reduce((acc, cur) => acc + parseInt(cur), 0);
  array.push(sum);
}).on("close", () => {
  const n = array[0];
  array.shift();
  for (let i = 0; i < n; i++) {
    console.log(`Case #${i + 1}: ${array[i]}`);
  }
  process.exit(0);
});
