function minDistance(arr, x, y) {
    // if (!(arr.includes(x) && arr.includes(y))) return -1;
    // return Math.abs(arr.indexOf(x) - arr.indexOf(y));
    let minDis = Infinity;
    let a = -1;
    let b = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            a = i;
        }
        if (arr[i] === y) {
            b = i;
        }
        if (a !== -1 && b !== -1) {
            minDis = Math.min(minDis, Math.abs(a - b));
        }
    }
    return minDis !== Infinity ? minDis : -1;
}

console.log(minDistance([1, 2, 3, 2], 1, 2));
console.log(minDistance([86, 39, 90, 67, 84, 66, 62], 42, 12));
console.log(minDistance([10, 20, 30, 40, 50], 10, 50));