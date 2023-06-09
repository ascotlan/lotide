"use strict";

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let result = {};

  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]]) {
      result[allItems[i]] = result[allItems[i]] ? result[allItems[i]] + 1 : 1;
    }
  }
  return result;
};

module.exports = countOnly;
