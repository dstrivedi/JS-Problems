/**
 * without using buil-in function
 * approaching using binary search
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    let low = 1, high = x;
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(mid * mid === x) {
            return mid
        } else if(mid * mid <x) {
            low = mid + 1
        } else {
            high = mid -1
        }
    } 
    return high
};