/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let remove = 0
    intervals.sort((a,b) => a[1] -b[1])
    let prev = intervals[0]
    for(let i = 1; i < intervals.length ;i++ ){
        if(prev[1] > intervals[i][0]) {
            remove++
        } else {
            prev = intervals[i]
        }
    }
    return remove
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4]]))
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]))