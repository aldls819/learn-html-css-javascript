const 객체 = {
  //익명함수로 속성값을 정의한다
  속성: function () {
    console.log("apple");
  },
  //ES6에서는 function 키워드를 생략한 짧은 구문으로 작성이 가능하다다
  속성2() {
    console.log("hello im es6");
  },
};

객체.속성();
객체.속성2();

// //생성자 함수는 무조건 대문자로 시작한다
// function Person(name, age) {
//   //this 키워드로 속성을 정의한다
//   this.name = name;
//   this.age = age;
// }
// //인스턴스 생성
// new Person("jinny", 100);

// console.dir(Person);

const Person = {
  name: "jinny",
  age: 100,
  getName: function () {
    console.log(this.name);
  },
};

//getName 메소드를 통해서 제대로 할당된 것 확인
const jieun = Object.create(Person);
jieun.name = "jieun";
jieun.getName();
