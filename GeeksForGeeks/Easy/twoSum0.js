function getPairs(arr) {
    // code here

    // not optimised
    // let pairs = [];
    // let setArr = Array.from(new Set(arr));
    // for (let i  = 0; i < setArr.length; i++) {
    //     for (let j = i + 1; j < setArr.length; j++) {
    //         if (setArr[i] + setArr[j] === 0 && i != j) {
    //             pairs.push([setArr[i], setArr[j]])
    //         }
    //     }
    // }
    // return pairs.map((item) => item.sort((a, b) => a - b));
    
    // optimised code
    let pairs = [];
    let seen = new Set();
    let addedPairs = new Set(); 
    for (let num of arr) {
        if (seen.has(-num)) {
            let pair = [Math.min(num, -num), Math.max(num, -num)];
            let pairStr = pair.toString();
            if (!addedPairs.has(pairStr)) {
                pairs.push(pair);
                addedPairs.add(pairStr);
            }
            
        }
        seen.add(num);
    }
    return pairs.sort((a, b) => a[0] - b[0]);
}

console.log(getPairs([-1, 0, 1, 2, -1, -4]));
console.log(getPairs([6, 1, 8, 0, 4, -9, -1, -10, -6, -5]));