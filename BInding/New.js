function person(name, age) {

    //let this =Object.create(null)
    this.name = name;
    this.age = age;
    //return this
}

const john = new person("john", 23)