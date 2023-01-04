/* ---------------------------------------------------------------------- */
/* Functions → Recursion                                                  */
/* ---------------------------------------------------------------------- */

// 재귀(Recursion)
// 사전적 정의: "본래 있던 곳으로 다시 돌아옴"
// 프로그래밍 정의: 
// - "문제 해결을 위해 함수 자신을 다시 호출"
// - "어떤 프로시저(절차)가 자기 자신을 반복적 호출하여 문제를 풀어 나가는 알고리즘"

// -----------------------------------------------------------------------

// pow 함수를 재귀 호출 방식으로 변경
/*
let pow = (x,n) => {
  let result = 1;
  for (i = 0; i < n; i++){
    result *= x;
  }
  return result;
};
*/

// - 재귀 기반(base) : 재귀를 언제 멈출 것인가?
// - 재귀 단계(step) : 재귀시 반복적으로 처리할 일(공통적인 처리)
// - 재귀 깊이(depth) : 재귀를 최대 몇번 수행할 것인가?

function pow(x,n) {
  if (n==0) return 1;
  else if (n==1) return x;
  else return x * pow(x,n-1);
}
console.assert(pow(2,4)===16);
console.assert(pow(2,0)===1);

//재귀 함수는 순서대로 동작하는 함수 보다는,
//먼저 동작하는 부분부터 생각해야 한다. if 조건에 맞는 else 먼저 동작한다고 생각해야 한다.
//함수 내부에 중첩 호출이 있을때(재귀 함수) 현재 함수의 실행이 중지 된다!


// factorial 함수를 재귀 호출 방식으로 작성
// 참고: https://bit.ly/factorial-util
// - 팩토리얼 = 그 수보다 작거나 같은 모든 양의 정수의 곱
// - 기호(!)를 사용하여 n!으로 표기
// - 예시) 4! = 4 * 3 * 2 * 1
let pactorial = number => {
  if (number == 1) return 1;
  else return number * pactorial(number-1);  
}

console.assert(pactorial(4)===24);


// fibonacci 함수를 재귀 호출 방식으로 작성
// 참고: https://bit.ly/fibonacci-util
// - 피보나치 수 = 처음과 두번째 항은 1이고, 그 뒤 모든 항은 바로 앞 두 항을 더한 합인 수열
// 예시) 1, 1, 2, 3, 5, 8, ...

let fibonacci = n => {
  if (n == 0) {
    throw new Error('0보다 큰 정수를 입력하세요.');
  }
  else if (n <= 2) return 1;
  else return fibonacci(n-1) + fibonacci(n-2);
}

/*
function fibonacci(n){
  if(n <= 0) return 0;
  if(n <= 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
*/

// -----------------------------------------------------------------------

// **실행 컨텍스트(execusion context)의 작동 흐름**
// - 함수 실행에 대한 세부 정보를 담고 있는 내부 데이터 구조
// - 제어 흐름의 현재 위치, 변수의 현재 값, this 등 저장
// - 함수가 호출될 때 마다, 하나의 실행 컨텍스트 생성
// - 내부에 중첩된 함수를 포함한 경우
//   - 현재 함수의 실행 일시 중지
//   - 중지된 함수와 연관된 실행 컨텍스트는 "실행 컨텍스트 스택" 자료 구조에 저장 됨
//   - 중첩 함수가 호출되어 실행 됨 (호출 시 새로운 컨텍스트 생성)
//   - 중첩 호출 실행이 종료되면 실행 컨텍스트 스택에서 일시 중단된 함수 실행 컨텍스트 꺼냄(pop)
//   - 다시 중단되었던 함수의 실행을 이어감


// -----------------------------------------------------------------------

// 반복문 기반 알고리즘 vs. 재귀 호출 알고리즘
// - 재귀 호출 알고리즘은 재귀 깊이만큼 메모리가 필요
// - 반복문 기반 알고리즘은 메모리가 절약 됨
// - 반복문이 더 성능은 좋지만 재귀가 눈에 익으면 가독성이 좋아서 쓰임

// 요약
// - 메모리 최적화 관점에서는 반복문 기반 알고리즘에 비해 메모리 사용도가 높은 점이 약점
// - 작성하는 모든 곳에서 메모리 최적화가 필요한 것은 아니므로 가독성을 높이는 코드가 필요
// - 재귀는 코드를 짧게 만들고, 코드 이해도를 높이며 유지보수에도 이점이 있어 많이 사용됨


// -----------------------------------------------------------------------


// 메모이제이션을 사용한 fibonacci 함수를 작성해보세요.
// 위에 재귀함수를 이용한 fibonacci 함수는 성능 부분에서 효율적이지 못하다.
// 숫자가 커질수록 값들을 직접 다 계산하면서 올라가기 때문에 시간도 많이 걸리고 컴퓨터의 성능도 떨어질 수 있다.
// 그래서 이전에 저장한 값들을 메모리에 저장했다가 필요할 때 호출해서 사용하는 방식이 메모이제이션 방식이다.
// 참고: https://bit.ly/memoiz
// - 동일 계산 반복 시, 이전 계산 값을 메모리에 저장하여 실행 속도를 높이는 방법

const memoFibo = (n)=>{
  if(n <= 0) return 0;
  if(n <= 2) return 1;
  if(memoFibo.cache[n]){
    return memoFibo.cache[n];
  }else{
    return memoFibo.cache[n] = memoFibo(n-1) + memoFibo(n-2);
  }
}

memoFibo.cache = {
  //  key : value
}
// 위에 피보나치 함수는 그 값을 계속 계산했어야 했는데,
// 이 memoFibo는 계산한 값은 적립을 해놔서 속도가 더 빠름
// cache에 저장을 해두는 거임


// 회사 부서 팀원들의 월급 총 합을 구해보세요.
// - 반복문 기반 또는 재귀 호출 알고리즘 중 택 1

const SocialPartiners = {
	foundingDate: 2021,
  team: {
    marketing: [
      {
        name: '이진아',
        salary: 3_250_000,
      },
      {
        name: '박연성',
        salary: 2_600_000,
      },
    ],
    design: {
      ui: [
        {
          name: '송우진',
          salary: 3_920_000,
        },
        {
          name: '김지평',
          salary: 2_743_000,
        },
      ],
      uxd: [
        {
          name: '이수아',
          salary: 4_000_000,
        },
        {
          name: '최철상',
          salary: 3_208_000,
        },
        {
          name: '고요미',
          salary: 2_106_000,
        },
      ],
    },
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
console.assert(sumSalaries(SocialPartiners));

//스터디에서 낸 문제
/*
다음과 같이 재귀 함수를 표현하는 의사코드를 작성했습니다.
아래 코드 A와 코드B 결과를 제대로 예측한 보기를 고르세요.

  foo(정수형 h) -> 정수형 함수 선언
  {
    만약 h가 0이면 {
      1을 리턴한다
    }
    그러지 않으면 만약 h가 1이면 {
      2를 리턴한다
    }
    k = foo(h-1) + foo(h-2)
    k값을 리턴한다
  }

A 코드 : foo(5) //13
B 코드 : foo(7) //34
*/


/* -------------------------------------------------------------------------- */
/*                                     과제                                     */
/* -------------------------------------------------------------------------- */

//1+2+3+...+n 을 계산하는 함수 sumTo(n) 만들기
//for 반복문
/*
function sumTo(n) {
  let result = 0;
  for (i=1;i<=n;i++){
    result += i;
  }
  return result;
}
*/
//재귀함수
let sumTo = n => {
  if (n === 1) return n;
  else return n + sumTo(n-1);
}
console.log(sumTo(100));