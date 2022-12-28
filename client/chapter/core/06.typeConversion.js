/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(String(YEAR));

// undefined, null
console.log(String(undefined));
// null
let days = null;
console.log(String(days));
console.log(days);

// boolean
let isKind = true;
console.log(String(isKind));  //문자 true
console.log(isKind);  //boolean의 true


console.log(isKind + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
console.log(Number(null));

// boolean
console.log(Number(true));
console.log(Number(false));
console.log(Number(4>1));
console.log(Number("false"));
let test1 = true;
console.log(true*1);
console.log(test1/0);
// string
let test2 = '123';
console.log(test2*1+500);
let text3 = 'true';
console.log((Boolean(text3)));

// numeric string
let width = '325.245px';
console.log(parseInt(width,10));  //10은 10진수를 의미, 10은 생략가능. 기본이 10진수라서
console.log(parseFloat(width,10));  //그래도 10진수를 명시해주는 것을 권장


/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(!!'');
console.log(!!' ');  //!!는 반전의 반전이니까 원래 값 할당
console.log(!' ');  //!는 반전을 의미.


// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 