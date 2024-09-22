class User {
  constructor(user) {
    this.user = user;
  }

  logMe() {
    console.log(`User IS ${this.user}`);
  }
}

class Teacher extends User {
  constructor(user, email, pass) {
    super(user);
    this.email = email;
    this.pass = pass;
  }

  addCourse() {
    console.log(`New Course Added by ${this.user}`);
  }
}

const Tea = new Teacher("a", "b", "1245");
console.log(Tea);
Tea.addCourse();
Tea.logMe();

// fucntion ke aage static lagane se wo child class aur uss class ka
// object banake bhi usko access nahi kar sakte
