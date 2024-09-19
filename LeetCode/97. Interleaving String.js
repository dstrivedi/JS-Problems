/**
 * Given three strings A, B and C. Write a function that checks whether C is an interleaving of A and B. C is said to be interleaving A and B, if it contains all and only characters of A and B and order of all characters in individual strings is preserved. 

    Example: 

    Input: strings: "XXXXZY", "XXY", "XXZ"
    Output: XXXXZY is interleaved of XXY and XXZ
    The string XXXXZY can be made by 
    interleaving XXY and XXZ
    String:    XXXXZY
    String 1:    XX Y
    String 2:  XX  Z

    Input: strings: "XXY", "YX", "X"
    Output: XXY is not interleaved of YX and X
    XXY cannot be formed by interleaving YX and X.
    The strings that can be formed are YXX and XYX
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(!s1 && !s2 && !s3) return true;

    if(!s3) {
        return false;
    }

    if(s1 && s1[0] === s3[0]) {
        return isInterleave(s1.substring(1),s2, s3.substring(1))
    }

    if(s2 && s2[0] === s3[0]) {
        return isInterleave(s1,s2.substring(1),s3.substring(1))
    }

    return false;
};

console.log(isInterleave("XXY", "XXZ", "XXZXXXY"))
console.log(isInterleave("XY", "WZ", "WZXY"))
console.log(isInterleave("XY", "X", "XXY"))
console.log(isInterleave("aabcc","dbbca","aadbbcbcac"))