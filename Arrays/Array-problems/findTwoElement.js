/*
Given an unsorted array Arr of size N of positive integers. One number 'A' from set {1, 2,....,N} is missing and one number 'B' occurs twice in array. Find these two numbers.

Example 1:

Input:
N = 2
Arr[] = {2, 2}
Output: 2 1
Explanation: Repeating number is 2 and 
smallest positive missing number is 1.
*/

const findTwoElements = (arr,n) => {
    // let new_arr = Array.from({length: n}, (value,index) => index+1) 
    let ans = []
    // console.log(new_arr)
    arr.sort((a,b) => a-b)
    // console.log(arr)
    for(let i = 0 ; i < n; i++) {
        if(arr[i] == arr[i+1]) {
            ans.push(arr[i])
        }
        if(!arr.includes(i) && i != 0) {
            ans.push(i)
        }
    }
    return ans
}

console.log(findTwoElements([2,2], 2))
console.log(findTwoElements([3,3,1],3))
console.log(findTwoElements([13, 33, 43, 16, 25, 19, 23, 31, 29, 35, 10, 2, 32, 11, 47, 15, 34, 46, 30, 26, 41, 18, 5, 17, 37, 39, 6, 4, 20, 27, 9, 3, 8, 40, 24, 44, 14, 36, 7, 38, 12, 1, 42, 12, 28, 22, 45], 47))