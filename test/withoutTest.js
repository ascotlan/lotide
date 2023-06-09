"use strict";

const { assert } = require("chai");
const without = require("../without");

// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

//Test cases
describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] without [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it(`returns ["1", "2"] for ["1", "2", "3"] without [1, 2, "3"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns [1, 2, 3] for [1, 2, 3] without []", () => {
    assert.deepEqual(without([1, 2, 3], [1, 2, 3]), []);
  });

  it(`returns ["hello", "world", "lighthouse"] for words after running  without(words, ["lighthouse"])`, () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
