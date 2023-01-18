//fetch

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

export const juhee = async (options = {})=>{

  const {url, ...restOptions} = {...defaultOptions, ...options, headers: {
    ...defaultOptions.headers, ...options.headers} // 얕은 복사라서 한번 더 복사해준 거임
  }

  let response = await fetch(url, restOptions);
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
  }
  return response;
}

juhee.get = (url, options) => {
  juhee({
    url,
    ...options
  })
}
juhee.post = (url, body, options) => {
  juhee({
    url,
    method: 'POST',
    body: JSON.stringify(body),
    ...options
  })
}
juhee.put = (url, body, options) => {
  juhee({
    url,
    method: 'PUT',
    body: JSON.stringify(body),
    ...options
  })
}
juhee.delete = (url, options) => {
  juhee({
    url,
    method: 'DELETE',
    ...options
  })
}
