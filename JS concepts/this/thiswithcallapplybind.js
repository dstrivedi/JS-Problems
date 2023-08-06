
const object1 = {
    message: 'Hello, World!',
    // logMessage() {
    //     console.log(this.message); // What is logged?
    // }
};

object1.logMessage = logMessage
object1.logMessage()


function logMessage() {
    console.log(this.message); // "Hello, World!"
}

logMessage.call(object1)
logMessage.apply(object1)

const bindLogMessage = logMessage.bind(object1)
bindLogMessage()