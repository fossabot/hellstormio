import * as express from 'express'
// import { connection } from './database/connect'
const app = express()

//#region Import routes
const users = require('./routes/users')
const index = require('./routes/index')
const games = require('./routes/games')
const tag = require('./routes/tag')
//#endregion

//#region Add Routes
app.use('/api/v1', index)
app.use('/api/v1/users', users)
app.use('/api/v1/games', games)
app.use('/api/v1/tag', tag)
//#endregion

/*
//#region Webpack Configuration
const webpack = require('webpack')
const config = require('../../webpack.config.js')
const compiler = webpack(config)

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.mainConfig,
  }),
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.adminConfig,
  }),
)
//#endregion */

//#region Database connection
app.use(function (req, res, next) {
  next()
})
//#endregion

// Enable server
export function connect() {
  app.listen(9222, 'localhost', (err: any) => {
    if (err) {
      console.log(err)
      process.exit(1)
      return
    }

    console.log(`Server running at http://localhost:9222`)
  })
}
