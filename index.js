
//assertions and testing
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObects = require('./eqObjects');

//main utliities
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

//export 
module.exports = {

  //assertions and testing
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqArrays,
  eqObects,

  //main utlities
  head,
  tail,
  middle,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,

};