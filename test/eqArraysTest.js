"use strict";

const { assert } = require("chai");
const eqArrays = require("../eqArrays");

//Tests
describe("#eqArrays", () => {
  it("returns true if [1, 2, 3] and [1, 2, 3] are equivalent", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false if [1, 2, 3] and [3, 2, 1] are not equivalent", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it(`returns true if ["1", "2", "3"] and ["1", "2", "3"] are equivalent`, () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it(`returns false if ["1", "2", "3"] and ["1", "2", 3] are not equivalent`, () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it(`returns false if ["1", "2", "3"] and ["1", "2", "3", "4"] are not equivalent`, () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]));
  });
});
