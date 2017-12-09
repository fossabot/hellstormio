import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../src/ui/app'

// This tests only main component
it('renders without crashing', () => {
  const div = document.createElement('root')
  ReactDOM.render(<App />, div)
})
