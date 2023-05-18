// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

//without changing input element
const removeElement = (nums,val) => {
    for(let i = 0; i < nums.length ; i++) {
        if(nums[i] == val) {
            nums.splice(i,1)
            i--;
        }
    }
    return nums
}

console.log(removeElement2([3,2,2,3],3))
console.log(removeElement2([0,1,2,2,3,0,4,2],2))