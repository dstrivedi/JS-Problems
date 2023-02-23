/*
    you can use the resolve function to fullfil the promise. The then function binds a callback to the promise and you can use the data given to the resolve function

    You can call resolve and reject multiple times, but this is useless. Once a promise is finished, it can't restart.
*/

let x = 0;
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (x === 0) {
            reject("value is zero");
            reject("value is zero -- 1");
            reject('value is zero -- 2');
        } else {
            resolve("hello world");
        }
    }, 2000);
});

// multiple callbacks
promise.then((data) => {
    console.log(data);
}).then(function (data) {
    console.log(data + ' 1');
}).then(function (data) {
    console.log(data + ' 2');
}).catch((err) => {
    console.log(err);
}).finally(()=>{
    console.log("always excutes!!")
});

console.log(promise)