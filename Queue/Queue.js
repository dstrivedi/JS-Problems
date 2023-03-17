/*
    A Queue works on the FIFO(First in First Out) principle. 
    Hence, it performs two basic operations which are the addition of elements at the end of the queue and the removal of elements from the front of the queue. 
    Like Stack, Queue is also a linear data structure. 
*/

class Queue {
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element) {
        // this.items[this.rear] = element
        // this.rear++
        this.items.push(element)
        console.log(element," inserted")
    }

    dequeue() {
        // let item = this.items[this.front]
        // delete this.items[this.front]
        // this.front++
        let item = this.items.shift()
        console.log(item, " deleted")
    }

    peek() {
        console.log("Peek element of the queue -> ", this.items[this.front])
    }

    size() {
        console.log("Size of the queue -> ", this.items.length)
    }

    printQueue() {
        let str = ""
        for(let i = 0 ; i < this.items.length ; i++) {
            str += this.items[i] + ""
        }
        console.log("Queue => ", this.items )
    }
}

let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

q.printQueue()

q.dequeue()

