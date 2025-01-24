function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    if (n % a != 0) {
      answer += b * Math.floor(n / a);
      n = (n % a) + b * Math.floor(n / a);
    } else {
      answer += b * (n / a);
      n = b * (n / a);
    }
  }
  return answer;
}

// floor, ceil, round
