const reverseArr = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}


// Function to rotate an array by d elements in counter - clockwise direction.
function rotateArr(arr, d) {
  // code here
  d = d % arr.length;
    reverseArr(arr, 0, arr.length - 1); // Reverse the entire array
    //console.log(arr)
    reverseArr(arr, 0, arr.length - d - 1); // Reverse the first part
    //console.log(arr)
    reverseArr(arr, arr.length - d, arr.length - 1); // Reverse the second part
     return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2));
console.log(rotateArr([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3));
console.log(rotateArr([7, 3, 9, 1], 9));