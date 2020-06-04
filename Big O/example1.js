const nemo = ["nemo"];

const allElements = new Array(10000).fill("nemo");

function findNemo1(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log(`It took ${t1 - t0} ms to complete the operation!`);
}

findNemo1(allElements);
