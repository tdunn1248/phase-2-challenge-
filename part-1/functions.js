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
