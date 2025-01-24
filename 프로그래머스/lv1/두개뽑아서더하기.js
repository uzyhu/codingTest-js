function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      let n = numbers[i] + numbers[k];
      if (answer.indexOf(n) == -1) {
        answer.push(n);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// 다른 사람의 풀이 .... Set 자료구조 확인

// https://www.daleseo.com/js-set/https://www.daleseo.com/js-set/

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
