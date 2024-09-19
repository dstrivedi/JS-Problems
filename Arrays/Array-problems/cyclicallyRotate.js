/*
Given an array, cyclically rotate the array clockwise by one. 
Examples:  
Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
*/
const cyclicallyRotate = (arr) => {
    // let poped = arr.pop()
    // arr.unshift(poped)
    // return arr

    let last_ele = arr[arr.length-1];

    for(let i =  arr.length-1 ; i > 0 ; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = last_ele;
    return arr

}

console.log(cyclicallyRotate([1, 2, 3, 4, 5]))
console.log(cyclicallyRotate([4,6,8,0]))