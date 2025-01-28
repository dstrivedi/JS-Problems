function missingNumber(arr) {
    // O(n log n)
    // arr.sort((a,b) => a - b)
    // let posArr = arr.filter((ele) => ele > 0)
    // if(posArr.length === 0) return 1
    // let res = [];
    // for (let i = 0; i < posArr.length + 1; i++) {
    //     let int = i + 1;
    //     if (!posArr.includes(int)) {
    //         res.push(int);
    //     } 
    // }
    // return res[0]
    
    let n = arr.length;
    let j = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    let posArr = arr.slice(j)
    let size = posArr.length;
    // let newArr = [];
    // for (let i = 0; i < size + 1;  i++) {
    //     let int = i + 1;
    //     if (!posArr.includes(int)) {
    //         newArr.push(int)
    //     }
    // }
    // return newArr[0]

    for (let i = 0; i < size; i++) {
        let val = Math.abs(posArr[i]);
        if (val - 1 < size && posArr[val - 1] > 0) {
            posArr[val - 1] = -posArr[val - 1]
        }
    }

    for (let i = 0; i < size; i++) {
        if (posArr[i] > 0) return i + 1;
    }
    return size + 1
}

console.log(missingNumber([2, -3, 4, 1, 1, 7]));
console.log(missingNumber([5, 3, 2, 5, 1]));
console.log(missingNumber([-8, 0, -1, -4, -3]));
console.log(missingNumber([1,2,3,4,5]))