/**
 * @param {number[]} arr
 * @return {number}
 */
var maxSubArray = function (arr) {
  let sum = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if(sum < arr[i]) sum = arr[i]
    if (sum > max) max = sum;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
