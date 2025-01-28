function circularSubArrSum(arr) {
    let n = arr.length;
    let res = arr[0];

    for (let i = 0; i < n; i++) {
        let currSum = 0;
        for (let j = 0; j < n; j++) {
            const idx = (i + j) % n;
            console.log(idx);
            currSum += arr[idx];
            res = Math.max(res, currSum);
        }
    }

    return res;
    // let totalSum = 0;
    // let currMaxSum = 0;
    // let currMinSum = 0;
    // let maxSum = arr[0];
    // let minSum = arr[0];

    // for (let i = 0; i < arr.length; i++) {
    //     currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
    //     maxSum = Math.max(maxSum, currMaxSum);
    //     // console.log("current max sum", currMaxSum , "max sum ", maxSum)
    //     currMinSum = Math.min(currMinSum + arr[i], arr[i])
    //     minSum = Math.min(minSum, currMinSum)
    //     // console.log("current min sum", currMinSum, "min sum ", minSum);
    //     totalSum += arr[i]
    // }
    // let normalSum = maxSum;
    // let circularSum = totalSum - minSum; 

    // if (minSum === totalSum) {
    //     return normalSum;
    // }

    // return Math.max(normalSum, circularSum)
}

console.log(circularSubArrSum([8, -8, 9, -9, 10, -11, 12]));
// console.log(circularSubArrSum([10, -3, -4, 7, 6, 5, -4, -1]));
// console.log(circularSubArrSum([-1, 40, -14, 7, 6, 5, -4, -1]));
