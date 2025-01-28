const myName = "Drashti Trivedi";
console.log([...myName])

const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
// 16;

const myNames = ["Oluwatobi", "Sofela"];
const bio = { ...myNames, runs: "codesweetly.com" };

console.log(bio);

// The invocation above will return:
// { 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" }

/** The spread operator does not clone identical properties */
const myNameObj = { firstName: "Tobi", lastName: "Sofela" };
const bioObj = { ...myNameObj, firstName: "Oluwatobi", website: "codesweetly.com" };

console.log(bioObj);

// The invocation above will return:
// { firstName: "Oluwatobi", lastName: "Sofela", website: "codesweetly.com" };