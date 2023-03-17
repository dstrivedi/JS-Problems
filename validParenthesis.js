const validParenthesis = (str) => {
    const arr = [];
    if(str.length % 2 !== 0) return false
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "(" || str[i] === "{" || str[i] === "[") {
            arr.push(str[i])
            // console.log(arr)
        } else {
            if(str[i] === ")" && arr[arr.length - 1] === "(") {
                // console.log(str[i])
                // arr.push(str[i])
                arr.pop()
                // arr.splice(arr.indexOf("("),1)
                // console.log(arr)
            } else  if(str[i] === "]" && arr[arr.length - 1] === "[") {
                // console.log(str[i])
                // arr.push(str[i])
                arr.pop()
                // arr.splice(arr.indexOf("["),1)
                // console.log(arr)
            } else  if(str[i] === "}" && arr[arr.length - 1] === "{") {
                // console.log(str[i])
                // arr.push(str[i])
                arr.pop()
                // arr.splice(arr.indexOf("{"),1)
                // console.log(arr)
            } else {
                return false
            }
        }
    }
    return arr.join("").length === 0
}


console.log(validParenthesis('(}'))
console.log(validParenthesis("([)]"))
console.log(validParenthesis('()[]{}'))
console.log(validParenthesis("]"))
console.log(validParenthesis("({{{{}}}))"))
console.log(validParenthesis("([}}])"))
