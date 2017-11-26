import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'
import { Routers } from './routes'

if (!process.env.TEST_ENV) {
  require('../../styles/hellstorm.scss')
}

const routes = new Routers()

ReactDOM.render(
  <App routes={routes} />,
  document.getElementById('root')
)
