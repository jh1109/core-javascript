/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

/*
let i = 0;
do {
  console.log('최초 실행');
  i++;
} while (i<5)
*/

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// let count = prompt('순환 횟수를 입력해주세요.(숫자)');
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
/*
처음 받는 값은 문자열이고 나머지 while문으로 받는 값들으 숫자형임
*/

// do ~ while 문 (순환)


// - 위 do ~ while 문을 순방향으로 순환되도록 설정






let first = document.querySelector('.first');
let second = document.querySelector('.second');
console.log(first.nextSibling);
// DOM
/*
document.querySelector 는 html의 값들을 js 언어를 적용하기 위해 불러오는 console.error('메서드',메서드)
()안에는 css 문법이랑 똑같이 불러오고 싶은 것을 작성하면 됨.
html에서 class가 first인 값을 가져온다! 는 뜻.
nextSibling : 다음 형제가 누구야? 라고 말해주는 기능
여기서는 #text가 나옴. html 보면 first span이 끝나고 줄바꿈이 있으면서 공백을 text로 반환한거임.
*/
console.log(first.nextSibling.nextSibling);
/* 이렇게 해야 나옴 하지만 또 그 사이에 주석이나 다른 값이 추가한다면? 또 안나오겠쥬?
그럼 내가 굳이 계속 계속 nextSibling을 추가 하지도 다음 태그를 나오게 하고 싶으니까 do...while 문을 사용해보자*/

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE)

  return node
}
console.log(next(first)); //함수가 실행된 값을 console에서 보고 싶다면,,
// console.log(next(first));



//반대로, .second를 했는데 앞에 있는 형제 태그를 알고 싶을 때
function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE)

  return node
}

console.log(prev(second));
// previousSibling은 이전의 node 값을 반환함. 앞에 node 값이 없다면, null 반환
