const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    // resolve({
    //   name: "Tim",
    //   age: 35
    // });
    reject('Something went wrong');
  }, 2500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('Error: ', error);
});


console.log('after');

