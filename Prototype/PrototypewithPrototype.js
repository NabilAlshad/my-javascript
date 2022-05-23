
function person(name, age) {
    let P = Object.create(person.prototype)//object creation of person methods here personmethods is parent and P is child 
    P.name = name;
    P.age = age;
    // P.sleep();
    // console.log(p.name
    return P;
}
person.prototype =
{
    eat() {
        console.log("person is eating");
    },
    sleep() {
        console.log("person is sleeping")
    },
}

const john = person("john", 34);
john.sleep();

