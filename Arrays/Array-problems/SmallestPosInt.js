/**
 * Write a function:
    class Solution { public int solution(int[] A); }
    that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
    For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
    Given A = [1, 2, 3], the function should return 4.
    Given A = [−1, −3], the function should return 1.
    Write an efficient algorithm for the following assumptions:
    N is an integer within the range [1..100,000];
    each element of array A is an integer within the range [−1,000,000..1,000,000].
 * @param {*} A 
 * @returns 
 */

function solution(A) {
    // Implement your solution here
    let s = [...new Set(A)].sort((a,b) => a - b)
  	for(let i = s[0]; i < s.length + 1 ; i++) {
    	if(!s.includes(i) && i > 0) {
        	return i
        }
    }
  	return s[s.length-1] + 1
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([-1,-3]))
console.log(solution([1,2,3]))
