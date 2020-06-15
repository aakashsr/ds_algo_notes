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

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2000);

// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));
// console.log(myHashTable.get('oranges'));
console.log(myHashTable.getKeys());