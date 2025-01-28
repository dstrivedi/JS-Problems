/**
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Explanation:

Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let firstRow = /^[qwertyuiop]+$/i;
    let secondRow = /^[asdfghjkl]+$/i;
    let thirdRow = /^[zxcvbnm]+$/i;
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].match(firstRow)) {
            result.push(words[i])
        } else if (words[i].match(secondRow)) {
            result.push(words[i])
        } else if (words[i].match(thirdRow)) {
            result.push(words[i])
        }
    }
    return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf", "sfd"]));