function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};



greet.call(obj); // cats typically sleep between 12 and 16 hours
greet.call({animal: "dogs",sleepDuration: "10 to 14 hours"})

console.log("-------------------")
//call() method allows an object to use the method (function) of another object.
var person = {
    age: 23,
    getAge: function(){
        return this.age;
    }
}        
var person2 = {age:  54};
person.getAge.call(person2);      
// Returns 54  

console.log("----------------")
//call() accepts arguments:
function saySomething(message){
    return this.name + " is " + message;
}     
var person4 = {name:  "John"};     
saySomething.call(person4, "awesome");
  // Returns "John is awesome"  