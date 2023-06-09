"use strict";

function countLetters(sentence) {
  let result = {};

  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]] = result[sentence[i]] ? result[sentence[i]] + 1 : 1;
  }

  return result;
}

module.exports = countLetters;
