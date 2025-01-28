function largest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
    // return arr.sort((a, b) => b - a)[0];
}

console.log(largest([1, 8, 7, 56, 90]));
console.log(largest([5, 5, 5, 5]));
console.log(largest([10]))