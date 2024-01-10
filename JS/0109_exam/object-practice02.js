//객체 속성 동적 생성
const person = {
  name: "jinny",
  age: 100,
};

//person객체에 없는 속성은 gender를 입력하면 어떻게 될까?
person.gender = "female";
person;

// console.dir(person);

//parent 객체 생성
const parent = {
  age: 200,
  gender: "male",
};

function Child(name) {
  this.name = name;
}

//Child의 prototype을 parent 객체로 설정
//child 객체가 parent 객체의 속성 상속 가능
Child.prototype = parent;

const child = new Child("kim");

//child 객체의 속성 이름들 배열로 반환
Object.keys(child);

//child 객체의 모든 속성 이름들을 배열로 반환
Object.getOwnPropertyNames(child);

//for in문으로 나열하니 prototype에 있는 속성까지 나열됨
for (const key in child) {
  console.log(key);
}

delete parent.age;

console.dir(parent);
