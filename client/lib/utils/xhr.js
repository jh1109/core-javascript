/* readyState
0: uninitalized // 초기화
1: loading //로딩
2: loaded //로딩이 완료된
3:interative //인터렉티브
4:complete //완료
 */

import { typeError } from "../error/typeError.js";


export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
} = {}){ // 객체 분해 할당을 바로 매개변수로 넣어줌

  const xhr = new XMLHttpRequest();
  // console.log(xhr.readyState, xhr.status);

  //비동기 통신 오픈
  xhr.open(method, url);
  // console.log(xhr.readyState, xhr.status);
  
  /*
  Object.entries(headers).forEach(([key,value]) => {
    // Object.entries는 객체의 전체 key, value 값들을 배열로 반환해줌.
    xhr.setRequestHeader(key,value);
    //header가 request할때 set해주는 XMLHttpRequest의 기능.
    // 매개변수 headers는 단순히 객체이지만,
    // setRequestHeader를 해줌으로써 Headers의 역할로서 set을 해준거임.
  });
  */

  // 객체 구조 분해 할당
  // readystate는 XHR의 prototype
  xhr.addEventListener('readystatechange',()=>{
    const {status, readyState, response} = xhr;
    // console.log(readyState, status);
    if (status >= 200 && status < 400) {
      if (readyState === 4){
        // console.log('통신 성공');
        onSuccess(JSON.parse(response));
        // console.log(typeof JSON.parse(response));
        // console.log(typeof response);
        // console.log(response);
      }
    } else{
      onFail('통신 실패');
    }
  })

  // 서버에 요청. open과 send는 짝꿍
  xhr.send(JSON.stringify(body));
}

// 순서 상관없이 아래와 같이 작성해도 동작했으면 좋겠다~

xhrData({
  onSuccess: (result)=>{
    // console.log(result);
  },
  url:'https://jsonplaceholder.typicode.com/users',
  onFail: (err)=>{
    console.log(err);
  }
  // method: 'GET', // 기본값으로 설정했기 때문에 삭제 가능
  // body: null,
})


xhrData.get = (url,onSuccess,onFail)=>{
  xhrData({
    url,
    onSuccess,
    onFail,
  })
}
xhrData.post = (url,body,onSuccess,onFail)=>{
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail,
  })
}
xhrData.put = (url,body,onSuccess,onFail)=>{
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail,
  })
}
xhrData.delete = (url,onSuccess,onFail)=>{
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  })
}

/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (result)=>{
    console.log(result);
    console.log('hit');
  },
  (err)=>{
    console.log(err);
  },
)

xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
*/


/* -------------------------------------------------------------------------- */
/*                              위에는 callback 방식,                              */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               아래는 promise 방식                               */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null,
}

export function xhrPromise(options = {}){
  
  const xhr = new XMLHttpRequest();

  const {method, url, headers, body} = Object.assign({},defaultOptions,options);

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');
  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject)=>{
    xhr.addEventListener('readystatechange',()=>{
      const {status,readyState,response} = xhr;
      if(status >= 200 && status < 400){
        if(readyState === 4){
          resolve(JSON.parse(response));
        } 
      } else{
        reject('Error');
      }
    })
  })
}
/*
xhrPromise({
  url: 'https://jsonplaceholder.typicode.com/users'
})
.then(res=>console.log(res))
.catch(err=>console.log(err))
*/
xhrPromise.get = url => {
  return xhrPromise({
    url
  })
}
xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  })
}
xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  })
}
xhrPromise.delete = url => {
  return xhrPromise({
    url,
    method: 'DELETE'
  })
}