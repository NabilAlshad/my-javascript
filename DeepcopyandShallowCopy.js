// const person = {
//   name: "john",
//   lastName: "Doe",
// };

// let p1 = {
//   surname: "johnd",
//   ...person,
// };
// console.log(p1);

// let p2 = Object.assign({}, person);
// console.log(p2);
// let p3 = JSON.parse(JSON.stringify(person));
// console.log(p3);

//shallow copy

var person = {
  name: "john",
  address: {
    street: "Amphitheatre Parkway",
    city: "Mountain View",
    state: "CA",
    country: "USA",
  },
};

var copiedPerson = Object.assign({}, person);
var copiedPerson = person;
copiedPerson.name = "nabil";
copiedPerson.address.street = "Mountain View";
console.log("copiedObject", copiedPerson);
console.log("main object", person);

//Deep copy
const person2 = {
  name: "john",
  address: {
    street: "Amphitheatre Parkway",
    city: "Mountain View",
    state: "CA",
    country: "USA",
  },
};

// const deepCopy = JSON.parse(JSON.stringify(person2));
// deepCopy.name = "deep";
// // deepCopy.address.street = "kalitola";
// // console.log(deepCopy);
// console.log("deep copy object", deepCopy);

// console.log("main object", person2);
