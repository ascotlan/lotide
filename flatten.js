"use strict";

function flatten(array, result) {
  for (let element of array) {
    if (Array.isArray(element)) {
      flatten(element, result);
    } else {
      result.push(element);
    }
  }

  return result;
}

module.exports = flatten;
