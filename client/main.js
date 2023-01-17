import { diceAnimation, getNode, getNodes, disableElement, enableElement, visibleElement, invisibleElement, insertLast, attr, clearContents, memo } from "./lib/index.js";

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
const recordListWrapper = getNode('.recordListWrapper');
memo('@tbody',() => getNode('.recordListWrapper tbody'));

/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */
let count = 0;
let total = 0;

function renderRecordListItem(){
  let diceValue = +attr(memo('cube'),'data-dice');
  let template = /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
  `;
  insertLast(memo('@tbody'), template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}


/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */
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

  function handleRecord(){
    visibleElement(recordListWrapper);
    renderRecordListItem();
  }
  function handleReset(){
    invisibleElement(recordListWrapper);
    clearContents(memo('@tbody'));
    count = 0;
    total = 0;
  }

rollingDiceButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click',handleReset);