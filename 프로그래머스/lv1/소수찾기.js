function solution(n) {
  var answer = 1; // 2 미리 포함

  for (let i = 3; i <= n; i++) {
    let num = 0;
    if (i % 2 == 0) continue;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (j % 2 == 0) continue;
      num += i % j == 0 ? 1 : 0;
    }
    answer += num == 1 ? 1 : 0;
  }
  return answer;
}

//효율성 테스트 실패
//아래는 최종 성공 코드

function solution(n) {
  var answer = 1; // 2 미리 포함
  for (let i = 3; i <= n; i++) {
    let num = true;
    if (i % 2 == 0) continue;
    for (let j = 3; j <= Math.sqrt(i); j++) {
      if (j % 2 == 0) continue;
      if (i % j == 0) {
        num = false;
        break;
      }
    }
    answer += num == true ? 1 : 0;
  }
  return answer;
}

//다른사람의 풀이 ,,, 무슨무슨 체 적용.,,,,,,,,, 이해해야함

function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
