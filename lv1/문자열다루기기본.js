function solution(s) {
  var answer = true;
  if (s.length == 4 || s.length == 6) {
    answer = isNaN(Number(s)) ? false : true;
    for (let i of s) {
      answer = i == "e" ? false : answer;
    }
  } else {
    answer = false;
  }
  return answer;
}

// https://mommoo.tistory.com/77
// 그런데 문자열을 실수/정수형으로 형변환 하거나, 해당 문자열을 숫자로 인식할 수 있는지 판단할 때 지수 표기법이 쓰이는 경우가 있습니다.
// 문자열 안에 숫자가 아닌 문자가 있어도 지수 표기법으로 읽을 수 있다면 이를 숫자로 판별하는 겁니다. 이에 유의하여 라이브러리를 사용해야 합니다.
