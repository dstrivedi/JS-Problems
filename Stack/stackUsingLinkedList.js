import {Node, LinkedList} from '../LinkedList/ListNode.js';

export class Stack{
    constructor() {
        this.linkedList = new LinkedList()
        this.size = 0
    }

    isEmpty() {
        if(this.size == 0) {
            return true
        } else {
            return false
        }
    }

    push(data) {
        let node = new Node(data)
        if(this.linkedList.head == null) {
            this.linkedList.head = node;
        } else {
            node.next = this.linkedList.head;
            this.linkedList.head = node
        }
        this.size += 1
    }

    getSize() {
        return this.size
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack is empty."
        }
        let poppedItem = this.linkedList.head;
        this.linkedList.head = this.linkedList.head.next;
        this.size -= 1;
        return poppedItem.data + " deleted successfully from the stack."
    }

    peak() {
        if(this.isEmpty()) {
            return "Stack is empty."
        }
        return "Peak element in stack : " + this.linkedList.head.data
    }

    display() {
        let current = this.linkedList.head;
        let output = "";
        while(current) {
            output += current.data + " -> "
            current = current.next
        }
        return output.substring(0,output.length-4)
    }

}

let customStack = new Stack()

customStack.push(10)
customStack.push([2,3,4,5])
customStack.push("Hello World")
customStack.push(30)
customStack.push("GeeksForGeeks")
console.log("Initial stack : ", customStack.display())
console.log("Size of the stack : " ,customStack.getSize())

console.log(customStack.pop())
console.log(customStack.display())
console.log(customStack.peak())
