/*
    Step 1: First, read the search element (Target element) in the array.
    Step 2: Set an integer i = 0 and repeat steps 3 to 4 till i reaches the end of the array.
    Step 3: Match the key with arr[i].
    Step 4: If the key matches, return the index. Otherwise, increment i by 1.
*/

const LinearSearch = (arr, key) => {
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] == key) {
            return i
        }
    }
    return -1
}

const recursive_approach = (arr,size, key) => {
    // let size = arr.length;
    if(size == 0) {
        return -1
    } else if(arr[size-1] == key) {
        return size - 1
    } else {
        let ans = recursive_approach(arr, size-1,key)
        return ans
    }
}

console.log(recursive_approach([2, 3, 4, 10, 40],5, 10))
console.log(recursive_approach([10, 50, 30, 70, 80, 20, 90, 40],8, 20))

console.log(LinearSearch([2, 3, 4, 10, 40], 10))
console.log(LinearSearch([10, 50, 30, 70, 80, 20, 90, 40], 20))