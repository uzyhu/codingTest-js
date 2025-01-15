function solution(cards1, cards2, goal) {
  var answer = "Yes";
  let a = -1;
  let b = -1;
  for (let i of goal) {
    if (cards1.includes(i)) {
      if (a + 1 == cards1.indexOf(i)) {
        a += 1;
        continue;
      } else {
        answer = "No";
        break;
      }
    } else if (cards2.includes(i)) {
      if (b + 1 == cards2.indexOf(i)) {
        b += 1;
        continue;
      } else {
        answer = "No";
        break;
      }
    } else {
      answer = "No";
      break;
    }
  }
  return answer;
}

// 문제를 제대로 안읽어서 복잡하게 생각한 문제
// 다른 사람의 풀이

function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

//return => 끝마침

function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] == cards1[j]) j++;
    else if (goal[i] == cards2[k]) k++;
    else return "No";
  }
  return "Yes";
}
