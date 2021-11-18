const PersonMethods = {
  //parent
  eat() {
    console.log("person is eating");
  },
  play() {
    console.log("person is playing");
  },
};
//inherit from personmethods
function Person(name, age) {
  const person = {};
  person.name = name;
  person.age = age;
  person.eat = PersonMethods.eat;
  person.play = PersonMethods.play;

  return person;
}

//object crate of Object.crate() method
function Person(name, age) {
  //child
  let person = Object.create(PersonMethods);
  person.name = name;
  person.age = age;
  //as child gets his parent so it will access their property
  return person;
}

const A = new Person("john", 23); //instance creation
const B = new Person("Doe", 34);
console.log(A.eat()); //output will be eating
//we can create object by Object.create() methods

//now we will create object with using prototype.. from function Person

function Person(name, age) {
  //child
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  //as child gets his parent so it will access their property
  return person;
}
Person.prototype = {
  //parent
  eat() {
    console.log("person is eating");
  },
  play() {
    console.log("person is playing");
  },
};

Person.eat(); //output will be person is playing

//let talk about this and new. if we create object with new keyword there will be no need to create object with Object.create(something.prototype) new keyword will create a variable this and this will create a object

const Personwithnew = (name, age) => {
  //let this =Object.create(Personwitnnew.Prototype);
  this.name = name; //
  this.age = age; //

  //and there will no need to return because behind the scenario this will return something like this
  //return this ;
};
Personwithnew.prototype = {
  eat() {
    console.log(`person is eating`);
  },
};

const John = new Personwithnew("john", 34);
john.eat(); //output will be eating

//now we will convert Personwithnew in class

class Personwithnew {
  constructor(name, age) {
    this.name = name;
    this.age = age; //
  }

  eat() {
    console.log("person is eating");
  }
  play() {
    console.log("person is playing");
  }
  sleep() {
    console.log("person is sleeping");
  }
}

const Mia = new Personwithnew("Mia", 34);

Mia.sleep(); // output will be sleeping;
