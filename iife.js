const add = (function counter() {
  var count = 0;
  return function () {
    count = count + 1;
    console.log(`the count is ${count}`);
  };
})();
const add0 = add();
const add1 = add();
console.log(add1);
console.log(add1);
console.log(add1);
console.log(add0);
console.log(add0);
console.log(add0);
