function sort012(arr) {
    // your code here
    // with sort()
    // return arr.sort((a, b) => a - b);

    // without sort
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            cnt0++;
        } else if (arr[i] === 1) {
            cnt1++;
        } else {
            cnt2++
        }
    }

    while (cnt0 > 0) {
        newArr.push(0);
        cnt0--;
    } 

    while (cnt1 > 0) {
        newArr.push(1);
        cnt1--;
    }

    while (cnt2 > 0) {
        newArr.push(2);
        cnt2--;
    }

    return newArr;

}

console.log(sort012([1 , 0 ,2]))
console.log(sort012([0, 1, 2, 0, 1, 2]));
console.log(sort012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));