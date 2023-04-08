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
        let div = Math.floor(number / num[i])
        number = number % num[i]
        while (div--) {
            str += sym[i]
        }
        i--
    }
    return str
}

console.log(intToRoman(3))
console.log(intToRoman(3549))