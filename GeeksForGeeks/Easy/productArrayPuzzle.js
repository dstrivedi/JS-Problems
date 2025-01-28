const productArrayPuzzle = (arr) => {
    let pro = [];
    for (let i = 0; i < arr.length; i++) {
        let p = 1;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                p *= arr[j];
            }
        }
        pro.push(p);
    }
    return pro;
}

console.log(productArrayPuzzle([10, 3, 5, 6, 2]));
console.log(productArrayPuzzle([12, 0]));
console.log(productArrayPuzzle([0]));