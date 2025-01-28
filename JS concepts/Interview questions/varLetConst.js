var num1 = 50;
var num2 = 66;
function foo(num, num1) {
  //50, 66
  num = 100; //50
  num1 = 100; //100
  num2 = 100;
}
foo(num1, num2);
// console.log(num);
console.log(num1);
console.log(num2);

var a = 10;
function foo(p) {
  console.log(typeof p);
  console.log(typeof b);
//   let b = 10;
}

foo(a);