// Reduce

const arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, currval) => {
  console.log(`${acc} and ${currval}`);
  return acc + currval;
}, 0);

let s = arr.reduce((acc, currval) => acc + currval, 0);

console.log(sum);

const cart = [
  {
    item: "Bottel",
    price: "500",
  },
  {
    item: "Phone",
    price: "60000",
  },
  {
    item: "Iphone",
    price: "150000",
  },
];

const res = cart.reduce((acc, item) => {
  return acc + Number(item.price);
}, 0);

console.log(res);
