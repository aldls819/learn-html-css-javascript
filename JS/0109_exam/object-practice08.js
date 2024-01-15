//class의 형태
class Person {
  //인스턴스 생성 및 클래스 필드 초기화 (생략 가능)
  constructor(name, age, gender) {
    //멤버 변수
    //인스턴스 속성 초기화
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  //static 으로 메서드 작성시 -> 인스턴스를 생성하지 않아도 호출 가능

  //get : 속성 조회 및 조작 -> 무조건 값을 반환
  get uppercaseName() {
    return this.name.toLocaleUpperCase();
  }

  //set : 속성 할당하며 조작
  set plusAge(age) {
    this.age += age;
  }

  get whatIsGender() {
    if (this.gender === "female") {
      return "여자입니다!";
    } else {
      return "남자입니다!";
    }
  }
}

//상속 extends
class Children extends Person {
  constructor(name, age, gender) {
    //super : 부모 클래스의 생성자를 호출
    // 자식 클래스의 생성자가 this에 접근하고 수정 가능함
    super(name);
  }
  play() {
    return this.name + " 는 지금 놀고 있답니다!";
  }
}

const child = new Children("jina");
child.play();

const jinny = new Person("jinny", 100, "female");
console.log(jinny.whatIsGender);
