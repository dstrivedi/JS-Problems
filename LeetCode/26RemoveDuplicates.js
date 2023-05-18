// 26. Remove Duplicates from Sorted Array
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDups = (arr) => {
    let set_arr = Array.from(new Set(arr));
    for(let i = set_arr.length ; i < arr.length; i++){
        set_arr.push("_")
    }
    return set_arr;
}

//without changing input arr
const removeDups_leetcode = (nums) => {
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i+1,1)
            i--;
        }
    }
    return nums
}

//without changing input arr
const removeDups_leetcode2 = (nums) => {
    let j = 0;
    for(let i = 1 ; i < nums.length ; i++) {
        if(nums[i] == nums[j]) continue
        j++
        nums[j] = nums[i]
    }
    return nums.splice(0,j+1)
}


console.log(removeDups_leetcode2([1,1,2,2,2,3]))
console.log(removeDups_leetcode2([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDups_leetcode2([1,1,1,1]))