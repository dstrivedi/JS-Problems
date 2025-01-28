/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0, j = nums.length;
    let sum = nums.reduce((acc, pre) => acc + pre);
    if(sum < target) return 0;
    while (i < j) {
        if (sum === target) {
          return nums.slice(i);
        }
        sum -= nums[i];
        i++;
    }
    
    let rightSum = nums.reduce((acc, pre) => acc + pre);
    while (j>i) {
        console.log(rightSum);
       if (rightSum === target) {
         return nums.slice(j);
       }
       rightSum -= nums[j];
       j--;
     }
 };

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
