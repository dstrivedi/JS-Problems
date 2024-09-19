/*Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // time O(N) | space O(1)
    let i = 0
    let j = 0
    // calculate the length of s and t
    while (i < s.length && j < t.length) {
        console.log(s[i], t[j])
        // if s[i] is equal to t[j], then increment i
        if (s[i] === t[j]) {
            i++
        }
        // increment j
        j++
    }
    return i === s.length
};

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence('acb', 'ahbgdc'))