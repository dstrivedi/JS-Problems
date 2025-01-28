const findKRotation = (arr) => {
    let rotatedArr = [...arr];
    arr.sort((a, b) => a - b);
    return rotatedArr.indexOf(arr[0]);
}

console.log(findKRotation([5, 1, 2, 3, 4]));
console.log(findKRotation([6, 9, 2, 4]));