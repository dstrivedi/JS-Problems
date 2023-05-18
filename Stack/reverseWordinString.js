// Given a String. Reverse each word in it where the words are separated by dots/space.

// Example 1:

// Input:
// S = "i.like.this.program.very.much"
// Output: 
// i.ekil.siht.margorp.yrev.hcum
// Explanation: 
// The words are reversed as
// follows:"i" -> "i","like"->"ekil",
// "this"->"siht","program" -> "margorp",
// "very" -> "yrev","much" -> "hcum".

// Input : Hello World
// Output : olleH dlroW

const reverseWordinString = (str) => {
    let stack = [];
    let new_str = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] == " " || str[i] == ".") {
            while (stack.length > 0) {
                new_str += stack.pop()
            }
            new_str += str[i]
        } else {
            stack.push(str[i])
        }
    }
    while (stack.length > 0) {
        new_str += stack.pop()
    }
    return new_str
}

console.log(reverseWordinString("Hello world"))
console.log(reverseWordinString("Geeks.for.geeks"))
console.log(reverseWordinString("i.like.this.program.very.much"))