"use strict";

//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const eqObjects = require("./eqObjects");

function assertObjectsEqual(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
}

module.exports = assertObjectsEqual;
