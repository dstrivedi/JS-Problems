const array_clone = (input) => {
  return input.slice(0)
}

let arr = [1, 2, 4, 0]
let arr3 = [...arr]
arr3[0] = 0;
let arr4 = arr
let arr5 = Array.from(arr)
let arr2 = array_clone([1, 2, 4, 0]);
// console.log(arr2)
arr.push(5)
console.log(arr, arr3)

