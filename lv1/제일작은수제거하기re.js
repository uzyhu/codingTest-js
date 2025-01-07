function solution(arr) {
    let answer = -1;
    let nArr = [];
    for(let i of arr) {
        nArr.push(i);
    }
    nArr.sort((a,b) => a-b);
    return arr.length==1 ? [-1] : (arr.slice(0,arr.indexOf(nArr[0]))).concat(arr.slice(arr.indexOf(nArr[0])+1));
}


//다른 사람의 풀이  Math.min 이랑 ... slice splice 구분

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

//-----------------------

function solution(arr) {
    const min = Math.min(...arr);
    return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
}