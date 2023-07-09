# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeremydutton/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: assert function to test function behaviour
* `eqArrays(array1, array2)`: takes in two arrays and compares them for equality, returning boolean value
* `assertArraysEqual(array1, array2)`: takes in two arrays, compares them for equality, and console logs the result as a boolean value
* `without(sourceArray, removalArray)`: returns a subset of a given array, removing unwanted elements.
* `flatten(arrayToFlatten)`: accepts a two dimensional array and "flattens" to single dimension array
* `middle(array)`: accepts an array and returns it's middle element, as another array
* `head(array)`: retrieves the first element from the array
* `tail(array)`: returns every element except the first element, of an array
* `countOnly(allItems, itemsToCount)`: takes in a collection of items (an object) and return counts for a specific subset of those items
* `countLetters(sentence)`: takesin a string, counts the number of instances of each letter, and returns the count of each letter as a key-value pair in an object
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found. Return type is string
* `findKeyByValue(object, value)`: takes in a object and value. Scans the object and returns the first key that has that value. 
* `eqObjects(object1, object2))`: compares two objects and returns boolean value
* `assertObjectsEqual`: compares two objects and prints a boolean value to the console
* `map(array, callBack)`: takes in an array to map and a callback function. Returns new array based on the callback function
* `takeUntil(array, callback)`: takes an array and a callback. It will return a slice of the array with elements taken from the beginning. It will keep going until the callback/predicate returns a truthy value.
* `findKey(object, callback)`: takes in an array and a callback

