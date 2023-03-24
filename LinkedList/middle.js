var head = null;
var list = [];

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
        list.push(current.data)
        current = current.next;
    }
    console.log(str + "null")
}

const size_of = () => {
    var cnt = 0;
    var current = head;
    while(current !== null) {
        current = current.next
        cnt++;
    } 
    // console.log(cnt)
    return cnt
}

append(15);
append(18);
append("Hello");
append(11);
append("Drashti");
printList();
var size = size_of();
console.log(size);

var mid = Math.floor(size/2);
console.log("Middle element -> ", list[mid])