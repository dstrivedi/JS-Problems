/*
Given an array and a number K where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

Examples:  

Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
Output: 10 
*/
const kth_smallest_num = (arr,k) => {
    arr.sort((a,b) => a-b)
    return arr[k-1]
}

console.log(kth_smallest_num([7, 10, 4, 3, 20, 15],3))