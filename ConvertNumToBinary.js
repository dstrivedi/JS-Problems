/**
 * Given two binary strings a and b, return their sum as a binary string.

    Example 1:

    Input: a = "11", b = "1"
    Output: "100"
    Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"
 * @param {*} num 
 * @returns 
 */

const toInt = (num) => {
    return parseInt(num,2)
}


const binarySum = (a,b) => {
    //  return (parseInt(a,2) + parseInt(b,2)).toString(2)
    return (BigInt(`0b${b}`) + BigInt(`0b${a}`)).toString(2)
}

console.log(binarySum(11,1))
console.log(binarySum(1010,1011))

console.log(toInt(100))
console.log(toInt(1000))