// O(n^2)
const longestSubArrayForLoop = (arr, k) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
}


// O(n)
const longestSubArray = (arr, k) => {
    let map = new Map();
    let res = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (!map.has(sum)) {
          map.set(sum, i);
        }

        if (sum === k) {
            res = i + 1;
        } else if (map.has(sum - k)) {
            // console.log(sum - k, i, res,i - map.get(sum - k))
            res = Math.max(res, i - map.get(sum - k));
        }
    }
    console.log(map)
    return res;
}

console.log(longestSubArray([10, 5, 2, 7, 1, -10], 15));
console.log(longestSubArray([-5, 8, -14, 2, 4, 12], -5));
console.log(longestSubArray([10, -10, 20, 30], 5));
console.log(longestSubArray([94 ,-33 ,-13, 40 ,-82, 94, -33, -13, 40, -82], 52))