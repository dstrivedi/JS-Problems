function namee()  {
    let name = "Drashti"
    console.log(this)
}

namee()

const user = {
    name: 'John',
    eat() {
        console.log(this)
        var self = this
        var eatFruit = () => {
            console.log(this)
        }
        eatFruit()
    }
}

user.eat()