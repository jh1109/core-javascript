/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

//과제2
function checkAge(age) {
  return (age > 18) ?
  true :
  confirm('보호자의 동의를 받으셨나요?')
}

function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?')
}

// 과제3
function min(a,b) {
  return a < b ? a : b;
}

//과제4 : x의 n제곱을 반환해주는 함수 pow(x,n)만들기




function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = 0
){
  /*
  if (!priceC){
    priceC = 0;
  }
  if (!priceD){
    priceD = 0;
  }
  */
   
  if(!priceA || !priceB){
    throw new Error('calcPrice 함수의 첫 번째, 두 번째 인수는 필수 입력값 입니다.');
     // 새로운 error(object)를 생성해서 내보내줌(throw)
  }
    
  return priceA + priceB + priceC + priceD;
}

console.log('총 합 = ' + calcPrice(10000, 8900, 1360, 2100));
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);


let result = calcPrice(120,251); // a,,c,d 이런식 안됨
console.log(result);

// 함수 선언

// 함수 호출
result = calcPrice(120,251,-521); //인수를 지정하고 함수를 불러오는게 함수 호출
console.log(result);


// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
/*
1. 하나의 기능만을 수행해야 한다.(관심사의 분리)
2. 읽었을 때 바로 기능을 알 수 있게 이름과 매개변수를 정의한다.
3. 재사용성이 좋아야 한다.
*/


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// pxValue와 base라는 매개변수가 있고, 각각 number와 string, number 자료형을 쓰도록 하고
// string으로 값을 반환한다는 의미의 typescript.
function rem(pxValue,
  base = 16
  ){
   if (typeof pxValue === 'string'){
    pxValue = parseInt(pxValue, 10);
   } 
  return `${pxValue / base}rem`;
}

function rem(pxValue, base = 16){



  return `${pxValue / base}rem`
}


//test  [Test Driven Development] 테스트 주도 개발
// 원하는 동작으로 인한 기대값 설정으로 함수가 제대로 동작하는지를 test하는 작업
console.assert(rem(20) === '1.25rem');
console.assert(rem('30px') === '1.875rem');
console.assert(rem('56px',10) === '5.6rem');


// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.