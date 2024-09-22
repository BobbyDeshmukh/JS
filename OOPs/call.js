function setUser(username) {
  this.username = username;
  console.log("user");
}

function createUser(username, email, pass) {
  setUser.call(this, username);
  this.email = email;
  this.password = pass;
}

const chai = new createUser("chai", "chai@", "1456");
console.log(chai);
