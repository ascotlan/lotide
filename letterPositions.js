// implement a new function letterPositions which will return all the indices(zero-based positions) in the string where each character is found.

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

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

result1 = letterPositions("lighthouse in the house");

assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["i"], [1, 11]);
assertArraysEqual(result1["g"], [2]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);
assertArraysEqual(result1["t"], [4, 14]);
assertArraysEqual(result1["o"], [6, 19]);
assertArraysEqual(result1["u"], [7, 20]);
assertArraysEqual(result1["s"], [8, 21]);
assertArraysEqual(result1["e"], [9, 16, 22]);
assertArraysEqual(result1["n"], [12]);
