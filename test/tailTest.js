const assertEqual = require("../assertEqual");
tail = require("../tail");

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
