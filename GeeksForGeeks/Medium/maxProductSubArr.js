function maxProduct(arr) {
    // using two loops
    /*let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let mul = 1;
        for (let j = i; j < arr.length; j++) {
            mul *= arr[j]
            if (mul > result) {
                result = mul
            }
        }
    }
    return result*/

    let maxProd = Number.MIN_SAFE_INTEGER;
    let leftToRight = 1;
    let rightToLeft = 1;
    for (let i = 0; i < arr.length; i++) {
        if (leftToRight === 0) leftToRight = 1;
        if (rightToLeft === 0) rightToLeft = 1;
        leftToRight *= arr[i];
        let j = arr.length - 1 - i;
        rightToLeft *= arr[j];
        maxProd = Math.max(leftToRight, rightToLeft, maxProd);
    }
    return maxProd;
}

console.log(maxProduct([-2, 6, -3, -10, 0, 2]));
console.log(maxProduct([-1, -3, -10, 0, 6]));
console.log(maxProduct([2, 3, 4]));