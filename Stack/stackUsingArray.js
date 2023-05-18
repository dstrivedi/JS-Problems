/*
    Stack is a linear data structure in which addition or removal of element follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out). 
*/

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Stack is underflow")
        } else {
            this.items.pop()
        }
    }

    isEmpty() {
        console.log("Stack is empty -> ",this.items.length === 0)
    }

    peek() {
        console.log("peek element in stack -> ",this.items[this.items.length - 1])
    }

    // the size of the stack
    size(){
        console.log("Size of the stac -> ",this.items.length);
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }

    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        console.log("Stack -> ",str);
    }
}

var s = new Stack()
s.isEmpty()

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push("hello")

s.printStack()

s.peek()

s.size()

s.clear()

s.printStack()

