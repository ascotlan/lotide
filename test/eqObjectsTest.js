"use strict";

const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

describe("#eqObjects", () => {
  it(`returns true if { colors: ["red", "blue"], size: "medium" } and {
    size: "medium",
    colors: ["red", "blue"],
  } are the same`, () => {
    assert.isTrue(
      eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)
    );
  });

  it(`returns false if { colors: ["red", "blue"], size: "medium" } and {
    size: "medium",
    colors: ["red", "blue"],
    sleeveLength: "long",
  } are not the same`, () => {
    assert.isFalse(
      eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)
    );
  });
});

