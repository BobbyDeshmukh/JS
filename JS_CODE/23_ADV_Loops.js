// for of loops-----> val dega

const arr = [1, 2, 3, 4, 5, 6];

// for (let val of arr) {
//   console.log(val);
// }

const str = "Bobby Deshmukh";

// for (const s of str) {
//   console.log(`${s}`);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United");
map.set("Fr", "France");

// console.log(map);

for (const [key, val] of map) {
  console.log(key, " :- ", val);
}

const players = {
  18: "virat",
  45: "Rohit",
  7: "Dhoni",
};
// --------------------NOT POSSIBLE-----
// for (const ply of players) {
//   console.log(ply);
// }

// For of not use for objects

// for in loop -----> key/index dega

for (const key in players) {
  console.log(key, " - ", players[key]);
}

const alpha = ["a", "b", "c", "d"];
for (let i in alpha) {
  console.log(alpha[i]);
}

// for in loop ---------> not use for map
