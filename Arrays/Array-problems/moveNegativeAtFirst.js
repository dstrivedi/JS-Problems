const move = (arr) => {
    var pos = [];
    var neg = [];
    for (let i = 0; i <= arr.length -1; i++) {
        if (arr[i] > 0) {
            pos.push(arr[i])
        }
        else {
            neg.push(arr[i])
        }
    }
    // console.log(pos,neg)
    let new_arr = pos.concat(neg);
    for (let i = 0; i <= new_arr.length - 1; i++) {
        arr[i] = new_arr[i];
    }
    return arr;
}


console.log(move([-12, 11, -13, -5, 6, -7, 5, -3, -6]))
console.log(move([1, -1, 3, 2, -7, -5, 11, 6]))