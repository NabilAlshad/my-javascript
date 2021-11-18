// // (function () {
// //   var num1 = 2;
// //   var sum = function () {
// //     var num2 = 4;
// //     return num1 + num2;
// //   };
// //   console.dir(sum);
// // })();
// // //iife self invoked function
// function sum() {
//   var a = 5;
//   function add() {
//     var b = 5;
//     console.log(a + b);
//   }
//   return add;
// }
// var close = sum();
// console.dir(close);

// // function makeFunc() {
// //   var name = "Mozilla";
// //   function displayName() {
// //     alert(name);
// //   }
// //   return displayName;
// // }

// // var myFunc = makeFunc();
// // myFunc();
// // console.dir(myFunc);

// function closuresDemo() {
//   var x = 10;
//   return function () {
//     var y = 20;
//     console.log("Sum: " + (x + y));
//   };
// }
// var clos = closuresDemo();
// console.dir(clos);
function closuresDemo() {
  var x = 10;
  return function () {
    var y = 20;
    console.log("Sum: " + (x + y));
  };
}
var close = closuresDemo();
// console.log(close());
console.dir(close);


const red;
red=5;
console.log(red);