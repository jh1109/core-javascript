export const memo = (() => {
  const cache = {};

  return (key, callback) =>{
    if(!callback) return cache[key];
    
    if(cache[key]){
      console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`);
      return;
    }
    cache[key] = callback();
  
  };

  })()
// callback 함수로 value 값에 더 많은 것들을 넣고 싶어서
// memo('name',()=>{});
