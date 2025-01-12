function solution(s) {
    let answer = s.length%2 == 0 ? s.slice(s.length/2-1,s.length/2+1) : s[(s.length-1)/2];
    return answer;
}


//다른 사람의 풀이... Math 함수 / substr, substring 차이
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}