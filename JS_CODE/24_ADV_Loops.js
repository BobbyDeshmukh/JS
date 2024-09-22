const coding = ["js", "ruby", "cpp", "c", "python"];

coding.forEach((e) => {
  console.log(e);
});

coding.forEach(function data(e) {
  console.log(e);
});

coding.forEach((e, index) => {
  console.log(e, index);
});

const brr = [
  {
    name: "cpp",
    size: "45",
  },
  {
    name: "c",
    size: "48",
  },
  {
    name: "js",
    size: "100",
  },
];

brr.forEach((e) => {
  console.log(`${e.name} and ${e.size}`);
});
