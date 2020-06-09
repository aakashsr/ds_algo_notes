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
  matchItem(arr2,newObject);
  return false;
}

function convertArrayIntoObject(arr) {
  let newObject = {};                   // As JS is a lecical scoped language , so place of function definition decide the scope not place of function execution
  arr.forEach((cur) => {                // that's why we need to return "newObject" from "convertArrayIntoObject" and then pass the same into "matchItem".So that , both have access to same object
    newObject[cur] = true;
  })
  return newObject;
}

function matchItem(arr,newObject) {
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

// Using Array.some

function commonItem3(arr1,arr2){
  return arr1.some((item) => arr2.includes(item));
}

console.log(commonItem3(arr1,arr2));


/* ---------------------------------------- */