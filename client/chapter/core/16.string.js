/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength: ',stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter: ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
// let slice = message.slice(0,3);
let slice = message.slice(8,-1);
// let slice = message.slice(8,message.length);
// let slice = message.slice(8);
console.log('slice: ',slice);
let subString = message.substring(0,6);
// let subString = message.substring(-1,6);
console.log('subString: ', subString);
let subStr; //없어졌음


// 문자열 포함 여부 확인
// let indexOf = message.indexOf('i'); // 첫번째 index 값
let indexOf = message.indexOf('p'); // 있으면 해당 index값을 없으면 -1로
console.log('indexOf: ', indexOf);
let lastIndexOf = message.lastIndexOf('s'); // 뒤에서 출발하지만 맨 처음 나오는 index 값을 반환함
console.log('lastIndexOf: ', lastIndexOf);
let includes = message.includes('ess');
console.log('includes: ',includes);
let startsWith = message.startsWith('L'); // 첫글자가 어떤 문자인지? true, false로 값 반환
console.log('startWith: ',startsWith);
let endsWith = message.endsWith('');
console.log('endsWith: ', endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft: ', trimLeft);
let trimRight;
let trim = message.replace(/\s*/g, '');
console.log(trim);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat: ', repeat);


// 대소문자 변환
let toLowerCase;
let toUpperCase;

//정규표현식
/*
\s : 공백
\s* : 줄바꿈의 공백까지 모두 선택
\S : 공백이 아닌 부분
*/

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;

// toCamelCase('less-is-more'); // lessIsMore

let toPascalCase;