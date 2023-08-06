const name = "Hello, from outside";

const obj = {
    name: "Hello, World",
    greeting() {
        console.log(this.name)
    }
}

obj.greeting()

let greet = obj
greet.greeting()

let greeting = obj.greeting
greeting() //undefined