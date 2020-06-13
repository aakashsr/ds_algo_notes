let arr1 = ['a', 'j', 'b', 'z'];
let arr2 = ['j', 'v', 'o', 'a'];

/* -------------- METHOD 1 ----------------- */


function commonItem1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        console.log('matched1')
        return true;
      }
    }
  }
  return false;
}

commonItem1(arr1, arr2);

/* ---------------------------------------- */


/* -------------- METHOD 2 ----------------- */

function commonItem2(arr1, arr2) {
  // 1. Converted array into object
  let newObject = convertArrayIntoObject(arr1);
  // 2. Iterate throguh second array and check if any items exist as property on first or not.
  matchItem(arr2, newObject);
  return false;
}

function convertArrayIntoObject(arr) {
  let newObject = {}; // As JS is a lecical scoped language , so place of function definition decide the scope not place of function execution
  arr.forEach((cur) => { // that's why we need to return "newObject" from "convertArrayIntoObject" and then pass the same into "matchItem".So that , both have access to same object
    newObject[cur] = true;
  })
  return newObject;
}

function matchItem(arr, newObject) {
  arr.forEach((cur) => {
    if (newObject[cur]) {
      console.log('matched2');
      return true
    }
  })
}

commonItem2(arr1, arr2);

/* ---------------------------------------- */



/* -------------- METHOD 3 ----------------- */

// Using JS Utilities ( Array.some method )

function commonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(commonItem3(arr1, arr2));


/* ---------------------------------------- */







/* -------------- GOOGLE INTERVIEW QUESTION ----------------- */

// Q: Finding pair of numbers in an array whose sum is equal to given sum.

let array1 = [1, 2, 3, 9];
let array2 = [1,2, 4,4];

/* -------------- METHOD 1 ----------------- */

// Method 1 - Naive Approach
// Iterating over each number and checking whether their sum is equal to given sum or not.
// Complexity : O(n^2)

function checkPairSum1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkPairSum1(array2,8));

//  METHOD 2  
// Complexity : O(n)

function checkPairSum2(arr, sum) {
  let counter = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[counter]) === sum) {
      return true;
    }
    if (i === counter) {
      counter--;
      i = 0;
    }
  }
  return false;
}

console.log(checkPairSum2(array2, 8));

// METHOD 3 - Using while loop
// Complexity : O(n)

function checkPairSum3(arr, sum) {
  let high = arr.length - 1;
  let low = 0;
  while (low < high) {
    if (arr[low] + arr[high] === sum) {
      return true;
    } else {
      low++;
      if (low === high) {
        low = 0;
        high--;
      }
    }
  }
  return false;
}

console.log(checkPairSum3(array2, 8));

// METHOD 4 - Using Set and Complement of Value 
// Complexity : Constant Time 

function checkPairSum4(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    } else {
      mySet.add(sum - arr[i]);
    }
  }
  return false;
}

console.log(checkPairSum4(array2, 8));