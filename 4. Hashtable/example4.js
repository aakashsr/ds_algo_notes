// 1. Implementing Hash Table in JavaScript
console.log('hello');

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
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push(key, value);
            console.log(this.data);
        }
    }

    get(key) {
        const obj = this.data.filter((cur) => {
            if (cur[0][0] === key) {
                return cur[0][1];
            }
        })
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
console.log(myHashTable.get('grapes'));
// // myHashTable.get('apples');