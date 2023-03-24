export var head = null;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export const append = (data) => {
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

export const printList = () => {
    var current = head;
    var str = ""
    while (current !== null) {
        str += current.data + " -> "
        current = current.next;
    }
    console.log(str + "null")
}

