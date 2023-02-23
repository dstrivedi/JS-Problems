/* 
    Sometimes you have multiple asynchronous tasks to perform and you have to start something when every task is done. When using promises, you can do that with Promise.all. Run the following code to understand the basics of it.
*/

function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolving', delay);
            resolve('done ' + delay);
        }, delay);
    });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
});