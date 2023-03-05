const union = (a, b) => {
    // let new_arr = arr1.concat(arr2);
    // let set_arr = new Set(new_arr);
    // let arr = []
    // for(let i of set_arr) {
    //     arr.push(i)
    // }
    // return arr.length;
    var arr = (a.concat(b));
    var union = [...new Set(arr)];
    return union;
}

const intersection = (a,b) => {
    let intersect = [];
    for(let i = 0; i < a.length ;i++) {
        if(b.includes(a[i])) {
            intersect.push(a[i])
        }
    }
    return intersect;
}

console.log(union([1, 2, 3, 4, 5], [1, 2, 3]))
console.log(union([85, 25, 1, 32, 54, 6], [85, 2]))

console.log(intersection([1, 2, 3, 4, 5], [1, 2, 3]))
console.log(intersection([85, 25, 1, 32, 54, 6], [85, 2]))