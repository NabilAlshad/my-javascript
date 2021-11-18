class father {
    constructor() {
        this.Fathername = 'arnold';
    }
}

class child extends father {
    constructor(name, age) {

        super();
        this.name = name;
        this.age = age;
    }
    getFullName() {
        return `${this.name} father name is  ${this.Fathername} and the age is ${this.age}`
    }
}
const child1 = new child('nabil', 12);
console.log(child1.getFullName());