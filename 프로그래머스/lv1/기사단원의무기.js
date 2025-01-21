function solution(number, limit, power) {
    var answer = 0;
    let arr = [];
    for(let i=1; i<=number; i++) {
        let n = 0;
        for(let j=1; j<=Math.sqrt(i); j++) {
            n+= i%j == 0 ? (i/j==j ? 1 : 2) : 0;
        }
        arr.push(n);
    }
    arr.forEach((a) => answer += a > limit ? power : a)
    return answer;
}
