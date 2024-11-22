function solution(s) {
    var answer = [];
    let arr = s.split(" ");
    for(let i of arr) {
        let newI = "";
        for(let k=0;k<i.length; k++) {
            newI += k%2==0 ? i[k].toUpperCase() : i[k].toLowerCase();
        }
        answer.push(newI);
    }
    return answer.join(" ");
}

//몰랐던 사실.... 문자열은 통째로 바꾸는건 되지만 그 내부에 개별문자를 바꾸는건 안됨....