// 1. Implementing Hash Table in JavaScript

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        } else {
            this.data[address].push([key, value]);
        }
    }

    get(key) {
        const address = this._hash(key);
        const currentItem = this.data[address];
        if (currentItem.length) {
            for (let i = 0; i < currentItem.length; i++) {
                if (currentItem[i][0] === key) {
                    return currentItem[i][1];
                }
            }
        }
    }

    getKeys() {
        let keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) { // checking if any  data exist 
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 9);
// console.log(myHashTable.data);
// myHashTable.set('oranges', 2000);

// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));
// console.log(myHashTable.get('oranges'));
// console.log(myHashTable.getKeys());



// 2. Google Interview Question 
// Return the first re-ocurring character


// Method 1: Time complexity : O(n^2)


const array = [2, 5, 6, 2, 3, 7, 89, 41, 10, 10];

function returnFirstRepeatedChar1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = i + 1; j < arr.length; j++) {
            counter++;
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

console.log(returnFirstRepeatedChar1(array));

console.log('--------------');


// Method 2: Time complexity : O(n)

function returnFirstRepeatedChar2(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            newArr.push(arr[i]);
        } else {
            const index = newArr.indexOf(arr[i]);
            if (index === -1) {
                newArr.push(arr[i]);
            } else {
                return arr[i];
            }
        }
    }
}
console.log(returnFirstRepeatedChar2(array));

// Time complexity : O(n)


// Method 3: Time complexity : O(n) ( Using Hash Tables)

function returnFirstRepeatedChar3(arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i];
        } else {
            map[arr[i]] = i;
        }
    }
    return undefined;
}

console.log(returnFirstRepeatedChar3(array));


// Note : Our third function using Hash Table return the most frequest repeated character instead of first repeated char.
// While the first and second method , return the first repeated char.