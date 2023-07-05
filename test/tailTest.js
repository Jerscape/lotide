const assert = require('chai').assert
const tail = require("../tail");

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  }) 

  it("returns lime, apple, banana for ['lemon', 'lime', 'apple', 'banana']" , () => {
    assert.deepEqual(tail(['lemon', 'lime', 'apple', 'banana']), ['lime', 'apple', 'banana'])
  })
})


