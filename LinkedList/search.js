var head = null;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertAtFront = (data) => {
    var new_node = new Node(data);
    new_node.next = head;
    head = new_node;
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

const search = (data) => {
    if (head.data === data) {
        return "Yes present in the linkedlist at position 0."
    } else {
        var count = 0;
        var current = head;
        while (current.next != null) {
            if (current.data == data) {
                return "Yes present in the linkedlist at position " + count
            } else {
                count += 1;
                current = current.next;
            }
        }
    }
    return "Not present in the linkedlist."
}

const search_recursion = (head, data) => {
    if(head == null) {
        return false;
    } 
    if(head.data == data) {
        return true;
    }
    return search_recursion(head.next, data)
}

insertAtFront(12);
insertAtFront(13)
append(15);
append(18);
printList();

console.log(search(12));
console.log(search(1));
console.log(search_recursion(head, 12))
console.log(search_recursion(head, 1))