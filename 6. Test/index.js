// 1. Reversing the string

// 2. Implementing an array in JS

// 3. Merge sorted arrays

// 4. Implement a Hash Table in JS

// 5. Find first reocurring character

// 6. Implementing Linked List in JS with it's three functions - append , prepend , insert and remove



// --------------------- 1. Reversing the String ----------------- // 

let str = 'aakash';
// 1st method 

function reverse1(str) {
    return str.split('').reverse().join('');
}

// NOTE : You can also use [...str] in place of str.split('');

// 2nd method 

function reverse2(str) {
    let arr = [];
    for (let i = (str.length - 1); i >= 0; i--) {
        arr.push(str[i]);
    }
    return arr.join('');
}


// 3rd method

function reverse3(str) {
    let word = ''
    for (let char of str) {
        word = char + word;
    }
    return word;
}

// 4th method

function reverse4(str) {
    return str.split('').reduce((acc, cur) => {
        acc = cur + acc;
        return acc;
    }, '')
}

// 5th method ( Using Recursion) ( Need to understand little bit)

function reverse5(str) {
    return (str === '') ? '' : reverse5(str.substr(1)) + str.charAt(0);
}



// --------------------- 3. Reversing the String ----------------- // 

let arr1 = [2, 7, 8, 26];
let arr2 = [3, 5, 10, 17];

function mergeSortedArrays(arr1, arr2) {
    let element1 = arr1[0];
    let element2 = arr2[0];
    let mergedArr = [];
    let i = 1;
    let j = 1;

    while (element1 || element2) {
        if (element2 === undefined || element1 < element2) {
            mergedArr.push(element1);
            element1 = arr1[i];
            i++;
        } else {
            mergedArr.push(element2);
            element2 = arr2[j];
            j++;
        }
    }

    return mergedArr;
}

// console.log(mergeSortedArrays(arr1, arr2));


// --------------------- 6. Implementing Linked List in JS ----------------- // 

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newObj = {
            value: value,
            next: null
        }

        // store the reference of tail in a variable
        let newTail = this.tail;
        // update the next property of head via tail as tail is also referring to head
        newTail.next = newObj;
        // update the global tail property
        this.tail = newObj;

        this.length++;
    }

    prepend(value) {
        let newObj = {
            value: value,
            next: null
        }

        // save reference of head
        let head = this.head;
        // update next property of newObj
        newObj.next = head;
        // update the global head
        this.head = newObj


        this.length++;
    }

    insert(index, value) {
        if (index > this.length) {
            this.append(value);
        } else {
            let newObj = {
                value: value,
                next: null
            }

            let leader = this.getReferenceOfNode(index - 1);
            // get the reference of follower
            let follower = leader.next;

            leader.next = newObj;
            newObj.next = follower;
            this.length++;
        }

    }

    getReferenceOfNode(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    getReferenceList() {
        let counter = 0;
        let currentNode = this.head;
        let newArr = [];
        console.log(this.length);

        while (counter < this.length) {
            console.log(counter, this.length);

            newArr.push(currentNode.value);

            console.log(newArr);

            currentNode = currentNode.next;
            counter++;
        }
    }

    remove(index) {
        let leader = this.getReferenceOfNode(index - 1);
        let currentNode = leader.next;
        let follower = currentNode.next;

        // update the next property of leader to follower
        leader.next = follower;
        this.length--;
    }
}

// let myLinkedList = new LinkedList(5);
// myLinkedList.append(10);
// myLinkedList.append(20);
// myLinkedList.prepend(2);
// myLinkedList.prepend(1);
// console.log(myLinkedList.length);

// myLinkedList.insert(50, 100);
// console.log(myLinkedList.length);

// myLinkedList.insert(51, 456);
// console.log(myLinkedList.length);
// myLinkedList.insert(500, 607);
// console.log(myLinkedList.length);
// myLinkedList.insert(5000, 45);
// console.log(myLinkedList.length);
// myLinkedList.getReferenceList();
// console.log(myLinkedList);





// --------------------- 2. Implementing Array in JS ----------------- // 

class Array {
    constructor(value) {
        this.data = {};
        this.length = 0
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        // const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new Array();
myArray.push(10);
myArray.pop();
myArray.push('aakash');
myArray.push('aditi');
myArray.push('shubham');
myArray.push('deepak');
myArray.push('himanshu');
myArray.delete(1);
console.log(myArray);