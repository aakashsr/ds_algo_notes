class LinkedList {
    constructor(value) {
        this.head = {
                value: value,
                next: null
            },
            this.tail = this.head
        this.length = 1;
    }

    append(value) {
        let nextNode = {
            value: value,
            next: null
        }

        this.tail.next = nextNode; // this is changing the next property of head too as it is object by reference
        this.tail = nextNode;
        this.length++;
    }

    prepend(value) {
        let prevNode = {
            value: value,
            next: null
        }

        prevNode.next = this.head; // this is changing the next property of head too as it is object by reference
        this.head = prevNode;
        this.length++;
    }
}


const myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.prepend(15);

myLinkedList.append(16);
// myLinkedList.append(26);

console.log(myLinkedList);