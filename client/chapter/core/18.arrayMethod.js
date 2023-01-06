/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000];
function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}
console.log(Array.isArray(null));
// Object.prototype.toString.call('null')
//toString은 문자열을 반환하는 애임. 

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}
arr.forEach(function(item,index){
  // console.log(item, index);
  this[index] = item
}, user)

arr.forEach(function(item,index){
  // console.log(item, index);
})



/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
/*
arr.reverse()
console.log(arr);
*/
// splice(시작index,제거 끝 index, 추가할 내용)
arr.splice(1,0,23,5)
// console.log(arr);
// sort
arr.sort((a,b)=>a - b)
// arr.sort((a,b)=>b-a)
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥 먹기', '버스타기', '복습하기'];
let template = todo.map((todoList)=>{
  return /* html */ `<li>${todoList}</li>`
});

console.log(template);

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});


arr.map((item)=>{
  console.log(item);
})
//각 배열에 2를 곱한 값을 새 배열로 만들어주세요.
let newArray = arr.map((item)=>{
  return (item*2);
})
console.log(newArray);
console.log(arr);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
arr.indexOf(5) //있다면 위치 index를 반환, 없으면 -1
// lastIndexOf
// includes
arr.includes(5) //값이 있는지 없는지를 boolean 값으로 반환

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
] 

// find
console.log(users.find(item =>item.id === 3));
console.log(users.find(item =>item.id < 3)); //로운만 나옴
//find는 대상 하나만 찾음. 처음 비교하고 true면 그값만 반환하고 종료함
// findIndex
console.log(users.findIndex(item => item.id === 3));
//마찬가지로 찾은 하나값의 index만 반환

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number)=>{
  return number < 100
});
console.log(result);


/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce
let totalAge = friends.reduce((acc,cur)=>acc+cur.age,0);
console.log(totalAge);

/*
reduce에 초기값을 설정하지 않으면 다른 값이 나옴.
초기값을 설정하지 않으면 첫 인자가 나옴.
근데 첫 인자가 객체라 [object Object]라는 문자열이 나옴.
문자열과 숫자를 계속 더하니까 접합으로 계산됨.
*/

let template2 = todo.reduce((acc,cur)=>{
  return /* html */acc + `<li>${cur}의 값</li>`
},'')

template2 = todo.reduce((acc,cur,index)=>{
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`
},'')
console.log(todo);
console.log(template2);
// reduceRight


// name 값들만 배열로 만들어보기
console.log(friends[0]['name']);



/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';


// split
let split = str.split(' ');
console.log(split);
console.log('test'.split(''));

// join (배열 -> 문자로 변환)
let join = split.join(', ');
console.log(join);