const promise1 = new Promise(function (resolve, reject) {
  console.log("promise1 succeded");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise2 is resolved`);
  }, 2000);
});

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
//promise race is race between two promise . between them who resolved first they will win the race
