// Add your functions here
function map(array, funct){
  let result = []
  array.forEach(num => result.push(funct(num)))
  return result
}

function reduce(array, funct, startingPoint){
  let start = startingPoint || array[0]
  array.forEach(elem => (start = funct(elem, start)))
  return typeof start == 'number'
  ? !!startingPoint
  ? start
  : start - array[0]
  : start
}
