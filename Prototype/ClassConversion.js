class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log("this person is sleeping");
    }
    play() {
        console.log("this person is playing");
    }
}

const john = new Person("nabil", 23);
john.eat();
