const fibonacci = (n) => {
  if (n === 1 || n === 0) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n - 2);
  }
};
for (let i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}
console.log(fibonacci(1));
console.log(fibonacci(2));
