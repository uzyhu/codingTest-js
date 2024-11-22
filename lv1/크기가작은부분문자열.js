function solution(t, p) {
  let arr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    arr.push(t.slice(i, i + p.length));
  }
  let newArr = arr.filter((arr) => {
    return Number(arr) <= Number(p);
  });

  return newArr.length;
}

//문자열에서 자릿수가 같을 때는 비교할 때 굳이 숫자형으로 바꾸지 않아도 된다.
//그리고 +붙이는거랑 Number 같은 역할임
