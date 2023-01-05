/* ---------------------------------------------------------------------- */
/* Object Methods and This                                                */
/* ---------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     과제                                     */
/* -------------------------------------------------------------------------- */

//과제2
let calculator = {
  read() {
    this.a = +prompt('첫 번째 값:', 0);
    this.b = +prompt('두 번째 값:', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};


//과제3. Method 호출 chainning
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log( this.step );
    return this;
  }
};
console.log(ladder.up().up().down().showStep()); // 메서드 호출 체이닝
/* 
this는 모두 ladder을 참조함.
*/


// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  date: '2022. 7. 6',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
  ],
  totalPrice(){
    /*반복문으로 작성해보기
    let result = 0;
    for (i = 0; i < this.menu.length; i++){
      result += this.menu[i].price * this.menu[i].count;
    }
    return result;
    */
    // 화살표 함수에서 this를 그 자체 함수로 찾아주고 싶으면,
    // let self = shoporder(); 이렇게 하고 this 대신 self을 쓸 수도 있음
    
    // array.reduce 활용해서 작성해보기
    return this.menu.reduce((acc,cur) => acc + cur.price*cur.count,0);
  }
};

console.log(shopOrder.totalPrice());

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.


// 메서드 단축 구문


// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  /*
  getItem(index) {
    return this.items[index];
  },
  */

  //화살표함수와 this를 사용하고 싶다면,
  getItem : (index) => {
    let self = navigationMenu;
    return self.items[index];
  },
  //하지만 여기서 navigationMenu가 바뀐다면, self 값도 바꾸어줘야하고, 코드도 길어지므로 효율적인 방법은 아니다.
  addItem(newItem) {
    this.items.push(newItem);
    // push는 배열을 추가하는 메서드
    //arr.push(4) 하면 arry에 4가 추가됨
  },
};

console.log(navigationMenu.getItem(0));

navigationMenu.addItem({
  id: 'link-y',
  test: 'yanadoo',
  link: 'https://yanadoo.js',
})