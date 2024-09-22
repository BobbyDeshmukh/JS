// singleton
// Object.create
// Literals se singleton nahi banta
// constructor se ban sakta hai

// Objects Literals

const mysym = Symbol("Key1");

const Users = {
  name: "Bobby",
  //   "surname": "Deshmukh", //usko . dot se access nahi kar sakte
  [mysym]: "Mykey1",
  age: "20",
  city: "Betul",
  isLogin: false,
  lastLogin: ["mon", "tue"],
};

// console.log(Users.name);
// console.log(Users["city"]);
// console.log(Users[mysym]);
// // console.log(Users["surname"]);

// Users.city = "MP";
// console.log(Users);

// Object.freeze(Users); //not able to change users

Users.greetone = function () {
  console.log("Hello");
};

Users.greettwo = function () {
  console.log(`Hello ${this.name}`);
};

console.log(Users.greetone());
console.log(Users.greettwo());

console.log(Users);
