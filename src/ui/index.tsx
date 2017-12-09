import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'
import { Dispatcher, AppStore } from '../lib/dispatcher'

if (!process.env.TEST_ENV) {
  require('../../styles/hellstorm.scss')
}

const appStore = new AppStore()
const dispatcher = new Dispatcher(appStore)

ReactDOM.render(
  <App dispatcher={dispatcher} appStore={appStore} />,
  document.getElementById('root'),
)
