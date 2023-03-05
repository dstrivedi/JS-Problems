const reverseWord = (str) => {
    var reverse_str = "";
    for (let i = str.length-1; i >= 0; i--) {
        reverse_str += str[i];
    }

    return reverse_str;

    //using method
    // return str.split("").reverse().join("");
}

console.log(reverseWord("GeeksForGeeks"));
console.log(reverseWord("Shah"));