/**
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
    
    Example 2:
    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/** Algo
    Initialize k as the remainder when dividing k by the length of the array (k = k % nums.length). 
    Reverse the entire array (reverseArr(nums, 0, nums.length - 1)).
    Reverse the first k elements of the array (reverseArr(nums, 0, k - 1)).
    Reverse the remaining elements of the array (reverseArr(nums, k, nums.length - 1)).
    Return the modified array.
    The three reverse operations effectively rotate the array to the right by k steps.

    The commented-out code inside the rotate function is an alternative approach using array manipulation methods like unshift and pop for rotation, but it's not used in the provided code.
 */

/**
 * 
    example

    Original array: [1, 2, 3, 4, 5, 6, 7]
    After reversing the entire array: [7, 6, 5, 4, 3, 2, 1]
    After reversing the first 3 elements: [5, 6, 7, 4, 3, 2, 1]
    After reversing the remaining elements: [5, 6, 7, 1, 2, 3, 4]
 */

var reverseArr = (nums, start, end) => {
  //   console.log(start, end);
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  //   for (let i = 0; i < k; i++) {
  //     nums.unshift(nums[nums.length - 1]);
  //     nums.pop();
  //   }
  k = k % nums.length;
    console.log(k);
  reverseArr(nums, 0, nums.length - 1);
  reverseArr(nums, 0, k - 1);
  reverseArr(nums, k, nums.length - 1);

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([-1], 2));
