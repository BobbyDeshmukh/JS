// console.log(Date);
// console.log(Date.now());

let d = new Date();
// console.log(d);
// console.log(typeof d); //objects

// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());

let nd = new Date(2024, 0, 24);
console.log(nd.toDateString());

let nnd = new Date(2024, 0, 24, 5, 3);
console.log(nnd.toLocaleString());

console.log(Math.floor(Date.now() / 1000));

let date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDay());
console.log(date.getDate());
