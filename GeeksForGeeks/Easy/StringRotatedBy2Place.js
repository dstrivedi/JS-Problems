/**
 * Given two strings s1 and s2. Return true if the string s2 can be obtained by rotating (in any direction) string s1 by exactly 2 places, otherwise, false.

Examples:

Input: s1 = "amazon", s2 = "azonam"
Output: true
Explanation: "amazon" can be rotated anti-clockwise by two places, which will make it as "azonam".
Input: s1 = "geeksforgeeks", s2 = "geeksgeeksfor"
Output: false
Explanation: If we rotate "geeksforgeeks" by two place in any direction, we won't get "geeksgeeksfor".
Input: s1 = "ab", s2 = "ab"
Output: false
 */

function isRotated(s1, s2) {
    if (s1 === s2) return false;
    if (s1.length !== s2.length) return false;
    let s1_lefted_rotated = s1.slice(2) + s1.slice(0, 2);
    let s1_right_rotated = s1.slice(-2) + s1.slice(0, s1.length - 2);
    return s1_lefted_rotated === s2 || s1_right_rotated === s2
    // let s1_arr = s1.split("")
    // for (let i = 0; i < 2; i++) {
    //     let temp = s1_arr.shift();
    //     s1_arr.push(temp)
    // } 
    // let s2_arr = s1.split("")
    // for (let i = 0; i < 2; i++) {
    //     let temp = s2_arr.pop();
    //     // console.log(temp)
    //     s2_arr.unshift(temp);
    // } 
    // // console.log(s1_arr.join(""), s2_arr.join(""))
    // if (s1_arr.join("") === s2 || s2_arr.join("") === s2) return true;
    return false
}

console.log(isRotated("amazon", "azonam"));
console.log(isRotated("ab", "ab"))
console.log(isRotated("geeksforgeeks", "geeksgeeksfor"));
console.log(isRotated("daxjheq","eqdaxjh"))