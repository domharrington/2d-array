module.exports = create2dArray

function create2dArray(array, n) {
  var newArray = []
    , input = array.slice(0)

  while (input[0]) {
    newArray.push(input.splice(0, n));
  }

  return newArray;
}
