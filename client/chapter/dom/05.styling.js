/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');



/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 
console.log(first.className);
console.log(first.classList);
// console.log(first.className = "first hello");
// console.log(first.className = 'hola');
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용
first.classList.add('hello');
first.classList.remove('hello');

// 유틸함수를 만들어보자..

addClass('.first','hello') // first에 hello가 추가될 수 있도록..

removeClass('.first','hello')
// removeClass(first,'hello')
// removeClass('.first')



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장
first.style.backgroundColor = 'red'
first.style.marginLeft = '30px'
first.style.transform = 'rotate(360deg)'
// console.log(first.style.fontSize); // 계산된 전 값은 불러오지 않음
// first.style.fontSize = '55px'

// console.log(first.style.fontSize);
// console.log(first.style.backgroundColor);


/* 계산된 스타일 읽기 ------------------------------------------------------- */

/*
let size = getComputedStyle(first).fontSize;
console.log(size);
*/ 

// 계산되어 있지 않은 값 가져오기

// 대상에게 원하는 css 속성을 추가

console.log( getCss('.first','font-size') );
setCss('.first', 'color', 'white')


// 둘을 한번에 쓰는 함수를 만들어볼까..?

css('.first', 'font-size', '100px'); //set

// 왜 여전히 32px가 나오지?
// 바로 앞에 100px로 동작하고 font-size의 값을 불러오는데 시간이 좀 필요하기 때문..
// 그래서 비동기로 처리..
setTimeout(()=> {
  console.log(css('.first', 'font-size')); // get

},1000)

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`