// let message = 'Hello World!';
// message[0] = 'J';
// console.log(message)

let naam = 'John';
naam = naam + ' Smith';
console.log(naam);

function second() {
	let message;
    console.log(message);
}

function first() {
    let message="first";
    second();
    console.log(message);
}

let message = "default";
first();
console.log(message);

console.log("------------------")

let a = 10;
function letLog() {
    // console.log(a) //reference error : Cannot access 'a' before initialization
    
    let a = 11 //can be redeclared as scope is diff
    console.log(a) //10
}
if(true) {
    //console.log(a) // 10

    //console.log(a) // reference error
    let a = 122 //can be redeclared as scope is diff
    console.log(a) 
}

//let a = 12 //can not be redclared as scope is same
console.log(a)
letLog()