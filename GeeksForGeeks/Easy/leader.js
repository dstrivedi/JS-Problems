function leaders(arr) {
    let result = [];
    let maxRight = arr[arr.length - 1];
    result.push(maxRight);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(arr[i]);
        }
    }
    return result.reverse();
}

console.log(leaders([16, 17, 4, 3, 5, 2]));
console.log(leaders([10, 4, 2, 4, 1]));