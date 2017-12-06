import * as React from 'react'
import { NavBar } from './nav-bar'
import { Footer } from './footer'

export class App extends React.Component {
  public render() {
    return (
      <div id='root'>
        <NavBar />
        <Footer />
      </div>
    )
  }
}
