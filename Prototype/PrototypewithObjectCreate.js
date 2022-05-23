const personMethods = {

    eat() {
        console.log("the person is eating");
    },
    sleep() {
        console.log("the person is sleeping");
    }
}

function person(name, age) {
    let P = Object.create(personMethods)//object creation of person methods here personmethods is parent and P is child 
    P.name = name;
    P.age = age;
    // P.sleep();
    console.log(p.name);
    return P;
}

const john = person("john", 34);
john.sleep();

