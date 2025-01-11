function solution(strings, n) {
  var answer = [];
  let arr = [];
  for (let i of strings) {
    arr.push(i.charAt(n));
  }
  let setArr = [...new Set(arr.sort())]; //중복없애기

  for (let k of setArr) {
    let newArr = [];
    for (let i of strings) {
      if (i.charAt(n) == k) {
        newArr.push(i);
      }
    }
    answer.push(...newArr.sort());
  }
  return answer;
}
