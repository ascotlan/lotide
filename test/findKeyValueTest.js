"use strict";

const { assert } = require("chai");
const findKeyByValue = require("../findKeyByValue");

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyValue", () => {
  it('returns "drama" for "The Wire"', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it(`returns undefined for "That '70s Show"`, () => {
    assert.deepEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});
