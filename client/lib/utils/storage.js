const {
  localStorage:storage,
  JSON:{stringify:serialize, parse: deserialize}
} = globalThis

storage.setItem('name','juhee');
console.log(storage.getItem('name'));
storage.removeItem('name');