const assert = require("chai").assert;
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe("#tail", () => {
  it("returns 3 for words.length after calling tails(words)", () => {
    assert.strictEqual(words.length, 3);
  });

  it("returns [] for [7]", () => {
    assert.deepEqual(tail([7]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});
