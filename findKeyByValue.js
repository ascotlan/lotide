"use strict";

// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

function findKeyByValue(obj, val) {
  const values = Object.values(obj);
  const keys = Object.keys(obj);

  for (let i = 0; i <= values.length; i++) {
    if (values[i] === val) {
      return keys[i];
    }
  }
  return;
}

module.exports = findKeyByValue;
