"use strict";

// implement a new function letterPositions which will return all the indices(zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;
