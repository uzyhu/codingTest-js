function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let k = 0; k < arr1[0].length; k++) {
      answer[i][k] = arr1[i][k] + arr2[i][k];
    }
  }
  return answer;
}

//2차원배열 값 대입 사용할 때 1차원은 초기화 해줘야함
// https://chatgpt.com/c/678a5e8a-65f4-8006-a1a6-2dcbad940374
