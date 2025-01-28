function convertToWave(arr) {
    if (arr.length === 1) return arr;
    for (let i = 0; i < arr.length - 1; i += 2) {
        if (arr[i + 1] >= arr[i]) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(convertToWave([1, 2, 3, 4, 5]));
console.log(convertToWave([2, 4, 7, 8, 9, 10]));