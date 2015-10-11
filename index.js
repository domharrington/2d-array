module.exports = create2dArray

function create2dArray(array, n, ignore) {
  var newArray = []
    , input = array.slice(0);

  while (input.length !== 0 && _isNumber(n)) {
    newArray.push(input.splice(0, n));
  }

  if ( arguments.length > 2 ){ //ignore is set.
    newArray.forEach( function(array, index) {
      array = array.filter( function(x) {
        return x !== ignore;
      });
      newArray[index] = array;
    });
  }

  return newArray;
}

function _isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}
