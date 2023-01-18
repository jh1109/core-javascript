import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first');

// hello가 올라갔다가 한바퀴돌고 다시 원자리로 돌아오게 구현해보자.
/*
first.style.top = '-100px';
first.style.transform = 'rotate(360deg)';
first.style.top = '0px';
동시에 다 동작하기 때문에 원하는 애니메이션을 구현하지 못함.
*/

function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    delay(()=>{
      first.style.top = '0px';
    })
  })
})
// callback 함수를 많이 쓰니 가독성이 좋아보이지 않는다.
// 이를 보완하는 기능이 promise


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
}

export function delayP(options = {}){
  let config = {...defaultOptions}; //얕은 복사
  
  //delayP(3000) 만 해도 나오게끔 해보자
  if(isNumber(options)){
    config.timeout = options;
  }
  //객체 합성(위에 defaultOptions와 밑에 선언한 인수 값을 합쳐서 동작 시키고 싶다.)
  if (isObject(options)){
    config = {...config, ...options};
  }
  // 겹치는 값은 뒤에 있는 값으로 덮여쓰여짐.

  const {shouldReject, timeout, data, errorMessage} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}

/*
delayP(
  {
  timeout: 1500,
  data: '진짜 성공!',
  shouldReject: false,
  })
.then(res=>{
  console.log(res);
})
*/


/*
delayP().then(res=>{
  console.log(res);
})
.catch(err=>{
  console.log(err);
})
*/


/* -------------------------------------------------------------------------- */
/*                                 async await                                */
/* -------------------------------------------------------------------------- */

async function delayA(){
  return '완료';
}
let result = await delayA();
// console.log(result);

async function 라면끓이기(){

  try{

    console.log('물 끓이기');

    await delayP()
    console.log('면 넣기');

    await delayP()
    console.log('스프 넣기');

    await delayP()
    console.log('파송송 계란 탁!');

    // throw new Error('계란 껍질이 들어가버렸다!');
    await delayP()
    console.log('그릇에담기');

  }catch(err){
      console.log(err);
  }

}

// 라면끓이기();

