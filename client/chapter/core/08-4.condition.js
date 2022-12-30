/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;


// emailAddress = 'abcd@gmail.com';
if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

console.log(receivedEmailAddress);

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ?
'user@company.io' :
emailAddress
console.log(receivedEmailAddress);


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';
console.log(receivedEmailAddress);

receivedEmailAddress = emailAddress || 'user@company.io';
console.log(receivedEmailAddress);


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환
const WIDTH = '10px';

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(false || WIDTH); 
console.log(false ?? WIDTH);
console.log(true || WIDTH); 
console.log(true ?? WIDTH);
// 여기서 boolean 값은 사용자가 정의했다고 판단한거임. ??은 true / false를 비교하는게 아니라 정의한 값을 반환한다고 생각!!
console.log(10 || WIDTH);
console.log(NaN ?? WIDTH);
console.log(20/0 ?? WIDTH);
console.log('' || WIDTH);
console.log('' ?? WIDTH);