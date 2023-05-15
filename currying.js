function sum(a) {
  return function (b) {
    if (typeof b === "undefined") {
      return a;
    } else {
      return sum(a + b);
    }
  };
}

console.log(sum(10)(20)());
