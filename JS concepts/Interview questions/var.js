var currentCity = "NewYork";
console.log(currentCity)

var changeCurrentCity = function() {
    console.log('Current City:', currentCity); //undefined
    var currentCity = "Singapore";
    console.log('Current City:', currentCity); //Singapore
}

changeCurrentCity();

console.log("-------------------------")

function second() {
	var message;
    console.log(message); //undefined
}

function first() {
	var message="first";
    second();
    console.log(message); //first
}

var message = "default";
first();
console.log(message); //default

console.log("----------------------")
var a = 10
if(true) {
    console.log(a)
    var a = 11
}

function varLog() {
    console.log(a)
    var a = 12
}
console.log(a)
varLog()