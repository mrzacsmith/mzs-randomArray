## Random Array Generator

This package returns an array of integers of random length from 3 to max based on parameter.
The array will be randomly filled in the range of default `-30 < value < 500`.

### Purpose

This package can make creating a random array easy, and is useful for testing sort algorithms.

### Installation

`npm i mzs-randomarray`

### Usage

The function takes 3 parameters, all of them have default values: `createRandomArray(maxNum, minV = -30, maxV = 500)`

- max = the maximum length of the array, randomly generated.
- cb = arrValues and defaulted so only a single parameter is used.
- It is recommended that you set the output of this function into a variable, as shown below.

- `const cRA = require('mzs-random-array')`

  |                | (n) max possible lenth | minV range | maxV range |
  | :------------- | :--------------------: | :--------: | :--------: |
  | `cRA()`        |           10           |    -30     |    500     |
  | `cRA(20)`      |           20           |    -30     |    500     |
  | `cRA(20,0)`    |           20           |     0      |    500     |
  | `cRA(10,0,25)` |           10           |     0      |     25     |
  | `cRA('bob')`   |           10           |    -30     |    500     |

- `const arrayToBeSorted = createRandomArray(12)` ~ set random array to preserve the array for reference

### Tests

Run `node test.js` will produce two tables, one testing non-inter input will default max=10, and second
will use integer for max=20.

### Contributing

See the file named [CONTRIBUTING](https://github.com/mrzacsmith/mzs-randomArray/blob/master/CONTRIBUTING.md)
