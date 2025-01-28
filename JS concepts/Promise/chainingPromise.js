var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';
})

.then(function(data3) {
    console.log('data3', data3);
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}


console.log("---------------calling url using promises ---------------")

const getUserData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users[0])
}

getUserData().then((result) => console.log(result))
