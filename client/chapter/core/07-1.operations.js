/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let secondValue = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
console.log(typeof firstValue); //string

console.log(+firstValue + +secondValue); // 3
console.log(firstValue + secondValue); // 12




// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;  //a는 숫자가됨

// 이항 연산자 -> 피연산자가 2개
let binary = a + b;

// 삼항 연산자 -> 주로 조건문에서 쓰임
let ternary = Math.random() > 0.5 ? 'big' : 'small';
console.log(ternary);

//if 문으로도 작성해보기
/*
if(Math.random()>0.5) {
  console.log("big");
} else {
  "small";
}
*/

// 산술 연산자: 덧셈
let addition = 1+2;

// 산술 연산자: 뺄셈
let subtraction = 10-3;

// 산술 연산자: 곱셈
let multiplication = a * b;

// 산술 연산자: 나눗셈
let division = b / a;

// 산술 연산자: 나머지
let remainder = b % a;

// 산술 연산자: 거듭 제곱
let power = a ** 2;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];  //1,2,34,5,6
console.log(onlyWorkDefaultValues);

// [1,2,3,4,5,6]의 배열을 만들고 싶다면?
let newArray = [1,2,3].concat("안녕",1);
console.log(newArray);
/*
concat이라는 메서드는 Array이라는 객체 내에 있는 함수의 한 종류.
기존의 배열을 변경하지 않고 추가하면서 새로운 배열을 만들어냄.
*/

let firstArray = [1,2,3];
let secondArray = [4,5,6];

// 방법 2. 전개연산자 spread Operator
let newArray2 = [...firstArray, ...secondArray, 'hola~'];
console.log(newArray2);
/*
...은 배열들을 다 풀어헤친다는 의미(전개).
그래서 배열의 값들을 전개시킨다음 다시 배열시킴
*/



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let number = 100;
// 선,후 증감 연산자
// ++, --
number++; //값은 100
++number; //102
console.log(number); //102

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3;
console.log(total); //135
/* 해설
우선순위에 따라 왼쪽 괄호부터 연산합니다.
count % 4 -> 10 % 4 = 2
다음 괄호를 연산합니다.
count /= 2 -> count에 10을 2로 나눈 값을 할당해줍니다.
두 괄호를 연산한 후의 식은,
2*5+count**3; 입니다.
여기서 count는 복합 할당 연산자에 의해 5라는 값이 할당되어 있으므로,
연산 우선순위 적용에 따라,
10 + 125 = 135
*/