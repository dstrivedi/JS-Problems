/**First Repeating Element
Difficulty: EasyAccuracy: 32.57%Submissions: 271K+Points: 2
Given an array arr[], find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.

Note:- The position you return should be according to 1-based indexing. 

Examples:

Input: arr[] = [1, 5, 3, 4, 3, 5, 6]
Output: 2
Explanation: 5 appears twice and its first appearance is at index 2 which is less than 3 whose first the occurring index is 3.
Input: arr[] = [1, 2, 3, 4]
Output: -1
Explanation: All elements appear only once so answer is -1. */

function firstRepeated(arr) {
    let map = new Map();
    let minIndex = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) {
        minIndex = Math.min(minIndex, map.get(arr[i]));
      } else {
        map.set(arr[i], i + 1);
        }
        // console.log(map)
    }
    return minIndex === Infinity ? -1 : minIndex;
    // for (let i = 0; i < arr.length; i++) {
    //     if (i !== arr.lastIndexOf(arr[i])) {
    //         return arr.indexOf(arr[i]) + 1
    //     }
    // }
    // return -1;
}

console.log(firstRepeated([1, 5, 3, 4, 3, 5]));
console.log(firstRepeated([1, 2, 3, 4]));