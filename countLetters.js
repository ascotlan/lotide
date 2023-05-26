function countLetters(sentence) {
  let result = {};

  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]] = result[sentence[i]] ? result[sentence[i]] + 1 : 1;
  }

  return result;
}

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

result1 = countLetters("lighthouse in the house");

// TEST CODE
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
