const assert = require('chai').assert
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

//mentor bryan gomes - use the eqArrays

const result1 = middle(["Blur", "Oasis", "Pulp", "Radiohead", "James"])
const result2 = middle(['Blur','Pulp','Radiohead', 'James'])

describe("#middle", () => {
  it("returns Pulp for ['Blur','Oasis', 'Pulp', 'Radiohead', 'James']", () => {
    assert.deepEqual(eqArrays(result1, ['Pulp']), true)
 
  })

  it("returns Pulp and Radiohead for ['Blur','Pulp','Radiohead', 'James']", () => {
    assert.deepEqual(eqArrays(result2, ['Pulp', 'Radiohead']), true)
 
  })

  it("returns Pulp and Radiohead for ['Blur','Pulp','Radiohead', 'James']", () => {
    assert.deepEqual(eqArrays(result1, ['Pulp', 'Blur', 'Radiohead']), false)
 
  })

})



