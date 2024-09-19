/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor(head =null) {
        this.head = head;
    }

    append = function(data) {
        var new_node = new ListNode(data);
        if(this.head === null) {
            this.head = new_node
        } else {
            var current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = new_node
        }
    }

    printList = function() {
        var current = this.head;
        var str = "";
        while(current != null) {
            str += current.data + "->";
            current = current.next;
        }
        console.log(str + "null")
    }
}

var addTwoNumbers = function(l1, l2) {
    let num1 = 0;
    let num2 = 0;

    while(l1.head != null) {
        num1 = num1 * 10 + l1.head.data;
        l1.head = l1.head.next;
    }

    while(l2.head != null) {
        num2 = num2 * 10 + l2.head.data;
        l2.head = l2.head.next;
    }

    let num3 = num1 + num2;
    let new_list = new Linkedlist();
    console.log(num3)

    //conver num3 to linkedlists
    while(num3 !== 0) {
        let last = num3 % 10;
        new_list.append(last)
        num3 = Math.floor(num3 / 10);
    }
    
    return new_list
};

var first = new Linkedlist();
var second = new Linkedlist();

first.append(2);
first.append(4);
first.append(3);
first.printList();

second.append(5);
second.append(6);
second.append(4);
second.printList()

let ans = addTwoNumbers(first,second)
ans.printList()

var l1 = new Linkedlist()
l1.append(9)
l1.append(9)
l1.append(9)
l1.append(9)
l1.append(9)
l1.append(9)
l1.append(9)
l1.printList()

var l2 = new Linkedlist();
l2.append(9)
l2.append(9)
l2.append(9)
l2.append(9)
l2.printList()

var ans1 = addTwoNumbers(l1,l2)
ans1.printList()

var num1 = new Linkedlist()
num1.append(2)
num1.append(4)
num1.append(9)
num1.printList()

var num2 = new Linkedlist()
num2.append(5)
num2.append(6)
num2.append(4)
num2.append(9)
num2.printList()

var ans3 = addTwoNumbers(num1, num2)
ans3.printList()

