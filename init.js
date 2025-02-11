// init.js

const productData = [{
  prodCode: 'p001',
  prodName: 'mango',
  price: 2000,
  likeIt: 4.8,
  image: 'image/mango.jpg',
  sale: 15
}, {
  prodCode: 'p002',
  prodName: 'orange',
  price: 3000,
  likeIt: 3.7,
  image: 'image/orange.jpg',
  sale: 20
}, {
  prodCode: 'p003',
  prodName: 'banana',
  price: 1500,
  likeIt: 5.0,
  image: 'image/banana.jpg',
  sale: 0
}, {
  prodCode: 'p004',
  prodName: 'pineapple',
  price: 6000,
  likeIt: 5.0,
  image: 'image/pineapple.jpg',
  sale: 10
}]

const memberData = [{
  id: 'user01',
  pw: '1111',
  name: 'John',
  responsibility: 'User'
}, {
  id: 'user02',
  pw: '2222',
  name: 'Dean',
  responsibility: 'User'
}, {
  id: 'user03',
  pw: '3333',
  name: 'Sarah',
  responsibility: 'Admin'
}]

const cartData = [{
    id: 'user01',
    prodCode: 'p003',
    qty: 3
  },
  {
    id: 'user01',
    prodCode: 'p002',
    qty: 1
  },
  {
    id: 'user02',
    prodCode: 'p001',
    qty: 5
  },
  {
    id: 'user03',
    prodCode: 'p003',
    qty: 10
  }
]