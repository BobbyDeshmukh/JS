const score = 400;

console.log(score);

const bal = new Number(100);
console.log(bal);

console.log(bal.toString());
console.log(bal.toFixed(2)); //Precision vlaue

const num = 23.89654;
console.log(num.toPrecision(3));

const hun = 124563987;

console.log(hun.toLocaleString("en-TN"));

// -------------MATHS---------

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(7.2));
// console.log(Math.sqrt(4));
// console.log(Math.min(4, 5));
// console.log(Math.max(4, 9));

console.log(Math.random());
console.log(Math.random() * 10);

const mi = 10;
const ma = 20;

const val = Math.floor(Math.random() * (ma - mi + 1)) + mi;
console.log(val);
