/**
 * function context
 */
console.log("using normal function -----------")
function getThis() {
    'use strict'
    return this;
}

const obj = {name: "obj"}
const obj1 = {name: "obj1"}

obj.getThis = getThis;
obj1.getThis = getThis;

console.log(obj.getThis())
console.log(obj1.getThis())
console.log(getThis())

/**
 * with arrow function
 */
console.log("using arrow function -----------")
const getThis1 = () => {
    'use strict'
    return this;
}

const obj11 = {name: "obj11"}
const obj12 = {name: "obj12"}

obj11.getThis1 = getThis1;
obj12.getThis1 = getThis1;

console.log(obj11.getThis1())
console.log(obj12.getThis1())
console.log(getThis1())

/**
 * callbacks
 */

function logThis() {
    'use strict'
    console.log(this)
}

[1,2,3].forEach(logThis);

/**
 * 
 */
var obj111 = {
    valueOfThis: function(){
        return this;
    }
}
var obj22 = {
    valueOfThis: ()=>{
        return this;
    }
}

console.log(obj111.valueOfThis()); // Will return the object obj1
console.log(obj22.valueOfThis()); // Will return window/global object
/* 
    The biggest difference between the traditional function expression and the arrow function is the handling of this keyword. By general definition, this keyword always refers to the object that is calling the function. As you can see in the code above, obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.

    In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object.
*/