// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let result = {};

  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[firstNames[i]]) {
      result[firstNames[i]] = result[firstNames[i]]
        ? result[firstNames[i]] + 1
        : 1;
    }
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
