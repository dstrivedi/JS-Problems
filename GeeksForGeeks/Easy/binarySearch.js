function binarysearch(arr, k) {
    // Code Here
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      // find the mid index
      let mid = Math.floor((start + end) / 2);

      // If element is present at
      // mid, return True
        if (arr[mid] === k) return mid;

        // Else look in left or
        // right half accordingly
        else if (arr[mid] < k)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}

console.log(binarysearch([1, 2, 3, 4, 5], 4));
console.log(binarysearch([11, 22, 33, 44, 5], 445));