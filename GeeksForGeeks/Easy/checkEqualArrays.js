function check(arr1, arr2) {
    return arr1.sort((a, b) => a - b).join("") === arr2.sort((a, b) => a - b).join("");
}

console.log(check([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]));
console.log(check([1, 2, 5], [2, 4, 15]));