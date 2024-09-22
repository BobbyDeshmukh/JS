const heros = ["thor", "ironman", "spiderman"];
const dcheros = ["superman", "flash", "batman"];

// heros.push(dcheros);

// console.log(heros); //take dcheros array as array

// console.log(heros[3][2]);

// const nh = heros.concat(dcheros);
// console.log(nh);

// const allH = [...heros, ...dcheros]; //spread opearator
// console.log(allH);

// const anrr = [1, 2, 3, 4, [7, 8, 9], 7, [6, 7, [5, 4]]];

// const narr = anrr.flat(Infinity); //sare elements ek array mai
// console.log(narr);

console.log(Array.isArray("Bobby")); //check array or not
console.log(Array.from("Bobby")); //used to form array

//interesting not form array we need to defined on which basis we need to make array key or value
console.log(Array.from({ name: "Bobby" }));

let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc1, sc2, sc3));
