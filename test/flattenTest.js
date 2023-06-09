"use strict";

const { assert } = require("chai");
const flatten = require("../flatten");

// TESTING
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['a', 'b', 'c', 'd', 'e'] for [['a', 'b'], ['c', 'd'], 'e']", () => {
    assert.deepEqual(flatten([["a", "b"], ["c", "d"], "e"]), [
      "a",
      "b",
      "c",
      "d",
      "e",
    ]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7] for [[1, 2], [3, [4]], 5, [6], 7]", () => {
    assert.deepEqual(
      flatten([[1, 2], [3, [4]], 5, [6], 7]),
      [1, 2, 3, 4, 5, 6, 7]
    );
  });

  it("returns [1, 2, 3, 4] for [[[1], 2], [3, [4]]]", () => {
    assert.deepEqual(
      flatten([
        [[1], 2],
        [3, [4]],
      ]),
      [1, 2, 3, 4]
    );
  });
});
