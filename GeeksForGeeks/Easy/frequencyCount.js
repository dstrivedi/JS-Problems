function frequencyCount(arr) {
    // code here
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i + 1] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += 1
        }
    }
    return Object.values(obj)
}

console.log(frequencyCount([2, 3, 2, 3, 5]));

console.log("=================================================")

function countFreq(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count += 1;
        }
    }
    return count;
}

console.log(countFreq([1, 1, 2, 2, 2, 2, 3], 2));
console.log(countFreq([1, 1, 2, 2, 2, 2, 3], 4));