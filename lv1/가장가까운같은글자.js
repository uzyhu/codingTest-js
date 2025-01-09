function solution(s) {
  var answer = [];
  for (let i = s.length - 1; i >= 0; i--) {
    let n = -1;
    for (let k = i - 1; k >= 0; k--) {
      if (s[k] == s[i]) {
        n = i - k;
        break;
      }
    }
    answer[i] = n;
  }
  return answer;
}


// 다른 사람의 풀이..
// spread연산자 주의!! 
// 문자열을 배열로 확장할 수 있음. 
// lastIndexOf도 있다는 것 잊지 않기~ 
// map의 매개변수는 .map((현재 요소, 인덱스, 현재 배열 그자체) => {})
const solution = (s) =>
[...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });