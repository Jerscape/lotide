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
* `eqArrays(array1, array2)`: takes in two arrays and compares them for equality, returning true/false
* `assertArraysEqual(array1, array2)`: takes in two arrays, compares them for equality, and console logs the result (true/false)
* `without(sourceArray, removalArray)`: returns a subset of a given array, removing unwanted elements.
* `flatten(arrayToFlatten)`: accepts a two dimensional array and "flattens" to single dimension array
* `middle(...)`: accepts an array and returns it's middle element, as another array


* `head(array)`: retrieves the first element from the array
* `tail(array)`: returns every element except the first element, of an array

* `function3(...)`: description

