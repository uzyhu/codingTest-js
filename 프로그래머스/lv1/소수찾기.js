function solution(n) {
    var answer = 1; // 2 미리 포함
    
    for(let i=3; i<=n; i++) {
        let num = 0;
        if(i%2==0) continue;
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(j%2==0) continue;
            num += i%j == 0 ? 1 : 0;
        }
        answer += num == 1 ? 1 : 0;
    }
    return answer;
}

//효율성 테스트 실패