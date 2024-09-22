const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = nums.map((num) => num + 10);

// let ans2 = nums.map((num) => {
//   return num + 10;
// });

// console.log(ans);

// console.log(ans2);

// chaining

const res = nums
  .map((num) => {
    return num * 10;
  })
  .map((val) => {
    return val + 1;
  })
  .filter((num) => {
    return num > 50;
  });

console.log(res);
