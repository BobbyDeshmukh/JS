// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const str = "Bob";
const num = 123;
const flag = true;
const val = null;
const value = undefined;
const ch = Symbol("bnm");
const bignum = 145236987456321456987n;

console.log(bignum);

// Reference (Non Premitive)
// all haivng datatype is object

// Array, Objects, Functions

let heros = ["Army", "Navy", "AirForce"];
let obj = {
  name: "Bobby",
  age: 22,
};

const greet = function () {
  console.log("Hii");
};

greet();

for (let i = 0; i < 3; i++) {
  console.log(heros[i]);
}
