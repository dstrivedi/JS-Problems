const equilibrium = (arr,n) => {
    let leftsum = 0;
    let sum = arr.reduce((acc,pre) => acc+pre)
    for(let i = 0 ; i < n; i++ ){
        sum -= arr[i];
        if(sum == leftsum) return ++i
        leftsum += arr[i]
    }
    return -1
} 
console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0],7))
console.log(equilibrium([1,3,5,2,2],5))
console.log(equilibrium([1],1))

console.log("\n------------------------------------\n")

const equilibrium_second_method = (arr,n) => {
    if(n === 1) return 1
    let rightsum = arr[0];
    let leftsum = arr[arr.length - 1];
    for(let i = 1 ; i < n-1 ;i++) {
        // console.log(rightsum, leftsum, i)
        if(rightsum === leftsum) return ++i
        rightsum += arr[i]
        leftsum += arr[arr.length - 1 - i]
    }
    return -1
}

console.log(equilibrium_second_method([-7, 1, 5, 2, -4, 3, 0],7))
console.log(equilibrium_second_method([1,3,5,2,2],5))
console.log(equilibrium_second_method([1],1))


console.log("\n--------------------------------------------\n")
// using two pointers
const pivotIndex = (arr,n) => {
    let left = 0;
    let right = arr.slice(1).reduce((a,b) => a+b,0)
    let pivot = 0;
    while(pivot < arr.length-1 && right != left) {
        pivot++;
        right -= arr[pivot];
        left += arr[pivot-1]
    }
    return (left == right) ? ++pivot : -1
}

console.log(pivotIndex([-7, 1, 5, 2, -4, 3, 0],7))
console.log(pivotIndex([1,3,5,2,2],5))
console.log(pivotIndex([1],1))

