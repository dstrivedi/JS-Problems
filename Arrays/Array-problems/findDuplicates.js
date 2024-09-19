/*
Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.

Note: The extra space is only for the array to be returned.
Try and perform all operations within the provided array. 

Example 1:

Input:
N = 4
a[] = {0,3,1,2}
Output: -1
Explanation: N=4 and all elements from 0
to (N-1 = 3) are present in the given
array. Therefore output is -1.
*/

const duplicates_map = (a, n) => {
    var m = new Map();
    var dup = []
    a.sort((a, b) => { return a - b })
    for (let i = 0; i < n; i++) {
        if (m.has(a[i])) {
            m.set(a[i], m.get(a[i]) + 1)
            if (!dup.includes(a[i])) dup.push(a[i])
        } else {
            m.set(a[i], 1)
        }
    }
    // dup.sort((a,b) => a-b)
    return dup.length > 0 ? dup : [-1]
}

const duplicates = (a, n) => {
    a.sort((a, b) => { return a - b })
    let dup = []
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] === a[j]) {
                if (!dup.includes(a[i])) dup.push(a[i])
            }
        }
    }
    return dup.length > 0 ? dup : [-1]
}

const alternative = (a, n) => {
    let new_arr = []
    let dup = []
    a.sort((a, b) => { return a - b })
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (a[i] === a[j]) {
                cnt += 1
            }
        }
        new_arr.push(cnt)
    }
    for (let i = 0; i < n; i++) {
        if (new_arr[i] != 1) {
            if (!dup.includes(a[i])) dup.push(a[i])
        }
    }
    return dup
}

//Find duplicates in O(n) time and O(1) extra space -> arr[arr[i] % n] += n
//formula a[remainder by dividing ith element with n]
const formula = (a, n) => {
    let new_arr = []
    for (let i = 0; i < n; i++) {
        // console.log(a[a[i]%n], a[i])
        // console.log(a[a[i] % n] += n, a)
        a[a[i] % n ] += n;
    }
    for (let i = 0; i < n; i++) {
        //console.log(a[i] / n >= 2)
        if (a[i] / n >= 2) new_arr.push(i)
    }
    return new_arr
}

console.log("-------------using formula----------------")
console.log(formula([0, 3, 1, 2], 4))
console.log(formula([2, 3, 1, 2, 3, 2], 6))
console.log(formula([13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4, 25, 14, 23, 14], 26))

const duplicates_using_object = (a, n) => {
    let dup = {};
    a.sort((a,b)=>a-b);
    for(let i = 0; i < n-1 ;i++){
        if(!dup.hasOwnProperty(a[i])) {
            dup[a[i]] = 1
        }
        if(a[i] === a[i+1]) {
            dup[a[i]] = dup[a[i]]+1
        }
    }
    let new_arr = []
    for(let key in dup){
        if(dup[key] > 1) new_arr.push(key)
    }
    return new_arr
}

console.log(duplicates_using_object([0, 3, 1, 2], 4))
console.log(duplicates_using_object([2, 3, 1, 2, 3, 2], 6))
console.log(duplicates_using_object([13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4, 25, 14, 23, 14], 26))
