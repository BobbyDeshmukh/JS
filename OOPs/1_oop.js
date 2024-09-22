const user = {
  usr: "bob",
  logincnt: 8,
  signin: true,

  getDetails: function () {
    console.log(this.usr);
    console.log(this.logincnt);
    console.log(this.signin);
    console.log(this);
  },
};

// console.log(user.usr);
console.log(user.getDetails());

// const pr = new Promise();
// const date = new Date();

function f(user, id, city) {
  this.user = user;
  this.id = id;
  this.city = city;

  return this;
}

const res = new f("bob", 12, "Betul");
console.log(res);
