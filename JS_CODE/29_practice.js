// let a = 10;

// function inc(num) {
//   num++;
//   return num;
// }

// inc(a);

// // a = inc(a);
// console.log(a);

function solve(str) {
  let obj = {};

  let n = str.length;

  for (let i = 0; i < n; i++) {
    if (obj[str[i]]) {
      let val = obj[str[i]];
      val = val + 1;
      obj[str[i]] = val;
    } else {
      obj[str[i]] = 1;
    }
  }

  return obj;
}

console.log(solve("bobby"));
