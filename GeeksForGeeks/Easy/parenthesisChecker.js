function isParenthesisBalanced(s) {
    // code here
    const arr = [];
    if (s.length % 2 !== 0) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            arr.push(s[i]);
        } else {
            if (s[i] === ")" && arr[arr.length - 1] === "(") {
                arr.pop()
            } else if (s[i] === "}" && arr[arr.length - 1] === "{") {
                arr.pop()
            } else if (s[i] === "]" && arr[arr.length - 1] === "[") {
                arr.pop()
            } else {
                return false;
            }
        }
    }
    return arr.length === 0 ? true : false;
}

console.log(isParenthesisBalanced("{([])}")); 
console.log(isParenthesisBalanced("()"));
console.log(isParenthesisBalanced("([]"));
console.log(isParenthesisBalanced("}}"))