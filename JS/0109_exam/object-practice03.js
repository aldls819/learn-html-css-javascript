const a = {
  name: "apple",
};

const b = {
  name: "apple",
};

//같은 글자를 비교했지만 참조값이 달라서 false
// console.log(a === b);

const person = {
  name: "jinny",
  address: {
    country: "korea",
    city: "seoul",
  },
};

//assign을 이용한 얕은 복사
const jina = Object.assign({}, person);

//spread 연산자를 이용한 얕은 복사
const minsu = { ...person };

jina.name = "jina Kim";
minsu.name = "minsu Choi";

//설정한 대로 이름이 변했다
console.log("jina : ", jina);
console.log("minsu : ", minsu);

//jina와 minsu는 얕은 복사이기 때문에 객체 비교시 false
console.log(jina === minsu);
//address 비교시 true, 얕은 복사이기 때문에 내부 참조 타입은 동일하다
console.log(jina.address === minsu.address);

jina.address.country = "America";
//나라를 바꾸고 다시 비교하면 어떻게 될까?
console.log("jina : ", jina);
console.log("minsu : ", minsu);

//minsu의 나라까지 바꼈다!
