const a = 10

function constLog() {
    // a = 11
    //console.log(a) //10

    // console.log(a)// refernece error - cannot access a before initialization
    const a = 11
    console.log("inside function :",a) //11
}
if(true) {
    //a = 12 //assignment to constant variable

    const a = 14
    console.log("inside block:",a)//14
}

console.log("global: ",a) //10
constLog()

console.log("------------")

const obj = {
    prop1: 10,
    prop2: 9
}

// It is allowed
obj.prop1 = 3

console.log(obj)

// It is not allowed
/* 
obj = {
    b: 10,
    prop2: 9
}
*/