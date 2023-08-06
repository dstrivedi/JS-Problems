const reverseString = (str) => {
    let words = [];
    let word = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] == " " || str[i] == ".") {
            words.push(word);
            words.push(str[i]);
            word = "";
        } else {
            word += str[i];         
        }
    }  

    if(word.length > 0) {
        words.push(word)
    }

    var reverse_str = "";
    for (let i = words.length-1; i >= 0; i--) {
        reverse_str += words[i];
    }

    return reverse_str;
    
}

// console.log(reverseString("geeks quiz practice code"));
console.log(reverseString("i love programming very much"));
console.log(reverseString("i.like.this.program.very.much"));