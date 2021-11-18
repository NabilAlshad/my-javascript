const normalPerson = {
  firstName: "rahim",
  lastName: "uddin",
  salary: 15000,
  fullname: function () {
    return this.firstName + this.lastName;
  },

  chargeBill: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};
const bossPerson = {
  firstName: "boss",
  lastName: "uddin",
  salary: 20000,
};

normalPerson.chargeBill.call(bossPerson, 1000);
console.log(bossPerson.salary);
normalPerson.chargeBill.apply(bossPerson, [1000]);
console.log(bossPerson.salary);
const del = delete bossPerson.firstName;
console.log(bossPerson);
bossPerson.firstName = "rahimuddin";
console.log(bossPerson);

function add(num1, num2) {
  result = num1 + num2;
  return result;
}
var sum = add(5, 6);
console.log(result);
console.log(sum);
