class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    size_of_list() {
        console.log(this.size)
    }

    add(data) {
        // creates a new node
        var node = new ListNode(data);

        // to store current node
        var current;

        // if list is Empty add the
        // data and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Enter valid index")
        } else {
            var node = new ListNode(data);
            var curr, prev;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;

                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        var curr = this.head;
        var prev;
        if (this.size == 0) {
            console.log("List is empty");
        } else {
            if (index == 0) {
                this.head = curr.next;
                this.size--;
            } else {
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next
            }
            this.size--;
        }
    }

    removeLastNode() {
        var curr = this.head;
        if (this.size == 0) {
            console.log("List is empty")
        } else {
            while (curr.next.next != null) {
                curr = curr.next;
            }
            delete curr.next;
            this.size--;
            return curr;
        }
        return -1;
    }

    removeElement(data) {
        var curr = this.head;
        if (this.size == 0) {
            console.log("list is empty");
        } else {
            if (data == this.head.data) {
                this.head = curr.next;
                this.size--;
            } else {
                var prev;
                while(data !== curr.data) {
                    prev = curr
                    curr = curr.next;
                }
                
                prev.next = curr.next
            }
            this.size--;
        }
    }

    indexOf(data) {
        var count = 0;
        var curr = this.head;

        while(curr !== null) {
            if(curr.data === data) return count
            count++;
            curr = curr.next;
        } 
        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(str, "NULL")
    }
}

var list = new LinkedList();

list.add(10);
list.add(11);
list.add(18);
list.add("Hello");

console.log(list.removeLastNode());
list.printList();
list.size_of_list();

list.insertAt("DSA", 3);
list.printList();

list.removeFrom(1);
list.printList();

list.removeFrom(0);
list.printList();

list.add("Hello");
list.add(100);
list.printList();

list.removeElement("Hello")
list.printList()