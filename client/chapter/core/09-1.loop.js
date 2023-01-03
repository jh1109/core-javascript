/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// 숫자를 1부터 10까지 하나씩 증가시키면서 동일한 코드로 반복실행
let array = [number = 1];
while (number < 10) {
  array = array.concat(++number);
}
console.log(array);
// for문으로도 작성해보기
let arrayy = [number=1];
for (;++number <= 10;) {
  arrayy = arrayy.concat(number);
}
console.log(arrayy);




//  while문
let a = 0;
while (a<10) {
  console.log(a);
  a++;
}
// for문으로도 작성해보기
for (let b = 0;b < 10; b++) console.log(b);


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
// while 문 (순환 : 순방향)
let j = 0;
while (j < frontEndDev.length) {
  console.log(frontEndDev[j]);
  j++;
}
//for문으로 작성해보기
let m = 0;
for (;m < frontEndDev.length; m++){
  console.log(frontEndDev[m])
}

// while 문 (역순환 : 역방향)
let length = frontEndDev.length;
while (length) {
  console.log(frontEndDev[length - 1]);
  length--;
}
// for문으로 작성해보기
for (;length;length--) console.log(frontEndDev[length - 1])

let i = frontEndDev.length-1;
while (i>=0){
  console.log(i, frontEndDev[i]);
  --i;
}
// 또 다른 방법
/*let copyArray = [...frontEndDev]; //복사해준 거임*/
let copyArray = frontEndDev.slice();
console.log(copyArray); 
/*
slice는 값을 잘라내는 건데 비어있으므로 frontEndDev 배열 그자체를 복사해줌
slice(숫자)를 작성해주면 숫자번째의 배열 인자를 삭제함.
이때 index는 1부터 시작. slice(1)은 첫번째 배열 인자를 잘라냄.
*/
// console.log(copyArray.pop());
while (copyArray.length) {
  console.log(copyArray.pop());
}
/*
Array의 'pop' prototype.
배열의 마지막 인자를 빼고 그 빼낸 값을 반환하는 메서드. pop()으로 사용됨.
pop prototype을 사용하면 배열의 형태는 없어짐. 인자를 빼니까!
그래서 똑같은 배열을 복사해서 만들어준다음 pop 을 사용한 것임.
*/


// 성능 진단 : 순환 vs. 역순환
/*
성능 진단 performance object 해서 보면 역순환이 더 좋음.
반복 횟수가 작을때는 거의 차이가 없지만, 반복문이 많아질수록은 역순환의 성능이 더 좋음.
*/