import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'

if (!process.env.TEST_ENV) {
  require('../../styles/hellstorm.scss')
}

ReactDOM.render(<App />, document.getElementById('admin'))
