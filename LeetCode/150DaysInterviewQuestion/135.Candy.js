/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

Example 1:
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
*/
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let candies = new Array(n).fill(1);
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  console.log(candies);
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  console.log(candies);
  for (let i = 0; i < candies.length; i++) {
    sum += candies[i];
  }
  return sum;
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([1, 2, 3, 4, 5]));
console.log(candy([5, 4, 3, 2, 1]));
console.log(candy([1, 3, 4, 5, 2]));
console.log(candy([2, 2, 2, 2]));
console.log(candy([29, 51, 87, 87, 72, 12]));
