
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const mergeTwoLists = (l1, l2) => {
    let tempNode = new ListNode(0);
    let currentNode = tempNode;
    while(true) {
        if(l1 == null){
            currentNode.next = l2
            break
        } 
        if(l2 == null) {
            currentNode.next = l1
            break
        }
        if(l1.val <= l2.val){
            currentNode.next = l1
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }
        currentNode = currentNode.next
    }
    // currentNode = l1 || l2
    return tempNode.next;
};

console.log(mergeTwoLists([1,2,3,4],[1,2,5]))