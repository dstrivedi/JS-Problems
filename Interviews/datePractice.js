// How do you display the current date in javascript

var date = new Date();
console.log(date) //How do you display the current date in javascript
console.log("Converting to other timezone: " , date.toLocaleDateString("en-GB", {timeZone:"UTC"}))

console.log("full date")
var mm= date.getMonth() + 1 //Jan is "0"
var dd = date.getDate()
var yyyy = date.getFullYear()
var today = mm + "/" + dd + "/" + yyyy
console.log(today)

// You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)
console.log("--------------comparing date ---------------")
var d1 =  new Date();
var d2 = new Date();
console.log(d1.getTime() == d2.getTime())
console.log(d1.getTime() === d2.getTime())
console.log(d1 === d2)