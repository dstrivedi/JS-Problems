function equilibriumPoint(arr) {
    // code here
    if (arr.length === 1) return arr[0];
    let leftSum = 0;
    let sum = arr.reduce((acc, pre) => acc + pre);
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
        if (sum === leftSum) return i + 1;
        leftSum += arr[i]
    }
    return -1
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));
console.log(equilibriumPoint([1]));
console.log(equilibriumPoint([1, 2, 3]))
console.log(equilibriumPoint([8 ,8, 3,7, 8, 2, 7, 2]))