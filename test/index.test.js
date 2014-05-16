var create2dArray = require('../')
  , assert = require('assert')

describe('2d-array', function () {

  it('should transform a 1d array into a 2d array', function () {

    assert.deepEqual(create2dArray([ 1, 2, 3, 4, 5, 6 ], 2)
      , [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ])

    assert.deepEqual(create2dArray([ 1, 2, 3 ], 2)
      , [ [ 1, 2 ], [ 3 ] ])

  })

})
