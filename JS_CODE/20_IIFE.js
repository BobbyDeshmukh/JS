// IIFE
// Immediately Invoked Fucntion Expression (IIFE)

(function chai() {
  console.log(`Hello`);
})();

// () ---> function defination (1st)
// () ---> function call       (2nd)

// global scope ke pollution se dikkat hoti hai kayi bar
// toh global scope ke variabel or anything
// pollution ko hatane ke liye IIFE ka use kiya

((name) => {
  console.log(`Hello ${name}`);
})("Bob");
