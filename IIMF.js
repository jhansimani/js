console.log("Welcome to Programiz!");

(function(){
    //console.log(a++); // undefined + 1 leads to NAN
    var a =10;
    if(true){
        //console.log(a); can't access beefore intialization
        let a =20;
        const b =30;
        console.log(a);// block scope
    }
    console.log(a); // a has function scope
   // console.log(b);// b has block scope not accessible outside of block
})();

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);

var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
var emp2 = Object.assign(Employee);
delete emp2.company
console.log(emp2.company);
console.log(Employee.company)


