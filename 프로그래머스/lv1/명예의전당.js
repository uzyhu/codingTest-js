function solution(k, score) {
    var answer = [];
    let arr = [];
    for (let i of score) {
        arr.push(i);
        if(arr.length <= k) {
            answer.push(arr.sort((a,b) => b-a)[arr.length-1]);
        }
        else{
            answer.push(arr.sort((a,b) => b-a)[k-1]);
        }
    }
    return answer;
}


// 다른 사람의 풀이.... reduce 그놈의 reduce
// https://chatgpt.com/c/677ff893-4c60-8006-be62-1bc659ca0539

function solution(k, score) {
    var answer = [];

    return score.reduce((acc, cur) => {
        answer.push(cur);
        answer = answer.sort((a, b) => b - a).slice(0, k);
        return [...acc, Math.min(...answer)];
    }, []);
}