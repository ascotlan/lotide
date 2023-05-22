function flatten(arr) {
  return arr.reduce((acc, el) => acc.concat(el), []);
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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
