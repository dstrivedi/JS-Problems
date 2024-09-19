/**
 * But, there is one difference! Variables that are declared with the var keyword in the global scope are added to the window/global object. Therefore, they can be accessed using window.variableName.
Whereas, the variables declared with the let keyword are not added to the global object, therefore, trying to access such variables using window.variableName results in an error.
 */

(function(){
    var a = b = 3;
})();
console.log(a,b)
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

function varScoping() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 2
}

function letScoping() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 1
}

function varAndLetScoping() {
    var x = 1;

    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 1
}

function nestedScopeTest() {
    if (true) {
        var functionVariable = 1;
        let blockVariable = 2;

      console.log(functionVariable); // will print 1
      console.log(blockVariable); // will print 2

        if (true) {
            console.log(functionVariable); // will print 1
            console.log(blockVariable); // will print 2
        }
    }

    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will throw an error
}

/**
 * One final point to note is that when working outside of function bodies, at a global level, let does not create a property on the global object, whereas var does. Therefore:
 */
// Global variables
var x = 1;
let y = 2;
console.log(this.x); // will print 1
console.log(this.y); // will print undefined
