
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function failureCallback() {
    console.log("This is failure callback");
}

wait(4 * 1000).then(() => {
    console.log("waited for 4 seconds");
    throw new Error("error occurred");
}).catch(() => {
    failureCallback();
});

wait(2 * 1000).then(() => console.log("waited for 2 seconds"));