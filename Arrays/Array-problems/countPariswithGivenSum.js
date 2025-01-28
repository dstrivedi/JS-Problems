/*

Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
Example 1:
Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.
*/
const pairs = (arr,n,k) => {
    var m = new Map();
    var count = 0;
    // console.log(m)
    for (var i = 0; i < n; i++) {
        // console.log(k - arr[i])
        if (m.has(k - arr[i])) {
            count += m.get(k - arr[i]);
        }
        if (m.has(arr[i])) {
            m.set(arr[i], m.get(arr[i]) + 1);
        } else {
            m.set(arr[i], 1);
        }
    }
    return count;
}

// Brute force O(N^2)
const countPairsWithSum = (arr, n, k) => {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === k) {
        cnt += 1;
      }
    }
  }
  return cnt;
};

const countPairsWithSum2 = (arr, n, k) => {
    arr.sort((a, b) => a - b);
    left = 0;
    right = n - 1;
    count = 0;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == k) {
            count += 1;
            left += 1;
            right -= 1;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return count;
};

console.log(pairs([1, 5, 7, 1],4,6))
console.log(pairs([1, 1, 1, 1],4,2))
