function recursion(n) {
  if (n === 0) {
    return 0;
  }
  return recursion(n - 1) + n;
}

console.log(recursion(5));
