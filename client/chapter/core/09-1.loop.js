/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// 숫자를 1부터 10까지 하나씩 증가시키면서 동일한 코드로 반복실행
let number = 1;
while (number < 10) {
  console.log(number);
  number++;
}




//  while문
/*
let i = 0;
while(i<10){
  console.log(++i);
}
*/

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */
/*
let i = 0;
while (i<frontEndDev.length){
  console.log(frontEndDev[i]);
  ++i;
}
*/
// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)
let i = frontEndDev.length-1;
while (i >=0){
  console.log(i, frontEndDev[i]);
  --i;
}
// 또 다른 방법
/*let copyArray = [...frontEndDev]; //복사해준 거임*/
let copyArray = frontEndDev.slice(); //slice는 값을 잘라내는 건데 비어있으므로 frontEndDev 배열 그자체를 복사해줌
while (copyArray.length) {
  console.log(copyArray.pop());
}


// 성능 진단 : 순환 vs. 역순환
/*
성능 진단 performance object 해서 보면 역순환이 더 좋음.
반복 횟수가 작을때는 거의 차이가 없지만, 반복문이 많아질수록은 역순환의 성능이 더 좋음.
*/