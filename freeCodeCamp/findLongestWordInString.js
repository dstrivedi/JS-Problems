function findLongestWordLength(str) {
    let arr = str.split(" ");
    let max = arr[0].length;
    for(let i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
            console.log(arr[i]);
           max = arr[i].length;
       }
    }
    // console.log(arr[max])
    return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
