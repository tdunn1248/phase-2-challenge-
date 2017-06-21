const fs = require('fs')

fs.readFile('./clients.json', 'utf8', (err, data) => {
  if(err) throw err
  var search = process.argv[2].toString()
  const content = JSON.parse(data)
  content.forEach((data) => {
    search.charAt(0).toUpperCase()
    data.rep_name.toLowerCase()
    if(data.rep_name.startsWith(search)) {
      const client = {
        id : data.id,
        name : data.rep_name
      }
      console.log(client)
      return client
    }
  })
})
