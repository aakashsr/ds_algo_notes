// Implementing an Array

class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) { // O(1)
        return this.data[index];
    }

    push(item) { // O(1)
        this.data[this.length] = item;
        this.length++;
    }

    pop() { // O(1)
        let lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) { // similar to shift function in JS  // O(n)
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

// const array = new MyArray();
// array.push('1');
// console.log(array.data[0]);
// console.log(array[0]);
// array.push('2');
// array.push('5');
// array.push('7');
// array.push('9');
// console.log(array.data);
// array.delete(3);
// console.log(array.data);





// ---------------- ARRAY EXERCISES --------------------- //

// 1. Reverse the string

// Hello ---> olleh

// i) Using FOR Loop

function reverse1(str) {
    let newArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newArr.push(str[i]);
    }
    return newArr.join('');
}


// ii) Using FOR / OF Loop

function reverse2(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed;
}


// iii) Using reduce Loop

function reverse3(str) {
    return str.split('').reduce((acc, cur) => {
        acc = cur + acc;
        return acc;
    }, '')
}

// One liner

function reverse4(str) {
    return [...str].reduce((acc, cur) => cur + acc, '');
}


// iv) Using JS inbuilt "reverse()" method

function reverse4(str) {
    return [...str].reverse().join('');
}

// OR

function reverse4(str) {
    return str.split().reverse().join('');
}


// 1. Merge Sorted Array

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));