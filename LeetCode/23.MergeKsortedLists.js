class ListNode {
    constructor(data,next) {
        this.data = (data===undefined ? 0 : data)
        this.next = (next===undefined ? null : next)
    }
}

let head;
let temp;

const printList = (node) => {
    let str = ""
    while(node != null) {
        str += node.data + "->"
        node = node.next
    }
    console.log(str + "null")
}

const mergeKList = (arr,last) => {
    let mainArr = []

    const linkedListToArr = (lArr) => {
        mainArr.push(lArr.data);

        if(lArr.next != null) {
            linkedListToArr(lArr.next)
        }
    }

    for(let i = 0 ; i <= last; i++) {
        if(arr[i].next != null) {
            linkedListToArr(arr[i])
        }
    }

    mainArr = mainArr.sort((a,b) => a-b)
    console.log(mainArr)
    // Convert the array to a LinkedList
    let newList = null;
    for (i = mainArr.length - 1; i >= 0; i--) {
        newList = new ListNode(mainArr[i], newList);
    }

    return newList;
}

let k = 2;
let n = 4;

let arr = new Array(k);

arr[0] = new ListNode(1)
arr[0].next = new ListNode(0)
arr[0].next.next = new ListNode(2)

arr[1] = new ListNode(4)
arr[1].next = new ListNode(5)


// arr[0] = new ListNode(1);
// arr[0].next = new ListNode(3)
// arr[0].next.next = new ListNode(13)
// arr[0].next.next.next = new ListNode(10)

// arr[1] = new ListNode(0)
// arr[1].next = new ListNode(20)
// arr[1].next.next = new ListNode(2)

// arr[2] = new ListNode(30)
// arr[2].next = new ListNode(7)

head=  mergeKList(arr, k-1)
console.log(head)
printList(head)
printList(arr)