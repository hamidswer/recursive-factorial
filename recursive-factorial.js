function recursive_factorial(n) {
  let factorial = 0;
  if (n == 1) {
    factorial = 1;
  } else {
    factorial = n * recursive_factorial(n - 1);
  }
  return factorial;
}

console.log(recursive_factorial(4));
// 24
