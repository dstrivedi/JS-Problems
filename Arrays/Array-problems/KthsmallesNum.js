const kth_smallest_num = (arr,k) => {
    arr.sort((a,b) => a-b)
    return arr[k-1]
}

console.log(kth_smallest_num([7, 10, 4, 3, 20, 15],3))