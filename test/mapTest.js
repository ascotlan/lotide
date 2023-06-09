"use strict";

const { assert } = require("chai");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const nums = [2, 5, 7, 4, 88, 33, 1];
const letters = ["a", "A", "b", "c", "D"];

describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });

  it("returns [8, 125, 343, 64, 681472, 35937, 1] for [2, 5, 7, 4, 88, 33, 1]", () => {
    assert.deepEqual(
      map(nums, (num) => num ** 3),
      [8, 125, 343, 64, 681472, 35937, 1]
    );
  });

  it('returns ["A", "A", "B", "C", "D"] for ["a", "A", "b", "c", "D"]', () => {
    assert.deepEqual(
      map(letters, (letter) => letter.toUpperCase()),
      ["A", "A", "B", "C", "D"]
    );
  });
});
