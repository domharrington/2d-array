var create2dArray = require('./')

console.log(create2dArray([ 1, 2, 3, 4, 5, 6 ], 2))
// -> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

console.log(create2dArray([ 1, 2, 3, 4 ], 2, 2))
// -> [ [ 1 ], [ 3, 4 ] ]
