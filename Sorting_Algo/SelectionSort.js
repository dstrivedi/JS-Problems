const selection_sort = (arr,n) => {
    var min_idx, temp;

    for(var i = 0 ; i < n-1 ; i++) {
        min_idx = i;
        for(var j = i+1 ; j < n; j++) {
            if(arr[j] < arr[min_idx])
                min_idx = j
        }
        temp = arr[min_idx]
        arr[min_idx] = arr[i]
        arr[i] = temp
    }
    return arr
}

console.log(selection_sort([64, 25, 12, 22, 11],5))

//  The time complexity of Selection Sort is O(N2) as there are two nested loops