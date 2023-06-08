const eqArrays = require("./eqArrays");

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

module.exports = assertArraysEqual;
