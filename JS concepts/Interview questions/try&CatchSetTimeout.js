try{
    setTimeout(() => {
        console.log('try blcok');
        throw new Error('An exception is thrown')
    }, 1000)
} catch(err) {
    console.log('Error', err)
}


/*If you put setTimeout and setInterval methods inside the try clause and an exception is thrown, the catch clause will not catch any of them. This is because the try...catch statement works synchronously, and the function in the above code is executed asynchronously after a certain period of time. Hence, you will see runtime exception without catching the error. To resolve this issue, you have to put the try...catch block inside the function as below,You can use .catch() function in promises to avoid these issues with asynchronous code. */
setTimeout(() => {
    try {
        console.log('try block');
        throw new Error(`An exception is thrown`)
    } catch(err) {
        console.log('Error: ', err);
    }

}, 1000);