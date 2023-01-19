/* global gsap*/

import { attr, changeColor, createEmptyCard, delayP, getNode as $, insertLast, juhee, renderEmptyCard, renderSpinner, renderUserCard } from "./lib/index.js";

// rendingUserList() 만들기

// 유저 카드 생성 함수 만들기
// 생성된 카드로 랜더링 해주는 함수 만들기

const userCardContainer = $('.user-card-inner');

async function rendingUserList(){
  renderSpinner(userCardContainer);
  try{
  await delayP(2000);
  $('.loadingSpinner').remove();
  let response = await juhee.get('http://localhost:3000/users');
  let userData = response.data;
  // console.log(userData);
  userData.forEach(data=>renderUserCard(userCardContainer,data));
  // forEach는 배열을 그냥 순환하는 용도. return 필요 없음
  // reduce나 map은 그 값을 반환할때 쓰는 용도. return 필요

  // insertLast(userCardContainer,createUserCard(userData)); 

  //gsap 라이브러리
  changeColor('.user-card');
  // console.log(gsap.utils.toArray('.user-card'));
  // gsap.to('h2',{x:100, rotation:360, duration:3})
  gsap.to(gsap.utils.toArray('.user-card'), {
    x: 0,
    opacity: 1,
    duration: 1.5,
    // rotation: 360,
    stagger: 0.2
    // 시차를 주는 기능
  })
// to 메서드에 target은 객체는 안되고 배열까지만 가능.

}catch(err){
  // console.log(err);
  renderEmptyCard(userCardContainer);
}
}
rendingUserList();

// 삭제버튼을 누르면 콘솔창에 '삭제'가 나오도록.
// user-card-inner에 위임!
function handlerDelete(e){
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');
  if (!deleteButton || !article) return;
  let id = attr(article, 'data-index').slice(5);
  juhee.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = '';
    rendingUserList();
  })
  // 눈에 보이지는 않지만 지운 통신은 된거임. 서버가 없어서 안보이는거 ㅠ


}
userCardContainer.addEventListener('click', handlerDelete);






























/*
xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then(res=>{
  insertLast(document.body, JSON.stringify(res));
})
.catch(err=>{
  console.log(err);
})
*/


/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res));
  },
  (err)=>insertLast('body','데이터 로딩에 실패했습니다.'),
)*/
/*
async function render(){
  await delayP(2000);
  let response = await juhee.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response.data);

}
render()
*/