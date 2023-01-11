/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])  **가장 많이 쓰임**


/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first');

function handler(){
  console.log('hit!');
  //fist를 클릭하면 second가 사라지게,,
  // css('.second','display','none');
  // getNode('.second').hidden = 'true';
}

// first.addEventListener('mouseout',handler);

const off = bindEvent('.first','click',handler);
bindEvent('.second','click',off);

// - addEventListener
// - removeEventListener

/* -------------------------------------------------------------------------- */
/*                                     과제                                     */
/* -------------------------------------------------------------------------- */

// 축구공

const ground = getNode('.ground');
const ball = getNode('.ball');

ground.addEventListener('click',function(e){
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px,${e.offsetY - ball.offsetHeight / 2}px)`;
});

// mousemove, resize(창 크기가 변경될때마다 동작) : 컴퓨터 성능 저하의 원인 
// 그래서 제어하기 위해 Debounce와 Throttle을 사용함.

// emotion