function isSubset(a, b) {
    // for (let i = 0; i < b.length; i++) {
    //     if (!a.includes(b[i])) {
    //         return false;
    //     }
    // }
    // return true;

    // Optimised code using set
    const setA = new Set(a);
    for (let ele of b) {
        if (!setA.has(ele)) {
            return false;
        }
    }
    return true;
}

console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]));
console.log(isSubset([1, 2, 3, 4, 4, 5, 6], [1, 2, 4]));
console.log(isSubset([10, 5, 2, 23, 19], [19,5,3]));