function hello() {
  if (true) {
    var a = "Javascript";
    let b = "C++";
    const c = "PYTHON";
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
  }
  console.log("outside of if statement");
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("c: ", c);
}
hello();
