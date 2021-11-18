//implicit binding
//explicit binding
//new binding
//window binding

// ...... implicit binding
var player = {
  name: "john",
  age: 23,
  printPlayer: function () {
    console.log(this.name);
  },
};
player.printPlayer();

//explicit binding

var printName = function (v1, v2) {
  console.log(`${this.name} ,${v1}, ${v2}`);
};
var A = {
  name: "a",
  age: 23,
};

var v1 = "hello";
var v2 = "world";

console.log(printName.call(A, v1, v2));

///new binding

function newFunc(name, age) {
  //when call new js create a this variable here by creating its object like this
  //let this=Object.create(null);
  this.name = name;
  this.age = age;
  //and return the this here
  //    return this
}

var newPerson = new newFunc(John, 2);

// window binding
var printName = function () {
  console.log(this); //this will show window object as it refers too this thats why it call window binding
  console.log(this.name);
};

var personThree = {
  name: "bella",
  age: 23,
};
printName(); //this will show undefined
