function person(name, age) {
    //when using new keyword by making instance of ones following code is automatically generated through
    //let this=Object.create(person.prototype)
    this.name = name;
    this.age = age;

    //return this

}

person.prototype = {
    eat() {
        console.log(`${this.name}the person is eating`);
    },
    sleep() {
        console.log("the person is sleeping");
    }
}


const john = new person("John", 23)
john.eat();