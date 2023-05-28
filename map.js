const map = function (arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

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
  const inspect = require("util").inspect;
  if (eqArrays(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [2, 5, 7, 4, 88, 33, 1];
const letters = ["a", "A", "b", "c", "D"];

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);
assertArraysEqual(
  map(nums, (num) => num ** 3),
  [8, 125, 343, 64, 681472, 35937, 1]
);
assertArraysEqual(
  map(letters, (letter) => letter.toUpperCase()),
  ["A", "A", "B", "C", "D"]
);
