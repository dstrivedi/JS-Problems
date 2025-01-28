function isPalindrome(s) {
    return s.split("").reverse().join("") === s
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('abc'))