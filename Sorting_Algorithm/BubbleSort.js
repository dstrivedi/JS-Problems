/*
    outer loop i and inner loop j
    comparing i value with every j
        if arr[i] is greater than arr[j] -> swapping ith and jth using temp 
*/

const bubble_sort = (arr, n) => {
    for (let i = 0; i < n; i++) {
        // console.log("outer loop : ", arr[i])
        for (let j = i; j < n; j++) {
            // console.log("Inner loop " , arr[j])
            if (arr[i] > arr[j]) {
                // console.log(arr[i], arr[j])
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

                // console.log(arr)
            }
        }
    }
    return arr
}

console.log(bubble_sort([2, 6, 6, 3, 5], 5))
console.log(bubble_sort([5, 1, 4, 2, 8], 5))
console.log(bubble_sort([64, 25, 12, 22, 11], 5))

// Time Complexity: O(N2)