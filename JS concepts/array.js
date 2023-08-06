var arr1 = "john".split(''); //[j,o,h,n]
var arr2 = arr1.reverse(); //[n,h,o,j]
console.log(arr1, arr2)

var arr3 = "jones".split(''); //[j,o,n,e,s]
arr2.push(arr3); //[n,h,o,j,[j,o,n,e,s]
console.log("arr1: " ,arr1, " arr2 : " , arr2, " arr3 : ",arr3)

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //5 , [j,o,n,e,s]
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //5 , [j,o,n,e,s]

console.log("above can be done by spread operator")
var a = "john".split('')
var b = [...a].reverse()
var c = "jones".split('')
b.push(c)
console.log("a: ", a , " b: ", b)

console.log("a: length=" + a.length + " last=" + a.slice(-1)); //5 , [j,o,n,e,s]
console.log("b: length=" + b.length + " last=" + b.slice(-1)); //5 , [j,o,n,e,s]
