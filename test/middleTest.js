const assert = require('chai').assert
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')


describe("#middle", () => {
  it("returns Pulp for ['Blur','Oasis', 'Pulp', 'Radiohead', 'James']", () => {
    assert.deepEqual(assertArraysEqual(["Blur", "Oasis", "Pulp", "Radiohead", "James"]), ["Pulp"])
    //note assertArraysEqual takes in two parameters, ou are only passing one
    //but at this moment, I cannot get my head into how this will work as a tst 
  })

  it("returns 10 for [5, 10, 15]", () => {
    assert.deepEqual(assertArraysEqual([5, 10, 15]), [10])
  })

  it("returns ['Oasis', Radiohead]", () => {
    assert.deepEqual(assertArraysEqual(["Blur", "Oasis", "Radiohead", "James"]), ["Oasis", "Radiohead"])
  })

})

//TEST WAS WORKING WITH JUST MIDDLE 

// describe("#middle", () => {
//   it("returns Pulp for ['Blur','Oasis', 'Pulp', 'Radiohead', 'James']", () => {
//     assert.deepEqual(middle(["Blur", "Oasis", "Pulp", "Radiohead", "James"]), ["Pulp"])
//   })

//   it("returns 10 for [5, 10, 15]", () => {
//     assert.deepEqual(middle([5, 10, 15]), [10])
//   })

//   it("returns ['Oasis', Radiohead]", () => {
//     assert.deepEqual(middle(["Blur", "Oasis", "Radiohead", "James"]), ["Oasis", "Radiohead"])
//   })

// })



