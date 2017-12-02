import * as express from 'express'

import { connection } from './database/connect'

const app = express()

const port = 9223

app.get('/api/hello', function(req, res) {
  res.json({
    message: 'Hello World',
    user: 'JSON',
  })

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9223')
})

connection.connect()

connection.query('SELECT * FROM `hellstorm_test`.`users`', function(error, results, fields) {
  if (error) {
    throw error
  }

  console.log('The solution is: ', results[1])
})

app.listen(port, function() {
  console.log(`Server runnig on ${port}`)
})
