let a = new Number(10)
let b = 10

console.log(a == b)

/**
 * In JavaScript, the variables such as objects, arrays and functions comes under pass by reference. When you try to compare two objects with same content, it is going to compare memory address or reference of those variables. These variables always create separate memory blocks hence the comparison is always going to return false value.
 */
let user1 = { 
    name : 'Jacob',
    age : 28
};

let user2 = {    
    name : 'Jacob',
    age : 28
};
console.log(user1 === user2);