"use strict";

const { assert } = require("chai");
const letterPositions = require("../letterPositions");

const result1 = letterPositions("lighthouse in the house");

// TEST CODE
describe("#letterPositions", () => {
  it('returns [0] for "l"', () => {
    assert.deepEqual(result1["l"], [0]);
  });

  it('returns [1, 11] for "i"', () => {
    assert.deepEqual(result1["i"], [1, 11]);
  });

  it('returns [2] for "g"', () => {
    assert.deepEqual(result1["g"], [2]);
  });

  it('returns [3, 5, 15, 18] for "h"', () => {
    assert.deepEqual(result1["h"], [3, 5, 15, 18]);
  });

  it('returns [4, 14] for "t"', () => {
    assert.deepEqual(result1["t"], [4, 14]);
  });

  it('returns [6, 19] for "o"', () => {
    assert.deepEqual(result1["o"], [6, 19]);
  });

  it('returns [7, 20] for "u"', () => {
    assert.deepEqual(result1["u"], [7, 20]);
  });

  it('returns [8, 21] for "s"', () => {
    assert.deepEqual(result1["s"], [8, 21]);
  });

  it('returns [9, 16, 22] "e"', () => {
    assert.deepEqual(result1["e"], [9, 16, 22]);
  });

  it('returns [12] "n"', () => {
    assert.deepEqual(result1["n"], [12]);
  });
});
