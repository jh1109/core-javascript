/* ---------------------------------------------------------------------- */
/* For Of Loop                                                            */
/* ---------------------------------------------------------------------- */

// 객체는 for of로 순환할 수 없음.
// String, Array, Array-like(배열은 아닌데 유사배열처럼 생긴 이상한 애들..) 와 같은 iterable 요소들은 for in으로의 순환을 권장하지 않음. 그래서 for of 문 사용.
let str = 'asbcd';
for(let value of str){
  console.log(value);
}


const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];
for(let value of languages){
  console.table(value);
}
for(let value of languages){
  console.table(value.name);
}
for(let value of languages){
  if(value.name === 'Java') continue;
  console.table(value.name);
}

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기(Java까지만 보이도록 중단하기)
for(let value of languages){
  if(value.name === 'C#') break;
  console.table(value.name);
}
for(let value of languages){
  let name = value.name;
  if(name.includes('C#')) break;
  console.table(value.name);
}




const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단



/* 검색해서 찾아보기
Object.keys : object의 key 값들을 배열로 반환함
Object.values : object의 value 값들을 배열로 반환함
Object.entries : key와 value 값을 함께 배열로 반환함
*/
console.log(Object.keys(randomUser));
console.log(Object.keys(randomUser.location));
console.log(Object.keys(location)); // 그냥 location하면 Object 내의 location 메서드의 key 값들이 나열됨.
console.log(Object.values(randomUser.location));
console.log(Object.entries(randomUser.location));