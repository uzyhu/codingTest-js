function solution(n) {
    var answer = n.toString().split("").sort().reverse().join("");
    return parseInt(answer);
}