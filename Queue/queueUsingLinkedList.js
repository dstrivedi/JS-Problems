import {Node, LinkedList} from '../LinkedList/ListNode.js';

class Queue{
    constructor() {
        this.linkedList = new LinkedList();
        this.size = 0;
    }

    isEmpty() {
        if(this.size == 0){
            return true
        } else {
            return false
        }
    }

    getSize() {
        return this.size
    }

    enqueue(value) {
        let node = new Node(value);
        if(this.linkedList.head == null) {
            this.linkedList.head = node;
            this.linkedList.tail = node;
        } else {
            this.linkedList.tail.next = node;
            this.linkedList.tail = node;
        }
        this.size += 1
    }

    display() {
        if(this.isEmpty()) {
            return "Queue is empty."
        }
        let current = this.linkedList.head;
        let output = "";
        while(current) {
            output += current.data + " -> "
            current = current.next;
        }
        return output.substring(0,output.length-4)
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Queue is empty."
        } 
        let poppedItem = this.linkedList.head.data;
        this.linkedList.head = this.linkedList.head.next;
        return poppedItem + " deleted successfully from the queue."
    }

    peak() {
        if(this.isEmpty()) {
            return "Queue is empty."
        } 
        return "Peak element in queue : " + this.linkedList.head.data;
    }
}

let customQueue = new Queue();

customQueue.enqueue(10);
customQueue.enqueue(1000);
customQueue.enqueue("Hello Javascript");
customQueue.enqueue("Python")
console.log("Initial queue: " + customQueue.display())
console.log("Size of the queue : " + customQueue.getSize())

console.log(customQueue.dequeue())
console.log(customQueue.peak())
console.log(customQueue.dequeue())
console.log(customQueue.display())