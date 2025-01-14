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


// 비트 연산으로 표현한 동작:
// num & 1 → 가장 오른쪽 비트를 가져옴.
// (&는 비트 AND 연산자. num & 1은 2진수에서 마지막 비트만 가져옴.)
// num >> 1 → 숫자를 오른쪽으로 1비트 이동.
// (>>는 비트 시프트 연산자. 숫자를 2로 나누는 것과 동일한 효과.)
// 코드에서 num % 2는 num & 1과 같고,
// Math.floor(num / 2)는 num >> 1과 동일한 결과를 냅니다.


// 아래는 비트연산자로 대체하여 수정

function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let num1 = arr1[i];
        let num2 = arr2[i];
        let s = '';
        for (let j = 0; j < n; j++) {
            s = ((num1 & 1) | (num2 & 1)) ? '#' + s : ' ' + s; // 오른쪽 비트 비교
            num1 >>= 1; // num1을 오른쪽으로 1비트 이동
            num2 >>= 1; // num2를 오른쪽으로 1비트 이동
        }
        answer.push(s);
    }
    return answer;
}