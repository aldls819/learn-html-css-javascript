0.1 + 0.3;

typeof Infinity;
typeof NaN;

const a = "mamama";
a[0] = "kakaka";
console.log(a);

const b = {
  [Symbol.for("good")]: "job",
};

console.log(b[Symbol.for("good")]);

//명시적 타입 변환
const aaa = 123;
const bbb = "123";
const ccc = 0;

aaa.toString();
Number(bbb);
Boolean(ccc);
