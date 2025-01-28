function nonRepeatingChar(s) {
    // code here
    let map = {};
    for (let char of s) {
        map[char] = (map[char] || 0) + 1
    }
    for (let char in map) {
        if(map[char] === 1) return char.toString()
    }
    return -1;
}

console.log(nonRepeatingChar("geeksforgeeks"))
console.log(nonRepeatingChar("racecar"))