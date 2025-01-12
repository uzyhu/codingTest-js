function solution(n, m) {
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    
    for(let i = a; i >= 1; i--) {
        if(a % i == 0 && b % i == 0) {
            return [i, (a * b / i)]
        }
    }
}

//걍 외우자....... 최대공약수는 둘 다 나뉘어지고, 최소공배수는 둘 곱한 것에 최대공약수로 나눈것.