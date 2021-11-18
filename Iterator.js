function* generator() {
  yield 1;
  yield 2;
  return "i am finished";
  yield 3;
  yield 4;
}

const iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
