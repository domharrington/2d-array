# 2d-array

Transform a 1d array into a 2d array

[![build status](https://secure.travis-ci.org/domharrington/2d-array.png)](http://travis-ci.org/domharrington/2d-array)

## Installation

```
npm install 2d-array --save
```

## Usage
```js
var create2dArray = require('2d-array')

console.log(create2dArray([ 1, 2, 3, 4, 5, 6 ], 2))
// -> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

console.log(create2dArray([ 1, 2, 3, 4], 2, 2))
// -> [ [ 1 ], [ 2, 3 ] ]
```

### `var array = create2dArray(array, n[, ignore])`

Options must include:

- `array` - an array to transform into a 2d array.
- `n` - the number of items to be inside each array. Non-numbers (undefined, null, ''), Non-floats or strings that represent anything other than one number will return an empty array.
- 'ignore' - Optional - When set, deletes the value specified from any array containing that value.

## Credits
* [Dom Harrington](https://github.com/domharrington/)
* [Tyler Brothers](https://github.com/possibly/)
