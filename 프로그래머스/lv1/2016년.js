function solution(a, b) {
  let arr = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let total = b;
  for (let i = 1; i < a; i++) {
    if (i == 8) {
      total += 31;
    } else if (i == 9) {
      total += 30;
    } else if (i == 2) {
      total += 29;
    } else if (i % 2 == 0) {
      total += 30;
    } else {
      total += 31;
    }
  }
  return arr[total % 7];
}

//Date 객체 사용하면 쉬움
