// Show a weekday
function weekday(date) {
  const dayNum = new Date(date).getDay()
  const weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayString = weekday[dayNum]
    return dayString
}

let date = new Date(2017, 5, 19)
weekday(date)
weekday(new Date(2017, 5, 15))

// Get a snippet from text
function snippet(string, maxlength) {
  const daString = string.substr(0, maxlength)
  if(string.length > maxlength) {
    const ellip = daString.concat('...')
    return ellip
  }
  return daString
}

let following = snippet('For the following excercises,', 10)
let helloWorld = snippet('Hello, world!', 20)

// Number of properties
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

function numProps(obj) {
  const propCount = Object.keys(obj).length
  return propCount
}

numProps(friend)
numProps({})

// Filter between
function filterBetween(array, min, max) {
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
