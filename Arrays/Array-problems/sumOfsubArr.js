const sumOfsubArr = (arr, sum) => {
    let total = 0;
    let new_arr = [];
    for (let i = 0; i <= arr.length; i++) {
        total = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            // console.log(total)
            if (total == sum) {
                new_arr = [];
                new_arr.push(i +1);
                new_arr.push(j);
                return new_arr;
            }
            if(total > sum || j == arr.length) {
                break;
            }
            total += arr[j]
        }
    }
    return new_arr;
}

console.log(sumOfsubArr([1, 4, 20, 3, 10, 5], 33));
console.log(sumOfsubArr([1, 4, 0, 0, 3, 10, 5], 7))
console.log(sumOfsubArr([1, 2, 3, 7, 5], 12))