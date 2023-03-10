const bubble_sort = (arr, n) => {
    for (let i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if(arr[i] > arr[j]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubble_sort([5, 1, 4, 2, 8], 5))
console.log(bubble_sort([64, 25, 12, 22, 11],5))

// Time Complexity: O(N2)