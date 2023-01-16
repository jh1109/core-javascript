/*global gsap*/
import { getInputValue, getNode, getRandom, clearContents, insertLast, typeError, isNumericString, showAlert, copy, addClass, removeClass } from "./lib/index.js";
import { jujeobData } from "./data/data.js";




const submit = getNode('#submit');
const result = getNode('.result');


function clickSubmitHandler(e){
  e.preventDefault();
  
  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  
  if (!name) {
    showAlert('.alert-error', '이름을 입력해주세요.');
    // addClass(result, 'shake');
    // setTimeout(() => {
    //   removeClass(result, 'shake');
    // }, 1000);

    //GSAP
    gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    return;
  }
  if (isNumericString(name)){
    showAlert('.alert-error', '정확한 이름을 입력해주세요!');
    return;
  }
  
  clearContents(result);
  insertLast(result, pick);
}

function clickCopyHandler(){
  let text = result.textContent;
  copy(text).then(()=>{
    showAlert('.alert-success', '클립보드 복사가 완료됐습니다.');
  });
}

submit.addEventListener('click', clickSubmitHandler);
result.addEventListener('click', clickCopyHandler);