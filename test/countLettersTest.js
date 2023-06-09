"use strict";

const { assert } = require("chai");
const countLetters = require("../countLetters");

const result1 = countLetters("lighthouse in the house");

// TEST CODE
describe("#countLetters", () => {
  it('returns true if "l" occurs with frequency of 1', () => {
    assert.strictEqual(result1["l"], 1);
  });

  it('returns true if "i" occurs with frequency of 2', () => {
    assert.strictEqual(result1["i"], 2);
  });

  it('returns true if "g" occurs with frequency of 1', () => {
    assert.strictEqual(result1["g"], 1);
  });

  it('returns true if "h" occurs with frequency of 4', () => {
    assert.strictEqual(result1["h"], 4);
  });

  it('returns true if "t" occurs with frequency of 2', () => {
    assert.strictEqual(result1["t"], 2);
  });

  it('returns true if "o" occurs with frequency of 2', () => {
    assert.strictEqual(result1["o"], 2);
  });

  it('returns true if "u" occurs with frequency of 2', () => {
    assert.strictEqual(result1["u"], 2);
  });

  it('returns true if "s" occurs with frequency of 2', () => {
    assert.strictEqual(result1["s"], 2);
  });

  it('returns true if "e" occurs with frequency of 3', () => {
    assert.strictEqual(result1["e"], 3);
  });

  it('returns true if "n" occurs with frequency of 1', () => {
    assert.strictEqual(result1["n"], 1);
  });
});
