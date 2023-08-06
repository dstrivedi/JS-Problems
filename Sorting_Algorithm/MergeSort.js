const merge = (arr1, arr2) => {
    let i = 0; 
    let j = 0;
    let results = [];
    // console.log(arr1, arr2)
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] < arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
        console.log(" first while loop:",results)
    }

    while(i < arr1.length) {
        results.push(arr1[i])
        i++
        console.log(" second i while loop:", results)
    }

    while(j < arr2.length) {
        results.push(arr2[j])
        j++
        console.log(" third j while loop:", results)
    }

    return results
}

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)

}

console.log(mergeSort([ 12, 11, 13, 5, 6, 7 ]))