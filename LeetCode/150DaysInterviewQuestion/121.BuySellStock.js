//medium.com/nerd-for-tech/leetcode-121-best-time-to-buy-and-sell-stock-javascript-solution-1e690ce18668

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    

    Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    
    Example 2:
    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPro = 0;
  for (let b = 0; b < prices.length; b++) {
    //b = Buy price
    for (let s = b + 1; s < prices.length; s++) {
      //s = Sell price
      let profit = prices[s] - prices[b];
      //   console.log(maxPro, profit);
      maxPro = Math.max(maxPro, profit);
    }
  }
  return maxPro;
};

// with single loop
var maxProfit2 = function (prices) {
  let maxPro = 0;
  let minPrice = prices[0];
  for (let sell = 1; sell < prices.length; sell++) {
    let profit = prices[sell] - minPrice;
    maxPro = Math.max(maxPro, profit);
    if (prices[sell] < minPrice) minPrice = prices[sell];
  }
  return maxPro;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
