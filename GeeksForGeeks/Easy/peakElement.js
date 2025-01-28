function peakElement(arr) {
    // Code here
    // const n = arr.length;
    // let newArr = [];
    // if (n === 1) return 0;
    // if (arr[0] >= arr[1]) return 0;
    // if (arr[n - 1] >= arr[n - 2]) return n-1;
    // for (let i = 1; i < n - 1; i++) {
    //     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
    //         newArr.push(arr.indexOf(arr[i]));
    //     }
    // }
    // return newArr[0];

    let newArr = [...arr];
    arr.sort((a, b) => b - a);
    return newArr.indexOf(arr[0]);

}

console.log(peakElement([1, 2, 3]));
console.log(peakElement([1, 1, 1, 2, 1, 1, 1]));
console.log(peakElement([1, 1, 1]));