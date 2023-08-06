let fibonacci = (num) => {
    if(num === 1){
        return 0;
    } 
    if(num === 2) {
        return 1
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(9));
// console.log(fibonacci(12));
// console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(8))

console.log("-------------------- with for loop ------------")
let fibonacci1 = (num) => {
    let num1 = 0;
    let num2 = 1;
    let sum; 
    for(let i = 2; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2
}

// console.log(fibonacci1(9));
// console.log(fibonacci1(12));
// console.log(fibonacci1(3))
console.log(fibonacci1(5))
console.log(fibonacci1(8))

console.log("-------------------- with while loop ------------")
let fibonacci2 = (num) => {
    if(num === 1) return 0
    if(num === 2) return 1
    let num1 = 0;
    let num2 = 1;
    let sum; 
    let i = 2;
    while(i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2
}

// console.log(fibonacci1(9));
// console.log(fibonacci1(12));
// console.log(fibonacci1(3))
console.log(fibonacci2(5))
console.log(fibonacci2(8))
