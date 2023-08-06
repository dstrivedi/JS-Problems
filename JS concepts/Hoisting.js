//Hoisting with VAR
console.log(a);
a = 5;
var a;
console.log(a);

// b = 6;
// const b = 0;
// console.log(b); //Cannot access 'b' before initialization

// c = 1;
// let c;
// console.log(c); //Cannot access 'b' before initialization

const x = 12;
{
    //if i don't declare x again, below statement will print 122
    console.log(x); 
    //if i declare x again, it will give error "cannot access x before initialization"
    // const x =11; 
}

var codeHoist = () => {
    a = 10;
    let y =5;
}

console.log(a);
// console.log(y); //reference error

foo(); // "foo"

function foo() {
	console.log('foo');
}

foo(); // Uncaught TypeError: foo is not a function
// var foo = function () { }

bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
let bar = function () { }

baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
const baz = function () { }