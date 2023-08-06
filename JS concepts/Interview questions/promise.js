const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

// Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));

/**
 * The above promises settled at the same time but one of them resolved and other one rejected. When you use .all method on these promises, the result will be short circuted by throwing an error due to rejection in second promise. But If you use .allSettled method then result of both the promises will be returned irrespective of resolved or rejected promise status without throwing any error.
 */
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));