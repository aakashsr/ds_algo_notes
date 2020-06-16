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
}



const myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.prepend(15);

myLinkedList.append(16);
myLinkedList.append(26);
myLinkedList.append(36);
myLinkedList.insert(50, 4);
myLinkedList.insert(15, 3);
myLinkedList.remove(2);
myLinkedList.remove(4);


console.log(myLinkedList.printList());