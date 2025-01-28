const LongestPalindromicSubstr = (s) => {
    let ans =  []
    //leaving char from both the end
    let j;
    for(let i = 0 ; i < s.length - 1; i++) {
        j = i + 1
        if(isPalindrome(s.substring(i))) {
            ans.push(s.substring(i))
        }
        while(j < s.length) {
            if(isPalindrome(s.substring(i,j))) {
                ans.push(s.substring(i,j))
            }
            j+=1
        }
    }
    return ans.sort((a,b) => b.length - a.length)[0]
}

const isPalindrome = (str) => {
    // return str.length === 1 ? str : str.split("").reverse().join("") === str
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

console.log(LongestPalindromicSubstr("babad"))
console.log(LongestPalindromicSubstr("forgeeksskeegfor"))
console.log(LongestPalindromicSubstr("cbbd"))
console.log(LongestPalindromicSubstr("abb"))
console.log(LongestPalindromicSubstr("ac"))
console.log(LongestPalindromicSubstr("aacabdkacaa"))
//console.log(LongestPalindromicSubstr("kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"))

const LongestPalindromicStr = (s) => {
    let longestPal = [];
    let str;
    /**
     * This function, getPalindromeStr, takes two indices lp and rp as input, representing the left and right pointers of a potential palindromic substring. It uses a while loop to expand these pointers outwards while checking if the characters at those positions are equal. This process is used to find palindromic substrings centered at different positions in the input string.

    After the loop, str is assigned the substring between lp+1 and rp indices (both exclusive). The condition if(rp-lp > str.length) checks if the length of the currently identified palindrome is greater than the length of str. If true, it means that a longer palindrome has been found, so str is added to the longestPal array.
     * @param {*} lp 
     * @param {*} rp 
     */
    const getPalindromeStr = (lp,rp) => {
        while(lp >= 0 && rp < s.length && s[lp] == s[rp]) {
            lp--;
            rp++;
        }
        str = s.slice(lp+1, rp)
        console.log(lp, rp,str)
        if(rp-lp > str.length) longestPal.push(str)
    }
    
    const n = s.length;
    if (n === 1) return s;

    for(let i = 0 ; i < n ; i++) {
        getPalindromeStr(i,i+1)
        console.log("second")
        getPalindromeStr(i,i)
    }
    console.log(longestPal)
    return longestPal.sort((a,b) => b.length - a.length)[0]
}

console.log("===============================================================")
// console.log(LongestPalindromicStr("babad"))
// console.log(LongestPalindromicStr("forgeeksskeegfor"))
console.log(LongestPalindromicStr("cbbd"))
// console.log(LongestPalindromicStr("abb"))
// console.log(LongestPalindromicStr("ac"))
// console.log(LongestPalindromicStr("aacabdkacaa"))
// console.log(LongestPalindromicStr("kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"))