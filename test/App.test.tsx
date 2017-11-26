import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../src/ui/App'
import { Routers } from '../src/ui/routes'

const routes: Routers | null = null

// This tests only main component
it('renders without crashing', () => {
  const div = document.createElement('root')
  ReactDOM.render(<App routes={routes!} />, div)
})
