/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m === 0 && n > 0 ) {
        nums1 = nums2
        return nums1
    }
    if(m > 0 && n === 0 ) return nums1
    // nums1 = nums1.filter((ele) => ele !== 0).concat(nums2.filter(ele => ele !== 0))
    // nums1 = nums1.sort((a,b) => a - b)
    // return nums1.filter((ele) => ele !== 0).concat(nums2.filter(ele => ele !== 0)).sort((a,b) => a - b)
    let j = 0
    for(let i = n; i < m + n; i++) {
        nums1[i] = nums2[j]
        j++;
    }
    return nums1.sort((a,b) => a - b)
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([0,0],0,[1,2],1))
console.log(merge([1],1,[],0))