/* 

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I            1
IV           4
V            5
IX           9
X            10
XL           40
L            50
XC           90
C            100
CD           400
D            500
CM           900 
M            1000

*/

const intToRoman = (number) => {
    let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let sym = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let i = 12
    let str = ""
    while (number > 0) {
        // console.log(i)
        let div = Math.floor(number / num[i])
        number = number % num[i]
        // console.log(number,div)
        while (div--) {
            str += sym[i]
            // console.log(str)
        }
        i--
    }
    return str
}

var romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

function convertToRoman(num) {
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
        }
    }
}

console.log(intToRoman(3))
console.log(intToRoman(3549))