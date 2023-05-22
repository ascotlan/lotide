function middle(arr) {
  const len = arr.length;
  let mid = 0;

  if (len <= 2) {
    return [];
  } else if (len % 2 !== 0) {
    mid = (len - 1) / 2;
    return [arr[mid]];
  } else {
    mid = Math.floor((len - 1) / 2);
    return [arr[mid], arr[mid + 1]];
  }
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

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);
