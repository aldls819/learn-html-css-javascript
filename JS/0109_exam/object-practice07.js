//RegExp 객체
const str = "abcdef";
const regex = /a/g;

const exam = [
  //일치 확인
  str.match(regex),
  //찾기
  str.search(regex),
  //찾아서 교체
  str.replace(regex),
  //찾아서 분리
  str.split(regex),
];

console.log(exam);

//Array 객체
//길이만 지정해서 배열 생성
new Array(23);
//요소만 지정해서 배열 생성
new Array("hi", "hello");

const aaa = [1, 2, 3];
console.dir(aaa);

//intl 객체 DateTimeFormat 생성자 함수
//인스턴스 생성 언어 설정
const dateTimeFormatKo = new Intl.DateTimeFormat("ko");

const example = [
  //한국 기준 형식에 맞춘 한국 날짜
  dateTimeFormatKo.format(),
  //각 부분별로 type과 value로 반환
  dateTimeFormatKo.formatToParts(),
];

console.log(example);

// NumberFormat 생성자 함수
const numberFormat = new Intl.NumberFormat("ko", {
  //출력할 number의 서식 지정
  style: "currency",
  currency: "KRW",
});

//KRW 즉 한화로 format되어서 출력
console.log(numberFormat.format(100000));
