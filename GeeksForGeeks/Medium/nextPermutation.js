function nextPermutation(arr) {
    let pivot = -1;
    // find the pivot index from right to left, where arr[i] < arr[i+1]
    for (let i = arr.length - 2; i >= 0; i--) {
        // console.log(arr[i], arr[i+1])
        if (arr[i] < arr[i + 1]) {
            pivot = i;
            console.log("pivot", i)
            break;
        }
    }

    //if the pivot point doesn't exist, reverse the whole array
    if (pivot === -1) {
        return arr.reverse();
    }

    // find the first element from right that is greater than pivot
    for (let i = arr.length - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            break;
        }
    }
    console.log("arr", arr);
    //reverse the elements from pivot + 1 to the end to get the next permutation in place
    let left = pivot + 1;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(nextPermutation([2, 4, 1, 7, 5, 0]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 2, 3, 4, 5]))
console.log(nextPermutation([1, 4, 3, 2]));