// Show a weekday
function weekday(date) {
  if (!(date instanceof Date)) {
    return "Error: invalid input";
  }
  const dayNum = new Date(date).getDay()
  const weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayString = weekday[dayNum]
    return dayString
}

let date = new Date(2017, 5, 19)
weekday(date);
weekday(new Date(2017, 5, 15));

// Get a snippet from text
function snippet(string, maxlength) {
  if (typeof string !== 'string' || typeof maxlength !== 'number') {
    return "Error: invalid input";
  }
  const str = string.substr(0, maxlength)
  if(string.length > maxlength) {
    const ellip = str.concat('...')
    return ellip
  }
  return str
}

snippet('For the following excercises,', 10);
snippet('Hello, world!', 20);

// Number of properties
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

function numProps(obj) {
  if (typeof obj !== 'object') {
    return "Error: invalid input";
  }
  const propCount = Object.keys(obj).length
  return propCount
}

numProps(friend)
numProps({})

// Filter between
function filterBetween(array, min, max) {
  if (typeof array !== 'object' || typeof min !== 'number' || typeof max !== 'number') {
    return "Error: invalid input";
  }
  let filteredArray = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] >= min && array[i] <= max) {
      filteredArray.push(array[i])
    }
  }
  return filteredArray
}

let arr = [1, 2, 3, 4, 5, 6, 7]
filterBetween(arr, 5, 10)

module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween
}
