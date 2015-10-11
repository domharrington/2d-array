var create2dArray = require('../')
  , assert = require('assert')

describe('2d-array', function () {

  it('should transform a 1d array into a 2d array', function () {

    assert.deepEqual(create2dArray([ 1, 2, 3, 4, 5, 6 ], 2)
      , [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ])

    assert.deepEqual(create2dArray([ 1, 2, 3 ], 2)
      , [ [ 1, 2 ], [ 3 ] ])

  })

  it('should transform a 1d array with falsy values into a 2d array', function() {

    assert.deepEqual(create2dArray([ 0, undefined, null, false, '' ], 2)
      , [ [ 0, undefined ], [ null, false ], [ '' ] ])

  })

  it('should allow set values to be ignored', function() {

    assert.deepEqual(create2dArray([ 0, undefined, 3, 'skipme', 4 ], 2, 'skipme')
      , [ [ 0, undefined ], [ 3 ], [ 4 ] ])

  })

  it('should return an empty array when n is not a number', function() {

    assert.deepEqual(create2dArray([ 0, undefined, 3, 4 ], '')
      , [ ])

    assert.deepEqual(create2dArray([ 0, undefined, 3, 4 ], undefined)
      , [ ])

    assert.deepEqual(create2dArray([ 1, 2, 3, 4 ], '4') //strings still work though
      , [ [ 1, 2, 3, 4 ] ])

    assert.deepEqual(create2dArray([ 1, 2, 3, 4 ], 4.1) //floats too.
      , [ [ 1, 2, 3, 4 ] ])

  })

})
