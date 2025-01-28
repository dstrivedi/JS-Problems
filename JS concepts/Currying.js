/**
 * 
 * Currying happens when a function does not receive all of its parameters at once. It instead takes the first parameter and returns a different function. The returned function should be invoked with the second parameter, which should return another function.This continues until all the arguments have been presented. The function at the end of the chain will then be the one that returns the desired value.
 * @returns 
 */

function add(a) {
    return function(b){
        return a + b;
    }
}

// const add = a => b => a + b

console.log(add(3)(4))

// with n args
const addAll = a => b => {
    if (b) {
        return addAll(a + b);
    }
    return a;
}

console.log('Add all:', addAll(3)(4)(5)())

function sum(...args) {
    let a = args.reduce((a, b) => a + b, 0);
    return function (...args) {
        let b = args.reduce((a, b) => a + b, 0);
        if (b) {
            return sum(a, b);
        } 
        return a;
    }
}

console.log("Sum of all args",sum(1,2,3)(1,3)())

function multiply(a,b){
    return a*b;
}

function currying(fn){
    return function(a){
        return function(b){
            return fn(a,b);
    }
    }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12

// merge words
const mergeWords = string => nextString => nextString === undefined ? string : mergeWords(`${string} ${nextString}`);

console.log(mergeWords("There")("is")("no")("spoon.")());

// list filter
const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

const filterByName = (list, name) => {
  return list.filter(item => item.name !== name);
}

console.log(filterByName(list, "John"));

// with currying
const filtering = name => list => list.filter(item => item.name !== name);

console.log(filtering("John")(list));

const filterByNamewithCurrying = (name, list) => filtering(name)(list);
console.log(filterByNamewithCurrying("John",list));