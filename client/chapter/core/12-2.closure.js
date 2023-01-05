function earth(){
  let water = true;
  let apple = {
    ceo: 'Tim Cook',
    product: ['iphon', 'macbook']
  }
  return function(){
    console.log(water);
  }
  
}
const ufo = earth()

//실무에서 왜 쓰는가?
function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());