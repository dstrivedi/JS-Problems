const twoPointer = (str) => {
    for(let i =0, j = i+1; i < str.length; ) {
        console.log(str.slice(i,j));
        i++;
        j++;
    }
}

console.log(twoPointer("abad"))