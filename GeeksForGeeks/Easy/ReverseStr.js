
function reverseString(s) {
    // code here
    // return s.split("").reverse().join("")

    // using recursion
    if (s === "") return "";
    return reverseString(s.slice(1)) + s[0];
}
console.log(reverseString("Geeks"));
console.log(reverseString('for'));
console.log(reverseString('a'));