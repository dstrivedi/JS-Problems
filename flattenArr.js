/**
 * Problem 1: Flatten an Array
Write a function flattenArray that takes a nested array (e.g., [1, [2, [3, [4]]]]) and returns a flat array ([1, 2, 3, 4]). Do this recursively.
 */

function flattenArray(arr) {
    let result = []
    for (let element of arr) {
        if (Array.isArray(element)) {
           result = result.concat(flattenArray(element))
        } else {
            result.push(element)
       }
    }
    return result
}

console.log(flattenArray([1,[2, [3, [4]]]]))