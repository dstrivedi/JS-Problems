/**
 * remove duplicates from list
 */

/**
 * Definition for singly-linked list.
 * */
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function printList(node) {
    let str = ""
    while(node != null) {
        str += node.val + "->"
        node = node.next
    }
    console.log(str + "null")
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates_usingArr = function(head) {
    let mainArr = [];

    const listToArr = (ele) => {
        mainArr.push(ele.val);
        if(ele.next != null) {
            listToArr(ele.next)
        }
    }

    for(let i = 0 ; i < head.length; i++) {
        if(head[i].next != null){
            listToArr(head[i])
        } 
    }

    mainArr = [...new Set(mainArr)].sort((a,b) => a - b);
    
    let newList = null;
    for(let i = mainArr.length-1 ; i >= 0; i--) {
        newList = new ListNode(mainArr[i], newList)
    }
    return newList;
};

function deleteDuplicates(head) {
    //empty list
    if(head == null)
    return null;
    let cur = head;
    while(cur.next != null) {
        if(cur.val == cur.next.val) {
            let temp = cur.next.next;
            let nodeToDel = cur.next;
            delete(nodeToDel);
            cur.next = temp;
        } else {
            cur = cur.next
        }
    }
    return head;
}

let arr = new Array();
arr[0] = new ListNode(1);
arr[0].next = new ListNode(1);
arr[0].next.next = new ListNode(2);

let arr1 = new Array();
arr1[0] = new ListNode(1);
arr1[0].next = new ListNode(1);
arr1[0].next.next = new ListNode(2);
arr1[0].next.next.next = new ListNode(3);
arr1[0].next.next.next.next = new ListNode(3);

let node = deleteDuplicates(arr)
printList(node)
let node1 = deleteDuplicates(arr1)
printList(node1)
