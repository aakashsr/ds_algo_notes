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

        // 1. We'll update the "next" property of tail 
        // 2. As it is object by reference , it will change the "next" property of "head" because "tail" is just a pointer to "head"
        // 3. Then finally , we'll update the tail node with the nextNode.
        // 4. Increase the length.

        this.tail.next = nextNode;
        this.tail = nextNode;
        this.length++;
    }

    prepend(value) {
        let prevNode = {
            value: value,
            next: null
        }

        // 1. We'll update the "next" property of prevNode to point to head 
        // 2. Then we're updating the head node with prevNode
        // 3. Increase the length.

        prevNode.next = this.head;
        this.head = prevNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(value, index) {
        // checking params . If index is > length , then just call append.
        if (index > this.length) {
            this.append(value);
        }
        let newNode = {
            value: value,
            next: null
        }

        // create a method to get reference of first node between which newNode is going to be inserted. 
        let leader = this.traverseToNode(index - 1);

        // get the reference of second node between between which newNode is going to be inserted. 
        let follower = leader.next;
        // update the next prop of first node with the newly create node
        leader.next = newNode;
        // Also , update the next prop of newly created node with the second node i,e follower
        newNode.next = follower;
        // Finally ,increase the length
        this.length++;
    }

    remove(index) {

        // create a method to get reference of first node between which our provided node is located 
        let leader = this.traverseToNode(index - 1);

        let nodeToBeDeleted = leader.next;

        let follower = nodeToBeDeleted.next;

        leader.next = follower;

        this.length--;
    }

    traverseToNode(index) {
        let counter = 0;
        // save the reference of head
        let currentNode = this.head;
        // while counter is not equal to index , keep traversing until you reach the index.
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(25);
myLinkedList.append(35);
myLinkedList.append(45);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());

console.log(myLinkedList);


/* ---------------  DOUBLY LINKED LIST ----------------- */

class NewLinkedList {
    constructor(value) {
        this.head = {
                value: value,
                next: null,
                prev: null
            },
            this.tail = this.head
        this.length = 1;
    }

    append(value) {
        let newNode = {
            value: value,
            next: null,
            prev: null
        }

        // 1. We'll update the "next" property of tail 
        // 2. As it is object by reference , it will change the "next" property of "head" because "tail" is just a pointer to "head"
        // 3. Then update the prev prop of newNode
        // 3. Then finally , we'll update the tail node with the newNode.
        // 4. Increase the length.

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        let newNode = {
            value: value,
            next: null,
            prev: null
        }

        // 1. We'll update the "next" property of newNode to point to head 
        // 2. Update the prev of head
        // 3. Then we're updating the head node with newNode
        // 4. Increase the length.

        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(value, index) {
        // checking params . If index is > length , then just call append.
        if (index > this.length) {
            this.append(value);
        }
        let newNode = {
            value: value,
            next: null,
            prev: null
        }

        // create a method to get reference of first node between which newNode is going to be inserted. 
        let leader = this.traverseToNode(index - 1);

        // get the reference of second node between between which newNode is going to be inserted. 
        let follower = leader.next;
        // update the next prop of first node with the newly create node
        leader.next = newNode;
        // Also , update the next prop of newly created node with the second node i,e follower
        newNode.next = follower;

        // update the prev prop of newNode with leader 
        newNode.prev = leader

        // update the prev node of follower with newNode
        follower.prev = newNode;

        // Finally ,increase the length
        this.length++;
    }

    remove(index) {

        // create a method to get reference of first node between which our provided node is located 
        let leader = this.traverseToNode(index - 1);

        let nodeToBeDeleted = leader.next;

        let follower = nodeToBeDeleted.next;

        leader.next = follower;

        // update the prev property of follower with leader
        follower.prev = leader;

        this.length--;
    }

    traverseToNode(index) {
        let counter = 0;
        // save the reference of head
        let currentNode = this.head;
        // while counter is not equal to index , keep traversing until you reach the index.
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}