var head = null;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const append = (data) => {
    var new_node = new Node(data)
    if (head == null) {
        head = new_node
    } else {
        var current = head;
        while (current.next !== null) {
            current = current.next
        }
        current.next = new_node
    }
}

const printList = () => {
    var current = head;
    var str = ""
    while (current !== null) {
        str += current.data + " -> "
        current = current.next;
    }
    console.log(str + "null")
}

const reverse = () => {
    // 15 -> 18 -> Hello -> 11  -> null
    var prev = null;
    var current = head; //15
    var next = null;
    while(current !== null) { // 
        next = current.next; //18 Hello 11 Drashti
        current.next = prev; //null 15 18 Hello 11
        prev = current; //15 18 Hello 11 Drashti
        current = next;//18 Hello 11 Drashti null -> loop will stop from here
    }
    head = prev;
    var str = "";
    var curr = head;
    while (curr !== null) {
        str += curr.data + " -> "
        curr = curr.next;
    }
    console.log("Reverse Linkedlist : \n" + str + "null")
}

append(15);
append(18);
append("Hello");
append(11);
append("Drashti");
printList();

reverse();