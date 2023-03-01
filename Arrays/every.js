/*
 Array.prototype.every(): 
 This function is used when you need to validate each element of a given array. It accepts a callback function as an argument which is called for each element of the array. The callback function has to return either true or false. If all elements of the array satisfy the validation function and thus the callback function returns true on all elements of the array, then it returns true. Otherwise, it returns false, as soon as it encounters the first element which does not satisfy the validator function. 

 arr.every(callback(element[, index[, array]])[, thisArg])

*/

let numbers = [30, 60, 190];
let result_true = numbers.every((ele) => ele < 200 ? true :false) 
let result = numbers.every((ele) => ele > 100 ? true : false)
console.log(result_true, result)