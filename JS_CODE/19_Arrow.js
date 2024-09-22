const user = {
  useername: "bob",
  age: 20,

  welcomeMsg: function () {
    console.log(`${this.useername} welcome`);
    console.log(this);
  },
};

// this ----> pointing to the current object

// user.welcomeMsg();
// user.useername = "Sam";
// user.welcomeMsg();

// console.log(this);

// console.log(this) -----> o/p is {}
// console.log(this) in browser ------> mostly it show window object

// const chai = () => {
//   let name = "abd";
//   console.log(name);
//   console.log(this);
// };
// chai();

const mul = (a, b) => {
  return a * b;
};

console.log(mul(2, 3));

const m = (a, b) => a * b;

const m1 = (a, b) => a * b;

// {} is bracket mai return likhna padega
// () is bracket mai return nahi likhna padega
