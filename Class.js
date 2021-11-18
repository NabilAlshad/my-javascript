//from Inehritance.js

class person {
  //parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  play() {
    console.log(`${this.name} is playing`);
  }
  get setName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }
  static isEqualAge(p1, p2) {
    return p1.age === p2.age;
  }
}

class personTwo extends person {
  constructor(name, age, type, country) {
    super(name, age); //by calling super we inherit the constructor of parent class
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }
  play() {
    super.play();
    console.log(`${this.name} is playing cricket`);
  }
}
let A = new person("john", 23);
let B = new person("doe", 12);
console.log(person.isEqualAge(A, B));
let c = new personTwo("nabil", 23, "Bangladeshi", "Bangladesh");
c.play();

// A.eat();
// A.setName = "nabil";
// console.log(A.setName);
// let B = new person("john", 23);
// console.log(person.isEqualAge(A, B));

// console.log(B.setName);

//polymorphism if a child class modifies its parent class element
