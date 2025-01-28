/**Isomorphic Strings
Difficulty: EasyAccuracy: 34.21%Submissions: 193K+Points: 2
Given two strings s1 and s2, check if these two strings are isomorphic to each other.

If the characters in s1 can be changed to get s2, then two strings, s1 and s2, are isomorphic. A character must be completely swapped out for another character while maintaining the order of the characters. A character may map to itself, but no two characters may map to the same character.

Examples:

Input: s1 = "aab", s2 = "xxy"
Output: true
Explanation: There are two different characters in aab and xxy, i.e a and b with frequency 2 and 1 respectively.
Input: s1 = "aab", s2 = "xyz"
Output: false
Explanation:  There are two different characters in aab but there are three different charactersin xyz. So there won't be one to one mapping between s1and s2.
Input: s1 = "aac", s2 = "xyz"
Output: false
Explanation: There are two different characters in aab but there are three different charactersin xyz. So there won't be one to one mapping between s1and s2. */


function Isomorphic(s1, s2) {
    if (s1.length !== s2.length) return false;
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s1.length; i++) {
        if (map1.has(s1[i])) {
            if (map1.get(s1[i]) !== s2[i]) {
                console.log(map1, map2);
                return false;
            }
        } else {
            map1.set(s1[i], s2[i])
        }
        if (map2.has(s2[i])) {
            if (map2.get(s2[i]) !== s1[i]) {
                console.log(map1, map2);
                return false;
            }
        } else {
            map2.set(s2[i], s1[i])
        }
    }
    console.log(map1, map2);
    return true;
}

console.log(Isomorphic("aab", "xxy"))
console.log(Isomorphic("aab", "xyz"))
console.log(Isomorphic("aac", "xyz"))
console.log(Isomorphic("iavssdcw", "efhduftt"));
console.log(Isomorphic('foo', 'bar'));