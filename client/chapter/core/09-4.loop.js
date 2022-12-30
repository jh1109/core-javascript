/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function(){
    return "안녕";
  }
};
let key = 'creator';
console.log(key in javaScript);
console.log(2022 in javaScript); //in은 key의 값들을 찾아주는 기능!
console.log('valueOf' in javaScript);
//valueOf는 없는데? 왜 true??
//object객체 자체에 있는 프러퍼티를 찾아서 true 반환한거임.(아래 방법)


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
{}.nickname = 'nora';

// 나는 javaScript에 해당하는 것만 확인하고 싶어!
// 객체 자신의 속성인지 확인하는 방법 -> hasOwnPropertype
console.log(javaScript.hasOwnProperty('valueOf'));
console.log(javaScript.hasOwnProperty(key));
// 만약 hasWonProperty라는 함수를 javaScript 내에 메서드로 만들어버린다면? 덮어쓰여짐.
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
console.log(Object.prototype.hasOwnProperty.call(javaScript,'hasOwnProperty'));


// for ~ in 문 : for ~ in 은 object내에 key 값을 찾는 반복문
for (let name in javaScript){
  if({}.hasOwnProperty.call(javaScript,name)){
    console.log(name);
  }
}
// 정확한 정보! 혹시나 내가 진짜 Object 본연의 값을 추가하면 그 프러퍼티도 console.error('뜨게된다',뜨게된다)
// 그래서 진짜 javaScript 내에 있는 key 값들만 반환하기 위해 또 찐 object의 hasOwnProperty 특성을 call 한거임.
// 찐 Object.prototype === {}
//call
let user = {
  name: 'tiger',
  age: 32,
}
function hello() {
  console.log(this);
}

hello()
hello('1',2,3)
hello(user)
hello.call(user)
// call은 hello 값안에 user을 던진다!는 의미
// 이런 논리로 생각해보면, {}.hasOwnProperty의 능력을 빌리기 위해 .call을 하면,
// javaScript.hasOwnProperty(value) 로서 값을 찾아보게 되는것이다!
// hello 함수 능력을 빌리지만 매개변수로 user을 넣는다는 개념이기 때문에, user 값이 나옴

// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에는 되도록 for~in 문 사용 지양 성능적으로 안좋음. 그래서 for~of를 사용함