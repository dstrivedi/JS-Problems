/**
 * function context
 */

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
 * callbacks
 */

function logThis() {
    'use strict'
    console.log(this)
}

[1,2,3].forEach(logThis);