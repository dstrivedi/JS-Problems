/**
 * Sometimes you may want to invoke a function and insure it always maintains a particular ‘this’ value. 
 * 
 * By invoking a method with .bind(), we wrap the original function with a new function that ensures the original function is called with the specified ‘this’ value.
 * 
 * When the code is run below, the printName() function returns “Matthew” because it was invoked at the global   scope and the name variable was assigned the value “Matthew” at the global scope:
 */

let name = "Matthew"
// this.name = "Matthew";
const person = {
    name: "Mark",
    age : 21,
    getName(){
        return this.name
    }
}

const printName = person.getName
// console.log(printName()) 
//Matthew - pointing outer scope

//with bind - we can pass the specified 'this' value and call the original function
const boundName = person.getName.bind(person)
console.log(boundName()) // Mark

var pokemon = {
    name: "Pika",
    lastname: "Chu",
    getPokemon: function() {
        var fullname = this.name + " " + this.lastname
        return fullname
    }
}

// pokemon.getPokemon()

var pokemonName = function() {
    console.log(this.getPokemon() + " I choose you")
}

var  logPokemonName = pokemonName.bind(pokemon)
logPokemonName()