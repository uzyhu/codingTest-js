function solution(s) {
  var answer = "";
  let sArr = new Array();
  for (i = 0; i < s.length; i++) {
    sArr[i] = s.charAt(i);
  }
  sArr.sort().reverse();
  for (i = 0; i < sArr.length; i++) {
    answer += sArr[i];
  }
  return answer;
}

// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
// }
