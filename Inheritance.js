function person(name, age) {
  //parent class
  this.name = name;
  this.age = age;
}
person.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },
};

function personTwo(type, country, name, age) {
  //sub class
  person.call(this); //call will inherit person property in personTwo
  this.name = name; //
  this.age = age;
  this.type = type;
  this.country = country;
}
personTwo.prototype = Object.create(person.prototype); //will inherit person.prototype property ;
personTwo.prototype.constructor = personTwo;

personTwo();
const A = new person("Bangladeshi", "Bangladesh", "john", 23);

const Aname = A.name;
console.log(Aname);
