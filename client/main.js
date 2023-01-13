/* eslint no-undef: 'warn' */
/* eslint no-unused-vars: 'off' */

import {
  getNode,
  css,
  addClass,
  removeClass,
  refError,
  insertLast,
} from "./lib/index.js";

//1. 인풋 벨류값 가져오기
//2. 이벤트 핸들러 연결하기
// 3.이벤트 기본동작 차단하기
// 4.두 수의 합을 더해주기
// 5. 화면에 출력하기
// (함수 프로그래밍으로 만들어보기) 쪼개고 쪼개고 쪼개고 쪼개고..

const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
let result = getNode('.result');

function getInputValue(node){
  if (typeof node === 'string') node = getNode(node);
  if (node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node){
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

done.addEventListener('click', function(e){
  e.preventDefault();
  let total = sum(+getInputValue(firstInput), +getInputValue(secondInput));

  clearContents(result);

  // result.innerHTML = total;
  // innerHTML은 스크립팅 공격에 취약해 되도록 사용 지양
  
  insertLast(result, total);
});

// 값이 변하면 결과값도 실시간으로 확인할 수 있게 해보자!

function inputHandler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
  

}

firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change', inputHandler);