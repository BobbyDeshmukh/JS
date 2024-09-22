const promiseOne = new Promise(function (resolve, reject) {
  // Do async call
  // db calls, crypotaphy, network

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is 2");
    resolve({ user: "Bob", id: "1269" });
  }, 1000);
}).then((user) => {
  console.log(user);
});

const pf = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ user: "bob", pass: "123" });
    } else {
      reject("Error: Ho Gaya");
    }
  }, 1000);
});

pf.then((user) => {
  console.log(user);
}).catch((error) => {
  console.log(error);
});

async function consumePromise() {
  try {
    const res = await pf;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();

async function getAllusers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllusers();
