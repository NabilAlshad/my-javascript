let lan = "bd";
let LAN = "nd";
function myFunc() {
  if (!lan) {
    let lan = LAN;
  }
  return lan;
}
// myFunc();
console.log(myFunc()); //expectd output will be bd ;

//if we do this with var the result will be abnomal
var a = "hello";
var b = "world";
function myFuncTwo() {
  if (!a) {
    var a = b;
  }
  return a;
}
console.log(myFuncTwo()); //expectd output will be world because var is a function scope variable so it host to outside of the function and will set undefined then assign a =b which is world

myFuncThree(); //expectd output will be hello world
function myFuncThree() {
  console.log("hello world");
}

//but if we set the function in a variable it will be give us wrong answer
Four();

const Four = function myFuncFour() {
  console.log("hello world");
};
//this is will give us an error because four is not defined
