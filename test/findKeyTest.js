"use strict";

const { assert } = require("chai");
const findKey = require("../findKey");

// TEST CODE
const results1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const results2 = findKey(
  {
    ajaxsettings: { ak1: "v1", ak2: "v2" },
    uisettings: { ui1: "v1", ui22: "v2" },
  },
  (x) => x.ui22 === "v2"
);

const results3 = findKey(
  {
    ajaxsettings: { ak1: "v1", ak2: "v2" },
    uisettings: { ui1: "v1", ui22: "v2" },
  },
  (x) => x.ui22 === "v3"
);

describe("#findKey", () => {
  it("returns 'noma' if property noma.stars === 2 found first", () => {
    assert.deepEqual(results1, "noma");
  });

  it("returns'uisettings' if property uisettings.ui22 === 'v2 found first", () => {
    assert.deepEqual(results2, "uisettings");
  });

  it("returns undefined if property uisettings.ui22 === 'v3 not found", () => {
    assert.deepEqual(results3, undefined);
  });
});
