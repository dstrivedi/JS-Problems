mainFunction = (callback) => {
    console.log("Operation starts ....");
    setTimeout(() => {
        callback("Operation complete ...")
    }, 1000);
}

callbackFunction = (result) => {
    console.log(result);
}

mainFunction(callbackFunction);