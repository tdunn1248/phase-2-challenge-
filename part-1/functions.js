// Show a weekday

function weekday(date) {
  const theDay = new Date(date).getDay()
  const weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const values = weekday[theDay]
    return values
}

let date = new Date(2017, 5, 19)
weekday(date)

weekday(new Date(2017, 5, 15))
