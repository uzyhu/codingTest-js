function solution(left, right) {
  let total = 0;
  for (let i = left; i <= right; i++) {
    if (i == 1) {
      total -= 1;
    } else {
      let answer = 0;
      for (let k = 0; k <= (i - 1) / 2; k++) {
        answer += i % k == 0 ? 2 : 0;
        answer -= k * k == i ? 1 : 0;
      }
      total += answer % 2 == 0 ? i : -i;
    }
  }
  return total;
}

// 다른 사람의 풀이... 제곱근이 정수면 약수의 개수가 홀수다

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}


//다른 사람의 풀이2 ... 