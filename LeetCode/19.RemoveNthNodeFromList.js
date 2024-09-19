class ListNode {
    constructor(val,next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const convertListToArr = (node) => {
        let returnedArr = [];
        returnedArr.push(node.val)
        if(node.next != null) {
            returnedArr = returnedArr.concat(convertListToArr(node.next))
        }
        return returnedArr
    }

    let arr = convertListToArr(head).reverse();
    let newArr = []
    for(let i = 0; i < arr.length ; i++) {
        if(n-1 !== i) {
            newArr.push(arr[i])
        }
    }
    let newList = null
    for(let i = 0 ; i < newArr.length ; i++) {
        newList = new ListNode(newArr[i], newList)
    }

    return newList
};

let arr = [];

arr = new ListNode(1)
arr.next = new ListNode(2)
arr.next.next = new ListNode(3)
arr.next.next.next = new ListNode(4)
arr.next.next.next.next = new ListNode(5)


console.log(removeNthFromEnd(arr, 2))

let arr1 = [];

arr1 = new ListNode(1)
arr1.next = new ListNode(2)

console.log(removeNthFromEnd(arr1, 1))

let arr2 = [];

arr2 = new ListNode(4)
arr2.next = new ListNode(5)
arr2.next.next = new ListNode(4)

console.log(removeNthFromEnd(arr2, 1))


