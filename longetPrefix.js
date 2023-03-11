const longestCommonPrefix = (strs) => {
    let pre = "";    
    // console.log("New  - ")
    //sort = strs.sort((a,b) => a.length - b.length);
    // console.log(sort)
    // var sortestStr = sort[0];
    // while(!strs.every((string) => string.startsWith(sortestStr))) {
    //     console.log(sortestStr)
    //     if(sortestStr.length === 0) return;
    //     sortestStr= sortestStr.slice(0,-1)
    //     console.log(sortestStr)
    // }
    // return sortestStr;
    if (strs === null || strs.length === 0) return pre
    for (let i = 0; i < strs[0].length; i++) {
        // console.log(strs[0][i]);
        for (let j = 1; j< strs.length; j++) {
            // console.log(strs[j])
            // console.log(strs[j][i], strs[0][i])
            if (strs[j][i] !== strs[0][i]) 
                return pre
        }
        pre += strs[0][i]
    }
    return pre
};

const alternate = (strs) => {
    if(strs == null) return ''
    for(let i = 0; i < strs[0].length; i++) {
        if(!strs.every((str) => str[i] === strs[0][i])){
            return strs[0].slice(0,i)
        }
    }   
    return strs[0]
}

console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["ab", "a"]))

console.log(alternate(["a"]))
console.log(alternate(["flower", "flow", "flight"]))
console.log(alternate(["dog", "racecar", "car"]))
console.log(alternate(["ab", "a"]))