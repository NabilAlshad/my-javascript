const person = {

    name: "john",
    age: 23,
    printFullName: function () {
        console.log(`${this.name} age is ${this.age}`)
    }
}
const john = person;
john.printFullName();

//implicit binding is calling inner function and this refers to own property itself