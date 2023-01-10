/* ---------------------------------------------------------------------- */
/* DOM Manipulation                                                       */
/* ---------------------------------------------------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
let div = document.createElement('div');
div.className = 'third';
div.textContent = '세번째 입니다.';
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제
// 여기는 만들기만 한거!!

// 이게 원하는 곳에 넣어보자. (아래)

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

const h1 = getNode('h1');
//DOM을 control 할때는 주로 const를 씀.


// - node.append(노드나 문자열) – node 끝에 노드를 삽입
h1.append(div);
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
let div2 = div.cloneNode(false);
h1.prepend(div2);
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
let section = document.createElement('section');
section.textContent = 'section 입니다.'
div.append(section);
let div3 = div.cloneNode(true);
h1.before(div3);
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거
div3.remove()
div2.remove()
div.remove()

//중복으로 넣어주는 방법은? 복사해서 추가하기 


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

// h1.insertAdjacentHTML('beforeend','<div class="box">새롭게 추가된 element입니다.</div>');


// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

//너무 어렵다.. 말도 어렵고 이름도 헷갈리고.. 함수로 만들어버리자!

insertBefore('h1','<div class="box">새롭게 추가된 element1입니다.</div>')
// insertBefore('123','<div class="box">새롭게 추가된 element입니다.</div>')


insertFirst('h1','<div class="box">새롭게 추가된 element2입니다.</div>')


insertLast('h1','<div class="box">새롭게 추가된 element3입니다.</div>')


insertAfter('h1','<div class="box">새롭게 추가된 element4입니다.</div>')


/* -------------------------------------------------------------------------- */
/*                                     과제                                     */
/* -------------------------------------------------------------------------- */

// 요소 삭제하기
/*
function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

function clear(elem) {
  elem.data = '';
  elem.textContent = ''; //같은 의미
}
*/

//리스트 생성하기
/*
let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Enter the text for the list item", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }
*/

