//fetch

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

export const juhee = async (options = {})=>{

  const {url, ...restOptions} = {...defaultOptions, ...options, headers: {
    ...defaultOptions.headers, ...options.headers}
    // 얕은 복사라서 headers는 깊은 복사로 한번 더 spread 연산자 사용.
  }

  let response = await fetch(url, restOptions);
  // console.log(response);
    /*
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
    }
    */
  
  if (response.ok){
    response.data = await response.json();
    // response.json()을 받아올때는 await으로 받아온다.. 정해진 문법?
    // JSON.parse(response)와 같은 기능!
  }
  return response;
}

juhee.get = (url, options) => {
  return juhee({
    url,
    ...options
  })
}
juhee.post = (url, body, options) => {
  return juhee({
    url,
    method: 'POST',
    body: JSON.stringify(body),
    ...options
  })
}
juhee.put = (url, body, options) => {
  return juhee({
    url,
    method: 'PUT',
    body: JSON.stringify(body),
    ...options
  })
}
juhee.delete = (url, options) => {
  return juhee({
    url,
    method: 'DELETE',
    ...options
  })
}
