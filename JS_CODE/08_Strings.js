const name = "Bobby";
const repocnt = 50;

console.log(`Hello name is ${name} and repo cnt is ${repocnt}`);

const str = new String("qwerty");

console.log(str[0]);

console.log(str.__proto__);

console.log(str);

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.charAt(2));

console.log(str.indexOf("t"));

const nstr = str.substring(0, 4);
console.log(nstr);

const sstr = str.slice(0, 4);
console.log(sstr);

const s = "   Bob   ";
console.log(s);
console.log(s.trim());

let url = "abcdefghi";

console.log(url.replace("bc", "z"));

console.log(url.includes("b"));

url = "bobb-deshm-kiudj";

console.log(url.split("-")); //convert in array
