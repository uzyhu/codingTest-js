function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < signs.length; i++) {
    answer += signs[i] == true ? absolutes[i] : -absolutes[i];
  }
  return answer;
}

// 다른 사람 풀이 reduce
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
