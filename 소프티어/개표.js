const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (line) => {
  arr.push(Number(line));
}).on("close", () => {
  for (let i = 1; i < arr.length; i++) {
    let str = "++++ ".repeat(Math.floor(arr[i] / 5));
    arr[i] % 5 == 0
      ? (str = str.slice(0, str.length))
      : (str += "|".repeat(arr[i] % 5));
    console.log(str);
  }
  process.exit(0);
});
