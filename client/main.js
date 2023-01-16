import { diceAnimation, getNode, getNodes, disableElement, enableElement, visibleElement, invisibleElement } from "./lib/index.js";

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
const recordListWrapper = getNode('.recordListWrapper');


// IIFE
const handleRollingDice = ( () => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation, 200);
      // disableElement(recordButton);
      // disableElement(resetButton);
    } else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  }

  })()

rollingDiceButton.addEventListener('click', handleRollingDice);

function handleRecord(){
  visibleElement(recordListWrapper);
}
recordButton.addEventListener('click',handleRecord);

function handleReset(){
  invisibleElement(recordListWrapper);
}
resetButton.addEventListener('click',handleReset);