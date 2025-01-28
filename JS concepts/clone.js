/**There are 2 types of array cloning: shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced. If you want a true copy of nested arrays, you’ll need a deep clone. For deep clones, go with the JSON way OR better yet use Lodash 👍 */

const numbers = [1, [2], [3, [4]], 5];

let numbersClone = JSON.parse(JSON.stringify(numbers))

console.log(numbersClone)

/** primitive types: number, string, boolean, null, undefined */
let value = 3;
let valueCopy = value;

valueCopy = 5;

// Change valueCopy
valueCopy = 100
console.log(valueCopy); // 100

// ✅ Original NOT affected 
console.log(value); // 3

/** reference types: array, object */
let array = [1,2,3];
let arrayCopy = array; // create copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]

// ❌Original got affected
console.log(array); // [ '👻', 2, 3 ]

/** solution to copy reference type*/
/**When I used spread ... to copy an array, I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work. */
let a = [1, 2, 4];
let aCopy = [...a];

console.log(aCopy)

// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]

// ✅ Original NOT affected 
console.log(array); // [ 1, 2, 3 ]

let b = [1, [3, 4], 2];
let bCopy = [...b];
console.log(bCopy);

// Make some changes
bCopy[0] = '👻'; // change shallow element
bCopy[1][0] = '💩'; // change nested element
console.log(bCopy); // [ '👻', [ '💩',4 ], 2 ]

// ❌ Nested array got affected
console.log(b); // [ 1, [ '💩',4 ], 2 ]

/**  the solution is to do a deep clone */
let bAgain = [1,[5,6,7],3,[5]]
let bAgainCopy = JSON.parse(JSON.stringify(b));
console.log(bAgainCopy);
bAgainCopy[0] = '👻';
bAgainCopy[1][0] = '💩';
console.log(bAgainCopy);

// ✅ Nested array NOT affected
console.log(bAgain)
