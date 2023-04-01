function dataFinder(data, minRange, maxRange, value) {
    if (minRange < 0 || maxRange >= data.length) {
        throw new Error("Invalid range")
    }
    let arr = []
    for (let i = minRange; i <= maxRange; i++) {
        if (data[i] === value) {
            return true
        }
    }
    return false
}

console.log(dataFinder([1, 2, 3, 5, 7, 8], 0, 4, 2))
console.log(dataFinder([11, 20, 1, 15, 70, 8], 0, 2, 2))
console.log(dataFinder([11, 25, 3, 50, 17, 98], 1, 3, 3))

