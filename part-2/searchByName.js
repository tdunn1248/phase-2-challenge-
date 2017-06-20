const fs = require('fs')

fs.readFile('./clients.json', 'utf8', (err, data) => {
  if(err) throw err
  let searchName = process.argv[2]
  const content = JSON.parse(data)
  content.forEach((data) => {
    if(data.rep_name ===  searchName) {
      console.log('data-id->>', data.id)
      console.log('data-rep-name->>',data.rep_name)
    }
  })
})
