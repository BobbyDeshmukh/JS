// Stack (Primitive)

// Heap (Non Primitive)

// primitive are copy by value
// non primitive are copy by refernce

let str = "Bobg";

let anothername = str;

anothername = "Deshmukh";

console.log(str);
console.log(anothername);

let user = {
  age: 18,
  upi: "paytm",
};

let userO = user;
userO.age = 20;

console.log(user);
