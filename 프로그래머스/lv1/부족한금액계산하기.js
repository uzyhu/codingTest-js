function solution(price, money, count) {
  let needM = 0;
  for (let i = 1; i <= count; i++) {
    needM += price * i;
  }
  let answer = money - needM >= 0 ? 0 : needM - money;
  return answer;
}

// function solution(price, money, count) {
//     let answer = 0;

//     for (let i = 1; i <= count; i++) {
//         answer += price * i;
//     }

//     return answer > money ? answer - money : 0;
// }
