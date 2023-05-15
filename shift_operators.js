// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function logical_OR_shift_operator(){
    let a=10;
    let b=20;
    console.log(a || b);
    console.log(0 || a || b);
    console.log(0 || b || a);
    console.log(false || 0);
}
logical_OR_shift_operator();
function logical_AND_shift_operator(){
    let a=10;
    let b=20;
    console.log(a && b);
    console.log(0 && a );
    console.log(0 && false && a);
    console.log(false && 0);
}

logical_AND_shift_operator();