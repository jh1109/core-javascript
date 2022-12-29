/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;
if (age>=14 && age<=90) {
  console.log();"안녕하세요!"
}







let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy);


// 로그인 구현하기
/*
let userName;
let pw = "TheMaster"; 
if userName == "Admin" {
  prompt("비밀번호를 입력해주세요");
  if Admin == "" || null {
    "취소되었습니다."
  } else if Admin != pw {
    "인증에 실패하였습니다."
  } else if Admin == pw {
    "환영합니다!"
  }
}
*/
// 선생님 답안
let useName = prompt("Who's there?","");
if(useName === "Admin"){

}



// useName에 admin을 입력하면?
// if (username.localeCompare("Admin"))