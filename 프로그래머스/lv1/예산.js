function solution(d, budget) {
  var answer = 0;
  let cost = 0;
  for (let i of d.sort((a, b) => a - b)) {
    if (cost + i > budget) {
      break;
    }
    cost += i;
    answer += 1;
  }
  return answer;
}

// function solution(d, budget) {
//     return d.sort((a, b) => a - b).reduce((count, price) => {
//         return count + ((budget -= price) >= 0);
//     }, 0);
// }

// https://hianna.tistory.com/409 ==> sort()
// https://miiingo.tistory.com/365 ==> reduce()
