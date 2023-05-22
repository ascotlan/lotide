//Implement without which will return a subset of a given array, removing unwanted elements.
function without(arr, exclude) {
  let results = [...arr];
  for (let i = 0; i < exclude.length; i++) {
    results = results.filter((result) => result !== exclude[i]);
  }
  return results;
}

// TESTING
function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: both arrays are equivalent`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: both arrays are not equivalent`);
  }
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
