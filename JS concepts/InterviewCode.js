// console.log("--------------------------code 1------------------------")
function func1(){
    setTimeout(()=>{
        // console.log("--------------------------code 1------------------------")
        console.log(x); //2
        console.log(y); //12
    },1000);

    var x = 2;
    let y = 12;
}
// func1(); //2 12

// console.log("\n-----------------------------code 2--------------------------")
function func2(){
    for(var i = 0; i < 3; i++){
        setTimeout(()=> console.log(i),2000);
    }
}
// func2(); //3 3 3 since variable declared with var keyword does not have block scope

// Code 3:

(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
}) //(); // 2 4 3 1

// console.log("\n-----------------------------code 4--------------------------")
function func2(){
    for(let i = 0; i < 3; i++){
        setTimeout(()=> console.log(i),2000);
    }
}
// func2(); //0 1 2

// Code 5:
console.log("\n-------------code 5----------------")
let x= {}, y = {name:"Ronny"},z = {name:"John"};
// console.log(x,y,z);
x[y] = {name:"Vivek"};
// console.log(x,y,z)
x[z] = {name:"Akki"};
// console.log(x,y,z)
console.log(x[y]); //{name: Akki} Both x[y] and x[z] are referencing the same property.

// Code 6:
console.log("\n------------------code 6----------------")
function runFunc(){
    console.log("1" + 1); //11
    console.log("A" - 1); //NaN
    console.log(2 + "-2" + "2"); 2-22
    console.log("Hello" - "World" + 78); //NaNSS
    console.log("Hello"+ "78"); //Hello78
}
runFunc();

//code 7
console.log("\n----------------code 7---------------------")
let a = 0;
let b = false;
console.log((a == b)); //true
console.log((a === b)); //false

//code 8
console.log("\n----------------------code 8-----------------")
var x2 = 23;
(function(){
    var x2 = 43;
    (function random(){
        x2++;
        console.log(x2); // x2 is hoisted and not initialzed yet so output is NaN
        var x2 = 21;
    })();
})(); 

//code 9
console.log("\n--------------------code 9--------------------")
function random(){
  var x1; // x1 is hoisted
  x1++; // x1 is not a number since it is not initialized yet
  console.log(x1); // Outputs NaN
  x1 = 21; // Initialization of x1
}

//code 10
console.log("\n--------------------code 10----------------")
let hero = {
    powerLevel: 99,
    getPower(){
        return this.powerLevel;
    }
}

let getPower = hero.getPower;
let getPowerBound = hero.getPower.bind(hero);
let hero2 = {powerLevel:42};
console.log(getPower()); //undefined since when the function is invoked, it is invoked referencing the global object:
console.log(getPowerBound()); //99
console.log(getPower.apply(hero2)); //42

//code 11
console.log("\n---------------------------code 11----------------------")
const a1 = function(){
    console.log(this); //global object
    const b = {
        //pointing to b as this is a normal function
        func1: function(){
            console.log("Inside b: ",this);
        }  
    }

    const c = {
        //global object as this is an arrow function
        func2: ()=>{
            console.log("Inside c :",this);
        }
    }

    b.func1();
    c.func2();
}
a1();

//code 12
console.log("\n-----------------code 12---------------")
const b1 = {
    name:"Vivek",
    f: function(){
        var self = this;
        console.log(this.name); //Vivek
        (function(){
            console.log(this.name); //undefined
            console.log(self.name); //Vivek
        })();
    }
}
b1.f(); //Only in the IIFE inside the function f, this keyword refers to the global/window object

//code 13
console.log("\n--------------------code 13------------------------");
(function(a2) {
    return (function(){
        console.log(a2);
        a2 = 23;
    })()
})(45);

//code 14
console.log("\n---------------------code 14-----------------------");


