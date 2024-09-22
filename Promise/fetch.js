fetch("url")
  .then((res) => {
    console.lof(res);
  })
  .catch((error) => {
    console.log(error);
  });

//   fetch

// 1. ----> onfulfilled [] ----> response return to the global memory
// 2. ----> onrejection [] ----> response return to the global memory
