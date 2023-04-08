var map1 = new Map([
    [1 , 10], [2 , 20] ,
    [3, 30],[4, 40]
    ]);

console.log(map1)

//adds an element using set() method
map1.set(5,50)

console.log(map1)

//has() method - checks whether map has key or not
console.log("Map has key - 1", map1.has(1))
console.log("Map has key - 6", map1.has(6))

//get() method - to get value of key
console.log("Get the value of key 1 - ", map1.get(1))
console.log("Get the value of key 6 - ", map1.get(6))

//delete() method - to delete element in map
console.log("Delete element with key 5 - ", map1.delete(5))

console.log("After deletion : " ,map1)

//entries() - used for returning an iterator object which contains all the [key, value] pairs of each element of the map
var mapItr = map1.entries()
console.log(mapItr)
console.log(mapItr.next().value)
console.log(mapItr.next().value)
console.log(mapItr.next().value)

//clear() - clears map
map1.clear()
console.log("Map after clear - " , map1)