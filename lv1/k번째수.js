function solution(array, commands) {
  var answer = [];
  for (let i of commands) {
    let newArr = array.slice(i[0] - 1, i[1]);
    newArr.sort((a, b) => a - b);
    answer.push(newArr[i[2] - 1]);
  }
  return answer;
}

//다른 사람의 풀이.. map은 새 배열을 리턴

function solution(array, commands) {
  var answer = [];

  answer = commands.map((a) => {
    return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
  });
  return answer;
}
