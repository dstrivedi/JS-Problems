// asynchronous code in JavaScript using setInterval

/*  setInterval has the same behavior as setTimeout but the code is executed multiple times. 
    You have to call clearInterval to kill the timer.
*/
let counter = 0;

let timer = setInterval(function() {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am a synchronous message');