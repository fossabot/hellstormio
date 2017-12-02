import * as express from 'express'

import { connection } from './database/connect'

const app = express()
const port = 9223

app.get(`/api/v1/users`, function(req, res) {
  res.json({
    username: 'strigns'
  })
})

app.get('/api/hello', function(req, res) {
  res.json({
    message: 'Hello World',
    user: 'JSON',
  })
})

connection.connect()

connection.query('SELECT * FROM `hellstorm_test`.`users`', function(error, results, fields) {
  if (error) {
    throw error
  }

  console.log(results[0] + ' rows')
})

app.listen(port, function() {
  console.log(`Server runnig on ${port}`)
})
