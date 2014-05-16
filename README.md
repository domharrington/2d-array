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
```

### `var array = create2dArray(array, n)`

Options must include:

- `array` - an array to transform into a 2d array
- `n` - the number of items to be inside each array

## Credits
[Dom Harrington](https://github.com/domharrington/)
