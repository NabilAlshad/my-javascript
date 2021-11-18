//higher order function is a function which takes a function as a parameter inside a function

const languages = ["javascript", "php", "python", "c"];

function myFunc(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const myArray = myFunc(languages, function (language) {
  return language.length;
});
// myArray();
console.log(myArray);
