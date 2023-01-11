/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */



/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');
/*
visual.addEventListener('click',function(){
  console.log('%c visual', 'background: dodgerblue');
})
*/
/*
news.addEventListener('click',function(){
  console.log('%c news', 'background: orange');
})
// desc만! 이벤트를 발생시키고 싶어!
desc.addEventListener('click',function(e){
  e.stopPropagation()
  console.log('%c desc', 'background: hotpink');
})
*/

visual.addEventListener('click',function(e){
  // console.log(e.target);
  // console.log(e.currentTarget); //this와 같다.
  // 하지만 arrow 함수일때는 this는 window를 가리킴.
  console.log(this);
  console.log('%c visual', 'background: dodgerblue');
  css('.pop','display','block');
})

getNode('.pop').addEventListener('click',(e)=>{
  e.stopPropagation();
  css('.pop','display','none');
})
// 안 없어짐. 버블링때문에
// 밑에 visual이 있고 visual을 누르면 pop은 block이 되게 되어있어서

// target : 마우스가 처음 만나는 대상(직접적으로 클릭한 대상)
// currentTarget : 이벤트가 걸린 대상(직접 클릭한 대상이 아닌 이벤트가 걸린 대상)





/* 캡처링 ----------------------------------------------------------------- */