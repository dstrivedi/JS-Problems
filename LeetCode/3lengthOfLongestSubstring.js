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
    
    /**
        var letters = s.split("");
        var max = 0;
        var result = new Map();
        var start = 0;
        
        for (var i = 0; i < letters.length; i++) {
            if (!result.has(letters[i])) {
                result.set(letters[i], i);
            } else {
                i = result.get(letters[i]);
                result.clear();
            }
            
            if (max < result.size) {
                max = result.size;
            }
        }
        return result;
    */
};



console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring("bbbbbbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("cdd"))
console.log(lengthOfLongestSubstring("ckilbkd"))