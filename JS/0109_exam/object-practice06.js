const a = "hello my \n name is \n jinny";

console.log(a);

const aaa = "가나다라마바사";
const bbb = "안녕하세요";

//문자열 비교
const exam = [aaa.localeCompare(bbb)];

console.log(exam);

//문자열 변경
const changeString = [
  "abcdef".toLocaleUpperCase(),
  "ABCDEF".toLocaleLowerCase(),
  "hello".replace("h", "H"),
  "hello".replace("l", "L"),
  "hello".replaceAll("l", "L"),
];

console.log(changeString);

//문자열 추가 및 합치기
const addString = [
  //길이 length 값 , 빈 length에 채울 값
  "abcdef".padStart(10, "1"),
  "ABCDEF".padEnd(10, "k"),
  //문자열 반복
  "hello".repeat(2),
  //문자열 합치기
  "hello".concat(" nice to meet you!"),
  "hello" + " nice to meet you!",
];

console.log(addString);

//문자열 분리하기
const partString = [
  //5번째 인덱스부터 마지막까지 자르기
  "abcdef".slice(4),
  //2번째 인덱스부터 4번째 인덱스까지 자르기
  "abcdef".slice(1, 4),
  "abcdef".substring(4),
  "abcdef".substring(1, 4),
  //배열로 변경
  "abcdef".split(),
  //공백 제거
  " abc ".trim(),
];

console.log(partString);
