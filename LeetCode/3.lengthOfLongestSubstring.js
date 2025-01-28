/**
 * Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        if(s=="") return 0
        let ans = []
        let str = ""
        for(let i = 0 ; i < s.length; i++) {
            str = ""
            for(let j = i;j < s.length;j++){
                // console.log(str, ans)
                if(!str.includes(s[j])) {
                    str += s[j]
                    ans.push(str)
                } else {
                    break;
                }
                if(s[j] === s[j+1]) {
                    break;
                }         
            }
        }
        return Math.max(...(ans.map(ele => ele.length)))
};

console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring("bbbbbbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("dvdf"))
// console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring("cdd"))
// console.log(lengthOfLongestSubstring("ckilbkd"))

const using_map = (s) => {
    var letters = s.split("");
    var max = 0;
    var result = new Map();
    var start = 0;
    
    for (var i = 0; i < letters.length; i++) {
        console.log(result)
        if (result.has(letters[i]) && result.get(letters[i]) >= start) {
            start = result.get(letters[i]) + 1;
        } 
        result.set(letters[i], i);
        // result.clear();
        max = Math.max(max, i - start + 1);
    }
    return max;
}

// sliding window
const sliding_window = (s) => {
    var maxLength = 0;
    var left = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) { 
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(max, right - left + 1);
    }
    return maxLength;
}

console.log("============================")
console.log(using_map('abcabcbb'))
// console.log(using_map("bbbbbbbbb"))
// console.log(using_map("pwwkew"))
// console.log(using_map("dvdf"))
// console.log(using_map(""))
// console.log(using_map("cdd"))
// console.log(using_map("ckilbkd"))