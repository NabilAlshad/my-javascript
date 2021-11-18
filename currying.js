function one(a, b, c) {
  return a + b + c;
}

console.log(one(1, 23, 34));

// currying

function curry(a) {
  //partial function
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(3)(4));

//of arrow function
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(1)(2)(3));
