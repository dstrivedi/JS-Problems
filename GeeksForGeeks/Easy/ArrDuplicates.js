function findDuplicates(arr) {
    let duplicates = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        // console.log(arr[i], arr[i+1])
        if (arr[i] === arr[i + 1]) {
            duplicates.push(arr[i])
        }
    }
    return duplicates
}

console.log(findDuplicates([2, 3, 1, 2, 3]));
console.log(findDuplicates([0, 3, 1, 2]))
console.log(findDuplicates([2]))