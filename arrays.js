var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; //Defines an array containing "snickers", "hundred grand", "kitkat", "skittles"

function addElementToBeginningOfArray(array, element){
  return [element,... array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [... array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  var myArray = ["b","c","d"]
  array.push(element)
  myArray
}

function accessElementInArray(array, element){
  console.log(array[element]);
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  const
}
