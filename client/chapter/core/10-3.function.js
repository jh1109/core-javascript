/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = (...args) => {

  // arguments
  //화살표함수에는 arguments 함수 없음
  // 그래서 위와 같은 방법으로 사용함. ...args
  // 화살표함수에서의 args는 진짜 배열임!
  let total = 0;
  args.forEach(item=>{
    total += item
  })

  args.reduce((acc,item)=> acc + item)

  console.log();
  return ;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d)=> a+b+c+d;


// 화살표 함수와 this





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

pow(2,53) //2의 53승 값을 내보내보기. **말고 반복문으로

// repeat(text: string, repeatCount: number): string;
let repeat; 

repeat('hello~',3) // 'hello~hello~hello~' 이렇게 나오도록..