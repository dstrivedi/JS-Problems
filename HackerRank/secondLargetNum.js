const getSecondLargetNums = (nums) => {
    nums.sort((a, b) => b-a)
    let set_nums = new Set(nums)
    let arr = [];
    set_nums.forEach(i => {
        arr.push(i)
    })
    return arr[1]
}

console.log(getSecondLargetNums([2, 3, 6, 5, 6]))
console.log(getSecondLargetNums([1, 2, 2, 4, 5, 6]))
console.log(getSecondLargetNums([6, 4, 5, 0]))