const iplplayer = {};

console.log(iplplayer);

iplplayer.id = "18";
iplplayer.name = "Virat";
iplplayer.isretire = false;

console.log(iplplayer);

const player = {
  plyr: "Bowler",
  fullname: {
    first: "Jasprit",
    last: "Bumrah",
  },
};

// console.log(player);
// console.log(player.fullname.first);
// console.log(player?.fullname?.first);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "d", 4: "e" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);
//                       target ( src )
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// const objn = { ...obj1, ...obj2 };
// console.log(objn);

const plyaers = [
  {
    id: 7,
    name: "Dhoni",
  },
  {
    id: 18,
    name: "Virat",
  },
  {
    id: 45,
    name: "Rohit",
  },
];

// plyaers.map((e) => {
//   console.log(`Name: ${e.name} and Jersey Number: ${e.id}`);
// });

console.log(Object.keys(iplplayer)); //type array
console.log(Object.values(iplplayer)); //type array
console.log(Object.entries(iplplayer)); // type array inside array

// check method is present or not
console.log(iplplayer.hasOwnProperty("isretire"));
