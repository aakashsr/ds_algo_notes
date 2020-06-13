// Implementing an Array

class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        let lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) { // similar to shift function in JS
        let item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];
    }
}

const array = new MyArray();
array.push('1');
console.log(array.data[0]);
console.log(array[0]);
array.push('2');
array.push('5');
array.push('7');
array.push('9');
console.log(array.data);
array.delete(3);
console.log(array.data);