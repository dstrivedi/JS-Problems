
// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

/*
minimize heights

[1, 5, 8, 10], k = 2

+2, -2, -2, -2
3, 3, 6, 8 = 8 - 3 = 5

largest_ele = arr[n - 1] = 10
smallest_ele = arr[0] = 1
ans = 10 - 1 = 9
min = 0
max = 0
smallest = arr[0] + k = 3
largest = arr[n-1] - k = 8


0 to n-1
i = 0, 
min = min(smallest, arr[i+1] - k) = min(3, 2) = 2 
max = max(largest, arr[i] + k) = max(8, 3) = 8
ans = min(ans, max - min) = min(9, 6) = 6

i = 1
min = min(3, 8 - 2) = 3
max = max(8, 8) = 8
ans = min(6, 8 - 3) = 5

i = 2
min = min(3, 8) = 3
max = max(8, 1) = 8
ans = min(5, 5) = 5

ans = 5

*/
// Function to get the minimum difference between the heights.
function getMinDiff(arr, k) {
    // your code here
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let smallest_element = arr[0] + k;
    let largest_element = arr[n - 1] - k;
    let min = 0;
    let max = 0;
    let ans = arr[n - 1] - arr[0];
    for (let i = 0; i < n - 1; i++) {
        min = Math.min(smallest_element, arr[i + 1] - k);
        max = Math.max(largest_element, arr[i] + k);
        if (min < 0) continue;
        ans = Math.min(ans, max - min)
    }
    return ans;
}


console.log(getMinDiff([1, 5, 8, 10],2));
console.log(getMinDiff([3, 9, 12, 16, 20], 3));
console.log(getMinDiff([1, 8, 10, 6, 4, 6, 9, 1], 7))
console.log(getMinDiff([21, 293, 292], 37));
