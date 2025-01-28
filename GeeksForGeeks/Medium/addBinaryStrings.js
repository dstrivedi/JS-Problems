function addBinaryStrings(str1, str2) {
    let num1 = parseInt(str1, 2)
    let num2 = parseInt(str2, 2)
    let sum = num1 + num2
    console.log(num1, num2, sum)
    return sum.toString(2)
}

console.log(addBinaryStrings("1101", "111"))
console.log(addBinaryStrings("00100", "010")) 