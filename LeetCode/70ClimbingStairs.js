/***
 * You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?   

    Example 1:
    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    Example 2:
    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
 */

/**
 * Fibonacci series count
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1;
    let b = 1;
    let sum = 0
    for(let i = 2 ; i <= n ; i ++) {
        sum = a +b;
        a= b;
        b = sum;
    }
    return b
}

console.log(climbStairs(3))
console.log(climbStairs(2))
console.log(climbStairs(4))
console.log(climbStairs(5))

