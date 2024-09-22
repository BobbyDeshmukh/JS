console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); //true

// ALL False
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);

// == ---> check only values

// ------------ STRICT CHECK ------------
// === ---> check value and datatypes of the variables

console.log("2" === 2);
