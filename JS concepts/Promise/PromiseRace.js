const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one')
})

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 200, 'two')
})

Promise.race([firstPromise, secondPromise])

.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log(err)
})

const promiseAll = Promise.all([firstPromise, secondPromise])

promiseAll
.then((res) => {
    console.log(res)
}) //['one','two']

promiseAll.then(function(data) {
    data.forEach((d) => {
        console.log(d)
    })
})
//one
//two