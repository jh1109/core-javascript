/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */


// let number = Number(prompt("숫자를 입력해주세요"));
/*
if (number > 0) {
  console.log("1");
} else if (number < 0) {
  console.log("-1");
} else {
  console.log("0");
}
*/
// 조건부 연산자로 작성해보기
/*
let message = (number > 0) ? "1" :
  (number < 0) ? "-1" :
    "0";
console.log(message);
*/








// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = "yes";

// 영화 볼거니?
// let goingToWatchMovie = "no";

/*
// if 문(statement)
if (didWatchMovie.includes (yes)) { // includes는 특정 값이 있어? 라고 물어보는 기능. 있으면 true를 반환함
  console.log("영화 어땠어?");
} else if 
  (goingToWatchMovie == "yes") {
    console.log("같이 볼래?");
  } else {
    console.log("okay, bye...");
  }
*/
// 조건문 연산자로 작성해보기
let didWatchMovie = prompt("아바타2 봤어?", yes or no);
let goingToWatchMovie = prompt("영화 볼거니?", yes or no);

(didWatchMovie == "yes") ? "영화 어땠어?" :
(goingToWatchMovie = "yes") ? "같이 보러 갈래?" :
"오케이 바이~"

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식