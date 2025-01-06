function solution(num) {
    if(num==1) {
        return 0;
    }
    else {
        let n = 0;
        while (num!=1) {
            if(num%2==0) {
                num/=2;
            }
            else {
                num=num*3+1;
            }
            n++;
            if(n>500) {
                n=-1;
                break;
            }
        }
        return n;
    }
}



// 다른 사람 풀이 (밑)
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}