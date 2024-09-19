/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let max = []
    for(let i = 0 ; i <= nums.length-k; i++) {
        max.push(Math.max(...nums.slice(i, k+i)))
    }
    return max
};

var maxSlidingWindow_nestedloop = function(nums, k) {
    let eles = [];
    if(nums.length === 1) return nums
    for(let i = 0 ; i <= nums.length-k; i++) {
        let max = nums[i]
        for(let j = 1 ; j < k; j++) {
            if(nums[i + j] > max ) {
                max = nums[i+j]
            }
        }
        eles.push(max)
    }
    return eles
};

var maxSlidingWindow_deque = function(nums,k) {
    const max = [];
    const deque = []; // Store indices of elements

    for (let i = 0; i < nums.length; i++) {
        // Remove elements that are out of the current window from the front
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        // Remove elements that are smaller than the current element from the back
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i); // Add the current index to the deque
        
        // Start adding maximum values to the 'max' array once the window size is reached
        if (i >= k - 1) {
            max.push(nums[deque[0]]);
        }
    }
    
    return max;
}


console.log(maxSlidingWindow_nestedloop([1,3,-1,-3,5,3,6,7],3))
console.log(maxSlidingWindow_nestedloop([1],1))