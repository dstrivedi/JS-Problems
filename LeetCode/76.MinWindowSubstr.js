/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // Time Complexity: O(N) | Space Complexity: O(N)
    let left = 0;
    let min = Infinity;
    let result = "";
    let map = new Map();

    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }

    for (let right = 0; right < s.length; right++) { 
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);

            if (map.get(s[right]) >= 0) {
                continue;
            }
        }

        while (map.has(s[left]) && map.get(s[left]) < 0) {
            map.set(s[left], map.get(s[left]) + 1);
            left++;
        }
    }

    return result;
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("a", "a"))
console.log(minWindow("a", "aa"))
console.log(minWindow("a", "b"))