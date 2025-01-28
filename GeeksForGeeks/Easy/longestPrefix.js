/**
 * 

Longest Common Prefix of Strings
Difficulty: EasyAccuracy: 29.52%Submissions: 296K+Points: 2
Given an array of strings arr[]. Return the longest common prefix among each and every strings present in the array. If there's no prefix common in all the strings, return "".

Examples :

Input: arr[] = ["geeksforgeeks", "geeks", "geek", "geezer"]
Output: "gee"
Explanation: "gee" is the longest common prefix in all the given strings.
Input: arr[] = ["hello", "world"]
Output: ""
Explanation: There's no common prefix in the given strings.
 */

function longestCommonPrefix(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr.every((str) => {
            console.log(str,i,str[i], arr[0][i])
            return str[i] === arr[0][i]
            })) {
            console.log(arr[0].slice(0,i))
        }
    }
}

/**const longestCommonPrefix = (strs) => {
    let pre = "";    
    if (strs === null || strs.length === 0) return pre
    for (let i = 0; i < strs[0].length; i++) {
        // console.log(strs[0][i]);
        for (let j = 1; j< strs.length; j++) {
            // console.log(strs[j])
            // console.log(strs[j][i], strs[0][i])
            if (strs[j][i] !== strs[0][i]) 
                return pre
        }
        pre += strs[0][i]
    }
    return pre
}; */

/**
 * i = 0 = geeksforgeeks 
 *  arr.every => str => geeksforgeeks => str[0] g === str[0][0]
 */

console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
console.log(longestCommonPrefix(["hello", "world"]));