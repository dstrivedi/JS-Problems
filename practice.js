function majorityEle(arr) {
    let freq = {};
    let n = arr.length;
    let res = [];
    for (let ele of arr) {
        freq[ele] = (freq[ele] || 0) + 1;
    }
    for (let item in freq) {
        const ele = Number(item);
        const cnt = freq[item];
        if (cnt > Math.floor(n / 3)) {
            res.push(ele);
        }
    }
    if (res.length === 2 && res[0] > res[1]) {
      [res[0], res[1]] = [res[1], res[0]];
    }

    return res;
}

console.log(majorityEle([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]));
console.log(majorityEle([1, 2, 3, 4, 5]));
console.log(majorityEle([1, 1, 1, 3, 3, 3, 3, 2, 2]));
console.log(majorityEle([-5, 1, -5]));