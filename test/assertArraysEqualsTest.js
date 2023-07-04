const assertArraysEqual = require("../assertArraysEqual");

const animals = ["dog", "Cat", "mouse", "bird"]
assertArraysEqual(animals, ["dog", "Cat", "mouse", "bird"])
assertArraysEqual([5, 6, 7, 1], [7, 8, 9])
assertArraysEqual([5, 6, 7, 1], [5, 6, 7, 1])
assertArraysEqual([5, "lime", 7, 1], [5, 6, 7, 1])
assertArraysEqual([5, "lime", 7, 1], [5, "lime", 7, 1])