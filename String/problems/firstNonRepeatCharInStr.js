/**
 * Given a string S consisting of lowercase Latin Letters. Return the first non-repeating character in S. If there is no non-repeating character, return '$'.

    Example 1:

    Input:
    S = hello
    Output: h
    Explanation: In the given string, the
    first character which is non-repeating
    is h, as it appears first and there is
    no other 'h' in the string.
 */

const nonRepeat = (s) => {
    if(s.length === 1) return s[0]
    for(let i = 0 ; i < s.length-1 ;i ++) {
        //console.log(s.indexOf(s[i]), s.lastIndexOf(s[i]))
        //console.log(s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1))
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i]) ) {
            return s[i]
        }
    }
}

console.log(nonRepeat("hello"))
console.log(nonRepeat("geeksforgeeks"))
console.log(nonRepeat("uhgxusrtgqitrtpiuqxmpdmyumdputxumlxnrnfwgeuslwdysxhucykkmzfdourroagoan"))