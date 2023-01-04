/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     과제                                     */
/* -------------------------------------------------------------------------- */
//과제1
let user = {
  name: 'John',
  surname: 'Smith',
};
console.log(user);
user.name = 'Pepe'
console.log(user);
delete user.name;
console.log(user);

//과제2
let isEmpty = obj => {
  for (let key in obj) {
    return false;
  } 
  return true;
}

//과제3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}




/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: "10000",
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: "800px",
  height: "40vh",
  minHeight: "280px",
  transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = null;
authUser = {
  uid : 'user-id-',
  name : 'juhee',
  email: 'nohjuhee227@gmail.com',
  isSignIn: true,
  permission: 'paid',
}

Object.prototype.SIGN = true;

for(let key in authUser) {
  if({}.hasOwnProperty.call(authUser,key)){
    // console.log(key);
  }
}

// 프로퍼티 나열 authUser : 객체 인데 배열로(key만 모아놓은, value만 모아놓은)
console.log(Object.keys(authUser));
console.log(Object.values(authUser));



function getPropertiesList(object){
  return Object.keys(object)
}

let result = getPropertiesList(authUser)


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 
// 제거는 remove 삭제는 delete
// 제거는 값을 비워놓는 거고 삭제는 아예 없애는거
// 제거, 삭제해주는 함수를 만들어보자
/*
1. 함수 이름 정하기
2. 인수와 인자 정하기
3. validation(확인하기)
4. return 값
*/
function removeProperty(object, key){
  object[key] = null;
}
removeProperty(authUser, 'uid')

function deleteProperty(object, key){
  delete object[key]
}
deleteProperty(authUser, 'uid')

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

/*
const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: isLogin,
}
*/
// 줄여보자
const student = {
  name,
  email,
  authorization,
  isLogin,
}
//const student = { name, email, authorization, isLogin } 같은 코드




// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 key를 배열로 바꾸고 그 배열의 갯수가 0이면 true를 내보내고,
// 그렇지 않으면 false 를 내보내는 동작을 하는 isEmptyobject 함수를 만들어보자
function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false
  return getPropertiesList(object).length === 0;
}
isEmptyObject(student)

const empty ={}
console.log(isEmptyObject(empty));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
}
// 월급의 총 합을 구하세요. Object.entries를 이용해서
// 배열 구조 분해 할당 (detructuring assignments) 분해한다음에 할당한다!의 의미
let total = 0;
for(let [key, value] of Object.entries(salaries)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  total += value;
}
console.log(total);



// color 예시
let color = ['#ff0000', '#2b00ff', '#00ff2f'];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

// 더 간단하게 작성할 수 있는 방법은 없을까?

// const [red,blue,green] = color
// 한 색깔만 가지고 오고 싶을때
const [,,green] = color
console.log(green);





/* -------------------------------------------------------------------------- */
/*                                객체의 구조 분해 할당                                */
/* -------------------------------------------------------------------------- */

const {
  John: a,
  Ann: b,
  Pete: c,
} = salaries;
console.log(a);
// const { John, Ann, Pete } = salaries;
// 순서 바꿔도 동일하게 작동함,키 값만 같으면 순서 상관없음