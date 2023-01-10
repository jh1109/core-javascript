/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode('.first');


// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log(first.hasAttribute('class'));
// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class'));
// - elementNode.setAttribute(name, value) – 속성값을 변경함
console.log(first.setAttribute('id','box'));
console.log(first.setAttribute('some','hello'));
// - elementNode.removeAttribute(name) – 속성값을 지움
console.log(first.removeAttribute('id'));
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes); //유사배열로 반환함.
for (let value of first.attributes){ 
  console.log(value);
} 
// NameNodeMap을 보면 아래 Symbol(Symbol.iterator) 이 있음.
// 이 값이 있으면 js 내에서 순환이 가능한 기능이 있어 라고 적혀있는 의미임.
// -> interable(반복 가능한) 객체 


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.play = 'playing'
first.dataset.play = 'playiiing'


//get과 set을 한꺼번에하는 유틸함수를 만들어보자.
//get 함수

console.log(getAttr('.first','class')); // first

setAttr('.first','data-value','hello');
// console.log(setAttr('.first',data-value,'hello'));
// console.log(setAttr('.first','data-value',));

/* 그냥 data-를 붙인다고 다 database가 되지 않음!*/

// get과 set을 함께해주는 함수 만들기

//if 에서 else는 필수는 아니지만 쓰는걸 권장..
console.assert(getAttr('.first','class') === 'first');
console.log(attr('.first','id','container'));
console.log(attr('.first','id'));