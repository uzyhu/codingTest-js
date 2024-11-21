function solution(arr) {
  var answer = [];
  answer[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      continue;
    }
    answer.push(arr[i]);
  }

  return answer;
}

// Array.filter(() => ...) 잊지않기
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }

// function solution(arr) {
//     var answer = [arr[0]];

//     for (let i=1; i<arr.length; i++) {
//         if (answer[answer.length - 1] !== arr[i]) {
//             answer.push(arr[i]);
//         }
//     }

//     return answer;
// }
