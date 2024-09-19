/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_ = function (nums) {
  let product = [];
  for (let i = 0; i < nums.length; i++) {
    let p = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j != i) {
        p *= nums[j];
      }
    }
    product.push(p);
  }
  return product;
};

var productExceptSelf = function (nums) {
  let prefix = new Array(nums.length);
  prefix[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  let suffix = new Array(nums.length);
  suffix[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }
  // console.log(prefix, suffix);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
