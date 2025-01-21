function solution(answers) {
  var answer = [];
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  p1 = p1
    .join("")
    .repeat(Math.ceil(answers.length / p1.length))
    .split("");
  p2 = p2
    .join("")
    .repeat(Math.ceil(answers.length / p2.length))
    .split("");
  p3 = p3
    .join("")
    .repeat(Math.ceil(answers.length / p3.length))
    .split("");

  for (let i = 0; i < answers.length; i++) {
    s1 += answers[i] == Number(p1[i]) ? 1 : 0;
    s2 += answers[i] == Number(p2[i]) ? 1 : 0;
    s3 += answers[i] == Number(p3[i]) ? 1 : 0;
  }

  let arr = [s1, s2, s3];
  let max = Math.max(s1, s2, s3);

  for (let i = 0; i < 3; i++) {
    if (max == arr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

//다른사람의 풀이 ... 크기 비교 가능한 Math.max 생각하자~~~~

function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

//다른사람의 풀이2

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
