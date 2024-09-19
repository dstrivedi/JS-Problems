
// JS code

/**
 * get maxCount or frequency of a char from a string
*/
const getMaxCountChar = (count) => {
    let maxChar = "";
    let maxCount = 0;
    for(let i = 0 ; i < 26; i++) {
        if(count[i] > maxCount) {
            maxCount = count[i]
            maxChar = String.fromCharCode(i + 'a'.charCodeAt(0))
        }
    }
    return [maxCount, maxChar];
}

const rearrangeString = (str) => {
    //count array for string character's frequency
    count = new Array(str.length).fill(0)

    //traversing string and count char and saving it to count array
    for(let i = 0 ; i < str.length; i++) {
        count[str[i].charCodeAt(0) - ('a').charCodeAt(0)] += 1
    }    

    //calling getMaxCount by passing count array and getting maxChar and maxCount
    let [maxCount, maxChar] = getMaxCountChar(count);
    
    //maxCount should be greater than half of the string length
    if(maxCount > Math.floor((str.length+1)/2)) return false;

    //creating new_str array for saving the result
    let new_str = new Array(str.length);

    //placing maxChar on the even index of the string
    let ind = 0;
    while(maxCount) {
        new_str[ind] = maxChar;
        ind += 2;
        maxCount -= 1;
    }

    //after placing maxChar, setting maxChar frequency to 0
    ind = 1
    count[maxChar.charCodeAt(0) - 'a'.charCodeAt(0)] = 0

    //placing other character on the odd position of the string
    for(let i = 0 ; i < 26; i++) {
        while(count[i] > 0) {
            new_str[ind] = String.fromCharCode(i + 'a'.charCodeAt(0));
            ind += 2;
            count[i] -= 1;
            
        }
    }
    return new_str.join("")
}


console.log(rearrangeString("aab"))
console.log(rearrangeString("aaabc"))
console.log(rearrangeString("aaabb"))