//Object constructor
var obj = new Object();

//Object's create method
var obj_create = Object.create(null);

//object literal syntax
var obj_literal = {
    name:'Drashti',
    id:123
}

//function constructor
function Person(name) {
    this.name = name;
    this.age = 21;
}
let per = new Person("Hem")

//class
class Person1 {
    constructor() { }
}
Person1.prototype.name="sudheer"
let person1 = new Person1()

//singleton pattern
var singleton_obj = new (function() {
    this.name="Trivedi"
})()