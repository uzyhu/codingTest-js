function solution(arr, divisor) {
  var answer = [];
  for (let i of arr) {
    if (i % divisor == 0) {
      answer.push(i);
    }
  }
  answer = answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
  return answer;
}

//sort방식 이해...... 그리고 filter를 사용하면 더 간단해질 수 있음
