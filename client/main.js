import { getNode, loadStorage, saveStorage } from "./lib/index.js";


const textField = getNode('#textField');
const deleteButton = getNode('input[value="삭제"]');

loadStorage('area').then(res=>{
  textField.value = res;
})

function inputHandler(){
  saveStorage('area', textField.value);
}

textField.addEventListener('input', inputHandler);
// 값이  작성되는 지를 확인하는 method > input

// 삭제버튼을 누르면 storage가 다 날라가는거 해보기