import * as express from 'express'
const Raven = require('raven')
// import { connection } from './database/connect'
const app = express()

Raven.config('https://a2465449ea624f42ac28ade5df68ffe0:620853d383054857977debe629e96101@sentry.io/224389').install()

//#region Import routes
const users = require('./routes/users')
const index = require('./routes/index')
//#endregion

//#region Add Routes
app.use('/api/v1', index)
app.use('/api/v1/users', users)
//#endregion

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
//#endregion

//#region Database connection
app.use(function (req, res, next) {
  next()
})
//#endregion

// Enable server
export function connect() {
  Raven.requestHandler(),
  app.listen(9222, 'localhost', (err: any) => {
    if (err) {
      console.log(err)
      process.exit(1)
      return
    }

    console.log(`Server running at http://localhost:9222`)
  })
  Raven.errorHandler()
}
