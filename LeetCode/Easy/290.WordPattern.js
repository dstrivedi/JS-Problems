/**
 * 290. Word Pattern
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false
 */

function wordPattern(p, s) {
    let map = new Map();
    let map2 = new Map();
    let arr = s.split(" ");
    console.log(p.length, arr.length)
    if (p.length !== arr.length) return false;
    for (let i = 0; i < p.length; i++) {
        if (map.has(p[i])) {
            if (map.get(p[i]) !== arr[i]) {
                console.log(map);
                return false;
           }
        } else {
            map.set(p[i], arr[i]);
        }
        if (map2.has(arr[i])) {
          if (map2.get(arr[i]) !== p[i]) {
            console.log(map2);
            return false;
          }
        } else {
          map2.set(arr[i], p[i]);
        }
    }
    console.log(map, map2);
    return true;
}

console.log(wordPattern('abba', 'cat dog dog cat'));
console.log(wordPattern('abba', 'cat dog cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'))
console.log(wordPattern("aaa", 'aa aa aa aa'));
console.log(wordPattern("abba", 'dog cat cat dog'));