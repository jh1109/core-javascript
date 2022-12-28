/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let message2 = 'hello';
let nickName = "juhee";
let message3 = `안녕 ${'내 이름은'/0} ${nickName} 야`;
console.log(message3);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 123456;
let number2 = 12.456;
console.log(number);
console.log(number2);
console.log(typeof number);
console.log(typeof number2);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 12456n);
// bignit와 일반숫자는 더할 수 없음. bignit 끼리 산칙연산해줘야함.
// console.log(12345n + 100);
// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof (4>1));
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});
// 8. 고유한 식별자(unique identifier)
console.log(Symbol('uid'));
console.log(typeof Symbol('uid'));


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
// = key와 value의 집합

const user = {  //'객체 리터럴'이라고함
  name: "juhee",
  age: 27,
}
console.log(user);

// Array(배열이라는 뜻)
// let list = new Array()
// Array는 value만 가짐
let list = [10,100,1000,1,2,3]  //'배열 리터럴' 이라는 방법. 값을 바로 지정해준다

// function
function sum(a,b) {
  return a+b
}
console.log(sum(452,357));
// this


