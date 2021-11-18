// const aPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("I am here!");
//     } else {
//       reject("No! It is an error!");
//     }
//   }, 5000);
// });
// const promiseHandle = async () => {
//   try {
//     const data = await aPromise;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// promiseHandle();

//hoisting
// var a = 6;
// function one() {
//   console.log(a);
//   function two() {
//     console.log(b);
//     var b = 6;
//     function three(d) {
//       console.log(c + d);
//       let c = 10;
//     }
//     three(34);
//   }
//   two();
// }

// one();

// function hello() {
//   var msg = "hello world";
//   console.log(msg);
// }

// hello();
// console.log(msg);

// var i = 1;
// if (function f() {}) {
//   i += typeof f;
// }

// console.log(i);
const str = "  htj jgh ";
const trimmed = str.trim("h");
console.log(str.trim("g"));
