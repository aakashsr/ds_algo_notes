// -----------------  O(N)  -------------------- //

const nemo = ["nemo"];

const allElements = new Array(10).fill("nemo");

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

// So , the bigO of the for loops is O(n) because if we'll have 10 elements , we have to loop through all the elements to find the required element.
// bigO of while loop is also O(n)

// ForEach also has linear time i,e O(n) because inside it , it's implementing the same logic i,e for loop

// ES5
function findNemo2(array) {
  array.forEach(function (cur) {
    console.log(cur);
  });
}

// ES6
function findNemo2(array) {
  array.forEach((cur) => console.log(cur));
}

findNemo1(allElements);

// -----------------  O(1)  -------------------- //

const big = new Array(1000).fill("name");

function findNemo3(array) {
  console.log(array[0]); // O(1)
}

function findNemo4(array) {
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
}

function findNemo5(array) {
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
  console.log(array[2]); // O(1)
}

findNemo3(big); // bigO = O(1)
findNemo4(big); // bigO  = O(1)
findNemo5(big); // bigO  = O(1)

// In above cases , doesn't matter what the size of array is , the number of operations are fixed . So , we'll get constant line not linear.

// EXERCISE 1 - Calculate bigO :
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// bigO of above function => O(n)
