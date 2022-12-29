/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

// let thisTime = prompt("What Time is't?? 다음 중 골라주세요. 아침, 점심, 저녁, 밤, 심야, 새벽");
// console.log(thisTime);

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


// switch (thisTime) {
//   case MORNING:
//     console.log("뉴스 기사 글을 읽는다");
//     break;
//   case LUNCH:
//     console.log("자주 가는 식당에 가서 식사를 한다.");
//     break;
//   case DINNER:
//     console.log("동네 한바퀴를 조깅한다.");
//     break;
//   case NIGHT:
//     console.log("친구에게 전화를 걸어 수다를 떤다.");
//     break;
//   case LATE_NIGHT:
//   case DAWN:
//     console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
//     break;
// }



/* switch문 → if문 변환 --------------------------------------------------- */
/*
if (thisTime === MORNING) {
  console.log("뉴스 기사 글을 읽는다");
} else if (thisTime === LUNCH){
  console.log("자주 가는 식당에 가서 식사를 한다.");
} else if (thisTime === DINNER){
  console.log("동네 한바퀴를 조깅한다.");
} else if (thisTime === NIGHT){
  console.log("친구에게 전화를 걸어 수다를 떤다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
}
*/






/* switch vs. if -------------------------------------------------------- */
// let number = +prompt("0~6사이의 숫자를 입력해주세요");
// 0~6의 값을 받는다.
// 임의 숫자를 넣어서 무슨 요일 인지를 알려주는 함수를 만들어보자!
function getDay(number) {
  switch (number) {
    case 0:
      return "일";
      break;
    case 1:
      return "월";
      break;
    case 2:
      return "화";
      break;
    case 3:
      return "수";
      break;
    case 4:
      return "목";
      break;
    case 5:
      return "금";
      break;
    case 6:
      return "토";
      break;
  }
}
// console.log(getDay(4));

// 여기서 숫자를 내가 직접아니라 랜덤으로 던져보자. 
let result = getDay(Math.round(Math.random()*6));
console.log(result);
// Math은 한번밖에 사용못함. 재사용하는 방법이 있을까?

let number = prompt("숫자를 입력해주세요");
if (number%2 === 0) {
  console.log("짝수");
} else if (number%2 === 1) {
  console.log("홀수");
}


// 문제
let a = 1;
if (a *= 2+3 > 10) {
  console.log("안녕하세요");
}

let score = +prompt("시험 점수를 입력해주세요.");
if (score >= 90) {
  console.log("A입니다.");
} else if (score >=80) {
  console.log("B입니다.");
} else if (score >=70) {
  console.log("B입니다.");
} else if (score < 70) {
  console.log("공부하세요!!");
}
