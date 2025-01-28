const rotation = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    let s1_left = "";
    for (let i = 0; i < s1.length; i++) {
        s1_left = s1.slice(i) + s1.slice(0, i)
        if(s1_left === s2) return true
    }
    return false
}

console.log(rotation("abcd", "cdab"))
console.log(rotation("aab", "aba"))
console.log(rotation("abcd", "acbd"))

