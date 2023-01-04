/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = (...args) => {

  // arguments
  //화살표함수에는 arguments 함수 없음
  // 그래서 위와 같은 방법으로 사용함. ...args
  // 화살표함수에서의 args는 진짜 배열임!
  let total = 0;
  args.forEach(item=>{
    total += item
  })

  args.reduce((acc,item)=> acc + item)

  console.log();
  return ;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d)=> a+b+c+d;


// 화살표 함수와 this





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// numeric의 powerCount 제곱 계산하는 함수 만들어보기(단, **연산자 사용하지 않고)

/*
let pow = function (numeric, powerCount){
  let result = 1;
  for (i = 0; i < powerCount; i++){
    result *= numeric;
  }
  return result;
}
*/

// 화살표 함수로 바꿔보기
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++){
    result *= numeric;
  }
  return result;
};

console.assert(pow(2,4)===16);
console.assert(pow(2,0)===1);
console.assert(pow(1,50)===1);

// Array().reduce 활용해서 만들어보기 
/* Array.prototype.reduce():
초기화값은 0이고, acc는 누적값을 나타냄. 초기값부터 첫번째 인덱스를 시작으로 ()안에 작성된 동작을 하면서 누적된 하나의 값을 반환함.
*/
let powExpression = (numeric, powerCount) =>
  Array(powerCount).fill(null).reduce(acc=>acc*numeric,1);
  //Array(숫자) 하면 숫자만큼의 length을 가지는 빈 배열이 만들어짐
  //fill(값) 비어있는 배열을 해당 값으로 채움

console.assert(powExpression(2,4)===16);
console.assert(powExpression(2,0)===1);
console.assert(powExpression(1,50)===1);


// repeat(text: string, repeatCount: number): string;
// text가 repeatCount 숫자만큼 반복되는 함수를 만드시오.
let repeat = (text, repeatCount) => {
  let result = '';
  for (i = 0; i < repeatCount; i++ ){
    result += text;
  }
  return result;
};

console.assert(repeat('안녕',3)==='안녕안녕안녕');
console.assert(repeat('hello~',0)==='');

//reduce 활용해서 함수 작성해보기
let repeatExpression = (text, repeatCount) => 
  Array(repeatCount).fill(null).reduce(acc=>acc+=text,'');

console.assert(repeatExpression('안녕',3)==='안녕안녕안녕');
console.assert(repeatExpression('hello~',0)==='');

