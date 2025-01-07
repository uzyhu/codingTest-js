function solution(phone_number) {
  var answer = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }
  answer += phone_number.slice(phone_number.length - 4);
  return answer;
}

//다른 사람의 풀이 .... repeat

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}
