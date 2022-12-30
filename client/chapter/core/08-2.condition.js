/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;
if (age>=14 && age<=90) {
  console.log("안녕하세요!");
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
let userName = prompt('사용자 아이디를 입력해주세요.');
/*
if(userName === 'Admin'){
  let pw = prompt('비밀번호를 입력해 주세요.','');

  if(pw === 'TheMaster'){
    console.log('환영합니다.');
  }else{
    console.log('취소되었습니다.');
  }

}else if(userName === '' || userName === null){
  console.log('취소했습니다.');
}else{
  console.log('인증되지 않은 사용자 입니다.');
}
*/


// useName에 admin을 입력하면? 대소문자 변환 기능
if(userName?.toLowerCase() === 'admin'){
  let pw = prompt('비밀번호를 입력해 주세요.','');

  if(pw?.toUpperCase() === 'THEMASTER'){
    console.log('환영합니다.');
  }else{
    console.log('취소되었습니다.');
  }

}else if(userName?.replace(/\s*/g,'') === '' || userName === null){
  console.log('취소했습니다.');
}else{
  console.log('인증되지 않은 사용자 입니다.');
}
/*
String도 '문자열'이라는 type의 종류이지만, 그전에 본질은 object입니다.
따라서, string도 property를 가지고 있는데요.
toLowerCase가 그 중 하나입니다. 문자열을 소문자로 변환해줍니다.
String.toLowerCase() 형태로 사용됩니다.
관련있는 prototype 으로는 toUpperCase, toLocaleLowerCase, toLocaleUppercase가 있는데
UpperCase는 예상하는 그 함수기능이 맞습니다.
Local은 지역별로 정의해놓은 대소문자,소문자의 특징(모양의 차이?)대로 반환해준다는 것을 의미합니다.
*/
/*
replace도 String이 가지고 있는 prototype 입니다. replace(a,b)이면 a의 값을 b로 바꾸어 반환합니다.
*/
/*
첫 alert 메시지에서 Esc를 눌렀다고 가정해봅시다.
prompt()에서 Esc를 입력하면 null을 반환합니다.
위 예시중 if문에서 쓰이고 있는 prototype들은 모두 String의 prototype 들입니다.
따라서 null의 prototype이 아니기 때문에 error가 발생하죠.
그걸 예방하고자 ?를 추가해준겁니다. ?를 Optional chaining이라고 합니다.
뒤에서 배울 예정이라고 합니다.
*/
//tip. object내에 해당하는 property를 보는 방법 : dir(객체이름)