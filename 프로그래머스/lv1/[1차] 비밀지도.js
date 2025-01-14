function solution(n, arr1, arr2) {
    var answer = [];
    let newArr = [];
    let totalArr = [];
    totalArr.push(arr1);
    totalArr.push(arr2);
    for(let j of totalArr) {
        for (let i=0; i<n; i++) {
        let arr = [];
        for (let k=n-1; k>=0; k--) {
            if(j[i]==0) {
                arr.push(" ");
                continue;
            }
            else if(j[i] >= Math.pow(2,k)) {
                arr.push("#");
                j[i] -= Math.pow(2,k);
                continue;
            }
            else {
                arr.push(" ");
                continue;
            }
        }
        newArr.push(arr);
    }
    }
    for(let i=0; i<n; i++) {
        let str = "";
        for(let k=0; k<n; k++) {
            if(newArr[i][k] == ' ' && newArr[i+n][k] == ' ') {
                str += " ";
            }
            else {
                str += "#";
            }
        }
        answer.push(str);
    }
    return answer;
}

//다른 사람의 풀이

function solution(n, arr1, arr2) {
    let num1, num2, s;
    let answer = [];
    //manually turning decimals to binaries cos i can!
    for (let i=0; i<n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j=0; j<n; j++){
            s = (num1%2 + num2%2) ? '#'+s : ' '+s;
            num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2);
        }
        answer.push(s);
    }    
    return answer;
}