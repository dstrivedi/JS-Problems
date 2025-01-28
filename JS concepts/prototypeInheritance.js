function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function (name) {
    console.log("The " + this.name + " makes a sound");
}

function Dog(name) {
    this.name = name;
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.bark = function () {
    console.log("Woof");
}

const bolt = new Dog("Bolt");
bolt.makeSound();
bolt.bark();