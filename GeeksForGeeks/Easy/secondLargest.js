function getSecondLargest_using_set_sort(arr) {
    let uniqueEles = new Set(arr);

    if (uniqueEles.size < 2) {
        return -1
    } 

    let sorted = Array.from(uniqueEles).sort((a, b) => a - b);
    return sorted[sorted.length - 2]
}

function getSecondLargest(arr) {
    let first = -1;
    let second = -1;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num; 
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second;
}

console.log(getSecondLargest([12, 35, 1, 10, 34, 1]));
console.log(getSecondLargest([10, 10]));


