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
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
}
