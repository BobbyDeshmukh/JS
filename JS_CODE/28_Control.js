// if

let a = 2;
if (a === 2) {
  console.log("hii");
} else {
  console.log("hi");
}

// switch

const month = 3;

switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  default:
    break;
}

// falsy values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", true, 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

// cond ? true : false

const ans = 2 == 2 ? true : false;
console.log(ans);
