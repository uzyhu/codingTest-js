function solution(n) {
  let answer = "수";
  if (n > 1) {
    answer =
      n % 2 == 0 ? "수박".repeat(n / 2) : "수박".repeat((n - 1) / 2) + "수";
  }
  return answer;
}
