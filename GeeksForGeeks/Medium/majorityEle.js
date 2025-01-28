function majorityEle1(arr) {
    const n = arr.length;
    const freq = {};
    const res = [];

    for (const ele of arr) {
        freq[ele] = (freq[ele] || 0) + 1;
    }

    for (const item in freq) {
        const ele = Number(item);
        const cnt = freq[item];
        
        if (cnt > Math.floor(n / 3)) {
            res.push(ele);
        }
    }

    if (res.length === 2 && res[0] > res[1]) {
        [res[0], res[1]] = [res[1], res[0]]
    }

    return res;
}

function majorityEle(arr) {
    let map = new Map();
    let res = [];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
       map.set(arr[i], map.get(arr[i]) + 1 || 1)
    }

    for (let [key, value] of map) {
        if (value > Math.floor(n / 3)) {
            res.push(key)
        }
    }

    return res;
}


console.log(majorityEle([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]));
console.log(majorityEle([1, 2, 3, 4, 5]));
console.log(majorityEle([1, 1, 1, 3, 3, 3, 3, 2, 2]));