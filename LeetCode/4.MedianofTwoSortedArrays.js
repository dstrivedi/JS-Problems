/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * get middle value first
 * if odd  -> middle element is the median
 * if even -> (arr[middle-1] + arr[middle]) / 2 is the median 
 */
const findMedianSortedArrays = function(nums1, nums2) {
    let sortedArrays = (nums1.concat(nums2)).sort((a,b) => a - b);
    const mid = Math.floor(sortedArrays.length / 2)
    if(sortedArrays.length % 2 === 1) {
        return sortedArrays[mid]
    } else {
        return (sortedArrays[mid-1] + sortedArrays[mid]) / 2
    }
};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([1, 4],[ 7, 9]))