class User {
  constructor(user, email, pass) {
    this.user = user;
    this.email = email;
    this.pass = pass;
  }

  encryptPass() {
    return `${this.pass}chai`;
  }

  changeUser() {
    return `${this.user.toUpperCase()}`;
  }
}

const u = new User("bob", "bob@", "123");

console.log(u.encryptPass());
console.log(u.changeUser());

// If fucntion is there

function User(user, email, pass) {
  this.user = user;
  this.email = email;
  this.pass = pass;
}

User.prototype.encryptPass = function () {
  return `${this.pass}`;
};
