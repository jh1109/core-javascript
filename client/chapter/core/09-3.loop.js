/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

/*
let j = 0;
for (; j < 10; j++) {
  console.log(j);
}
console.log(j);

// while로 바꿔보기

*/

// 2 ~ 10까지의 짝수 출력하기

let j = 2;
for (;j <= 10;++j) {
  if (j % 2 === 1) continue;
  // console.log(j); //배열로 나타내보기
}


const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
//split()은 안에 적어준 값을 제외하고 나머지 값들을 배열로 반환해주는 메서드

/*
let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}
*/

//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
// frontEndDev[i].includes('SVG'); 는 SVG가 저 배열에 있냐? 를 물어봄
// for (let i = 0; i < frontEndDev.length; i++) {
//   if (frontEndDev[i].includes('SVG') || rontEndDev[i].includes('jQuery') continue;
// }

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
for(let i=0;i<frontEndDev.length;i++) {
  let result = frontEndDev[i];
  if (result.includes('jQuery')) break;
  console.log(result);

}


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)