function pushZerosToEnd(arr) {
    // code here
    // [1,2,0,4,3,0,5,0]
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i]
        }
    }
    console.log("before 0",arr);
    while (count < arr.length) {
        arr[count++] = 0;
    }
    return arr;
}

console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(pushZerosToEnd([10, 20, 30]));
console.log(pushZerosToEnd([0, 0]))
console.log(pushZerosToEnd([3 ,5, 0, 0, 4]))