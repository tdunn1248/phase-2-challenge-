const fs = require('fs')

fs.readFile('./clients.json', 'utf8', (err, data) => {
  if(err) throw err
  const content = JSON.parse(data)
  const state = process.argv[2].toString()
  content.forEach( (person) => {
    if (person.state == state)
    var client = {
      id : person.id,
      name : person.rep_name,
      company : person.company,
      city : person.city,
      state : person.state
    }
    if (!(client == undefined)) {
      console.log(client)
      return client
    }
  })
})
