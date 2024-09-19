/**
 * Object destructuting
 */

const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard:1
}

const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;

// const {classStrength, classBenches, classBlackBoard} = classDetails; //undefined for everything

const {strength, benches} = classDetails; 

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1

console.log(strength);
console.log(benches);

/**
 * array destructuring
 */
const arr = [1,2,3,4,"Hello"];
let [first, second, third] = arr;
console.log(first, second, third);

let [,,,fourth] = arr
console.log(fourth)