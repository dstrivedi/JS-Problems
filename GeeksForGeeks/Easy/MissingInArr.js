function missingNumber(arr) {
    // code here
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1
        }
    }
    return arr.length + 1
}

console.log(missingNumber([1, 2, 3, 5]));
console.log(missingNumber([8, 2, 4, 5, 3, 7, 1]));
console.log(missingNumber([1,2]))