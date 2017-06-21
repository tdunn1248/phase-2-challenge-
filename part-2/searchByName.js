const fs = require('fs')

fs.readFile('./clients.json', 'utf8', (err, data) => {
  if(err) throw err
  let firstName = process.argv[2].toString()
  let lastName = process.argv[3].toString()
  let fullName = firstName.concat(' ', lastName)
  const content = JSON.parse(data)
  content.forEach((data) => {
    if(fullName.includes(data.rep_name)) {
      const client = {
        id : data.id,
        name : data.rep_name
      }
      console.log(client)
      return client
    }
  })
})
