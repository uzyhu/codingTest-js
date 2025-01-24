function solution(x) {
  let total = 0;
  for (let i of x.toString()) {
    total += parseInt(i);
  }
  return x % total == 0 ? true : false;
}
