/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let maxLeft = [];
  let maxRight = [];
  let min = [];
  let max = height[0];
  let sum = 0;
  for (let i = -1; i < height.length - 1; i++) {
    if (height[i] > max) {
      max = height[i];
    }
    maxLeft.push(max);
  }
  max = 0;
  for (let i = height.length; i > 0; i--) {
    if (height[i] > max) {
      max = height[i];
    }
    maxRight.push(max);
  }
  maxRight.reverse();
  for (let i = 0; i < maxLeft.length; i++) {
    min.push(Math.min(maxLeft[i], maxRight[i]));
  }
  for (let i = 0; i < height.length; i++) {
    sum += min[i] - height[i] >= 0 ? min[i] - height[i] : 0;
  }
  return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
