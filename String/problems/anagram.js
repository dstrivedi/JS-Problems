/**
 * Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */

/** using sort function */
const isAnagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

/** using loops */
const isAnagramUsingLoop = (str1,str2) => {
    if(str1.length != str2.length) return false
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    // console.log(str1,str2)
    for(let i = 0 ; i < str1.length ; i++) {
        if(str1[i] != str2[i]) return false
    }
    return true
}

console.log(isAnagram("listen",'silent'))
console.log(isAnagram('gram','arm'))

console.log(isAnagramUsingLoop('listen','silent'))
console.log(isAnagramUsingLoop('gram','arm'))