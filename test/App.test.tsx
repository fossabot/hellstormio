import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../src/ui/app'
import { Dispatcher, AppStore } from '../src/lib/dispatcher'

const appStore: AppStore | null = null
const dispatcher: Dispatcher | null = null

// This tests only main component
it('renders without crashing', () => {
  const div = document.createElement('root')
  ReactDOM.render(<App dispatcher={dispatcher!} appStore={appStore!} />, div)
})
