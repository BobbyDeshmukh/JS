const coding = ["js", "ruby", "cpp", "c", "python"];

// const res = coding.forEach((e) => {
//   console.log(e);
//   return e;
// });

// console.log(res);not return any value

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nnums = nums.filter((num) => num > 4);
console.log(nnums);

let Nnums = nums.filter((num) => {
  return num > 4;
});

console.log(Nnums);
