/*
    Input:
    N = 6
    A[] = {3, 2, 1, 56, 10000, 167}
    Output:
    min = 1, max =  10000

    Input:
    N = 5
    A[]  = {1, 345, 234, 21, 56789}
    Output:
    min = 1, max = 56789
*/

const { kStringMaxLength } = require("buffer")

const getMinMax = (arr, n) => {
    //code here

    //using sort method
    // arr.sort((a,b) => a-b)
    // return [arr[0],arr[n-1]]

    let min = arr[0]
    let max = arr[0]

    arr.map((ele,i) => {
        if(ele >= max) {
            max = ele
        }
        if(ele <= min) {
            min = ele
        }
    })

    return [min, max]
}

console.log(getMinMax([3, 2, 1, 56, 10000, 167],6))
console.log(getMinMax([1, 345, 234, 21, 56789],5))