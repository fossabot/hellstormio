'use strict'

const express = require('express')
const webpack = require('webpack')
const config = require('../webpack.config')
const server = express()
const compiler = webpack(config)
const port = process.env.PORT || 3000

server.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.mainConfig
  }),
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.adminConfig
  })
)

server.listen(port, 'localhost', err => {
  if (err) {
    console.log(err)
    process.exit(1)
    return
  }

  console.log(`Server running at http://localhost:${port}`)
})
