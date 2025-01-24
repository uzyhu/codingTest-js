function solution(nums) {
  let isOdd = nums.filter((a) => a % 2 == 1);
  let isNOdd = nums.filter((a) => a % 2 == 0);
  let n = 0;
  if ((isOdd.length == 2 && isNOdd.length == 1) || isOdd.length == 0) {
    return 0;
  }

  for (let i = 0; i < isOdd.length - 2; i++) {
    //ooo
    for (let p = i + 1; p < isOdd.length - 1; p++) {
      for (let q = p + 1; q < isOdd.length; q++) {
        let total = isOdd[i] + isOdd[p] + isOdd[q];
        let sosuNot = 0; //소수 x
        for (let j = 3; j < total; j++) {
          sosuNot += total % j == 0 ? 1 : 0;
          j++;
        }
        n += sosuNot == 0 ? 1 : 0;
      }
    }
  }

  for (let t = 0; t < isOdd.length; t++) {
    //onn
    for (let k = 0; k < isNOdd.length - 1; k++) {
      for (let y = k + 1; y < isNOdd.length; y++) {
        let total = isOdd[t] + isNOdd[k] + isNOdd[y];
        let sosuNot = 0; //소수 x
        for (let j = 3; j < total; j++) {
          sosuNot += total % j == 0 ? 1 : 0;
          j++;
        }
        n += sosuNot == 0 ? 1 : 0;
      }
    }
  }

  return n;
}

//다른 사람의 풀이... 소수의 정의와 그 연관성에 대해 생각
//https://chatgpt.com/c/678e2fc2-2ce8-8006-9b8a-9e88598176a1

function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if (primecheck(nums[i] + nums[j] + nums[w])) {
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}
