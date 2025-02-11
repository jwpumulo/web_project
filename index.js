//index.js

let members = [
  {id: 'user01', pw: '1111', name: '홍길동'},
  {id: 'user02', pw: '2222', name: '홍길두'},
  {id: 'user03', pw: '3333', name: '홍길도'}
]

localStorage.setItem('members', JSON.stringify(members));











// localStorage.setItem('name', '홍길동');

// console.log(localStorage.getItem('name'));

// let json = '{ "name": "John", "age": 35 }';

// let obj = JSON.parse(json);
// console.log(json, obj);

// localStorage.setItem('friend', json);

// let info = localStorage.getItem('friend');

// console.log(info, JSON.parse(info)['age']);

// localStorage.setItem('friend2', obj);

// info = localStorage.getItem('friend2');

// console.log(obj, info);

// obj = {
//   name: 'Hong',
//   age: 30,
//   friends: [{
//     name: '김민수',
//     phone: '1111'
//   }, {
//     name: '박현수',
//     phone: '2222'
//   }]
// }

// json = JSON.stringify(obj);

// console.log(obj, json);

// localStorage.setItem('myFriend', json);