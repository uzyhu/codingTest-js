function solution(nums) {
    var answer = 0;
    let arr = [...nums];
    for(let i=0; i<nums.length/2; i++) {
        if(arr.length==0) {
            break;
        }
        answer++;
        arr = arr.filter(a => a!=arr[0]);
    }
    return answer;
}

//nums 길이 줄어드는 걸 생각 못했던 것은 크나큰 실수.. 시간 끌 부분 x
//set이라는 자료구조 이용하기..... 배열의 중복을 없애면 해결? => Set

function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
  
    return arr.length > max ? max : arr.length
  }