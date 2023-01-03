/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

// 함수 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

/*
console.log(resultX);
console.log(resultY);
console.log(resultZ);
*/

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(moneyA, moneyB, moneyC, moneyD){  


  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수 : arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.
  
  // 유사배열은 배열이 아니다. 고로 배열의 능력(Instance Method)을 사용하려면 진.짜 배열로 만들어야 한다.
  // 배열의 능력 : forEach, reduce

  return moneyA + moneyB + moneyC + moneyD;
};
//arguments는 함수안에서만 쓰이는 유사배열.
// 37분부터 다시 들어보기
/*
Array.forEach(function(item,index)){
  totle += item;

}
*/
//reduce

console.log(calculateTotal(100,500,200,1234));
//인수를 계속 늘리면서 더한 값을 구하고 싶다면?
let calculateTotal2 = function(){
  console.log(arguments);
  
}
console.log(calculateTotal2(100,500,200,1234,200,15432));


// Instance Method 생성자 함수를 통해 생성된 객체만 사용할 수 있는 능력
// Instance Method는 해당 그 자료형 객체에서만 쓰일 수 있는 prototype.
// 그래서 사이에 Array.prototype.flat() 뭐 이런식으로 사용됨.
// Object.prototype.hasOwnProperty()도 한 예
// Array가 아닌 다른 객체가 쓰려면 call을 이용해서 사용해야 함.
// Static Method : 객체 생성 없이 사용할 수 있는 유틸 메서디
// -> eg) Object.keys, from

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello (){};
// 이렇게 해도 함수를 호출할 때는 변수명을 사용해야함. 그래서 잘 안사용함
//consol.dir() 하면 함수의 이름으로 hello라고 적혀있음

// 콜백 함수 (표현)식
let callbackFunctionExpression = function(url, resolve, reject){

  // if(typeof url ==='string' && url.includes('http') && url.includes('www')){
  if(typeof url === 'string' && url.match(/http.+www/)){ //정규표현식 방법
    resolve(url)
    // 함수 자체를 매개변수로 사용
  } else {
    reject()
    
  }


};

callbackFunctionExpression(
  'https://www.naver.com',
  function(url){
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function(){
    console.log('url 입력 정보가 올바르지 않습니다.');
  }
)
/*
forEach는 내부에 이런 식으로 구현되어 있을려나요?
forEach(function(){}, currentValue, index, array, thisArg){}
*/

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 즉시 호출될 수 있는 함수의 표현식
let IIFE;



(function(){
  var x = 1;
  
  
})()
console.log();
// var를 사용하면서 전역을 보호하기 위해 생긴 표현식


