/**
 * Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

    Example 1:
    Input:
    N = 5
    Arr[] = {1,2,3,-2,5}
    Output:
    9
    Explanation:
    Max subarray sum is 9
    of elements (1, 2, 3, -2, 5) which 
    is a contiguous subarray.
    
    Example 2:
    Input:
    N = 4
    Arr[] = {-1,-2,-3,-4}
    Output:
    -1
    Explanation:
    Max subarray sum is -1 
    of element (-1)
 */

function maxSubarraySum(arr,n){
    // code here
    let cmax = arr[0];
    let max = arr[0];
    for(let i = 1 ; i < n;i++) {
        cmax = Math.max(arr[i], cmax+arr[i])
        if(cmax > max) max=cmax
    }
    return max
}
console.log(maxSubarraySum([-2,-3,4,-1,-2,1,5,-3],8))
console.log(maxSubarraySum([1,2,3,-2,5],5))
console.log(maxSubarraySum([-1,-2,-3,-4],4))

console.log("------------without using max method ----------------")
// without using max function
function maxSubarraySum1(arr,n){
    // code here
    let sum = arr[0];
    let max = arr[0];
    for(let i = 1 ; i < n;i++) {
        sum = sum + arr[i]
        if(sum < arr[i]) sum = arr[i]
        if(sum > max) max=sum
    }
    return max
}

console.log(maxSubarraySum1([-2,-3,4,-1,-2,1,5,-3],8))
console.log(maxSubarraySum1([1,2,3,-2,5],5))
console.log(maxSubarraySum1([-1,-2,-3,-4],4))