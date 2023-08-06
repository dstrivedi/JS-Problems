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

let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const romanToInt = (s) => {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            // console.log(obj[s[i]], obj[s[i+1]])
            num += obj[s[i + 1]] - obj[s[i]]
            console.log(num)
            // console.log(obj[s[i+1]]-obj[s[i]])
            i++
        } else {
            // console.log(obj[s[i]], obj[s[i+1]])
            num += obj[s[i]]
        }
        // console.log(num)
    }
    return num 
}

console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('LVIII'));

/*
    num = 0
    i=0
    s = MCMXCIV
    s[0] = M, s[1] = C
    if(s[0] < s[1]) -> NO -> num = 1000

    i=1
    s[1] = C = 100, s[2] = M = 1000
    s[1] < s[2] -> Yes -> num = 1000 + (100-100) = 1900
    i = 2

    i=3
    s[3] = X = 10, s[4] = C = 100
    10 < 100 -> Yes -> num = 1900 + (100-10) = 1990
    i = 4

    i=5
    s[5] = I = 1, s[6] = V = 5
    1 < 5 -> Yes -> num = 1990 + (5-1) = 1994
*/

const romanToInt2 = (s) => {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            res += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            res += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            res += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            res += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            res += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            res += 900;
            i++;
        } else {
            res += obj[s[i]];
        }
    }
    return res;
}

console.log(romanToInt2('III'));
console.log(romanToInt2('LVIII'));
console.log(romanToInt2('MCMLXXXIX'));



