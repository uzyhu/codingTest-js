function solution(s) {
    var answer = "";
    let numMap = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i=0; i<s.length; i++) {
        for(let k=0; k<=5; k++) {
            if(!isNaN(s.substr(i,1))) {
                answer+=s.substr(i,1);
                break;
            }
            else if(numMap.indexOf(s.substr(i,k)) != -1) {
                answer+=numMap.indexOf(s.substr(i,k));
                i+=k-1;
                break;
            }
        }
    }
    return Number(answer);
}

//다른 사람의 풀이

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
