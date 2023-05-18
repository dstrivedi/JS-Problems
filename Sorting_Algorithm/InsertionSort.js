/*
    for loop i = 1 , initailising with 2nd element
        store key as arr[i] and j as i - 1
        while loop till j >= 0 and arr[j] > key
            arr[j+1] = arr[j]
            j = j - 1
        arr[j+1] = key
*/

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length ;i ++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key) {
            console.log(key, arr[i])
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertionSort([12, 11, 13, 5, 6 ]))