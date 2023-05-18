/**
    Time Complexity: O(log N)
    Auxiliary Space: O(1)
 */

const binarySearch = (arr, key) => {
    let l = 0;
    let h = arr.length - 1;
    let mid;
    while(h >= l) {
        mid = l + Math.floor((h-l) /2)
        // console.log(mid, l, h)
        if(arr[mid] === key) return mid
        if(arr[mid] > key){
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
}

const recursive_approach = (arr,l,h, key) => {
    if(r >= l) {
        let mid = l + Math.floor((r-l)/2)
        if(arr[mid] === key) return key
        if(arr[mid] > key) {
            return recursive_approach(arr, l, mid - 1, key)
        } else {
            return recursive_approach(arr, mid+1,h, key)
        }
    }
    return -1
}

console.log(binarySearch([2, 3, 4, 10, 40], 10))