/*
Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

Examples: 

Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33
*/

/**
 * 
 [1, 4, 20, 3, 10, 5], 33

1. 1 , start = 0, end = 0
	1 === 33
2. 1 + 4, start = 0, end = 1
	5 > 33 
	5 === 33
3. 1 + 4 + 20 , start = 0, end = 2
	25 > 33
	25 === 33
4. 1 + 4 + 20 + 3, start = 0, end = 3
	28 > 33
	28 === 33
5. 1 + 4 + 20 + 3 + 10, start = 0, end = 4
	38 > 33 -> 28 - 1 = 29
		   start = 1
	37 > 33 -> 37 - 4 = 33
		   start = 2
	33 > 33,
	33 === 33 -> return start + 1, end + 1 -> [3,5]


[1, 4, 0, 0, 3, 10, 5], 7

1. 1, start = 0, end = 0
2. 1 + 4, start = 0, end = 1
	total = 5 > 7
	5 === 7
3. 1 + 4 + 0, start = 0, end = 2
	total = 5 > 7
	5 === 7
4. 1 + 4 + 0 + 0,start = 0, end = 3
	total = 5 > 7
	5 === 7
4. 1 + 4 + 0 + 0+ 3,start = 0, end = 4
	total = 8 > 7 => 8 - 1 = 7
		    start = 1
	7 > 7
	7 === 7 => return start + 1, end + 1 = [2, 5]
 */

const sumOfsubArr = (arr, sum) => {
    let total = 0;
    let new_arr = [];
    for (let i = 0; i <= arr.length; i++) {
        total = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            // console.log(total)
            if (total == sum) {
                new_arr = [];
                new_arr.push(i +1);
                new_arr.push(j);
                return new_arr;
            }
            if(total > sum || j == arr.length) {
                break;
            }
            total += arr[j]
        }
    }
    return new_arr;
}

console.log(sumOfsubArr([1, 4, 20, 3, 10, 5], 33));
console.log(sumOfsubArr([1, 4, 0, 0, 3, 10, 5], 7))
console.log(sumOfsubArr([1, 2, 3, 7, 5], 12))