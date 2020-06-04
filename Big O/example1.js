const nemo = ["nemo"];

const allElements = new Array(10).fill("nemo");

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

// So , the big of the for loops is O(1) becaus if we'll have 10 elements , we have to loop through all the elements to find the required element.

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
