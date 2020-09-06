## Random Array Generator

This package returns an array of integers of random length from 3 to max based on parameter.
The array will be randomly filled in the range of -30 > value < 500.

### Purpose

This package can make creating a random array easy, and is useful for testing sort algorithms.

### Installation

`npm i mzs-randomnumber`

### Usage

The function takes 2 parameters `createRandomArray(maxNum, cb):

- max = the maximum length of the array, randomly generated.
- cb = arrValues and defaulted so only a single parameter is used.

- `const createRandomArray = require('mzs-random-array')`
- `createRandomArray(max)`

### Tests

Run `node test.js` will produce two tables, one testing non-inter input will default max=10, and second
will use integer for max=20.

### Contributing

See the file named CONTRIBUTING.md
