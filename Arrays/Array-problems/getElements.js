// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

const getFirstElements = (input, n) => {
  if(n == 0 || n < 0 || n == null) return []
  return input.slice(0,n)
}

const getLastElements = (input, n) => {
  if(n == 0 || n < 0 || n == null) return []
  return input.slice(Math.max(input.length - n, 0))
}

console.log(getFirstElements([7, 9, 0, -2]));
console.log(getFirstElements([],3));
console.log(getFirstElements([7, 9, 0, -2],3));
console.log(getFirstElements([7, 9, 0, -2],6));
console.log(getFirstElements([7, 9, 0, -2],-3));

console.log(getLastElements([7, 9, 0, -2]));
console.log(getLastElements([7, 9, 0, -2],3));
console.log(getLastElements([7, 9, 0, -2],6));