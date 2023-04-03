/*
Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.
Note: There are no duplicates in the list.
Examples: 
Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
Output: 5
Explanation: The missing number between 1 to 8 is 5
*/
function MissingNumber(array, n) {
    //code here
    array.sort((a, b) => a - b)
    for (let i = 1; i <= n; i++) {
        if (i !== array[i - 1]) {
            return i
        }
    }
    //using sum of an array and them minus the diff
    // var sum = n * (n + 1) / 2;
    // array.map((a, i) => {
    //     sum -= a;
    // })
    // return sum;
}

console.log(MissingNumber([1, 2, 3, 5], 5))
console.log(MissingNumber([6, 1, 3, 5, 2, 4, 7, 10, 8], 10))