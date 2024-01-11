// lodash 라이브러리를 사용한 깊은 복사
import cloneDeep from "lodash/cloneDeep";

const person = {
  name: "jinny",
  address: {
    country: "Korea",
    city: "seoul",
  },
};

// lodash의 cloneDeep을 사용하여 깊은 복사 수행
const human = cloneDeep(person);

// JSON.stringify를 사용한 부분 수정
const personStr = JSON.stringify(person);
const minsu = JSON.parse(personStr); // JSON.parse를 사용하여 문자열을 객체로 변환

console.log(person.address === human.address); // false
console.log(person.address === minsu.address); // false

human.address.country = "America";

console.log("person : ", person);
console.log("human : ", human);
console.log("minsu : ", minsu);
