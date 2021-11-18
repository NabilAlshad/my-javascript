function my(name, age) {
  this.name = name;
  //   console.log(age);
  return { age };
}

const myAge = new my("john", 23);
console.log(myAge.name);

function work() {
  let x = (y = 0);
  x++;
  y++;

  return x;
}

console.log(work(), typeof x, typeof y);
