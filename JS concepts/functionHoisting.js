message()

function message() {
    console.log("Hello");
}
// function message() {
//     console.log("Bye");
// } 

//Bye
// As part of hoisting, initially JavaScript Engine or compiler will store first function in heap memory but later rewrite or replaces with redefined function content.

console.log("-------------")

//fun() 
//fun is not a function

var fun = function() {
    let name = "JavaScript"
    console.log(name)
}

// fun1() 
// cannot access fun1 before initialization

let fun1 = function() {
    let lastname = "trivedi"
    console.log(lastname)
}