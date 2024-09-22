// array

const arr = [0, 1, 2, 3, 4, 5];
const heros = ["army", "navy", "airforce"];

const brr = new Array(1, 2, 3, 4, 5, 6, 5, 7, 8);

console.log(arr[0]);

// METHODS

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0); //add element at the start
console.log(arr);

arr.shift(); //remove first element
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newarr = arr.join(); //convert arr to string
console.log(newarr);

// slice and splice

const myn1 = arr.slice(1, 3); // from 1 to 3-1;
console.log(myn1);

console.log(arr);

const myn2 = arr.splice(1, 3); // from 1 to 3 elements arre remove from array
console.log(myn2);

console.log(arr);
