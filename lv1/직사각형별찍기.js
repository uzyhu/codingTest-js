process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = "";
  for (let k = 0; k < b; k++) {
    for (let i = 0; i < a; i++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
});

// 문자열.repeat(횟수)
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a)
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }

// });

// 백틱 사용 잊지 않기
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const star = `${'*'.repeat(a)}\n`;

//     console.log(star.repeat(b));
// });
