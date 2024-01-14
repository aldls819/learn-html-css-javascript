//Number 객체 알아보기

const exam = [
  //Number 타입으로 전환
  Number("1.2"),
  Number("abc"),
  //Number 타입 최댓값
  Number.MAX_VALUE,
  Number.NaN,
  //NaN인지 확인
  Number.isNaN(1),
  //유한한지 확인
  Number.isFinite(Infinity),
  //정수인지 확인
  Number.isInteger(3),
  Number.isInteger(1.23),
];

console.log(exam);

//Number 생성자 함수
const num = 2.3154;

num.toFixed(2);
(123456).toLocaleString("ko");

// Math 객체를 알아보자

Math.PI;
Math.abs(-25850);
Math.pow(2, 4);
Math.sqrt(9);
Math.ceil(1.35);
Math.floor(5.36);
Math.round(1.5);
Math.max(2, 6);
Math.min(6, 4);
Math.random();

//Date 객체를 알아보자
const dateExam = [
  Date.now(),
  Date.parse("Nov 27, 2023"),
  Date.UTC(2024, 1, 27),
];

dateExam.forEach((item) => console.log(item));

//getMonth 에서 1월은 0부터 시작해서 12월은 11이다
new Date().getMonth();
//getDay 에서 일요일이 0부터 시작해서 토요일이 7이다
new Date().getDay();
//현지에 맞는 요일 문자열 얻기
new Date().toLocaleDateString({ weekday: "long" });

//valueOf() Date 객체
new Date().valueOf();
//toString()

console.log(new Date().toString());
