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
    constructor(data, next) {
        this.data = (data===undefined) ? 0 : data;
        this.next = (next === undefined) ? null:next;
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

var convertNodeListToArray = (listNode) => {
    let returnArray = [];
    if(listNode.next != null) {
        returnArray = returnArray.concat()
    }
}

const addTwoNumbers_usingArr = (l1,l2) => {
    console.log(l1, l2)
    const converetListToArr = (node) => {
        let returnedArr = [];
        if(node.next != null) {
            returnedArr = returnedArr.concat(converetListToArr(node.next))
        }
        returnedArr.push(node.data)
        return returnedArr
    }

    let l1Arr = converetListToArr(l1.head)
    let l2Arr = converetListToArr(l2.head)

    let sum = parseInt(l1Arr.join('')) + parseInt(l2Arr.join(''))
    sum = sum.toString().split('')

    let newList = new Linkedlist();

    for(let i = sum.length - 1 ; i >=0 ; i--) {
        newList.append(sum[i])
    }

    return newList
    
}

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

let ans = addTwoNumbers_usingArr(first,second)
console.log("Adding above lists : ")
ans.printList()
// console.log(ans)
// console.log(ans)a

console.log("\n------------------\n")

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

var ans1 = addTwoNumbers_usingArr(l1,l2)
console.log("Adding above lists : ")
ans1.printList()
// console.log(ans1)

console.log("\n------------------\n")

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

var ans3 = addTwoNumbers_usingArr(num1, num2)
console.log("Adding above lists : ")
// console.log(ans3)
ans3.printList()
console.log("\n------------------\n")

