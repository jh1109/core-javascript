import { getNode } from "../dom/getNode.js";

const first = getNode('.first');

// hello가 올라갔다가 한바퀴돌고 다시 원자리로 돌아오게 구현해보자.
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