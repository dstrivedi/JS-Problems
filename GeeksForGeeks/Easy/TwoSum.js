function TwoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    arr.sort((a,b) => a - b)
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === target) {
            console.log(arr[left], arr[right])
            return true
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return false
}

console.log(TwoSum([1, 4, 45, 6, 10, 8], 16));
console.log(TwoSum([1, 2, 4, 3, 6], 11));