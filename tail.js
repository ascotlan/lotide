// Return the tail of an array
const tail = function(arr) {
  return arr.slice(1);
};

//TESTING
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const num = [7];
const result = tail(num);
assertEqual(result.length, 0);

const empty = [];
const result2 = tail(empty);
assertEqual(result2.length, 0);
