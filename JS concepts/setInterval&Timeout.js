function job(callback1, callback2) {
    let cnt = 0;
    setTimeout(function () {
        callback1();
    }, 2000);

    let nInterval = setInterval(function () {
        cnt += 1;
        callback2();
        if (cnt >= 3) {
            clearInterval(nInterval);
        }
    }, 1000);
}

fun1 = () => {
    console.log("Called func1 ...")
}

fun2 = () => {
    console.log("Called func2 ...")
}

job(fun1, fun2)