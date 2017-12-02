import * as express from 'express'
const app = express()

const port = 9223

app.get('/api/hello', function(req, res) {
  res.json({
    message: 'Hello World',
    user: 'JSON',
  })
})

app.listen(port, function() {
  console.log(`Server runnig on ${port}`)
})
