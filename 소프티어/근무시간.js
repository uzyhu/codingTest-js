const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let time = 0;

rl.on("line", (line) => {
  time += (Number(line.slice(6, 8)) - Number(line.slice(0, 2))) * 60;
  time -= Number(line.slice(3, 5)) - Number(line.slice(9));
}).on("close", () => {
  console.log(time);
  process.exit(0);
});
