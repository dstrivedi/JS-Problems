function subArraySum(arr, target) {
    let start = 0;
    let sum = 0;


    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        // console.log(sum, target, start, i)
        while (sum > target && start <= i) {
            sum -= arr[start]
            start++
        }

        if (sum === target) {
            return [start + 1, i + 1]
        }
    }
    return [-1]
}

console.log(subArraySum([1, 2, 3, 7, 5], 12))
console.log(subArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(subArraySum([7, 31, 14, 19, 1, 42, 13, 6, 11, 10, 25, 38, 49, 34, 46, 42, 3, 1], 42));
console.log(subArraySum([1],0))