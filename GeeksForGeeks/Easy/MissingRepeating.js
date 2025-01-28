function findTwoElement(arr) {
    // code here
    let missing = 0;
    let repeating = 0;
    let n = arr.length;

    const freq = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (freq[i] === 2) repeating = i
        else if (freq[i] === 0) missing = i
    }
    return [repeating, missing]
}

console.log(findTwoElement([2, 2]));
console.log(findTwoElement([1, 3, 3]));
console.log(findTwoElement([4, 3, 6, 2, 1, 1]));
console.log(findTwoElement([6 ,5 ,8, 7, 1, 4, 1, 3, 2]))