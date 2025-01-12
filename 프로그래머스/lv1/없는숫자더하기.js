function solution(numbers) {
  var answer = 0;
  for (let i = 1; i < 10; i++) {
    answer += numbers.indexOf(i) == -1 ? i : 0;
  }
  return answer;
}

// 다른 사람의 풀이.. reduce
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
