//var 키워드 알아보기
console.log(a);
console.log(b);

//변수가 할당되기 전에 console을 찍었는데
//undefined가 출력된다 -> 선언과 동시에 초기화된다!
//이러한 현상을 '호이스팅'이라고 한다
var a = 1;
var b = 2;

//스코프 알아보기
//전역 변수
var global = "나는 전역변수다";

function globalFunction() {
  console.log(global);
}

globalFunction();

//지역 스코프
function localFunction() {
  var local = "나는 지역변수다";
  console.log(global);
}
localFunction();

//블록 스코프
if (true) {
  let block = "나는 블록스코프다";
  console.log(block);
}

console.log(a);
try {
  console.log(b);
  console.log(c);
} catch {}

var a = 1;
const b = 10;
let c;
