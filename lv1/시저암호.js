function solution(s, n) {
    var answer = '';
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i of s) {
        if(i == " ") {
            answer+= " "; 
            continue;
        }
        let num = alphabet.indexOf(i.toLowerCase());
        answer += num+n >= alphabet.length ? (i==i.toLowerCase() ? alphabet[num+n-alphabet.length] : alphabet[num+n-alphabet.length].toUpperCase()) : (i==i.toLowerCase() ? alphabet[num+n] : alphabet[num+n].toUpperCase());
    }
    return answer;
}


//다른 사람의 풀이 .... string.includes()

function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
