class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = {
            value: value,
            next: null
        }

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // 1. get reference to the top node
            const prevNode = this.top;
            // 2. update the top node with newNode
            this.top = newNode
            // 3. update next prop of updated top node with prevNode top node
            this.top.next = prevNode;
        }
        // increase length
        this.length++;
    }

    // 1st version - If you don't want to return the deleted element

    // pop() {
    //     // if there is nothing , return null
    //     if (!this.top) {
    //         return null;
    //     }
    //     // if there is only one item left , then on pop() , bottom will become 'null'
    //     if (this.top === this.bottom) {
    //         this.bottom = null;
    //     }

    //     // else update the top node with the node just before top node
    //     this.top = this.top.next;
    //     // decrement the length 
    //     this.length--;
    // }

    // 2nd version - If you want to return the deleted element

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // get reference to top and it's previous node
        let topNode = this.top;
        let prevNode = topNode.next;
        // make the prevNode to topNode
        this.top = prevNode;
        // decrement the length 
        this.length--;
        // return the topNode if you want to store somewhere
        return topNode;
    }

    peek() {
        let topNode = this.top;
        return topNode;
    }

    isEmpty() {
        let bottomNode = this.bottom;
        if (!bottomNode) {
            return "Stack is Empty"
        }
    }
}