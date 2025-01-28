const maxValuePermutation = (arr) => {
    if (arr.length <= 1) return 0;
    let sum = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        sum += i * arr[i]
    }
    return sum;
}

console.log(maxValuePermutation([5, 3, 2, 4, 1]));
console.log(maxValuePermutation([1, 2, 3]));
console.log(maxValuePermutation([7, 7, 7, 7]));