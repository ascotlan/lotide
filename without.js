"use strict";

//Implement without which will return a subset of a given array, removing unwanted elements.
function without(arr, exclude) {
  let results = [...arr];
  for (let i = 0; i < exclude.length; i++) {
    results = results.filter((result) => result !== exclude[i]);
  }
  return results;
}

module.exports = without;
