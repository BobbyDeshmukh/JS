function cartprice(...num) {
  return num;
}

console.log(cartprice(200, 400, 500));

const user = {
  usr: "bob",
  price: 99,
};

function handle(obj) {
  console.log(`username is ${obj.usr} and price is ${obj.price}`);
}

// handle(user);
handle({
  usr: "abd",
  price: 18,
});

const arr = [1, 2, 3, 4, 5];

function val(narr) {
  return narr.length > 2 ? narr[1] : -1;
}

console.log(val(arr));
